import React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activePage = ({ isActive }) => {
        return { backgroundColor: isActive ? "#004182" : "" };
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            Classimax
                        </Typography>
                        <Button component={NavLink} to="/" sx={{ color: "white", textTransform: "none", fontSize: "1rem" }} style={activePage}>
                            Home
                        </Button>
                        <Button component={NavLink} to="/contact" sx={{ color: "white", textTransform: "none", fontSize: "1rem" }} style={activePage}>
                            Contact
                        </Button>
                        <Button component={NavLink} to="/login" sx={{ color: "white", textTransform: "none", fontSize: "1rem" }} style={activePage}>
                            Login
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;
