import Api from "./Api";

const getAll = async () => {
  let res = await Api.get("/view-all-providers");
  return res;
};

const get = async () => {};

const create = async (provider) => {
  let res = await Api.post("create-provider", provider, { timeout: 9000000 });
  return res;
};

const update = async () => {};

const deleteProvider = async (provider) => {
  let res = await Api.delete(`/delete-provider/${provider}`, {
    timeout: 9000000,
  });
  return res;
};

const Provider = {
  getAll,
  get,
  create,
  update,
  deleteProvider,
};

export default Provider;
