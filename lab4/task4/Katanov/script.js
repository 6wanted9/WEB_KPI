var A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var B = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
C = new Array(10);
C = cArr(A, B, C);
for (i = 0; i <10; i ++)
    document.write("<br>" + C[i]);

function text_out()
{
    document.getElementById("text_out").innerHTML = 5 + 6;
}

function cArr(arrA, arrB, arrC)
{
    for(i = 0; i < 10; i++)
    {
        if(arrA[i] == arrB[i])
            arrC[i] = 1;
        else
        {
            arrC[i] = 1 / ( arrA[i] - arrB[i]);
        }
    }
}