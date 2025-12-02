'use strict';

const trigger = document.getElementById('trigger');
const image = document.getElementById('target');

const originalSrc = 'picA.jpg';
const hoverSrc = 'picB.jpg';

trigger.addEventListener('mouseover', function () {
  image.src = hoverSrc;
});

trigger.addEventListener('mouseout', function () {
  image.src = originalSrc;
});
