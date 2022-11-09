const back = document.getElementById("back-btn");
//back.addEventListener('click' , backBtn);

function backBtn(){
    window.location='indexRestaurant.html';
}

var cbtn=document.getElementById("cbtn");
function cancelRes(){
    alert("are you Sure?");
} 
 

const makeres= document.getElementById('mkres');

function increment() {
    document.getElementById('demoInput').stepUp();
    }
    function decrement() {
        document.getElementById('demoInput').stepDown();
    }

let arr= [];
function submitData(){ 

let fname= document.getElementById("fname")
let date= document.getElementById("date")
let restime= document.getElementById("rtime")
let people= document.getElementById("people")


if (fname.value == "" || date.value == "" || restime.value == "" || people.value == "") {
    return alert("Please add Note Title and Details")
}

//******** */
let data = localStorage.getItem("data");
  if (data == null) {
    arr = [];
  } else {
    arr = JSON.parse(data);
  }
  let obj = {}
    obj.name = fname.value;
    obj.date= date.value;
    obj.time= restime.value;
    obj.people= people.value;


/*

let obj = {}
obj.name = fname.value;
obj.date= date.value;
obj.time= restime.value;
obj.people= people.value;
*/
arr.push(obj);
localStorage.setItem("data",JSON.stringify(arr));
    fname.value="";
    date.value="";
    restime.value="";
    people.value ="";

//update();

console.log(arr);
}
        
/*function update(){
    localStorage.setItem("data",JSON.stringify(arr));
}*/

//let sub= document.getElementById('sub');
//sub.addEventListener('click',submitData);
//let can = document.getElementById('cbtn');
//can.addEventListener('click',cancelRes);


function showData() {
    let data = localStorage.getItem("data");
    if (data == null) {
      arr = [];
    } else {
      arr= JSON.parse(data);
    }
    let html ="" ;
    arr.forEach(function(element, index) {
      html += `
              <tr>
              <td>${index+1}</td>
              <td>${element.name}</td>
              <td>${element.date}</td>
              <td>${element.time}</td>
              <td>${element.people}</td>
      </tr>
              `;
    });
    let notesElm = document.getElementById("data");
    if (arr.length != 0) {
      notesElm.innerHTML = html;
    } else {
      notesElm.innerHTML = `<b>Make Reservation<b>`;
    }
  }
  window.onload = function(){
      showData();
  }
    