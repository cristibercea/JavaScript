//CURSOR
/*const cursor=document.querySelector('.cursor');
document.addEventListener('mousemove', e =>{
    cursor.setAttribute("style","top: "+(e.pageY-10)+"px; left: "+(e.pageX-10)+"px;")
})
document.addEventListener('click', () =>{
    cursor.classList.add("expand");
    setTimeout(() =>{
        cursor.classList.remove("expand");
    },500)
})*/

//CALCULATOR
console.log("in developing lmao =))");
console.log("OPERATIONS HISTORY:");
let x=0;
let c=0;
let y=0;
let rez=0;
let op="";
function appendDigit(d) {
    if(d=='('||d==')'){  
        if(op==""){
            x+=d;
            myParantheses(x);
            document.getElementById("scr").innerHTML=x;
        }
        else{
            y=y+d;
            myParantheses(y);
            document.getElementById("scr").innerHTML=y;
            if(op=="."){
                x=x+d;
                c++;    
            }
        }
    }
    else{
        if(op==""){
            x=x*10+d;
            document.getElementById("scr").innerHTML=x;
        }
        else{
            y=y*10+d;
            document.getElementById("scr").innerHTML=y;
            if(op=="."){
                x=x*10+d;
                c++;    
            }
        }
    }
    
}
function myFunction1() {
    appendDigit(1)
}
function myFunction2() {
    appendDigit(2)
}
function myFunction3() {
    appendDigit(3)
}
function myFunction4() {
    appendDigit(4)
}
function myFunction5() {
    appendDigit(5)
}
function myFunction6() {
    appendDigit(6)
}
function myFunction7() {
    appendDigit(7)
}
function myFunction8() {
    appendDigit(8)
}
function myFunction9() {
    appendDigit(9)
}
function myZero() {
    appendDigit(0)
}
function myZeros() {
    rez=rez*100;
    if(rez==0) {
        x=x*100;
        document.getElementById("scr").innerHTML=x;
        if(y!=0){
            y=y*100;
            document.getElementById("scr").innerHTML=y;
        }
    }
    else{
        document.getElementById("scr").innerHTML=rez;
    }
}

function setOp(on){
    if(op!=""){
        x=rez;
        y=0;
        document.getElementById("scr").innerHTML=x;
    }
    op=on;
    if(op=="x^(2)"){document.getElementById("scr").innerHTML=x+"^(2)";}
    if(op=="x^(y)"){document.getElementById("scr").innerHTML=x+"^("+"-putere-"+")";}
    else {document.getElementById("scr").innerHTML=x+op;}
}

function myParantheses(abc) {
    /*let stack = [];
    let balance= (input)=>{
        let brackets = "()";
        for(let bracket of input) {
            let bracketsIndex = brackets.indexOf(bracket);
            if (bracketsIndex === -1){
                continue;
            }
            if(bracketsIndex%2===0){
                stack.push(bracketsIndex+1);
            }else{
                if(stack.pop() !== bracketsIndex){
                    return false;
                }
            }console.log(bracketsIndex);
        }
        return stack.length===0;
    }*/
    // console.log(stack);
    console.log(abc);
    var regex = /{(.+?)}/g
    var matches;
    while(matches = regex.exec(abc))
        console.log(matches);
}

function myMenos() {
    setOp("-")
}
function myPlus() {
    setOp("+")
}
function myMultiply() {
    setOp("*")
}
function myDiv() {
    setOp("/")
}
function mySqrt() {
    setOp("sqrt")
}
function mySQ() {
    setOp("x^(2)")
}
function mySQY() {
    setOp("x^(y)")
}
function myMod() {
    setOp("%")
}

function myRezult() { 
    if (op=="-") {   
        
        rez=x-y;
        document.getElementById("scr").innerHTML=x+"-"+y+"="+rez;
        console.log(x+"-"+y+"="+rez);
    }
    else if (op=="+") {
       /* op="=";*/
        rez=x+y;
        document.getElementById("scr").innerHTML=x+"+"+y+"="+rez;
        console.log(x+"+"+y+"="+rez);
    }
    else if (op=="*") {
        
        rez=x*y;
        document.getElementById("scr").innerHTML=x+"*"+y+"="+rez;
        console.log(x+"*"+y+"="+rez);
    }
    else if (op=="/") {
        
        rez=x/y;
        document.getElementById("scr").innerHTML=x+"/"+y+"="+rez;
        console.log(x+"/"+y+"="+rez);
    }
    else if (op=="sqrt") {
        
        rez=Math.sqrt(x);
        document.getElementById("scr").innerHTML="sqrt("+x+")"+"="+rez;
        console.log("sqrt("+x+")="+rez);
    }
    else if (op=="x^(2)") {
        
        rez=Math.pow(x,2);
        document.getElementById("scr").innerHTML=x+"^(2)"+"="+rez;
        console.log(x+"^(2)="+rez);
    }
    else if (op=="x^(y)") {
        
        rez=Math.pow(x,y);
        document.getElementById("scr").innerHTML=x+"^("+y+")"+"="+rez;
        console.log(x+"^("+y+")="+rez);
    }
    else if (op=="%") {
        
        rez=x%y;
        document.getElementById("scr").innerHTML=x+"%"+y+"="+rez;
        console.log(x+"%"+y+"="+rez);
    }
    localStorage.setItem('id1',rez);
}
let token=localStorage.getItem('id1');

function eraseOne() {
    if(op==""){
        x=(x-x%10)/10;
        document.getElementById("scr").innerHTML=x;
    }
    else if(op=="="){
        rez=(rez-rez%10)/10;
        x=rez;
        y=0;
        document.getElementById("scr").innerHTML=x;
    }
    else{
        y=(y-y%10)/10;
        document.getElementById("scr").innerHTML=y;
    }
}
function myClear() {
    x=0;
    y=0;
    op=0;
    rez=0;
    document.getElementById("scr").innerHTML="";
}

function myNeg(){
    if(op==""){
        x=-x;
        document.getElementById("scr").innerHTML=x;
    }
    else{
        y=-y;
        if(op=="+" & y<0){ 
            op="-";
            y=-y; 
            document.getElementById("scr").innerHTML="-"+y;
        }
        else if(op=="-" & y<0){
            op="+";
            y=-y;
            document.getElementById("scr").innerHTML="-"+y;
        }
        else{
            document.getElementById("scr").innerHTML="-"+y;
        }
        if(rez!=0){
            rez=-rez;
            if(op=="+" & y<0){ 
                op="-"; 
                y=-y;
                document.getElementById("scr").innerHTML="-"+y;
            }
            else if(op=="-" & y<0){ 
                op="+"; 
                y=-y; 
                document.getElementById("scr").innerHTML="-"+y;
            }
            else{ 
                document.getElementById("scr").innerHTML=y;
            }
            document.getElementById("scr").innerHTML=rez;
        }
    }
}
function myPoz(){
    if(op==""){
        if(x<0){
            x=-x;
            document.getElementById("scr").innerHTML=x;
        }
        else{
            x=x;
            document.getElementById("scr").innerHTML=x;
        }
    }
    else{
        if(y<0){
            y=-y;
            document.getElementById("scr").innerHTML=y;
        }
        else{
            y=y;
            document.getElementById("scr").innerHTML=y;
        }
    }
}

function myZecimal(){ 
    setOp(".")
    x=x/(10*c);
    //console.log(c);
}   