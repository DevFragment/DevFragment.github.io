function calc1(){
    var vl = document.getElementById("ponto-3").value;
    var divi = document.getElementById("ponto-4").value;
    var dec = decompor(Number(vl));
    console.log(dec)
    var res = montarraiz(dec,divi)
    
    document.getElementById("resul1").value=res;
    //document.getElementById("resul2").value=decToFrac(vl);

}
function calc2(){
    var num = document.getElementById("num").value;
    var deno = document.getElementById("deno").value;

    var res = simpFrac(num,deno)
    document.getElementById("resul2").value=res;
}