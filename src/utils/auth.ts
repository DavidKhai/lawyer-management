import moment from "moment";
import { getItem, removeItem, setItem } from "utils/local-storage";

const USER_DATA = "Authorization";

export const setData = (data: any) => {
  setItem(USER_DATA, data);
};

export const removeData = () => {
  removeItem(USER_DATA);
};

export const getUser = () => {
  try {
    const auth: any = getItem(USER_DATA);

    if (auth && auth.token) {
      const user = JSON.parse(atob(auth.token.split(".")[1]));

      const exp = new Date(user.exp * 1000);

      if (exp.getTime() > Date.now()) {
        return auth.user;
      }
    }
  } catch (e) {
    console.log("Thien C: localstorage.tsx, F: getUserData, N: e ", e);
    removeItem(USER_DATA);
  }

  return null;
};

export const getToken = () => {
  const authData: any = getItem(USER_DATA);

  return authData?.token || null;
};
export const getIsSupperAdmin = () => {
  const authData: any = getItem(USER_DATA);
  return authData?.is_super_admin || null;
};

export const validCallRefreshToken = () => {
  try {
    const token = getToken();
    if (!token) {
      return false;
    }

    const user = JSON.parse(atob(token.split(".")[1]));

    const now = moment(new Date());
    const end = moment(user.exp * 1000);
    const duration = moment.duration(end.diff(now));
    const minutes = duration.asMinutes();

    return minutes > 0 && minutes < 15;
  } catch (e) {
    console.log("Thien C: auth.util.tsx, F: checkExpireDay, N: e ", e);
    return false;
  }
};
