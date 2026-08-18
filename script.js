// ALL MAYUKH PHOTOS

const photos = [
    "assets/mayukh1.png",
    "assets/mayukh2.jpeg",
    "assets/mayukh3.jpeg",
    "assets/mayukh4.jpeg",
    "assets/mayukh5.jpeg",
    "assets/mayukh6.jpeg",
    "assets/mayukh7.jpeg",
    "assets/mayukh8.jpeg"
];



// YAP EXCUSES

const excuses = [

    "I wasn't yapping. I was providing context nobody requested.",

    "That wasn't a tangent. That was necessary lore.",

    "I was getting to the point. The point moved.",

    "I only repeated it because the first explanation deserved a sequel.",

    "I wasn't interrupting. I was upgrading the conversation.",

    "The story needed context, and then the context needed context.",

    "I could have said it in one sentence, but that removes the cinematic experience.",

    "Silence was an option. I rejected it."

];



// MAYUKH LOGIC

const logic = [

    "STEP 1: Have idea. STEP 2: Defend idea confidently. STEP 3: Remember what idea was.",

    "Problem detected → confidence increased → problem still present.",

    "If plan works: genius. If plan fails: apparently that was not the real plan.",

    "Evidence is temporary. Confidence is forever.",

    "Say 'trust me' before anyone can ask for proof.",

    "Observe problem. Overthink problem. Create second problem. Explain both.",

    "Logic status: loading... loading... confidently complete."

];



// WARNINGS

const warnings = [

    "If he says 'bro listen,' clear your schedule.",

    "Do not ask 'why?' unless you have at least 20 minutes.",

    "A simple question may trigger a three-part documentary.",

    "If the sentence starts with 'basically,' it will not be basic.",

    "Subject may begin explaining something nobody mentioned.",

    "Do not challenge the confidence level. It regenerates.",

    "High probability of an unnecessary side story.",

    "Mayukh energy exceeds recommended classroom limits."

];



// PICK RANDOM ITEM

function randomItem(array) {

    const randomNumber =
        Math.floor(
            Math.random() * array.length
        );

    return array[randomNumber];

}



// RANDOM PHOTO BUTTON

document
    .getElementById("photoBtn")
    .addEventListener(
        "click",
        function () {

            const photo =
                document.getElementById("photo");

            photo.src =
                randomItem(photos);


            document
                .getElementById("output")
                .textContent =
                "PHOTO RETRIEVED: Analysts describe this as a certified Mayukh moment.";

        }
    );



// YAP EXCUSE BUTTON

document
    .getElementById("excuseBtn")
    .addEventListener(
        "click",
        function () {

            const excuse =
                randomItem(excuses);


            document
                .getElementById("output")
                .textContent =
                "YAP EXCUSE: " +
                excuse;

        }
    );



// MAYUKH LOGIC BUTTON

document
    .getElementById("logicBtn")
    .addEventListener(
        "click",
        function () {

            const logicLine =
                randomItem(logic);


            document
                .getElementById("output")
                .textContent =
                "LOGIC SIMULATION: " +
                logicLine;

        }
    );



// DAILY WARNING BUTTON

document
    .getElementById("warningBtn")
    .addEventListener(
        "click",
        function () {

            const warning =
                randomItem(warnings);


            document
                .getElementById("warning")
                .textContent =
                warning;

        }
    );
