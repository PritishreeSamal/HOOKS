import React, { useState, useEffect } from 'react'
import axios from 'axios'
function DataFetching() {
    // const [posts, setPosts] = useState([])
    // useEffect(() => {
    //     axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
    //         console.log(res);
    //         setPosts(res.data)
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }, [])
    // return (
    //     <div className='ms-4 mt-5'>
    //         <ul>
    //             {
    //                 posts.map(post => <li key={post.id}>{post.title}</li>)
    //             }
    //         </ul>
    //     </div>
    // )


    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [idFromBTNClick, setIdBTNClick] = useState(1)
    const handleClick=()=>{
        setIdBTNClick(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBTNClick}`).then(res => {
            // console.log(res);
            setPost(res.data)
        }).catch(err => {
            console.log(err);
        })
    },[idFromBTNClick])
    return (
        <div className='text-center mt-5'>
            <input type="text" className='mb-3 text-primary' value={id} onChange={e=>setId(e.target.value)}/>
           <button type='button' onClick={handleClick}>click</button>
            <h2>{post.title}</h2>
        </div>
    )
}

export default DataFetching