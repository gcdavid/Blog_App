import Axios from "axios";

export default {
  register: async (data: Register.RegisterInfo) =>
    await Axios.post("/register", data),
};
