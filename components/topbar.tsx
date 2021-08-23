import React from "react";
export default ({ title }: { title: string }) => {
  return (
    <nav className="navbar pt-3 navbar-expand-xl navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <h3 className="blue-text my-0">{title}</h3>
      <a href="#" className="sidebar-toggle">
        <i className="fas fa-bars" />
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto text-center">
          <li className="nav-item mt-3">
            <a href="#_">
              <svg xmlns="http://www.w3.org/2000/svg" width="32.262" height="35.5" viewBox="0 0 32.262 35.5">
                <g id="Group_10605" data-name="Group 10605" transform="translate(-1574.738 -60)">
                  <g id="bell">
                    <path
                      id="Vector"
                      d="M1587,95.5a4.628,4.628,0,0,1-4.622-4.623v-.048h-3.647a4.026,4.026,0,0,1-1.1-7.889V73.868a9.368,9.368,0,1,1,18.735,0v9.071a4.062,4.062,0,0,1,2.072,1.409,3.911,3.911,0,0,1,.823,2.411,4.083,4.083,0,0,1-1.171,2.89,3.937,3.937,0,0,1-2.823,1.18h-3.645v.048A4.629,4.629,0,0,1,1587,95.5Zm-1.623-4.671v.048a1.623,1.623,0,1,0,3.246,0v-.048Zm-6.646-5.062a.993.993,0,0,0-.992.992,1.011,1.011,0,0,0,.992,1.071h16.538a.994.994,0,0,0,.994-.992,1.012,1.012,0,0,0-.994-1.071ZM1587,67.5a6.374,6.374,0,0,0-6.367,6.368v8.9h12.735v-8.9A6.375,6.375,0,0,0,1587,67.5Z"
                      fill="#a098ae"
                    />
                  </g>
                  <circle
                    id="Ellipse_7"
                    data-name="Ellipse 7"
                    cx={4}
                    cy={4}
                    r={4}
                    transform="translate(1599 60)"
                    fill="#26b15d"
                  />
                </g>
              </svg>
            </a>
          </li>
          <li className="nav-item mx-3 mt-4">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="26.833" height="26.666" viewBox="0 0 26.833 26.666">
                <g id="gear" transform="translate(-1653.583 -66.667)">
                  <path
                    id="Vector"
                    d="M1670.737,93.333h-7.475l-.846-3.8a10.58,10.58,0,0,1-1.383-.8L1657.32,89.9l-3.738-6.474,2.816-2.578a5.538,5.538,0,0,1,0-1.7l-2.816-2.579,3.738-6.474,3.713,1.169a10.678,10.678,0,0,1,1.383-.8l.846-3.8h7.475l.846,3.8a10.687,10.687,0,0,1,1.383.8l3.713-1.169,3.737,6.474-2.815,2.579c.006.079.015.159.023.244V79.4a5.606,5.606,0,0,1,.04.6,5.894,5.894,0,0,1-.04.593c-.009.087-.018.173-.025.258l2.815,2.578-3.737,6.474-3.713-1.169a10.568,10.568,0,0,1-1.383.8l-.846,3.8Zm-9.287-7.526h0l.557.442a7.99,7.99,0,0,0,2.076,1.2l.661.26.659,2.958h3.193l.659-2.958.662-.26a7.96,7.96,0,0,0,2.074-1.2l.557-.443,2.891.909,1.6-2.766L1674.8,81.9l.107-.7a8.441,8.441,0,0,0,0-2.4l-.107-.7,2.235-2.05-1.6-2.766-2.891.909-.557-.443a8.009,8.009,0,0,0-2.074-1.2l-.662-.26-.659-2.958H1665.4l-.659,2.958-.661.26a8.042,8.042,0,0,0-2.076,1.2l-.557.443-2.891-.909-1.6,2.766,2.235,2.05-.107.7a7.953,7.953,0,0,0,0,2.4l.107.7-2.235,2.049,1.6,2.766,2.89-.909Zm5.55-.477a5.33,5.33,0,1,1,5.33-5.33A5.336,5.336,0,0,1,1667,85.33Zm0-8a2.67,2.67,0,1,0,2.67,2.67A2.673,2.673,0,0,0,1667,77.33Z"
                    fill="#a098ae"
                  />
                </g>
              </svg>
            </a>
          </li>
          <li className="nav-item mx-3 mt-2">
            <div className="d-flex justify-content-center align-items-center">
              <div className="mr-3">
                <p className="semi-bold mb-1">Nabila A.</p>
                <p className="grey-text mb-0">Admin</p>
              </div>
              <img src="images/user.png" alt="" className="img-fluid" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
