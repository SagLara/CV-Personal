function carga() {
    var archivoTxt = new XMLHttpRequest();
    var fileRuta = "../utils/back-obj.txt";

    archivoTxt.open("GET", fileRuta, false);
    archivoTxt.send(null);

    var txt = archivoTxt.responseText;

    var objetivo = document.getElementById('objetivo');
    objetivo.innerHTML = txt;
}