import axios from "axios/index";

axios.post("http://localhost:3001/posts",
    {title: "another title", author: "prasun"})
    .then((response) => {
        console.log(response);
    });

//////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
axios.get("http://localhost:3001/profile")
    .then((response) => {
        const storeId = response.data.personalizedStoreId;
        axios.get(`http://localhost:3001/stores/${storeId}`)
            .then((response) => {
                console.log(response.data);
            });
    });


return axios.get("http://localhost:3001/profile")
    .then((response) => {
        const name = response.data.firstName;
    });