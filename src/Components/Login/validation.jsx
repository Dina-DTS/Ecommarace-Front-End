import * as Yup from "yup"



 export const validationSchema=Yup.object().shape({
       email: Yup.string()
         .required("Email is required")
         .email("Invalid email").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "email must belong to example.com"),
       password: Yup.string()
         .required("Password is required")
         .min(8, "Password must be at least 8 characters")
         .max(32, "Password cannot exceed 32 characters")
         .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
         .matches(/[a-z]/, "Password must contain at least one lowercase letter")
         .matches(/[0-9]/, "Password must contain at least one digit")
         .matches(/[@$!%*?&]/, "Password must contain at least one special character"),
   })
  
  