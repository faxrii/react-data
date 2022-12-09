
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [posts,setPosts]=useState([]);
  const getPosts=()=>{axios.get('https://jsonplaceholder.typicode.com/posts').then((pos)=>
    setPosts(pos.data))
  }
  

  
  useEffect(()=>{
    try{
      getPosts()
    }
    catch(e){
        console.log(e.message)
    }
  },[])

  console.log(posts)
  return (
  
   <div>{
     posts && (
      posts.map((post,i) => {
       return <li key={i}>{post.title}</li>
      })

    )
}
   </div>
   
  );
}

export default App;


