import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import classes from './ShowAvatar.module.scss';

interface ShowAvatarProps {
    className?: string;
    src: string;
}

export const ShowAvatar: FC<ShowAvatarProps> = ({className, src}) => {

  return (
    <div className={classNames(classes.ShowAvatar, {}, [className])}>
      <img src={src} alt=''/>
    </div>
  );
}