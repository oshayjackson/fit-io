import React from "react";
import "./card.css";

function Card() {
  return (
    <div className="card-container">
      <div id="row_monday_tuesday" className="container col">
        <div className="card" style={{ width: "25rem" }}>
          <div className="card-body">
            <h5 className="card-title">Monday</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Shoulders, Biceps, Triceps, Abs
            </h6>
            <ul id="workout">
              <li>Lateral raises 7 x 8-12</li>
              <li>Dumbbell press 4 x 8-10</li>
              <li>ISO-lateral raises 2 x 8-10</li>
              <li>Cable front raises 3 x 8-10</li>
              <li>Reverse pec-dec fly 3 x 8-10</li>
              <br />
              <li>Rope push downs 7 x 8-10</li>
              <li>Skull crushers 3 x 8-10</li>
              <li>Cable tricep extensions 3 x 8-10</li>
              <li>Tricep dips 3 x 8</li>
              <br />
              <li>Cable curls 7 x 8-10</li>
              <li>Preacher curls 3 x 8-10</li>
              <li>Dumbbell hammer curls 3 x 8-10</li>
              <br />
              <li>Hanging leg raises 3 x 10</li>
              <li>Ab crunch machine 3 x 10</li>
            </ul>
          </div>
        </div>
        <br />

        <div className="card" style={{ width: "25em" }}>
          <div id="tue" className="card-body">
            <h5 className="card-title">Tuesday</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Chest, Back, Traps, Abs
            </h6>
            <ul id="workout">
              <li>Incline chest press 4 x 12-15</li>
              <li>Incline dumbbell flies 3 x 8-12</li>
              <li>Power press 3 x 8-12</li>
              <li>Superset cable flies & dips 3 x 12-15</li>
              <br />
              <li>Lat pull downs 4 x 8-12</li>
              <li>Wide cable row 2 x 8-12</li>
              <li>Seated rope rows 2 x 10</li>
              <li>Dumbbell rows 3 x 8</li>
              <li>Rope pullovers 2 x Failure</li>
              <br />
              <li>Smith machine shrugs 7 x 8-10</li>
              <li>ISO smith machine shrugs 3 x 8-12</li>
              <li>Cable face pulls 3 x 8-10</li>
              <br />
              <li>Hanging leg raises 3 x 10</li>
              <li>Ab crunch machine 3 x 10</li>
            </ul>
          </div>
        </div>
        <br />
        <div className="card" style={{ width: "25em" }}>
          <div id="tue" className="card-body">
            <h5 className="card-title">Wednesday</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Quads, Hamstrings, Calves
            </h6>
            <ul id="workout">
              <li>Warmup leg extensions 3 x activation</li>
              <li>Smith machine squats 4 x 8-10 'DROPSET'</li>
              <li>Hacksquat 3 x 8-10 'DROPSET'</li>
              <li>Bulgarian suqats 3 x 8-10</li>
              <li>Leg curls 3 x 8-12</li>
              <li>Calf raises 2 x 10-12</li>
            </ul>
          </div>
        </div>
        <br />
        {/* <div className="card" style={{ width: "25em" }}>
          <div id="tue" className="card-body">
            <h5 className="card-title">Thursday</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Shoulders, Biceps, Triceps, Abs
            </h6>
            <ul id="workout">
              <li>Incline chest press 4 x 12-15</li>
              <li>Incline dumbbell flies 3 x 8-12</li>
              <li>Power press 3 x 8-12</li>
              <li>Superset cable flies & dips 3 x 12-15</li>
              <br />
              <li>Lat pull downs 4 x 8-12</li>
              <li>Wide cable row 2 x 8-12</li>
              <li>Seated rope rows 2 x 10</li>
              <li>Dumbbell rows 3 x 8</li>
              <li>Rope pullovers 2 x Failure</li>
              <br />
              <li>Smith machine shrugs 7 x 8-10</li>
              <li>ISO smith machine shrugs 3 x 8-12</li>
              <li>Cable face pulls 3 x 8-10</li>
              <br />
              <li>Hanging leg raises 3 x 10</li>
              <li>Ab crunch machine 3 x 10</li>
            </ul>
          </div>
        </div>
        <br />
        <div className="card" style={{ width: "25em" }}>
          <div id="tue" className="card-body">
            <h5 className="card-title">Friday</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Chest, Back, Traps, Abs
            </h6>
            <ul id="workout">
              <li>Incline chest press 4 x 12-15</li>
              <li>Incline dumbbell flies 3 x 8-12</li>
              <li>Power press 3 x 8-12</li>
              <li>Superset cable flies & dips 3 x 12-15</li>
              <br />
              <li>Lat pull downs 4 x 8-12</li>
              <li>Wide cable row 2 x 8-12</li>
              <li>Seated rope rows 2 x 10</li>
              <li>Dumbbell rows 3 x 8</li>
              <li>Rope pullovers 2 x Failure</li>
              <br />
              <li>Smith machine shrugs 7 x 8-10</li>
              <li>ISO smith machine shrugs 3 x 8-12</li>
              <li>Cable face pulls 3 x 8-10</li>
              <br />
              <li>Hanging leg raises 3 x 10</li>
              <li>Ab crunch machine 3 x 10</li>
            </ul>
          </div>
        </div>
        <br /> */}
      </div>
    </div>
  );
}

export default Card;
