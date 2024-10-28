import GenderForm from "./GenderForm";


export default function Modal() {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <div class="text-center my-4">
        <button
          class="btn btn-success btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#createModal"
        >
          Create New Account
        </button>
      </div>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="createModal"
        tabindex="-1"
        aria-labelledby="createModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* Head */}
            <div class="modal-header">
              <div>
                <h2 class="modal-title" id="createModalLabel">
                  Sign Up
                </h2>
                <p class="text-muted fs-7">It's quick and easy.</p>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* Body */}
            <div class="modal-body">
              <form>
                {/* name */}
                <div class="row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                {/* email & pass */}
                <input
                  type="email"
                  class="form-control my-3"
                  placeholder="Mobile number or email address"
                />
                <input
                  type="password"
                  class="form-control my-3"
                  placeholder="New password"
                />
                {/* date of birth */}
                <div class="row my-3">
                  <span class="text-muted fs-7">
                    Data of birth{" "}
                    <i
                      // type="button"
                      class="fas fa-question-circle"
                      data-bs-container="body"
                      data-bs-toggle="popover"
                      data-bs-trigger="hover"
                      data-bs-placement="right"
                      data-bs-content="Right popover"
                    ></i>
                  </span>
                  <div class="col">
                    <select class="form-select">
                      <option value="1">One</option>
                      <option value="2">two</option>
                      <option value="3">three</option>
                    </select>
                  </div>
                  <div class="col">
                    <select class="form-select">
                      <option value="1">One</option>
                      <option value="2">two</option>
                      <option value="3">three</option>
                    </select>
                  </div>
                  <div class="col">
                    <select class="form-select">
                      <option value="1">One</option>
                      <option value="2">two</option>
                      <option value="3">three</option>
                    </select>
                  </div>
                </div>
                {/* gender */}
                <GenderForm/>

                {/* disclaimer */}
                <div>
                  <span class="text-muted fs-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </span>
                </div>

                {/* btn */}
                <div class="text-center mt-3">
                  <button
                    type="button"
                    class="btn btn-success btn-lg"
                    data-bs-dismiss="modal"
                  >
                    Sign Up
                  </button>
                </div>
                
              </form>
            </div>

            {/* Footer */}
            
          </div>
        </div>
      </div>
    </>
  );
}
