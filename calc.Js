function calc1(){
    var vl = document.getElementById("ponto-3").value;
    var divi = document.getElementById("ponto-4").value;
    var dec = decompor(Number(vl));
    console.log(dec)
    var res = montarraiz(dec,divi)
    decToFrac(vl)
    document.getElementById("resul1").value=res;

}
