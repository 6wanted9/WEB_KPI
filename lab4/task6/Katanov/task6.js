var boldButton = document.getElementById("bold");
var inclineButton = document.getElementById("incline");
var underlineButton = document.getElementById("underline");
var inputArea = document.getElementById("input_area");
var outputArea = document.getElementById("output_area");

var text = inputArea.value;

//
boldButton.addEventListener("click", boldBtn, false);
inclineButton.addEventListener("click", inclineBtn, false);
underlineButton.addEventListener("click", underlineBtn, false);
inputArea.addEventListener("onkeydown", areaUpd, false);

//
var isBold = false;
var isInclined = false;
var isUnderlined = false;
function areaUpd()
{
    text = inputArea.value;
}
function boldBtn()
{
    if(isBold)
    {
        text = text.replace("<b>", "");
        text = text.replace("</b>", "");
        boldButton.className = "edit-button";

    }
    else
    {
        text = text.bold();
        boldButton.className = "edit-button pressed_button";
    }
    outputArea.innerHTML = text;
    isBold = !isBold;
}
function inclineBtn()
{
    if(isInclined)
    {
        text = text.replace("<i>", "");
        text = text.replace("</i>", "");
        inclineButton.className = "edit-button";

    }
    else
    {
        text = text.italics();
        inclineButton.className = "edit-button pressed_button";
    }
    outputArea.innerHTML = text;
    isInclined = !isInclined;
}
function underlineBtn()
{
    if(isUnderlined)
    {
        text = text.replace("<b>", "");
        text = text.replace("</b>", "");
        underlineButton.className = "edit-button";

    }
    else
    {
        text = text.underline();
        underlineButton.className = "edit-button pressed_button";
    }
    outputArea.innerHTML = text;
    isUnderlined = !isUnderlined;
}