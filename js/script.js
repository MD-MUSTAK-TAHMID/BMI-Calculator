let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let error1 = document.querySelector(".error1")
let error2 = document.querySelector(".error2")
let result = document.querySelector(".result")
let testbtn = document.querySelector(".testbtn")
let Output = document.querySelector(".Output")
let Malebtn = document.querySelector(".Malebtn")
let Femalebtn = document.querySelector(".Femalebtn")
let main1 = document.querySelector(".main1")
let main2 = document.querySelector(".main2")
let gender = document.querySelector(".gender")
let recheck = document.querySelector(".recheck")


Malebtn.addEventListener("click" , function(){
    main1.style.display= "none"
    main2.style.display= "flex"
    gender.innerHTML= "For Male"
    testbtn.addEventListener("click" , function(){
        if(input1.value == ""){
            error1.innerHTML = "Enter Your Hight(Inchi)"
        }else{
            error1.innerHTML = ""
        }    
        if(input2.value == ""){
            error2.innerHTML = "Enter Your Wight (KG)"
        }else{
            error2.innerHTML = ""
        }
    
        if(!input1.value == "" && !input2.value == ""){
            let bmi = (input2.value * 2.20462) / (input1.value * input1.value ) * 703;
            result.innerHTML = `Your BMI is ${bmi.toFixed(3)}`;
            recheck.style.display="block"
            if(bmi >= 18.5 && bmi <= 24.99999999){
                Output.innerHTML = "Healthy Whight"
            }else if(bmi >= 25 && bmi <= 29.99999999){
                Output.innerHTML = "Overwhight"
            }else if(bmi >= 30){
                Output.innerHTML = "Obese"
            }else{
                Output.innerHTML = "Underwhight"
            }
            recheck.addEventListener("click" , function(){
                location.reload(true);
            })
        }
    })
})



Femalebtn.addEventListener("click" , function(){
    main1.style.display= "none"
    main2.style.display= "flex"
    gender.innerHTML= "For Female"
    testbtn.addEventListener("click" , function(){
        if(input1.value == ""){
            error1.innerHTML = "Enter Your Hight(Inchi)"
        }else{
            error1.innerHTML = ""
        }    
        if(input2.value == ""){
            error2.innerHTML = "Enter Your Wight (KG)"
        }else{
            error2.innerHTML = ""
        }
    
        if(!input1.value == "" && !input2.value == ""){
            let bmi = (input2.value * 2.20462) / (input1.value * input1.value ) * 703;
            result.innerHTML = `Your BMI is ${bmi.toFixed(3)}`;
            recheck.style.display="block"
            if(bmi >= 18.5 && bmi <= 24.99999999){
                Output.innerHTML = "Healthy Whight"
            }else if(bmi >= 25 && bmi <= 29.99999999){
                Output.innerHTML = "Overwhight"
            }else if(bmi >= 30){
                Output.innerHTML = "Obese"
            }else{
                Output.innerHTML = "Underwhight"
            }
            recheck.addEventListener("click" , function(){
                location.reload(true);
            })
        }
    })
})