import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const userContext = React.createContext();

const UserContext = ({ children }) => {
    const [userLoading, setUserLoading] = useState(true);
    const [userError, setUserError] = useState({ status: false, message: "" });
    const [user, setUser] = useState({});

    const token = localStorage.getItem("token")


    const handleFetchMe = async () => {
        setUserLoading(true);
        try {
            const token = localStorage.getItem("token"); // all places where you are calling api, you need to add token
            const response = await axios.get(
                `http://localhost:3000/api/v1/auth/me`,
                {
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                }
              );
              
            setUserError({ status: false, message: "" });
            setUser(response?.data?.result);
        } catch (error) {
            setUserError({ status: true, message: error?.message });
            setUser({ status: false });
        }
        setUserLoading(false);
    };

    useEffect(() => {
        handleFetchMe();
    }, []);

    const passing = { userLoading, userError, user, handleFetchMe };
    return (
        <userContext.Provider value={passing}>{children}</userContext.Provider>
    );
};

const useUserContext = () => useContext(userContext);

export { useUserContext, UserContext };
