$(document).ready(function () {
    var timer;
    var seconds = 60;   
     var correctAnswers = 0;


    timer = setInterval(decreaseSeconds, 1000);

    $("#submit").on("click", function () {
        console.log("hi");
        checkAns()
    })

    function decreaseSeconds() {

        if (seconds === 0) {
            $("#timer").html("<h3>Your time is up!</h3>")
            seconds == 60;
            checkAns();
            clearInterval(timer);
            alert(" TIME UP! Your score is " + correctAnswers + " !");

        } else {
            seconds = seconds - 1;
            $("#timer").html("<h3> Your time remaining is " + seconds + " seconds!<h3");

        }

    }





    // check results("question1 etc")
    $("#submit")
    function checkResults(object) {
        var val = document.getElementByName(object).value;
        // console.log(val);
    }

    var value = [

    ]

    var trivQuestions = [
        {
            question: "what is the first letter of the english alphbit?",
            answers: [
                {
                    "answer": "A",
                    "isCorrect": true
                },
                {
                    "answer": "B",
                    "isCorrect": false
                },
                {
                    "answer": "C",
                    "isCorrect": false
                },
                {
                    "answer": "D",
                    "isCorrect": false
                }

            ]

        },
        {
            question: "Who is mans best friend?",
            answers: [
                {
                    "answer": "Cat",
                    "isCorrect": false
                },
                {
                    "answer": "Dog",
                    "isCorrect": true
                },
                {
                    "answer": "Penguin",
                    "isCorrect": false
                },
                {
                    "answer": "Cow",
                    "isCorrect": false
                }

            ]
        },

        {
            question: "How drive many wheel drive is a subaru wrx?",
            answers: [
                {
                    "answer": "4WD",
                    "isCorrect": false
                },
                {
                    "answer": "AWD",
                    "isCorrect": true
                },
                {
                    "answer": "FWD",
                    "isCorrect": false
                },
                {
                    "answer": "RWD",
                    "isCorrect": false
                }

            ]

        },
        {
            question: "why is coding so hard?",
            answers: [
                {
                    "answer": "coding is a solid object",
                    "isCorrect": false
                },
                {
                    "answer": "uh",
                    "isCorrect": true
                },
                {
                    "answer": "idk",
                    "isCorrect": false
                },
                {
                    "answer": "bruh",
                    "isCorrect": false
                }

            ]

        },
        {
            question: "Is pimping easy",
            answers: [
                {
                    "answer": "yes",
                    "isCorrect": false
                },
                {
                    "answer": "no",
                    "isCorrect": true
                },
                {
                    "answer": "duh",
                    "isCorrect": false
                },
                {
                    "answer": "sometimes",
                    "isCorrect": false
                }

            ]

        },
        {
            question: "What direction does the sun set",
            answers: [
                {
                    "answer": "north",
                    "isCorrect": false
                },
                {
                    "answer": "west",
                    "isCorrect": true
                },
                {
                    "answer": "east",
                    "isCorrect": false
                },
                {
                    "answer": "south",
                    "isCorrect": false
                }

            ]

        },
        {
            question: "what area of the world are green cheek conure found.",
            answers: [
                {
                    "answer": "Africa",
                    "isCorrect": false
                },
                {
                    "answer": "SouthAmerica",
                    "isCorrect": true
                },
                {
                    "answer": "Europe",
                    "isCorrect": false
                },
                {
                    "answer": "Asia",
                    "isCorrect": false
                }

            ]

        },
        {
            question: "What is the California state flower.",
            answers: [
                {
                    "answer": "Yarro",
                    "isCorrect": false
                },
                {
                    "answer": "Poppy",
                    "isCorrect": true
                },
                {
                    "answer": "Rose",
                    "isCorrect": false
                },
                {
                    "answer": "lilac",
                    "isCorrect": false
                }

            ]

        },
        {
            question: "How many inches in 2 ft.",
            answers: [
                {
                    "answer": "2",
                    "isCorrect": false
                },
                {
                    "answer": "24",
                    "isCorrect": true
                },
                {
                    "answer": "42",
                    "isCorrect": false
                },
                {
                    "answer": "12",
                    "isCorrect": false
                }

            ]

        },
        {
            question: "Where does rain come from?",
            answers: [
                {
                    "answer": "Sky",
                    "isCorrect": false
                },
                {
                    "answer": "Clouds",
                    "isCorrect": true
                },
                {
                    "answer": "Airplains",
                    "isCorrect": false
                },
                {
                    "answer": "Sun",
                    "isCorrect": false
                }

            ]

        }

    ]


    for (var i = 0; i < trivQuestions.length; i++) {
        // console.log(trivQuestions[i].question);
        $("#questions").append("<h1>" + trivQuestions[i].question + "</h1>");
        for (var j = 0; j < trivQuestions[i].answers.length; j++) {
            // console.log(trivQuestions[i].answers[j].answer)
            $("#questions").append("<input type='radio' name=" + i + " value=" + trivQuestions[i].answers[j].answer + ">" + trivQuestions[i].answers[j].answer + "<br>");


        }

    }


    function checkAns() {
        for (var i = 0; i < trivQuestions.length; i++) {


            // console.log(trivQuestions[i])
            for (var j = 0; j < trivQuestions[i].answers.length; j++) {
                console.log('QUESTIONS', trivQuestions.length);
                if ($("input[name=" + i + "]:checked").val() == trivQuestions[i].answers[j].answer) {
                    console.log(trivQuestions[i].answers[j])
                    correctAnswers++;
                    console.log(correctAnswers);

            
                }
            }
        };
        if(seconds < 60){
            alert(' You got ' + correctAnswers + ' right!');

        }
        
    };

})