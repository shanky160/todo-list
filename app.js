
const date = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const day = date.toLocaleDateString("en-Us", options);
const hour= date.getHours();

// DATE
document.getElementById("date").innerText = day;
if (hour<12) {
  document.getElementById("header").classList.add("morning");
  document.body.classList.add("morning");
} else if (hour>=12 && hour<18) {
  document.getElementById("header").classList.add("evening");
  document.body.classList.add("evening");
} else {
  document.getElementById("header").classList.add("night");
  document.body.classList.add("night");
}

// FUNCTONS
function html(x) {
  htmltag = ` <form id="item" class="item">
 <i class="far fa-circle co" onclick="check(event)"></i>
 <p id="1" class="text">${x}</p>
 <i id="icon" class="fa fa-trash-o de" onclick="remove(event)"></i> 
</form> `;
  return htmltag;
}

function check(e) {

  if (e.target.className.match("far fa-check-circle co")) {
    e.target.className = "far fa-circle";
  } else {
    e.target.className = "far fa-check-circle co";
  }
}


function keyPress() {
  let x = document.getElementById("input").value;
  let y = document.getElementById('ul');
  if (event.keyCode == 13 && x != "") {
    y.insertAdjacentHTML("beforeend", html(x));
    document.getElementById("input").value = null;
  }
}

function remove(e) {
  let target= e.target.parentElement;
  target.classList.add("fall");
  target.addEventListener("transitionend", function(){
    target.remove();
  });
  
}

function del() {
  location.reload();
}

