import Head from 'next/head';
import Header from '../components/Header';
import TitleBlock from '../components/TitleBlock/TitleBlock';
import Button from '../components/button';
import Footer from '../components/Footer/Footer';
import { Card } from '../components/Card';
import BooksCard from '../components/Books/BooksCard';
export default function Folklor()  {
    const articleImg = "./img/articleImg.jpg";
    return (
        <div className="literaturePage">
            <Head>
                <title>Литература</title>
             </Head>
            <Header />
            <TitleBlock title="Литература" articleImg={articleImg}/>
            <div className='literaturePage_content'>
                <BooksCard 
                    image="./img/booksPage/Rectangle 115.png" 
                    name="История Ингушского народа" 
                    author="Автор: Н.Д. Кодзоев"
                />
                <BooksCard 
                    image="./img/booksPage/Rectangle 116.png"
                    name="Ингуши" 
                    author="Автор: Н.Д. Кодзоев"
                />
                <BooksCard 
                   image="./img/booksPage/Rectangle 118.png"
                    name="Ингуши и их соседи" 
                    author="Автор: Н.Д. Кодзоев"
                />
                <BooksCard 
                    image="./img/book1.jpg" 
                    name="Ингушский нартский эпос" 
                    author="Автор: Н.Д. Кодзоев"
                />
                <BooksCard 
                   image="./img/booksPage/Rectangle 115.png"
                    name="История Ингушского народа" 
                    author="Автор: Н.Д. Кодзоев"
                />
                <BooksCard 
                   image="./img/booksPage/Rectangle 116.png"
                    name="Ингушский нартский эпос" 
                    author="Автор: Н.Д. Кодзоев"
                />
                <BooksCard 
                    image="./img/booksPage/Rectangle 118.png"
                    name="Ингуши" 
                    author="Автор: Н.Д. Кодзоев"
                />
                <BooksCard 
                    image="./img/book1.jpg" 
                    name="Ингуши и их соседи" 
                    author="Автор: Н.Д. Кодзоев"
                />
            </div>
            <div className="buttonPag">
                <Button text='предыдущая страница' classes='prev'/>
                <Button text='следующая страница' classes='next'/>
            </div>
            <Footer />
        </div>
    )
}