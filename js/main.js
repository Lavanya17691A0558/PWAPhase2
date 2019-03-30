function submitData(){
  var career =document.querySelector("#career").value;
  var name =document.querySelector("#name").value;
  var mobile =document.querySelector("#mobile").value;
  var email =document.querySelector("#email").value;
  var address=document.querySelector("#address").value;
  var ginstitute=document.querySelector("#ginstitute").value;
  var gbranch=document.querySelector("#gbranch").value;
  var yop=document.querySelector("#yop").value;
  var gper=document.querySelector("#gper").value;
  var college=document.querySelector("#college").value;
  var group=document.querySelector("#group").value;
  var yearofpassing=document.querySelector("#yearofpassing").value;
  var perc=document.querySelector("#perc").value;
  var school=document.querySelector("#school").value;
  var course=document.querySelector("#course").value;
  var yofpassing=document.querySelector("#yofpassing").value;
  var per=document.querySelector("#per").value;
  var skills=document.querySelector("#skills").value;
  // Indexeddb Implementation
  var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB||window.webkiIndexedDB;
  if(!idb in window)
  {
    console.log("indexedDB is not supported");

  }
  // indexedDB creation
  var request;
  var store;
  var open=idb.open("storeData",1);
  console.log("indexedDB is created");
  open.onupgradeneeded=function(e) {
   request=e.target.result;
    store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
    console.log("store is created");

    }
    open.onerror=function (error) {
      console.log("Error is occured");
  }
  open.onsuccess=function (e) {
    request=e.target.result;
    var transaction=request.transaction("formdata","readwrite");
    store=transaction.objectStore("formdata");
    store.put({
      career:career,
      name:name,
      mobile:mobile,
      email:email,
      address:address,
      education:[{
      institute:ginstitute,
      branch:gbranch,
      yop:yop,
      per:gper
    },
    {
      institute:college,
      branch:group,
      yop:yearofpassing,
      per:perc
    },
    {
      institute:school,
      branch:course,
      yop:yofpassing,
      per:per
    }],
      skills:skills


  });
}
  window.open("index.html");
}
