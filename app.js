document.addEventListener("DOMContentLoaded", () => {
  let horizontalLine = document.querySelector(".horizontal-line");
  let body = document.querySelector("body");

  let timeOut;

  function resetLine() {
   
    horizontalLine.style.transitionDuration = "1s";
    horizontalLine.style.transform = `translateX(0px)`;
  }

  body.addEventListener("mousemove", (e) => {
    clearTimeout(timeOut);
    let clientX = e.clientX;
    horizontalLine.style.transitionDuration = "0.4s";
    horizontalLine.style.transform = `translateX(${ (clientX ) * -1}px)`;

    timeOut = setTimeout(() => {
      resetLine();
    }, 3000);
  });
});
