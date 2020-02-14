function checkLoginState() {
    FB.getLoginStatus((res)=>{
        statusChangeCallback(res);
    });
}

function statusChangeCallback(res) {
   if(res.status === "connected"){
       FB.api('/me?fields=name,first_name,picture.width(480)', loginUser);
   }
}

function loginUser(res) {
    window.location.href = `home/${res.name}`;
}