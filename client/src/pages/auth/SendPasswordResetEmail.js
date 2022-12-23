import React, { useState } from "react";
import { Grid, TextField, Button, Box, Alert } from "@mui/material";

const SendPasswordResetEmail = () => {
    const [error, setError] = useState({
        status: false,
        message: "",
        type: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const accuretData = {
            email: data.get("email"),
        };

        if (accuretData.email) {
            console.log(accuretData);

            setError({ status: true, message: "Password reset email sent. Please check your mail", type: "success" });

            document.getElementById("password-reset-send-form").reset();
        } else {
            setError({ status: true, message: "Please enter valid email.", type: "error" });
        }
    };

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item sm={6} xs={12}>
                    <Box component="form" noValidate sx={{ m: 1 }} id="password-reset-send-form" onSubmit={handleSubmit}>
                        {error.status && (
                            <Alert severity={error.type} sx={{ mt: 2 }}>
                                {error.message}
                            </Alert>
                        )}

                        <TextField margin="normal" required fullWidth id="email" name="email" label="Email Address" />

                        <Box textAlign="center">
                            <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2, px: 2 }}>
                                Send
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default SendPasswordResetEmail;
