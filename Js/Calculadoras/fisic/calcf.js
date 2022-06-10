
//calculadora de fisica em js

// formula
// F =  |Q|. B .V . senθ
// Q = (B. V . senθ)/f
// V = (q. b . senθ)/f
// B = (q. V . senθ)/f 
document.addEventListener("keydown", function(e) {

    if(e.keyCode === 13) {
          
      e.preventDefault();
        
    }
  
  });
function verificar_sen( sen){
    if(typeof sen == "string"){
        if(sen.search("°")!=-1){
            //sen = sen.replace("°","");
            console.log(sen)
            return sen
        }else{
            console.log("2")
            return sen
        }
        
    }else if(typeof sen=="number"){
        console.log("3")
        
        return sen
    }

}

function calc_fqvb(v_sen, v_b,v_v,v_f){
    //v_sen= valor de seno

    console.log("1")
    //ver se é uma string ou se 
    v_sen = verificar_sen( v_sen );
    console.log(v_sen)

    //Math.sin(v_sen);
}

calc_fqvb("22°",33,22,22);
