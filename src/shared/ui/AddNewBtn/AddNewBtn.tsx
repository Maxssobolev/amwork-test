import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import classes from './AddNewBtn.module.scss';

interface AddNewBtnProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
}

export const AddNewBtn: FC<AddNewBtnProps> = ({className, ...otherProps }) => {

  return (
    <button {...otherProps} className={classNames(classes.AddNewBtn, {}, [className])}>
      <div className={classes.plus}></div>
    </button>
  );
}