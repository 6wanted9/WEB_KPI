let a;
let b;
let func;
function NumberInput(number)
{
    if(func==undefined)
    {
        if(a==undefined)
        {
            a=number;
            document.getElementById('text').value=number;
        }
        else
        {
            document.getElementById('text').value+=number;
            a+=number;
        } 
    }
    else
    {
        document.getElementById('text').value+=number;
        if(b==undefined) b=number;
        else b+=number;
    }
}

function FunctionInput(f,sign)
{
    if(func==undefined)
    {
        func=f;
        document.getElementById('text').value+=sign;
    }
}

function Addition()
{
    return parseInt(a)+parseInt(b);
}
function Execute()
{
    document.getElementById('text').value=func(a,b)
    a=undefined;
    b=undefined;
    func=undefined;
}
function Subtraction()
{
    return parseInt(a)-parseInt(b);
}
function Multiplication()
{
    return parseInt(a)*parseInt(b);
}
function Degree()
{
    return Math.pow(parseInt(a),parseInt(b));
}
function Division()
{
    return parseInt(a)/parseInt(b);
}

function DivisionRemain()
{
    return parseInt(a)%parseInt(b);
}
function Sqrt()
{
    document.getElementById('text').value=Math.sqrt(a);
    a=undefined;
}