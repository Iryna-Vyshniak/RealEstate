import{u as r,j as o,F as u,g as c,v as l,w as d,p as m,e as g,y as h,n as p,G as f,Q as w}from"./index-98011ea5.js";function y(){const a=r();async function n(){try{const t=c(),i=new l,e=(await d(t,i)).user,s=m(g,"users",e.uid);(await h(s)).exists()||await p(s,{name:e.displayName,email:e.email,timestamp:f()}),a("/")}catch{w.error("Couldn`t autorize with Google")}}return o.jsxs("button",{type:"button",onClick:n,className:"flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-red-600 transition duration-200 ease-in-out hover:shadow-lg active:bg-red-800",children:[o.jsx(u,{className:"mr-2 text-2xl bg-white rounded-full"})," Continue with Google"]})}export{y as O};
