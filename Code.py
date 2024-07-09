def calculate_final_score(korean, math, science1, science2, english_grade, history_grade, science_combination):
    # 표준점수 반영 비율
    korean_weight = 1.0
    math_weight = 1.2
    science_weight = 0.8

    # 영어 감점 계산
    if english_grade == 1:
        english_penalty = 0
    else:
        english_penalty = 0.5 + (english_grade - 2) * 2

    # 한국사 감점 계산
    if history_grade <= 3:
        history_penalty = 0
    else:
        history_penalty = (history_grade - 3) * 0.4

    # 과학탐구 가산점 계산
    if science_combination == "I+I":
        science_bonus = 0
    elif science_combination == "I+II":
        science_bonus = 3
    elif science_combination == "II+II":
        science_bonus = 5
    else:
        raise ValueError("Invalid science combination. It should be 'I+I', 'I+II', or 'II+II'.")

    # 최종 점수 계산
    final_score = (korean * korean_weight +
                   math * math_weight +
                   (science1 + science2) * science_weight -
                   english_penalty -
                   history_penalty +
                   science_bonus)

    return final_score

# 사용자로부터 입력 받기
korean = float(input("국어 표준점수를 입력하세요: "))
math = float(input("수학 표준점수를 입력하세요: "))
science1 = float(input("탐구1 표준점수를 입력하세요: "))
science2 = float(input("탐구2 표준점수를 입력하세요: "))
english_grade = int(input("영어 등급을 입력하세요: "))
history_grade = int(input("한국사 등급을 입력하세요: "))
science_combination = input("과학탐구 과목 조합을 입력하세요 (I+I, I+II, II+II): ")

# 최종 점수 계산
final_score = calculate_final_score(korean, math, science1, science2, english_grade, history_grade, science_combination)

print(f"최종 점수는 {final_score} 점입니다.")
