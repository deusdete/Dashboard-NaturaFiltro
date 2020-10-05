import api from "../../services/api";

export const setAuthorizatonHeader = (token, userData) => {
    const authToken = `Bearer ${token}`;
    const _user = JSON.stringify(userData)
    console.log('_currentUser', _user);
    console.log('_currentUserToken', authToken);

    localStorage.setItem("_currentUser", _user);
    localStorage.setItem("_currentUserToken", authToken);
    api.defaults.headers.Authorization = authToken;
};