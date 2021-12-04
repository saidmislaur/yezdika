import React, {useState, useEffect} from 'react'
import AddButton from '../../components/Admin/Addbutton'
import axios from 'axios'
import styled from '../../styles/addpost.module.scss';
import Tiptap from '../../components/Tiptap';



function AddPost(){
    const [posts, setPosts] = useState([]);
    const [titleValue, setTitleValue] = useState('');
    const [textValue, setTextValue] = useState('');

    var months = ['January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const time = new Date();

    let num = time.getDate()

    let month = months[time.getMonth()];
    let year = time.getFullYear()

    useEffect(() => {
        async function fetchData() {
          const postsResponse = await axios.get('http://localhost:5050/posts');
          setPosts(postsResponse.data);
        }
        fetchData();
      }, []);

    const el =
        {
            title: titleValue,
            text: textValue,
        }

    const onAddPost = () => {
        try {
            console.log(el)
            const { data } = axios.post(
                `http://localhost:5050/posts`,
                el,
            );
            setPosts([...posts, data])
            alert('добавлено')
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
            {/* <Tiptap /> */}
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
