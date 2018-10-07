

// user inputs
function calculateBMI(){
    let ht1 = document.getElementById("height").value;
    let htUnits = document.getElementById("heightunits").value;
    let wt1 = document.getElementById("weight").value;
    let wtUnits = document.getElementById("weightunits").value;

let ht = parseInt(ht1);
let wt = parseInt(wt1);

    
    if(ht1 === "" || wt1 === "")
    {
        alert("please enter a value");
    }else{

// conveting to metric units
if (htUnits == "inches") height /= 39.3700787;
if (wtUnits == "lb") weight /= 2.20462;

//calcultion
let BMI = Math.round(wt / Math.pow(ht,2)*10000);

//display result
document.getElementById("output").innerHTML = Math.round(BMI * 100) /100;

let output = Math.round(BMI * 100)/100
if(output < 18.5)
    document.getElementById("comment").innerHTML = "Underweight";
else if (output >= 18.5 && output <= 25)
    document.getElementById("comment").innerHTML = "Normal";
else if(output >= 25 && output <= 25)
    documet.getElementById("comment").innerHTML = "Obese";
else if(output > 30)
    document.getElementById("comment").innerHTML = "Overweight"


    }

}