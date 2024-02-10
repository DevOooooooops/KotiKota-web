import { IconType } from 'react-icons';
import { BsSquare } from 'react-icons/bs';

export const SquareProgress: IconType = ({ className, ...others }) => (
  <span className={className}>
    <BsSquare className={`animate-spin origin-center text-primary`} {...others} />
  </span>
);
