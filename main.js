
const quizForm = document.getElementById('quiz-form');
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit-button');

const questions = [
    {
        text: 'Câu hỏi 1: 2 + 2 = 4?',
        type: 'trueFalse',
        correctAnswer: 'true'
    },
    {
        text: 'Câu hỏi 2: 3 x 4 = 12?',
        type: 'trueFalse',
        correctAnswer: 'true'
    },
    {
        text: 'Câu hỏi 3: 7 - 3 = 5?',
        type: 'trueFalse',
        correctAnswer: 'false'
    },
    {
        text: 'Câu hỏi 4: 10 / 2 = 5?',
        type: 'trueFalse',
        correctAnswer: 'true'
    },
    {
        text: 'Câu hỏi 5: 8 + 2 = 10?',
        type: 'trueFalse',
        correctAnswer: 'true'
    },
    {
        text: 'Câu hỏi 6: 6 x 5 = 30?',
        type: 'trueFalse',
        correctAnswer: 'true'
    },
    {
        text: 'Câu hỏi 7: 12 - 8 = 4?',
        type: 'trueFalse',
        correctAnswer: 'true'
    },
    {
        text: 'Câu hỏi 8: 9 / 3 = 2?',
        type: 'trueFalse',
        correctAnswer: 'false'
    },
    {
        text: 'Câu hỏi 9: 3 + 5 = 7?',
        type: 'trueFalse',
        correctAnswer: 'false'
    },
    {
        text: 'Câu hỏi 10: 15 / 3 = 5?',
        type: 'trueFalse',
        correctAnswer: 'true'
    },
    {
        text: 'Câu hỏi 11: What is the English equivalent of "ngon"?',
        type: 'multipleChoice',
        choices: ['Beautiful', 'Delicious', 'Ugly', 'Expensive'],
        correctAnswer: 'Delicious'
    },
    {
        text: 'Câu hỏi 12: Which word means "happiness" in English?',
        type: 'multipleChoice',
        choices: ['Sadness', 'Joy', 'Anger', 'Fear'],
        correctAnswer: 'Joy'
    },
    {
        text: 'Câu hỏi 13: What does "hiệu quả" mean in English?',
        type: 'multipleChoice',
        choices: ['Slow', 'Hardworking', 'Ineffective', 'Productive'],
        correctAnswer: 'Productive'
    },
    {
        text: 'Câu hỏi 14: Which word means "to make something clean" in English?',
        type: 'multipleChoice',
        choices: ['Tidy', 'Dirty', 'Messy', 'Clean'],
        correctAnswer: 'Clean'
    },
    {
        text: 'Câu hỏi 15: What is the opposite of "hiện đại" in English?',
        type: 'multipleChoice',
        choices: ['Ancient', 'New', 'Advanced', 'Contemporary'],
        correctAnswer: 'Ancient'
    },
    {
        text: 'Câu hỏi 16: Which word means "a person who designs buildings" in English?',
        type: 'multipleChoice',
        choices: ['Architect', 'Engineer', 'Carpenter', 'Mason'],
        correctAnswer: 'Architect'
    },
    {
        text: 'Câu hỏi 17: What is the English word for "thành phố" ?',
        type: 'multipleChoice',
        choices: ['Town', 'Village', 'City', 'Country'],
        correctAnswer: 'City'
    },
    {
        text: 'Câu hỏi 18: Which word means "to arrive at a destination" in English?',
        type: 'multipleChoice',
        choices: ['Depart', 'Exit', 'Journey', 'Arrive'],
        correctAnswer: 'Arrive'
    },
    {
        text: 'Câu hỏi 19: The English word for "máy tính" is?',
        type: 'multipleChoice',
        choices: ['Television', 'Computer', 'Telephone', 'Refrigerator'],
        correctAnswer: 'Computer'
    },
    {
        text: 'Câu hỏi 20: Which word means "to buy something" in English?',
        type: 'multipleChoice',
        choices: ['Sell', 'Purchase', 'Trade', 'Bargain'],
        correctAnswer: 'Purchase'
    },
    {
        text: 'Câu hỏi 21: Chọn các nguyên tố trong bảng tuần hoàn:',
        type: 'multipleAnswer',
        choices: ['Oxy', 'Canxi', 'Hidro', 'Nitơ'],
        correctAnswer: ['Oxy', 'Canxi', 'Hidro']
    },
    {
        text: 'Câu hỏi 22: Chọn các mùa trong năm:',
        type: 'multipleAnswer',
        choices: ['Mùa hè', 'Mùa chim hót', 'Mùa đông', 'Mùa hoa'],
        correctAnswer: ['Mùa hè', 'Mùa đông']
    },
    {
        text: 'Câu hỏi 23: Chọn các màu sắc cơ bản:',
        type: 'multipleAnswer',
        choices: ['Đỏ', 'Xanh lơ', 'Vàng', 'Hồng'],
        correctAnswer: ['Đỏ', 'Xanh lơ', 'Vàng']
    },
    {
        text: 'Câu hỏi 24: Chọn các quốc gia ở châu Âu:',
        type: 'multipleAnswer',
        choices: ['Mỹ', 'Pháp', 'Anh', 'Nhật Bản'],
        correctAnswer: ['Pháp', 'Anh']
    },
    {
        text: 'Câu hỏi 25: Chọn các loại động vật:',
        type: 'multipleAnswer',
        choices: ['Cây', 'Chó', 'Mèo', 'Gấu'],
        correctAnswer: ['Chó', 'Mèo', 'Gấu']
    },
    {
        text: 'Câu hỏi 26: Chọn các chữ số chẵn:',
        type: 'multipleAnswer',
        choices: ['1', '2', '3', '4'],
        correctAnswer: ['2', '4']
    },
    {
        text: 'Câu hỏi 27: Chọn các loại hoa:',
        type: 'multipleAnswer',
        choices: ['Cỏ', 'Hoa hồng', 'Hoa cúc', 'Hoa dại'],
        correctAnswer: ['Hoa hồng', 'Hoa cúc']
    },
    {
        text: 'Câu hỏi 28: Chọn các nước nằm ở châu Phi:',
        type: 'multipleAnswer',
        choices: ['Hàn Quốc', 'Ai Cập', 'Nga', 'Ghana'],
        correctAnswer: ['Ai Cập', 'Ghana']
    },
    {
        text: 'Câu hỏi 29: Chọn các loại trái cây:',
        type: 'multipleAnswer',
        choices: ['Cà chua', 'Dưa hấu', 'Bưởi', 'Cam'],
        correctAnswer: ['Dưa hấu', 'Bưởi', 'Cam']
    },
    {
        text: 'Câu hỏi 30: Chọn các môn học trong trường học:',
        type: 'multipleAnswer',
        choices: ['Nấu ăn', 'Toán', 'Lịch sử', 'Hát'],
        correctAnswer: ['Toán', 'Lịch sử']
    },
    {
        text: 'Câu hỏi 31: Viết ra tên hoa hồng bằng tiếng Anh:',
        type: 'essay',
        correctAnswer: 'Rose'
    },
    {
        text: 'Câu hỏi 32: Viết "mèo" bằng tiếng Anh:',
        type: 'essay',
        correctAnswer: 'Cat'
    },
    {
        text: 'Câu hỏi 33: Viết ra tên quả "Dưa hấu" tiếng Anh:',
        type: 'essay',
        correctAnswer: 'Watermelon'
    },
    {
        text: 'Câu hỏi 34: Viết ra tên nước "Pháp" bằng tiếng Anh:',
        type: 'essay',
        correctAnswer: 'France'
    },
    {
        text: 'Câu hỏi 35: Viết ra tên của mùa Mùa hè bằng tiếng Anh:',
        type: 'essay',
        correctAnswer: 'Summer'
    },
    {
        text: 'Câu hỏi 36: Viết ra tên của Thứ Sáu bằng tiếng Anh:',
        type: 'essay',
        correctAnswer: 'Friday'
    },
    {
        text: 'Câu hỏi 37: Viết ra tên Bánh mì bằng tiếng Anh:',
        type: 'essay',
        correctAnswer: 'Bread'
    },
    {
        text: 'Câu hỏi 38: Viết ra "Thành phố" bằng tiếng Anh:',
        type: 'essay',
        correctAnswer: 'City'
    },
    {
        text: 'Câu hỏi 39: Viết ra "Môn học" bằng tiếng Anh:',
        type: 'essay',
        correctAnswer: 'Subject'
    },
    {
        text: 'Câu hỏi 40: Viết ra "Nước" bằng tiếng Anh:',
        type: 'essay',
        correctAnswer: 'Water'
    }
];

let score = 0;

quizForm.addEventListener('submit', function (event) {
    event.preventDefault();
    createQuiz();
    quizForm.style.display = 'none';
    quizContainer.style.display = 'block';
});

function createQuiz() {
    quizContainer.innerHTML = '';
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p>${question.text}</p>
        `;
        if (question.type === 'trueFalse') {
            questionElement.innerHTML += `
                <label><input type="radio" name="question${index}" value="true"> Đúng</label>
                <label><input type="radio" name="question${index}" value="false"> Sai</label>
            `;
        } else if (question.type === 'multipleChoice') {
            question.choices.forEach(choice => {
                questionElement.innerHTML += `
                    <label><input type="radio" name="question${index}" value="${choice}"> ${choice}</label>
                `;
            });
        } else if (question.type === 'multipleAnswer') {
            question.choices.forEach(choice => {
                questionElement.innerHTML += `
                    <label><input type="checkbox" name="question${index}[]" value="${choice}"> ${choice}</label>
                `;
            });
        } else if (question.type === 'essay') {
            questionElement.innerHTML += `
                <textarea name="question${index}" rows="4" cols="50" placeholder="Viết câu trả lời của bạn ở đây..."></textarea>
            `;
        }
        quizContainer.appendChild(questionElement);
    });

    const submitButton = document.createElement('button');
    submitButton.id = 'submit-button';
    submitButton.textContent = 'Nộp Bài';
    quizContainer.appendChild(submitButton);

    submitButton.addEventListener('click', function () {
        showResult();
    });
}

function calculateScore() {
    let score = 0;
    questions.forEach((question, index) => {
        if (checkAnswer(index)) {
            score++;
        }
    });
    return score;
}

function checkAnswer(questionIndex) {
    const question = questions[questionIndex];
    const inputElements = document.getElementsByName(`question${questionIndex}`);
    let userAnswer;
    let userMultipleAnswer = [];

    if (question.type === 'trueFalse') {
        userAnswer = inputElements[0].checked ? inputElements[0].value : inputElements[1].value;
    } else if (question.type === 'multipleChoice') {
        const checkedInput = Array.from(inputElements).find(input => input.checked);
        userAnswer = checkedInput ? checkedInput.value : null;
    } else if (question.type === 'multipleAnswer') {
        inputElements.forEach(input => {
            if (input.checked) {
                userMultipleAnswer.push(input.value);
            }
        });
        userAnswer = userMultipleAnswer;
    } else if (question.type === 'essay') {
        userAnswer = inputElements[0].value.trim().toUpperCase();
    } else {
        console.error("Invalid question type.");
        return false;
    }

    const correctAnswer = question.correctAnswer;

    if (Array.isArray(userAnswer) && Array.isArray(correctAnswer)) {
        if (JSON.stringify(userAnswer) === JSON.stringify(correctAnswer)) {
            return true;
        }
    } else if (Array.isArray(userMultipleAnswer) && Array.isArray(correctAnswer)) {
        if (JSON.stringify(userMultipleAnswer) === JSON.stringify(correctAnswer)) {
            return true;
        }
    } else {
        if (userAnswer === correctAnswer) {
            return true;
        }
    }

    return false;
}


function getUserAnswer(questionIndex) {
    const inputElements = document.getElementsByName(`question${questionIndex}`);
    const userAnswers = [];
    for (let i = 0; i < inputElements.length; i++) { // Sử dụng vòng lặp for thay vì phương thức forEach
        const input = inputElements[i];
        if (input.checked) {
            userAnswers.push(input.value);
        }
    }
    return userAnswers;
}

function showResult() {
    const userScore = calculateScore(); // Lưu điểm số tính được
    quizContainer.innerHTML = `<h2>Điểm số của bạn là: ${userScore}/${questions.length}</h2>`;
}