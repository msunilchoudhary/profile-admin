import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

function useGetUser() {
    const [authUsers, setAuthUsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const getUsers = async () => {
            setLoading(true)
            try {
                const token = Cookies.get("token");
                const response = await axios.get("/api/user/", {
                    headers:{
                        Authorization: `Bearer ${token}`
                    },
                    Credentials:true
                })
                setAuthUsers(response?.data)
                setLoading(false)
            
        } catch (error) {
            console.log(error.response?.data?.message)
        }
        }
        getUsers()
    },[])

  return [authUsers, loading]
}

export default useGetUser