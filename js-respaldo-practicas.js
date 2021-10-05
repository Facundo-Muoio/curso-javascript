class receta{
    constructor(harina, azucar, leche){
        this.harina = harina;
        this.azucar = azucar;
        this.leche = leche;
    }
    hablar() {
        console.log("La cantidad de harina necesaria es: " + this.harina);
    }  
}

const torta = new receta("2kg", "200gr", "230ml");
torta.hablar();
console.log(torta);
console.log(torta.harina);
console.log(torta["azucar"]);
console.log(torta["leche"]);



// acceder al valor de una propiedad a travez de una variable cuya asignación es el nombre de la propiedad
let cantidadHarina = "harina";  
console.log(torta[cantidadHarina]); 

// Actualizamos el valor de la propiedad con el nombre de la variable que contiene al objeto seguido de un punto y el nombre de la propiedad, luego se asigna el valor deseado.
torta.harina = "5kg";
console.log(torta.harina);

// Agragamos un arreglo como valor de la propiedad que deseamos. Del mismo moco que acutalizamos el valor de la propiedad.
torta.harina = ["harina 000"];
console.log(torta.harina);

// Agregamos una propiedad escribiendo el nombre de la variable que contiene al objeto + un punto seguido del nombre de la propiedad + el valor que queremos asignar a dicha propiedad
torta.agua = "500ml";
console.log(torta.agua);

// Para eliminar una propiedad de un objeto se necesita; poner delete delante  del nombre de la varible que contiene el objeto + un punto seguido del nombre de la propiedad que queremos eliminar.
delete torta.agua ;
console.log(torta.agua);

 
class ElementosQuimicos{
    constructor(Aluminio, Azufre, Cloro, Helio, Boro, Litio){
        this.Al = Aluminio;
        this.S = Azufre;
        this.Cl = Cloro;
        this.He = Helio;
        this.B = Boro;
        this.Li = Litio;
    }
}

const elementos = new ElementosQuimicos("Aluminio", "Azufre", "Cloro", "Helio" , "Boro", "Litio"); 
console.log(elementos); 
console.log(elementos.S)


// Utilizamos el método hasOwnProperty para verificar si el objeto posee la propiedad que pasamos como parametro. Este método es util para usarlo como un condicional. Utilizando como condición el método q será verdadero si existe en el objeto y falso en caso contrario. 
console.log(elementos.hasOwnProperty("Al"));
console.log(elementos.hasOwnProperty("I"));

function verificarPropiedad(obj, propiedad){
    if (obj.hasOwnProperty(propiedad)){
        return "Propiedad " + obj[propiedad];
    } else{
        return "El objeto no tiene esta propiedad";
    }
}

console.log(verificarPropiedad(elementos,"I"));

// Añado a un arreglo dentro de un constructor de la siguiente manera:
class OrdenesDePizza{
    constructor(tipo, tamaño, precio, toppings){
        this.tipo = tipo;
        this.tamaño = tamaño;
        this.precio = precio;
        this.toppings = toppings;
    }

    paraLlevar(){
        return true;
    }
}

const pizzaMuzza = new OrdenesDePizza("Muzarrella", "Individual", 5.67, ["Extra queso","Champiniones","Piña"]);
console.log(pizzaMuzza);
console.log(pizzaMuzza.paraLlevar);
console.log(pizzaMuzza.precio);
console.log(pizzaMuzza.tipo);
console.log(pizzaMuzza.toppings);
console.log(pizzaMuzza.tamaño);


// function rango(inicio, final) {
//     let a = [inicio];
//     while (inicio < final) {
//     a.push(++ inicio);
//     }
//     return a
// }

// console.log(rango(26, 39)); 


function range(inicio, final, paso){
    let b = [];
    for(i = inicio += paso ; i < final; i += paso){
    b.push(i);
    }
    return b 
}


console.log(range(20,50,1))

// clase constructor que utilize para meter un objeto dentro de otro objeto y ingresar en sus valores.

class MiReceta{
    constructor(descripcion,costo,ingredientes,cobertura){
        this.descripcion = descripcion;
        this.costo = costo;
        this.ingredientes = ingredientes;
        this.cobertura = cobertura;
    }
}


const miReceta = new MiReceta("mi postre favorito",15.6,{harina:"100grs",sal:"1 cucharadita",agua:"1 taza"},{azucar:"120grs",chocolate:"4 cucharadas",mantequilla:"200grs"})

console.log(miReceta);
console.log(miReceta.ingredientes["harina"])
console.log(miReceta.ingredientes["sal"])
console.log(miReceta.ingredientes["agua"])


// clase que es un arreglo a su vez contiene un objeto dentro y otros dos arreglos mas
class MisPlantas{
    constructor(tipo,lista,otroObjeto){
        this.tipo = tipo;
        this.lista = lista;
        this.otroObjeto = otroObjeto;
    }
}


const misPlantas = [new MisPlantas("flores",["rosas","tulipanes","dientes de leon"],{tipo:"arboles",lista:["abeto","pino","abedul"]})]

// accediendo a el valor de un arreglo dentro de un objeto mediante una variable
console.log(misPlantas)
let primeraFlor = misPlantas[0].lista[0];
// accediendo al valor de un arreglo dentro de un objeto por medio de console
console.log(primeraFlor);
console.log(misPlantas[0].otroObjeto.lista[2])


// Desafío final de freecodecamp de objetos

class ColeccionDeDiscos{
    constructor(id,id2){
        this.id = id;
        this.id2 = id2;
    }
}

const coleccionDeDiscos = new ColeccionDeDiscos({tituloDelAlbum:"Bee Gees Greatest",artista:"Bee Gees",canciones:["Stayin","Alive"]},{tituloDelAlbum:"ABBA Gold"});
console.log(coleccionDeDiscos);

function actualizarDiscos(discos,id,propiedad,valor){
    if (valor === ""){
        delete discos[id][propiedad]
    } else if (propiedad === "canciones"){
        discos[id][propiedad] = discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    } else{
        discos[id][propiedad] = valor;
    }
}

console.log(coleccionDeDiscos["id2"].artista)
actualizarDiscos(coleccionDeDiscos,"id2","artista","ABBA")
console.log(coleccionDeDiscos["id2"].artista)

const contactos = [
    {nombre: "Nora", apellido: "Nav", numero: "0543236543", gustos: ["Pizza", "Programación"]},
    {nombre: "Harry", apellido:"Potter", numero: "0994372684", gustos:["Hogwarts", "Magia"]},
    {nombre: "Sherlock", apellido: "Holmes", numero: "0487345643", gustos:["Casos interesantes", "Violin"]}
]

function buscarPerfil(nombre, propiedad) {
    for (let i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre === nombre) {
            return contactos[i][propiedad] || "La propiedad no existe." ;
        }
    }
    return "El contacto no está en la lista de contactos"
}

console.log(buscarPerfil("Nora", "gustos"));