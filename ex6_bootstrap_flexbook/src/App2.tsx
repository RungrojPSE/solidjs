// import Modal from "./components/Modal5";
// import Modal from "./components/UseModal5";

import Modal from "./components/Modal";
import { usePopover } from "./misc/usePopover";


export default function App() {
  usePopover();

  return (
    <main>
      {/* Login */}
      <div class="container d-flex flex-column flex-lg-row justify-content-evenly mt-5 pt-5">
        {/* heading */}
        <div class="text-center text-lg-start mt-lg-5 pt-lg-5">
          <h1 class="text-primary fw-bold fs-0">flexbook</h1>
          <p class="w-75 mx-auto mx-lg-0 fs-4">
            Flexbook helps you connect and share with the people in your life.
          </p>
        </div>

        {/* form */}
        <div style={{ "max-width": "35rem", width: "100%" }}>
          <div class="bg-white shadow rounded p-3 input-group-lg">
            <input
              type="email"
              class="form-control my-3"
              placeholder="Email address or phone number"
            />
            <input
              type="password"
              class="form-control my-3"
              placeholder="Password"
            />
            <a href="#">
              <button class="btn btn-primary w-100 my-3">Log In</button>
            </a>
            <a href="#" class="text-decoration-none text-center">
              <p>Forgotten password?</p>
            </a>
            {/* create form */}
            <hr />
            <Modal/>
          </div>


            {/* tag */}
          <div class="my-5 pb-5 text-center">
            <p class="fw-bold">
              <a href="#" class="text-decoration-none text-dark">Create a Page</a>
              <span class="fw-normal"> for a celebrity, band or business.</span>
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer class="bg-white p-4 text-muted">
        <div class="container">
          {/* language */}
          <div class="d-flex flex-wrap">
            <p class="mx-2 fs-7 mb-0">English (US)</p>
            <p class="mx-2 fs-7 mb-0">English (US)</p>
            <p class="mx-2 fs-7 mb-0">English (US)</p>
            <p class="mx-2 fs-7 mb-0">English (US)</p>
            <p class="mx-2 fs-7 mb-0">English (US)</p>
          </div>
          <hr/>
          {/* actions */}
          <div class="d-flex flex-wrap">
            <p class="mx-2 fs-7 mb-0">Sign Up</p>
            <p class="mx-2 fs-7 mb-0">Login</p>
            <p class="mx-2 fs-7 mb-0">Messenger</p>
            <p class="mx-2 fs-7 mb-0">Flexbook Lite</p>
            <p class="mx-2 fs-7 mb-0">Watch</p>
          </div>
          {/* copy */}
          <div class="mt-4 mx-2">
            <p class="fs-7">Flexbook &copy; 2021</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
