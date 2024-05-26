import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginAction, logoutAction } from "./storages/auth";
import { getMe } from "./services/auth.service";

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
        });
    } else {
      dispatch(logoutAction());
    }
  }, []);
  return null;
}

export default AuthValidator;
