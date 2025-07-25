document.addEventListener('DOMContentLoaded', function() {
    // アコーディオンの処理
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // クリックされたヘッダーの親要素（.accordion）を取得
            const accordionItem = this.closest('.accordion');
            // クリックされたヘッダーの次の要素（.accordion-content）を取得
            const content = this.nextElementSibling;

            // もし既に開いているアコーディオンがあれば閉じる (オプション)
            // このコードを有効にすると、同時に複数のアコーディオンが開かなくなります。
            /*
            document.querySelectorAll('.accordion-content.open').forEach(openContent => {
                if (openContent !== content) { // クリックしたもの以外を閉じる
                    openContent.classList.remove('open');
                    openContent.previousElementSibling.classList.remove('active');
                }
            });
            */

            // 現在のコンテンツの表示を切り替える
            content.classList.toggle('open');
            this.classList.toggle('active'); // ヘッダーのアクティブ状態を切り替える
        });
    });

    // 簡易パスワード機能の処理
    const passwordInput = document.getElementById('passwordInput');
    const passwordSubmit = document.getElementById('passwordSubmit');
    const passwordMessage = document.getElementById('passwordMessage');
    const finalHint = document.getElementById('finalHint');

    passwordSubmit.addEventListener('click', function() {
        const correctPassword = 'GEMINI'; // ここに正しいパスワードを設定
        if (passwordInput.value === correctPassword) {
            passwordMessage.textContent = 'パスワードが正解しました！';
            passwordMessage.style.color = 'green';
            finalHint.style.display = 'block'; // 最終ヒントを表示
            passwordInput.value = ''; // 入力欄をクリア
        } else {
            passwordMessage.textContent = 'パスワードが違います。';
            passwordMessage.style.color = 'red';
            finalHint.style.display = 'none'; // 最終ヒントを隠す
        }
    });
});