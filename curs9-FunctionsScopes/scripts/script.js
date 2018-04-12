var a = 2; //global


function displayVariables() {
  var b = 3;
  
  c = 4
  console.log('a insidefunction', a); //2
  console.log('b insidefunction', b); //3
  console.log('c insidefunction', c); //4
 
}

displayVariables();  {
  console.log('a outsidefunction', a); //2
  console.log('b outsidefunction', typeof b); //Uncaunght Reference
  console.log('c outsidefunction', c); //4
}

//------------------------------

var x =1; //global

function firstFunction() {
  var y = 2; // local into firstFunction
  
  function secondFunction() {
    var z = 3;
    console.log('Second x = ', x); // 1
    console.log('Second y = ', y); // 2
    console.log('Second z = ', z); // 3
    
    function thirdFunction(z) {
      z = 5; // not global
    console.log('Third x = ', x); // 1
    console.log('Third y = ', y); // 2
    console.log('Third z = ', z); // 5
    }
    thirdFunction(z);
  }
    secondFunction();
    
    console.log('First x = ', x); // 1
    console.log('First y = ', y); // 2
    console.log('First z = ', typeof z); //undefined
}

//------------------------------

(function demoHoisting() {
  var a = 1000; 
  var b;
  console.log(a + " " + b);
  var b = 2000;
})(); //IIFE autoapelare

firstFunction(); 


(function demoHoisting() {
  var a = 1000; 
  var b;
  console.log(a + " " + b);
  b = 2000;
})(); //IIFE autoapelare

firstFunction(); 


