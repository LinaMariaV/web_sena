import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginAction, logoutAction } from "./storages/auth";
import { getMe } from "./services/auth.service";

const paths_allowed = ["/login", "/register", "/", "/destinations", "/info"];

function AuthValidator() {
  const dispatch = useDispatch();

  useEffect(() => {
    const local_token = window.localStorage.getItem("token-api-sena");
    if (
      local_token !== null &&
      local_token !== undefined &&
      local_token !== ""
    ) {
      getMe(local_token)
        .then((res) => {
          dispatch(loginAction({ user: res.data, token: local_token }));
        })
        .catch((e) => {
          console.log("err", e);
          dispatch(logoutAction());
          let loc = window.location;
          if (!paths_allowed.includes(loc.pathname)) {
            window.location.href = "/login";
          }
        });
    } else {
      dispatch(logoutAction());
    }
  }, []);
  return null;
}

export default AuthValidator;
