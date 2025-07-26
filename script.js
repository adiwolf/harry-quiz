const questions = [
  {
    question: "מה המוטו שלך בחיים?",
    answers: [
      { text: "ידע הוא כוח", points: ["הרמיוני", "דמבלדור"] },
      { text: "נאמנות לפני הכל", points: ["רון"] },
      { text: "המטרה מקדשת את האמצעים", points: ["וולדמורט", "סנייפ"] },
      { text: "תן לי שקט, אני רק רוצה חיים נורמליים", points: ["ורנון"] }
    ]
  },
  {
    question: "איך אתה מגיב כשיש בעיה?",
    answers: [
      { text: "מחפש פתרון הגיוני ומדויק", points: ["הרמיוני", "מקגונגל"] },
      { text: "קופץ לעזרה גם בלי לחשוב יותר מדי", points: ["רון", "הארי"] },
      { text: "בוחן מי אשם ומוודא שיקבל את עונשו", points: ["סנייפ", "וולדמורט"] },
      { text: "מתעלם ומקווה שזה ייעלם", points: ["ורנון"] }
    ]
  },
  {
    question: "מה התחום החזק שלך?",
    answers: [
      { text: "קסמים מתקדמים ועבודה שיטתית", points: ["מקגונגל", "הרמיוני"] },
      { text: "חברות ונאמנות", points: ["הארי", "רון"] },
      { text: "אסטרטגיה וכוח", points: ["סנייפ", "וולדמורט"] },
      { text: "ניהול ואכיפה", points: ["ורנון"] }
    ]
  },
  {
    question: "איך החברים שלך היו מתארים אותך?",
    answers: [
      { text: "חכם/ה ונחושה", points: ["הרמיוני", "מקגונגל"] },
      { text: "מצחיק/ה וטוב לב", points: ["רון", "הארי"] },
      { text: "כריזמטי/ת אך מעט מאיים/ת", points: ["וולדמורט", "סנייפ"] },
      { text: "נרגן/ית ולא סובל שטויות", points: ["ורנון"] }
    ]
  },
  {
    question: "מה הכי חשוב לך?",
    answers: [
      { text: "להוכיח את עצמי", points: ["הארי", "הרמיוני"] },
      { text: "החברים והמשפחה", points: ["רון", "הארי"] },
      { text: "שליטה והשפעה", points: ["וולדמורט"] },
      { text: "סדר ומשמעת", points: ["ורנון"] }
    ]
  },
  {
    question: "באיזו בית היית רוצה להיות?",
    answers: [
      { text: "רייבנקלו או גריפינדור", points: ["הרמיוני", "דמבלדור"] },
      { text: "גריפינדור כמובן!", points: ["הארי", "רון"] },
      { text: "סלית'רין", points: ["וולדמורט", "סנייפ"] },
      { text: "לא רוצה להיות בשום בית בכלל", points: ["ורנון"] }
    ]
  },
  {
    question: "מה היית עושה אם מישהו מעליב חבר שלך?",
    answers: [
      { text: "שוקל תגובה אינטלקטואלית וחותכת", points: ["הרמיוני", "מקגונגל"] },
      { text: "מתערב מיד, גם אם זה ייגמר בריב", points: ["הארי", "רון"] },
      { text: "מתכנן נקמה קרה", points: ["סנייפ", "וולדמורט"] },
      { text: "אומר לו שזה לא ענייני", points: ["ורנון"] }
    ]
  },
  {
    question: "מה החפץ הקסום שאתה הכי רוצה?",
    answers: [
      { text: "ספר קסמים עתיק ונדיר", points: ["הרמיוני", "דמבלדור"] },
      { text: "מטאטא מרוץ", points: ["הארי", "רון"] },
      { text: "שרביט עוצמתי ובלתי מנוצח", points: ["וולדמורט"] },
      { text: "שום דבר קסום — רק שלט לטלוויזיה", points: ["ורנון"] }
    ]
  }
];

let currentQuestion = 0;
let scores = {};

function showQuestion() {
  const q = questions[currentQuestion];
  const questionBox = document.getElementById("question-box");
  const answersBox = document.getElementById("answers-box");
  questionBox.textContent = q.question;
  answersBox.innerHTML = "";
  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.onclick = () => {
      answer.points.forEach(p => scores[p] = (scores[p] || 0) + 1);
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    answersBox.appendChild(btn);
  });
}

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  const resultBox = document.getElementById("result-container");
  resultBox.style.display = "block";
  const sorted = Object.entries(scores).sort((a,b) => b[1] - a[1]);
  const character = sorted[0][0];
  resultBox.innerHTML = `<h2>הדמות שלך היא: ${character}</h2><img src="images/${character.toLowerCase()}.jpg" width="300"/><p>תיאור בקרוב...</p>`;
}

document.getElementById("next-button").style.display = "none";
showQuestion();