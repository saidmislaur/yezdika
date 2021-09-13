
import styles from '../../styles/titleBlock.module.scss';

export default function TitleBlock({title, articleImg}) {
    const image = {
        backgroundImage: `url('${articleImg}')`,
        width:"100%",
        height:"450px"
    }
    return(
        <div className={styles.titleBlock} style={image}>
            {/* <Image src={articleImg} alt="img" /> */}
            <h1>{title}</h1>
        </div>
    )
}