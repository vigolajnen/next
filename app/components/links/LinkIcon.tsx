import Image from 'next/image';
import React from 'react';
import style from './styles.module.css';

export default function LinkIcon({
  icon,
  text,
  href
}: {
  icon: string;
  text: string;
  href: string;
}) {
  return (
    <a
      className={style.link}
      href={href}
      target="_blank"
      rel="noopener noreferrer">
      <span>{text}</span>
      <Image src={icon} alt="" width={300} height={200} />
    </a>
  );
}
