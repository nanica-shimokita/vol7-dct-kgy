document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // クリックされたヘッダーの最も近い親のアコーディオン要素を見つける
            const parentAccordion = this.closest('.accordion');
            // その親アコーディオン要素の中にある .accordion-content を見つける
            const accordionContent = parentAccordion.querySelector('.accordion-content');

            if (accordionContent) { // accordionContent が存在することを確認
                if (accordionContent.classList.contains('open')) {
                    accordionContent.classList.remove('open');
                    this.classList.remove('active'); // ヘッダーのアクティブクラスも削除
                } else {
                    accordionContent.classList.add('open');
                    this.classList.add('active'); // ヘッダーにアクティブクラスを追加
                }
            }
        });
    });

    // パスワード入力と最終ヒントの表示ロジック
    const passwordInput = document.getElementById('passwordInput');
    const submitPasswordBtn = document.getElementById('submitPasswordBtn');
    const finalHint = document.getElementById('finalHint');

    if (submitPasswordBtn && passwordInput && finalHint) {
        submitPasswordBtn.addEventListener('click', function() {
            const correctPassword = "password123"; // ここに正しいパスワードを設定
            if (passwordInput.value === correctPassword) {
                finalHint.style.display = 'block'; // 最終ヒントを表示
                alert("パスワードが正しく、最終ヒントが表示されました！");
            } else {
                alert("パスワードが違います。");
            }
            passwordInput.value = ''; // 入力フィールドをクリア
        });
    }
});