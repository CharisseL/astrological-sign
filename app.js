var prompt = require('sync-prompt').prompt;

var dob = new Date(prompt('What is your birthday (mm/dd/yyyy)? ' ));
var today = new Date();
var thisYear = today.getFullYear();
var yearBorn = dob.getFullYear();
var age = today.getFullYear() - dob.getFullYear();

if(today.getMonth() <= dob.getMonth()){
  if(today.getMonth() <= dob.getDate()){
  age = age - 1;
  }  
}

var birthMonth = dob.getMonth();
var birthDay =dob.getDate();
var sign;

switch(birthMonth){
  case 0:
    if(birthDay <= 19){
      sign = 'Capricorn'
    }else{
      sign = 'Aquarius';
    }
    break;
  case 1:
    if(birthDay <= 19){
      sign = 'Aquarius'
    }else{
      sign = 'Pisces';
    }
    break;
  case 2:
    if(birthDay <= 19){
      sign = 'Pisces'
    }else{
      sign = 'Aries';
    }
    break;
  case 3:
    if(birthDay <= 19){
      sign = 'Aries'
    }else{
      sign = 'Taurus';
    }
    break;
  case 4:
    if(birthDay <= 20){
      sign = 'Taurus'
    }else{
      sign = 'Gemini';
    }
    break;
  case 5:
    if(birthDay <= 20){
      sign = 'Gemini'
    }else{
      sign = 'Cancer';
    }
    break;
  case 6:
    if(birthDay <= 20){
      sign = 'Cancer'
    }else{
      sign = 'Leo';
    }
    break;
  case 7:
    if(birthDay <= 22){
      sign = 'Leo'
    }else{
      sign = 'Virgo';
    }
    break;
  case 8:
    if(birthDay <= 19){
      sign = 'Virgo'
    }else{
      sign = 'Libra';
    }
    break;
  case 9:
    if(birthDay <= 22){
      sign = 'Libra'
    }else{
      sign = 'Scorpio';
    }
    break;
  case 10:
    if(birthDay <= 21){
      sign = 'Scorpio'
    }else{
      sign = 'Sagittarius';
    }
    break;
  case 11:
    if(birthDay <= 21){
      sign = 'Sagittarius'
    }else{
      sign = 'Aquarius';
    }
    break;
}

console.log('You are ' + age + ' years old');
console.log('You are a ' + sign);

