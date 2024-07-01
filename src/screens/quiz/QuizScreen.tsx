import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  QuizContainer,
  QuizContent,
  QuizNumber,
  QuizPage,
  SketchbookImage,
  ChoicesContainer,
  ProgressBarContainer,
  ChoiceButtonText,
  ChoiceButton,
  ProgressBar,
  AnswerText,
  ResultContainer,
  ResultText,
  ResultScoreText,
} from './QuizScreen.styled';
import { Animated } from 'react-native';
import { InfoText } from '../home/HomeScreen.styled';

export default function QuizScreen() {
  const [timeLeft, setTimeLeft] = useState(0); // 10초 타이머
  const [currentPage, setCurrentPage] = useState(0); // 현재 퀴즈 페이지
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null); // 선택된 선택지
  const [showAnswer, setShowAnswer] = useState(false); // 정답 표시 여부
  const [answerText, setAnswerText] = useState(''); // 정답 텍스트
  const [score, setScore] = useState(0); // 점수
  const [correctCount, setCorrectCount] = useState(0); // 맞힌 문제 수
  const progressAnim = useRef(new Animated.Value(0)).current;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const quizData = [
    {
      question:
        '‘안전자산’으로 분류되는 다음 투자처 가운데 이자나 배당수익을 기대할 수 있는 한 가지를 고르면?',
      choices: ['예금', '주식', '펀드', '비트코인'],
      correctAnswer: 0,
    },
    {
      question: '다음 중 주식 투자에 대한 설명으로 올바르지 않은 것은?',
      choices: [
        '배당금을 받을 수 있다',
        '매수와 매도를 통해 수익을 낼 수 있다',
        '투자 원금이 보장된다',
        '주가 상승으로 자본 이득을 얻을 수 있다',
      ],
      correctAnswer: 2,
    },
    {
      question: '다음 중 채권 투자에 대한 설명으로 올바른 것은?',
      choices: [
        '이자 수익을 기대할 수 없다',
        '원금 보장이 없다',
        '정기적인 이자 지급을 받을 수 있다',
        '배당 수익을 기대할 수 있다',
      ],
      correctAnswer: 2,
    },
    // 추가 퀴즈 데이터
  ];

  const currentQuiz = quizData[currentPage];

  useEffect(() => {
    if (quizCompleted) return; // 퀴즈가 종료된 경우에는 더 이상 실행하지 않음

    // 기존 타이머 클리어
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // 새로운 타이머 설정
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev < 10) {
          return prev + 1;
        }
        clearInterval(intervalRef.current as NodeJS.Timeout);
        setShowAnswer(true);
        setAnswerText('시간 초과! 💣');
        setTimeout(() => nextQuestion(), 5000);
        return prev;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentPage, quizCompleted]); // currentPage가 바뀔 때마다 타이머를 재설정

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: (timeLeft / 10) * 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [timeLeft]);

  const handleChoiceClick = (index: number) => {
    if (showAnswer) return;

    // 타이머 중단
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setShowAnswer(true);
    setSelectedChoice(index);
    if (index === currentQuiz.correctAnswer) {
      setAnswerText('정답입니다! 🙆');
      setScore((prevScore) => prevScore + 10); // 정답일 경우 점수 추가
      setCorrectCount((prevCount) => prevCount + 1); // 맞힌 문제 수 추가
    } else {
      setAnswerText('오답입니다! 🙅');
    }
    setTimeout(() => nextQuestion(), 5000);
  };

  const nextQuestion = () => {
    if (currentPage < quizData.length - 1) {
      setCurrentPage(currentPage + 1);
      setTimeLeft(0);
      setShowAnswer(false);
      setAnswerText('');
      setSelectedChoice(null);
    } else {
      // 마지막 페이지인 경우 처리
      setQuizCompleted(true); // 퀴즈 종료
      console.log('퀴즈 종료');
    }
  };

  return (
    <>
      {!quizCompleted ? (
        <>
          <ProgressBarContainer>
            <ProgressBar
              style={{
                width: progressAnim.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }),
              }}
            />
          </ProgressBarContainer>
          <Container>
            <SketchbookImage
              source={require('../../assets/quiz/sketchbook.png')}
              style={{ width: '100%', height: 300 }}
            />
            <QuizContainer>
              <QuizNumber>Q.</QuizNumber>
              <QuizContent>{currentQuiz.question}</QuizContent>
              <QuizPage>
                {currentPage + 1} / {quizData.length}
              </QuizPage>
            </QuizContainer>
            <AnswerText>{answerText}</AnswerText>
            <ChoicesContainer>
              {currentQuiz.choices.map((choice, index) => (
                <ChoiceButton
                  key={index}
                  onPress={() => handleChoiceClick(index)}
                  style={{
                    backgroundColor: showAnswer
                      ? index === currentQuiz.correctAnswer
                        ? '#85D788'
                        : index === selectedChoice
                          ? '#FA8282'
                          : '#fff'
                      : '#fff',
                    borderColor: showAnswer
                    ? index === currentQuiz.correctAnswer
                      ? '#85D788'
                      : index === selectedChoice
                        ? '#FA8282'
                        : '#fff'
                    : '#fff',
                  }}
                >
                  <ChoiceButtonText>{choice}</ChoiceButtonText>
                </ChoiceButton>
              ))}
            </ChoicesContainer>
          </Container>
        </>
      ) : (
        <Container>
          <InfoText>오늘의 퀴즈 종료!</InfoText>
          <ResultContainer>
            <ResultScoreText>{score}점</ResultScoreText>
            <ResultText>
              맞힌 문제: {correctCount}개
            </ResultText>
            <ResultText>
              틀린 문제: {quizData.length - correctCount}개
            </ResultText>
          </ResultContainer>
        </Container>
      )}
    </>
  );
}
