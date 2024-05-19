//apply eventListener
// function eventfunction(){
//     console.log("i have clicked on document");
// }

// document.addEventListener('click', eventfunction);   

// document.removeEventListener('click',eventfunction);
//here we can remove the eventListener cause the object is same but if we apply the previous method the... 
// ...object is different on their 
// document.addEventListener('click',function(){
// in this method the function is different so we cannot remove the eventListener
// })

// const content = document.querySelector('#wrapper')
// content.addEventListener('click' ,function(ganguly){
//     console.log(ganguly);
// });




// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log("maza aayya");
// });






// let myDiv = document.createElement('div');

// function paraStatus(event){
//     console.log('para ' + event.target.textContent);  //target is used for accessing indivisual para 
// }
// myDiv.addEventListener('click', paraStatus);
// for(let i=0;i<100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;
    
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);





let element = document.querySelector('#wrapper');
element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){     //only work on span tag cause we used nodeName property
        console.log('span per click kiya hai ' + event.target.textContent);
    }
    
});




//why do we add the js script at the bottom of the body?
//because if we add it in the header it will call the method which is not even loaded 
//we have to make sure that all our html code should executed before the js file executes
// but how can we know out html file is loaded 
// for this we have one event which is called DOMContentLoaded




