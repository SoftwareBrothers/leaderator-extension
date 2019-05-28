import axios from "axios";

const CONFIG = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
};

export const login = async (data) => {
    return axios.post('https://private-63e5ba-leaderator2.apiary-mock.com/auth/login', data, CONFIG);
};

export const addProspect = async (data) => {
    return axios.post('https://private-63e5ba-leaderator2.apiary-mock.com/prospects', data, CONFIG);
};

export const getFields = async () => {
    return axios.get('https://private-63e5ba-leaderator2.apiary-mock.com/fields', CONFIG);
};

export const findEmailByFields = async (data) => {
    return axios.get(`https://private-63e5ba-leaderator2.apiary-mock.com/email/check
    ?firstName=${data.firstName}&secondName=${data.secondName}&lastName${data.lastName}=&domain=${data.domain}`, CONFIG)
};

export const checkEmail = async (email) => {
    return axios.get(`https://private-63e5ba-leaderator2.apiary-mock.com/email/verify?email=${email}`, CONFIG)
};

export const verifyDomain = async (domain) => {
    return axios.get(`https://private-63e5ba-leaderator2.apiary-mock.com/prospects/domain/verify?domain=${domain}`, CONFIG)
};