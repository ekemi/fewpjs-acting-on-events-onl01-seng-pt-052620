// Your code here
let dodger = document.getElementById("dodger");
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px","");
  let left = parseInt(leftNumbers, 10);
  if (left > 10) {
    dodger.style.left = `${left-1}px`;
  }
}
dodger.addEventListener("keydown",function(e){
  if (e.key =="ArrowLeft"){
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
  let rightNumbers = dodger.style.left.replace("px","");
  let right = parseInt(rightNumbers, 10);
  if (right < 10) {
    dodger.style.right = `${left+1}px`;
  }
}
dodger.addEventListener("keydown",function(e){
  if (e.key =="ArrowRight"){
    moveDodgerRight();
  }
});
