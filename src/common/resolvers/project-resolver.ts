import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod';
import { fieldErrorMessages } from '.';
import { fileToBase64 } from '../utils/fileToBase64';

const crupdateProjectValidator = zod.object({
  name: zod.string().min(4),
  description: zod.string().min(4),
  targetAmount: zod
    .any()
    .refine(data => data.length > 0, { message: fieldErrorMessages.required })
    .refine(data => /^\d/.test(data), { message: fieldErrorMessages.number_only }),
  deadline: zod.string().min(1, { message: fieldErrorMessages.required }),
  logo: zod
    .any()
    .transform(data => data as File[])
    .refine(files => files.length === 1, { message: 'You should upload one file.' })
    .transform(files => files[0])
    .refine(file => file.type && file.type.startsWith('image/'))
    .transform(file => fileToBase64(file)),
});

export const crupdateProjectResolver = zodResolver(crupdateProjectValidator);

export type TCrupdateProjectForm = zod.infer<typeof crupdateProjectValidator>;
