// function hover(){
//     var change = document.getElementById('box');
  
//     change.addEventListener('mouseenter', function(){
//       change.style.backgroundColor = "orange";
//     })
//   }
  
//   function over(){
//     var change = document.getElementById('ore');
  
//     change.addEventListener('mouseenter', function(){
//       change.style.backgroundColor = "magenta";
//     })
//   }
  
//   function move(){
//     var change = document.getElementById('cmd');
  
//     change.addEventListener('mouseenter', function(){
//       change.style.backgroundColor = "purple";
//     })
//   }
  
//   function show(){
//     document.getElementById('addBox').style.display= 'block'
//   }
  
//   function show(){
//     var lessElement = document.getElementById('less');
//     var showMoreLink = document.getElementById('showMore');
  
//     lessElement.style.display = 'block';
//     showMoreLink.style.display = 'none';
  
//     lessElement.addEventListener('click', function() {
//       lessElement.style.display = 'none';
//       showMoreLink.style.display = 'inline'; //Make sure it's inline to maintain layout
//     })
//   }

// No 2 solution

// Get all the .box elements
// to declare a variable you can use Var, const or let
const boxes = document.querySelectorAll('.box') 

// Loop through each .box element
boxes.forEach(box => {
    // Add event listener for mouse enter event
    box.addEventListener('mouseenter', () => {
        // change background color of .content when hovered
        document.querySelector('.content').style.backgroundColor = 'brown';
    });

    // Add event listener for mouseleave event

    box.addEventListener('mouseleave', () => {
        // Reset background color of .content when not hovered
        document.querySelector('.content').style.backgroundColor = '';
    });

})

// No 6 solution

function addBox(){
    // Create a new div element
    var newBox = document.createElement('div');
    // Add class "box" to the new div
    newBox.textContent = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage';
    // Append the new box to the container
    document.querySelector('.content').appendChild(newBox);
}

// Add an event listener to the button
document.getElementById('addBox').addEventListener('click', addBox);


// no 7 solution
document.getElementById('less').style.display='none';
function show(){
     var moreText = document.getElementById("less");
     var showMoreButton = document.getElementById("showMore");

     if(moreText.style.display ==="none"){
         moreText.style.display = "inline";
         showMoreButton.textContent = "show less...";
    } else {
        moreText.style.display = "none";
         showMoreButton.textContent = "show more...";
     }
}

// no 8 solution
document.getElementById('less').style.display='none';
function show(){
    var moreText = document.getElementById("less");
    var showMoreLink = document.getElementById("showMore");

    if(moreText.style.display ==="none"){
        moreText.style.display = "inline";
        showMoreLink.style.color = "green" //change color to green when showing hide text
    } else {
        moreText.style.display = "none";
        showMoreLink.style.color =""; // Revert to original color when text is hidden

    }
}