import Image from 'next/image';
import React from 'react';
import style from './styles.module.css';
import Link from 'next/link';

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
    <Link
      className={style.link}
      href={href}
      target="_blank"
      rel="noopener noreferrer">
      <span>{text}</span>
      <Image src={icon} alt="" width={300} height={200} />
    </Link>
  );
}
