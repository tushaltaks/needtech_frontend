import * as Yup from "yup";
export const signupSchema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string().required("Phone number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  reviewterms_conditions: Yup.bool().oneOf(
    [true],
    "You must accept the Terms and Conditions"
  ),
  // reviewNdaSigned: Yup.bool().oneOf([true], "You must digitally sign the NDA"),
});
export const SelectStles = {
  control: (base, state) => ({
    ...base,
    border: "1px solid #ccc",
    borderColor: "none",
    boxShadow: "none",
  }),

  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#5FD1FA" : base.backgroundColor,
    color: "black",
    "&:active": {
      backgroundColor: "#f68713",
    },
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "10px", // Customize dropdown appearance
  }),

  multiValue: (base) => ({
    ...base,
    backgroundColor: "#5FD1FA",
    color: "black",
    borderRadius: "20px",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "black",
    borderRadius: "20px",
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "black",
  }),
};

export const stepOne = Yup.object().shape({
  businessActivity: Yup.string().required("Please select an option"),
});

export const stepTwo = Yup.object({
  industries: Yup.array().min(1, "Please select at least one industry."),
  otherIndustry: Yup.string().max(255, "Description is too long."),
});
export const stepThree = Yup.object({
  aboutBusiness: Yup.string().required("Please Write about buisness"),
});
export const stepFour = Yup.object({
  expectationAboutStartup: Yup.string().required("Expectation is required"),
});

export const stepFive = Yup.object({
  budgetRange: Yup.array().min(1, "Please select at least one budget option"),
});

export const stepSix = Yup.object({
  financingAquirungStartus: Yup.string().required("Please select an option"),
  financingDevelopingStartus: Yup.string().required("Please select an option"),
});

export const stepSeven = Yup.object({
  profileImage: Yup.mixed()
    .required("Profile picture is required")
    .test("fileType", "Only image files are allowed", (value) => {
      return (
        value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
      );
    }),
  aboutyourSelf: Yup.string()
    .min(10, "Tell us at least 10 characters about yourself")
    .required("This field is required"),
});

export const loginSchma = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const forgotPassword = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

export const resetPassword = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const helpSupport = Yup.object().shape({
  name: Yup.string()
    .min(3, "Full Name must be at least 3 characters")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  message: Yup.string()
    .min(10, "Comment must be at least 10 characters")
    .required("Comments are required"),
});

export const ChangePassowrd = Yup.object().shape({
  oldPassword: Yup.string().required("Old Password is required"),
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("New Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const updateProfile = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  mobile: Yup.string().required("Phone is required"),
  businessName: Yup.string().required("Business Name is required"),
  website: Yup.string().required("Website is required"),
  position: Yup.string().required("Position is required"),
  businessType: Yup.string().required("Business Type is required"),
  buisnessCountry: Yup.string().required("Country is required"),
  buisnessState: Yup.string().required("State is required"),
  buisnessCity: Yup.string().required("City is required"),
});

export const bidpopup = Yup.object().shape({
  price: Yup.number()
    .typeError("Price must be a number")
    .min(1, "Price must be at least 1 USD")
    .required("Price is required"),
  confirmBid: Yup.boolean()
    .oneOf([true], "You must confirm your bid")
    .required("Required"),
});

export const innovaOptions = [
  { value: "50-60", label: "50 - 60" },
  { value: "61-70", label: "61 - 70" },
  { value: "71-80", label: "71 - 80" },
  { value: "81-90", label: "81 - 90" },
  { value: "91-100", label: "91 - 100" },
];

export const paymentFormStripe = Yup.object().shape({
  name: Yup.string().required("Cardholder name is required"),
  cardNumber: Yup.boolean().oneOf([true], "Invalid card number"),
  expiry: Yup.boolean().oneOf([true], "Invalid expiry date"),
  cvv: Yup.boolean().oneOf([true], "Invalid CVV"),
});

export const subscrptionPurchase = Yup.object().shape({
  name: Yup.string().required("Cardholder name is required"),

  cardNumber: Yup.boolean().test(
    "is-true",
    "Card number is required",
    (value) => value == true
  ),

  expiry: Yup.boolean().test(
    "is-true",
    "Expiry is required",
    (value) => value == true
  ),

  cvv: Yup.boolean().test(
    "is-true",
    "CVV is required",
    (value) => value == true
  ),
});

export const getFirst500WordsFromHTML = (htmlString) => {
  // 1. Strip all HTML tags to get raw text
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString || "";
  const text = tempDiv.textContent || tempDiv.innerText || "";

  // 2. Split into words and limit
  const words = text.split(/\s+/).slice(0, 100).join(" ");

  return words;
};

export const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
