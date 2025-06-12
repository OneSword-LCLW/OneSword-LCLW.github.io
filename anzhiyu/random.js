var posts=["2025/06/09/hello-world/","2025/06/08/H&NCTF2025/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };