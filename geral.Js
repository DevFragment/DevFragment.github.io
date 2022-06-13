
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

function decToFrac(val){
    val = Number(val)
    val = String(val)
    
    
    var frac = [];
    if (val.search(/\,/) !=-1){
        val = val.replace(",",".")
    }
    var sch = val.search(/\./)
    if(sch != -1){
        console.log(sch);
        console.log(val);
        var tam = val.length -(sch+1)
        if (tam >6){
            td = 6+ sch+1;
            val = val.substr(0,td);
            frac[0] = Number(val) * (10**6)
            frac[1] = 10**6
        }else{

            console.log((10**tam))
            frac[0] = Number(val) * 10**tam
            if ((frac[0]%1)>0){
                frac[0]= frac[0] - frac[0]%1
            }
            
            console.log(frac[0])
            frac[1] = 10**tam

        }
        simpFrac(frac[0],frac[1])
        return(frac)
    }else{
        return val
    }
}
function simpFrac(nun,den){
    var frac = []
    frac[0]=nun;
    frac[1]=den;

    var sfrac = [];
    sfrac[0] = frac[0] % frac[1];
    if (sfrac[0]==1){
        sfrac[1] = 1;
        return sfrac;
    }else{
        var dec = []
        dec[0] = decompor(frac[0]);
        dec[1] = decompor(frac[1]);
        var nfrac = [[]] ;
        
        
        
        

        //console.log(" a "+dec[0])
        console.log(dec[0])
        k = 0
        sol = 0
        for(let i = 0; i< dec[0].length;i++){
            //console.log("i = "+i)
            if (sol<dec[1].length){
                for(let j = sol;j< dec[1].length;j++){
                    console.log("j = "+j +' - dec[0] = ' + dec[1][j][0])
                    if(dec[0][i][0] == dec[1][j][0]){
                        console.log("op1"+k)
                        console.log(dec[0][i][0])
                        
                        nfrac.push([])
                        nfrac[k].push(dec[0][i][0])
                        nfrac[k][1] = dec[0][i][1] - dec[1][j][1];
                        sol = j+1
                        k++;
                        break;
                    }else if (dec[0][i][0] < dec[1][j][0]){
                        console.log("op2"+k)
                        console.log(dec[0][i][0])
                        nfrac.push([])
                        nfrac[k].push(dec[0][i][0])
                        nfrac[k][1] = dec[0][i][1]
                    vtemp = dec[1][j][0]
                    sol = j
                    k++;
                        break
                    }else{
                        console.log("op3"+k)
                        nfrac.push([])
                        nfrac[k].push(dec[0][j][0])
                        nfrac[k][1] = -dec[1][j][1]
                        sol = j+1
                        k++;
                        continue
                    }
                }
            }else{

            }
        }
        console.log(nfrac)
        for(let i = 0; i< nfrac.length;i++){
        }
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
            //Quando a quantidade de vezes que o numero primo aparecer for divisivel pelo grau da raiz
                vant = vant * (dec[i][0]**(dec[i][1]/divi)  )
                console.log(vant)
                
            }else if ((dec[i][1]/divi)-((dec[i][1]/divi)%1)==1 || ((dec[i][1]/divi)-((dec[i][1]/divi)%1))%divi == 0){
              //ex        2.5   -   0.5 
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