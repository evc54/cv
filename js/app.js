"use strict";

(function () {
  var links = document.getElementsByClassName('sidebar_nav-item--link'),
      flipSection = function (callback) {
        var timer,
            section = document.getElementById('content'),
            degree = 0,
            flip = function (degree, threshold, callback) {
              section.style.transform = 'rotateY(' + degree + 'deg)';

              if (degree == threshold) {
                clearInterval(timer);
                if (typeof callback == 'function') callback();
              }
            },
            flipIn = function () {
              degree -= 10;
              flip(degree, 0);
            },
            onFlipOut = function () {
              if (typeof callback == 'function') callback();
              timer = setInterval(flipIn, 15);
            },
            flipOut = function () {
              degree += 10;
              flip(degree, 90, onFlipOut);
            };
        timer = setInterval(flipOut, 15);
      },
      toggleSlides = function (activeSlideId, selectedSlideId) {
        var activeSlide = document.getElementById(activeSlideId),
            selectedSlide = document.getElementById(selectedSlideId);
        flipSection(function () {
          activeSlide.classList.remove('active');
          selectedSlide.classList.add('active');
        });
      },
      findActiveLink = function () {
        for (var index = 0; index < links.length; index++) {
          if (links[index].classList.contains('active')) {
            return links[index];
          }
        } 
      },
      findLinkByHash = function (hash) {
        for (var index = 0; index < links.length; index++) {
          if (links[index].hash == hash) {
            return links[index];
          }
        } 
      },
      onLinkClick = function (e) {
        e && e.preventDefault();
        var activeLink = findActiveLink();
        if (this.classList.contains('active')) return;
        activeLink.classList.remove('active');
        this.classList.add('active');
        toggleSlides(activeLink.hash.split('#')[1], this.hash.split('#')[1]);
      };
  
  for (var index = 0; index < links.length; index++) {
    links[index].addEventListener('click', onLinkClick);
  }

  if (window.location.hash) {
    var link = findLinkByHash(window.location.hash);
    onLinkClick.call(link);
  }

  var popupLinks = document.getElementsByClassName('-popup');
  
  for (var index = 0; index < popupLinks.length; index++) {
    popupLinks[index].addEventListener('click', function (e) {
      e.preventDefault();
      if (this.tagName == 'A') {
        var popup = window.open(this.href, '_blank', '');
        popup.focus();
      }
      return false;
    });
  }
}());
