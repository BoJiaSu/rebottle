$(window).load(function(){
var map = $('#map');    

map.tinyMap({
    'center': '國立雲林科技大學',
    'title': '雲科大設計學院校內首展',
    'zoom':  15,
    'marker': [
        /* 給予每個標記唯一的 id 值 */
        {'addr': '國立雲林科技大學', 'text': '雲科大設計學院校內首展', 'id': '雲科大校內展'},
        {'addr': '台北世貿三館', 'text': '新一代設計展', 'id': '新一代設計展'},
        {'addr': '高雄展覽館', 'text': '放視大賞', 'id': '放視大賞'}
    ]
});

$('#exp-list li').on('click', 'a', function () {
    var obj = $(this),        
        id = obj.text(),
        m = {},
        marker = {},
        markers = [],
        i = 0;       
    
    // 取得 tinyMap 實例
    m = map.data('tinyMap');
    // 取得所有標記
    markers = m._markers;
        
    for (i; i < markers.length; i += 1) {
        marker = markers[i];
        // 關閉所有 infoWindow
        marker.infoWindow.close();
        console.dir(typeof marker.infoWindow.close);
        // 若標記 id 符合則開啟 infoWindow
        if (id === marker.id) {            
            marker.infoWindow.open(m.map, marker);
            // 移動地圖
            m.map.panTo(marker.position);            
        }
    }
    
});


});