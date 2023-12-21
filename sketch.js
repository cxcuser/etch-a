const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click',  (e) => {
  alert("Hello World");
  console.log("Hello E", e.target);
});

const maindiv = document.querySelector('.container');
const gnum = document.querySelector('#gnum');
const gbtn = document.querySelector('#gbtn');
const delbtn = document.querySelector('#delbtn');

const gFrag = document.createDocumentFragment();

gnum.addEventListener('keydown', pressFrag);
/*gnum.addEventListener('keydown', pressGrid);*/
gbtn.addEventListener('click', clickGrid);
delbtn.addEventListener('click', delFrag);

function pressFrag(e) {     /*Similar to pressGrid, but using a fragment*/
  if (e.key == "Enter") {   /* instead of adding each div to the DOM individually */
    e.preventDefault();

    for (let i=0; i<gnum.value; i++) {
      let newdiv = document.createElement('div');
      newdiv.classList.add('gbox');
      /*newdiv.style["background-color"] = "pink";*/
      newdiv.style["height"] = "200px";

      newdiv.addEventListener('mouseover', sizeChange);
      newdiv.addEventListener('mouseout', sizeRestore);

      gFrag.appendChild(newdiv);

    } 
    maindiv.appendChild(gFrag);
    gnum.value = '';
    gnum.focus();    
  }
}

function delFrag() {     

    while (maindiv.firstChild) {
      /*maindiv.removeChild(maindiv.lastChild);*/
      /* maindiv.innerHTML = ''; */
      maindiv.textContent = '';
    }
    gnum.value = '';
    gnum.focus();    
}

function pressGrid(e) {
  if (e.key == "Enter") {
    e.preventDefault();

    for (let i=0; i<gnum.value; i++) {
      let newdiv = document.createElement('div');
      newdiv.classList.add('gbox');
      
      maindiv.appendChild(newdiv);

    } /*Change to use fragment instead*/
    gnum.value = '';
    gnum.focus();    
  }
}

function sizeChange(e) {
  e.target.style["width"] = "120px";
}

function sizeRestore(e) {
  e.target.style["width"] = "100px";
}

function clickGrid() {
      for (let i=0; i<gnum.value; i++) {
      let newdiv = document.createElement('div');
      newdiv.classList.add('gbox');
      maindiv.appendChild(newdiv);
    } /*Change to use fragment instead*/
    gnum.value = '';
    gnum.focus();    
}






const ulvar = document.querySelector('ul');

const addme = document.querySelector('#addme');
const inpval = document.querySelector('#item');
const myform = document.querySelector('#myform');

function addli(e) {
  /*const newTextNode = document.createElement.text*/
  
   let newli = document.createElement('li');
   let newspan = document.createElement('span');
   let newbtn = document.createElement('button');
   newbtn.textContent = "Delete";
   newbtn.addEventListener('click', () => {
    /*alert("DELETE PARENT");*/
    newbtn.parentElement.remove();
   })
   newspan.textContent = inpval.value + " ";
   newbtn.classList.add("listbtn");
   inpval.value ='';
   inpval.focus();
   
   newli.appendChild(newspan);
   newli.appendChild(newbtn);
   ulvar.appendChild(newli);
   
  /*alert("ADD ME"); */
};

addme.addEventListener('click', addli);
inpval.addEventListener('keydown', addLiByKey);

function addLiByKey(e) {
  
  if (e.key == "Enter") {
    e.preventDefault();
    let newli = document.createElement('li');
    let newspan = document.createElement('span');
    let newbtn = document.createElement('button');
    newbtn.textContent = "Delete";
    newbtn.addEventListener('click', () => {
      /*alert("DELETE PARENT");*/
      newbtn.parentElement.remove();
    })
    newspan.textContent = inpval.value + " ";
    newbtn.classList.add("listbtn");
    inpval.value ='';
    inpval.focus();
    
    newli.appendChild(newspan);
    newli.appendChild(newbtn);
    ulvar.appendChild(newli);
    
  }
};