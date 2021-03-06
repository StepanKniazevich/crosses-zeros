const container = document.getElementById("cross__container");
const gameBox = document.getElementsByClassName("cross__block");




let count = 0;


function clear() {

    for (let element of gameBox) {

        element.innerHTML = " ";

    }
}

function checkFull() {

    let check = true;

    for (let element of gameBox) {
        if (element.innerHTML === " ") {
            check = false;
            return check;
        }
    }
    return check;
}

function checkWin() {


    let zerosWin = [[0, 0, 0], [0, 0, 0], [0, 0]];
    let crossesWin = [[0, 0, 0], [0, 0, 0], [0, 0]];

    let n = 0;


    //Перевірка по горизонталі
    for (let i = 0, k = 0; k <= 6, i < 3; k += 3, i++) {
        for (let j = 0; j < 3; j++) {

            switch (gameBox[k + j].firstChild.className) {

                case "crosses": {
                    crossesWin[n][i]++;
                    if (crossesWin[n][i] === 3) {
                        return { win: "Crosses", index: [k + j - 2, k + j - 1, k + j] }
                    } break;
                }

                case "zeros": {
                    zerosWin[n][i]++;
                    if (zerosWin[n][i] === 3) {
                        return { win: "Zeros", index: [k + j - 2, k + j - 1, k + j] }
                    } break;
                }

            }
        }
    }

    // Перевірка по вертикалі

    n = 1;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j <= 6; j += 3) {


            switch (gameBox[i + j].firstChild.className) {

                case "crosses": {
                    crossesWin[n][i]++;
                    if (crossesWin[n][i] === 3) {
                        return { win: "Crosses", index: [i + j - 6, i + j - 3, i + j] }
                    } break;
                }

                case "zeros": {
                    zerosWin[n][i]++;
                    if (zerosWin[n][i] === 3) {
                        //  console.log(zerosWin[3]);

                        return { win: "Zeros", index: [i + j - 6, i + j - 3, i + j] }
                    } break;
                }

            }
        }
    }
    //Перевірка по діагоналях
    n = 2;

    for (let i = 0; i <= 8; i += 4) {

        switch (gameBox[i].firstChild.className) {

            case "crosses": {
                console.log(crossesWin[n][0]);
                crossesWin[n][0]++;
                if (crossesWin[n][0] === 3) {
                    return { win: "Crosses", index: [i - 8, i - 4, i] };
                }
                break;
            }
            case "zeros": {
                zerosWin[n][0]++;
                if (zerosWin[n][0] === 3) {
                    return { win: "Zeros", index: [i - 8, i - 4, i] }
                } break;
            }
        }
    }

    for (let i = 2; i <= 6; i += 2) {

        switch (gameBox[i].firstChild.className) {

            case "crosses": {
                crossesWin[n][1]++;
                if (crossesWin[n][1] === 3) {
                    return { win: "Crosses", index: [i - 8, i - 4, i] };
                }
                break;
            }
            case "zeros": {
                zerosWin[n][1]++;
                if (zerosWin[n][1] === 3) {
                    return { win: "Zeros", index: [i - 8, i - 4, i] }
                } break;
            }

        }

    }
}


container.addEventListener("click", (event) => {

    if ((event.target.innerHTML === " ")) {

        if (count % 2) {
            event.target.innerHTML = ('<img src="icons/zeros.png" class = "zeros">')
        }
        else { event.target.innerHTML = ('<img src="icons/crosses.png" class = "crosses">') }
        count++;

    }



    let winner = checkWin();

    if (winner !== undefined) {
        setTimeout(() => {
            alert(`${winner.win} win`);
            clear();

        }, 500)

    }




    else if (checkFull()) {
        setTimeout(() => {
            alert("Нічія")
            clear();

        }, 1000)
    }




}
    //console.log(event.target.innerHTML === " ");
);