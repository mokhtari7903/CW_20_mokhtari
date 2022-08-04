import HttpService from "services/services";

export const getUsers = async () => {
  const res = await HttpService.get("users");
  return res.data;
};

export const getUser = async (id: string) => {
  const res = await HttpService.get(`users/${id}`);
  return res.data;
};
