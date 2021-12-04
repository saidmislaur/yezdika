import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import Sidebar from '../../components/Admin/Sidebar';
import Topbar from '../../components/Admin/Topbar';
import styles from '../../components/Admin/admin.module.scss'
import FolklorsList from '../../components/Admin/FolklorList';
import BookList from '../../components/Admin/BookList';
import GalleryList from '../../components/Admin/GalleryList';
import axios from 'axios';
import ArtefactsList from '../../components/Admin/ArtefactList';


function Category() {
    const [folklors, setFolklors] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [artefact, setArtefacts] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const folklorResponse = await axios.get('http://localhost:5050/folklor')
          const galleryResponse = await axios.get('http://localhost:5050/gallery')
          const artefactResponse = await axios.get('http://localhost:5050/artefacts')
          setFolklors(folklorResponse.data);
          setGallery(galleryResponse.data);
          setArtefacts(artefactResponse.data)
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
                {router.asPath === '/admin/gallery' && <GalleryList data={gallery} setGallery={setGallery}/>}
                {router.asPath === '/admin/artefacts' && <ArtefactsList data={artefact} setArtefacts={setArtefacts}/>}
            </div> 
        </div>
    )
}

export default Category;
