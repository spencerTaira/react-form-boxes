import React, { useState } from "react";
import './Box.css';

/**
 * Renders box component
 *
 * Props:
 *  height - number,
 *  width - number,
 *  backgroundColor - string,
 *  deleteBox - function
 *
 * State:
 *  none
 *
 * Render:
 *  Boxlist -> Box
 */

function Box({height, width, backgroundColor, deleteBox}) {
  const style = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor: `${backgroundColor}`,
  }

  return (
    <div className='Box-container'>
      <div className="Box" style={style}></div>
      <button className="Box-button" onClick={deleteBox}>Delete</button>
    </div>
  );
}

export default Box;