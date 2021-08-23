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
          <div className="row pb-5">
            <div className="col-12 mt-4 p-0 white-card">
              <div className="cover">
                <img src="images/user-bg.png" alt="" className="img-fluid" />
              </div>
              <div className="py-lg-5 p-4">
                <div className="d-flex mt-3 align-items-center justify-content-between">
                  <h3 className="d-grey-text mb-0">Nabila Azalea</h3>
                  <div className="dropdown dropleft">
                    <button
                      className="transparent-btn"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas grey-text fa-ellipsis-h" />
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mt-3">
                    <p className="p-lg mb-2 blue-text semi-bold">Admin</p>
                    <p className="mb-0 p-lg medium">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={20} viewBox="0 0 16 20">
                        <g id="Location" transform="translate(-430.999 -464.5)">
                          <path
                            id="Vector"
                            d="M439,484.5a1,1,0,0,1-.65-.24c-.752-.653-7.35-6.529-7.35-11.759a8,8,0,1,1,16,0c0,2.807-1.927,5.8-3.544,7.807a29.663,29.663,0,0,1-3.806,3.952A1,1,0,0,1,439,484.5Zm0-18a6,6,0,0,0-6,6c0,3.822,5,8.709,6,9.65a29.8,29.8,0,0,0,3.8-4.319c1.461-2.067,2.2-3.861,2.2-5.331a6,6,0,0,0-6-6Zm0,10h0a4,4,0,1,1,1.531-.3A4.009,4.009,0,0,1,439,476.5Zm0-6a2,2,0,0,0-1.961,1.61A2,2,0,1,0,439,470.5Z"
                            fill="#26b15d"
                          />
                        </g>
                      </svg>
                      Jakarta, Indonesia
                    </p>
                  </div>
                  <div className="col-md-4 mt-3">
                    <p className="p-lg grey-text semi-bold">Phone</p>
                    <p className="mb-0 p-lg medium">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40.001" height={40} viewBox="0 0 40.001 40">
                        <g id="Phone" transform="translate(-720.999 -434.74)">
                          <path
                            id="placeholder"
                            d="M741,434.74h0a19.982,19.982,0,0,1,20,20h0a19.982,19.982,0,0,1-20,20h0a19.982,19.982,0,0,1-20-20h0A19.982,19.982,0,0,1,741,434.74Z"
                            fill="#26b15d"
                          />
                          <g id="Call">
                            <path
                              id="Vector"
                              d="M747.914,464.65h-.383a19,19,0,0,1-16.52-16.46,3,3,0,0,1,1.749-3.149,2.963,2.963,0,0,1,1.22-.261h3.076a3,3,0,0,1,2.955,2.49c.031.235.072.464.121.68a10.434,10.434,0,0,0,.391,1.31,2,2,0,0,1-1,2.48l-.419.28a11.847,11.847,0,0,0,4.659,4.66l.22-.45a2,2,0,0,1,2.48-1,9.44,9.44,0,0,0,1.31.39l.134.032a2.311,2.311,0,0,0,.535.088,3,3,0,0,1,2.47,2.9v3a3,3,0,0,1-1,2.25A3,3,0,0,1,747.914,464.65ZM734.069,446.8a.985.985,0,0,0-.41.089,1,1,0,0,0-.339.25,1.105,1.105,0,0,0-.209.384,1.091,1.091,0,0,0-.04.436,17,17,0,0,0,14.71,14.781,1.093,1.093,0,0,0,.126.007,1.06,1.06,0,0,0,.694-.258,1,1,0,0,0,.34-.751l-.02-3.119a1,1,0,0,0-.79-1c-.28-.041-.552-.092-.81-.15a13.777,13.777,0,0,1-1.58-.46l-.621,1.4a1.042,1.042,0,0,1-1.329.52,14.511,14.511,0,0,1-7-7,1.028,1.028,0,0,1-.093-.381,1,1,0,0,1,.062-.387.974.974,0,0,1,.2-.333.985.985,0,0,1,.316-.23l1.4-.65a11.243,11.243,0,0,1-.46-1.55c-.058-.258-.109-.531-.15-.81a1,1,0,0,0-.976-.79h-3.025Z"
                              fill="#fff"
                            />
                          </g>
                        </g>
                      </svg>
                      +12 345 6789 0
                    </p>
                  </div>
                  <div className="col-md-4 mt-3">
                    <p className="p-lg grey-text semi-bold">Email</p>
                    <p className="mb-0 p-lg medium">
                      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40">
                        <g id="Mail" transform="translate(-1014 -434.74)">
                          <path
                            id="placeholder"
                            d="M1034,434.74h0a19.982,19.982,0,0,1,20,20h0a19.982,19.982,0,0,1-20,20h0a19.982,19.982,0,0,1-20-20h0A19.982,19.982,0,0,1,1034,434.74Z"
                            fill="#26b15d"
                          />
                          <g id="Email">
                            <path
                              id="Vector"
                              d="M1041,462.74h-14a2.981,2.981,0,0,1-2.121-.879,3.024,3.024,0,0,1-.878-2.121v-10a3.024,3.024,0,0,1,.878-2.121,2.984,2.984,0,0,1,2.121-.878h14a3,3,0,0,1,3,3v10a3,3,0,0,1-3,3Zm-15-12.7v9.7a.994.994,0,0,0,.292.707,1.006,1.006,0,0,0,.707.293h14a1,1,0,0,0,1-1v-9.7l-6.164,5.072a3.089,3.089,0,0,1-1.849.621h-.008a2.986,2.986,0,0,1-1.779-.593l-6.2-5.1Zm1.572-1.3,5.863,4.828a.992.992,0,0,0,.564.176h.021a.991.991,0,0,0,.579-.2l5.828-4.8h-12.855Z"
                              fill="#fff"
                            />
                          </g>
                        </g>
                      </svg>
                      jordan@mail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-3 p-4 white-card">
              <div className="d-flex mt-4 align-items-center justify-content-between">
                <div>
                  <h2 className="mb-0">Contacts</h2>
                  <p className="grey-text mb-0">
                    You have <span className="blue-text"> 741</span> contacts
                  </p>
                </div>
                <button className="site-btn circle-btn">
                  <i className="fas fa-plus" />
                </button>
              </div>
              <div className="position-relative search-barr mx-auto mr-md-3 ml-xl-0 mt-1">
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
                <input type="text" className="site-input w-100 py-2 pl-3 gray-bg pr-5" placeholder="Search..." />
              </div>
              <div className="d-flex mt-4 align-items-center justify-content-between">
                <div className="media align-items-center">
                  <img src="images/student-1.png" alt="" className="img-fluid" />
                  <div className="media-body ml-2">
                    <p className="semi-bold mb-0">Samantha William</p>
                    <p className="grey-text mb-0">Class VII A</p>
                  </div>
                </div>
                <button className="site-btn grey-border circle-btn">
                  <i className="far fa-envelope" />
                </button>
              </div>
              <div className="d-flex mt-3 align-items-center justify-content-between">
                <div className="media align-items-center">
                  <img src="images/student-2.png" alt="" className="img-fluid" />
                  <div className="media-body ml-2">
                    <p className="semi-bold mb-0">Tony Soap</p>
                    <p className="grey-text mb-0">Class VII A</p>
                  </div>
                </div>
                <button className="site-btn grey-border circle-btn">
                  <i className="far fa-envelope" />
                </button>
              </div>
              <div className="d-flex mt-3 align-items-center justify-content-between">
                <div className="media align-items-center">
                  <img src="images/student-3.png" alt="" className="img-fluid" />
                  <div className="media-body ml-2">
                    <p className="semi-bold mb-0">Karen Hope</p>
                    <p className="grey-text mb-0">Class VII A</p>
                  </div>
                </div>
                <button className="site-btn grey-border circle-btn">
                  <i className="far fa-envelope" />
                </button>
              </div>
              <div className="d-flex mt-3 align-items-center justify-content-between">
                <div className="media align-items-center">
                  <img src="images/student-4.png" alt="" className="img-fluid" />
                  <div className="media-body ml-2">
                    <p className="semi-bold mb-0">Jordan Nico</p>
                    <p className="grey-text mb-0">Class VII B</p>
                  </div>
                </div>
                <button className="site-btn grey-border circle-btn">
                  <i className="far fa-envelope" />
                </button>
              </div>
              <div className="d-flex mt-3 align-items-center justify-content-between">
                <div className="media align-items-center">
                  <img src="images/student-5.png" alt="" className="img-fluid" />
                  <div className="media-body ml-2">
                    <p className="semi-bold mb-0">Nadila Adja</p>
                    <p className="grey-text mb-0">Class VII B</p>
                  </div>
                </div>
                <button className="site-btn grey-border circle-btn">
                  <i className="far fa-envelope" />
                </button>
              </div>
              <a className="d-block text-center py-2 site-btn light-btn mt-4">View More</a>
            </div>
            <div className="col-lg-6 mt-3 p-4 white-card">
              <h1 className="mt-4">Messages</h1>
              <div className="position-relative search-barr mx-auto mr-md-3 ml-xl-0 mt-1">
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
                <input type="text" className="site-input w-100 py-2 pl-3 gray-bg pr-5" placeholder="Search..." />
              </div>
              <div className="media mt-3 align-items-center">
                <img src="images/student-4.png" alt="" className="img-fluid" />
                <div className="media-body ml-2">
                  <p className="grey-text text-right p-sm mb-0">12:45 PM</p>
                  <p className="semi-bold p-sm mb-0">Samantha William</p>
                  <p className="grey-text p-sm mb-0">Lorem ipsum dolor sit amet...</p>
                </div>
              </div>
              <hr />
              <div className="media align-items-center">
                <img src="images/student-4.png" alt="" className="img-fluid" />
                <div className="media-body ml-2">
                  <p className="grey-text text-right p-sm mb-0">12:45 PM</p>
                  <p className="semi-bold p-sm mb-0">Samantha William</p>
                  <p className="grey-text p-sm mb-0">Lorem ipsum dolor sit amet...</p>
                </div>
              </div>
              <hr />
              <div className="media align-items-center">
                <img src="images/student-4.png" alt="" className="img-fluid" />
                <div className="media-body ml-2">
                  <p className="grey-text text-right p-sm mb-0">12:45 PM</p>
                  <p className="semi-bold p-sm mb-0">Samantha William</p>
                  <p className="grey-text p-sm mb-0">Lorem ipsum dolor sit amet...</p>
                </div>
              </div>
              <hr />
              <div className="media align-items-center">
                <img src="images/student-4.png" alt="" className="img-fluid" />
                <div className="media-body ml-2">
                  <p className="grey-text text-right p-sm mb-0">12:45 PM</p>
                  <p className="semi-bold p-sm mb-0">Samantha William</p>
                  <p className="grey-text p-sm mb-0">Lorem ipsum dolor sit amet...</p>
                </div>
              </div>
              <a className="d-block text-center py-2 site-btn light-btn mt-4">View More</a>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}