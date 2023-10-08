import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Posts() {

  const postsUrl = "https://demo.ghost.io/ghost/api/content/posts//?key=22444f78447824223cefc48062";
  const [posts, setposts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get(postsUrl).then((res) => {
      setposts(res.data.posts);
    }
    ).catch((err) => { console.log(err); })
  }

  const noMeta = posts.filter((post) => post.meta_description == null);

  const tooLongMeta = posts.filter((post) => {
    if (post.meta_description != null) {
      if (post.meta_description.length >= 100) {
        return post;
      }
    }
  });

  const tooLongURL = posts.filter((post) => {
    if (post.meta_description != null) {
      if (post.url.length > 100) {
        return post;
      }
    }
  });

  const withoutImage = posts.filter((post) => {
    if (post.feature_image == null) {
      return post;
    }
  });

  const shortPosts = posts.filter((post) => post.html.length < 250);
  const LongPosts = posts.filter((post) => post.html.length > 1500);
  console.log(shortPosts);

  return (
    <div className='custom-grid p-4'>

      {(noMeta.length != 0) && <div className='bg-gray-200  overflow-y-scroll p-4'>
        <h1 className='font-bold text-red-800 text-xl'>List of posts with no meta data</h1>
        {noMeta.map((post, index) => {
          return (
            <div key={index}>
              <h1 className=' font-semibold' >{post.title}</h1>
              <div className='flex justify-between '>
                <Link to={`/post/${post.id}`} className='mb-2 text-blue-900 cursor-pointer' >{post.slug}</Link>
                <Link to={`/post/${post.id}`}><button type="button" className='bg-blue-500 rounded-md p-2 text-white hover:bg-blue-400 active:bg-violet-700'>view article</button></Link>
              </div>
            </div>
          )
        })}
      </div>}


      {(tooLongMeta.length != 0) && <div className='bg-gray-200  overflow-y-scroll p-4'>
        <h1 className='font-bold text-red-800 text-xl'>Too long Meta Description</h1>
        {tooLongMeta.map((post, index) => {
          return (
            <div key={index}>
              <h1 className=' font-semibold' >{post.title}</h1>
              <div className='flex justify-between '>
                <Link to={`/post/${post.id}`} className='mb-2 text-blue-900 cursor-pointer' >{post.slug}</Link>
                <Link to={`/post/${post.id}`}><button type="button" className='bg-blue-500 rounded-md p-2 text-white hover:bg-blue-400 active:bg-violet-700'>view article</button></Link>
              </div>
            </div>
          )
        })}
      </div>}

      {(LongPosts.length != 0) && <div className='bg-gray-200  overflow-y-scroll p-4'>
        <h1 className='font-bold text-red-800 text-xl'>Too long posts</h1>
        {LongPosts.map((post, index) => {
          return (
            <div key={index}>
              <h1 className=' font-semibold' >{post.title}</h1>
              <div className='flex justify-between '>
                <Link to={`/post/${post.id}`} className='mb-2 text-blue-900 cursor-pointer' >{post.slug}</Link>
                <Link to={`/post/${post.id}`}><button type="button" className='bg-blue-500 rounded-md p-2 text-white hover:bg-blue-400 active:bg-violet-700'>view article</button></Link>
              </div>
            </div>
          )
        })}
      </div>}

      {<div className={`bg-gray-200 ${shortPosts.length == 0 ? 'h-28' : ''}  overflow-y-scroll p-4`}>
        <h1 className='font-bold text-red-800 text-xl'>Too Short posts</h1>
        {shortPosts.length == 0 ?
          <div className='flex justify-center'>
            <h1>No content</h1>
          </div> :
          tooLongURL.map((post, index) => {
            return (
              <div key={index}>
                <h1 className=' font-semibold' >{post.title}</h1>
                <div className='flex justify-between '>
                  <Link to={`/post/${post.id}`} className='mb-2 text-blue-900 cursor-pointer' >{post.slug}</Link>
                  <Link to={`/post/${post.id}`}><button type="button" className='bg-blue-500 rounded-md p-2 text-white hover:bg-blue-400 active:bg-violet-700'>view article</button></Link>
                </div>
              </div>
            )
          })}
      </div>}

      {<div className={`bg-gray-200 ${tooLongURL.length == 0 ? 'h-28' : 'h-2/3'}  overflow-y-scroll p-4`}>
        <h1 className='font-bold text-red-800 text-xl'>Too long URL</h1>
        {tooLongURL.length == 0 ?
          <div className='flex justify-center'>
            <h1>No content</h1>
          </div> :
          tooLongURL.map((post, index) => {
            return (
              <div key={index}>
                <h1 className=' font-semibold' >{post.title}</h1>
                <div className='flex justify-between '>
                  <Link to={`/post/${post.id}`} className='mb-2 text-blue-900 cursor-pointer' >{post.slug}</Link>
                  <Link to={`/post/${post.id}`}><button type="button" className='bg-blue-500 rounded-md p-2 text-white hover:bg-blue-400 active:bg-violet-700'>view article</button></Link>
                </div>
              </div>
            )
          })}
      </div>}

    </div>
  );
}
