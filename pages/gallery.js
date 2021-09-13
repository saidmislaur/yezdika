import Header from '../components/Header';
import TitleBlock from '../components/TitleBlock/TitleBlock';
import GalleryCard from '../components/Gallery/GalleryCard';
import Button from '../components/button';
import Footer from '../components/Footer/Footer';
export default function Gallery()  {
    const articleImg = "./img/articleImg.jpg";
    return (
        <div className="galleryPage">
            <Header />
            <TitleBlock title="Галерея" articleImg={articleImg}/>
            <div className="galleryPage_content">
                <GalleryCard image='./img/folklor1.jpg' pageStyle="heigth" text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1см.-," />
                <GalleryCard image='./img/galleryPage/Rectangle86.png' pageStyle="heigth" text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1см.-," />
                <GalleryCard image='./img/galleryPage/Rectangle 114.png' pageStyle="heigth" text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1см.-," />
                <GalleryCard image='./img/galleryPage/Rectangle 113.png' pageStyle="heigth" text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1см.-," />
                <GalleryCard image='./img/galleryPage/Rectangle 112.png' pageStyle="heigth" text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1см.-," />
                <GalleryCard image='./img/galleryPage/Rectangle 110.png' pageStyle="heigth" text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1см.-," />
                <GalleryCard image='./img/galleryPage/Rectangle 105.png' pageStyle="heigth" text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1см.-," />
                <GalleryCard image='./img/galleryPage/Rectangle 104.png' pageStyle="heigth" text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1см.-," />
                <GalleryCard image='./img/galleryPage/Rectangle 103.png' pageStyle="heigth" text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1см.-," />
                <GalleryCard image='./img/galleryPage/Rectangle 102.png' pageStyle="heigth" text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1см.-," />
                <GalleryCard image='./img/galleryPage/Rectangle 115.png' pageStyle="heigth" text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1см.-," />
                <GalleryCard image='./img/galleryPage/Rectangle 101.png' pageStyle="heigth" text="Размер: Общ.вые,- 30,5 см., выс. сосуда-24,5 см.. Д. тулова-14,5 см, Д.шейки ножки-8; 1см.-," />
            </div>
            <div className="buttonPag">
                <Button text='предыдущая страница!' classes='prev'/>
                <Button text='следующая страница!' classes='next'/>
            </div>
            <Footer />
        </div>
    )
}