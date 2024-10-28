let frutas=['fresa','naranja','cereza','pera','fresa','uva','cereza','pera','fresa']
let tipofruta = {}  //objeto vacio donde se guardaran los tipos de fruta

console.log (frutas)

for (let i=0; i<frutas.length; i++){   //condicion de iteracion
    let fruta=frutas[i];     //se asigna la variable fruta, que sera igual al elemento del 
                             //arreglo frutas que arroje cada iteracion
    if(!tipofruta[fruta]){      //si el valor de la variable fruta NO existe 
                                //(caso de primeras 4 iteraciones)
    tipofruta[fruta]=1        //agregar 1 a la variable tipofruta
    } else {                    //si ya existe la fruta la variable tipofruta
        tipofruta[fruta]++     //sumarle 1 mas
    }
}
console.log(tipofruta)


