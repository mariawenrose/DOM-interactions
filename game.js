// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.remove('blue')
  evt.target.classList.remove('invisible')
  evt.target.classList.add('green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE

function makeBlue (evt) {
  evt.target.classList.remove('green')
  evt.target.classList.remove('invisible')
  evt.target.classList.add('blue')
  updateCounts()
}

// CREATE FUNCTION hide HERE

function hide(evt) {
  evt.target.classList.remove('blue')
  evt.target.classList.remove('green')
  evt.target.classList.add('invisible')

  updateCounts()
}

function updateCounts () {

  
  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS


  var totalB = document.getElementsByClassName("blue").length; 
  console.log("Total Blue:")
  console.log(totalB) 


  var totalG = document.getElementsByClassName("green").length; 
  console.log("Total Green:")
  console.log(totalG) 

  var totalI = document.getElementsByClassName("invisible").length;
  console.log("Total Invis:")
  console.log(totalI)

  var totals = {
    blue: totalB,
    green: totalG,
    invisible: totalI
  }


  
  // for (var i = 0; i < totals.length; i++) {
  //   if (totals[i] == 0 )
  //     totals++;
  // }



  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
 

//"totals contains the numbers of each dots (colour"
//update the html for each counter to match the coloured dots that are shown on screen
// each counter has an id of "-total" e.g .#blue-total
// use document.getElementsById
//make it so the spans with the classnames "-total" match the number count of the displayed divs