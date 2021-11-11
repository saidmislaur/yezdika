import Head from 'next/head';
import React, {useState, useEffect} from 'react'
import Header from '../../components/Header';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import Button from '../../components/button';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';

export default function Gallery()  {
    const [images, setImages] = useState([]);
    const articleImg = "./img/articleImg.jpg";

    useEffect(() => {
        async function fetchData() {
            const imagesRes = await axios.get(`http://localhost:4000/gallery`);
            setImages(imagesRes.data)
        }
        fetchData();
    }, [])
    return (
        <div className="galleryPage">
            <Head>
                <title>Галерея</title>
             </Head>
            <Header />
            <TitleBlock title="Галерея" articleImg={articleImg}/>
            <div className="galleryPage_content">
                {
                    images.map((item, index) => (
                        <div key={item.id + index} className={`gallery_card gallery_card-heigth`}>
                            <img src={item.image} alt="asd" />
                            <p>{item.text}</p>
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