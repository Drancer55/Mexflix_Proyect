//Al declararse el siguiente hidden se ocultan las pantallas que no queremos que aparezcan 
document.getElementById("pantalla2").hidden = true;
document.getElementById("pantalla3").hidden = true;
document.getElementById("boton").hidden = true;
//Autentificación del usuario sólo con hacer coincidir el password
let access = document.getElementById("enter")
    console.log(access)
enter.addEventListener("click",function(){
    let password = document.getElementById("password").value
    if (password == "abcd"){
        document.getElementById("pantalla1").hidden = true
        document.getElementById("pantalla2").hidden = false
    } else {
        alert ("Tu contraseña no coincide con el registrado en nuestra base de datos, intentalo de nuevo")
    }
})
//Bienvenida con el nombre de usuario (pendiente)
let userName = document.getElementById("usuario").value
    console.log(userName)
    document.getElementById("bienvenida").innerHTML = ("Bienvenid@ " + userName);
//Se establece conexión con data.js para interactuar con las API
import {getOMBDAPI} from "./data.js"
    console.log (getOMBDAPI)
//Search: para buscar el texto ingresado por el usuaro desde el HTML
//Search: Para accionar la busqueda se habilitar la tercer pantalla
var search = () => {
        let searchValue = document.getElementById("inputValue").value
        document.getElementById("pantalla1").hidden = true
        document.getElementById("pantalla3").hidden = false
        document.getElementById("boton").hidden = false
        getOMBDAPI(searchValue)
    }
//Al dar click en el boton de busqueda comienza la mágia
let buttonSearch = document.getElementById("search");
    buttonSearch.addEventListener('click', search); //clickéale baby
