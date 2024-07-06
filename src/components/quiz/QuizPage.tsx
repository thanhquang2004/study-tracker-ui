import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

type QuizPageProps = {
  nextQuestion: string;
  answers: string;
  exampleAnswer?: [
    { content: string },
    { content: string },
    { content: string }
  ];
  onSubmit: (answer: string, exampleAnswer: string) => void;
};

function QuizPage(question: QuizPageProps) {
  const [optionAnswer, setOptionAnswer] = useState("");

  return (
    <Container sx={{paddingTop: "60px"}}>
      <Grid container spacing={2}>
        <Grid
          item
          md={6}
          lg={6}
          gap="20px"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="h3" color="red">
            Generate Roadmap
          </Typography>
          <Typography variant="h4">{question.nextQuestion}</Typography>
          <TextField
            sx={{ mt: "100px" }}
            label="Options"
            name="answer"
            autoComplete=""
            id="answer"
            value={optionAnswer}
            onChange={(e) => setOptionAnswer(e.target.value)}
          ></TextField>
          <Button
            type="submit"
            variant="contained"
            onClick={() => question.onSubmit(question.answers, optionAnswer)}
          >
            Submit
          </Button>
        </Grid>
        <Grid item md={6} lg={6}>
          <Stack
            spacing={2}
            sx={{ display: "flex", alignItems: "center", width: "100%" }}
          >
            {question.exampleAnswer?.map((exampleAnswer) => (
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "50vh",
                  height: "13vh",
                  borderRadius: "20px",
                  color: "black",
                  backgroundColor: "#EEEDEB",
                  fontSize: "20px",
                }}
                onClick={() =>
                  question.onSubmit(
                    question.answers,
                    exampleAnswer.content
                  )
                }
              >
                {exampleAnswer.content}
              </Button>
            ))}
          </Stack>
        </Grid>
      </Grid>
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Button variant="contained" color="primary">
          Next
        </Button>
      </Box> */}
    </Container>
  );
}

export default QuizPage;
