function convert(){

var tempF,tempC,tempK;


if(document.getElementById("option").value=="C"){

tempC=parseInt(document.getElementById("input").value);
tempF=(tempC*9/5)+32;
tempK=(tempC+273.15);

document.getElementById("result").value=(tempF).toFixed(1)+" F = "+(tempK).toFixed(1)+"  K";



}
else if(document.getElementById("option").value=="F"){

tempF=parseInt(document.getElementById("input").value);
tempC=(tempF-32)*(5/9);
tempK=(tempF-32)*(5/9)+273.15;

document.getElementById("result").value=(tempC).toFixed(1)+" C = "+(tempK).toFixed(1)+"  K";



}
else if(document.getElementById("option").value=="K"){

tempK=parseInt(document.getElementById("input").value);
tempC=tempK-273.15;
tempF=(tempK-273.15)*(9/5)+32

document.getElementById("result").value=(tempC).toFixed(1)+" C = "+(tempF).toFixed(1)+"  F";



}



}