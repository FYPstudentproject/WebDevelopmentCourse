document.write('hello'); //This will write to the bottom of the page
// document.getElementById('demo').innerHTML= Date();
// alert('Hello WOrld');

// function onButtonCLick(){
//     document.getElementById('demo').innerHTML=Date();
// }
// const name='tang';
// var x=16+'Volvo'; //This is string concatenation
// alert(x);
// console.log('This ')
// var person={name:"Ally", 
//                     height:160,
//                     others:{
//                         lastName:"Doe",
//                         numberOfSiblings: 2
//                     } 
//                 };
// document.getElementById('demo').innerHTML=`${person.name}'s height is ${person.height}cm 
// and her last name is ${person.others.lastName} and have ${person.others.numberOfSiblings} siblings`;
// currentDate = new Date();
// if(currentDate.getHours()>=0 && currentDate.getHours()<12){
//     console.log('Good morning');
// }else if(currentDate.getHours()>=12 && currentDate.getHours()<18){
//     console.log('Good afternoon');
// }else{
//     console.log('Good evening');
// // }
// var text='';
// for(i=0;i<5;i++){
//     text+="The number is "+i+"<br>";
// }
// console.log(text);
// document.getElementById('demo').innerHTML=text;


// var cars=["BMW", "Volvo", "Saab", "Ford"];
// for(i=0;i<4;i++){
//     document.getElementById('demo').innerHTML+=cars[i]+" ";
// }





// var area=Math.PI*5*5;
// document.getElementById('demo').innerHTML=area;
// var y=16+1; // Addition
// alert(y);
// document.getElementById('demo').innerHTML=`<i>${5+6}</i>`;
//  document.getElementById('demo').innerHTML=`<i>${name}</i>`;

//  var str='Visit W3Schools!';
//  var n=str.search('W3Schools');
//  document.getElementById("demo").innerHTML=n;

function onButtonCLick(){
    document.getElementById('demo').innerHTML=Date();
    console.log('onButtonClick() has been clicked');
    console.warn('onButtonClick() has been clicked');
    console.error('onButtonClick() has been clicked');   
}