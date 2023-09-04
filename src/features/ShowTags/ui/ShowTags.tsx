import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import classes from './ShowTags.module.scss';

interface ShowTagsProps {
    className?: string;
    tags: {
        entity: string,
        department: string
    }
}

export const ShowTags: FC<ShowTagsProps> = ({className, tags: {entity, department}}) => {

  return (
    <div className={classNames(classes.ShowTags, {}, [className])}>
      <span className={classes.entityTag}>{entity}</span>
      <span className={classes.departmentTag}>{department}</span>
    </div>
  );
}