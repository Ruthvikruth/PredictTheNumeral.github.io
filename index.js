        var numbers = [1,2,3,4,5,6,7,8,9,10];
        let count = 0,prev;
        let hints = 0,score=0,temp_scores = [];
        let temp;
        let questions = ["Everyone wants me","Atomic number of Helium","Number of primary colors","I have the same number of letters as my name","Panchatantra","August used to be this month number in ancient Roman calender","Number of members in BTS band","My atomic number's chemical element means a lot to you as a human","Standard start time for a work day","I am a combination of True and False"];
        let hint1 = ["I am unique","The first prime number","A triad","The first positive composite number","Olympic Rings","Highest number on a dice","VIBGYOR","I am a flipped infinity","Actual number of planets in solar system","Last number card in cards"];

        function random_generator()
        {
            hints = 0;
            temp_score = 10;
            if(count > 0)
            {
                delete numbers[prev];
                delete questions[prev];
                delete hint1[prev];
                numbers = numbers.filter(filtering);
                questions = questions.filter(filtering);
                hint1 = hint1.filter(filtering);
            }
            if(count == 5)
            {
                let x = document.getElementById("question");
                let test = document.getElementById("submitclick");
                x.innerHTML = "Thank You For Playing!!<br><br>Here's your total score!<br><br><span id='score'>"+score+"</span>";
                x.innerHTML = x.innerHTML + "<br><br><span>Scores for Individual Questions:</span>";
                for(let i = 0 ; i < 5 ; i++)
                {
                    if(temp_scores[i] == undefined)
                        temp_scores[i] = 0;
                    x.innerHTML = x.innerHTML + "<br><br><span>Question "+ (i + 1) + " = " + temp_scores[i] +"</span>";
                }
                test.value = "Restart";
                count++;
            }
            else if(count == 6)
            {
                window.location.reload();
            }
            else
            {
                let x = document.getElementById("question");
                let test = document.getElementById("submitclick");
                let demon = document.getElementById("demon");
                demon.innerHTML = "";
                test.value = "Next";
                temp = Math.floor(Math.random() * numbers.length);
                x.innerHTML = "<br>Question: " + questions[temp];
                x.innerHTML = x.innerHTML + "<br><br>Enter your answer here: <input type='number' id='answer'>" + "<br><br><span id='HintsDisplay'></span>" + "<br><br><button id='hint' onclick='generate_hints()'>Get a Hint</button>" + "<br><br><button id='hint' onclick='checker()'>Submit</button>";
                count++;
            }
            prev = temp;
        }

        function generate_hints()
        {
            let hint_ques = document.getElementById("HintsDisplay");
            if(hints == 0)
            {
                hint_ques.innerHTML = "Hint: "+hint1[temp];
                temp_score = 5;
                hints++;
            }
            else if(hints == 1)
            {
                hint_ques.innerHTML = "Answer is "+ numbers[temp];
                hints++;
                temp_score = 0;
            }
        }

        function checker()
        {
            let ans = document.getElementById('answer').value;
            if(Number(ans) == numbers[temp])
            {
                let x = document.getElementById('HintsDisplay');
                x.innerHTML = "<span style='color: green'>Right Answer ^_^</span>";
                score += temp_score;
            }
            else
            {
                let x = document.getElementById('HintsDisplay');
                x.innerHTML = "<span>Wrong Answer :(</span>";
            }
            temp_scores = temp_scores.concat(temp_score);
        }

        function filtering(x)
        {
            return x != undefined;
        }
