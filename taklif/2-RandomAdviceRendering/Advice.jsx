import { useEffect, useState } from "react";

export default function Advice() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState("true");

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAdvice(data.slip.advice);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAdvice();
    document.body.style.backgroundColor = "lightblue";
  }, []);

  useEffect(() => {});
  return (
    <div className="mt-5">
      <h1 className="d-flex justify-content-center mb-3">Advice:</h1>
      {loading ? (
        <p className="d-flex justify-content-center">loading...</p>
      ) : (
        <h4 className="d-flex justify-content-center">{advice}</h4>
      )}
      <div className="d-flex justify-content-center mt-2">
        <button onClick={getAdvice} className="mt-2">
          Random Advice
        </button>
      </div>
    </div>
  );
}
