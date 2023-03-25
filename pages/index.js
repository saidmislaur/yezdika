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
  const [posts, setPosts] = useState([
    {
      pathImages: 'card1.jpg',
      title: 'жизнь после...',
      text: 'После смерти жены Тони несколько раз хочет покончить жизнь самоубийством, но каждый раз его останавливает мысль о том, что некому будет позаботиться о его собаке. В итоге мужчина принимает решение жить дальше: делать всё, что хочется, не думая о последствиях. Теперь он больше не хороший парень, каким был когда-то, поэтому друзья и близкие пытаются его вернуть.'
    },
    {
      pathImages: 'card2.jpg',
      title: 'История цивилизации',
      text: 'А что как вовсе нет времён И мир — действительный как будто — Не в самом деле сотворён, А просто кажется кому-то?Возможно, мнится Новый год. И снег в чуднóм круженье этом Не явно, может быть, идёт, А лишь воображаем кем-то. И чувства в призрачной груди Несуществующе теснятся,   Все лица, связи и пути  Пригрезились кому-то, снятся.'
    },
    {
      pathImages: 'BeatlesMainW.jpg',
      title: 'The Beatles',
      text: 'The Beatles — британская рок-группа из Ливерпуля, основанная в 1960 году, в составе которой играли Джон Леннон, Пол Маккартни, Джордж Харрисон и Ринго Старр. Также в разное время в составе группы выступали Стюарт Сатклифф, Пит Бест и Джимми Никол'
    },
  ]);
  const [folklorList, setFolklorList] = useState([
    {
      pathImages: 'folklor1.jpg',
      text: 'История народов'
    },
    {
      pathImages: 'folklor2.jpg',
      text: 'История народов'
    },
    {
      pathImages: 'folklor3.jpg',
      text: 'История народов'
    },
    {
      pathImages: 'folklor1.jpg',
      text: 'История народов'
    },
    {
      pathImages: 'folklor2.jpg',
      text: 'История народов'
    },
    {
      pathImages: 'folklor2.jpg',
      text: 'История народов'
    },
  ]);
  const [artefactList, setArtefactList] = useState([
    {
      pathImages: 'Ellipse17.jpg',
      title: 'Металлическая ваза «буккеро» Предположительно VII в. до н. э.',
      text: 'Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1см. Д.дна-11,4 см'
    },
    {
      pathImages: 'Ellipse18.jpg',
      title: 'Металлическая ваза «буккеро» Предположительно VII в. до н. э.',
      text: 'Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1см. Д.дна-11,4 см'
    },
    {
      pathImages: 'Ellipse19.jpg',
      title: 'Металлическая ваза «буккеро» Предположительно VII в. до н. э.',
      text: 'Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1см. Д.дна-11,4 см'
    },
    {
      pathImages: 'Ellipse17.jpg',
      title: 'Металлическая ваза «буккеро» Предположительно VII в. до н. э.',
      text: 'Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1см. Д.дна-11,4 см'
    },
    {
      pathImages: 'Ellipse18.jpg',
      title: 'Металлическая ваза «буккеро» Предположительно VII в. до н. э.',
      text: 'Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1см. Д.дна-11,4 см'
    },
  ]);
  const [galleryList, setGalleryList] = useState([
    {
      pathImages: 'Folklor1.jpg'
    },
    {
      pathImages: 'Folklor2.jpg'
    },
    {
      pathImages: 'Folklor3.jpg'
    },
    {
      pathImages: 'Folklor1.jpg'
    },
    {
      pathImages: 'Folklor2.jpg'
    },
    {
      pathImages: 'Folklor3.jpg'
    },
    {
      pathImages: 'Folklor1.jpg'
    },
    {
      pathImages: 'Folklor2.jpg'
    },
  ]);
  const [booksList, setBooksList] = useState([]);


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
        {/* <Books lists={booksList}/> */}
        <Footer />
      </div>
    </div>
    </>

  )
}
