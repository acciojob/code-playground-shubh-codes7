import React from 'react'

function Login({isAuthenticated, setIsAuthenticated}){

    return(
        <>
            Login
            <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
        {isAuthenticated ? "Log Out" : "Log In"}
      </button>
        </>
    )
}

export default Login