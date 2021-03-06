import Head from "next/head";
import LeftBar from "../components/leftBar";
import Topbar from "../components/topbar";

export default function Students(): JSX.Element {
  return (
    <div>
      <Head>
        <title>User</title>
        <meta name="description" content="Generated by create next app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LeftBar />
      <div className="main-body main-body-2">
        <Topbar title="User" />
        <div className="container-fluid px-lg-5 px-4">
          <div className="row pb-5">
            <div className="col-lg-4 chat-left border-right white-card p-4">
              <h1>Messages</h1>
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
              <p className="p-lg my-2 grey-text semi-bold">Groups</p>
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
              <p className="p-lg mb-2 grey-text semi-bold">Chats</p>
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
            <div className="col-lg-8 d-flex flex-column chat-right position-relative border-right white-card p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="media align-items-center">
                  <img src="images/chat.png" alt="" className="img-fluid" />
                  <div className="media-body ml-2">
                    <p className="p-lg bold mb-0">Samantha WIlliam</p>
                    <p className="mb-0 grey-text">
                      <i className="fas fa-circle blue-text" /> Online
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <a href="#_">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31.336" height={18} viewBox="0 0 31.336 18">
                      <g id="Video" transform="translate(-1734.33 -212)">
                        <g id="_43-Video" data-name="43-Video">
                          <rect
                            id="Vector"
                            width="21.33"
                            height={16}
                            rx="2.67"
                            transform="translate(1735.33 213)"
                            fill="none"
                            stroke="#a098ae"
                            strokeWidth={2}
                          />
                          <path
                            id="Vector-2"
                            data-name="Vector"
                            d="M1764.666,214.333v13.333l-8-6.666Z"
                            fill="none"
                            stroke="#a098ae"
                            strokeWidth={2}
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                  <div className="dropdown ml-3 dropleft">
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
              </div>
              <hr className="w-100" />
              <div>
                <p className="chat-receiver d-inline-block mb-0">Hello Nabila!</p>
              </div>
              <div className="mt-3">
                <p className="chat-receiver chat-receiver-2 d-inline-block mb-0">
                  Can i see your history lesson homework?{" "}
                </p>
              </div>
              <p className="p-sm mb-0 mt-2 grey-text">12:45 PM</p>
              <div className="text-right">
                <div>
                  <p className="chat-sender d-inline-block mb-0">Hello Samantha!</p>
                </div>
                <div className="mt-3">
                  <p className="chat-sender chat-sender-2 d-inline-block mb-0">
                    I???m not finished yet, why don???t work together to finish homework?
                  </p>
                </div>
                <p className="p-sm mb-0 mt-2 grey-text">12:45 PM</p>
              </div>
              <div className="chat-bottom">
                <hr className="w-100" />
                <div className="position-relative">
                  <input
                    type="text"
                    placeholder="Write your message..."
                    className="site-input py-3 pl-3 pr-5 border w-100"
                  />
                  <div className="right-icon">
                    <div className="d-flex align-items-center">
                      <button className="transparent-btn mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24.864"
                          height="27.375"
                          viewBox="0 0 24.864 27.375"
                        >
                          <g id="Attachment" transform="translate(-1643.739 -1071.824)">
                            <path
                              id="Layer_5"
                              data-name="Layer 5"
                              d="M1650.244,1099.2a6.72,6.72,0,0,1-3.614-1.057,6.316,6.316,0,0,1-2.4-2.8,6.022,6.022,0,0,1-.371-3.606,6.18,6.18,0,0,1,1.778-3.2l11.057-10.612a3.924,3.924,0,0,1,1.271-.815,4.075,4.075,0,0,1,3,0,3.926,3.926,0,0,1,1.271.815,3.74,3.74,0,0,1,.849,1.219,3.615,3.615,0,0,1,0,2.875,3.743,3.743,0,0,1-.849,1.219l-11.07,10.6a1.312,1.312,0,0,1-.422.312,1.356,1.356,0,0,1-1.044.039,1.312,1.312,0,0,1-.446-.28,1.25,1.25,0,0,1-.292-.428,1.206,1.206,0,0,1,.04-1,1.267,1.267,0,0,1,.325-.405l11.057-10.612a1.217,1.217,0,0,0,.312-.862,1.23,1.23,0,0,0-.381-.836,1.345,1.345,0,0,0-1.77-.065l-11.07,10.6a3.648,3.648,0,0,0,0,5.312,4.038,4.038,0,0,0,5.541,0L1664.078,1085a6.069,6.069,0,0,0-.08-8.762,6.723,6.723,0,0,0-9.139-.076l-6.454,6.25a1.344,1.344,0,0,1-1.838,0,1.242,1.242,0,0,1-.285-.407,1.2,1.2,0,0,1,0-.961,1.241,1.241,0,0,1,.285-.407l6.454-6.25a9.409,9.409,0,0,1,12.909,0,8.5,8.5,0,0,1,0,12.375l-11.07,10.612a6.534,6.534,0,0,1-2.118,1.353,6.756,6.756,0,0,1-2.5.472Z"
                              fill="#a098ae"
                            />
                          </g>
                        </svg>
                      </button>
                      <button className="site-btn px-4 py-2">
                        Send
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26.063"
                          height="21.312"
                          viewBox="0 0 26.063 21.312"
                        >
                          <path
                            id="Vector"
                            d="M1774.524,1095.656v0l.437-1.873L1776.9,1085l-1.939-8.78-.437-1.876,1.781.718,22,9,2.281.938-2.282.938-22,9-1.779.718Zm4.189-9.656-1.407,6.344,15.531-6.344h-14.125Zm-1.407-8.344h0l1.407,6.344h14.125l-15.531-6.344Z"
                            transform="translate(-1774.524 -1074.344)"
                            fill="#fff"
                          />
                        </svg>
                      </button>
                    </div>
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
