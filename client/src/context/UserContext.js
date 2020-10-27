import React, { useEffect, useState } from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create();
userAxios.interceptors.request.use(config => {
	const token = localStorage.getItem("token");
	config.headers.Authorization = `Bearer ${token}`;
	return config;
});

export default function UserProvider(props) {
    const initState = {
        user: {},
        token: localStorage.getItem("token") || "",
        //ITEMS???????  DATA???????
    }
    const [userState, setUserState] = useState(initState)
	
	useEffect(() => {
		if (userState.token) {
			userAxios.get("/api/user").then(response => {
				setUserState(prevState => ({...prevState, user: response.data}));
			}).catch(err => {
				console.dir(err);
				logout();
			});
		} //eslint-disable-next-line
	}, []);
	
	function signup(credentials) {
        axios.post("/auth/signup", credentials)
      
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => console.dir(err)) //err.message
    }

    function login(credentials) {
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                //INSERT GET DATA FUNCTION HERE???
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => console.dir(err)); 
    }

    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState(initState)
    }

    // function getData???????

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
				userAxios
                //add other functions to export
            }}>
            {props.children}
        </UserContext.Provider>
    )
}