import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod';
import { fileToBase64 } from '../utils';

const profileValidator = zod.object({
  email: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string().min(1, { message: 'Last name is required.' }),
  birthDate: zod.string(),
  profilePicture: zod
    .any()
    .transform(data => data as File[])
    .refine(files => files.length === 1, { message: 'You should upload one file.' })
    .transform(files => files[0])
    .refine(file => file.type && file.type.startsWith('image/'))
    .transform(file => fileToBase64(file)),
});

export const profileResolver = zodResolver(profileValidator);

export type TProfileInput = zod.infer<typeof profileValidator>;
