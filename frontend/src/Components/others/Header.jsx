import React, { useState } from 'react'

const Header = (props) => {

    // const [username, setUsername] = useState('')
    // if(!data){
    //     setUsername('Admin')
    // }
    // else{
    //     setUsername(data.firstName)
    // }

    const logOutUser = ()=>{
        
        localStorage.setItem('loggedInUser','')
        props.changeUser('')
        // console.log(props.changeUser)
        // window.location.reload()
    }
    
    return (
        <>
            <div className='flex items-end justify-between'>
                <h1 className='text-2xl  font-medium'> 
                    Hello
                    <br />
                    <span className='text-3xl font-semibold'>username</span>
                </h1>
                <button
                onClick={logOutUser}
                 className='bg-red-600  font-medium text-lg text-white  px-5 py-3 rounded-xl'>Log Out</button>
            </div>
        </>
    )
}

export default Header
