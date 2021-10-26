//Se declaran las pantallas que salen desde el principio
document.getElementById("pantalla1").hidden = false
document.getElementById("pantalla2").hidden = true
document.getElementById("back").hidden = true

//Autentificación del usuario sólo con hacer coincidir el password
let acceso = document.getElementById ("enter");
    acceso.addEventListener("click", function(){
        let password = document.getElementById("password").value
        if (password == "abcd"){
            document.getElementById("pantalla1").hidden = true
            document.getElementById("pantalla2").hidden = false
            document.getElementById("pantalla3").hidden = false
        } else {
            alert ("Tu contraseña no coincide con el registrado en nuestra base de datos, intentalo de nuevo")
        }
    })

//Se establece conexión con data.js para interactuar con las API
import {getOMBDAPI} from "./data.js"
    console.log (getOMBDAPI)

//Search: para buscar el texto ingresado por el usuaro desde el HTML
//Search: Para accionar la busqueda se habilitar la tercer pantalla
let searchValue = document.getElementById("search").value
    console.log(searchValue)
//Busqueda textual de la pelicula
let searchMovie = () => {
        document.getElementById("pantalla1").hidden = true
        document.getElementById("pantalla2").hidden = true
        document.getElementById("pantalla3").hidden = false
        document.getElementById("back").hidden = false
        let searchValue= document.getElementById("inputValue").value
        console.log(searchValue)
    getOMBDAPI(searchValue)
    //let movieFlayer = document.getElementById("inputValue").value
    //movieFlayer.hidden = false;
    }

let comeBack = document.getElementById("back")
    comeBack.addEventListener ('click', function(){
        document.getElementById("pantalla1").hidden = true
        document.getElementById("pantalla2").hidden = false
        document.getElementById("pantalla3").hidden = true
        document.getElementById("back").hidden = true
        document.getElementById("pantalla3").innerHTML = ""
    })


//Bienvenida con el nombre de usuario (pendiente)
let userName = document.getElementById("usuario").value
    console.log(userName)
    document.getElementById("bienvenida").innerHTML = ("Bienvenid@ " + userName);

//Al dar click en el boton de busqueMda comienza la mágia
let buttonSearch = document.getElementById("search");
    buttonSearch.addEventListener('click', searchMovie); //clickéale baby
