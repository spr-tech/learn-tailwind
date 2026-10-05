// import { useFormik } from "formik";

// const Formk = () => {
//   const formikForm = useFormik({
//     initialValues: {
//       email: "",
//     },
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });

//   return (
//     <div >
//       <form action="" onSubmit={formikForm.handleSubmit}>
//         <label htmlFor="">Enter email</label>
//         <input
//           type="text"
//           name="email"
//           value={formikForm.values.email}
//           className="width-full border-2 border-black"
//         />
//       </form>
//     </div>
//   );
// };

// export default Formk;


// import { useFormik, type FormikErrors } from "formik";

// const App = () => {
//   return (
//     <div>
//       {/* <Formk /> */}
//       <Formk2 />
//     </div>
//   );
// };

// export default App;

// // const Formk = () => {
// //   const formikForm = useFormik({
// //     initialValues: {
// //       email: "",
// //       password: "",
// //       firstName: "",
// //     },
// //     onSubmit: (values) => {
// //       console.log(values);
// //     },
// //   });

// //   return (
// //     <div>
// //       <form onSubmit={formikForm.handleSubmit} className="flex flex-col gap-3">
// //         <div>
// //           <label htmlFor="email">Enter email</label>
// //           <input
// //             id="email"
// //             type="text"
// //             name="email"
// //             value={formikForm.values.email}
// //             className="w-full border-2 border-black"
// //             onChange={formikForm.handleChange}
// //           />
// //         </div>

// //         <div>
// //           <label htmlFor="pass">Enter email</label>
// //           <input
// //             id="pass"
// //             type="password"
// //             name="password"
// //             value={formikForm.values.password}
// //             className="w-full border-2 border-black"
// //             onChange={formikForm.handleChange}
// //           />
// //         </div>

// //         <div>
// //           <label htmlFor="firstname">Enter email</label>
// //           <input
// //             id="firstname"
// //             type="text"
// //             name="firstName"
// //             value={formikForm.values.firstName}
// //             className="w-full border-2 border-black"
// //             onChange={formikForm.handleChange}
// //           />
// //         </div>

// //         <button type="submit"> submit form</button>
// //       </form>
// //     </div>
// //   );
// // };

// // type errorProps = {
// //   email: string;
// //   password: string;
// //   firstName: string;
// // };

// const Formk2 = () => {
//   const {
//     values,
//     errors,
//     handleChange,
//     handleSubmit,
//     handleBlur,
//     touched,
//     isSubmitting,
//   } = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//       firstName: "",
//     },
//     validate: (values) => {
//       const newErrors: FormikErrors<typeof values> = {};

//       if (!values.email.trim()) {
//         newErrors.email = "Email is required";
//       } else if (!values.email.includes("@")) {
//         newErrors.email = "Enter a valid email";
//       }

//       if (values.password.trim().length < 8) {
//         newErrors.password = "Password must be atleast 8 characters";
//       }

//       if (!values.firstName.trim()) {
//         newErrors.firstName = "Name is required";
//       }

//       return newErrors;
//     },

//     onSubmit: async (values) => {
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       // console.log(values);

//       throw new Error("Network failed");
//     },
//   });

//   return (
//     <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-sm bg-white border border-slate-200 rounded-xl p-6 flex flex-col gap-5"
//       >
//         <h2 className="text-lg font-semibold text-slate-900">Create account</h2>

//         <div className="flex flex-col gap-1.5">
//           <label
//             htmlFor="firstName"
//             className="text-sm font-medium text-slate-700"
//           >
//             First name
//           </label>
//           <input
//             id="firstName"
//             type="text"
//             name="firstName"
//             value={values.firstName}
//             onChange={handleChange}
//             className="w-full px-3 py-2 text-base border border-slate-300 rounded-md focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
//             onBlur={handleBlur}
//           />

//           {touched.firstName && errors.firstName && (
//             <p className="text-red-500">{errors.firstName}</p>
//           )}
//         </div>

//         <div className="flex flex-col gap-1.5">
//           <label htmlFor="email" className="text-sm font-medium text-slate-700">
//             Email address
//           </label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             value={values.email}
//             onChange={handleChange}
//             className="w-full px-3 py-2 text-base border border-slate-300 rounded-md focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
//             onBlur={handleBlur}
//           />
//           {touched.email && errors.email && (
//             <p className="text-red-500">{errors.email}</p>
//           )}
//         </div>

//         <div className="flex flex-col gap-1.5">
//           <label
//             htmlFor="password"
//             className="text-sm font-medium text-slate-700"
//           >
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             name="password"
//             value={values.password}
//             onChange={handleChange}
//             className="w-full px-3 py-2 text-base border border-slate-300 rounded-md focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
//             onBlur={handleBlur}
//           />
//           {touched.password && errors.password && (
//             <p className="text-red-500">{errors.password}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="mt-1 py-2 px-4 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? "Submitting.." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// };

