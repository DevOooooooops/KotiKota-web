import { FC, useState } from 'react';
import { FaEye as FaEyeIcon, FaEyeSlash as FaEyeSlashIcon } from 'react-icons/fa';
import { PasswordInputProps } from './types';
import { RHFTextInput } from './RHFTextInput';

export const RHFPasswordInput: FC<PasswordInputProps> = props => {
  const [isVisible, setIsVisible] = useState(false);

  const icon = isVisible ? <FaEyeIcon /> : <FaEyeSlashIcon />;
  const type = isVisible ? 'text' : 'password';

  const toggleVisibility = () => setIsVisible(value => !value);

  return <RHFTextInput type={type} {...props} endIcon={<span className='cursor-pointer'>{icon}</span>} onClickEndIcon={toggleVisibility} />;
};
