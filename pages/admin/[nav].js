import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import Sidebar from '../../components/Admin/Sidebar';
import Topbar from '../../components/Admin/Topbar';
import styles from '../../styles/admin.module.scss'
import FolklorsList from '../../components/Admin/FolklorsList';
import BookList from '../../components/Admin/BookLIst';
import axios from 'axios';

function Category() {
    const [folklors, setFolklors] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const folklorResponse = await axios.get('http://localhost:4000/folklor')

          setFolklors(folklorResponse.data);
        }
        fetchData();
      }, []);

    const router = useRouter()
    return (
        <div>
           <Topbar />
            <div className={styles.container}>
                <Sidebar />
                {router.asPath === '/admin/folklors' && <FolklorsList data={folklors} setFolklors={setFolklors}/> }
                {router.asPath === '/admin/books' && <BookList /> }
            </div> 
        </div>
    )
}

export default Category;
