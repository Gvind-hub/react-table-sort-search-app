(this["webpackJsonpreact-table"]=this["webpackJsonpreact-table"]||[]).push([[0],{24:function(e,a,t){e.exports=t.p+"static/media/loader.4b371f16.svg"},29:function(e,a,t){e.exports=t(66)},34:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(20),l=t.n(r),i=(t(34),t(1)),c=t(2),m=t.n(c),o=t(6),d=t(21),u=t(22),p=t(26),h=t(28),f=t(23),_=t.n(f),N=t(9),E=t.n(N),b=t(5),g=t.n(b),v=(t(55),function(e){var a=e.data,t=e.sortData,s=e.sortType,r=e.sortedField,l=e.onSelect,i=e.selectedUser;return n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",{className:"table__header"},n.a.createElement("th",{className:"table__header-raw"},n.a.createElement("span",{className:g()("table__header-title ".concat(s),{sorted:"id"===r}),onClick:function(){return t("id")}},"ID")),n.a.createElement("th",{className:"table__header-raw"},n.a.createElement("span",{className:g()("table__header-title ".concat(s),{sorted:"firstName"===r}),onClick:function(){return t("firstName")}},"First Name")),n.a.createElement("th",{className:"table__header-raw"},n.a.createElement("span",{className:g()("table__header-title ".concat(s),{sorted:"lastName"===r}),onClick:function(){return t("lastName")}},"Last Name")),n.a.createElement("th",{className:"table__header-raw"},n.a.createElement("span",{className:g()("table__header-title ".concat(s),{sorted:"email"===r}),onClick:function(){return t("email")}},"Email")),n.a.createElement("th",{className:"table__header-raw"},n.a.createElement("span",{className:g()("table__header-title ".concat(s),{sorted:"phone"===r}),onClick:function(){return t("phone")}},"Phone")))),n.a.createElement("tbody",null,a.map((function(e,a){return n.a.createElement("tr",{className:g()("table__raw",{selected:a===i}),key:a,onClick:function(){return l(a)}},n.a.createElement("td",{className:"table__cell"},e.id),n.a.createElement("td",{className:"table__cell"},e.firstName),n.a.createElement("td",{className:"table__cell"},e.lastName),n.a.createElement("td",{className:"table__cell"},e.email),n.a.createElement("td",{className:"table__cell"},e.phone))}))))}),P=(t(56),function(e){var a=e.fetchData,t=e.smallDataURL,s=e.bigDataURL;return n.a.createElement("div",{className:"init-app"},n.a.createElement("div",{className:"init-app__buttons"},n.a.createElement("button",{className:"init-app__buttons--white",onClick:function(){return a(t)}},"32 elements"),n.a.createElement("button",{className:"init-app__buttons--black",onClick:function(){return a(s)}},"1000 elements")))}),C=t(24),D=t.n(C),x=(t(57),function(){return n.a.createElement("div",{className:"loader"},n.a.createElement("img",{className:"loader__img",src:D.a,alt:"Loading..."}))}),y=t(25),k=t.n(y),S=(t(62),function(e){var a=e.length,t=e.currentPage,s=e.itemsCountPerPage,r=e.handlePageChange;return n.a.createElement("div",{className:"paginator"},n.a.createElement(k.a,{activePage:t,itemsCountPerPage:s,totalItemsCount:a,onChange:function(e){return r(e)},pageRangeDisplayed:5,innerClass:"paginator__pagination",itemClass:"paginator__elem",activeClass:"paginator__elem--active",linkClass:"paginator__link",activeLinkClass:"paginator__link--active",prevPageText:"prev",nextPageText:"next"}))}),w=t(27),U=(t(63),function(e){var a=e.handleClosePop,t=e.addPopVisible,s=e.onSubmitAddForm,r=Object(w.a)(),l=r.register,i=r.handleSubmit,c=r.errors,m=r.reset;return n.a.createElement("div",{className:g()("add-form",{visible:t})},n.a.createElement("form",{className:"add-form__form",onSubmit:i(s)},n.a.createElement("h2",{className:"add-form__title"},"Add User"),n.a.createElement("label",{className:"add-form__label"},"ID:",n.a.createElement("input",{type:"number",className:"add-form__input",ref:l({required:!0}),name:"id"})),c.id&&n.a.createElement("span",{className:"add-form__error"},"This field is required"),n.a.createElement("label",{className:"add-form__label"},"First Name:",n.a.createElement("input",{type:"text",className:"add-form__input",ref:l({required:!0,minLength:2}),name:"firstName"})),c.firstName&&"required"===c.firstName.type&&n.a.createElement("span",{className:"add-form__error"},"This field is required!"),c.firstName&&"minLength"===c.firstName.type&&n.a.createElement("span",{className:"add-form__error"},"First Name is too short."),n.a.createElement("label",{className:"add-form__label"},"Last Name:",n.a.createElement("input",{type:"text",className:"add-form__input",ref:l({required:!0,minLength:2}),name:"lastName"})),c.lastName&&"required"===c.lastName.type&&n.a.createElement("span",{className:"add-form__error"},"This field is required"),c.lastName&&"minLength"===c.lastName.type&&n.a.createElement("span",{className:"add-form__error"},"Last Name is too short."),n.a.createElement("label",{className:"add-form__label"},"Email:",n.a.createElement("input",{type:"email",className:"add-form__input",ref:l({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}}),name:"email"})),c.email&&"required"===c.email.type&&n.a.createElement("span",{className:"add-form__error"},"This field is required"),c.email&&n.a.createElement("span",{className:"add-form__error"},c.email.message),n.a.createElement("label",{className:"add-form__label"},"Phone:",n.a.createElement("input",{type:"tel",className:"add-form__input",ref:l({required:!0}),name:"phone"})),c.phone&&n.a.createElement("span",{className:"add-form__error"},"This field is required"),n.a.createElement("div",{className:"add-form__buttons"},n.a.createElement("button",{className:"add-form__button--black",type:"button",onClick:function(){a(),m()}},"Close"),n.a.createElement("button",{className:"add-form__button--white",type:"submit"},"Add"))))}),L=t(4),F=(t(64),function(e){var a=e.filterData,t=Object(s.useState)(""),r=Object(L.a)(t,2),l=r[0],i=r[1];return n.a.createElement("div",{className:"search"},n.a.createElement("ion-icon",{name:"search-circle-outline"}),n.a.createElement("input",{type:"text",className:"search__input",placeholder:"Search",value:l,onChange:function(e){return i(e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&a(l.toLowerCase())}}))}),A=(t(65),function(e){var a=e.user;return n.a.createElement("div",{className:"personal-info"},n.a.createElement("div",{className:"personal-info__inner"},n.a.createElement("h3",{className:"personal-info__title"},"User Details"),n.a.createElement("div",{className:"personal-info__elem"},n.a.createElement("p",{className:"personal-info__name"},"User selected: ".concat(a.firstName," ").concat(a.lastName))),a.description&&n.a.createElement("div",{className:"personal-info__description"},n.a.createElement("div",{className:"personal-info__elem"},n.a.createElement("p",{className:"personal-info__description-title"},"Description:"),n.a.createElement("textarea",{className:"personal-info__description-elem",value:a.description,readOnly:!0})),n.a.createElement("div",{className:"personal-info__elem"},n.a.createElement("p",{className:"personal-info__address"},"Address: ".concat(a.address.streetAddress))),n.a.createElement("div",{className:"personal-info__elem"},n.a.createElement("p",{className:"personal-info__city"},"City: ".concat(a.address.city))),n.a.createElement("div",{className:"personal-info__elem"},n.a.createElement("p",{className:"personal-info__state"},"Province/State: ".concat(a.address.state))),n.a.createElement("div",{className:"personal-info__elem"},n.a.createElement("p",{className:"personal-info__zip"},"ZIP Code: ".concat(a.address.zip))))))}),q=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(d.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={selectedUser:"",filteredData:"none",init:!1,isFetching:!1,addPopVisible:!1,data:[],sortedField:"",sortType:"desc",currentPage:1,itemsCountPerPage:32,smallDataURL:"http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}",bigDataURL:"http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"},e.fetchData=function(){var a=Object(o.a)(m.a.mark((function a(t){var s,n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e.setState({isFetching:!0}),a.next=4,_.a.get(t);case 4:s=a.sent,n=s.data,e.setState({data:n}),e.setState({init:!0}),e.setState({isFetching:!1}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}(),e.sortData=function(a){var t=e.state.data.concat(),s="asc"===e.state.sortType?"desc":"asc",n=E.a.orderBy(t,a,s);if("none"!==e.state.filteredData){var r=e.state.filteredData.concat(),l=E.a.orderBy(r,a,s);e.setState({filteredData:l,selectedUser:""})}e.setState({sortedField:a,sortType:s,data:n,selectedUser:""})},e.filterData=function(a){if(a){var t=e.state.data.filter((function(e){return e.firstName.toLowerCase().includes(a)||e.lastName.toLowerCase().includes(a)||e.email.toLowerCase().includes(a)||e.id.toString().includes(a)||e.phone.includes(a)?e:""}));e.setState({filteredData:t,selectedUser:""})}else e.setState({filteredData:"none"})},e.handlePageChange=function(a){e.setState({currentPage:a,selectedUser:""})},e.handleAddClick=function(){e.setState({addPopVisible:!0})},e.handleClosePop=function(){e.setState({addPopVisible:!1})},e.onSubmitAddForm=function(a,t){e.setState({data:[a].concat(Object(i.a)(e.state.data))}),e.handleClosePop(),t.target.reset()},e.onSelect=function(a){e.setState({selectedUser:a})},e.chunkData=function(a){return E.a.chunk(a,e.state.itemsCountPerPage)[e.state.currentPage-1]},e}return Object(u.a)(t,[{key:"render",value:function(){return this.state.init?n.a.createElement("div",{className:"table-app"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"table-app__title"},"users table app"),n.a.createElement("div",{className:"wrapper-top"},n.a.createElement("button",{className:"table-app__add-elements",onClick:this.handleAddClick},n.a.createElement("ion-icon",{className:"table-app__add",name:"add-circle-outline"}),n.a.createElement("span",{className:"table-app__add-text"},"Add")),n.a.createElement(U,{handleClosePop:this.handleClosePop,addPopVisible:this.state.addPopVisible,onSubmitAddForm:this.onSubmitAddForm}),n.a.createElement(F,{filterData:this.filterData})),n.a.createElement(v,{data:"none"===this.state.filteredData?this.chunkData(this.state.data):this.chunkData(this.state.filteredData),sortData:this.sortData,sortType:this.state.sortType,selectedUser:this.state.selectedUser,sortedField:this.state.sortedField,onSelect:this.onSelect}),"none"===this.state.filteredData&&this.state.data.length>this.state.itemsCountPerPage?n.a.createElement(S,{length:this.state.data.length,currentPage:this.state.currentPage,itemsCountPerPage:this.state.itemsCountPerPage,handlePageChange:this.handlePageChange}):this.state.filteredData.length>this.state.itemsCountPerPage?n.a.createElement(S,{length:this.state.filteredData.length,currentPage:this.state.currentPage,itemsCountPerPage:this.state.itemsCountPerPage,handlePageChange:this.handlePageChange}):"",this.state.selectedUser||0===this.state.selectedUser?n.a.createElement(A,{user:"none"===this.state.filteredData?this.chunkData(this.state.data)[this.state.selectedUser]:this.chunkData(this.state.filteredData)[this.state.selectedUser]}):"")):this.state.isFetching?n.a.createElement(x,null):n.a.createElement(P,{fetchData:this.fetchData,smallDataURL:this.state.smallDataURL,bigDataURL:this.state.bigDataURL})}}]),t}(s.Component);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(q,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.d5958f98.chunk.js.map