
document.addEventListener('DOMContentLoaded', function() {
  var laptopsInner = document.querySelectorAll('.laptop-inner');
  console.log(laptopsInner);
  for (const laptopInner of laptopsInner) {
    laptopInner.addEventListener('mouseover', (e) => {
      var imageHeight = e.target.offsetHeight;
      var laptopHeight = e.currentTarget.offsetHeight;
      var scrollHeight = imageHeight - laptopHeight;
      console.log(`${imageHeight} | ${laptopHeight} | ${scrollHeight}`);
      e.target.style.transform = "translate3d(0, -" + scrollHeight + "px, 0)";
    });

    laptopInner.addEventListener('mouseout', (e) => {
      e.target.style.transform = "translate3d(0, 0, 0)";
    });
  }
});


