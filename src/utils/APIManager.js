import axios from "axios";
import qs from "qs";
const HOST_URL = "http://localhost:3065";
axios.defaults.withCredentials = true;

export default class ApiManager {
  constructor() {
    if (!ApiManager.instance) {
      ApiManager.instance = this;
    }
    return ApiManager.instance;
  }

  setHeader = (headers = {}) => {
    this.headers = {
      ...this.headers,
      headers,
    };
  };

  getHeaders = () => {
    this.headers = {
      "Content-Type": "application/json;charset=UTF-8",
      Accept: "application/json",
      mode: "no-cors",
      "Access-Control-Allow-Origin": "*",
    };
  };

  get = (url, params = null) => this.getRequest(url, "GET", params);
  delete = (url, params = null) => this.getRequest(url, "DELETE", params);
  post = (url, body = null, stringify = true) => {
    return this.postRequest(url, body, stringify, "POST");
  };
  put = (url, body = null, stringify = true) => {
    return this.postRequest(url, body, stringify, "PUT");
  };

  getRequest = async (url, method = "GET", params) => {
    try {
      const headers = this.getHeaders();
      const queryString = this._jsonToQueryString(params);
      const response = await axios({
        method,
        url: `${HOST_URL}${url}${queryString}`,
        headers,
      });
      const responeseJson = await response.json();
      return responeseJson;
    } catch (err) {
      return {
        code: 500,
        message: err,
      };
    }
  };

  postRequest = async (url, body = null, stringify = true, method = "POST") => {
    try {
      const bodyData = body ? (stringify ? JSON.stringify(body) : body) : {};
      const headers = this.getHeaders();
      const response = await axios({
        method,
        url: `${HOST_URL}${url}`,
        ...(body && { data: body }),
        headers,
      });
      console.log(response);
      return response;
      //   const responseJson = await response.json();
      //   return
    } catch (err) {
      return {
        status: 500,
        message: err,
      };
    }
  };

  /**
   * 쿼리스트링 파라미터 만들기
   */
  _jsonToQueryString = (params = null) => {
    let queryString = ``;
    if (params) {
      const keys = Object.keys(params);
      if (keys.length > 0) {
        for (let ii in keys) {
          queryString += `&${keys[ii]}=${params[keys[ii]]}`;
        }
        return `?${queryString.slice(1)}`;
      }
    }
    return ``;
  };
}
