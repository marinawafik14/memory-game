
document.querySelector(".control-buttons span").onclick = function(){
let yourName = prompt("what's your name ?");
if (yourName === null || yourName == "") {
    document.querySelector(".name span").innerHTML="unknown"

}else{
    document.querySelector(".name span").innerHTML= yourName
}
document.querySelector(".control-buttons").remove();
////////////////////////////////


var seconds = 120;
 var countDiv   = document.getElementById("countdown");
 var secondPass;

 var countDown = setInterval(function(){
"use strict"
secondPass();
},1000);

function secondPass() {
    "use strict"
    var minutes = Math.floor(seconds / 60),
   remSeconds = seconds % 60;
   if (seconds < 10) {
    remSeconds =`0${remSeconds}`
   }

   countDiv.innerHTML = minutes +":" + remSeconds;
if (seconds > 0) {
    seconds = seconds - 1
}else{
    clearInterval(countDown);

    countDiv.innerHTML = alert("game over")
}


}


}

//effect duration
let duration = 1000;
//select  blocks container
let blocksContainer = document.querySelector(".memory-game-blocks");

//create Array from game blocks
let blocks =Array.from(blocksContainer.children);

// create range of keys

let orderRange = [...Array(blocks.length).keys()];
//let orderRange =Array.from(Array(blocks.length).keys())

shuffle(orderRange);

//add order css property to game block
blocks.forEach((block, index) => {
block.style.order = orderRange[index]
// add event click
block.addEventListener("click",function(){
    //trigger the flibBlock function
    flibBlock(block);
})

});


function flibBlock(selsectedBlock){
    // add class is-flipped
selsectedBlock.classList.add("is-flipped");

// collect all flipped card
let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains("is-flipped"));

// if there is two selected blocks
if (allFlippedBlocks.length === 2) {
   // console.log("Two flipped blocks selected") 

    //stop clicking function
    stopClicking();


//check matched block function

checkMatchBlocks(allFlippedBlocks[0],allFlippedBlocks[1])


}
}

function checkMatchBlocks(firstBlock,secondBlock){
    let tries = document.querySelector(".tries span")

if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
    firstBlock.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");

    firstBlock.classList.add("has-match");
    secondBlock.classList.add("has-match");
    
    document.getElementById('sucess').play();
    
    
}else{
    tries.innerHTML =  parseInt(tries.innerHTML) + 1;
   
setTimeout(() => {
    firstBlock.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");
   

}, duration);

document.getElementById('fail').play();

}

}



function stopClicking(){
    // add class no-clicking on main container
blocksContainer.classList.add("no-clicking");

 setTimeout(() => {
   // remove class no-clicking on main container
    blocksContainer.classList.remove("no-clicking");

}, duration);

}

function shuffle(array){
let current = (array.length);
  let  temp;
  let random;
while (current > 0) {
    //get random number
   random = Math.floor(Math.random() * current)
//decrease lenght by one
current--
   //console.log(random)

//[1] save current element in stash
temp = array[current];

//[2] current element = random element
 array[current] = array[random];

//[3] random element = get element from stash
array[random] = temp
}
 return array

}

