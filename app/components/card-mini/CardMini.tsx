import React from 'react';
import style from './styles.module.css';

import Image from 'next/image';
import Tag from '../tag/Tag';
import Likes from '../likes/Likes';
import LinkIcon from '../links/LinkIcon';

export default function CardMini(): JSX.Element {
  return (
    <section className={style.wrapper}>
      <Image
        src="/images/mini.jpg"
        alt=""
        width={300}
        height={200}
        className={style.image}
      />
      <div className={style.content}>
        <div className={style.tags}>
          <Tag text="Front-end" color="#4b4b4b" />
          <Tag text="1 месяц назад" />
        </div>
        <Likes count={3} />
        <h3 className={style.title}>Как работать с CSS Grid</h3>
        <p>
          Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему
          сеток в CSS. Гриды подойдут и для верстки основных областей страницы..
        </p>
      </div>
      <div className={style.footer}>
        <Tag text="3 минуты" />
        <LinkIcon text="Читать" icon="/images/icons/arrow.svg" href="" />
      </div>
    </section>
  );
}
