import React, { useState } from "react";
import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
    const navigate = useNavigate();

    const [error, setError] = useState({
        status: false,
        message: "",
        type: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const accuretData = {
            new_password: data.get("new_password"),
            confirm_new_password: data.get("confirm_new_password"),
        };

        if (accuretData.new_password && accuretData.confirm_new_password) {
            if (accuretData.new_password === accuretData.confirm_new_password) {
                console.log(accuretData);

                setError({ status: true, message: "Password Change Successfully.", type: "success" });

                document.getElementById("password-change-form").reset();

                setTimeout(() => {
                    setError({ status: false });
                }, 5000);
            } else {
                setError({ status: true, message: "Didn't match password and confirm password", type: "error" });
            }
        } else {
            setError({ status: true, message: "All fields are required.", type: "error" });
        }
    };

    return (
        <>
            <Grid container>
                <Grid item sm={6} xs={12}>
                    <Box component="form" noValidate sx={{ m: 1, ml: 5 }} id="password-change-form" onSubmit={handleSubmit}>
                        {error.status && (
                            <Alert severity={error.type} sx={{ mt: 2 }}>
                                {error.message}
                            </Alert>
                        )}

                        <TextField margin="normal" required fullWidth id="new_password" name="new_password" label="New Password" type="password" />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="confirm_new_password"
                            name="confirm_new_password"
                            label="Confirm New Password"
                            type="password"
                        />

                        <Box textAlign="center">
                            <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2, px: 2 }}>
                                Change
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default ChangePassword;
