import{m as t,b as a,P as e}from"../index.3785ab78.js";import{a0 as i,P as r,T as n,N as $,U as o,V as s,Q as c}from"./data.4670e6e8.js";import{m as d,V as m}from"./VizHeading.2fcb779b.js";import{a as f,b as l,r as p}from"./band.c8efed77.js";const g=f(s,(t=>t.year)).map((([t,a])=>[t,d(a,(t=>t.avgDist))]));function h(){const a=r(),e=l().domain(g.map((t=>t[0])).sort(((t,a)=>t-a)).map(String)).range([0,a.chartWidth]).padding(.2),i=n().domain([0,1]).range([a.chartHeight,0]).nice();return t`<${$} scale=${e} orientation="bottom" transform=${`translate(0,${a.chartHeight})`} tickValues=${p(1955,2021,5).map(String)}/><${$} scale=${i} orientation="left" tickValues=${p(0,1.1,.2)}><text x=${0} y=${0} textAnchor="start" dominantBaseline="hanging" fill="currentColor" dx=${4}> Average difference from "Average" </text><//><${$} scale=${i} orientation="left" tickFormat=${t=>""} tickSizeInner=${-a.chartWidth} opacity=${.2}/>${g.map((([r,n])=>t`<rect key=${r} x=${e(r.toString())} y=${i(n)} width=${e.bandwidth()} height=${a.chartHeight-i(n)} fill=${o[0]}/>`))}`}function u(){return t`<${i} aspectRatio=${2.5} margin=${30}><${h}/><//>`}function y({data:i}){return t`<${a}>${i.map(((a,i)=>"title"===a.type?t`<h2 key=${i}>${a.value}</h2>`:"text"===a.type?t`<${e} key=${i} data=${[a]}/>`:"quote"===a.type?t`<${c} key=${i} data=${a}/>`:"avgViz"===a.type||"diffViz"===a.type?t`<div><${m} data=${a.value}/>${"avgViz"===a.type?null:t`<${u}/>`}</div>`:void 0))}<//>`}export default y;