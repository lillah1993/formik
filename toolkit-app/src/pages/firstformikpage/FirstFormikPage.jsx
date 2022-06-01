import "./FirstFormikPage.styles.scss"
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues= {
     Prénom:"",
     Nom:"",
     Email:"",
     DateDeNaissance:"",
     MotDePasse:"",
     confirmPassword:"",
     errorMessage: ""
    };
const onSubmit= values => {
        alert(JSON.stringify(values))
    };
// const validate= values => {
//         let errors = {}

//         if (!values.Nom) {
//             errors.Nom = 'Required';
//         }
//         if (!values.Email) {
//             errors.Email = 'Required';
//         }

//         return errors; 
//     };

    const validationSchema = Yup.object({
        Prénom: Yup.string().min(2, "too short").required('Required!'),
        Email: Yup.string().email('Invalid email format').required('Required')
    })


const FirstFormikPage = () => {
   const formik = useFormik({
       initialValues,
       onSubmit,
       validationSchema
    //    validate
   });

   console.log('touched', formik.touched)
   return(
       
    <div className="FirstFormikPage">
        <form onSubmit={formik.handleSubmit}>
            <div className="form-control">
            <label htmlFor="Prénom">Prénom</label>
            <input type="text" id="Prénom" name="Prénom" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
            {formik.touched.Prénom && formik.errors.Prénom?<div className="error">{formik.errors.Prénom}</div>: null}
            </div>
            <div className="form-control">
            <label htmlFor="Nom">Nom</label>
            <input type="text" id="Nom" name="Nom" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
            {formik.touched.Nom && formik.errors.Nom?<div className="error">{formik.errors.Nom}</div>: null}
            </div>
            <div className="form-control">
            <label htmlFor="Email">Email</label>
            <input type="Email" id="Email" name="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
            {formik.touched.Email && formik.errors.Email?<div className="error">{formik.errors.Email}</div>: null}
            </div>
            <div className="form-control">
            <label htmlFor="DateDeNaissance">DateDeNaissance</label>
            <input type="date" id="DateDeNaissance" name="Date De Naissance" onChange={formik.handleChange} onBlur={formik.handleBlur}value={formik.values.name} />
            {formik.touched.DateDeNaissance && formik.errors.DateDeNaissance?<div className="error">{formik.errors.DateDeNaissance}</div>: null}
            </div>
            <div className="form-control">
            <label htmlFor="MotDePasse">Mot De Passe</label>
            <input type="password" id="MotDePasse" name="MotDePasse" onChange={formik.handleChange} value={formik.values.name} />
            {formik.touched.MotDePasse && formik.errors.MotDePasse?<div className="error">{formik.errors.MotDePasse}</div>: null}
            </div>
            <div className="form-control">
            <label htmlFor="confirmPassword">confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
            {formik.touched.confirmPassword && formik.errors.confirmPassword?<div className="error">{formik.errors.confirmPassword}</div>: null}
            </div>
            
            <button type="submit">submit</button>
        </form>
    </div>
)
   };

export default FirstFormikPage;