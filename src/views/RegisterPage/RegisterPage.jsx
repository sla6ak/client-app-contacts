import * as React from "react";
import { Avatar, Button, CssBaseline, TextField, Typography, Container, Grid, Box } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { NavLink } from "react-router-dom";
import { useRegistrationUserMutation } from "server/contacts";
import { useDispatch } from "react-redux";
import { newToken } from "redux/sliceToken";
import { linkActiv } from "utilits/linkActiv";
import { isAuth } from "redux/sliceAuth";
import { toast } from "react-toastify";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const [createUser, { isError }] = useRegistrationUserMutation();
    const tosty = () => {
        toast.error("Error Registration");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const send = {
            name: data.get("fullName"),
            email: data.get("email"),
            password: data.get("password"),
        };
        const responsToken = await createUser(send);
        if (responsToken.data) {
            dispatch(newToken(responsToken.data.token));
            dispatch(isAuth(responsToken.data.user.name));
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            {isError && tosty()}
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "#009688" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="fullName"
                                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                required
                                fullWidth
                                id="firstName"
                                label="Full Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 8 }}>
                            <TextField
                                pattern='/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i'
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 8 }}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 10, mb: 8 }}>
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <NavLink style={linkActiv} to="/login">
                                Already have an account? Sign in
                            </NavLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default RegisterPage;
