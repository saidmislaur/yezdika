import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import Button from '../../components/button';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import Link from 'next/link';

export default function Artefacts(stylePage)  {
    const [artefact, setArtefactList] = useState([]);
    const articleImg = "./img/articleImg.jpg";

    useEffect(() => {
        async function fetchData() {
          const folklorResponse = await axios.get('http://localhost:4000/artefacts');
          setArtefactList(folklorResponse.data);
        }
        fetchData();
      }, []);

      const test = (id) => {
          alert(id)
      }
    return (
        <div className="artefactsPage">
            <Head>
                <title>Артефакты</title>
             </Head>
            <Header />
            <TitleBlock title="Артефакты Ингушетии" articleImg={articleImg}/>
            <div className="artefactsPage_content">
            {
                artefact.map((item, index) => (
                    <Link key={item + index} href='#'>
                        <a>
                            <div key={item + index} className={`artefacts_artefactsCard artefacts_artefactsCard-${stylePage}`}>
                                <img src={item.image} onClick={() => test(item.id)}/>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </a>
                    </Link>
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