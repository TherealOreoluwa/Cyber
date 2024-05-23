  //to change a text
// document.getElementById('amount').innerHTML=amount;

// to change the font size of an element
//document.getElementById('amount').style.fontSize = '50px';

// to change the color of an html 
//document.getElementById('olu').style.color = 'red';

//document.getElementById('fruit').style.display ="none";

//function bulboff(){
  //  document.getElementById('image').src='../images/bulb off.jpg';
//}

//function bulbon() {
    //document.getElementById('image').src='../images/bulb on.jpg'
//}

function change(){
    document.getElementById('olu').style.backgroundColor = 'grey';
}

function changetxt(){
  document.getElementById('demo').innerHTML = 'Hello World';
}

function check(){
  var phone = document.getElementById('phone');
  if(phone.value.length<11){
    document.getElementById('errorSpan').innerHTML = 'Phone number is not complete';
  }
  else{
    document.getElementById('errorSpan').innerHTML = 'Phone Number validated';
 }
}

function displayImage(imageSrc){
  document.getElementById('mainImage').src=imageSrc
}


function toggleDiv(){
  if(document.getElementById('toggleDiv').style.display='block'){
    document.getElementById('toggleDiv').style.display='none';
  }else{
    document.getElementById('toggleDiv').style.display='block'}
}

function showDiv(){
  document.getElementById('toggleDiv').style.display='block';
}

document.getElementById('less').style.display='none'

function show(){
  var lessElement = document.getElementById('less');
  var showMoreLink = document.getElementById('showMore');

  lessElement.style.display = 'block';
  showMoreLink.style.display = 'none';

  lessElement.addEventListener('click', function() {
    lessElement.style.display = 'none';
    showMoreLink.style.display = 'inline'; //Make sure it's inline to maintain layout
  })
}


