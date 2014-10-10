(function() {


    //var ele = document.querySelector(".dibujo");
    //es mejor utilizar el query selector que el getlementbyclass, así solo utilizamos una herramienta
    //solo va a devolver el primer elemnto con el rojo ya que el queryselector solo devuelve el primer elemento
    //con el query selector all no funciona nada porque es un array así que tendria que usar un for, no simplemente: ele.style.background = "red";

    var ele = document.querySelectorAll(".dibujo");

    for (var i = 0; i < ele.lenght; i++) {
        ele.style.background = "red";

    }
    

})();