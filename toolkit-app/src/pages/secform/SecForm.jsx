import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../component/form-input/FormInput";
import FormSelect from "../../component/form-select/FormSelect";

import "./SecForm.styles.scss";

const SecForm = () => {

    const [values, setValues] = useState({
        puissanceFiscal:"",
        typeCarburant:"",
        sexe:"",
        telephone:""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setValues({...values,[e.target.name]: e.target.value})
    }

    const carburantVals = ["Diesel","Essence"];
    const sexeVals = ["Homme","Femme"];
    console.log(values);

    return (
    <div className="secform">
              <form onSubmit={handleSubmit}>
                    <FormInput 
                        htmlFor="puissance fiscale"
                        id="puissance fiscale"
                        name="puissanceFiscal"
                        placeholder= "Puissance fiscale"
                        type="text"
                        value={values.puissanceFiscal}
                        handleChange={handleChange}
                        pattern="^(([1-8][0-9]?|9[0-8]?).d+|[1-9][0-9]?)$"
                        label={"Puissance fiscale"}
                        errorMessage="Valeur maximale: 99"
                        required
                         />
                    <FormSelect 
                        label="type carburant"
                        name="typeCarburant"
                        values={carburantVals} 
                        selectedValue={values.typeCarburant} 
                        handleChange={handleChange}
                        />
                    <FormSelect 
                        label="sexe"
                        name="sexe"
                        values={sexeVals} 
                        selectedValue={values.sexe} 
                        handleChange={handleChange}
                        />
                    <FormInput 
                        htmlFor="telephone"
                        id="telephone"
                        name="telephone"
                        placeholder= "telephone"
                        type="text"
                        value={values.telephone}
                        handleChange={handleChange}
                        pattern="(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}"
                        errorMessage="Veuillez saisir un numéro de téléphone valide"
                        label={"Puissance fiscale"}
                        required
                        />
                         <div>
                    <input id="check" type="checkbox"/>
                    <label htmlFor="check">
                        J’ai lu et accepté <Link to="">les mentions</Link> relatives à la protection des données personnelles
                    </label>
                </div>
                <button>submit</button>
            </form>
    </div>
 )
};

export default SecForm;