function merge(arr1, arr2) {
    let str = "";

    for (let i = 0; i < arr1.length; i++) {
        i % 2 == 0
            ? (str += Number(arr1[i]) + Number(arr2[i]) + " - ")
            : (str += arr1[i] + arr2[i] + " - ");
        i == str.length && i % 2 == 0
            ? (str += Number(arr1[i]) + Number(arr2[i]))
            : null;
        i == str.length && i % 2 != 0 ? (str += arr1[i] + arr2[i]) : null;
    }

    console.log(str.slice(0, str.length - 3));
}

merge(
    ["5", "15", "23", "56", "35"],

    ["17", "22", "87", "36", "11"]
);

/*
             !!! This is a solution without using the .slice() method!!!

function merge(arr1, arr2) {
    let str = "";

    for (let i = 0; i < arr1.length; i++) {


        if (i % 2 == 0 && (arr1.length - 1) == i) {
            str += Number(arr1[i]) + Number(arr2[i])
            break;
        }
        if (i % 2 != 0 && (arr1.length - 1) == i) {
            str += arr1[i] + arr2[i]
            break;
        }
        i % 2 == 0
            ? (str += Number(arr1[i]) + Number(arr2[i]) + " - ")
            : (str += arr1[i] + arr2[i] + " - ");

    }

    console.log(str);
}

merge(
    ["5", "15", "23", "56", "35"],

    ["17", "22", "87", "36", "11"]
);*/
