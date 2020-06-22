let inputRA = true;
let inputDN = false;
let substring;

function input(campo, valor) {
    $(campo).val(function (index, value) {
        return value + valor;
    });
}

function maskDN(campo) {
    $(campo).val(function (index, value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{2})(\d)/, "$1/$2")
    });
}

$(".teclas").on("click", event => {
    let valueTecla = event.target.value;

    if (valueTecla < 10) {
        if ($("#raInput").val().length < 11) {
            if ($("#raInput").val().length >= 10) {
                inputRA = false;
                inputDN = true;
            }
            inputRA ? input("#raInput", valueTecla) : "";
        }

        if ($("#dnInput").val().length < 10) {
            inputDN ? input("#dnInput", valueTecla) : "";
            maskDN("#dnInput");
            fodase = true;
        }
    } else if (valueTecla === 10) {
        $("#raInput").val("");
        $("#dnInput").val("");
    } else if (valueTecla === 11){
        alert("Olá!\nSua matrícula é: " + $("#raInput").val() + "\nE sua data de nascimento é: " + $("#dnInput").val());

    }
});

$("#raInput").focus(() => {
    inputRA = true;
    inputDN = false;
});

$("#dnInput").focus(() => {
    inputRA = false;
    inputDN = true;
});

$("#raClear").click( () => {
    substring = $("#raInput").val().substring(0, ($("#raInput").val().length - 1));
    $("#raInput").val(substring);
});