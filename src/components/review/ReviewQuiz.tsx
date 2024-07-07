import React, { useState } from "react";
import {
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useGetQuiz } from "../../hooks/useGetQuiz";
import Loader from "../loader/Loader";
import { Description } from "@mui/icons-material";
import router from "../Routes";

const QuizComponent = ({ quizData }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { GetQuiz, isLoading, data1 } = useGetQuiz();

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          GetQuiz({
            Name: quizData.Name,
            Description: quizData.Description,
            Resources: quizData.Resources,
          });
          console.log("data1", data1);
          // window.location.reload();
          setIsOpen(true);
        }}
      >
        Take Quiz
      </Button>
      {data1 && (
        <Dialog open={isOpen} onClose={handleClose}>
          <DialogTitle>Quiz</DialogTitle>
          <DialogContent>
            <Typography variant="h5">{data1.Question}</Typography>
            <RadioGroup value={selectedAnswer} onChange={handleAnswerChange}>
              {data1.Options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
            {!showResult && (
              <DialogActions>
                <Button onClick={handleSubmit}>Submit</Button>
              </DialogActions>
            )}
            {showResult && (
              <Typography variant="body1">
                {selectedAnswer === data1.Answer
                  ? "Correct!"
                  : `Incorrect. The correct answer is: ${data1.Answer}`}
              </Typography>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default QuizComponent;
