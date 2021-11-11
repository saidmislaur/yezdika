import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import Button from '../../components/button';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';

export default function Folklor()  {
    const [books, setBook] = useState([]);
    const articleImg = "./img/articleImg.jpg";
    useEffect(() => {
        async function fetchData() {
            const bookResponse = await axios.get(`http://localhost:4000/books`);
            setBook(bookResponse.data);
        }
        fetchData();
    }, [])
    return (
        <div className="literaturePage">
            <Head>
                <title>Литература</title>
             </Head>
            <Header />
            <TitleBlock title="Литература" articleImg={articleImg}/>
            <div className='literaturePage_content'>
                { 
                    books.map((item, index) => (
                        <div key={item.id + index} className="books_card">
                            <img src='./img/book1.jpg' alt="bookImg" />
                            <div className="books_info">
                            <span className="books_name">{item.name}</span>
                            <span className="books_author">Автор: {item.author}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="buttonPag">
                <Button text='предыдущая страница' classes='prev'/>
                <Button text='следующая страница' classes='next'/>
            </div>
            <Footer />
        </div>
    )
}