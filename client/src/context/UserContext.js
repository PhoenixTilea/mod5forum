import React, { useEffect, useState } from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()
let authInt;

export default function UserProvider(props) {
    const initState = {
        user: {},
        token: localStorage.getItem("token") || "",
        //ITEMS???????  DATA???????
    }
    const [userState, setUserState] = useState(initState)

    useEffect(() => {
		if (userState.token) {
			userAxios.interceptors.request.eject(authInt);
			authInt = userAxios.interceptors.request.use(config => {
				config.headers.Authorization = `Bearer ${userState.token}`;
				return config;
			});
		}
		// eslint-disable-next-line
	}, [userState]);
	
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
        axios.post("auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => console.dir(err.response.data.err.Msg)) //err.message
    }

    function login(credentials) {
        axios.post("auth/login", credentials)
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
            .catch(err => console.dir(err.response.data.errMsg)) //err.message
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