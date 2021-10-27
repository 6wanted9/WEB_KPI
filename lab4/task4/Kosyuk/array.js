var text_out = document.getElementById("text_out");

var decision = confirm("Чи бажаєте виконати поставлене завдання?");
if(decision===true)
{
    let n = +prompt("Введіть к-сть елементів першого масива:"); 
    let m = +prompt("Введіть к-сть елементів другого масива:");
    let A = new Array(n);
    let B = new Array(m);
    A = filling(A, n, 1, 30);
    B = filling(B, m, 1, 30);
    text_out.innerHTML = "<b>Перший вхідний масив:</b><br>"
    arrayOutput(A, n);
    text_out.innerHTML += "<br><b>Другий вхідний масив:</b><br>"
    arrayOutput(B, m);
    var result = searchMin(A, B, n, m);
    text_out.innerHTML += "<br><b>Результат:</b> " + result;
    A = bubbleSort(A, n);
    text_out.innerHTML += "<br><b>Перший вихідний масив:</b><br>"
    arrayOutput(A, n);
    B = bubbleSort(B, m);
    text_out.innerHTML += "<br><b>Другий вихідний масив:</b><br>"
    arrayOutput(B, m);
}
else
{
    alert("Робота програми завершена коректно");
}

function getRandomInRange(max, min)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function filling(arr, number, min, max)
{
    for(i = 0; i < number; i++)
    {
        arr[i] = getRandomInRange(min, max);
    }
    return arr;
}

function arrayOutput(arr, number)
{
    for (i = 0; i < number; i ++)
    {
        text_out.innerHTML += arr[i] + " ";
    }
}

function bubbleSort(arr, number)
{
    for (i = 0; i < number; i++) {
        for (j = 0; j < number; j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

function searchMin(A, B, n, m)
{
    var value = 0, min = 0;
    for(i = 0; i < n; i++)
    {
        for(j = 0; j < m; j++)
        {
            if(A[i] == B[j])
            {
                min = A[i];
                if(value > min || value == 0)
                {
                    value = A[i];
                }
                break;
            }
        }
    }
    return value;
}