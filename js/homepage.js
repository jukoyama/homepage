document.addEventListener('DOMContentLoaded', function() {
    // どっちにスクロールしているかの確認用に前回のスクロール位置を記憶します
    var sc_past = 0;
    var el_header = document.getElementById('header');
    function isFixheader() {
        var sc = window.pageYOffset;
        // 位置が0ならTOPにいる
        if (sc == 0) {
            el_header.setAttribute('data-fixmode', 'top');
        }
        // 位置が前回より大きく(n)px以下の場合（スクロールし始めに動かさない為）
        else if (sc > sc_past && sc < 200) {
            el_header.setAttribute('data-fixmode', 'wait');
        }
        // 位置が前回より小さければ上にスクロールしている
        else if (sc < sc_past) {
            el_header.setAttribute('data-fixmode', 'up');
        }
        // それ以外なら上にスクロールしている
        else {
            el_header.setAttribute('data-fixmode', 'down');
        }
        sc_past = sc;
    }
    window.addEventListener('scroll', isFixheader, false);
    isFixheader();
}, false);
