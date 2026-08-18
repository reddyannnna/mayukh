// ALL MAYUKH PHOTOS

const photos = [
    "mayukh1.png",
    "mayukh2(1).jpeg",
    "mayukh3(1).jpeg",
    "mayukh4(1).jpeg",
    "mayukh5(1).jpeg",
    "mayukh6(1).jpeg",
    "mayukh7(1).jpeg",
    "mayukh8(1).jpeg"
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
    "Silence was an option. I rejected it.",
    "I am the best obv iam busy"
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

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

document.getElementById("photoBtn").addEventListener("click", function () {
    document.getElementById("photo").src = randomItem(photos);
    document.getElementById("output").textContent =
        "PHOTO RETRIEVED: Analysts describe this as a certified Mayukh moment.";
});

document.getElementById("excuseBtn").addEventListener("click", function () {
    document.getElementById("output").textContent =
        "YAP EXCUSE: " + randomItem(excuses);
});

document.getElementById("logicBtn").addEventListener("click", function () {
    document.getElementById("output").textContent =
        "LOGIC SIMULATION: " + randomItem(logic);
});


document
    .getElementById("copyBtn")
    .addEventListener("click", function () {

        const text =
            document.getElementById("output").textContent;

        navigator.clipboard.writeText(text);

        document.getElementById("copyBtn").textContent =
            "COPIED!";

        setTimeout(function () {
            document.getElementById("copyBtn").textContent =
                "COPY RESULT";
        }, 1500);

    });
const threatLevels = [
    "Harmless too good to be true",
    "Suspicious",
    "questionable but it is happening",
    "awakning Detected",
    "rgb monster",
    "metal bottle monster"
];

document
    .getElementById("threatBtn")
    .addEventListener("click", function () {

        const randomThreat =
            threatLevels[
                Math.floor(Math.random() * threatLevels.length)
            ];

        document
            .getElementById("threatText")
            .textContent =
            "Currently: " + randomThreat;

    });


document.getElementById("warningBtn").addEventListener("click", function () {
    document.getElementById("warning").textContent = randomItem(warnings);
});
