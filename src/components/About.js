import React from 'react';
import Image from './image.png';
function About() {
  return (
    <div>
    <div style={{display:"flex"}}>
      <div style={{height:"100px",width:"50%"}}>
      <br></br>
          <br></br>
          <br></br><br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br><br></br>
      <h1>We are here to......</h1>
      <h1>Make your shopping..</h1>
      <h1>Easier</h1>
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

export default About;