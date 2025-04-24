import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PrivateRoute({isAuthenticated}){
    const navigate = useNavigate()
    

    useEffect(()=>{
        if (!isAuthenticated) {
            navigate("/login");
        }
    },[isAuthenticated])

    return(
        <>
            Hi Welcome to Code PlayGround
        </>
    )
}

export default PrivateRoute