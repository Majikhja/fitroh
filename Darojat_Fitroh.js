function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;
    if (username == "Fitroh123" && password =="Fitroh123"){
            if(confirm("Apakah anda ingin login?") == true){
                window.location.href = "https://github.com/D1A230071"
            } else {
                alert("Login dibatalkan !");
            }
            
    } else{
            if (done == 0) {
                alert("Username/Pasword Salah");
            }
    }
}