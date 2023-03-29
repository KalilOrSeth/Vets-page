var Fecha = {
    Anacimiento:parseInt(prompt("Ingrese el año de nacimiento")),
    edad:null,
    num:null,
    elegir:null,


    Calcularedad:function(){
    let Fechas;
    Fechas = new Date();
    document.write(Fechas);
    document.write('El año actual es:');
    document.write('<br>');
    document.write(Fechas.getFullYear());

    Fecha.edad=Fechas.getFullYear()-Fecha.Anacimiento;
    document.write("Su edad actual es:",Fecha.edad);
    },
    numeroaleatorio:function(){
        let num=parseInt(prompt("Ingresar un numero"));
        let Elegir=parseInt(Math.random()*10)+1;
        console.log(Fecha.Elegir)
        if(num==Elegir)
        {
            alert("Acerto el numero al alzar");
        }else{
            alert("Sigue intentando");
        }
    
    }


}


Fecha.Calcularedad();
Fecha.numeroaleatorio();