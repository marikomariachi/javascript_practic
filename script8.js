// // Event Listeners

// const btn = document.querySelector('#btnDeleteAll');
// const btn2 = document.querySelector('#btnAddNewTask');

// btn.addEventListener('click',function(e){

//     let val;

//     val = e;

//     val = e.target;
//     val = e.target.id;
//     val = e.target.classList;
//     val = e.type;

//     console.log(val);

//     e.preventDefault();

// });

// btn.addEventListener('click',btnClick);
// btn.addEventListener('click',btnClick2);
// btn2.addEventListener('click',btnClick);

// function btnClick(){
//     console.log('btn clicked');
// }

// function btnClick2(){
//     console.log('btn 2 clicked');
// }

//**----------------------------------------------------------------- */

//MOUSE EVENT

// const btn = document.querySelector('#btnDeleteAll');
// const ul = document.querySelector('#task-list')

//click
// btn.addEventListener('click',eventHandler)
// ul.addEventListener('click',eventHandler)

//double click
//btn.addEventListener('dblclick',eventHandler)


// //mouse down
// btn.addEventListener('mousedown',eventHandler)

// //mouse up
// btn.addEventListener('mouseup',eventHandler)

// //mouse enter
// btn.addEventListener('mouseenter',eventHandler)

// //mouse leave
// btn.addEventListener('mouseleave',eventHandler)

// //mouse over
// btn.addEventListener('mouseover',eventHandler)

// //mouse out
// btn.addEventListener('mouseout',eventHandler)
//alt elemanlar uzerinde de mouseover ve mouseout calisiyor

//mouse move
// const h5 = document.querySelector('h5')
// ul  .addEventListener('mousemove',eventHandler)



// function eventHandler(event){
//     console.log(`event type ${event.type}`)
//     h5.textContent=`mouse x : ${event.offsetX}  mouse y : ${event.offsetY}`
// }

//**---------------------------------------------------------- */
//KEYBOARD EVENTS

// const input = document.querySelector('#txtTaskName')

// const form = document.querySelector('form')
// //input.addEventListener('keydown',eventHandler)
// //.addEventListener('keyup',eventHandler)
// //input.addEventListener('keypress',eventHandler)
// // input.addEventListener('focus',eventHandler)
// // input.addEventListener('blur',eventHandler)
// // input.addEventListener('cut',eventHandler)
// // input.addEventListener('paste',eventHandler)
// input.addEventListener('select',eventHandler)

// form.addEventListener('submit',eventHandler)

// function eventHandler(e){
//     console.log(`event type : ${e.type}`)
//     //console.log(`key code : ${e.keyCode}`)
//     //console.log(`key target : ${e.target.value}`)

//     //e.target.style.backgroundColor ='yellow'
//     e.preventDefault();
// }

//**-------------------------------------------------------------- */

//EVENT BOBBLING

const form = document.querySelector('form')
const cardBody  = document.querySelector('.card-body')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

// form.addEventListener('click',function(e){
//     console.log('form')
//     e.stopPropagation();
// })

// cardBody.addEventListener('click',function(e){
//     console.log('cardBody')
//     e.stopPropagation();
// })


// card.addEventListener('click',function(e){
//     console.log('card')
//     e.stopPropagation();
// })

// container.addEventListener('click',function(e){
//     console.log('container')
//     e.stopPropagation();
// })


// form.addEventListener('click',function(e){
//     console.log('form')
  
// },true)

// cardBody.addEventListener('click',function(e){
//     console.log('cardBody')
  
// },true)


// card.addEventListener('click',function(e){
//     console.log('card')
   
// },true)

// container.addEventListener('click',function(e){
//     console.log('container')
    
// },true)


//  const deleteItems = document.querySelector('.fa-times')

// deleteItems.forEach(function(item){
//     item.addEventListener('click',function(e){
//         console.log(e.target);
//     })
    
// });



//**---------------------------------------------------------- */
//LOCAL STORAGE
let val;

//set item
const firstName =localStorage.setItem('firstName','sefa')
const lastName = localStorage.setItem('lastName','ozer')
let hobies = ['okumak','gezmek','arabalar']

//get item
val = localStorage.getItem('firstName')

//remove item
//localStorage.removeItem('firstName'); 

//clear item
//localStorage.clear();

//set array to storage
localStorage.setItem('hobies',JSON.stringify(hobies))

val = JSON.parse(localStorage.getItem('hobies'))


console.log(val)
console.log(localStorage)


// //SESSION STORAGE
// const city = sessionStorage.setItem ('city','corum')
// const country = sessionStorage.setItem('country','turkiye')

// console.log(sessionStorage)













