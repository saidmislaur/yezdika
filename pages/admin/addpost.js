import React, {useState, useEffect} from 'react'
import AddButton from '../../components/Admin/Addbutton'
import axios from 'axios'
import styled from '../../styles/addpost.module.scss';


const AddPost = () => {
    const [posts, setPosts] = useState([]);
    const [titleValue, setTitleValue] = useState('');
    const [textValue, setTextValue] = useState('');

    useEffect(() => {
        async function fetchData() {
          const postsResponse = await axios.get('http://localhost:4000/posts');
          setPosts(postsResponse.data);
        }
        fetchData();
      }, []);

    const el = 
        {
            image: "./img/card1.jpg",
            title: titleValue,
            text: textValue,
            published: '12 июня'
        }

    const onAddPost = () => {
        try {
            console.log(el)
    
            const { data } = axios.post(
                `http://localhost:4000/posts`, 
                el,
            );
            setPosts([...posts, data])
        } catch (error) {
          alert('ошибка добавления');
        }
      };

    function handleInput(e) {
        e.target.style.height = '5px';
        e.target.style.height = (e.target.scrollHeight) + 'px'; 
    }
    return (
        <div className={styled.addPost}>
            <div className={styled.addPost_content}>
            <form>
                <textarea
                    className={styled.addPost_content__title} 
                    rows='1'
                    onInput={handleInput}
                    maxLength="120"
                    placeholder="Заголовок"
                    value={titleValue}
                    onChange={(e) => setTitleValue(e.target.value)} 
                />
                <textarea 
                     className={styled.addPost_content__text}
                    onInput={handleInput}
                    placeholder="Текст"
                    value={textValue} 
                    onChange={(e) => setTextValue(e.target.value)} 
                />
                <AddButton text='Добавить' addPost={onAddPost} />
            </form>
        </div>
        </div>
    )
}

export default AddPost;
