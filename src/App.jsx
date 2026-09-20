import { useState } from "react";
import "./App.css";

function App() {
  const [college, setCollege] = useState(
    "CBIT — Chaitanya Bharathi Institute of Technology"
  );
  const [otherCollege, setOtherCollege] = useState("");
  const [location, setLocation] = useState("College Canteen");
  const [people, setPeople] = useState(18);
  const [waitTime, setWaitTime] = useState(null);
  const [serviceTime, setServiceTime] = useState(null);

  // Sample historical service-time data for the MVP
  const serviceTimes = {
    "College Canteen": 2.0,
    "College Office": 4.0,
    "Campus Lab": 3.0,
    "Library": 2.5,
    "Clinic": 5.0,
  };

  const calculateWait = () => {
    const averageTime = serviceTimes[location];
    const estimatedWait = Number(people) * averageTime;

    setServiceTime(averageTime);
    setWaitTime(estimatedWait);
  };

  const getStatus = () => {
    if (waitTime <= 10) return "LOW WAIT";
    if (waitTime <= 30) return "MODERATE WAIT";
    return "HIGH WAIT";
  };

  const getRecommendation = () => {
    if (waitTime <= 10) {
      return "The queue is short. This is a good time to go.";
    }

    if (waitTime <= 30) {
      return "You can wait, but consider visiting during a less busy period.";
    }

    return "The queue is currently long. Consider coming back later.";
  };

  const displayedCollege =
    college === "Other College" ? otherCollege : college;

  return (
    <div className="app">

      <nav>
        <div className="logo">
          Queue<span>Less</span>
        </div>

        <div className="nav-text">
          Smart waiting decisions
        </div>
      </nav>

      <section className="hero">

        <div className="badge">
          SMART QUEUE PREDICTION
        </div>

        <h1>
          Know before
          <br />
          <span>you wait.</span>
        </h1>

        <p>
          Estimate your waiting time before you join a queue.
          Spend less time standing and more time doing what matters.
        </p>

        <a href="#calculator" className="hero-button">
          Check waiting time →
        </a>

      </section>

      <section id="calculator" className="calculator-section">

        <div className="section-label">
          01 / ESTIMATE
        </div>

        <h2>
          How long will you wait?
        </h2>

        <div className="calculator">

          {/* College */}
          <div className="input-group">

            <label>
              Select your college
            </label>

            <select
              value={college}
              onChange={(e) => {
                setCollege(e.target.value);
                setWaitTime(null);
              }}
            >
              <option>
                CBIT — Chaitanya Bharathi Institute of Technology
              </option>

              <option>
                VNR VJIET
              </option>

              <option>
                Vasavi College of Engineering
              </option>

              <option>
                Gokaraju Rangaraju Institute of Engineering and Technology
              </option>

              <option>
                Anurag University
              </option>

              <option>
                Mahindra University
              </option>

              <option>
                BITS Pilani Hyderabad Campus
              </option>

              <option>
                IIIT Hyderabad
              </option>

              <option>
                JNTUH
              </option>

              <option>
                Osmania University
              </option>

              <option>
                Other College
              </option>

            </select>

          </div>

          {/* Other College Name */}
          {college === "Other College" && (
            <div className="input-group">

              <label>
                Enter your college name
              </label>

              <input
                type="text"
                placeholder="e.g. ABC Engineering College"
                value={otherCollege}
                onChange={(e) => {
                  setOtherCollege(e.target.value);
                  setWaitTime(null);
                }}
              />

            </div>
          )}

          {/* Location */}
          <div className="input-group">

            <label>
              Where are you going?
            </label>

            <select
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setWaitTime(null);
              }}
            >
              <option>
                College Canteen
              </option>

              <option>
                College Office
              </option>

              <option>
                Campus Lab
              </option>

              <option>
                Library
              </option>

              <option>
                Clinic
              </option>

            </select>

          </div>

          {/* People */}
          <div className="input-group">

            <label>
              People currently waiting
            </label>

            <input
              type="number"
              min="0"
              value={people}
              onChange={(e) => {
                setPeople(e.target.value);
                setWaitTime(null);
              }}
            />

          </div>

          <button
            onClick={calculateWait}
            disabled={college === "Other College" && !otherCollege.trim()}
          >
            ESTIMATE WAIT →
          </button>

        </div>

      </section>

      {/* Result */}
      {waitTime !== null && (

        <section className="result-section">

          <div className="section-label">
            02 / RESULT
          </div>

          <div className="result-card">

            <div>

              <p className="small-title">
                YOUR ESTIMATED WAIT
              </p>

              <div className="wait-number">
                {waitTime}
                <span> min</span>
              </div>

              <div className="status">
                {getStatus()}
              </div>

            </div>

            <div className="recommendation">

              <p>
                RECOMMENDATION
              </p>

              <h3>
                {getRecommendation()}
              </h3>

              <div className="details">

                <div>
                  <span>
                    College
                  </span>

                  <strong>
                    {displayedCollege}
                  </strong>
                </div>

                <div>
                  <span>
                    Location
                  </span>

                  <strong>
                    {location}
                  </strong>
                </div>

                <div>
                  <span>
                    Queue
                  </span>

                  <strong>
                    {people} people
                  </strong>
                </div>

                <div>
                  <span>
                    Historical service time
                  </span>

                  <strong>
                    {serviceTime} min/person
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </section>
      )}

      {/* Insights */}
      <section className="insights">

        <div className="section-label">
          03 / INSIGHTS
        </div>

        <h2>
          When is it less busy?
        </h2>

        <p className="subtext">
          Based on sample historical queue patterns.
        </p>

        <div className="chart">

          <div className="bar-row">
            <span>12–1 PM</span>

            <div className="bar">
              <div style={{ width: "72%" }}></div>
            </div>

            <strong>High</strong>
          </div>

          <div className="bar-row">
            <span>1–2 PM</span>

            <div className="bar">
              <div style={{ width: "92%" }}></div>
            </div>

            <strong>Very high</strong>
          </div>

          <div className="bar-row">
            <span>2–3 PM</span>

            <div className="bar">
              <div style={{ width: "55%" }}></div>
            </div>

            <strong>Medium</strong>
          </div>

          <div className="bar-row">
            <span>3–4 PM</span>

            <div className="bar">
              <div style={{ width: "25%" }}></div>
            </div>

            <strong>Low</strong>
          </div>

          <div className="bar-row">
            <span>4–5 PM</span>

            <div className="bar">
              <div style={{ width: "42%" }}></div>
            </div>

            <strong>Medium</strong>
          </div>

        </div>

        <div className="best-time">

          <span>
            BEST TIME TO VISIT
          </span>

          <strong>
            3:00 PM – 4:00 PM
          </strong>

        </div>

      </section>

      <footer>

        <strong>
          QueueLess
        </strong>

        <span>
          Built to reduce unnecessary waiting.
        </span>

      </footer>

    </div>
  );
}

export default App;