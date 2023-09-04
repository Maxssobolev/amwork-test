import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import classes from './Checkbox.module.scss';

interface CheckboxProps {
    className?: string;
}

export const Checkbox: FC<CheckboxProps> = ({className}) => {

  return (
    <div className={classNames(classes.Checkbox, {}, [className])}> </div>
  );
}