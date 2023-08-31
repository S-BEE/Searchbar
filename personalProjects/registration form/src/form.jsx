import './form.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Form = ()=>{
    const [values, setValues] = useState({
        firstName:'',
        lastName:'',
        email:'',
    })
    const [submitted, setSubmission] = useState(false)
    const [valid, setValid] = useState(false)
    

    const handleFirstName = (e)=>{
        setValues({...values, firstName:e.target.value})
    }
    const handleLastName = (e)=>{
        setValues({...values, lastName:e.target.value})
    }
    const handleEmail = (e)=>{
        setValues({...values, email:e.target.value})
    }
    const handleSubmit = (e)=>{
       e.preventDefault();
       if(!values.firstName || !values.lastName || !values.email.includes('@')){
        setValid(true)
        }
       else{
        setSubmission(true)
       }
        
    }

    return(
        <>
        <div className="" >
            <div className="container">
                <form action="" onSubmit={handleSubmit} >
                   {submitted ? <div className="">Success! Thank you for registering </div> : null } 
                   
                    <input type="text" placeholder='First Name' name='firstName' value={values.firstName} onChange={handleFirstName} />
                    {valid ? <span>please, enter a first name!</span> : null }
                    <input type="text" placeholder='Last Name' name='lastName' value={values.lastName} onChange={handleLastName} />
                    {valid ? <span>please, enter a last name!</span> : null}
                    <input type="text" placeholder='Email' id='email' value={values.email} onChange={handleEmail} />
                    {valid ?  <span>please, enter a valid email!</span> : null}
                    <button type='submit'  className='btn' >Register</button>
            

                </form>
            </div>
        </div>/
        
        </>

    )
}

export default Form