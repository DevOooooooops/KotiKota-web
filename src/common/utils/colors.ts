import { ProjectHealth, ProjectStatus } from '@/provider/client';

export const getColorBy = {
  projectStatus(status?: ProjectStatus) {
    switch (status) {
      case ProjectStatus.CLOSE:
        return 'bg-red-100 text-error';
      case ProjectStatus.OPEN:
        return 'bg-green-100  text-success';
      default:
        return '';
    }
  },
  projectHealth(health?: ProjectHealth) {
    switch (health) {
      case ProjectHealth.FAILED:
        return 'bg-red-100 text-error';
      case ProjectHealth.IN_PROGRESS:
        return 'bg-yellow-100 text-warning';
      default:
        return '';
    }
  },
};
