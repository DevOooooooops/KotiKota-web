import { ProjectStatus } from '@/provider/client';

export const getColorBy = {
  projectStatus(status?: ProjectStatus) {
    switch (status) {
      case ProjectStatus.CLOSE:
        return 'badge-error text-white';
      case ProjectStatus.OPEN:
        return 'badge-success text-white';
      default:
        return '';
    }
  },
};
