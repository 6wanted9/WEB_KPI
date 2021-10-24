var text_out = document.getElementById("text_out");
var A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var B = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
C = new Array(10);
C = cArr(A, B, C);
text_out.innerHTML = "<b>Масив С до перестановки елементів:</b> <br>" 
arrOutput(C);
C = elChanger(C);
text_out.innerHTML += "<b>Масив С після перестановки елементів:</b> <br>"
arrOutput(C);
text_out.innerHTML += "<b>Масив С після сортування методом бульбашки:</b> <br>"
C = bubbleSort(C);
arrOutput(C);


function arrOutput(arr)
{
    for (i = 0; i <10; i ++)
        text_out.innerHTML += arr[i] + "<br>";}

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
    return arrC;
}

function elChanger(arrC)
{
    var maxEl = arrC[0];
    var maxElIndex = 0;
    for(i = 1; i < 10; i++)
    {
        if(arrC[i] > maxEl)
        {
            maxEl = arrC[i];
            maxElIndex = i;
        }
    }
    var tmpEl = arrC[0];
    arrC[0] = maxEl;
    arrC[maxElIndex] = tmpEl; 
    return arrC;
}

function bubbleSort(arrC)
{
    for ( i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            if (arrC[j] > arrC[j + 1]) {
                var tmp = arrC[j];
                arrC[j] = arrC[j + 1];
                arrC[j + 1] = tmp;
            }
        }
    }
    return arrC;
}