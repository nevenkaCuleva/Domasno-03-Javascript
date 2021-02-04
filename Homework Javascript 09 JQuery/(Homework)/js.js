let input = $("#input");
let printBtn = $("#button");
let message = $("#header");

printBtn.on('click', function(){
    message.html(
        `Hello there ${input.val()}!`
    )
});