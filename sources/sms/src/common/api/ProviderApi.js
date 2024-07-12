import Api from "./Api";

const getAll = async () => {
  let res = await Api.get("/view-all-providers", { timeout: 300000 });
  return res;
};

const get = async () => {};

const create = async (provider) => {
  let res = await Api.post("create-provider", provider, { timeout: 300000 });
  return res;
};

const update = async (provider, id) => {
  let res = await Api.patch(`/update-provider/${id}`, provider, {
    timeout: 300000,
  });
  return res;
};

const deleteProvider = async (provider) => {
  let res = await Api.delete(`/delete-provider/${provider}`, {
    timeout: 300000,
  });
  return res;
};

const panigation = async (page, size) => {
  let res = await Api.get(`/view-all-providers/${page}/${size}`, {
    timeout: 300000,
  });
  return res;
};

const Provider = {
  getAll,
  get,
  create,
  update,
  deleteProvider,
  panigation,
};

export default Provider;
