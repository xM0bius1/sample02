function includeParts(id, url) {
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  includeParts("header", "../parts/header.html");
  includeParts("footer", "../parts/footer.html");
});
