var posts=["2025/06/08/H&NCTF2025/","2025/06/13/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };