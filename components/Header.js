import React, {useState} from 'react';
import Link from 'next/link';
import HeaderMenu from './HeaderMenu';



export default function Header() {
   const [menuActive, setMenuActive] = useState(false);

   const menu = [
      {
         text: "Статьи",
         page: "articles"
      },
      {
         text: "Фольклор",
         page: "folklor"
      },
      {
         text: "Артефакты",
         page: "artefacts"
      },
      {
         text: "Галерея",
         page: "gallery"
      },
      {
         text: "Литература",
         page: "books"
      },
      {
         text: "Документы",
         page: "documents"
      },
   ];
   return (
      <div className='header'>
         <div className="header_logo">
            <Link href='/'>
               <img src="/img/logo.png" alt="Logo"/>
            </Link>
         </div>
         <div className="header_nav">
            <nav>
               <ul>
                  <li>
                     <Link href="/">
                        <a>Главная</a>
                     </Link>
                  </li>
                  {
                     menu.map((item) => (
                        <li key={item}>
                           <Link href={`/${item.page}`}>
                              <a>{item.text}</a>
                           </Link>
                        </li>
                     ))
                  }
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