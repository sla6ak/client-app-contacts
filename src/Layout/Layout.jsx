import { Login } from "../components/Login/Login";
import { Header, BoxHeader, Footer, Main } from "./Layout.styled";
import { Conteiner } from "../components/Conteiner/Conteiner.styled";
import { BoxFooter } from "../components/BoxFooter/BoxFooter";
import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Logout } from "../components/Logout/Logout";
import { linkActiv } from "../utilits/linkActiv";
import { useSelector } from "react-redux";

export function Layout() {
    const auth = useSelector((state) => state.auth);
    return (
        <>
            <Header>
                <Conteiner>
                    <BoxHeader>
                        {auth !== "" ? (
                            <NavLink style={linkActiv} to="/contacts">
                                Contacts
                            </NavLink>
                        ) : (
                            <NavLink style={linkActiv} to="/">
                                Home
                            </NavLink>
                        )}
                        {auth === "" ? <Login /> : <Logout auth={auth} />}
                    </BoxHeader>
                </Conteiner>
            </Header>
            <Main>
                <Conteiner>
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Outlet />
                    </Suspense>
                </Conteiner>
            </Main>
            <Footer>
                <Conteiner>
                    <BoxFooter />
                </Conteiner>
            </Footer>
        </>
    );
}
