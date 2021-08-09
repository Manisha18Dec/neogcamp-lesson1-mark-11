const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkNumberButton=document.querySelector("#check-number");

function compareValues(sum ,luckyNumber){
    if(sum%luckyNumber===0){
console.log("your birthday is lucky 🙂")
}else{
    console.log("your birthday is not lucky 😔")
}

}




function checkBirthDateIsLucky(){
    const dob=dateOfBirth.value;
    const sum=calculateSum(date)
    console.log(sum);
}




function calculateSum(dob){
dob=dob.replaceAll("_","");
let sum=0;
for(let index=0; index<dob.length;index++){
    sum=sum+Number(dob.charAt(index));
}
return sum;
}


checkNumberButton.addEventListener('click',function getValues(){
    console.log(dateOfBirth.value);
})