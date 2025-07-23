function includeParts(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  includeParts("header", "header.html");
  includeParts("footer", "footer.html");
});