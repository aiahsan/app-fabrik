import Head from "next/head";
import LeftBar from "../components/leftBar";
import Topbar from "../components/topbar";

export default function Students(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Attendance</title>
        <meta name="description" content="Generated by create next app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LeftBar />
      <div className="main-body main-body-2">
        <Topbar title="Attendance" />
        <div className="container-fluid px-lg-5 px-4">
          <div className="row">
            <div className="col-12">
              <h1>Today's Attendance Status</h1>
            </div>
            <div className="col-12 p-lg-5 mt-2 p-4 white-card">
              <div className="dashboard-top">
                <div className="media">
                  <img src="images/students.png" alt="" className="img-fluid" />
                  <div className="media-body ml-3">
                    <p className="grey-text mb-0">Total Students Present</p>
                    <h3 className="mb-0">932</h3>
                  </div>
                </div>
                <div className="media">
                  <img src="images/students.png" alt="" className="img-fluid" />
                  <div className="media-body ml-3">
                    <p className="grey-text mb-0">Total Teachers Present</p>
                    <h3 className="mb-0">50</h3>
                  </div>
                </div>
                <div className="media">
                  <img src="images/teachers.png" alt="" className="img-fluid" />
                  <div className="media-body ml-3">
                    <p className="grey-text mb-0">Total Absent Students</p>
                    <h3 className="mb-0">40</h3>
                  </div>
                </div>
                <div className="media">
                  <img src="images/teachers.png" alt="" className="img-fluid" />
                  <div className="media-body ml-3">
                    <p className="grey-text mb-0">Total Absent Teachers</p>
                    <h3 className="mb-0">732</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-4">
              <h1>Last Week Attendance Status</h1>
            </div>
            <div className="col-12 p-lg-5 mt-2 p-4 white-card">
              <div className="dashboard-top">
                <div className="media">
                  <img src="images/students.png" alt="" className="img-fluid" />
                  <div className="media-body ml-3">
                    <p className="grey-text mb-0">Total Students Present</p>
                    <h3 className="mb-0">932</h3>
                  </div>
                </div>
                <div className="media">
                  <img src="images/students.png" alt="" className="img-fluid" />
                  <div className="media-body ml-3">
                    <p className="grey-text mb-0">Total Teachers Present</p>
                    <h3 className="mb-0">50</h3>
                  </div>
                </div>
                <div className="media">
                  <img src="images/teachers.png" alt="" className="img-fluid" />
                  <div className="media-body ml-3">
                    <p className="grey-text mb-0">Total Absent Students</p>
                    <h3 className="mb-0">40</h3>
                  </div>
                </div>
                <div className="media">
                  <img src="images/teachers.png" alt="" className="img-fluid" />
                  <div className="media-body ml-3">
                    <p className="grey-text mb-0">Total Absent Teachers</p>
                    <h3 className="mb-0">732</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-4">
              <h1>Last Month Attendance Status</h1>
            </div>
            <div className="col-12 mb-5 p-lg-5 mt-2 p-4 white-card">
              <div className="dashboard-top">
                <div className="media">
                  <img src="images/students.png" alt="" className="img-fluid" />
                  <div className="media-body ml-3">
                    <p className="grey-text mb-0">Total Students Present</p>
                    <h3 className="mb-0">932</h3>
                  </div>
                </div>
                <div className="media">
                  <img src="images/students.png" alt="" className="img-fluid" />
                  <div className="media-body ml-3">
                    <p className="grey-text mb-0">Total Teachers Present</p>
                    <h3 className="mb-0">50</h3>
                  </div>
                </div>
                <div className="media">
                  <img src="images/teachers.png" alt="" className="img-fluid" />
                  <div className="media-body ml-3">
                    <p className="grey-text mb-0">Total Absent Students</p>
                    <h3 className="mb-0">40</h3>
                  </div>
                </div>
                <div className="media">
                  <img src="images/teachers.png" alt="" className="img-fluid" />
                  <div className="media-body ml-3">
                    <p className="grey-text mb-0">Total Absent Teachers</p>
                    <h3 className="mb-0">732</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
