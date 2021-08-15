import axios from "axios";

import { HTTP_CODE } from "constants/common";
import { getToken } from "utils/auth";

function formatResponse(response: any) {
  return response.data;
}

export function handleDataError(error: any) {
  let message;
  console.log(
    "Thien C: Api.Util.js, F: handleDataError, N: error.response ",
    error.response
  );
  if (error.response) {
    if (error.response.status === HTTP_CODE.Unauthorized) {
      if (!window.location.href.includes("login")) {
      }

      message =
        error.response.status === HTTP_CODE.Unauthorized
          ? "Login failed"
          : "Token expired. Please try again!";
    } else if (error.response.status === HTTP_CODE.InternalServerError) {
      message = "Internal Server Error";
    } else {
      message = error.response.data.errors.message;
    }
  }

  if (!message || message.length < 1) {
    return { message: "Oops, something went wrong" };
  }

  return { message };
}

function handleBeforeCallApi() {
  // Add a request interceptor
  axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent

      config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["Access-Control-Allow-Headers"] =
        "Origin, X-Requested-With, Content-Type, Accept";
      config.headers["RexyAdmin-Authorization"] = getToken();

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
}

function handleAfterCallApi() {
  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data

      return formatResponse(response);
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (error.response && error.response.status === 401) {
        window.location.pathname = "/sign-in";
        localStorage.removeItem("RexyAdmin-Authorization");
        console.clear();
      }
      if (error.response && error.response.status === 403) {
        window.location.pathname = "/forbidden";
      }

      return Promise.reject(handleDataError(error));
    }
  );
}

function setUpApi() {
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

  handleBeforeCallApi();

  handleAfterCallApi();
}

export { setUpApi };
