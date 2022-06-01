import { useState } from "react";
import "./FirstForm.styles.scss";
import FormInput from "../../component/form-input/FormInput";
import { useNavigate } from "react-router-dom";


const FirstForm = () => {
    const [values, setValues] = useState({
        Prénom:"",
        Nom:"",
        Email:"",
        DateDeNaissance:"",
        MotDePasse:"",
        confirmPassword:"",
        errorMessage: ""
    });

    const inputs = [
        {
            id:0,
            name: "Prénom",
            type: "text",
            placeholder: "Prénom",
            label:"Prénom",
            errorMessage: "Prénom doit être compris entre 3 et 10 caractères et ne doit pas comporter de caractère spécial",
            required: true,
            pattern: "^[A-Za-z0-9]{3,16}"
        },
        {
            id:1,
            name: "Nom",
            type: "text",
            placeholder: "Nom",
            label:"Nom",
            errorMessage: "Nom doit être compris entre 3 et 10 caractères et ne doit pas comporter de caractère spécial",
            required: true,
            pattern: "^[A-Za-z0-9]{3,16}"
        },
        {
            id:2,
            name: "email",
            type: "email",
            placeholder: "Email",
            label:"Email",
            errorMessage: "it should be a valid email address",
            required: true

        },
        {
            id:3,
            name: "DateDeNaissance",
            type: "date",
            placeholder: "Date de Naissance",
            label:"Date de Naissance",
            required: true

        },
        {
            id:4,
            name: "MotDePasse",
            type: "password",
            placeholder: "Mot de Passe",
            label:"Mot de Passe",
            errorMessage: "Le mot de passe doit être composé de 8 à 20 caractères et doit inclure au moins 1 lettre, 1 chiffre et 1 caractère spécial",
            required: true,
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20)$"


        },
            {
            id:5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirmez le mot de passe",
            label:"Confirmez le mot de passe",
            errorMessage: "Passwords dont match",
            required: true,
            pattern:values.password,
 
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setValues({...values,[e.target.name]: e.target.value})
    }

    const navigate = useNavigate();

    return (
        <div className="firstform">
            <form onSubmit={handleSubmit}>
                {inputs.map((input)=>(
                    <FormInput 
                        key={input.id} 
                        value={values[input.name]}
                        handleChange={handleChange}
                        {...input}
                         />
                ))}
                <input type="file"/> 
               
                
                <button onClick={()=>navigate("secform")}>to the next</button>
            </form>
        </div>
    )
}

export default FirstForm;