import Head from "next/head";
import LeftBar from "../components/leftBar";
import Topbar from "../components/topbar";

export default function Students(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Students</title>
        <meta name="description" content="Generated by create next app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LeftBar />
      <div className="main-body main-body-2">
        <Topbar title="Students" />
        <div className="container-fluid px-lg-5 px-4">
          <div className="d-md-flex align-items-center justify-content-between">
            <div className="position-relative mx-auto mx-md-0 mt-3 search-barr">
              <div className="left-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="23.975" height="23.8" viewBox="0 0 23.975 23.8">
                  <g id="Search" transform="translate(-1160.999 -68.1)">
                    <path
                      id="Vector"
                      d="M1183.7,91.9a1.486,1.486,0,0,1-.9-.4l-5.6-5.6a9.768,9.768,0,0,1-6.2,2.2,9.952,9.952,0,0,1-7.013-17.061A10.079,10.079,0,0,1,1171.1,68.1a9.977,9.977,0,0,1,7.9,16.1l5.6,5.6a1.254,1.254,0,0,1,.373.951,1.012,1.012,0,0,1-.373.748A1.234,1.234,0,0,1,1183.7,91.9ZM1171,70.6a7.6,7.6,0,0,0-7.5,7.5,7.509,7.509,0,0,0,7.5,7.5,7.5,7.5,0,0,0,0-15Z"
                      fill="#26b15d"
                    />
                  </g>
                </svg>
              </div>
              <input type="text" className="site-input py-2 w-100 pl-3 pr-5" placeholder="Search..." />
            </div>
            <div className="d-flex align-items-center justify-content-center justify-content-md-end">
              <select className="transparent-btn mt-3 blue-text">
                <option>Newest</option>
              </select>
              <button className="site-btn px-4 py-2 mt-3 ml-3">
                <i className="fas fa-plus" /> New Teacher
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-4 px-0 white-card px-lg-5 px-4 pb-lg-5 pb-4">
              <div className="table-responsive mt-3">
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        <p className="mb-1 mr-3">
                          <input type="checkbox" id="stopover" name="radio-group" />
                          <label htmlFor="stopover" className="bordered mb-0" />
                        </p>
                      </th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Professor Of</th>
                      <th>ID</th>
                      <th>Created By</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p className="mb-1 mr-3">
                          <input type="checkbox" id="stopover" name="radio-group" />
                          <label htmlFor="stopover" className="bordered mb-0" />
                        </p>
                      </td>
                      <td>
                        <div className="media align-items-center">
                          <img src="images/student-1.png" alt="" className="img-fluid mr-2" />
                          <div className="media-body">
                            <p className="p-lg mb-0 semi-bold">Samantha William</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 grey-text">Administrator</p>
                      </td>
                      <td>
                        <p className="site-btn d-inline-block mb-0 px-4 py-2">SIL, CMI</p>
                      </td>
                      <td>
                        <p className="p-lg mb-0 semi-bold blue-text">#123456789</p>
                      </td>
                      <td>
                        <p className="mb-0 grey-text">Administrator</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="mb-1 mr-3">
                          <input type="checkbox" id="stopover" name="radio-group" />
                          <label htmlFor="stopover" className="bordered mb-0" />
                        </p>
                      </td>
                      <td>
                        <div className="media align-items-center">
                          <img src="images/student-1.png" alt="" className="img-fluid mr-2" />
                          <div className="media-body">
                            <p className="p-lg mb-0 semi-bold">Samantha William</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 grey-text">Administrator</p>
                      </td>
                      <td>
                        <p className="site-btn d-inline-block mb-0 px-4 py-2">SIL, CMI</p>
                      </td>
                      <td>
                        <p className="p-lg mb-0 semi-bold blue-text">#123456789</p>
                      </td>
                      <td>
                        <p className="mb-0 grey-text">Administrator</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="mb-1 mr-3">
                          <input type="checkbox" id="stopover" name="radio-group" />
                          <label htmlFor="stopover" className="bordered mb-0" />
                        </p>
                      </td>
                      <td>
                        <div className="media align-items-center">
                          <img src="images/student-1.png" alt="" className="img-fluid mr-2" />
                          <div className="media-body">
                            <p className="p-lg mb-0 semi-bold">Samantha William</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 grey-text">Administrator</p>
                      </td>
                      <td>
                        <p className="site-btn d-inline-block mb-0 px-4 py-2">SIL, CMI</p>
                      </td>
                      <td>
                        <p className="p-lg mb-0 semi-bold blue-text">#123456789</p>
                      </td>
                      <td>
                        <p className="mb-0 grey-text">Administrator</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="mb-1 mr-3">
                          <input type="checkbox" id="stopover" name="radio-group" />
                          <label htmlFor="stopover" className="bordered mb-0" />
                        </p>
                      </td>
                      <td>
                        <div className="media align-items-center">
                          <img src="images/student-1.png" alt="" className="img-fluid mr-2" />
                          <div className="media-body">
                            <p className="p-lg mb-0 semi-bold">Samantha William</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 grey-text">Administrator</p>
                      </td>
                      <td>
                        <p className="site-btn d-inline-block mb-0 px-4 py-2">SIL, CMI</p>
                      </td>
                      <td>
                        <p className="p-lg mb-0 semi-bold blue-text">#123456789</p>
                      </td>
                      <td>
                        <p className="mb-0 grey-text">Administrator</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="d-lg-flex align-items-center justify-content-between">
                <p className="mb-0 mt-3">Showing 1 to 10 of 42 entries</p>
                <nav className="mt-3" aria-label="Page navigation example">
                  <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">
                        Previous
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link pagi-pages" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link pagi-pages" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link pagi-pages" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
