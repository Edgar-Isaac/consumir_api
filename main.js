/*Ingresar numero de fantasma dentro de url */
const url= 'https://phasmophobiaapi.herokuapp.com/api/ghost/1/'

fetch(url)
.then(response => response.json())
.then(data => {
    
    let element = document.getElementById('elem')
    element.innerHTML= `
    <div>
    <p>No. Fantasma: ${data.ghost.n_ghost}</p>
    <p>Tipo: ${data.ghost.tipo} </p>
    <p>Descripcion: ${data.ghost.description} </p>
    <p>Puntos Fuertes: ${data.ghost.puntos_fuertes}. </p>
    <p>Puntos Debiles: ${data.ghost.puntos_debiles}</p>
    <p>Pruebas de detección: ${data.ghost.pruebas_para_detectarlo}</p>
    
    </div>    
    `;

    console.log(data)
})
.catch(err=>console.log(err))