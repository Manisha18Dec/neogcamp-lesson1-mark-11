const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkNumberButton=document.querySelector("#check-number");
const outputBox=document.querySelector('#output-box')


function compareValues(sum ,luckyNumber){
    if(sum%luckyNumber===0){
outputBox.value="your birthday is lucky ๐";
}else{
    outputBox.value="your birthday is not lucky ๐"
}
// console.log(sum,luckyNumber);
}




function checkBirthDateIsLucky(){
    const dob=dateOfBirth.value;
    const sum=calculateSum(dob);
    if(sum&&dob)
     compareValues(sum,luckyNumber.value)
    else
    outputBox.innerText="Please enter both the fields๐";
}



function calculateSum(dob){
dob=dob.replaceAll("_","");
let sum=0;
for(let index=0; index<dob.length;index++){
    sum=sum+Number(dob.charAt(index));
}
return sum;
}


checkNumberButton.addEventListener('click',checkBirthDateIsLucky)
    // console.log(dateOfBirth.value);
