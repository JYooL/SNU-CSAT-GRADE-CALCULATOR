// URL 매개변수 파싱 함수
function getQueryParams() {
    const params = {};
    window.location.search.substring(1).split("&").forEach(function(pair) {
        const [key, value] = pair.split("=");
        params[key] = decodeURIComponent(value);
    });
    return params;
}

// 폼 필드에 URL 매개변수 값 설정
function setFormValues(params) {
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const element = document.getElementById(key);
            if (element) {
                element.value = params[key];
            }
        }
    }
}

// 계산 함수
function calculateScore(event) {
    event.preventDefault();

    const koreanScore = parseFloat(document.getElementById('korean-score').value);
    const mathScore = parseFloat(document.getElementById('math-score').value);
    const subject1Score = parseFloat(document.getElementById('subject1-score').value);
    const subject2Score = parseFloat(document.getElementById('subject2-score').value);
    const englishGrade = parseInt(document.getElementById('english-grade').value);
    const koreanHistoryGrade = parseInt(document.getElementById('korean-history-grade').value);
    const scienceCombination = document.getElementById('science-combination').value;

    // 영어 감점 계산
    let englishDeduction = 0;
    if (englishGrade === 2) {
        englishDeduction = 0.5;
    } else if (englishGrade >= 3) {
        englishDeduction = 0.5 + (englishGrade - 2) * 2;
    }

    // 한국사 감점 계산
    let koreanHistoryDeduction = 0;
    if (koreanHistoryGrade >= 4) {
        koreanHistoryDeduction = (koreanHistoryGrade - 3) * 0.4;
    }

    // 과학탐구 가산점 계산
    let scienceBonus = 0;
    if (scienceCombination === 'I+II') {
        scienceBonus = 1.5;
    } else if (scienceCombination === 'II+II') {
        scienceBonus = 3;
    }

    // 총점 계산
    const totalScore = koreanScore + mathScore + subject1Score + subject2Score - englishDeduction - koreanHistoryDeduction + scienceBonus;

    // 결과 출력
    const resultElement = document.getElementById('result');
    resultElement.textContent = `총점: ${totalScore.toFixed(2)}`;
}

// URL 매개변수 설정
document.addEventListener('DOMContentLoaded', function() {
    const params = getQueryParams();
    setFormValues(params);
});

// 폼 제출 이벤트 리스너
document.getElementById('score-form').addEventListener('submit', calculateScore);
