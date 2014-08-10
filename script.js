mainSection = document.querySelector('.main')
maleButton = document.querySelector('.male');
femaleButton = document.querySelector('.female')

loadingHtml = document.getElementById('loading').innerHTML

profileHtml = document.getElementById('profile').innerHTML

maleButton.addEventListener('click', function() {
  mainSection.innerHTML = loadingHtml;
  window.setTimeout(function() {
    mainSection.innerHTML = profileHtml
  }, 5000);
})

femaleButton.addEventListener('click', function() {
  mainSection.innerHTML = loadingHtml;
  window.setTimeout(function() {
    mainSection.innerHTML = profileHtml
  }, 5000);
})
