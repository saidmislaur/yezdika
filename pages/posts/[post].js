import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import Button from '../../components/button';
import styles from './article.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';

export default function Post(){
    const [post, setPost] = useState([])
    const router = useRouter();
    const id = router.query.post
    console.log(id)
    
    useEffect(() => {
        async function fetchData() {
            const postsResponse = await axios.get(`http://localhost:5050/posts/${id}`);
            setPost(postsResponse.data);
        }
        fetchData()
    }, [])
    
    return (
        <div className={styles.posts}>
            <Header />
            <div className={styles.posts_container}>
                <div className={styles.posts_content}>
                <div className={styles.posts_social}>
                    <ul>
                        <li>
                            <a hraf="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                    <path d="M7.55016 21.7502C16.6045 21.7502 21.5583 14.2469 21.5583 7.74211C21.5583 7.53117 21.5536 7.31554 21.5442 7.1046C22.5079 6.40771 23.3395 5.5445 24 4.55554C23.1025 4.95484 22.1496 5.21563 21.1739 5.32898C22.2013 4.71315 22.9705 3.74572 23.3391 2.60601C22.3726 3.1788 21.3156 3.58286 20.2134 3.80085C19.4708 3.01181 18.489 2.48936 17.4197 2.3143C16.3504 2.13923 15.2532 2.32129 14.2977 2.83234C13.3423 3.34339 12.5818 4.15495 12.1338 5.14156C11.6859 6.12816 11.5754 7.23486 11.8195 8.29054C9.86249 8.19233 7.94794 7.68395 6.19998 6.79834C4.45203 5.91274 2.90969 4.66968 1.67297 3.14976C1.0444 4.23349 0.852057 5.51589 1.13503 6.73634C1.418 7.95678 2.15506 9.02369 3.19641 9.72023C2.41463 9.69541 1.64998 9.48492 0.965625 9.10617V9.1671C0.964925 10.3044 1.3581 11.4068 2.07831 12.287C2.79852 13.1672 3.80132 13.7708 4.91625 13.9952C4.19206 14.1934 3.43198 14.2222 2.69484 14.0796C3.00945 15.0577 3.62157 15.9131 4.44577 16.5266C5.26997 17.14 6.26512 17.4808 7.29234 17.5015C5.54842 18.8714 3.39417 19.6144 1.17656 19.6109C0.783287 19.6103 0.390399 19.5861 0 19.5387C2.25286 20.984 4.87353 21.7516 7.55016 21.7502Z" fill="#606060"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0">
                                    <rect width="24" height="24" fill="#606060"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a hraf="#">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#606060" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" fill="#606060"/>
                                <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="#606060"/>
                                <path d="M19.8469 5.59239C19.8469 6.38926 19.2 7.03145 18.4078 7.03145C17.6109 7.03145 16.9688 6.38457 16.9688 5.59239C16.9688 4.79551 17.6156 4.15332 18.4078 4.15332C19.2 4.15332 19.8469 4.8002 19.8469 5.59239Z" fill="#606060"/>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a hraf="#">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="#606060" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                    <path d="M24.5027 6.44336C24.3613 5.9115 24.0828 5.42609 23.6949 5.03571C23.307 4.64533 22.8234 4.36367 22.2924 4.21893C20.3379 3.69336 12.5254 3.69336 12.5254 3.69336C12.5254 3.69336 4.71289 3.69336 2.75835 4.21893C2.2274 4.36367 1.74379 4.64533 1.3559 5.03571C0.968011 5.42609 0.689459 5.9115 0.548118 6.44336C0.0253907 8.40643 0.0253906 12.5002 0.0253906 12.5002C0.0253906 12.5002 0.0253907 16.5939 0.548118 18.557C0.689459 19.0889 0.968011 19.5743 1.3559 19.9646C1.74379 20.355 2.2274 20.6367 2.75835 20.7814C4.71289 21.307 12.5254 21.307 12.5254 21.307C12.5254 21.307 20.3379 21.307 22.2924 20.7814C22.8234 20.6367 23.307 20.355 23.6949 19.9646C24.0828 19.5743 24.3613 19.0889 24.5027 18.557C25.0254 16.5939 25.0254 12.5002 25.0254 12.5002C25.0254 12.5002 25.0254 8.40643 24.5027 6.44336Z" fill="#606060"/>
                                    <path d="M9.96777 16.2174V8.78271L16.5019 12.5L9.96777 16.2174Z" fill="#fff"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0">
                                    <rect width="25" height="25" fill="#606060"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>  
                        <li> 
                            <a hraf="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#BCBCBC" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                    <path d="M14.6 24C11 24 8.3 22.15 8.3 17.7V10.6H5V6.75C8.6 5.8 10.1 2.7 10.3 0H14.05V6.1H18.4V10.6H14.05V16.8C14.05 18.65 15 19.3 16.5 19.3H18.6V24H14.6Z" fill="#606060"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0">
                                    <rect width="13.6" height="24" fill="#BCBCBC" transform="translate(5)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.posts_post}>
                    <div className={styles.posts_post__img}>
                        <img src={`http://localhost:5050${post.pathImages}`} alt/>
                    </div>
                    <div className={styles.posts_post__title}>
                        <h1>{post.title}</h1>
                    </div>
                    <div className={styles.posts_post__info}>
                        <span>{post.published}</span>
                    </div>
                    <div className={styles.posts_post__text}>
                        <p>{post.text}</p>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


