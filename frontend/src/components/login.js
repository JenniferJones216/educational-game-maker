const UserURL = "" + "?u={0}&password={1}";

export default {

}

function Login(){
    let username = "";
    let password = "";

    fetch(UserURL.replace("{0}", username).replace("{1}", password))
    .then(response => response.json())
    .then(data => {
        document.cookie = "userId=" + data.id + ";";
    });

}