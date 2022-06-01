import React from "react";
import "./FormSelect.styles.scss";


const FormSelect = ({handleChange,selectedValue,values,label,name}) => {
    
return (
    <div className="formselect">
        <label>{label}</label>
        <select className="form-select" value={selectedValue} name={name} onChange={handleChange}>
        {
            values.map((val,indx)=> (<option key={indx}>{val}</option>))
        }
        </select>
    </div>
)
}

export default FormSelect;