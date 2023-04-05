document.getElementById("kayitformu").addEventListener("submit" , function(event){
event.preventDefault();

var username = document.getElementById("logname").value;
var password = document.getElementById("logpassk").value;


document.cookie= "username" + username;
document.cookie = "password" + password;

alert("kayit basarili bir sekilde tamamlandi");
});

document.getElementById("girisformu").addEventListener("submit" , function(event){
    event.preventDefault();
    
    var username = document.getElementById("kullaniciadi").value;
    var password = document.getElementById("sifre").value;
    
    var storedUsername = getCookie("username"); 
    var storedPassword = getCookie("password"); 

    if (username == storedUsername && password == storedPassword) {
        window.location.href = "./bireyselsayfasi.html";
    }
    else{
        alert("kullanici adi veya sifre hatali");
    }
    });

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
      }




