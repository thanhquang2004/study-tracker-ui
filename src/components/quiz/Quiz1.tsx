import { useState } from "react";
import QuizPage from "./QuizPage";
import { useGetQuestion1 } from "../../hooks/useGetQuestion1";
import router from "../Routes";
import { useGetQuestion2 } from "../../hooks/useGetQuestion2";
import { useGetQuestion3 } from "../../hooks/useGetQuestion3";
import { dataType } from "../../interfaces/questionData.interface";
import { useGetRoadmap } from "../../hooks/useGetRoadmap";

function Quiz1() {
  const [questionPage, setQuestionPage] = useState(1);
  const { GetQuestion1, data1, isLoading1 } = useGetQuestion1();
  const { GetQuestion2, data2, isLoading2 } = useGetQuestion2();
  const { GetQuestion3, data3, isLoading3 } = useGetQuestion3();
  const { getRoadmap, dataRoadmap, isLoading } = useGetRoadmap();
  const [answers, setAnswers] = useState("");

  const onSubmit = async (answer: string, exampleAnswer: string) => {
    const info = `${answer} ${exampleAnswer}`;
    setAnswers(`${answers} \n${info}`);
    const req = {
      info: `${answers} \n${info}`,
    };

    switch (questionPage) {
      case 1:
        await GetQuestion1({ info: info });
        setQuestionPage(questionPage + 1);
        router.navigate("/quiz1");
        break;
      case 2:
        await GetQuestion2(req);
        setQuestionPage(questionPage + 1);
        router.navigate("/quiz1");
        break;
      case 3:
        await GetQuestion3(req);
        setQuestionPage(questionPage + 1);
        router.navigate("/quiz1");
        break;
      case 4:
        try {
          const done = await getRoadmap({ info: `${answers} \n ${info}` });
          console.log("done", done);
        } catch (error) {
          console.log("Error", error);
        }

        break;
      default:
        router.navigate("/quiz1");
        break;
    }
  };

  if (isLoading1 || isLoading2 || isLoading3) return <div>Loading...</div>;

  if (dataRoadmap)
    router.navigate(`/roadmap/${dataRoadmap?.id}`, {
      state: { isLoading: isLoading, id: dataRoadmap?.id },
    });

  let data: dataType;
  if (questionPage === 2) data = data1!;
  else if (questionPage === 3) data = data2!;
  else if (questionPage === 4) data = data3!;

  return (
    <div className="tw-w-full">
      {questionPage === 1 ? (
        <QuizPage
          nextQuestion="What are your goals and future directions?"
          answers="Personal or Career Goals:"
          exampleAnswer={undefined}
          onSubmit={onSubmit}
        />
      ) : (
        <QuizPage
          nextQuestion={data!.nextQuestion}
          answers={data!.answer}
          exampleAnswer={data!.exampleAnswer}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
}

export default Quiz1;
