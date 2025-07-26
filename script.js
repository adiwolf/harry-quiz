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
  },
  {
    question: "איך אתה מרגיש כלפי יצורים קסומים?",
    answers: [
      { text: "אם יש להם פרווה, כנפיים או ניבים – אני מאוהב!", points: ["האגריד"] },
      { text: "סקרן/ית, אבל מעדיף לצפות מהצד", points: ["הרמיוני", "הארי"] },
      { text: "רק אם הם לא נושכים... או מריירים", points: ["רון"] },
      { text: "שיישארו מחוץ לבית שלי!", points: ["ורנון", "סנייפ"] }
    ]
  },
  {
    question: "מה אתה הכי אוהב לעשות כשאין לך שיעורי בית?",
    answers: [
      { text: "לקרוא ספר בן 1,200 עמודים על קסמי עתיקות", points: ["הרמיוני", "מקגונגל"] },
      { text: "קווידיץ', אוכל, עוד קצת קווידיץ'", points: ["הארי", "רון"] },
      { text: "לטייל עם עכביש בגודל סוס", points: ["האגריד"] },
      { text: "לתכנן איך להשתלט על העולם או לפחות על משרד הקסמים", points: ["וולדמורט"] }
    ]
  }
];

const characterGrid = {
  "הארי": [0, 0],
  "הרמיוני": [0, 1],
  "רון": [0, 2],
  "סנייפ": [1, 0],
  "דמבלדור": [1, 1],
  "מקגונגל": [1, 2],
  "וולדמורט": [2, 0],
  "ורנון": [2, 1],
  "האגריד": [2, 2]
};

let currentQuestion = 0;
let scores = {};

function fadeOut(element, callback) {
  element.style.opacity = 1;
  const fade = () => {
    if ((element.style.opacity -= 0.1) < 0) {
      element.style.display = "none";
      if (callback) callback();
    } else {
      requestAnimationFrame(fade);
    }
  };
  fade();
}

function fadeIn(element) {
  element.style.opacity = 0;
  element.style.display = "";
  const fade = () => {
    let val = parseFloat(element.style.opacity);
    if (!((val += 0.1) > 1)) {
      element.style.opacity = val;
      requestAnimationFrame(fade);
    }
  };
  fade();
}

function showQuestion() {
  const q = questions[currentQuestion];
  const questionBox = document.getElementById("question-box");
  const answersBox = document.getElementById("answers-box");

  fadeOut(questionBox, () => {
    questionBox.textContent = q.question;
    fadeIn(questionBox);
  });

  fadeOut(answersBox, () => {
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
    fadeIn(answersBox);
  });
}

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  const resultBox = document.getElementById("result-container");
  resultBox.style.display = "block";
  const sorted = Object.entries(scores).sort((a,b) => b[1] - a[1]);
  const character = sorted[0][0];
  const descriptions = {
    "הארי": "יש לך לב זהב, נטייה להיכנס לצרות, ויכולת מופלאה לשרוד בלי להכין שיעורים.",
    "הרמיוני": "יודע/ת לקרוא יותר מהר ממה שאנשים נושמים. אין לך סבלנות לטיפשות.",
    "רון": "לב גדול, תיאבון ענק, והומור שלא נגמר. אתה החבר שכולם צריכים.",
    "סנייפ": "מסתורי, חד, עם הבעה קבועה של ״די כבר״. וגם די צודק.",
    "דמבלדור": "פילוסוף עם חיבה לממתקי לימון. תמיד צעד אחד לפני כולם.",
    "מקגונגל": "קשוח/ה מבחוץ, רך/ה מבפנים. אל תתעסקו איתך.",
    "וולדמורט": "מוח מבריק, אפס סבלנות לחולשות. אה... ואין לך אף.",
    "ורנון": "אתה פשוט רוצה שקט, חדשות, ובלי ינשופים בבית.",
    "האגריד": "ענק/ית בגוף ובלב. אוהב/ת חיות משונות ואנשים טובים."
  };
  const [i, j] = characterGrid[character];
  resultBox.innerHTML = `<h2>הדמות שלך היא: ${character}</h2>
  <div class="character-sprite" id="character-image" style="
    display: inline-block;
    width: 66.67px;
    height: 100px;
    overflow: hidden;
  ">
    <img src="images/A_set_of_watercolor-style_portraits_on_textured_wa.png" style="
      width: 200px; 
      height: 300px; 
      display: block;
      clip-path: inset(
        ${i * 100}px           /* top: row * cell_height */
        ${(2-j) * 66.67}px     /* right: (2-col) * cell_width */
        ${(2-i) * 100}px       /* bottom: (2-row) * cell_height */
        ${j * 66.67}px         /* left: col * cell_width */
      );
    ">
  </div>
  <p>${descriptions[character]}</p>`;
}

document.getElementById("next-button").style.display = "none";
showQuestion();