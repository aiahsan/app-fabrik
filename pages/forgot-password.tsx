import Head from "next/head";
import LeftBar from "../components/leftBar";
import Topbar from "../components/topbar";

export default function Students(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Finance</title>
        <meta name="description" content="Generated by create next app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="logo py-4 px-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <img src="images/guest-concierge.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <section className="login">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-8 mx-auto">
                <div className="login-inner p-md-5 p-4">
                  <div className="text-center">
                    <h1>Forgot Password</h1>
                    <p className="l-grey-text">
                      It happens ;) Enter your email address and we’ll send you a link to reset your password.
                    </p>
                  </div>
                  <form action="login.php">
                    <label className="mt-3">Email</label>
                    <input type="email" className="site-input py-2 px-3 w-100" />
                    <button type="submit" className="site-btn mt-4 px-4 py-2 w-100">
                      Send me the link
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
