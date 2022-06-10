
function isInt(vl){
    if(typeof vl=="number"){
        vl = Number(vl);
        if (vl%1 ==0){
            return true;
        }else{
            return false;
        }
    }else{  
        return false;
    }

}
function adcnarray(array, valor){
    
}


function decompor(v){
    //decompor raiz
/*
Ex; raiz(24)
  resultado  2√2*3 = 2√6

 */
    var i = 0;
    var n_primo=2
    var ndn_primo=0
    var valoresp= []
    if(isInt(v)){
        while (true){
            //100/2
            //50 /2
            //25 /5
            var vtemp = v/n_primo;
            if (v==1 && ndn_primo==0 && n_primo==2){
                return 1;
            }
            else if(v==0){
                return 0;
            }
            else if(isInt(vtemp)){
                //console.log("fim2")
                ndn_primo++
                v = vtemp;
            }else{
                //console.log(ndn_primo)


                if (1 <= ndn_primo){
                    //console.log("n"+n_primo)
                valoresp.push([n_primo,ndn_primo])
                }

                //console.log("fim")

                ndn_primo =0
                n_primo++;
                if (v==1 ){
                    //console.log(valoresp)
                    return valoresp;
                }
                //return 0;
            }
            
            i++;
        
        }
    }else{
        return 0
    }
    
}

function montarraiz(dec,divi){
    // dec[0] = 2 , 2
    if( dec != 0 || dec != 1){
        var vpost= 1
        var vant= 1
        
        console.log(dec)
        for (let i =0;i<dec.length;i++){
            /*
            console.log(dec[i][1])
        //  console.log([i][1])
            console.log(dec[i][0])*/
            
            if(dec[i][1] % divi == 0){
                vant = vant * (dec[i][0]**(dec[i][1]/divi)  )
                console.log(vant)
                
            }else if ((dec[i][1]/divi)-((dec[i][1]/divi)%1)==1){
              
                calc = (dec[i][0]**((dec[i][1]/divi)-((dec[i][1]/divi)%1)))
                console.log(vant)
                vant = vant * calc
                
                vpost = vpost * (dec[i][0]**(dec[i][1]%divi) )
            }else{
                console.log(vant+"c")
                vpost = vpost * (dec[i][0]**(dec[i][1]%divi) )
            }
           
        }
        //console.log(vant)
        if(vpost!=1){
            //console.log(vant+"√"+vpost)
            return (vant+"√"+vpost);
        }else{
            return vant
        }
    }else if(dec ==1){
        return 1
    }else{
        return 0
    }

}