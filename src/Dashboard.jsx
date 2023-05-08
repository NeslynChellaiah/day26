import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Teachers from "./Teachers";
import Students from "./Students";
import AddTeacher from "./AddTeacher";
import AddStudent from "./AddStudent";

export default function Dashboard() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <Routes>
            <Route
              path="/"
              element={
                <div className="row">
                  <div className="col-md-7">
                    <Teachers />
                  </div>
                  <div className="col-md-5">
                    <Students />
                  </div>
                </div>
              }
            ></Route>
            <Route path="/teachers" element={<Teachers />}></Route>
            <Route
              path="edit/teacher/:id"
              element={<AddTeacher editMode={true} />}
            ></Route>
            <Route
              path="add/teacher"
              element={<AddTeacher editMode={false} />}
            ></Route>
            <Route path="/students" element={<Students />}></Route>
            <Route
              path="edit/student/:id"
              element={<AddStudent editMode={true} />}
            ></Route>
            <Route
              path="add/student"
              element={<AddStudent editMode={false} />}
            ></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}
