function calc1(){
    var vl = document.getElementById("ponto-3").value;
    var divi = document.getElementById("ponto-4").value;
    var dec = decompor(Number(vl));
    console.log(Number(dec))
    var res = montarraiz(dec,divi)
    document.getElementById("resul1").value=res;

}
