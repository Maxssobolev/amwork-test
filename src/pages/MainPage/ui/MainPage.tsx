import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import classes from './MainPage.module.scss';
import { TodoColumn } from 'widgets/TodoColumn';

interface MainPageProps {
    className?: string;
}

export const MainPage: FC<MainPageProps> = ({className}) => {

  return (
    <div className={classNames(classes.MainPage, {}, [className])}>
      <TodoColumn />
    </div>
  );
}