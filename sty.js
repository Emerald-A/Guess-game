// var x = prompt('Guess a number');  
// var y = Math.floor(Math.random() * 10) + 1;

//   function guess(){
//       if(x == y){
//             console.log('yes');
//       }
//       else{
//           console.log('no');
//       }
//   }
//   guess();

//   console.log(y);

var x = document.getElementById('num').value;
//  var x = prompt('Guess a number');
  var y = Math.floor(Math.random() * 10) + 1;

 function guess(){
           if(x == y){
              document.querySelector('#answer').textContent = 'Yes, you did it';
                console.log('yes');
           }
           else{
              document.querySelector('#answer').textContent = 'No, try again';
               console.log('no');
           }
           document.querySelector('#random').textContent = y;
       }
    