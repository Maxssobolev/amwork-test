import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import classes from './ToggleTask.module.scss';

interface ToggleTaskProps extends ButtonHTMLAttributes<HTMLInputElement>{
    className?: string;
    completed: boolean;
}

export const ToggleTask: FC<ToggleTaskProps> = ({className, completed, onChange = () => {}}) => {

  return (
    <input type='checkbox' className={classNames(classes.ToggleTask, {}, [className])} checked={completed} onChange={onChange} /> 
  );
}