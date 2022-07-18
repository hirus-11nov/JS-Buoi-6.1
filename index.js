//Bài 1
function find() {
    var resultEx1 = document.getElementById("resultEx1");
    var x = 0;
    var i = 0;
    while (x < 10000) {
        i++;
        x += i;
    }
    resultEx1.innerHTML = "Số nguyên dương nhỏ nhất là: " + i;
}

//Bài 2
function calcEx2() {
    var numX = +document.getElementById("txtX").value;
    var numN = +document.getElementById("txtN").value;
    var sum = 0;
    var resultEx2 = document.getElementById("resultEx2");

    for (var i = 1; i <= numN; i++) {
        sum += Math.pow(numX, i);
    }
    resultEx2.innerHTML = "Tổng là: " + sum;
}

//Bài 3
function calcEx3 () {
    var numNEx3 = +document.getElementById("txtNEx3").value;
    var resultEx3 = document.getElementById("resultEx3");
    var res = 1;

    for (var i = 1; i <= numNEx3; i++) {
        res = res*i;
    }
    resultEx3.innerHTML = "Giai thừa của " + numNEx3 + " là: " + res;
}

//Bài 4
function printDiv () {
    var resultEx4 = document.getElementById("resultEx4");
    var blue = "<div style=\"background: blue\">lẻ</div>"
    var red = "<div style=\"background: red\">Chẵn</div>"
    for (var i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            resultEx4.innerHTML += blue;
        } else {
            resultEx4.innerHTML += red;
        }
    }
}