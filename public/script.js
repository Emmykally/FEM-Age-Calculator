'use strict'

const dayInput = document.querySelector('#input-day');
const monthInput = document.querySelector('#input-month');
const yearInput = document.querySelector('#input-year');
const calcButton = document.querySelector('#calc-btn');
const daysEl = document.querySelector('#day-el');
const monthsEl = document.querySelector('#month-el');
const yearsEl = document.querySelector('#year-el');
const dayErrorMsg = document.querySelector('#day-error');
const monthErrorMsg = document.querySelector('#month-error');
const yearErrorMsg = document.querySelector('#year-error');

let presentDate = new Date();
let currentYear = presentDate.getFullYear();
let currentMonth = presentDate.getMonth() + 1;

// const calcYear = function(){
   
//     //calculating and redering the year on the form
//     const calculatedYear = currentYear - yearInput.value;
//     yearsEl.textContent = calculatedYear;
// }
// yearsEl.textContent = totalTimeLived.years;
// monthsEl.textContent = totalTimeLived.months;
const formValidation = function(){
      // form validation of day input 
      if(dayInput.value === ''){
        dayErrorMsg.textContent = 'This field is required';
    }else if(dayInput.value > 31){
        dayErrorMsg.textContent = 'Must be a valid day';
    }

      //form validation of month input
      if(monthInput.value === ''){
        monthErrorMsg.textContent = 'This field is required';
    }else if(monthInput.value > 12 || monthInput.value < 1){
        monthErrorMsg.textContent = 'Must be a valid month';
    }

      //form validation of year input
      if(yearInput.value === ''){
        yearErrorMsg.textContent = 'This field is required';
    }else if(yearInput.value > currentYear){
        yearErrorMsg.textContent = 'Must be in the past';
    }
}


const exactAgeCalculated = function(birthYear, birthMonth, birthDay){
    // now lets make the age calculation
    const currentDate = new Date();
    // getting the date of birth of user
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

    // calculating difference between present date and birth date
    let yearsLived = currentDate.getFullYear() - birthDate.getFullYear();
    let monthsLived = currentDate.getMonth() - birthDate.getMonth();
    let daysLived = currentDate.getDate() - birthDate.getDate();

    // checking if the birth day is less than the current day
    if (daysLived < 0) {
      monthsLived--;
      const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, birthDate.getDate());
      daysLived = Math.floor((currentDate - lastMonth) / (1000 * 60 * 60 * 24));
    }

    //checking if the birth month is negative, i.e the person birthmonth has not arrived in the current year
    if (monthsLived < 0) {
      yearsLived--;
      monthsLived += 12;
    }

    // when input fields are empty and the submit button is clicked
    if(dayInput.value === ''){
        daysLived = 0;
    }
    if(monthInput.value === ''){
      monthsLived = 0
    }
    if(yearInput.value === ''){
      yearsLived = 0
    }

    // object holding the calculated age
    return {
      years: yearsLived,
      months: monthsLived,
      days: daysLived
    };

}
   const finalCalculation = function(){
        const totalTimeLived = exactAgeCalculated(yearInput.value, monthInput.value, dayInput.value);
      yearsEl.textContent = totalTimeLived.years;
      monthsEl.textContent = totalTimeLived.months;
      daysEl.textContent =  totalTimeLived.days;
   }
  

calcButton.addEventListener('click', function(e){
    e.preventDefault();
    formValidation();
    finalCalculation();
  //  exactAgeCalculated(yearInput.value, monthInput.value, dayInput.value);
})

  ///////////
  ////////////
  //////////////
  // function getExactDaysAndMonthsLived(birthYear, birthMonth, birthDay) {
  //   const currentDate = new Date();
  //   const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
  
  //   let yearsLived = currentDate.getFullYear() - birthDate.getFullYear();
  //   let monthsLived = currentDate.getMonth() - birthDate.getMonth();
  //   let daysLived = currentDate.getDate() - birthDate.getDate();
  
  //   if (daysLived < 0) {
  //     monthsLived--;
  //     const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, birthDate.getDate());
  //     daysLived = Math.floor((currentDate - lastMonth) / (1000 * 60 * 60 * 24));
  //   }
  
  //   if (monthsLived < 0) {
  //     yearsLived--;
  //     monthsLived += 12;
  //   }
  
  //   return {
  //     years: yearsLived,
  //     months: monthsLived,
  //     days: daysLived
  //   };
  // }
  
  // // Replace these values with your actual birthdate (year, month, day)
  // const birthYear = 1999;
  // const birthMonth = 9; // January (1 to 12)
  // const birthDay = 18;
  
  // const exactLivedTime = getExactDaysAndMonthsLived(birthYear, birthMonth, birthDay);
  // console.log("Exact years lived:", exactLivedTime.years);
  // console.log("Exact months lived:", exactLivedTime.months);
  // console.log("Exact days lived:", exactLivedTime.days);

  

  