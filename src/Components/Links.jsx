import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Links() {
  const postsUrl = "https://demo.ghost.io/ghost/api/content/posts//?key=22444f78447824223cefc48062";
  const [links, setLinks] = useState([]);
  const [internallinks, setInternallinks] = useState([]);
  const [externallinks, setExternalinks] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get(postsUrl).then((res) => {
      let urls = [];
      for(let i=0; i<res.data.posts.length; i++){
        urls.unshift(res.data.posts[i].url);
      }
      setLinks(urls);
      console.log("urls = "+ JSON.stringify(links));
    }
    ).catch((err) => { console.log(err); })
  }

  const seperateLinks = ()=>{
    const internalBaseUrl = 'https://ghost-blog.ipxp.in';
  }

  return (
    <div>
      Links
    </div>
  );
}
