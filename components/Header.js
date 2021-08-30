import Link from 'next/link';



export default function Header() {
   return (
      <div className='header'>
         <div className="header_logo">
            <img src="./img/logo.png" alt="Logo"/>
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
                     <Link href='#'>
                        <a>Статьи</a>
                     </Link>
                  </li>
                  <li>
                     <Link href='#'>
                        <a>Фольклор</a>
                     </Link>
                  </li>
                  <li>
                     <Link href='#'>
                        <a>Артефакты</a>
                     </Link>
                  </li>
                  <li>
                     <Link href='#'>
                        <a>Литература</a>
                     </Link>
                  </li>
                  <li>
                     <Link href='#'>
                        <a>Документы</a>
                     </Link>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   )
}