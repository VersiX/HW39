let out = $(".display__input");
let history = $(".display__history");

let calculator = {
    first: null,
    second: null,
    sign: "",
    calculate: function () {
        let result;
        switch (this.sign) {
            case "+":
                result = this.first + this.second;
                break;
            case "-":
                result = this.first - this.second;
                break;
            case "*":
                result = this.first * this.second;
                break;
            case "/":
                result = this.first / this.second;
                break;

            default:
                break;
        }
        this.reset();
        return result;
    },
    ready: function () {
        if (this.first && (this.sign != "")) {
            return true;
        } else {
            return false;
        }
    },
    reset: function () {
        this.first = null;
        this.second = null;
        this.sign = "";
    }
}

$(".btn--num").click(function (btn) {

    if ($("#display__input").text() == "0") {
        $("#display__input").html("");
    }
    $("#display__input").append($(this).text());


});

$(".btn--basic").click(function (btn) {

    calculator.first = Number($("#display__input").text());


    switch ($(this).attr("id")) {
        case "plus":
            calculator.sign = "+";
            $("#display__history").html($("#display__input").text() + "+");
            break;
        case "minus":
            calculator.sign = "-";
            $("#display__history").html($("#display__input").text() + "-");
            break;
        case "multiply":
            calculator.sign = "*";
            $("#display__history").html($("#display__input").text() + "*");
            break;
        case "divide":
            calculator.sign = "/";
            $("#display__history").html($("#display__input").text() + "/");
            break;

        default:
            break;
    }
    $("#display__input").html("0");
});

$(".btn--action").click(function (btn) {
    switch ($(this).text()) {
        case "=":
            if (calculator.ready()) {
                calculator.second = Number($("#display__input").text());
                $("#display__input").html(calculator.calculate());
            }
            break;
        case "C":
            $("#display__input").html("");
            break;
        case "CE":
            $("#display__input").html("");
            calculator.reset();
            break;
        case "DEL":
            let content = $("#display__input").text();
            content = content.split("");
            if (content.length > 1) {
                content.pop();
                content = content.join("");
                $("#display__input").html(content);
            } else {
                $("#display__input").html("0");
            }


            break;

        default:
            break;
    }

});


$(".btn--adv").click(function (btn) {

    switch ($(this).attr("id")) {
        case "root":
            $("#display__history").html("sqrt(" + $("#display__input").text() + ")");
            $("#display__input").html(String(Math.sqrt(Number($("#display__input").text()))));
            break;
        case "sq":
            $("#display__history").html($("#display__input").text() + "^2");
            $("#display__input").html(String((Number($("#display__input").text())) * (Number($("#display__input").text()))));
            break;
        case "reverse":
            $("#display__history").html("1 /" + $("#display__input").text());
            $("#display__input").html(String(1 / (Number($("#display__input").text()))));
            break;
        case "percent":
            $("#display__history").html($("#display__input").text() + " / 100");
            $("#display__input").html(String((Number($("#display__input").text())) / 100));
            break;

        case "inv":
            let content = $("#display__input").html();
            if (content[0] === "-") {
                content = content.split("");
                content.shift();
                content = content.join("");
                $("#display__input").html(content);

            } else {
                content = content.split("");
                content.unshift("-");
                content = content.join("");
                $("#display__input").html(content);
            }
            break;

        default:
            break;
    }

});

$("#min").click(function (btn) {
    $(".calc").toggleClass("calc--min");
});
$("#full").click(function (btn) {
    $(".calc").toggleClass("calc--fullscreen");
});
$("#close").click(function (btn) {
    $(".calc").css("display", "none");
});