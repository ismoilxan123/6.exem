import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import MainLayout from "./pages/MainLayout";
import { useEffect, useState } from "react";

const App = () => {
  const [subjects, setSubjects] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [newId, setNewId] = useState(null);
  const [count, setCount] = useState(0);

  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqZ2ducnhydG1saHR0a2Vrem1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM3NTg1MDEsImV4cCI6MjAxOTMzNDUwMX0.PjwrPBaBasvSbW8WJA3IGPzTkh9f0NJ6yI8ij1KlsyM";
  useEffect(() => {
    getSubject();
  }, []);
  useEffect(() => {
    getQuiz();
  }, []);
  const getSubject = async () => {
    const res = await fetch(
      "https://ajggnrxrtmlhttkekzmg.supabase.co/rest/v1/subjects?select=*",
      {
        headers: {
          apiKey: apiKey,
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const data = await res.json();
    setSubjects(data);
  };
  async function getQuiz(subId) {
    const res = await fetch(
      `https://ajggnrxrtmlhttkekzmg.supabase.co/rest/v1/quizzes?subject_id=eq.${subId}&select=*`,
      {
        headers: {
          apiKey: apiKey,
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const datas = await res.json();
    setQuizzes(datas);
  }
  // global functions
  function optionClick(subId) {
    setNewId(subId);
    getQuiz(subId);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout subjects={subjects} quizzes={quizzes} newId={newId} />
      ),
      errorElement: (
        <h1 className="notice">Iltimos subjectni yana bir marta bosing!!</h1>
      ),
      children: [
        {
          path: "",
          element: (
            <Home
              subjects={subjects}
              setSubjects={setSubjects}
              optionClick={optionClick}
            />
          ),
        },
        {
          path: "quiz",
          element: <Quiz quizzes={quizzes} subjects={subjects} newId={newId} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
