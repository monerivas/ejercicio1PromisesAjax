function getJSON(url) {
    return new Promise(function (resolve, reject) {
        var ajax = new XMLHttpRequest(); // Yo qiuiero que tu, servidor http me des informacion. 
        ajax.open("GET", url); // El open le dice al servidor vete preparando para hacer una peticion
        ajax.send(); // El send envia la peticion al servidor que se estaba cocinando con el open
        ajax.onreadystatechange = function () { // Es como un escuchador para cuando el estado cambie
            if (ajax.readyState == 4) { //El readyState igual a 4 significa que el response está finalizado y listo. 
                resolve(JSON.parse(ajax.responseText)); //El resolve quiere decir que la promesa se cumplió. El LSON.parse convierte el sting a un objeto JSON
            }
        }
    })
};


getJSON("data/earth-like-results.json")
    /*obtener información global deL JSON*/
    .then(function (contenidoDelObjeto) {
        return getJSON(contenidoDelObjeto.results.forEach(function (planetas) {
            /*obtener información de la propiedad result deL JSON que son el conjunto de planetas*/
            getJSON(planetas)
            /*obtener información de cada elemento deL JSON que es el planeta individual*/
                .then(function (planeta) {                
                console.log(planeta);
                funcionImpresora(planeta);
                
                });
        }));
    });

function funcionImpresora(planeta){
    var plantillFinal="";
        plantillFinal += plantilla.replace("__tituloPlaneta__", planeta.pl_name).replace("__fecha__", planeta.pl_disc).replace("__telescopio__", planeta.pl_telescope);
        
        var areaMostrado = document.getElementById("contenedorPlanetas");
        
        areaMostrado.innerHTML+= plantillFinal;
        
    };



var plantilla = "<div class='row'>" +
    "<div class='col s12 m7'>" +
    "<div class='card'>" +
    "<div class='card-image'>" +
    "<img src='static/img/planeta.jpg'>" +
    "<span class='card-title'>__tituloPlaneta__</span>" +
    "</div>" +
    "<div class='card-content'>" +
    "<span>__fecha__</span>" + "-"+
    "<span>__telescopio__</span>"+ 
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>";
