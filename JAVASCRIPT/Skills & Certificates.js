document.addEventListener("mousemove", function(event) {
  var cursor = document.getElementById("cursor");
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});
document.addEventListener("DOMContentLoaded", function() {
  var currentPageIndex = 0;
  var pages = document.querySelectorAll(".skills-page");
  var dots = document.querySelectorAll(".dot");
  var leftButton = document.querySelector(".left-btn");
  var rightButton = document.querySelector(".right-btn");

  function showPage(index) {
    pages.forEach(function(page) {
      page.style.transform = "translateX(-" + index * 100 + "%)";
    });

    dots.forEach(function(dot, dotIndex) {
      dot.classList.toggle("active", dotIndex === index);
    });
  }

  showPage(currentPageIndex);

  leftButton.addEventListener("click", function() {
    currentPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;
    showPage(currentPageIndex);
  });

  rightButton.addEventListener("click", function() {
    currentPageIndex = (currentPageIndex + 1) % pages.length;
    showPage(currentPageIndex);
  });
});
