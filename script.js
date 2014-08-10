mainSection = document.querySelector('.main')
maleButton = document.querySelector('.male');
femaleButton = document.querySelector('.female')

maleButton.addEventListener('click', function() {
  mainSection.innerHTML = "<div class'spinner'>I Spin<div><div class='names'><h2>Bryan Adams</h2></div>";
  window.setTimeout(function() {
    mainSection.innerHTML = "<h2>ASS BUTT</h2>"
  }, 2000);
})

femaleButton.addEventListener('click', function() {
  mainSection.innerHTML = "<div class'spinner'>I Spin<div><div class='names'><h2>Bryan Adams</h2></div>";
  window.setTimeout(function() {
    mainSection.innerHTML = "<h2>ASS BUTT</h2>"
  }, 2000);
})
