import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddStudent({ editMode }) {
  const [currentStudentName, setCurrentStudentName] = useState("");
  const [currentGrade, setCurrentGrade] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (editMode) {
      fetch(`https://6453aa5fc18adbbdfea3fc04.mockapi.io/students/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setCurrentStudentName(data.name);
          setCurrentGrade(data.grade);
        });
    }
  }, [editMode, id]);

  const saveTeacher = async (event) => {
    event.preventDefault();
    await fetch(
      "https://6453aa5fc18adbbdfea3fc04.mockapi.io/students" +
        (editMode ? "/" + id : ""),
      {
        method: editMode ? "PUT" : "POST",
        body: JSON.stringify({
          name: currentStudentName,
          grade: currentGrade,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    navigate("/");
  };

  return (
    <div className="p-4 card mt-4" key={id}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            Name
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          value={currentStudentName}
          onChange={(e) => {
            setCurrentStudentName(e.target.value);
          }}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            Grade
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          value={currentGrade}
          onChange={(e) => {
            setCurrentGrade(e.target.value);
          }}
        />
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary" onClick={saveTeacher}>
          {editMode ? "Save" : "Add"}
        </button>
      </div>
    </div>
  );
}
