import { GlobalStyled } from "./GlobalStyled.styled";
import { Routes, Route } from "react-router-dom"; // работа с маршрутизацией
import { lazy } from "react";
import { Layout } from "Layout/Layout";
import { Home } from "views/Home/Home";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useGetIsActivUserQuery } from "server/contacts";
import { isAuth } from "redux/sliceAuth";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import PublicRoute from "components/PublicRoute/PublicRoute";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ContactsPage = lazy(() => import("../../views/ContactsPage/ContactsPage"));
const RegisterPage = lazy(() => import("../../views/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../../views/LoginPage/LoginPage"));
const DocsPage = lazy(() => import("../../views/Documentation/DocsPage"));

export const App = () => {
    const token = useSelector((state) => state.token);
    const dispatch = useDispatch();
    const { data: auth, error } = useGetIsActivUserQuery("", { skip: !token }); //'', { skip: !token } это пропускает запрос с проверкой токена если он и так пустая строка

    useEffect(() => {
        if (auth === undefined) {
            return;
        }
        dispatch(isAuth(auth.name)); //при монтировании компонентов проверяем подлинность токена.
    }, [auth, dispatch]);

    const tosty = () => {
        toast.error("Error login try again");
    };

    return (
        <>
            <GlobalStyled />
            <ToastContainer autoClose={3000} />
            {error && tosty()}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="/contacts"
                        element={
                            <PrivateRoute>
                                <ContactsPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <PublicRoute>
                                <RegisterPage />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <PublicRoute>
                                <LoginPage />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/docs"
                        element={
                            <PublicRoute>
                                <DocsPage />
                            </PublicRoute>
                        }
                    />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};
