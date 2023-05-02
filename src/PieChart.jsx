export default function PieChart() {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
        <div className="dropdown no-arrow">
          <a
            href="/ "
            className="dropdown-toggle"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
            aria-labelledby="dropdownMenuLink"
          >
            <div className="dropdown-header">Dropdown Header:</div>
            <a href="/" className="dropdown-item">
              Action
            </a>
            <a href="/" className="dropdown-item">
              Another action
            </a>
            <div className="dropdown-divider"></div>
            <a href="/" className="dropdown-item">
              Something else here
            </a>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="chart-pie pt-4 pb-2">
          <canvas id="myPieChart"></canvas>
        </div>
        <div className="mt-4 text-center small">
          <span className="mr-2">
            <i className="fas fa-circle text-primary"></i> Direct
          </span>
          <span className="mr-2">
            <i className="fas fa-circle text-success"></i> Social
          </span>
          <span className="mr-2">
            <i className="fas fa-circle text-info"></i> Referral
          </span>
        </div>
      </div>
    </div>
  );
}
