import React, { useState } from "react";
import './BoxList.css';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

/**
 * Props:
 *  None
 *
 * State:
 *  boxes - array of box objects
 *
 * Render:
 *  App -> BoxList -> Box, NewBoxList
 */

function BoxList() {
  // individual box (object)
  /*
    {
      id: uuid
      height,
      width,
      backgroundColor,
    }
  */
  const [boxes, setBoxes] = useState([]);
  console.log("BOXES STATE", boxes);

  /**
   * Function to create new box and add to state
   *  Input:
   *  - formData (object)
   */

  function addBox(formData) {
    const newBox = { ...formData, id: uuid() };
    setBoxes(boxList => [...boxList, newBox]);
  }

  /**
   * Function to delete box and remove from state
   *  Input:
   *  - idx (number)
   */
  function deleteBox(idx) {
    boxes.splice(idx, 1);
    setBoxes([...boxes]);
  }

  return (
    <div className="BoxList">
      <div className="BoxList-NewBoxForm">
        <NewBoxForm addBox={addBox}/>
      </div>
      <div className="BoxList-Box">
        {boxes.map((box, idx) => (
          <Box
            key={box.id}
            height={box.height}
            width={box.width}
            backgroundColor={box.backgroundColor}
            deleteBox={() => deleteBox(idx)}
          />
        ))}
      </div>
    </div>
  )

}


export default BoxList;