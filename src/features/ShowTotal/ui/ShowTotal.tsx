import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import classes from './ShowTotal.module.scss';

interface ShowTotalProps {
  className?: string;
  total: number;
}

export const ShowTotal: FC<ShowTotalProps> = ({className, total}) => {

  return (
    <div className={classNames(classes.ShowTotal, {}, [className])}>{total}</div>
  );
}