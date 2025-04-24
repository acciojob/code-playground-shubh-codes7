import React from 'react'

function Login({isAuthenticated, setIsAuthenticated}){

    return(
        <>
            Login
            <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
        {isAuthenticated ? "Log out" : "Log in"}
      </button>
        </>
    )
}

export default Login