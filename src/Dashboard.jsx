import Approach from "./Approach";
import Colors from "./Colors";
import DetailsRow from "./DetailsRow";
import EarningsOverview from "./EarningsOverview";
import Footer from "./Footer";
import Illustrations from "./Illustrations";
import LogoutModal from "./LogoutModal";
import PieChart from "./PieChart";
import Projects from "./Projects";
import Topbar from "./Topbar";

export default function Dashboard() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Topbar />
        <LogoutModal />
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a
              href="/"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i className="fas fa-download fa-sm text-white-50"></i> Generate
              Report
            </a>
          </div>

          <DetailsRow />
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <EarningsOverview />
            </div>
            <div className="col-xl-4 col-lg-5">
              <PieChart />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <Projects />
              <Colors />
            </div>

            <div className="col-lg-6 mb-4">
              <Illustrations />
              <Approach />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
