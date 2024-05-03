const questions = [
    {
        question: "Which of the following is nat a Java features ?",
        answers: [
            { option: "Dynamic", correct: false },
            { option: "Architecture Neutral", correct: false },
            { option: "Use of pointer", correct: true },
            { option: "Object-oriented", correct: false }
        ]
    },
    {
        question: "The \u0021 article referred to as a ?",
        answers: [
            { option: "Octal escape", correct: false },
            { option: "Hexadicimal", correct: false },
            { option: "Line feed", correct: false },
            { option: "Unicode escape sequence", correct: true }
        ]
    },
    {
        question: "____ is used to find and fix bugs in the java programs. ",
        answers: [
            { option: "JVM", correct: false },
            { option: "JDB", correct: true },
            { option: "JRE", correct: false },
            { option: "JDK", correct: false }
        ]
    },
    {
        question: "What is the return type of the hashCode() method in the Object class ?",
        answers: [
            { option: "Object", correct: false },
            { option: "Long", correct: false },
            { option: "Int", correct: true },
            { option: "Void", correct: false }
        ]
    }
]

const questionid = document.getElementById("question")
const answerbtn = document.getElementById("answer-button")
const nextbtn = document.getElementById("next-btn")

let currentquestionindex = 0;

let score = 0;

function startquiz() {
    currentquestionindex = 0;
    score = 0;
    nextbtn.style.display = "none"; // Hide next button initially
    showquestion();
}

function showquestion() {
    console.log("current idnex",currentquestionindex)

    let currentquestion = questions[currentquestionindex]      // access question array
    let question_no = currentquestionindex + 1;

    questionid.innerHTML = `${question_no}.  ${currentquestion.question} `;
    let ansHtml = '';
    currentquestion.answers.forEach(ans => {
        ansHtml += `<button class="btn end" correct=${ans.correct} onclick="selected(this)">${ans.option}</button>`
        answerbtn.innerHTML = ansHtml;

    }
    )
    nextbtn.innerHTML = "Next"
}

function selected(e) {
    const correct = e.getAttribute("correct")
    let res = document.getElementsByClassName("btn")


    if (correct == "true") {
        e.classList.add("correct")
        // console.log("button correct");
        score++;

    }
    else {
        e.classList.add('incorrect')
        Object.values(res).forEach(btn1 => {
            if (btn1.getAttribute("correct") == "true") btn1.classList.add("correct")
            // btn1.removeAttribute("onclick")

        })
    }
    Object.values(res).forEach(btn1 => {
        // btn1.style.cursor = "no-drop";
        btn1.removeAttribute("onclick")
        // btn1.removeAttribute("id")
        btn1.classList.remove("end")

    })

    nextbtn.style.display = "block";

}

nextbtn.addEventListener('click', nextquestion);


function nextquestion() {
    currentquestionindex++;
    
    if (currentquestionindex < questions.length) {
        showquestion();
        nextbtn.style.display = "none";
    }else if(currentquestionindex >questions.length) 
    {
        // nextbtn.innerHTML = "next"
        currentquestionindex = 0;
        score = 0;
        showquestion();
    }
    else {

        questionid.innerHTML = `You Scored ${score} out of ${questions.length} !`;
        nextbtn.innerHTML = "Play Again"

        answerbtn.innerHTML = " ";

        // nextbtn.addEventListener('click', () => {              // Add the event listener to start the quiz again

        //     startquiz()
        //     console.log(currentquestionindex);
        // });
    }

}

startquiz();


