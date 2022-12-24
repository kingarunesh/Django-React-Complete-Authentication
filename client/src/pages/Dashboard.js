import React, { useState, useEffect } from "react";
import { Grid, Typography, Button, CssBaseline } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./auth/ChangePassword";
import { getToken, removeToken } from "../services/localStorageServices";
import { useDispatch } from "react-redux";
import { unSetUserToken } from "../features/authSlice";
import { useGetLoggedUserQuery } from "../services/userAuthApi";

const Dashboard = () => {
    const [userData, setUserData] = useState({
        email: "",
        name: "",
    });

    //!     Access Token
    const { access_token } = getToken();

    //!     Redirect Navigation
    const navigate = useNavigate();

    //!     RTK Query
    const { data, isSuccess } = useGetLoggedUserQuery(access_token);
    console.log(data);

    useEffect(() => {
        if (data && isSuccess) {
            setUserData({
                email: data.email,
                name: data.name,
            });
        }
    }, [data, isSuccess]);

    //!     Redux
    const dispatch = useDispatch();

    //!     Logout Handler
    const logoutHandler = () => {
        dispatch(unSetUserToken({ access_token: null }));

        removeToken();

        navigate("/login");
    };

    return (
        <>
            <CssBaseline />
            <Grid container>
                <Grid item sm={4} sx={{ backgroundColor: "gray", p: 5, color: "white" }}>
                    <Typography variant="h4">Name : {userData.name}</Typography>
                    <Typography variant="h6">Email : {userData.email}</Typography>
                    <Button variant="contained" color="warning" size="large" sx={{ mt: 8 }} onClick={logoutHandler}>
                        Logout
                    </Button>
                </Grid>
                <Grid item sm={8}>
                    <ChangePassword />
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
