
function Loader(params) {
  window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
  });
}

export default Loader