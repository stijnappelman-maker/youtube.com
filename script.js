// ==========================================
// LOVE QUESTION WEBSITE - SCRIPT.JS
// FIXED VERSION
// ==========================================


// ELEMENTEN

const lovePercent = document.getElementById("lovePercent");
const meterFill = document.getElementById("meterFill");
const meterText = document.getElementById("meterText");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const successScreen = document.getElementById("successScreen");

const heartContainer = document.getElementById("heartContainer");



// ==========================================
// LOVE METER
// ==========================================


let love = 0;
let meterFinished = false;


const meterInterval = setInterval(() => {


    if(meterFinished) return;


    love++;


    if(love > 100){

        love = 100;

    }



    if(lovePercent){

        lovePercent.textContent =
        love + "%";

    }



    if(meterFill){

        meterFill.style.width =
        love + "%";

    }



    if(meterText){


        if(love < 25){

            meterText.textContent =
            "De liefde begint te groeien ❤️";

        }


        else if(love < 50){

            meterText.textContent =
            "Steeds meer liefde gevonden 💕";

        }


        else if(love < 75){

            meterText.textContent =
            "Wow, dit wordt serieus 🥰";

        }


        else if(love < 100){

            meterText.textContent =
            "Bijna maximaal ❤️";

        }

    }



    if(love === 100){


        meterFinished = true;


        clearInterval(meterInterval);



        if(meterText){

            meterText.textContent =
            "💥 Love Meter kapot! Te veel liefde 💖";

        }



        if(meterFill){

            meterFill.classList.add(
                "meterBroken"
            );


            setTimeout(()=>{

                meterFill.classList.add(
                    "broken"
                );

            },1000);

        }

    }


},1000);




// ==========================================
// JA KNOP
// ==========================================


let heartsStarted = false;


if(yesButton){


yesButton.addEventListener("click",()=>{


    if(successScreen){


        successScreen.style.display =
        "flex";


        successScreen.classList.add(
            "successAnimation"
        );


    }



    if(!heartsStarted){

        createHearts();

        heartsStarted = true;

    }



    startConfetti();



});


}





// ==========================================
// NEE KNOP
// ==========================================


let noClicks = 0;


if(noButton){


noButton.addEventListener("click",()=>{


    noClicks++;



    let yesScale =
    1 + (noClicks * 0.08);



    let noScale =
    1 - (noClicks * 0.05);



    if(noScale < 0.6){

        noScale = 0.6;

    }



    yesButton.style.transform =
    `scale(${yesScale})`;



    noButton.style.transform =
    `scale(${noScale})`;



});


}





// ==========================================
// HARTJES
// ==========================================


function createHearts(){



    setInterval(()=>{


        if(!heartContainer) return;



        const heart =
        document.createElement("div");



        heart.className =
        "heart";



        heart.textContent =
        "❤️";



        heart.style.left =
        Math.random()*100 + "%";



        heart.style.animationDuration =
        (3 + Math.random()*3) + "s";



        heartContainer.appendChild(
            heart
        );



        setTimeout(()=>{


            heart.remove();


        },7000);



    },500);



}





// ==========================================
// CONFETTI
// ==========================================


function startConfetti(){



    for(let i=0;i<80;i++){


        const confetti =
        document.createElement("div");



        confetti.textContent =
        "🎉";



        confetti.style.position =
        "fixed";



        confetti.style.left =
        Math.random()*100+"%";



        confetti.style.top =
        "-20px";



        confetti.style.fontSize =
        (15 + Math.random()*20)+"px";



        confetti.style.zIndex =
        "9999";



        confetti.style.animation =
        "fall 3s linear forwards";



        document.body.appendChild(
            confetti
        );



        setTimeout(()=>{


            confetti.remove();


        },3000);



    }


}
