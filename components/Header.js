import React, {useState} from 'react';
import Link from 'next/link';
import HeaderMenu from './HeaderMenu';



export default function Header() {
   const [menuActive, setMenuActive] = useState(false)
   return (
      <div className='header'>
         <div className="header_logo">
            <Link href='/'>
               <img src="./img/logo.png" alt="Logo"/>
            </Link>
         </div>
         <div className="header_nav">
            <nav>
               <ul>
               <li>
                     <Link href='/'>
                        <a>Главная</a>
                     </Link>
                  </li>
                  <li>
                     <Link href='/articles'>
                        <a>Статьи</a>
                     </Link>
                  </li>
                  <li>
                     <Link href='/folklor'>
                        <a>Фольклор</a>
                     </Link>
                  </li>
                  <li>
                     <Link href='/artefacts'>
                        <a>Артефакты</a>
                     </Link>
                  </li>
                  <li>
                     <Link href='/gallery'>
                        <a>Галерея</a>
                     </Link>
                  </li>
                  <li>
                     <Link href='/literature'>
                        <a>Литература</a>
                     </Link>
                  </li>
                  <li>
                     <Link href='/documents'>
                        <a>Документы</a>
                     </Link>
                  </li>
               </ul>
            </nav>
         </div>
         <div className="header_burger" onClick={() => setMenuActive(true)}>
            <div className="header_burger__btn">
               <span />
            </div>
         </div>
         <HeaderMenu active={menuActive} setActive={setMenuActive}/>
      </div>
   )
}