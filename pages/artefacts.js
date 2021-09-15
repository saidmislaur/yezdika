import Head from 'next/head';
import Header from '../components/Header';
import TitleBlock from '../components/TitleBlock/TitleBlock';
import { ArtefactsCard } from '../components/Artefacts/ArtefactsCard';
import Button from '../components/button';
import Footer from '../components/Footer/Footer';
export default function Gallery()  {
    const articleImg = "./img/articleImg.jpg";
    return (
        <div className="artefactsPage">
            <Head>
                <title>Артефакты</title>
             </Head>
            <Header />
            <TitleBlock title="Артефакты Ингушетии" articleImg={articleImg}/>
            <div className="artefactsPage_content">
                <ArtefactsCard 
                    stylePage="widthHeight"
                    image="./img/artefactsPage/Rectangle 150.png" 
                    title="Металлическая ваза «буккеро» Предположительно VII в. до н. э." 
                    text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1 см. Д.дна-11,4 см"
                />
                <ArtefactsCard 
                    stylePage="widthHeight"
                    image="./img/artefactsPage/Ellipse 26.png" 
                    title="Металлическая ваза «буккеро» Предположительно VII в. до н. э." 
                    text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1 см. Д.дна-11,4 см"
                />
                <ArtefactsCard 
                    stylePage="widthHeight"
                    image="./img/artefactsPage/Rectangle 86.png" 
                    title="Металлическая ваза «буккеро» Предположительно VII в. до н. э." 
                    text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1 см. Д.дна-11,4 см"
                />
                <ArtefactsCard
                    stylePage="widthHeight" 
                    image="./img/artefactsPage/Rectangle 86.png" 
                    title="Металлическая ваза «буккеро» Предположительно VII в. до н. э." 
                    text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1 см. Д.дна-11,4 см"
                />
                <ArtefactsCard
                    stylePage="widthHeight" 
                    image="./img/artefactsPage/Rectangle 86 (1).png" 
                    title="Металлическая ваза «буккеро» Предположительно VII в. до н. э." 
                    text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1 см. Д.дна-11,4 см"
                />
                <ArtefactsCard
                    stylePage="widthHeight" 
                    image="./img/artefactsPage/Ellipse 27.png" 
                    title="Металлическая ваза «буккеро» Предположительно VII в. до н. э." 
                    text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1 см. Д.дна-11,4 см"
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