import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import styles from '../../components/Admin/admin.module.scss'
import PostLists from '../../components/Admin/PostLists';
import Sidebar from '../../components/Admin/Sidebar';
import Topbar from '../../components/Admin/Topbar';
import axios from 'axios';


function Admin() {
    const [posts, setPosts] = useState([])
    
    const router = useRouter()
      useEffect(() => {
        async function fetchData() {
          const postsResponse = await axios.get('http://localhost:5050/posts');
          setPosts(postsResponse.data);
        }
        fetchData();
      }, []);

      const onRemovePost = (id) => {
        try {
          axios.delete(`http://localhost:5050/posts/${id}`);
          setPosts((prev) => prev.filter((item) => (item.id) !== (id)));
        } catch (error) {
          alert('ошибка удаления' + ' ' + id);
        }
      };

    return (
        <div>
            <Topbar />
            <div className={styles.container}>
                <Sidebar />
                {router.pathname === '/admin' && <PostLists posts={posts} removePost={onRemovePost} /> }
            </div>
        </div>
    )
}

export default Admin
