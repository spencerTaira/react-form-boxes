import "./NewBoxForm.css"
import React, { useState } from "react"

/**
 * Form for creating a new box item to add to BoxList
 *
 * Props:
 * - addBox (function in BoxList)
 *
 * States:
 * formData = {
 *  height,
 *  width,
 *  backgroundColor
 *  }
 *
 * Render:
 *  BoxList -> NewBoxForm
 */
function NewBoxForm({addBox}) {
  const initialState = { height: '', width: '', backgroundColor: ''};
  const [formData, setFormData] = useState(initialState);

    /** Send {height, width, backgroundColor} to parent
   *    & clear form. */
     function handleSubmit(e) {
      e.preventDefault();
      addBox(formData);
      setFormData(initialState);
    }

  /** Update formData state w/curr state of input elem */
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  return (
    <form className="NewBoxForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="NewBoxForm-height">Height:</label>
        <input
          id="NewBoxForm-height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="NewBoxForm-width">Width:</label>
        <input
          id="NewBoxForm-width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="NewBoxForm-backgroundColor">Background Color:</label>
        <input
          id="NewBoxForm-backgroundColor"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />
      </div>

      <button>Add a new box!</button>
    </form>
  )
}

export default NewBoxForm;
