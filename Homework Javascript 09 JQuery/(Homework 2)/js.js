let textInput = $("#textInput");
let colorInput = $("#colorInput");
let printBtn = $("#button");
let message = $("#header");
let error = $("#error");

printBtn.on('click', function(){
    message.html(
        `${textInput.val()}`
    )
    message.css("color", `${colorInput.val()}`);
});

printBtn.on('click', function(){
    if ((textInput.val() === "")  || (colorInput.val() === "")){
        error.html(
            `Error: Something went wrong, please try again.`
    )}
});

