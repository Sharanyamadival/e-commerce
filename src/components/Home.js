import React from 'react';
import Image from './image.png'
function Home() {
  
  return (
    <div>
    <div style={{display:"flex"}}>
      <div style={{height:"100px",width:"50%"}}>
      <h1>Home Page</h1>
      <h1>Welcome to our store</h1>
      </div>
    <div style={{height:"100px",width:"50%",backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    height: '80vh', 
    width: '80vw',  }}>
    </div>
    </div>
    </div>
  );
}

export default Home;