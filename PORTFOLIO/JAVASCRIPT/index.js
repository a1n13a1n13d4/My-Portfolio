var cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function(event) {
  var x = event.clientX;
  var y = event.clientY;

  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
});
window.addEventListener('DOMContentLoaded', (event) => {
  var image = document.getElementById('image2');
  var content = document.querySelector('.right-side');
  var socialIcons = document.querySelectorAll('.social-icons img');

  image.addEventListener('click', function () {
    content.classList.toggle('visible');
    socialIcons.forEach(icon => icon.classList.toggle('show'));
    image.style.transform = content.classList.contains('visible') ? 'translateX(-100px)' : 'none';
  });
});
window.addEventListener('scroll', function() {
  var content = document.querySelector('.content');
  var contentPosition = content.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.2;

  if (contentPosition < screenPosition) {
    content.classList.add('slide');
  }
});



