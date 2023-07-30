import "./confessions.css";
import { data } from "../../../data/data.js";
import { useEffect, useState } from "react";

const Confessions = () => {
  const [stage, setStage] = useState(0);
  const [disableNext, setDisableNext] = useState(false);
  const [disablPrev, setDisablPrev] = useState(false);

  const incStage = () => {
    setStage((prev) => prev + 1);
  };
  const decStage = () => {
    setStage((prev) => prev - 1);
  };
  const handleNext = (e) => {
    e.preventDefault();
    if (stage !== data.length - 1) {
      incStage();
    }
  };
  const handlePrev = (e) => {
    e.preventDefault();
    if (stage !== 0) {
      decStage();
    }
  };

  useEffect(() => {
    if (stage === data.length - 1) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
    if (stage === 0) {
      setDisablPrev(true);
    } else {
      setDisablPrev(false);
    }
  }, [stage]);

  return (
    <div className="confessions">
      <div className="confTop">
        <h2>Now, let us start with the confessions. </h2>
        <div className="confBox">
          <h2>Confession {data[stage].stage} : </h2>
          <h3>{data[stage].conf}</h3>
          <div className="btns">
            <button
              className="prevBtn"
              onClick={handlePrev}
              disabled={disablPrev}
            >
              Back
            </button>
            <button
              className="nextBtn"
              onClick={handleNext}
              disabled={disableNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confessions;
