import{u as r,j as o,l as u,g as c,n as l,p as d,f as m,h,q as g,m as p,G as f,Q as x}from"./index-1bc104cd.js";function G(){const a=r();async function n(){try{const e=c(),i=new l,t=(await d(e,i)).user,s=m(h,"users",t.uid);(await g(s)).exists()||await p(s,{name:t.displayName,email:t.email,timestamp:f()}),a("/")}catch{x.error("Couldn`t autorize with Google")}}return o.jsxs("button",{type:"button",onClick:n,className:"flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-red-600 transition duration-200 ease-in-out hover:shadow-lg active:bg-red-800",children:[o.jsx(u,{className:"mr-2 text-2xl bg-white rounded-full"})," Continue with Google"]})}export{G as O};
