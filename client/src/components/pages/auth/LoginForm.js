import React, { useState } from "react";
import { TextField, Button, Box, Alert, CircularProgress, Stack } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [error, setError] = useState({
        status: false,
        message: "",
        type: "",
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const accuretData = {
            email: data.get("email"),
            password: data.get("password"),
        };

        if (accuretData.email && accuretData.password) {
            console.log(accuretData);

            setError({ status: true, message: "Login Success", type: "success" });

            document.getElementById("login-form").reset();

            setTimeout(() => {
                navigate("/dashboard");
            }, 2000);
        } else {
            setError({ status: true, message: "All fields are require", type: "error" });
        }
    };

    return (
        <>
            <Box component="form" noValidate sx={{ m: 1 }} id="login-form" onSubmit={handleSubmit}>
                {error.status && (
                    <div>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <CircularProgress />
                        </Box>
                        <Alert severity={error.type} sx={{ mt: 2 }}>
                            {error.message}
                        </Alert>
                    </div>
                )}
                <TextField margin="normal" required fullWidth id="email" name="email" label="Email Address" />
                <TextField margin="normal" required fullWidth id="password" name="password" label="Password" type="password" />

                <Box textAlign="center">
                    <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2, px: 2 }}>
                        Login
                    </Button>
                </Box>
                <NavLink to="/sendpasswordresetemail">Forgot Password ?</NavLink>
            </Box>
        </>
    );
};

export default LoginForm;
