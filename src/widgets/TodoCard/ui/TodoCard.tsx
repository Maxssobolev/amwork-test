import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import classes from './TodoCard.module.scss';
import { Todo } from 'shared/types/todos.interface';
import { ToggleTask } from 'features/ToggleTask';
import {faker} from '@faker-js/faker'
import { ShowTags } from 'features/ShowTags';
import { getRandomFrom } from 'shared/lib/helpers/getRandomFrom';
import { ShowAvatar } from 'features/ShowAvatar';

interface TodoCardProps extends Todo{
    className?: string;
}

export const TodoCard: FC<TodoCardProps> = ({className, title, completed, id, userId}) => {

  const department = getRandomFrom(['Front-end', 'Back-end'])
  const entity = getRandomFrom(['User', 'Product', 'Comment'])
  const desc = faker.commerce.productDescription()
  const [startDate, endDate] = faker.date.betweens({ from: '2023-01-01T00:00:00.000Z', to: '2023-06-30T00:00:00.000Z', count: 2 }) 
  const dateOpt = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true } as Intl.DateTimeFormatOptions;


  return (
    <div className={classes.TodoCardWrapper}>
      <div className={classNames(classes.TodoCard, {}, [className])}>
        <div className={classes.titleWrapper}>
          <ToggleTask completed={completed} onChange={() => {}}/>
          <span className={classes.title}>{title}</span>
        </div>
        <div className={classes.dates}>
          <span>{startDate.toLocaleString('en-US', dateOpt)}</span>
          <span>{endDate.toLocaleString('en-US', dateOpt)}</span>
        </div>
        <div className={classes.desc}>
          {desc}
        </div>
        <div className={classes.footerWrapper}>
          <ShowTags tags={{entity, department}}/>
          <ShowAvatar src='/img/img.png'/>
        </div>
      </div>
    </div>
  );
}