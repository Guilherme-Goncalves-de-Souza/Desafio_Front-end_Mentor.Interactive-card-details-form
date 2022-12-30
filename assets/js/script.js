let numberBack = document.querySelector(".pCardBack")

let numberCard = document.querySelector(".numberCard")
let nomeCard = document.querySelector(".nomeCard")
let dataCard = document.querySelector(".dataCard")


let inputName = document.querySelector("#cardName")
let inputNumber = document.querySelector("#cardNumber")
let inputMonth = document.querySelector(".cardMonth")
let inputYear = document.querySelector(".cardYear")
let inputCvc = document.querySelector("#cardCvc")
let button = document.querySelector("button")

let pErrorName = document.querySelector(".Name")
let pErrorNumber1 = document.querySelector(".Number-1")
let pErrorNumber2 = document.querySelector(".Number-2")
let pErrorDate = document.querySelector(".Date")
let pErrorCvc = document.querySelector(".Cvc")


let form = document.querySelector(".form")
let Cardcompleted = document.querySelector(".card-details")
let buttonCompleted = document.querySelector(".card-details button")

button.addEventListener("click", confirm);


inputNumber.addEventListener("keyup", () => {
    let inputLength = inputNumber.value.length
    if(inputLength === 4 || inputLength === 9 || inputLength === 14){
        inputNumber.value += " "
    }
})


function confirm(event){
    event.preventDefault();
    
    let NameComplete = false;
    let NumberComplete = false;
    let MonthComplete = false;
    let YearComplete = false;
    let CvcComplete = false;

    //Name:
    let inputNameValue = inputName.value;
    let VerifyNumber = /[1-9]/gi;
    let VNumberCompleted = inputNameValue.match(VerifyNumber);

    if(inputName.value == "" || VNumberCompleted !== null){
        pErrorName.style.display = "block";
        inputName.style.borderColor = "red";
    } else{
        pErrorName.style.display = "none"
        inputName.style.borderColor = "hsl(270, 3%, 87%)";
        nomeCard.innerHTML = `${inputName.value}`

        NameComplete = true;
    }

    //Number:
    let inputNumberValue = inputNumber.value;
    let VerifyLetters = /[A-Z]/gi;
    let VerifyCompleted = inputNumberValue.match(VerifyLetters);

    if(inputNumber.value == "" || inputNumber.value.length < 19){
        pErrorNumber2.style.display = "block"
        inputNumber.style.borderColor = "red";
    } 
    else if(VerifyCompleted !== null){
        pErrorNumber2.style.display = "none"
        pErrorNumber1.style.display = "block"
        inputNumber.style.borderColor = "red";
    }
    else{
        pErrorNumber1.style.display = "none"
        pErrorNumber2.style.display = "none"
        inputNumber.style.borderColor = "hsl(270, 3%, 87%)";
        numberCard.innerHTML = `${inputNumber.value}`

        NumberComplete = true;
    }

    //Dates:
    if(inputMonth.value == "" || inputMonth.value.length > 2 || inputMonth.value > 12){
        pErrorDate.style.display = "block"
        inputMonth.style.borderColor = "red";
    }
    else{
        pErrorDate.style.display = "none"
        inputMonth.style.borderColor = "hsl(270, 3%, 87%)";
        dataCard.innerHTML = `${inputMonth.value}/${inputYear.value}`

        MonthComplete = true;
    }

    if(inputYear.value == "" || inputYear.value.length > 2 || inputYear.value > 70 || inputYear.value < 22 ){
        pErrorDate.style.display = "block"
        inputYear.style.borderColor = "red";
    }
    else{
        pErrorDate.style.display = "none"
        inputYear.style.borderColor = "hsl(270, 3%, 87%)";
        dataCard.innerHTML = `${inputMonth.value}/${inputYear.value}`

        YearComplete = true;
    }

    //CVC:
    if(inputCvc.value == "" || inputCvc.value.length >= 4 || inputCvc.value.length <= 2){
        pErrorCvc.style.display = "block"
        inputCvc.style.borderColor = "red";
    }
    else{
        pErrorCvc.style.display = "none"
        inputCvc.style.borderColor = "hsl(270, 3%, 87%)";
        numberBack.innerHTML = inputCvc.value

        CvcComplete = true;
    }


    let verify = NameComplete == true && NumberComplete == true && MonthComplete == true && YearComplete == true && CvcComplete == true;
    if(verify){
        Closed();
    }
    
}

function Closed(){
    form.style.display = "none";
    Cardcompleted.style.display = "flex"
}

buttonCompleted.addEventListener("click", () =>{
    form.style.display = "flex";
    Cardcompleted.style.display = "none"
    window.location.reload()
})
