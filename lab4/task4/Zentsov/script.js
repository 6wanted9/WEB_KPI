function RandomArray(number)
{
    return Array.from({length: number}, () => Math.floor(Math.random() * 40));
}

function NewArray(array)
{
    var maxElem=Math.max.apply(null,array)
    for(var i=0;i<array.length;i++)
    {
        array[i]*=maxElem;
    }
    return array;
}
function Output(number)
{
    var array=RandomArray(number).sort(compare);
    alert('Первоначальный массив: ' +array+', новый: '+NewArray(array));
}
function compare(a, b) {
    if (a> b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  }