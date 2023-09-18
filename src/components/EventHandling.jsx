import React from 'react'
import { useState } from 'react'

const EventHandling = () => {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [allStudents, setallStudents] = useState([])


    const signUp = ()=>{
        let newStudents = {
            firstName,
            lastName,
            email,
            password
        }
        setallStudents([...allStudents,newStudents])
        console.log(allStudents);
        setfirstName('')
        setlastName('')
        setemail('')
        setpassword('')

    }
    // const [myName, setmyName] = useState("Kunle")
    // const [userInput, setuserInput] = useState('')
    // const changeName = ()=>{
    //    setmyName(userInput)
    //     console.log(myName);
    // }
  return (
    <>
    {/* <h1>{myName}</h1>
    <input type="text" onChange={(e)=>setuserInput(e.target.value)}/>
    <button onClick={changeName}>Change Name</button> */}
    



    <div className='container'>
        <div className='row'>
            <div className='col-7 mx-auto shadow-sm py-2'>
            <h1 className='text-center'>Sign Up Here</h1>
                <input value={firstName} onChange={(e)=>setfirstName(e.target.value)} type="text" placeholder='firstname' className='form-control'/>
                <input value={lastName} onChange={(e)=>setlastName(e.target.value)} type="text" placeholder='lastname'  className='form-control my-2'/>
                <input value={email} onChange={(e)=>setemail(e.target.value)} type="text" placeholder='email'  className='form-control my-2'/>
                <input value={password} onChange={(e)=>setpassword(e.target.value)} type="text" placeholder='password'  className='form-control'/>
                <button onClick={signUp}  className='btn btn-success w-100 my-2'>Sign Up</button>
            </div>
            

        </div>

    </div>
    <h1 className='text-center'>All Students</h1>
    <table className='table table-bordered'>
        <tr>
            <th>S/N</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
        </tr>
    
    {allStudents.map((item,index)=>(
    <tr>
        <td>{index + 1} </td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
    </tr>
    ))}

    </table>
    </>
  )
}

export default EventHandling