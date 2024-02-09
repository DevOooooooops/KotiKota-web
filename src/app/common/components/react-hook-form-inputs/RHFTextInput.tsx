'use client';
import { FC, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputProps } from './types';

export const RHFTextInput: FC<InputProps> = props => {
  const { label, name, disabled, endIcon, startIcon, onClickEndIcon, className, hideLabel = false, containerClassName, ...others } = props;
  const { formState, register } = useFormContext();
  const labelContainer = useRef<HTMLDivElement>(null);
  const error = formState.errors[name];

  return (
    <label className={`form-control my-3 w-full ${containerClassName}`}>
      {!hideLabel && (
        <div className={`${!error ? 'text-error' : 'text-neutral'} label`} ref={labelContainer}>
          <span className='label-text'>{label}</span>
        </div>
      )}
      <div className='relative w-fit'>
        <div className='relative'>
          <input
            {...others}
            {...register(name)}
            placeholder={label}
            disabled={disabled}
            className={`input input-bordered focus:outline-none bg-slate-200 ${
              error ? 'border-error focus:border-error' : 'focus:border-none border-none'
            } w-full max-w-xs ${endIcon && 'pr-10'} ${startIcon && 'pl-10'} ${className}`}
          />

          {!!startIcon && <span className={`absolute top-1/2 -translate-y-1/2 left-4 ${error && 'text-error'}`}>{startIcon}</span>}
          {!!endIcon && (
            <span onClick={onClickEndIcon} className={`absolute top-1/2 -translate-y-1/2 right-4 ${error && 'text-error'}`}>
              {endIcon}
            </span>
          )}
        </div>
        {error && (
          <div className='label'>
            <span className='label-text-alt text-error'>{error?.message?.toString()}</span>
          </div>
        )}
      </div>
    </label>
  );
};
