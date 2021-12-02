export default {
  getRequest,
  getSingleRequest,
  putRequest,
  postRequest,
  deleteRequest,
}; 

//location is the URL
//callback is the api call function
function getRequest(location, callback) {
    fetch(location)
      .then(response => response.json())
      .then(data => {
          console.log(data);
        callback(data);
      })
      .catch(err => console.log(err));
}
function getSingleRequest(location, id, callback) {
    fetch(location + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        callback(data);
      })
      .catch((err) => console.log(err));
}
//requestBody come from frontend form
function postRequest(location, requestBody, callback) {
    fetch(`${location}`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
        callback(data);
    })
    .catch(err => console.log(err));
}

// location must end in a '/'
function putRequest(location, id, requestBody, callback) {
    fetch(`${location}${id}`, {
        method: "PUT",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
        callback(data);
    })
    .catch(err => console.log(err));
}

function deleteRequest(location, id, callback) {
    fetch(`${location}${id}`, 
    {
        method: "DELETE",
        headers: {
            "content": "application/json"}
    })
    .then(response => response.json())
    .then(data => {
        callback(data);
    })
    .catch(err => console.log(err));
}