import { useDispatch } from "react-redux";
import { newToken } from "redux/sliceToken";
import { isAuth } from "redux/sliceAuth";
import { useSelector } from "react-redux";
import { useLogoutUserMutation } from "server/contacts";
import { NavLink } from "react-router-dom";
import { linkActiv } from "../../utilits/linkActiv";

export function Logout() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [logoutUser] = useLogoutUserMutation();

    return (
        <>
            {auth ?? <div>User :{auth}</div>}

            <NavLink style={linkActiv} to="/docs">
                Docs
            </NavLink>
            <div
                onClick={() => {
                    logoutUser();
                    dispatch(newToken(""));
                    dispatch(isAuth(""));
                }}
            >
                Logout
            </div>
        </>
    );
}

Logout.propTypes = {};
