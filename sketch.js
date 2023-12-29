
const maindiv = document.querySelector('.container');

const selbtn =document.querySelector("#selbtn");
const numsqbtn =document.querySelector("#numsqbtn");
const gridarea = document.querySelector("#gridarea");
const numsquares = document.querySelector("#numsquares");
const newgrid = document.querySelector("#newgrid");

const gFrag = document.createDocumentFragment();

let num;  /*value from no. of boxes selector */
let numsq;  /*actual number of boxes - num*num */
let boxsize;  /* assign to parseInt(gridarea.value)/parseInt(numsquares.value) */
let colornow;
let boxmessage = document.querySelector("#boxmessage");

selbtn.addEventListener('click', getGsize); /* doesn't seem to be called from selbtn */

newgrid.addEventListener('click', newFrag);

/*
Use associative array/object matching options with no. of boxes to find
no. of boxes to create in the grid area. 
*/

function getGsize() {
    maindiv.style["width"] = (parseInt(gridarea.value) + 4) + "px";
    maindiv.style["height"] = (parseInt(gridarea.value) + 4) + "px";
    console.log(num, "numsquares value");
}  /*Use +4 here to avoid having the border pixels interfere with
     box sizes at the borders, I think */

function newFrag() {     /*Similar to pressFrag, but using a button*/
                        /* instead of a key press on an input field.*/
   
    num = parseInt(numsquares.value);
    numsq = num*num;  /* number of new divs to create for the gridarea */
    delFrag();  /* Delete previous grid from maindiv */

    getGsize(); /* Take size input sand draw new grid outline. */

    for (let i=0; i<numsq; i++) {
      let newdiv = document.createElement('div');
      newdiv.classList.add('gbox');
      /*newdiv.style["background-color"] = "pink";*/
      boxsize =  parseInt(gridarea.value)/num;
      newdiv.style["height"] = boxsize+"px";
      newdiv.style["width"] = boxsize +"px";

      colornow = newdiv.style["background-color"];
      newdiv.addEventListener('mouseover', sizeChange);
      newdiv.addEventListener('mouseout', sizeRestore);

      newdiv.addEventListener('mouseover', colorChange);
      newdiv.addEventListener('mouseout', colorRestore);

      gFrag.appendChild(newdiv);

    } 
    maindiv.appendChild(gFrag);  /*All new divs appended to newFrag; 
                                  now append newfrag to maindiv. */
    /*  *** FIX THIS   ** */
    boxsize = Math.floor(boxsize);
    boxmessage.textContent = "Each box in the grid is now " +boxsize +"px by " + boxsize +"px.";

}

function delFrag() {     

    while (maindiv.firstChild) {
      /*maindiv.removeChild(maindiv.lastChild);*/
      /* maindiv.innerHTML = ''; */
      maindiv.textContent = '';
    }
      
}


function sizeChange(e) {
  e.target.style["width"] = e.target.style["width"];
}

function sizeRestore(e) {
  
  e.target.style["width"] = e.target.style["width"]
}
function colorChange(e) {
  e.target.style["background-color"] = "#faa";
}

function colorRestore(e) {
  
  e.target.style["background-color"] = colornow; /*color from css file*/
}











