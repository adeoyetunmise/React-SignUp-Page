import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'

const Formik = () => {
   const formik = useFormik({
    initialValues:{
        firstName : '',
        lastName : '',
        email : '',
        password : ''
    },
    onSubmit: (values)=>{
        console.log(values);
    },
    // validate:(values)=>{
    //     let errors = {}
    //     if(!values.firstName){
    //         errors.firstName = '!Required'
            
    //     }
    //     if(!values.lastName){
    //         errors.lastName = '!Required'
            
    //     }
    //     if (!values.email) {
    //         errors.email = '!Required';
    //       } else if (
    //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //       ) {
    //         errors.email = 'Invalid email address';
    //       }
    //     if(!values.password){
    //         errors.password = '!Required'
            
    //     }
    //     return errors
    // }
    validationSchema:yup.object({
        firstName:yup.string().required('this field is required').min(5).max(6),
        lastName:yup.string().required('this field is required').min(5).max(6),
        email:yup.string().email('email is required')
       

    })
   })
  
  return (
    <>
     <div className='container'>
        <div className='row'>
            <form onSubmit={formik.handleSubmit} className='col-7 mx-auto shadow-sm py-2'>
            <h1 className='text-center'>Sign Up Here</h1>
                <input onChange={formik.handleChange} name ='firstName'  type="text" placeholder='firstname' className='form-control'/>
                <span className='text-danger'>{formik.errors.firstName}</span>
                <input onChange={formik.handleChange} name ='lastName'   type="text" placeholder='lastname'  className='form-control my-2'/>
                <span className='text-danger'>{formik.errors.lastName}</span>
                <input onChange={formik.handleChange} name = 'email'     type="text" placeholder='email'  className='form-control my-2'/>
                <span className='text-danger'>{formik.errors.email}</span>
                <input onChange={formik.handleChange} name = 'password'  type="text" placeholder='password'  className='form-control'/>
                <span className='text-danger'>{formik.errors.password}</span>
                <button type='submit'  className='btn btn-success w-100 my-2'>Sign Up</button>
            </form>
            

        </div>

    </div>
    
    </>
  )
}

export default Formik