var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}

var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB||window.webkiIndexedDB ;
if(!idb in window)
{
  console.log("indexedDB is not supported");
}
// indexedDB creation
var request;
var store;
var open=idb.open("storeData",1);

console.log("indexedDB is created");
open.onupgradeneeded=function(e){
 request=e.target.result;
  store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
  console.log("store is created");
  }
  open.onerror=function(error){
    console.log("Error is occured");
}
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  var info=store.get(paravalue);
  info.onsuccess=function(data){
    console.log(data);
    personalinfo(data.target.result);
  }
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function personalinfo(pi){
var image=document.createElement("img");
image.src="image/icon.svg";
image.alt=pi.name;
left.append(image);
var hh=document.createElement("h2");
hh.textContent=pi.name;
left.append(hh);
var g=document.createElement("h3");
g.textContent=pi.mobile;
left.append(g);
var j=document.createElement("h4");
j.textContent=pi.email;
left.append(j);
var k=document.createElement("h5");
k.textContent=pi.address;
left.append(k);

var k=document.createElement("h5");
k.textContent=pi.career;
right.append(k);

var head11=document.createElement("h2");
head11=textContent="education details";
right.append(head11);


var table=document.createElement("table");
table.border="1";
var tr1="<tr><th>institute</th><th>branch</th><th>per</th><th>yop</th></tr>";
var row=""
for(var i in pi.education){
  row +="<tr>"+"<td>"+pi.education[i].institute+"</td>"+
  "<td>"+pi.education[i].branch +"</td>"+
  "<td>"+pi.education[i].per+"</td>"+
  "<td>"+pi.education[i].yop +"</td>"
  "</tr>";
  table.innerHTML=tr1+row;
  right.appendChild(table);
}
var skills=document.createElement("h6");
skills.textContent=pi.skills;
right.append(skills);
}
