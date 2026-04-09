import axios from "axios";

export const postOrder = async (payload) => {
  const response = await axios.post("https://reqres.in/api/pizza", payload, {
    headers: {
      "x-api-key":
        "pub_e2a65bdc205b662b42e9ca9a0e63d0734b3373e983ce1c399c01076891f50665",
    },
  });

  return response.data;
};
