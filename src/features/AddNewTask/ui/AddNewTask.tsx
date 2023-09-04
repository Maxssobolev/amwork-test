import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import classes from './AddNewTask.module.scss';
import { AddNewBtn } from 'shared/ui/AddNewBtn/AddNewBtn';

interface AddNewTaskProps {
    className?: string;
}

export const AddNewTask: FC<AddNewTaskProps> = ({className}) => {

  return (
    <AddNewBtn className={classNames(classes.AddNewTask, {}, [className])} />
  );
}