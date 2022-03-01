import React from 'react';
import Image from 'next/image';

import Link from '@components/link/link';
import logo from 'public/bicad.svg';
import {HEADER} from '@constants/links';

import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo}/>
      </div>
      <div className={styles.links}>
        {HEADER.map(link => <Link key={link.url} text={link.title} url={link.url} className={styles.link}/>)}
      </div>
      <div className={styles.language}>
        <Link url="/" text="ENG" className={styles.languageLink}/>
      </div>
    </header>
  );
}
