import axios from "axios";
const urlItems = process.env.REACT_APP_HOST + "/items";

export const postItem = (body, token) => {
  return axios.post(urlItems, body, {
    headers: { "x-access-token": token },
  });
};

export const itemDetail = (id) => {
  const urlItemDetail = urlItems + `/${id}`;
  return axios.get(urlItemDetail);
};

export const itemEdit = (id, body, token) => {
  const urlItemEdit = urlItems + `/${id}`;
  return axios.patch(urlItemEdit, body, {
    headers: { "x-access-token": token },
  });
};

export const itemDelete = (id, token) => {
  const urlItemDelete = urlItems + `?id=${id}`;
  return axios.delete(urlItemDelete, {
    headers: { "x-access-token": token },
  });
};

export const itemTypeLimit = (params) => {
  const urlGetItems =
    urlItems +
    `?search=${params.search}&type=${params.type}&location=${params.location}&by=${params.by}&order=${params.order}&limit=${params.limit}&page=${params.page}`;
  console.log(urlGetItems);
  return axios.get(urlGetItems);
};

export const itemsearchFilter = (urlParams) => {
  const urlItemsearchFilter = urlItems + `/${urlParams}`;
  return axios.get(urlItemsearchFilter);
};

export const itemsearchFilterByRenterId = (urlParams, token) => {
  const urlItemsearchFilterByRenterId = urlItems + `/renter${urlParams}`;
  return axios.get(urlItemsearchFilterByRenterId, {
    headers: { "x-access-token": token },
  });
};
