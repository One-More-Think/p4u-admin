import axios from "axios";

let body = {
  id: admin,
  password: 1234,
};

axios.post("http://localhost:3000/users/sign-in/admin", body).then((res) => {
  console.log(res.data);
});
