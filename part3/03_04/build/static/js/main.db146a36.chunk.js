(window["webpackJsonp02.forms"]=window["webpackJsonp02.forms"]||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(13),r=t.n(c),u=(t(19),t(2)),l=function(e){var n=e.value,t=e.onChange;return o.a.createElement("div",null,"search: ",o.a.createElement("input",{value:n,onChange:t}))},i=function(e){var n=e.name,t=e.onChangeName,a=e.phone,c=e.onChangePhone,r=e.addPerson;return o.a.createElement("form",{onSubmit:r},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:n,onChange:t})),o.a.createElement("div",null,"phone: ",o.a.createElement("input",{value:a,onChange:c})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.person;return o.a.createElement(o.a.Fragment,null,n.name,": ",n.number)},f=function(e){var n=e.persons,t=e.search,a=e.deletePerson,c=""===t?n:n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});console.log(c);return o.a.createElement("div",null,c.map(function(e){return o.a.createElement("p",{key:e.name},o.a.createElement(m,{person:e}),o.a.createElement("button",{onClick:function(n){return a(n,e)}},"delete"))}))},s=t(3),d=t.n(s),h="/api/persons",g=function(){return d.a.get(h).then(function(e){return e.data}).catch(function(){return console.log("fail")})},v=function(e){return e.id+=1,console.log(e),d.a.post(h,e).then(function(e){return e.data}).catch(function(){return console.log("fail")})},E=function(e,n){return d.a.put("".concat(h,"/").concat(e),n).then(function(e){return e.data}).catch(function(){return console.log("fail")})},p=function(e){return d.a.delete("".concat(h,"/").concat(e)).then(function(e){return e.data}).catch(function(){return console.log("fail")})},b=function(e){var n=e.message;return null===n||""===n?null:o.a.createElement("div",{className:"notificationSucess"},n)},w=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)(""),m=Object(u.a)(r,2),s=m[0],d=m[1],h=Object(a.useState)(""),w=Object(u.a)(h,2),C=w[0],j=w[1],O=Object(a.useState)(""),P=Object(u.a)(O,2),S=P[0],k=P[1],y=Object(a.useState)(""),N=Object(u.a)(y,2),F=N[0],D=N[1];Object(a.useEffect)(function(){console.log("[EFFECT]: dataPerson"),g().then(function(e){return c(e)}),D("")},[]);return o.a.createElement("div",null,o.a.createElement(b,{message:F}),o.a.createElement("h2",null,"Phonebook"),o.a.createElement(l,{value:S,onChange:function(e){console.log(e.target.value),k(e.target.value)}}),o.a.createElement("h2",null,"add a new"),o.a.createElement(i,{name:s,phone:C,onChangeName:function(e){console.log(e.target.value),d(e.target.value)},onChangePhone:function(e){console.log(e.target.value),j(e.target.value)},addPerson:function(e){var n={boolean:!1,name:"",id:0};e.preventDefault();var a={name:s,number:C,id:t.length};t.forEach(function(e){e.name===s&&(n.boolean=!0,n.id=e.id,n.name=e.name)}),n.boolean?window.confirm("".concat(n.name," is already added to phonebook, replace the old number with new one?"))&&E(n.id,a).then(function(e){c(t.filter(function(e){return e.id!==n.id}).concat(a)),d(""),j(""),D("update ".concat(n.name))}):v(a).then(function(e){c(t.concat(e)),d(""),j(""),D("added ".concat(a.name))})}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(f,{persons:t,search:S,deletePerson:function(e,n){e.preventDefault(),window.confirm("delete ".concat(n.name))&&p(n.id).then(function(e){j(""),c(t.filter(function(e){return e!==n}))})}}))};r.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.db146a36.chunk.js.map