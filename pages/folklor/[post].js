import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Post(){
    const [post, setPost] = useState([])
    const router = useRouter();
    const id = router.query.post
    console.log(id)
    
    useEffect(() => {
        async function fetchData() {
            const postsResponse = await axios.get(`http://localhost:4000/posts/${id}`);
            setPost(postsResponse.data);
        }
        fetchData()
    }, [])
    
    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    )
}