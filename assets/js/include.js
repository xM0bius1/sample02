function includeParts(id, url) {
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${url} 読み込みエラー: ${res.status}`);
      }
      return res.text();
    })
    .then((data) => {
      const container = document.getElementById(id);
      container.insertAdjacentHTML("beforeend", data);

      // script タグを実行する処理（必要な場合）
      const scripts = container.querySelectorAll("script");
      scripts.forEach((script) => {
        const newScript = document.createElement("script");
        if (script.src) {
          newScript.src = script.src;
        } else {
          newScript.textContent = script.textContent;
        }
        document.body.appendChild(newScript);
      });
    })
    .catch((err) => console.error("読み込み失敗:", err));
}

document.addEventListener("DOMContentLoaded", () => {
  includeParts("header", "header.html");
  includeParts("footer", "footer.html");
});
