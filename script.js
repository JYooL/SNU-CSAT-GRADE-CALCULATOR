document.getElementById('subject-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const scienceCombination = document.getElementById('science-combination').value;
    document.getElementById('result').textContent = `선택한 과학탐구 과목 조합: ${scienceCombination}`;
});
