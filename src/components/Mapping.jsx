import React from 'react'

const Mapping = () => {
    var allStudents = [
        {
            firstname : 'Mayowa',
            lastname : 'Ini-oluwa',

        },

        {
            firstname : 'Favour',
            lastname : 'Folarin',
            
        }
    ]
  return (
   
    <>
    <table className='table table-striped table-bordered'>
        <tr>
            <td>S/N</td>
            <td>Firstname</td>
            <td>Lastname</td>
            <td>Action</td>
        </tr>
     {allStudents.map((item,index)=>(
        <>
        <tr>
            <td>{index + 1}</td>
        <td>{item.firstname}</td>
        <td>{item.lastname}</td>
        <td>
            <button className='btn btn-warning '>Edit</button>
            <button className='btn btn-danger mx-2'>Delete</button>
        </td>
        </tr>
        </>
    ))}
    </table>
    </>
  )
}

export default Mapping