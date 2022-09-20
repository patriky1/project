import "../grid/grid.css";
import React from 'react';
import img from "../imagens/img1.png"




function grid() {


  return (
    <div className="bg">
      <div className="demo">
      <div className="iconbox">
        <h1 className="textperfil"> Welcome, Patriky!</h1>
        <h2 className="textperfil1">Notification</h2>
        <div className="notification ">
        <a href="#a" className=" btn myButton">Assign Now</a> 
        <div className="elipse3"></div>
        <div className="elipse4"></div>
        </div>
        </div>
        <div>
        <h2 className="textperfil2">Team Chat</h2>
        <a href="#a" className="myButton1">Invite Friends</a>
        </div>
      </div>

      <div  className="icon ">
      <a href="#a" className="texticon ">Home</a>
      </div>

      
      <div className="icon2">
        <a href="#a" className="texticon ">Project</a>
      </div>
      <div className="icon3">
        <a href="#a" className="texticon ">Chat</a>
      </div>
      <div className="icon4">
        <a href="#a" className="texticon ">Calendar</a>
      </div>
      <div className="icon5">
        <a href="#a" className="texticon ">Settings</a>
      </div>

      <div className="box2 ">
        <h3 className="card">Go PRO</h3>
        <h5 className="card1">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </h5>
        <div className="btnposition">
        <a href="#a" className="myButton">Upgrade Now</a>
        </div>
        <div className="elipse1"></div>
        <div className="elipse2"></div>
        <div className="imgposition"> <img src={img} alt="#" /></div>

      </div>
    </div>
  );
}

export default grid;
