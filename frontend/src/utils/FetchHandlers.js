import axios from "axios";


const token = localStorage.getItem("token")

const header = {
     'Authorization': `Bearer ${token}`
}

export const getAllHandler = async (url) => {
    const res = await axios.get(url, {headers: {...header}});
    return res.data;
};

export const getSingleHandler = async (url) => {
    const res = await axios.get(url, {headers: {...header}});
    return res?.data?.result;
};

export const postHandler = async ({ url, body }) => {
    return await axios.post(url, body, {headers: {...header}});
};

export const updateHandler = async ({ url, body }) => {
    const res = await axios.patch(url, body, {headers: {...header}});
    return res?.data?.result;
};

export const updateHandlerPut = async ({ url, body }) => {
    return await axios.put(url, body, {headers: {...header}});
};

export const deleteHandler = async (url) => {
    return await axios.delete(url, {headers: {...header}});
};
