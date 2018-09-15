function isEven(num){
  return num % 2 === 0;
}

function factorial(num){
  var result = 1;
  for(var i = 2; i <= num; i++){
    result *= i;
  }
  return result;
}

function kebabToSnake(str){
  var newStr = str.replace(/-/g , "_");
  return newStr;
}

function sing(){
  console.log("twinkle twinkle");
  console.log("little star");
}
setInterval(sing, 1000);
clearInterval(2);

setInterval(function(){
  console.log("moi");
  console.log("hei");
}, 2000);