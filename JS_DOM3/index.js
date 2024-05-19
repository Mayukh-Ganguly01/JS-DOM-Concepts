// adding 100 para

// const t1 =  performance.now();  //this tells me how much time it takes to execute the code

// for(let i = 1;i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent ='this is a para ' + i;
    
//     document.body.appendChild(newElement); //attach the element into body
// }
// const t2 = performance.now();

// console.log("this took " + (t2-t1) + "ms");



//optimize it 
// const t3 =  performance.now();
// let myDiv = document.createElement('div');

// for(let i = 1; i<=100; i++){
//     let element = document.createElement('p');
//     element.textContent = 'this is my para' + i;

//     myDiv.appendChild(element); // attach it with the div

// }
// document.body.appendChild(myDiv); // attach the div into the body
// const t4 =  performance.now();

// console.log("this took " + (t4-t3) + "ms");





//Document Fragment:
let fragment = document.createDocumentFragment();
for(let i = 1;i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent ='this is a para ' + i;
    
    fragment.appendChild(newElement); //attach the element into body
}
document.body.appendChild(fragment);  //1 reflow and 1 repaint








//single-threding/one command at a time
//"run-to-completion" nature of code




