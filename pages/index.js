import Head from 'next/head';
import { Artefacts } from '../components/Artefacts/Artefacts';
import { Books } from '../components/Books/Books';
import { Button } from "../components/button"
import { Card } from "../components/Card"
import { Folklore } from '../components/Folklore.js/Folklore';
import Footer from '../components/Footer/Footer';
import { Gallery } from '../components/Gallery/gallery';
import Header from "../components/Header"
// import Link from 'next/link';
// import Router from "next/router";

export default function Home() {
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
            <div className="articles">
              <div className="container">
                <h1 className="articles_title">Статьи</h1>
                <div className="articles_card">
                  <Card image={'./img/card1.jpg'} title='Почему ингушей считали самым опасным народом Кавказа' data=''/>
                  <Card image={'./img/card2.jpg'} title='Ингушетия. Таргимские храмы'/>
                  <Card image={'./img/card3.jpg'} title='Почему ингушей считали самым опасным народом Кавказа'/>
                  <Card image={'./img/card1.jpg'} title='Почему ингушей считали самым опасным народом Кавказа' data=''/>
                  <Card image={'./img/card2.jpg'} title='Ингушетия. Таргимские храмы Ингушетия'/>
                  <Card image={'./img/card3.jpg'} title='Ингушетия. Таргимские храмы'/>
                </div>
                <div className="articles_button">
                  <Button text="Все статьи"/>
                </div>
              </div>
            </div>
            <Folklore />
            <Artefacts />
            <Gallery />
            <Books />
            <Footer />
        </div>
      </div> 
    </div>
    </>
    
  )
}
