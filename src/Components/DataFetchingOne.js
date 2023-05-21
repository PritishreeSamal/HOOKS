import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`).then(res => {
            console.log(res);
            setLoading(false)
            setPost(res.data)
            setError('')
        }).catch(err => {
            setLoading(false)
            setPost({})
            setError('Somethingg went wrong')
        })
    }, [])
    return (
        <div className='text-center mt-5'>
            {loading ? 'loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne