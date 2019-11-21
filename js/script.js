var body= document.querySelector("body");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var textA;
var LG;


console.log(color1.value[2]);


function gradientT(){
    body.style.background= "linear-gradient(to right, " + color1.value + ", "  + color2.value  + ")";
}

function ShowColor(){
    gradientT();
    document.querySelector("#textArea0").value= color1.value;
    document.querySelector("#textArea1").value= color2.value;
    LG.textContent= "linear-gradient(to right, " + color1.value + ", "  + color2.value + ");"; 
}

function HexCodeShow(){
    for(i=0; i<2; i++){
        textA= document.createElement("textarea");
        textA.id="textArea"+ [i];
        body.appendChild(textA) ;
        textA.style.display="block";
        textA.style.width="25%";
        textA.style.margin="auto";
        textA.style.backgroundColor="black";
        textA.style.color="white";
        textA.style.textAlign="center";
}
}

function Sgradient(){
    LG= document.createElement("textarea");
    LG.id="textArea";
    body.appendChild(LG) ;
    LG.style.display="block";
    LG.style.width="90%";
    LG.style.height="200px";
    LG.style.margin="auto";
    LG.style.backgroundColor="black";
    LG.style.color="white";
    LG.style.textAlign="center";
    LG.style.fontSize="50px";
    LG.style.padding="10px";
}
 
function CssGradientGenerator(){

    gradientT();
    color1.addEventListener("input", ShowColor);
    color2.addEventListener("input", ShowColor);
    HexCodeShow();
    Sgradient();
    
}

CssGradientGenerator();