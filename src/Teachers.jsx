import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Teachers() {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("https://6453aa5fc18adbbdfea3fc04.mockapi.io/teachers")
      .then((response) => response.json())
      .then((data) => setTeachers(data));
  }, []);

  const deleteTeacher = async (teacher) => {
    await fetch(
      `https://6453aa5fc18adbbdfea3fc04.mockapi.io/teachers/${teacher.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setTeachers(teachers.filter((t) => t.id != teacher.id));
  };

  return (
    <div className="container mt-4">
      <h1>Teachers</h1>
      <button
        className="btn btn-primary mb-4"
        onClick={() => navigate(`/add/teacher`)}
      >
        Add
      </button>
      {teachers.map((teacher) => (
        <div className="p-4 card" key={teacher.id}>
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
              value={teacher.name}
              readOnly={!teacher.enableEdit}
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
              value={teacher.subject}
              readOnly={!teacher.enableEdit}
            />
          </div>
          <div className="d-flex justify-content-end">
            <i
              className="fas fa-fw fa-pencil-alt cursor-pointer"
              onClick={() => navigate(`/edit/teacher/${teacher.id}`)}
            ></i>
            <i
              className="fas fa-fw fa-trash-alt cursor-pointer"
              onClick={() => deleteTeacher(teacher)}
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
}
