import React, { useState } from "react";
import "./FormInput.styles.scss";

const FormInput = ({label,handleChange,htmlFor,errorMessage,...rest}) => {
    const [focusing,setfocusing] = useState(false);
    const handleBlur = (e) => {
        setfocusing(true);
    } 
    return (
        <div className="formInput">
            <label htmlFor={htmlFor}>{label}</label>
            <input
              onChange={handleChange} 
              {...rest}
              onBlur={handleBlur}
              focusing={focusing.toString()}
            />
            <span className="errorMessage">
                {errorMessage}
            </span>
        </div>
    )
}

export default FormInput;
