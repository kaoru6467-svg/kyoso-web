// ページ読み込み後に動作する JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // 「学びのイメージを見る」ボタンの要素を取得
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  const learnSection = document.getElementById("learn");

  // ボタンが押されたときに、学びのセクションまでスムーズスクロールする
  if (learnMoreBtn && learnSection) {
    learnMoreBtn.addEventListener("click", function () {
      learnSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // 初心者確認用の簡単な動作：コンソールにメッセージを表示
  console.log("共創工学部サイトへようこそ！JavaScriptが正しく動いています。");
});
