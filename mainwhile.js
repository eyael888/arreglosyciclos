let frutas2=['fresa','naranja','cereza','pera','fresa','uva','cereza','pera','fresa'];
let tipofruta2 = {}  //objeto vacio donde se guardaran los tipos de fruta;
let i=0;    //la sintaxis del uso de while no me deja asignar variables ni condiciones 
            //para repetir iteracion, por tanto asigno la variable i fuera del ciclo
            //asi mismo se asigna la iteacion dentro de la intruccion del ciclo (ver abajo)

while (i<frutas2.length){   //mientras i sea menor al numero total de elementos de frutas2
                            //ocurriran las siguientes instrucciones
    let fruta2=frutas2[i];   // asignar una variable fruta2 que tendra el valor de la
                             //fruta, resultado de cada iteracion
      if (!tipofruta2[fruta2]){  //si la fruta no se encuentra en tipofruta2
        tipofruta2[fruta2]=1;    //agregar 1 de ese elemento o fruta
      }else {                    //si ya se encuentra la fruta en tipofruta2
        tipofruta2[fruta2]++;    //sumarle 1
    }
    i++                          //repetir el proceso con i+1
}

console.log(tipofruta2)
