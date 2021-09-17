import Head from 'next/head';
import Header from '../components/Header';
import TitleBlock from '../components/TitleBlock/TitleBlock';
import Button from '../components/button';
import Footer from '../components/Footer/Footer';
import { Card } from '../components/Card';
export default function Folklor()  {
    const articleImg = "./img/articleImg.jpg";
    return (
        <div className="folklorPage">
            <Head>
                <title>Артефакты</title>
             </Head>
            <Header />
            <TitleBlock title="Фольклор" articleImg={articleImg}/>
            <div className='folklorPage_content'>
                <div className="container">
                    <div className="articles_card">
                        <Card image={'./img/card1.jpg'} title='Почему ингушей считали самым опасным народом Кавказа' data=''/>
                        <Card image={'./img/card2.jpg'} title='Ингушетия. Таргимские храмы'/>
                        <Card image={'./img/card3.jpg'} title='Почему ингушей считали самым опасным народом Кавказа'/>
                        <Card image={'./img/card1.jpg'} title='Почему ингушей считали самым опасным народом Кавказа' data=''/>
                        <Card image={'./img/card2.jpg'} title='Ингушетия. Таргимские храмы Ингушетия'/>
                        <Card image={'./img/card3.jpg'} title='Ингушетия. Таргимские храмы'/>
                        <Card image={'./img/card1.jpg'} title='Ингушетия. Таргимские храмы'/>
                        <Card image={'./img/card2.jpg'} title='Ингушетия. Таргимские храмы'/>
                        <Card image={'./img/card3.jpg'} title='Ингушетия. Таргимские храмы'/>
                    </div>
                </div>
            
            </div>
            <div className="buttonPag">
                <Button text='предыдущая страница' classes='prev'/>
                <Button text='следующая страница' classes='next'/>
            </div>
            <Footer />
        </div>
    )
}