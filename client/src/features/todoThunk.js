import customFetch from "./customFetch";

export const getAllTodosThunk = async () => {
  let url = "/todos";
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return console.log(error);
  }
};
