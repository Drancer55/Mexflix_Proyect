//Renderear, como pintar los resultados de la pelicula o serie encontrada
var renderingMovie = (filmData) => { //filmData se establece haciendo referencia a los datos que queremos extraer 
    console.log(filmData.Search)
    let resultado = document.getElementById("results") //Resultado de la busqueda en el catálogo de peliculas
for (let i = 0; i < filmData.Search.length; i++){ //Se hace una iteración "for" en donde podamos manipular los datos dentro de los diversos Array de OMBDApi ("Ya están proporcionados y acomodados desde origen")
//Son los datos que se imprimen en la Interface el cual incluye Imagen / Titulo / Año / Tipo (serie o corto/largometraje respectivamente)
//+= para que no se sobreescriban los resultados
    resultado.innerHTML += `<img src="${filmData.Search[i].Poster}" alt="Imagen de la pelicula" id="img-responsive" /> <br> <h2>${filmData.Search[i].Title}</h2> <h2>${filmData.Search[i].Year}</h2> <h2>${filmData.Search[i].Type}</h2>  `
}}
//Se envían los datos a través de 'export' haciendo conexión con 'index.js' por medio de la variable "getOMBDAPI"
export let getOMBDAPI = filmForSearch => {
    fetch ("http://www.omdbapi.com/?s=" + `${filmForSearch}` + "&apikey=d8504314")  //API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas.
    .then((response) => {
        console.log(response)
        if (response.status == 404) { //si hay un error manda la alerta para tener cuidado con la redacción de los datos a buscar en el catalogo
            alert("Es posible que haya un error ortográfico en la busqueda, por favor verifica y vuelve a intentarlo.")
        } else {
            response.json()
            .then((data) => renderingMovie(data))  //despues del fetch sigue un .then y un .catch
            .catch((error) => console.log(error))
        }
    })
    .finally (() => console.log("promesas cumplidas")) 
    }
//Seccion del recomendado principal
    let movieSelectionMain = ["tt2380307", "tt0103359", "tt0081852"] //Id= de la pelicula principal que se muestra al principio del catálogo
//Bring movie main recomended selection
    for (const imdbID of movieSelectionMain) {
        console.log(imdbID)
        fetch("http://www.omdbapi.com/?i=" +imdbID+ "&apikey=d8504314") //método global que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
        .then((response) => response.json())
        .then((data) => reanderingSelectedMovie(data))
        .catch((error) => console.log(error))
    }
//Rendering section movie main recomended
    let reanderingSelectedMovie = (data) => { //Variable declarada para la primer sección
        console.log(data)
        let movieSelectionSectionMainImg = document.getElementById("recomendadosImg") //se prepara el espacio en el HTML mediante el <div> con el ID correspondiente
        movieSelectionSectionMainImg.innerHTML += '<img src=' + `${data.Poster}` + ' /> '//template string JS
        let movieSelectionSectionMain = document.getElementById("recomendados") //se prepara el espacio en el HTML mediante el <div> con el ID correspondiente
        movieSelectionSectionMain.innerHTML += "<h1>Titulo: " + `${data.Title}`+ "</h1>" + "<h1>Año: " + `${data.Year}`+ "</h1>" + "<h3>Duración: " + `${data.Runtime}`+ "</h3>" + "<h3>Género: " + `${data.Genre}` + "</h3>" + "<h3>Actores: " + `${data.Actors}`+ "</h3>" + "<h3>Director: " + `${data.Director}` + "</h3>" +"<br>" +"<p>Resumen: " + `${data.Plot}`+ "</p>"//template string JS
          //Se imprimen los datos seleccionados en HTML
}
//Sección de Populares
    let movieSelectionPopular = ["tt0096697", "tt1305826", "tt6595896", "tt2861424", "tt1710308", "tt1865718", "tt4116284", "tt0126029", "tt0386180", "tt0114709"] //Array con los ID de las peliculas seleccionadas
//Bring movie selection 
    for (const imdbID of movieSelectionPopular) {
        console.log(imdbID)
        fetch("http://www.omdbapi.com/?i=" +imdbID+ "&apikey=d8504314") //método global que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
        .then((response) => response.json())
        .then((data) => reanderingSelectedMovie1(data))
        .catch((error) => console.log(error))
    }
//Rendering section popular movie recomended
let reanderingSelectedMovie1 = (data) => {
    console.log(data)
    let movieSelectionSectionPopImg = document.getElementById("popularesImg")
    let movieSelectionSectionPop = document.getElementById("populares")
    movieSelectionSectionPopImg.innerHTML += '<img src=' + `${data.Poster}` + ' /> '
    movieSelectionSectionPop += "<br>" + "<h1>Titulo: " + `${data.Title}`+ "</h1>" + "<h1>Año: " + `${data.Year}`+ "</h1>" + "<h3>Duración: " + `${data.Runtime}`+ "</h3>" + "<h3>Género: " + `${data.Genre}` + "</h3>" + "<h3>Actores: " + `${data.Actors}`+ "</h3>" + "<h3>Director: " + `${data.Director}` + "</h3>" +"<br>" +"<p>Resumen: " + `${data.Plot}`+ "</p>"//template string JS
}       //Se imprimen los datos seleccionados en HTML
//Sección de Clásicos Animados 
let movieSelectionClassic = ["tt0105941", "tt0115200", "tt0166910", "tt0255768", "tt0112453", "tt0053502", "tt0145628", "tt0101178", "tt0214341", "tt0175058"] //Array con los ID de las peliculas seleccionadas
//Bring movie selection 
for (const imdbID of movieSelectionClassic) {
    console.log(imdbID)
    fetch("http://www.omdbapi.com/?i=" +imdbID+ "&apikey=d8504314")
    .then((response) => response.json())
    .then((data) => reanderingSelectedMovie2(data))
    .catch((error) => console.log(error))
}
//Rendering section movie Cartoon Clasic recomended
let reanderingSelectedMovie2 = (data) => {
    console.log(data)
    let movieSelectionSectionClassImg = document.getElementById("clasicosAnimadosImg")
    let movieSelectionSectionClass = document.getElementById("clasicosAnimados")
    movieSelectionSectionClassImg.innerHTML += '<img src=' + `${data.Poster}` + ' /> '
    movieSelectionSectionClass.innerHTML += "<br>" + "<h1>Titulo: " + `${data.Title}`+ "</h1>" + "<h1>Año: " + `${data.Year}`+ "</h1>" + "<h3>Duración: " + `${data.Runtime}`+ "</h3>" + "<h3>Género: " + `${data.Genre}` + "</h3>" + "<h3>Actores: " + `${data.Actors}`+ "</h3>" + "<h3>Director: " + `${data.Director}` + "</h3>" +"<br>" +"<p>Resumen: " + `${data.Plot}`+ "</p>"//template string JS
}       //Se imprimen los datos seleccionados en HTML
//Sección de educación
let movieSelectionEducation = ["tt0052751", "tt0264734", "tt1620938", "tt0266543", "tt0487849", "tt0484469", "tt0235917", "tt1731145", "tt3121722", "tt0047834"] //Array con los ID de las peliculas seleccionadas
    for (const imbdID of movieSelectionEducation) {
        console.log(imbdID)
        fetch("http://www.omdbapi.com/?i=" +imbdID+ "&apikey=d8504314")
        .then((response) => response.json())
        .then((data) => reanderingSelectedMovie3(data))
        .catch((error) => console.log(error))
    }

let reanderingSelectedMovie3 = (data) => {
    console.log(data)
    let movieSelectionSectionEduImg = document.getElementById("educacionImg")
    let movieSelectionSectionEdu = document.getElementById("educacion")
    movieSelectionSectionEduImg.innerHTML += '<img src=' + `${data.Poster}` + ' /> '
    movieSelectionSectionEdu.innerHTML += "<br>" + "<h1>Titulo: " + `${data.Title}`+ "</h1>" + "<h1>Año: " + `${data.Year}`+ "</h1>" + "<h3>Duración: " + `${data.Runtime}`+ "</h3>" + "<h3>Género: " + `${data.Genre}` + "</h3>" + "<h3>Actores: " + `${data.Actors}`+ "</h3>" + "<h3>Director: " + `${data.Director}` + "</h3>" +"<br>" +"<p>Resumen: " + `${data.Plot}`+ "</p>"//template string JS
    }       //Una vez más se imprimen los datos seleccionados en HTML

