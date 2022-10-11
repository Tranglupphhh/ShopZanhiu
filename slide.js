var index = 1;

function chuyen() {
    var arr = [
        'image/hinh1.jpg',
        'image/hinh2.jpg',
        'image/hinh3.jpg',
    ];
    document.getElementById('hinh').src = arr[index]
    index++;
    if (index == 3) {
        index = 0;
    }
}
setInterval(chuyen, 3200);