import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddTeacher({ editMode }) {
  const [currentTeacherName, setCurrentTeacherName] = useState("");
  const [currentSubject, setCurrentSubject] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (editMode) {
      fetch(`https://6453aa5fc18adbbdfea3fc04.mockapi.io/teachers/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setCurrentTeacherName(data.name);
          setCurrentSubject(data.subject);
        });
    }
  }, [editMode, id]);

  const saveTeacher = async (event) => {
    event.preventDefault();
    await fetch(
      "https://6453aa5fc18adbbdfea3fc04.mockapi.io/teachers" +
        (editMode ? "/" + id : ""),
      {
        method: editMode ? "PUT" : "POST",
        body: JSON.stringify({
          name: currentTeacherName,
          subject: currentSubject,
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
          value={currentTeacherName}
          onChange={(e) => {
            setCurrentTeacherName(e.target.value);
          }}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            Subject
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          value={currentSubject}
          onChange={(e) => {
            setCurrentSubject(e.target.value);
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
