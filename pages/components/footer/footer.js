import React from 'react';
import Image from 'next/image'

import facebook from 'public/fb-link.svg';
import twitter from 'public/tw-link.svg';
import instagram from 'public/inst-link.svg';
import linkedin from 'public/in-link.svg';
import vk from 'public/vk-link.svg';
import youtube from 'public/yt-link.svg';

import styles from './footer.module.css';
import Link from '@components/link/link';

export default function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.footerIcons}>
                    <Image src={facebook} alt="Vercel Logo" />
                    <Image src={twitter} alt="Vercel Logo" />
                    <Image src={instagram} alt="Vercel Logo" />
                    <Image src={linkedin} alt="Vercel Logo" />
                    <Image src={vk} alt="Vercel Logo" />
                    <Image src={youtube} alt="Vercel Logo" />
                </div>
                <div className={styles.footerLinks}>
                    <Link url="/" text="Курс на выздоровление" className={styles.link}/>
                    <Link url="/" text="Студентам" className={styles.link}/>
                    <Link url="/" text="Безопасность препаратов" className={styles.link}/>
                    <Link url="/" text="Коммерческая политика" className={styles.link}/>
                    <Link url="/" text="Политика в отношении обработки ПДн" className={styles.link}/>
                    <Link url="/" text="Пользовательское соглашение" className={styles.link}/>
                    <Link url="/" text="Использование файлов Cookie" className={styles.link}/>
                    <Link url="/" text="Антикоррупционая политика" className={styles.link}/>
                    <Link url="/" text="Политика по качеству" className={styles.link}/>
                </div>
            </div>
            <hr className={styles.divider}/>
            <div className={styles.copyright}>
                <span>Copyright © 2001-2021</span>
            </div>
        </footer>
    )
}
