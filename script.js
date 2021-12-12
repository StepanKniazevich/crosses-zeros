const container = document.getElementById("cross__container");
const gameBox = document.getElementsByClassName("cross__block");




let count = 0;


function clear() {

    for (let element of gameBox) {

        element.innerHTML = " ";

    }
}

function checkFull() {

    let checkAll = false;

    for (let element of gameBox) {
        if (element.innerHTML === " ") {
            check = true;
            break;
        }

    }

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
                        return { win: "crosses", index: [k + j - 2, k + j - 1, k + j] }
                    } break;
                }

                case "zeros": {
                    zerosWin[n][i]++;
                    if (zerosWin[n][i] === 3) {
                        return { win: "zeros", index: [k + j - 2, k + j - 1, k + j] }
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
                        return { win: "crosses", index: [i + j - 6, i + j - 3, i + j] }
                    } break;
                }

                case "zeros": {
                    zerosWin[n][i]++;
                    if (zerosWin[n][i] === 3) {
                        //  console.log(zerosWin[3]);

                        return { win: "zeros", index: [i + j - 6, i + j - 3, i + j] }
                    } break;
                }

            }
        }

        //Перевірка по діагоналі

        if ((gameBox[0].firstChild.className === "crosses")
            && (gameBox[4].firstChild.className === "crosses")
            && (gameBox[8].firstChild.className === "crosses")) {

            return { win: "crosses", index: [0, 4, 8] }
        }


        if ((gameBox[0].firstChild.className === "zeros")
            && (gameBox[4].firstChild.className === "zeros")
            && (gameBox[8].firstChild.className === "zeros")) {

            return { win: "zeros", index: [0, 4, 8] }
        }



        if ((gameBox[2].firstChild.className === "crosses")
            && (gameBox[4].firstChild.className === "crosses")
            && (gameBox[6].firstChild.className === "crosses")) {

            return { win: "crosses", index: [2, 4, 6] }
        }


        if ((gameBox[2].firstChild.className === "zeros")
            && (gameBox[4].firstChild.className === "zeros")
            && (gameBox[6].firstChild.className === "zeros")) {

            return { win: "zeros", index: [2, 4, 6] }
        }










        //  console.log(crossesWin, zerosWin)



        // const compare = (gameBox[i].firstChild.className === "crosses") ?
        //     crossOutCrosses++ : crossOutZeros++;
    }

    // console.log(gameBox[0].firstChild.className);


}


container.addEventListener("click", (event) => {

    if ((event.target.innerHTML === " ")) {

        if (count % 2) {
            event.target.innerHTML = ('<img src="icons/zeros.png" class = "zeros">')
        }
        else { event.target.innerHTML = ('<img src="icons/crosses.png" class = "crosses">') }
        count++;
    }






    if (checkWin() !== undefined) {

        setInterval(() => {
            clear();

        }, 4000)
    }




}
    //console.log(event.target.innerHTML === " ");
);