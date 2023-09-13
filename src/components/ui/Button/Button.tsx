import './Button.css';

import { FC } from 'react';

type Props = {
  style: 'primary-btn' | 'secondary-btn';
  text: string;
};

export const Button: FC<Props> = ({ style, text }) => {
  return <button className={style}>{text}</button>;
};
