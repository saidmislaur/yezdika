import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Artefacts } from '../components/Artefacts/Artefacts';
import { Books } from '../components/Books/Books';
import { Card } from "../components/Card"
import { Folklore } from '../components/Folklore.js/Folklore';
import Footer from '../components/Footer/Footer';
import { Gallery } from '../components/Gallery/Gallery';
import Header from "../components/Header"


export default function Home() {
  const [posts, setPosts] = useState([]);
  const [folklorList, setFolklorList] = useState([]);
  const [artefactList, setArtefactList] = useState([]);
  const [galleryList, setGalleryList] = useState([]);
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const postsResponse = await axios.get('http://localhost:5050/posts');
      const folklorResponse = await axios.get('http://localhost:4000/folklor');
      const artefactResponse = await axios.get('http://localhost:5050/artefacts');
      const galleryResponse = await axios.get('http://localhost:5050/gallery');
      const booksResponse = await axios.get('http://localhost:4000/books');

      setPosts(postsResponse.data);
      setFolklorList(folklorResponse.data);
      setArtefactList(artefactResponse.data);
      setGalleryList(galleryResponse.data);
      setBooksList(booksResponse.data);
    }
    fetchData();
  }, []);

  console.log(posts)

  return (
    <>
    <Head>
      <title>Йездика</title>
    </Head>
      <div className="section">
      <div>
        <Header />
        <div className="mainVideo">
            <img src="./img/main-logo.png" alt="Logo"/>
            <div className="mainVideo_title">
              <span>История Ингушетии</span>
              <h1>Материалы по истории и этнографии Ингушетии</h1>
            </div>
        </div>
        <div className="articles">
          <div className="container">
            <h1 className="articles_title">Статьи</h1>
            <div className="articles_card">
              <Card posts={posts} />
            </div>
            <div className="articles_button">
            <button className={`button red`}>смотреть все
              <img src="./img/arrow.svg" alt="arr"/>
            </button>
            </div>
          </div>
        </div>
        <Folklore lists={folklorList}/>
        <Artefacts lists={artefactList}/>
        <Gallery lists={galleryList}/>
        <Books lists={booksList}/>
        <Footer />
      </div>
    </div>
    </>

  )
}
