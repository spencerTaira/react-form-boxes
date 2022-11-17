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

function Box({height, width, backgroundColor, deleteCurrBox}) {
  const style = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor: backgroundColor,
  }

  //top level div className should be the component name
  return (
    <div className='Box'>
      <div className="Box-container" style={style}></div>
      <button className="Box-button" onClick={deleteCurrBox}>Delete</button>
    </div>
  );
}

export default Box;