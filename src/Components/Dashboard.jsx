import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {

    const postsUrl = "https://demo.ghost.io/ghost/api/content/posts//?key=22444f78447824223cefc48062";
    const authorsUrl = "https://demo.ghost.io/ghost/api/content/authors/?key=22444f78447824223cefc48062";
    const pagesUrl = "https://demo.ghost.io/ghost/api/content/pages/?key=22444f78447824223cefc48062";
    const [posts, setposts] = useState(0);
    const [authors, setauthors] = useState(0);
    const [pages, setpages] = useState(0);

    useEffect(() => {
        fetchPosts();
        fetchAuthors();
        fetchPages();
    }, []);

    const fetchPosts = () => {
        axios.get(postsUrl).then((res) => {
            console.log(res.data.posts);
            setposts(res.data.posts.length);
        }
        ).catch((err) => { console.log(err); })
    }
    const fetchAuthors = () => {
        axios.get(authorsUrl).then((res) => {
            setauthors(res.data.authors.length);
        }
        ).catch((err) => { console.log(err); })
    }
    const fetchPages = () => {
        axios.get(pagesUrl).then((res) => {
            console.log(res.data.pages.length);
            setpages(res.data.pages.length);
        }
        ).catch((err) => { console.log(err); })
    }

    return (
        <div className='flex items-center justify-center flex-col h-screen'>
            <div className='bg-yellow-200 border-2 border-black p-3'>
                <h2>Authors </h2>
                <h1 className='pl-8'>{authors}</h1>
            </div>
            <h2>Total number of Posts are {posts}</h2>
            <h2>Total number of Pages are {pages}</h2>
            <h2>Latest 5 Published posts List </h2>
            <div className='flex items-end justify-center'>
                <Link to="/posts" className='border-2 border-black p-2 rounded-md bg-slate-200'>Posts</Link>
                <Link to="/links" className='border-2 border-black p-2 rounded-md bg-slate-200 ml-4'>Link</Link>
            </div>
        </div>
    );
}
