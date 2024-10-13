import React from 'react';
import style from './styles.module.css';
import Image from 'next/image';
export default function Likes({ count }: { count: number }): JSX.Element {
  return (
    <div className={style.likes}>
      <span>{count}</span>
      <Image src="/images/icons/like.svg" alt="" width={15} height={15} />
    </div>
  );
}
