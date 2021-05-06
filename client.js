const axios = require("axios");
const url = "http://localhost:3000";

// sample object
const someObj = {
    "msg": "hello!"
}

// get request
axios.get(
    url
)
.then((response) => {
    // successful response
    console.log("GET success:");
    console.log("data: " + response.data);
    console.log("status: " + response.status);
    console.log("statusText: " + response.statusText);
    console.log("headers: " + JSON.stringify(response.headers));
    console.log("config: " + JSON.stringify(response.config));
    // console.log("request: " + JSON.stringify(response.request));
})
.catch((error) => {
    // error
    console.error("GET error:\n" + error);
});

// post request
axios.post(
    url,
    someObj
)
.then((response) => {
    // successful response
    console.log("POST success:");
    console.log("data: " + response.data);
    console.log("status: " + response.status);
    console.log("statusText: " + response.statusText);
    console.log("headers: " + JSON.stringify(response.headers));
    console.log("config: " + JSON.stringify(response.config));
    // console.log("request: " + JSON.stringify(response.request));
})

// put request
axios.put(
    url + "/user",
    someObj,
)
.then((response) => {
    // successful response
    console.log("PUT success:");
    console.log("data: " + response.data);
    console.log("status: " + response.status);
    console.log("statusText: " + response.statusText);
    console.log("headers: " + JSON.stringify(response.headers));
    console.log("config: " + JSON.stringify(response.config));
    // console.log("request: " + JSON.stringify(response.request));
})

// delete
axios.delete(
    url + "/user"
).then((response) => {
    // successful response
    console.log("DELETE success:");
    console.log("data: " + response.data);
    console.log("status: " + response.status);
    console.log("statusText: " + response.statusText);
    console.log("headers: " + JSON.stringify(response.headers));
    console.log("config: " + JSON.stringify(response.config));
})
