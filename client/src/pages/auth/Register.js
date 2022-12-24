import React, { useState } from "react";
import { TextField, Button, Box, Alert, FormControlLabel, Checkbox } from "@mui/material";
import { Form, NavLink, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../services/userAuthApi";

const Register = () => {
    // const [error, setError] = useState({
    //     status: false,
    //     message: "",
    //     type: "",
    // });

    //!     Server Error
    const [server_error, setServerError] = useState({});

    const navigate = useNavigate();

    //!     TRK Query
    const [registerUser, { isLoading }] = useRegisterUserMutation();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const accuretData = {
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password"),
            password2: data.get("password2"),
            tc: data.get("tc"),
        };

        const res = await registerUser(accuretData);

        console.log(res);

        // if (accuretData.name && accuretData.email && accuretData.password && accuretData.password2 && accuretData.tc !== null) {
        //     if (accuretData.password === accuretData.password2) {
        //         console.log(accuretData);
        //         setError({ status: true, message: "Registations Success", type: "success" });
        //         document.getElementById("register-form").reset();
        //     } else {
        //         setError({ status: true, message: "Didn't match password and confirm password", type: "error" });
        //     }

        //     setTimeout(() => {
        //         navigate("/dashboard");
        //     }, 2000);
        // } else {
        //     setError({ status: true, message: "All fields are require", type: "error" });
        // }
    };

    return (
        <>
            <Box component="form" noValidate sx={{ m: 1 }} id="register-form" onSubmit={handleSubmit}>
                {/* {error.status && (
                    <Alert severity={error.type} sx={{ mt: 2 }}>
                        {error.message}
                    </Alert>
                )} */}

                <TextField margin="normal" required fullWidth id="name" name="name" label="Full Name" />

                <TextField margin="normal" required fullWidth id="email" name="email" label="Email Address" />

                <TextField margin="normal" required fullWidth id="password" name="password" label="Password" type="password" />

                <TextField margin="normal" required fullWidth id="password2" name="password2" label="Confirm Password" type="password" />

                <FormControlLabel control={<Checkbox value={true} color="primary" name="tc" id="tc" />} label="I agree to terms and conditions." />

                <Box textAlign="center">
                    <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2, px: 2 }}>
                        Join
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default Register;
