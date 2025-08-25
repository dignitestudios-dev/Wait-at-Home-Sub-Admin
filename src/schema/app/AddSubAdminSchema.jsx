import * as Yup from "yup";

export const AddSubAdminSchema = Yup.object({
  name: Yup.string()
    .required("Name is required.")
    .test(
      "not-empty-after-trim",
      "Name cannot be empty or just spaces.",
      (value) => value?.trim().length > 0
    )
    .test("no-leading-space", "Name cannot start with a space.", (value) =>
      value ? !value.startsWith(" ") : true
    )
    .test(
      "no-multiple-spaces",
      "Name cannot contain multiple spaces.",
      (value) => (value ? !/ {2,}/.test(value) : true)
    )
    .test("no-numbers", "First name cannot contain numbers.", (value) =>
      value ? !/\d/.test(value) : true
    )
    .test(
      "first-letter-uppercase",
      "First letter must be uppercase.",
      (value) => (value ? /^[A-Z]/.test(value.trim()) : true)
    ),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email"),
  phone: Yup.string()
    .matches(/^\d{10,15}$/, "Phone number must be between 10 to 15 digits")
    .required("Phone number is required"),
  password: Yup.string().matches(
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
    "Password must be at least 8 characters, include 1 uppercase letter, 1 number, and 1 special character"
  ),
});
