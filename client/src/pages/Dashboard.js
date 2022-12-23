import React from "react";
import { Grid, Typography, Button, CssBaseline } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./auth/ChangePassword";

const Dashboard = () => {
    const navigate = useNavigate();

    const logoutHandler = () => {
        console.log("Logout");
        navigate("/login");
    };

    return (
        <>
            <CssBaseline />
            <Grid container>
                <Grid item sm={4} sx={{ backgroundColor: "gray", p: 5, color: "white" }}>
                    <Typography variant="h4">Name : Arunesh kumar</Typography>
                    <Typography variant="h6">Email : aruneshkumar.king@gmail.com</Typography>
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
