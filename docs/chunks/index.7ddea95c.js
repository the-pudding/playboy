import{s as t,y as e,m as r,d as i,l as a,b as o,P as n}from"../index.4ee8d9a8.js";import{O as s,P as l,T as d,$ as u,a3 as c,a4 as m,a0 as $,V as p,Q as f}from"./data.817ed7ca.js";import{m as y,V as h}from"./VizHeading.2566a9fc.js";import{b as g}from"./util.a1e614b1.js";import{l as v}from"./line.1955386e.js";var b=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var i=Array(t),a=0;for(e=0;e<r;e++)for(var o=arguments[e],n=0,s=o.length;n<s;n++,a++)i[a]=o[n];return i};function k(t,e,r){var i=t.length-e.length,a=Array.from(e);if(0===i)return t.apply(void 0,a);if(1===i){var o=function(e){return t.apply(void 0,b([e],a))};return(r||t.lazy)&&(o.lazy=r||t.lazy,o.lazyArgs=e),o}throw new Error("Wrong number of arguments")}function w(){return k(x(!1),arguments)}var x=function(t){return function(e,r){var i={};return e.forEach((function(a,o){var n=t?r(a,o,e):r(a),s=String(n);i[s]||(i[s]=[]),i[s].push(a)})),i}};function j({data:i,line:a,stroke:o,opacity:n=1}){const l=t(null);return e((()=>{l.current&&s(l.current).transition().duration(750).attr("opacity",n)}),[n]),r`<g ref=${l}><path style=${{stroke:o,fill:"none",strokeWidth:3,opacity:.7}} d=${a(i.left)}/><path style=${{stroke:o,fill:"none",strokeWidth:3,opacity:.7}} d=${a(i.right)}/></g>`}function z({decades:t,chosen:e}){const{chartHeight:i,chartWidth:a}=l(),o=function(t,e){let r;if(void 0===e)for(const i of t)null!=i&&(r<i||void 0===r&&i>=i)&&(r=i);else{let i=-1;for(let a of t)null!=(a=e(a,++i,t))&&(r<a||void 0===r&&a>=a)&&(r=a)}return r}(Object.keys(t).flatMap((e=>[...t[e]]))),n=d().range([0,a]).domain([-o/2,o/2]),s=d().domain([0,89]).range([0,i]),$={top:0,bust:18,waist:39,hips:74,bottom:89},p=u().range(c[9]).domain(Object.keys(t).concat("")),f=v().x((t=>n(t[1]))).y((t=>s($[t[0].toString()]))).curve(m),y=1/2.3;return r`<${j} line=${f} stroke=${"yellow"} data=${{left:[["top",-35*y],["bust",-39*y],["waist",-18*y],["hips",-33*y],["bottom",-33*y]],right:[["top",35*y],["bust",39*y],["waist",18*y],["hips",33*y],["bottom",33*y]]}}/>${Object.keys(t).map(((i,a)=>r`<${j} opacity=${e&&i===e?1:e&&i!==e?0:1} key=${i} line=${f} stroke=${p(i)} data=${{left:[["top",-(t[i][0]-4)*y],["bust",-t[i][0]*y],["waist",-t[i][1]*y],["hips",-t[i][2]*y],["bottom",-t[i][2]*y]],right:[["top",(t[i][0]-4)*y],["bust",t[i][0]*y],["waist",t[i][1]*y],["hips",t[i][2]*y],["bottom",t[i][2]*y]]}}/>`))}<${j} line=${f} stroke=${"red"} data=${{left:[["top",-32*y],["bust",-36*y],["waist",-24*y],["hips",-36*y],["bottom",-36*y]],right:[["top",32*y],["bust",36*y],["waist",24*y],["hips",36*y],["bottom",36*y]]}}/>`}function O(){const o=i((()=>{const t=w(p,(t=>`${t.date.getFullYear().toString().slice(0,3)}0s`));return Object.keys(t).reduce(((e,r)=>({...e,[r]:[y(t[r],(t=>g(t.bustCM))),y(t[r],(t=>g(t.waistCM))),y(t[r],(t=>g(t.hipsCM)))]})),{})}),[]),n=u().range(c[8]).domain(Object.keys(o)),[l,d]=a(null),m=t(null);return e((()=>{m.current&&s(m.current).selectAll("div[data-key]").transition().duration(750).style("background",(function(){const t=this.attributes["data-key"].value;return l?l===t?n(t):"transparent":n(t)}))}),[l]),r`<div style=${{display:"flex",position:"relative",justifyContent:"center",maxWidth:"600px",margin:"auto"}}><${$} aspectRatio=${1} margin=${30}><${z} decades=${o} chosen=${l}/><//><div style=${{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}} ref=${m}>${Object.keys(o).map((t=>r`<div key=${t} style=${{display:"flex",marginBottom:"0.25rem",fontSize:"0.8rem",cursor:"pointer",alignItems:"center"}} onClick=${()=>{d(t===l?null:t)}}><div data-key=${t} style=${{height:"1rem",width:"1rem",border:`2px solid ${n(t)}`,marginRight:"0.25rem"}}/> ${t}</div>`))}<div style=${{display:"flex",marginBottom:"0.25rem",fontSize:"0.8rem",alignItems:"center"}}><div style=${{height:"1rem",width:"1rem",background:"red",border:"2px solid red",marginRight:"0.25rem"}}/>  “Ideal” </div><div style=${{display:"flex",marginBottom:"0.25rem",fontSize:"0.8rem",alignItems:"center"}}><div style=${{height:"1rem",width:"1rem",background:"yellow",border:"2px solid yellow",marginRight:"0.25rem"}}/>  Barbie doll </div></div></div>`}function S({data:t}){return r`<${o}>${t.map(((t,e)=>"title"===t.type?r`<h2 key=${e}>${t.value}</h2>`:"text"===t.type?r`<${n} key=${e} data=${[t]}/>`:"quote"===t.type?r`<${f} key=${e} data=${t}/>`:"viz"===t.type?r`<div><${h} data=${t.value}/><${O}/></div>`:void 0))}<//>`}!function(t){t.indexed=function(){return k(x(!0),arguments)}}(w||(w={}));export default S;