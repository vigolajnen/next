import React from 'react';
import style from './styles.module.css';
export default function CardTag({
  text,
  color = '#6e6e6e'
}: Props): JSX.Element {
  return (
    <div className={style.tag} style={{ color: color }}>
      {text}
    </div>
  );
}

interface Props {
  text: string;
  color?: string;
}
