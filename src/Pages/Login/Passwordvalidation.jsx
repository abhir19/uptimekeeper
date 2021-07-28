import React, { useState } from 'react'

const Passwordvalidation = () => {
    const[password,setPassword]=useState('')
    const handle =e=>{
        const password=e.target.value;
        console.log(password)
        if(password.match(/[A-Z]/)!=null)
        {
            console.log('password contains upper upper letter')
        }
        else{
            console.log("plz at least 1 upper case")
        }
        if(password.match(/[a-z]/)!= null)
        {
            console.log('password contains upper lower letter')
        }
        else{
            console.log("plz at least 1 lower case")
        }
        if(password.match(/[0-9]/)!==null)
        {
            console.log('password contains Digit')
        }
        else{
            console.log("plz at least 1 Digit")
        }
        if(password.length>7)
        {
            console.log('8 length long ')
        }
        else{
            console.log("plz at least 8 length long")
        }
    }
    return (
        <div>
            
            <label htmlFor="exampleInputPassword1">Password</label>
           <input type="password" className="form-control" id="exampleInputPassword1"  onChange={(e)=>handle(e)} />
              <h1>{password}</h1>
        </div>
    )
}

export default Passwordvalidation
