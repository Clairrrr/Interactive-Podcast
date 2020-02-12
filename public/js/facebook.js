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
    console.log(`login user: ${res.name}`);
    window.location.href = `http://localhost:3000/home/${res.name}`;
}