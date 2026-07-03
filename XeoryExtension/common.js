      // JavaScriptでボタンのクリックイベントを制御
      const hamburger = document.querySelector("js-hamburger");
      const nav = document.querySelector("js-nav");

      hamburger.addEventListener("click", () => {
        // 現在のメニューの開閉状態（true または false）を取得
        const isOpen = hamburger.getAttribute("aria-expanded") === "true";

        // 状態を反転させる
        hamburger.setAttribute("aria-expanded", !isOpen);
        nav.classList.toggle("is-active");

        // ボタンの音声読み上げ用ラベルも切り替える
        if (!isOpen) {
          hamburger.setAttribute("aria-label", "メニューを閉じる");
        } else {
          hamburger.setAttribute("aria-label", "メニューを開く");
        }
      });