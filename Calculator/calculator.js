console.log("Work in progress! =))");
console.log("OPERATIONS HISTORY:");
let x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let rez=0,n=40;
let op="",on;
let t=1;
let l,i=1,j,k;
let deschis=0,inchis=0;
function appendDigit(d){
    if(d=='('||d==')'){
        document.getElementById("scr").innerHTML+=d;
        x[i]=d;
        i++;
    }else if(d==Math.E){
        document.getElementById("scr").innerHTML+="e";
        x[i]=Math.E;
    }else if(d==Math.PI){
        document.getElementById("scr").innerHTML+="π";
        x[i]=Math.PI;
    }else{
        document.getElementById("scr").innerHTML+=d;
        x[i]=x[i]*10+d;
    }   
}

function myZeros() {
    if(i==1){
        document.getElementById("scr").innerHTML=""; 
        x[i]*=100;
        document.getElementById("scr").innerHTML=x[i];
    }
    else if(i>1){
        document.getElementById("scr").innerHTML="";
        for(j=1;j<i;j++) document.getElementById("scr").innerHTML+=x[j];
        x[i]*=100;
        document.getElementById("scr").innerHTML+=x[i];
    } 
}
function setOp(on){
    if(on=="="){
        console.log("x["+i+"]"+"="+x[i]);
        i++;
        x[i]=on;
        document.getElementById("scr").innerHTML="";
        for(j=1;j<=i;j++){document.getElementById("scr").innerHTML+=x[j];}
        console.log("x["+i+"]="+"("+x[i]+")");
    }
    else{
        console.log("x["+i+"]"+"="+x[i]);
        i++;
        op=on;
        x[i]=op;
        console.log("x["+i+"]="+"("+x[i]+")");
        i++;
        if(op=="^") document.getElementById("scr").innerHTML+="^";
        else document.getElementById("scr").innerHTML+=op;
    }
}
function myMenos() {setOp("-")}
function myPlus() {setOp("+")}
function myMultiply() {setOp("*")}
function myDiv() {setOp("/")}
function mySqrt() {setOp("sqrt")}
function mySQ() {setOp("^(2)")}
function mySQY() {setOp("^")}
function myMod() {setOp("%")}
function myZecimal() {
    if(x[i-1]==0){ 
        document.getElementById("scr").innerHTML/=10; 
        x[i]/=10; 
    }
    else{ 
        document.getElementById("scr").innerHTML=x[i-1]; 
        document.getElementById("scr").innerHTML+=x[i]/10; 
        x[i]/=10; 
    }
}
function myRezult() {setOp("="); calculate();}
function myClear(){
    for(i=1;i<=n;i++)
        if(x[i]!=0){
            x[i]=0;
            //console.log("x["+i+"]"+"="+x[i]);
        }
    inchis=deschis=0;
    i=1;
    op=0;
    rez=0;
    document.getElementById("scr").innerHTML="";
}
function eraseOne() {
    if(rez!=0){
        document.getElementById("scr").innerHTML="";
        rez-=rez%10; 
        rez/=10;
        document.getElementById("scr").innerHTML=rez;
    }else{
        if(x[i]==Math.E){
            if(i>1){
                document.getElementById("scr").innerHTML="";
                for(j=1;j<i;j++)
                    document.getElementById("scr").innerHTML+=x[j];
                i--;
            }
            else if(i==1) document.getElementById("scr").innerHTML="";
        }else{   
            if(x.indexOf(x[i])%2==0){
                document.getElementById("scr").innerHTML="";
                for(j=1;j<i;j++)
                    document.getElementById("scr").innerHTML+=x[j];
                x[i]=0;
                i--;
            }
            else{   
                if(x[i]>=10||x[i]<=-10){  
                    x[i]-=x[i]%10; 
                    x[i]/=10; 
                    if(i>1){
                        document.getElementById("scr").innerHTML="";
                        for(j=1;j<i;j++)
                            document.getElementById("scr").innerHTML+=x[j];
                        document.getElementById("scr").innerHTML+=x[i];
                    }
                    else if(i==1) document.getElementById("scr").innerHTML=x[i]; 
                }
                else if(x[i]<10 && x[i]>-10){ 
                    document.getElementById("scr").innerHTML-=x[i];
                    if(i>1){
                        document.getElementById("scr").innerHTML="";
                        for(j=1;j<i;j++)
                            document.getElementById("scr").innerHTML+=x[j];
                        x[i]=0;
                    }
                    else if(i==1){document.getElementById("scr").innerHTML=""; x[i]=0;}   
                }
            }
        }
    }
}

function factorial(){
    document.getElementById("scr").innerHTML="";
    if(x[i]==0){
        x[i]=1;
    }else if(x[i]>0){
        for(k=2;k<=x[i];k++) t*=k;
        x[i]=t;
    }
    for(j=1;j<=i;j++)
        document.getElementById("scr").innerHTML+=x[j];
}
function ln(){
    document.getElementById("scr").innerHTML-=x[i];
    x[i]=Math.log(x[i]);
    document.getElementById("scr").innerHTML+=x[i];
}
let m=n;
function calculate() {
    for(l=1;l<=n;l++){
        if(x[l]=='(')
            deschis++;
        else if(x[l]==')')
            inchis++;
    }
    if(inchis!=deschis){
        for(j=1;j<=n;j++) x[j]=0;
        i=1;
        document.getElementById("scr").innerHTML="Eroare!(vezi consola)";
        console.log("Numarul de paranteze deschise nu este egal cu cel de paranteze inchise!");
    }else if(deschis>0 && inchis>0 && deschis==inchis){
        for(k=n;k>=1;k--)
            if(x[k]=='('){
                x[k]=0;
                for(j=k+1;j<=n;j++){
                    for(i=j;x[i]!=')';i++){
                        if(x[i]=="^(2)"){
                            x[i+1]=2;
                            x[i-1]=Math.pow(x[i-1],2);
                            for(l=i+2;l<=n;l++)
                                x[l-2]=x[l];
                            i-=2;
                            n-=2;
                            k-=2;
                        }else if(x[i]=="^"){
                            x[i-1]=Math.pow(x[i-1],x[i+1]);
                            x[i]=x[i+1]=0;
                            for(l=i+2;l<=n;l++)
                                x[l-2]=x[l];
                            i-=2;
                            n-=2;
                            k-=2;
                        }else if(x[i]=="sqrt"){
                            x[i-1]=Math.sqrt(x[i+1]);
                            for(l=i+2;l<=n;l++)
                                x[l-2]=x[l];
                            i-=2;
                            n-=2;
                            k-=2;
                        } 
                    }
                    for(i=j;x[i]!=')';i++){
                        if(x[i]=="*"){
                            x[i-1]=x[i-1]*x[i+1];
                            for(l=i+2;l<=n;l++)
                                x[l-2]=x[l];
                            i-=2;
                            n-=2;
                            k-=2;
                        }else if(x[i]=="/"){
                            x[i-1]=x[i-1]/x[i+1];
                            for(l=i+2;l<=n;l++)
                                x[l-2]=x[l];
                            i-=2;
                            n-=2;
                            k-=2;
                        }else if(x[i]=="%"){
                            x[i-1]=x[i-1]%x[i+1];
                            for(l=i+2;l<=n;l++)
                                x[l-2]=x[l];
                            i-=2;
                            n-=2;
                            k-=2;
                        } 
                    }
                    for(i=j;x[i]!=')';i++){
                        if(x[i]=="+"){
                            x[i-1]+=x[i+1];
                            for(l=i+2;l<=n;l++)
                                x[l-2]=x[l];
                            i-=2;
                            n-=2;
                            k-=2;
                        }else if(x[i]=="-"){
                            x[i-1]-=x[i+1];
                            for(l=i+2;l<=n;l++)
                                x[l-2]=x[l];
                            i-=2;
                            n-=2;
                            k-=2;
                        }
                    }      
                }
                for(i=k;i<n;i++)
                    x[i]=x[i+1];
                if(x[k+1]==')')
                    for(l=k+1;l<n;l++) 
                        x[l]=x[l+1];
                n-=2;
                k-=2;
                deschis--;
                inchis--;
                if(deschis==0 && inchis==0) break;
            }
    }
    if(inchis==0 && deschis==0){
        if(x[1]=="-"){
            x[1]=-x[2];
            for(j=3;j<=i;j++)
                x[j-1]=x[j];
        }
        for(j=1;j<=n;j++){
            for(i=j;i<=n;i++){
                if(x[i]=="^(2)"){
                    x[i+1]=2;
                    x[i-1]=Math.pow(x[i-1],2);
                    for(k=i+2;k<=n;k++)
                        x[k-2]=x[k];
                    i-=2;
                    n-=2;
                }else if(x[i]=="^"){
                    x[i-1]=Math.pow(x[i-1],x[i+1]);
                    x[i]=x[i+1]=0;
                    for(k=i+2;k<=n;k++)
                        x[k-2]=x[k];
                    i-=2;
                    n-=2;
                }else if(x[i]=="sqrt"){
                    x[i-1]=Math.sqrt(x[i+1]);
                    for(k=i+2;k<=n;k++)
                        x[k-2]=x[k];
                    i-=2;
                    n-=2;
                } 
            }
            for(i=1;i<=n;i++){
                if(x[i]=="*"){
                    x[i-1]=x[i-1]*x[i+1];
                    for(k=i+2;k<=n;k++)
                        x[k-2]=x[k];
                    i-=2;
                    n-=2;
                }else if(x[i]=="/"){
                    x[i-1]=x[i-1]/x[i+1];
                    for(k=i+2;k<=n;k++)
                        x[k-2]=x[k];
                    i-=2;
                    n-=2;
                }else if(x[i]=="%"){
                    x[i-1]=x[i-1]%x[i+1];
                    for(k=i+2;k<=n;k++)
                        x[k-2]=x[k];
                    i-=2;
                    n-=2;
                } 
            }
            for(i=1;i<=n;i++){
                if(x[i]=="+"){
                    x[i-1]+=x[i+1];
                    for(k=i+2;k<=n;k++)
                        x[k-2]=x[k];
                    i-=2;
                    n-=2;
                }else if(x[i]=="-"){
                    x[i-1]-=x[i+1];
                    for(k=i+2;k<=n;k++)
                        x[k-2]=x[k];
                    i-=2;
                    n-=2;
                }
            }      
        }
        rez=x[1];
        document.getElementById("scr").innerHTML+='\n';
        document.getElementById("scr").innerHTML+=rez;
        console.log("Rezultatul este: "+rez);
    }
    n=m;
    if(rez!=0){
        for(j=2;j<=i;j++){ x[j]=0; console.log("x["+j+"]"+"="+x[j]);}
        i=1;
        x[i]=rez;
        rez=0;
    }
}
