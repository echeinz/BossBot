$(document).ready(function () {
    $("#bossBotForm").submit(function (event) {
        var inputText = $(".inputText").val();
        var outputText = $(".outputText");
        var bossBotResponse = "No, it's your mom!";
        if (inputText == "Hello") {
            bossBotResponse = "Hi, how's your mom been?"
        } else if (inputText == "hello") {
            bossBotResponse = "Your mother was great last night, thanks for asking."
        }
        outputText.val(bossBotResponse);

        event.preventDefault();
    });
});
