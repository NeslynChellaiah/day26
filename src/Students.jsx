import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Students() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("https://6453aa5fc18adbbdfea3fc04.mockapi.io/students")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  const deleteStudent = async (student) => {
    await fetch(
      `https://6453aa5fc18adbbdfea3fc04.mockapi.io/students/${student.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setStudents(students.filter((t) => t.id != student.id));
  };

  return (
    <div className="container mt-4">
      <h1>Students</h1>
      <button
        className="btn btn-primary mb-4"
        onClick={() => navigate(`/add/student`)}
      >
        Add
      </button>
      {students.map((student) => (
        <div className="p-4 card" key={student.id}>
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
              value={student.name}
              readOnly={!student.enableEdit}
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
              value={student.grade}
              readOnly={!student.enableEdit}
            />
          </div>
          <div className="d-flex justify-content-end">
            <i
              className="fas fa-fw fa-pencil-alt cursor-pointer"
              onClick={() => navigate(`/edit/student/${student.id}`)}
            ></i>
            <i
              className="fas fa-fw fa-trash-alt cursor-pointer"
              onClick={() => deleteStudent(student)}
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
}
