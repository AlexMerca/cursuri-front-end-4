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