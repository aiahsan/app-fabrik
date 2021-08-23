import Head from "next/head";
import LeftBar from "../components/leftBar";
import Topbar from "../components/topbar";

export default function Students(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Administration</title>
        <meta name="description" content="Generated by create next app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LeftBar />
      <div className="main-body main-body-2">
        <Topbar title="Administration" />
        <div className="container-fluid px-lg-5 px-4">
          <div className="row">
            <div className="col-12 mt-4 px-0 white-card">
              <div className="green-header py-3 px-4">
                <h1 className="my-0">Employee's Info</h1>
              </div>
              <div className="px-lg-5 pb-lg-5 p-4">
                <form action="#_">
                  <div className="row">
                    <div className="col-lg-6 mt-3">
                      <label className="medium">First Name*</label>
                      <input type="text" className="site-input w-100 border px-3 py-2 rounded" defaultValue="Maria" />
                    </div>
                    <div className="col-lg-6 mt-3">
                      <label className="medium">Last Name *</label>
                      <input
                        type="text"
                        className="site-input w-100 border px-3 py-2 rounded"
                        defaultValue="Historia"
                      />
                    </div>
                    <div className="col-lg-6 mt-3">
                      <label className="medium">Phone *</label>
                      <input
                        type="number"
                        className="site-input w-100 border px-3 py-2 rounded"
                        defaultValue={123456789}
                      />
                    </div>
                    <div className="col-lg-6 mt-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="mb-0 blue-text semi-bold">Administrator</p>
                        <button type="button" className="transparent-btn mt-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width={63} height={36} viewBox="0 0 63 36">
                            <g id="Group_10545" data-name="Group 10545" transform="translate(-982 -1043)">
                              <rect
                                id="Rectangle_1040"
                                data-name="Rectangle 1040"
                                width={60}
                                height={30}
                                rx={15}
                                transform="translate(982 1046)"
                                fill="#b1b1b1"
                              />
                              <g
                                id="Rectangle_1041"
                                data-name="Rectangle 1041"
                                transform="translate(1009 1043)"
                                fill="#26b15d"
                                stroke="#fff"
                                strokeWidth={1}
                              >
                                <rect width={36} height={36} rx={18} stroke="none" />
                                <rect x="0.5" y="0.5" width={35} height={35} rx="17.5" fill="none" />
                              </g>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-3">
                      <label className="medium">Photo*</label>
                      <label htmlFor="upload-now" className="d-block">
                        <div className="dashed-bg photo-dashed text-center">
                          <p className="grey-text mb-0">
                            Drag and drop or <br /> click here to select file
                          </p>
                        </div>
                      </label>
                      <div className="d-none">
                        <input type="file" id="upload-now" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 mt-4 px-0 white-card">
              <div className="green-header py-3 px-4">
                <h1 className="my-0">Employee's Type</h1>
              </div>
              <div className="px-lg-5 pb-lg-5 p-4">
                <form action="#_">
                  <div className="row">
                    <div className="col-lg-6 mt-3">
                      <label className="medium">Employee's Type *</label>
                      <select className="site-input w-100 border px-3 py-2 rounded">
                        <option>Director</option>
                      </select>
                    </div>
                    <div className="col-lg-6 mt-3">
                      <label className="medium">Admin *</label>
                      <select className="site-input w-100 border px-3 py-2 rounded">
                        <option>None</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 mt-4 px-0 white-card">
              <div className="green-header py-3 px-4">
                <h1 className="my-0">Login's Credentials</h1>
              </div>
              <div className="px-lg-5 pb-lg-5 p-4">
                <form action="#_">
                  <div className="row">
                    <div className="col-lg-6 mt-3">
                      <label className="medium">Company's Code *</label>
                      <input
                        type="number"
                        className="site-input w-100 border px-3 py-2 rounded"
                        defaultValue={267777318}
                      />
                    </div>
                    <div className="col-lg-6 mt-3">
                      <label className="medium">Username *</label>
                      <input
                        type="text"
                        className="site-input w-100 border px-3 py-2 rounded"
                        defaultValue="John Doe"
                      />
                    </div>
                    <div className="col-lg-6 mt-3">
                      <label className="medium">Password *</label>
                      <div className="position-relative">
                        <input
                          type="password"
                          className="site-input w-100 border px-3 py-2 rounded"
                          defaultValue={123456789}
                        />
                        <div className="right-icon">
                          <i className="fas fa-eye" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="d-sm-flex justify-content-end align-items-center py-4">
            <button className="transparent-btn py-2 px-4 mt-3">Save as Draft</button>
            <button className="site-btn px-5 py-2 mt-3">Confirm</button>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
