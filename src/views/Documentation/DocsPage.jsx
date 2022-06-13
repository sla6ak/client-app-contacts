import React from "react";
import { Typography, Container } from "@mui/material";
import Title from "components/Title/Title";
import { Get, Delet, Post, Path, Shema } from "./DocsPage.style";

export default function DocsPage() {
    return (
        <Container
            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Title text={"Short documentation my application"} />
            <Typography sx={{ mb: 2 }}>
                <Shema>USER:</Shema>"/api-contacts/users"
            </Typography>
            <Typography sx={{ mb: 2 }}>
                <Get>GET</Get>"/current"
            </Typography>
            <Typography sx={{ mb: 2 }}>
                <Post>POST</Post>"/signup"
            </Typography>
            <Typography sx={{ mb: 2 }}>
                <Post>POST</Post>"/login"
            </Typography>
            <Typography sx={{ mb: 2 }}>
                <Shema>CONTACTS:</Shema>"/api-contacts/contacts"
            </Typography>
            <Typography sx={{ mb: 2 }}>
                <Get>GET</Get>"/"
            </Typography>
            <Typography sx={{ mb: 2 }}>
                <Post>POST</Post>"/"
            </Typography>
            <Typography sx={{ mb: 2 }}>
                <Delet>DELETE</Delet>"/:id"
            </Typography>
            <Typography sx={{ mb: 2 }}>
                <Path>PATH</Path>"/:id"
            </Typography>

            <Typography>
                <span></span>List links to my work:
            </Typography>
            <Container
                sx={{
                    marginTop: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <a href="https://github.com/sla6ak/client-app-contacts">FRONTEND CODE</a>
                <br />
                <a href="https://github.com/sla6ak/full-app">BACKEND CODE</a>
            </Container>
        </Container>
    );
}
