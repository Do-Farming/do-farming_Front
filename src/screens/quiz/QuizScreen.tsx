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
  TimeLeftText,
} from './QuizScreen.styled';
import { Animated } from 'react-native';
import { InfoText } from '../home/HomeScreen.styled';
import { SketchBook } from '../../assets';
import axiosInstance from '../../apis/axiosInstance';
import { QuizItem } from '../../types/quiz/QuizTypes';

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
  const [quizData, setQuizData] = useState<QuizItem[]>([])
  const [startTime, setStartTime] = useState<Date | null>(null); // 퀴즈 시작 시간
  const [endTime, setEndTime] = useState<Date | null>(null);

  const currentQuiz = quizData[currentPage];

  const getQuizData = async (count: number) => {
    try {
      const response = await axiosInstance.get(
        `/api/v1/quiz?count=${count}`
      )
      console.log(response);
      setQuizData(response.data.result);
    } catch (error) {
      console.log(error);
    }
  }

  const postQuizData = async (completionTime : number, score : number) => {
    try {
      const response = await axiosInstance.post(
        `/quiz/post?score=${score}&completionTime=${completionTime}`
      )
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  const finishQuiz = () => {
    setQuizCompleted(true); // 퀴즈 종료
    setEndTime(new Date());
  }

  useEffect(() => {
    getQuizData(5);
    setStartTime(new Date());
  }, [])

  useEffect(() => {
    if (startTime && endTime) {
      const completionTime = endTime.getTime() - startTime?.getTime();
      postQuizData(completionTime, score);
    }
  }, [endTime])

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
          return prev + 0.1;
        }
        clearInterval(intervalRef.current as NodeJS.Timeout);
        setShowAnswer(true);
        setAnswerText('시간 초과! 💣');
        setTimeout(() => nextQuestion(), 5000);
        return prev;
      });
    }, 100);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentPage, quizCompleted]); // currentPage가 바뀔 때마다 타이머를 재설정

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: (timeLeft / 10) * 100,
      duration: 100,
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
    if (index + 1 === currentQuiz.correctAnswer) {
      setAnswerText('정답입니다! 🙆');
      setScore((prevScore) => prevScore + 20); // 정답일 경우 점수 추가
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
      finishQuiz();
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
          <TimeLeftText>{Math.max(0, parseInt((10 - timeLeft).toFixed(0)))}초</TimeLeftText>
          <Container>
            <SketchbookImage>
              <SketchBook width={'100%'} height={'100%'} />
            </SketchbookImage>
            <QuizContainer>
              <QuizNumber>Q.</QuizNumber>
              <QuizContent>{currentQuiz?.question}</QuizContent>
              <QuizPage>
                {currentPage + 1} / {quizData.length}
              </QuizPage>
            </QuizContainer>
            <AnswerText>{answerText}</AnswerText>
            <ChoicesContainer>
              {currentQuiz?.choices.map((choice, index) => (
                <ChoiceButton
                  key={index}
                  onPress={() => handleChoiceClick(index)}
                  style={{
                    backgroundColor: showAnswer
                      ? index + 1 === currentQuiz.correctAnswer
                        ? '#85D788'
                        : index === selectedChoice
                          ? '#FA8282'
                          : '#fff'
                      : '#fff',
                    borderColor: showAnswer
                      ? index + 1 === currentQuiz.correctAnswer
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
            <ResultText>맞힌 문제: {correctCount}개</ResultText>
            <ResultText>
              틀린 문제: {quizData.length - correctCount}개
            </ResultText>
          </ResultContainer>
        </Container>
      )}
    </>
  );
}
