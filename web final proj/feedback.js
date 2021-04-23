function start() {
    var button = document.getElementById("sub");
    button.addEventListener("click", countwine, false);
}

function countwine() {
    var obj = document.getElementsByName("wine"); //這個是以標籤的name來取控制元件
    for (i = 0; i < obj.length; i++) {
        console.log(obj[i].value);
        getRadioBoxValue(obj[i].value);
    }
}

function getRadioBoxValue(wine) {
    //用php接值然後回傳到js
    $.ajax({
        url: "count.php", //傳到哪
        data: {
            wine: wine
        },
        type: "POST",
        datatype: "html",
        success: function(output) { //如果執行成功的話
            document.getElementById("recall").innerHTML = document.getElementById("recall").innerHTML + output;
            //output = $("#recall").innerHTML + output;
        },
        error: function() {
            alert("Request Failed.");
        }
    });
}

window.addEventListener("load", start, false);