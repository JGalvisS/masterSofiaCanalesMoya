/*var button = document.getElementById('myButton');
// Agregar un evento onclick al botón
button.addEventListener('click', function() {
    var apiKey = 'a3YBxamBrO8DylkkNGbiKj4JiNAireyp';
    var searchTerm =  document.getElementById('seekerGifs').value.trim();
    var baseUrl = 'https://api.giphy.com/v1/gifs/trending';
    var params = {
      'api_key': apiKey,
      'q': searchTerm,
      'limit': 15,  // Número máximo de GIFs a devolver
      'rating': 'g' // Clasificación de contenido (puedes ajustar esto según tus necesidades)
      };
    var url = baseUrl + 'search?' + new URLSearchParams(params);
        // Realizar la solicitud GET a la API basede Giphy utilizando fetch
        fetch(url)
        .then(function(response) {
            // Verificar si la solicitud fue exitosa
            if (response.ok) {
                // Convertir la respuesta a formato JSON
                return response.json();
        
            }
            console.log(response);
            throw new Error('Error en la solicitud a la API de Giphy');
        })
        .then(function(data) {
            // Mostrar los GIFs encontrados
            displayGIFs(data.data);
        })
        .catch(function(error) {
            console.error('Error:', error);
        });
  
});
function displayGIFs(gifs) {
  var gifContainer = document.getElementById('containerGifs');
  // Limpiar el contenedor antes de agregar nuevos GIFs
  gifContainer.innerHTML = '';

  // Crear elementos para cada GIF y agregarlos al contenedor
  gifs.forEach(function(gif) {
      var gifElement = document.createElement('img');
      gifElement.src = gif.images.original.url;
      gifElement.alt = gif.title;
      gifContainer.appendChild(gifElement);
  });
}*/
const key = '&api_key=a3YBxamBrO8DylkkNGbiKj4JiNAireyp';
let search = "?q=";
const url = 'https://api.giphy.com/v1/gifs/search';
const limit = "&limit=15";

let q = "";
let urlComplete = "";

const btn = document.getElementById('myButton');
btn.onclick = () => {
    q = document.getElementById('seekerGifs').value;
    urlComplete = url + search + q + key + limit;
    getData();
}
const getData = async () => {
    await fetch (urlComplete).then((response) => {
        return response.json();
    }).then((ghipy) => {
        // console.log(ghipy.data);

    for(let i = 0; i < ghipy.data.length; i++) {
        const gif = document.createElement('img');
        console.log(ghipy.data[i])
        gif.src = ghipy.data[i].images["original"].url;
        document.getElementById("containerGifs").appendChild(gif);
    }
    })
}



