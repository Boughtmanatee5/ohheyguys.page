(function () {
  'use strict';
  var mainSection = document.querySelector('.main');
  var maleButton = document.querySelector('.male');
  var femaleButton = document.querySelector('.female');

  var loadingGuysHtml = document.getElementById('loadingGuys').innerHTML;
  var loadingGalsHtml = document.getElementById('loadingGals').innerHTML;

  var profileHtml = document.getElementById('profile').innerHTML;

  maleButton.addEventListener('click', function() {
    mainSection.innerHTML = loadingGalsHtml;

    var namesSection = document.querySelector('.names').childNodes;
    var i = 1;
    function switchNames() {
      namesSection[i].className = '';
      i+= 2;
      namesSection[i].className = 'active';

      if(i <= namesSection.length)  {
        window.setTimeout(switchNames, 500);
      }
    }
    switchNames();
    window.setTimeout(function() {
      mainSection.innerHTML = profileHtml;
    }, 5000);
  });

  femaleButton.addEventListener('click', function() {
    mainSection.innerHTML = loadingGuysHtml;

    var namesSection = document.querySelector('.names').childNodes;
    var i = 1;
    function switchNames() {
      namesSection[i].className = '';
      i+= 2;
      namesSection[i].className = 'active';

      if(i <= namesSection.length)  {
        window.setTimeout(switchNames, 500);
      }
    }
    switchNames();
    window.setTimeout(function() {
      mainSection.innerHTML = profileHtml;
    }, 5000);
  });
}());
