import React from 'react'
import Link from 'next/link';
import styles from '../../styles/footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_logo}>
                <img src="./img/logo.png" alt="Logo"/>
            </div>
            <div className={styles.footer_nav}>
                <nav>
                    <ul>
                        <li>
                            <Link href='/'>
                                <a>Главная</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a>Галерея</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a>Статьи</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a>Литература</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a>Фольклор</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a>Документы</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <a>Артефакты</a>
                            </Link>
                        </li>
                        <li className={styles.footer_nav__confidentiality}>Политика конфидициальности</li>
                    </ul>
                </nav>
            </div>
            <div className={styles.footer_social}>
                <h4>Мы в сети</h4>
                <ul>
                    <li>
                        <a hraf="#">
                            <img src="./img/Twitter.svg" />
                        </a>
                    </li>
                    <li>
                        <a hraf="#">
                            <img src="./img/Inst.svg" />
                        </a>
                    </li>
                    <li>
                        <a hraf="#">
                            <img src="./img/youtube.svg" />
                        </a>
                    </li>  
                    <li> 
                        <a hraf="#">
                            <img src="./img/Tumblr.svg" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
