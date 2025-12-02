'use strict';

const trigger = document.getElementById('trigger');
const image = document.getElementById('target');

const originalSrc = 'img/picA.jpg';
const hoverSrc = 'img/picB.jpg';

trigger.addEventListener('mouseover', function () {
  image.src = hoverSrc;
});

trigger.addEventListener('mouseout', function () {
  image.src = originalSrc;
});
