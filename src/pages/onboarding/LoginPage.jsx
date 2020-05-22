import React from 'react';

function LoginPage(){
    const handleOnClick = () =>{
        console.log('button clicked - this should trigger handle functions');
    }

    return(
        <>
            <div>
                You are at login page now... press button to login. (to change.)
            </div>
            <button onClick={handleOnClick}>login</button>
        </>
    )
}

export default LoginPage;