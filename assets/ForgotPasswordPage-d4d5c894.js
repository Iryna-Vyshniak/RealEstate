import{r as d,j as e,L as r,g as m,e as x,Q as i}from"./index-af4705cc.js";import{O as c}from"./OAuth-2bf087f0.js";import"./iconBase-27357672.js";const b=()=>{const[s,l]=d.useState("");function o(t){l(t.target.value)}async function n(t){t.preventDefault();try{const a=m();await x(a,s),i.success("Email was sent")}catch{i.error("Could not send reset password")}}return e.jsxs("section",{children:[e.jsx("h1",{className:"text-3xl text-center mt-6 fot-bold",children:"Forgot Password"}),e.jsxs("div",{className:"flex justify-center items-center flex-wrap px-6 py-12 max-w-6xl mx-auto ",children:[e.jsx("div",{className:"md:w-[67%] lg:w-[50%] mb-12 md:mb-6",children:e.jsx("img",{src:"https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",alt:"key",className:"w-full rounded-2xl"})}),e.jsx("div",{className:"w-full md:w-[67%] lg:w-[40%] lg:ml-20",children:e.jsxs("form",{onSubmit:n,children:[e.jsx("input",{type:"email",id:"email",value:s,onChange:o,placeholder:"Email address",className:"mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"}),e.jsxs("div",{className:"flex justify-between whitespace-nowrap text-sm sm:text-lg",children:[e.jsxs("p",{className:"mb-6",children:["Don`t have an account?",e.jsx(r,{to:"/sign-up",className:"ml-1 text-red-700 hover:text-red-600 transition-duration-200 ease-in-out",children:"Register"})]}),e.jsx("p",{children:e.jsx(r,{to:"/sign-in",className:"text-blue-700 hover:text-blue-500 transition-duration-200 ease-in-out",children:"Sign in instead"})})]}),e.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800",children:"Send reset password"}),e.jsx("div",{className:"flex  items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300",children:e.jsx("p",{className:"mx-4 text-center font-semibold",children:"OR"})}),e.jsx(c,{})]})})]})]})};export{b as default};
