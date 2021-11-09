import React from 'react'
import styles from '../../styles/admin.module.scss'
import Link from 'next/link'

const menu = [
    {
       text: "Статьи",
       link: ""
    },
    {
       text: "Фольклор",
       link: "folklors"
    },
    {
       text: "Артефакты",
       link: "artefacts"
    },
    {
       text: "Галерея",
       link: "galery"
    },
    {
       text: "Литература",
       link: "books"
    },
    {
       text: "Документы",  
       link: "documents"
    },
];

const Sidebar = () => {
    return (
        <div className={styles.topbar_sidebar}>
            <nav>
                <h1>Категории</h1>
                <ul>
                    {menu.map((item) => (
                        <Link key={item.text} href={`/admin/${item.link}`}>
                            <li>
                                <a>{item.text}</a>
                            </li>  
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
