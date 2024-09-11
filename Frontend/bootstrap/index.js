const MAX_NAME_LEN = 5;
const elements = document.querySelectorAll(".form-control, .form-select");
const descElements = document.querySelectorAll(".desc");

document.getElementById("psd-form").addEventListener("submit", handleSubmit);

// form submit event handler
function handleSubmit(event) {
  event.preventDefault();

  // For resetting the elements with default style if the valid data is entered
  elements.forEach((element) => {
    element.classList.remove("border-danger");
  });
  descElements.forEach((descElement) => {
    descElement.classList.remove("text-danger");
    descElement.classList.add("text-secondary");
    descElement.textContent = descElement.dataset.label;
  });

  // Validate first and lastname
  const nameResults = validateName();
  nameResults.forEach((nameResult) => {
    if (!nameResult.status) {
      const element = document.getElementById(nameResult.className);
      const descElement = document.getElementById(
        `${nameResult.className}-desc`
      );

      element.classList.add("border-danger");
      descElement.textContent = nameResult.message;
      descElement.classList.add("text-danger");
      element.focus();
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  //validate Mobile number
  const mobileNumberResult = validateMobileNumber();
  if (!mobileNumberResult.status) {
    const element = document.getElementById(mobileNumberResult.className);
    const descElement = document.getElementById(
      `${mobileNumberResult.className}-desc`
    );

    element.classList.add("border-danger");
    descElement.textContent = mobileNumberResult.message;
    descElement.classList.add("text-danger");
    element.focus();
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  // validate email
  const emailResult = validateEmail();
  if (!emailResult.status) {
    const element = document.getElementById(emailResult.className);
    const descElement = document.getElementById(
      `${emailResult.className}-desc`
    );

    element.classList.add("border-danger");
    descElement.textContent = emailResult.message;
    descElement.classList.add("text-danger");
    element.focus();
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  // check for address
  const addrResult = validateAddress();
  if (!addrResult.status) {
    addrResult.details.forEach((field, index) => {
      let isFocusSet = false;
      if (!field.status) {
        const element = document.getElementById(field.className);
        const descElement = document.getElementById(`${field.className}-desc`);

        element.classList.add("border-danger");
        descElement.textContent = field.message;
        descElement.classList.add("text-danger");
        // if (!field.status && !isFocusSet) {
        //   element.focus();
        //   element.scrollIntoView({ behavior: "smooth", block: "center" });
        //   isFocusSet = true;
        // }
      }
    });
  }
  // check for gender
  const genderResult = validateGender();
  if (!genderResult.status) {
    const element = document.getElementById(genderResult.className);
    const descElement = document.getElementById("gender-desc");

    element.classList.add("border-danger");
    descElement.textContent = genderResult.message;
    descElement.classList.add("text-danger");
  }
  // validate date of birth
  const dobResult = validateDOB();
  if (!dobResult.status) {
    const element = document.getElementById(dobResult.className);
    const descElement = document.getElementById(`${dobResult.className}-desc`);

    element.classList.add("border-danger");
    descElement.textContent = dobResult.message;
    descElement.classList.add("text-danger");
  }

  // validate starting date
  const startingDateResult = validateStartDate();
  if (!startingDateResult.status) {
    const element = document.getElementById(startingDateResult.className);
    const descElement = document.getElementById(
      `${startingDateResult.className}-desc`
    );
    element.classList.add("border-danger");
    descElement.textContent = startingDateResult.message;
    descElement.classList.add("text-danger");
  }
  // validate title

  const titleResult = validateTitle();
  if (!titleResult.status) {
    const element = document.getElementById(titleResult.className);
    const descElement = document.getElementById(
      `${titleResult.className}-desc`
    );
    element.classList.add("border-danger");
    descElement.textContent = titleResult.message;
    descElement.classList.add("text-danger");
  }

  return true;
}

function validateName() {
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;

  // check for length
  if (firstname.length >= MAX_NAME_LEN && lastname.length >= MAX_NAME_LEN) {
    return [];
  } else {
    // const whichName =
    //   firstname.length < MAX_NAME_LEN ? "firstname" : "lastname";
    const whichNames =
      firstname.length < MAX_NAME_LEN && lastname.length < MAX_NAME_LEN
        ? ["firstname", "lastname"]
        : firstname.length < MAX_NAME_LEN
        ? ["firstname"]
        : ["lastname"];
    let w = whichNames.map((whichName) => ({
      status: false,
      className: whichName,
      message: `${whichName} should contain atleast ${MAX_NAME_LEN} characters`,
    }));
    return w;
    // return {
    //   status: false,
    //   className: whichName,
    //   message: `${whichName} should contain atleast ${MAX_NAME_LEN} characters`,
    // };
  }
}

function validateMobileNumber() {
  const mobileNumber = document.getElementById("mobile-number").value;
  if (Number(mobileNumber) && mobileNumber.length === 10) {
    return { status: true };
  } else {
    return {
      status: false,
      className: "mobile-number",
      message: `Invalid Mobile Number`,
    };
  }
}

function validateEmail() {
  const email = document.getElementById("email").value;
  const regex = /[\w]+\@[\w]+\.[\w]+/;
  if (regex.test(email)) {
    return { status: true };
  } else {
    return {
      status: false,
      className: "email",
      message: "Please enter a valid email address",
    };
  }
}

function validateAddress() {
  const streetAddress = document.getElementById("street-addr-1").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;
  const zipCode = document.getElementById("zipcode").value;

  if (
    streetAddress.trim() &&
    city.trim() &&
    state.trim() &&
    Boolean(Number(zipCode) && zipCode.trim().length === 6) &&
    country !== "0"
  ) {
    return { status: true };
  } else {
    let result = {
      status: false,
      details: [
        {
          status: streetAddress.trim().length !== 0,
          className: "street-addr-1",
          message: "The address should not be empty",
        },
        {
          status: city.trim().length !== 0,
          className: "city",
          message: "The city should not be empty",
        },
        {
          status: state.trim().length !== 0,
          className: "state",
          message: "The State should not be empty",
        },
        {
          status: Boolean(Number(zipCode) && zipCode.trim().length === 6),
          className: "zipcode",
          message: "The zipcode should not be empty and be valid",
        },
        {
          status: country !== "0",
          className: "country",
          message: "Please select a Country",
        },
      ],
    };
    return result;
  }
}

function validateGender() {
  const gender = document.getElementById("gender").value;

  if (gender === "Male" || gender === "Female" || gender === "Custom") {
    return { status: true };
  } else {
    return {
      status: false,
      className: "gender",
      message: "Please enter a valid gender Male, Female or Custom",
    };
  }
}

function validateDOB() {
  const dob = document.getElementById("birth-date").value;
  if (!dob) {
    return {
      status: false,
      className: "birth-date",
      message: "Please enter a valid date of birth",
    };
  } else return { status: true };
}

function validateStartDate() {
  const dob = document.getElementById("start-date").value;
  if (!dob) {
    return {
      status: false,
      className: "start-date",
      message: "Please enter a valid start date",
    };
  } else return { status: true };
}

function validateTitle() {
  const title = document.getElementById("title").value;
  const titles = [
    "Backend Developer",
    "FullStack Developer",
    "Frontend Developer",
  ];

  if (titles.includes(title)) {
    return { status: true };
  } else {
    return {
      status: false,
      className: "title",
      message: "Enter a valid title",
    };
  }
}

// for filling the dummy data. just for development and not for production
const obj = {
  firstname: "Dinesh",
  lastname: "Moorthy",
  "mobile-number": 9876543210,
  email: "johndoe@example.com",
  "street-addr-1": "177A",
  city: "NYC",
  state: "NY",
  zipcode: "600028",
  gender: "Male",
};

function fillFormWithData() {
  for (let key in obj) {
    if (!document.getElementById(key)) console.log(key);
    document.getElementById(key).value = obj[key];
  }
}

// fillFormWithData();
