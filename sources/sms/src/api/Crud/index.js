import Api from "../Api";


const getAll = async () => {
  let res = await Api.get("/view-all-providers");
  return res;
};

const createProvider = async (provider) => {
  let res = await Api.post("create-provider", provider, { timeout: 9000000 });
  return res;
};

export { getAll, createProvider };
