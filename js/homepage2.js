document.addEventListener('DOMContentLoaded', function() {
    // 縮小した時のヘッダーの高さ
    var fixheader_height = 40;
    var window_height;
    var header_pos = 0;
    var subheader_map = [];
    // リサイズイベントで要素の位置を取得する
    function isWindowInit() {
        window_height = document.documentElement.clientHeight;
        var pageY = window.pageYOffset;
        subheader_map = []
        header_pos = document.getElementsByClassName('fixheader')[0].getBoundingClientRect().top + pageY;
        var subheaders = document.getElementsByClassName('subheader');
        for (var idx = 0; idx < subheaders.length; idx++) {
            var elem = subheaders[idx];
            var id = elem.id;
            var el_top = elem.getBoundingClientRect().top + pageY;
            subheader_map.push({
                id: id,
                top: el_top,
            });
        }
        // 画面下から順にソート
        subheader_map.sort(function(a, b) {
            return (a.top < b.top) ? 1 : (a.top > b.top) ? -1 : 0;
        });
    }
    window.addEventListener('resize', isWindowInit, false);
    isWindowInit();
    // スクロールイベントで属性値を変更
    function isFixheader() {
        var sc = window.pageYOffset;
        if (sc > header_pos) {
            document.getElementById('header').setAttribute('data-fixed', '1');
        } else {
            document.getElementById('header').setAttribute('data-fixed', '0');
        }
        var f = false;
        for (var idx in subheader_map) {
            if (sc > subheader_map[idx].top - fixheader_height && !f) {
                document.getElementById(subheader_map[idx].id).setAttribute('data-fixed', '1');
                f = true;
            } else {
                document.getElementById(subheader_map[idx].id).setAttribute('data-fixed', '0');
            }
        }
    }
    window.addEventListener('scroll', isFixheader, false);
    isFixheader();
}, false);
