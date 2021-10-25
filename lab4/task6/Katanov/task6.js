var boldButton = document.getElementById("bold");
var inclineButton = document.getElementById("incline");
var underlineButton = document.getElementById("underline");
var inputArea = document.getElementById("input_area");
var outputArea = document.getElementById("output_area");
var colorValue = document.getElementById("color-value");
var colorButton = document.getElementById("color-button");
var regValue = document.getElementById("reg-value");
var regButton = document.getElementById("reg-button");

var text = inputArea.value;

//
boldButton.addEventListener("click", boldBtn, false);
inclineButton.addEventListener("click", inclineBtn, false);
underlineButton.addEventListener("click", underlineBtn, false);
inputArea.addEventListener("input", areaUpd, false);
colorButton.addEventListener("click", colorBtn, false);
regButton.addEventListener("click", regBtn, false);
//
var lstyle = "";
var rstyle = "";
//
var isBold = false;
var isInclined = false;
var isUnderlined = false;
function areaUpd()
{
    text = inputArea.value;
    outputArea.innerHTML = lstyle + text + rstyle;
}
function boldBtn()
{
    if(isBold)
    {
        lstyle = lstyle.replace("<b>", "");
        rstyle = rstyle.replace("</b>", "");
        boldButton.className = "edit-button";

    }
    else
    {
        lstyle += "<b>";
        rstyle += "</b>";
        boldButton.className = "edit-button pressed_button";
    }
    outputArea.innerHTML = lstyle + text + rstyle;
    isBold = !isBold;
}
function inclineBtn()
{
    if(isInclined)
    {
        lstyle = lstyle.replace("<i>", "");
        rstyle = rstyle.replace("</i>", "");
        inclineButton.className = "edit-button";

    }
    else
    {
        lstyle += "<i>";
        rstyle += "</i>";
        inclineButton.className = "edit-button pressed_button";
    }
    outputArea.innerHTML = lstyle + text + rstyle;
    isInclined = !isInclined;
}
function underlineBtn()
{
    if(isUnderlined)
    {
        lstyle = lstyle.replace("<u>", "");
        rstyle = rstyle.replace("</u>", "");
        underlineButton.className = "edit-button";

    }
    else
    {
        lstyle += "<u>";
        rstyle += "</u>";
        underlineButton.className = "edit-button pressed_button";
    }
    outputArea.innerHTML = lstyle + text + rstyle;
    isUnderlined = !isUnderlined;
}
function colorBtn()
{
    outputArea.style.color = colorValue.value;
}
function regBtn()
{
    if(regValue.value == "Верхній регістр")
    {
        outputArea.style.textTransform = "uppercase";
    }
    else if(regValue.value == "Нижній регістр")
    {
        outputArea.style.textTransform = "lowercase";
    }
}