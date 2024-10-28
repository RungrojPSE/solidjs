import { Component, createSignal } from "solid-js";

const GenderForm: Component = () => {
  const [isGenderSelectVisible, setGenderSelectVisible] = createSignal(false);

  const handleRadioChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setGenderSelectVisible(target.id === "flexRadioDefault3");
  };

  return (
    <>
      {/* Gender */}
      <div class="row my-3">
        <span class="text-muted fs-7">
          Gender
          <i
            class="fas fa-question-circle"
            data-bs-container="body"
            data-bs-toggle="popover"
            data-bs-trigger="hover"
            data-bs-placement="right"
            data-bs-content="Right popover"
          ></i>
        </span>
        <div class="col">
          <div class="border rounded p-2">
            <label class="form-check-label" for="flexRadioDefault1">
              Male
            </label>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={handleRadioChange}
              checked
            />
          </div>
        </div>
        <div class="col">
          <div class="border rounded p-2">
            <label class="form-check-label" for="flexRadioDefault2">
              Female
            </label>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              onChange={handleRadioChange}
            />
          </div>
        </div>
        <div class="col">
          <div class="border rounded p-2">
            <label class="form-check-label" for="flexRadioDefault3">
              Custom
            </label>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
              onChange={handleRadioChange}
            />
          </div>
        </div>
      </div>

      {/* Gender Select */}
      <div classList={{ "d-none": !isGenderSelectVisible() }} id="genderSelect">
        <select class="form-select">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div class="my-3">
          <span class="text-muted fs-7">
            Your pronoun is visible to everyone.
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Gender (optional)"
          />
        </div>
      </div>
    </>
  );
};

export default GenderForm;
