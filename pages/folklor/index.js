import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import Header from "../../components/Header"
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/button";
import axios from 'axios';

export default function Articles() {
    const articleImg = "./img/articleImg.jpg";
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const postsResponse = await axios.get('http://localhost:4000/posts');
            setPosts(postsResponse.data);
        }
        fetchData()
    }, [])

    return (
        <div className="articlesPage">
            <Header />
            <TitleBlock title="Фольклор" articleImg={articleImg}/>
            <div className="articles">
                <div className="container">
                    <div className="articles_card">
                        {posts.map((item) => (
                            <Link key={item.id} href={`folklor/${item.id}`}>
                                <a>
                                    <div className="card" >
                                        <img src={item.image} alt="Logo" />
                                        <div className="card_text">
                                            <h2>{item.title}</h2>
                                            <p>
                                            {item.text.length > 250 ? `${item.text.substring(0, 200)}...` : item.text}
                                            </p>
                                            <span>{item.published}</span>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="buttonPag">
                <Button text='предыдущая страница' classes='prev'/>
                <Button text='следующая страница' classes='next'/>
            </div>
            <Footer/>
        </div>
    )
}