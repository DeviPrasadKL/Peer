import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Links() {
  const postsUrl = "https://demo.ghost.io/ghost/api/content/posts//?key=22444f78447824223cefc48062";
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get(postsUrl).then((res) => {
      let urls = [];
      var internalLinks = [];
      var externalLinks = [];
      const internalBaseUrl = 'https://demo.ghost.io/';

      for (let i = 0; i < res.data.posts.length; i++) {
        urls.unshift(res.data.posts[i].url);
        if (res.data.posts[i].url.startsWith(internalBaseUrl)) {
          internalLinks.unshift(res.data.posts[i].url);
        } else {
          externalLinks.unshift(res.data.posts[i].url);
        }
      }
      setLinks(urls);
      // chekLinks();
    }
    ).catch((err) => { console.log(err); })
  }

  return (
    <div>
      Links
    </div>
  );
}
