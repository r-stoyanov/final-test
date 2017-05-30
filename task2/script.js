"use strict"

// задача 1 (4т.)
// Сортирайте следния списък от числа във възходящ ред:
var arr = [2, 5, 8, 4, 1, 12];

function sortArr(list) {
    for (var i = 0; i < list.length; i += 1) {
        for (var j = 0; j < i; j += 1) {
            if (list[i] < list[j]) {
                var temp = list[j];
                list[j] = list[i];
                list[i] = temp;
            }
        }
    }
    return list;
}
console.log(sortArr(arr));
// задача 2 (4т.)
// Напишете функция, която да изважда всички думи, с дължина над 4 символа от следния текст:
var text = "The quick brown fox jumps over the lazy dog";

function fourLetterWord(text) {
    var arr = text.split(" "),
        newArr = [];

    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i].length >= 4) {
            newArr.push(arr[i]);
        }
    }
    return newArr.join(" ");
}
console.log(fourLetterWord(text));
// задача 3 (5т.)
// Напишете код, който на всяка секунда закача към `#container` елемента следния html елемент: `<p>repetition is fun</p>`

var putParagraph = function () {
    window.setInterval(function () {
        var para = document.createElement("p");
        para.textContent = "repetition is fun";
        document.getElementById("container").appendChild(para);
    }, 1000);
};
putParagraph();
// задача 4 (6т.)
// Направете така, че 2 секунди след зареждането на дадена страница, всички картинки в нея да се завъртят по вертикалната си ос (по Y)

(function () {
    window.setTimeout(function () {
        $("li img").addClass("rotate");
    }, 1000);
}());

// задача 5 (6т.)
// Напишете функция, която да сортира следния списък от обекти по полето `price`:
var items = [
    {
        id: 1,
        title: "Item 1",
        price: 4.3
  },
    {
        id: 2,
        title: "Item 2",
        price: 2.0
  },
    {
        id: 3,
        title: "Item 3",
        price: 6.5
  },
    {
        id: 4,
        title: "Item 4",
        price: 1.5
  }
];

function propComparator(prop) {
    return function (a, b) {
        return ((a[prop] < b[prop] ? -1 : 1) || 0);
    };
}
var newArr = items.sort(propComparator("price"));
console.log(newArr);
