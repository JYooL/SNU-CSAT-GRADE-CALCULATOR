function calculateScore() {
    const korean = parseFloat(document.getElementById('korean').value);
    const math = parseFloat(document.getElementById('math').value);
    const science1 = parseFloat(document.getElementById('science1').value);
    const science2 = parseFloat(document.getElementById('science2').value);
    const english_grade = parseInt(document.getElementById('english_grade').value);
    const history_grade = parseInt(document.getElementById('history_grade').value);
    const science_combination = document.getElementById('science_combination').value;

    // 표준점수 반영 비율
    const korean_weight = 1.0;
    const math_weight = 1.2;
    const science_weight = 0.8;

    // 영어 감점 계산
    let english_penalty;
    if (english_grade === 1) {
        english_penalty = 0;
    } else {
        english_penalty = 0.5 + (english_grade - 2) * 2;
    }

    // 한국사 감점 계산
    let history_penalty;
    if (history_grade <= 3) {
        history_penalty = 0;
    } else {
        history_penalty = (history_grade - 3) * 0.4;
    }

    // 과학탐구 가산점 계산
    let science_bonus;
    if (science_combination === "I+I") {
        science_bonus = 0;
    } else if (science_combination === "I+II") {
        science_bonus = 3;
    } else if (science_combination === "II+II") {
        science_bonus = 5;
    } else {
        alert("올바른 과학탐구 조합을 선택하세요.");
        return;
    }

    // 최종 점수 계산
    const final_score = (korean * korean_weight +
                        math * math_weight +
                        (science1 + science2) * science_weight -
                        english_penalty -
                        history_penalty +
                        science_bonus);

    document.getElementById('result').textContent = `최종 점수는 ${final_score.toFixed(2)} 점입니다.`;
}
