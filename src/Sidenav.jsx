import { Link } from "react-router-dom";

export default function Sidenav() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Management App</div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <Link to={`/`}>
          <div className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </div>
        </Link>
      </li>

      <li className="nav-item">
        <Link to={`/teachers`}>
          <div className="nav-link">
            <i className="fas fa-fw fa-user-alt"></i>
            <span>Teachers</span>
          </div>
        </Link>
      </li>

      <li className="nav-item">
        <Link to={`/students`}>
          <div className="nav-link">
            <i className="fas fa-fw fa-user-alt"></i>
            <span>Students</span>
          </div>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}
