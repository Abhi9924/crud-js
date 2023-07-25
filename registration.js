let alldata = [];
let news = "";
let image = "";
if (localStorage.getItem("alldata")) {
  alldata = JSON.parse(localStorage.getItem("alldata"));
}
function submit() {
  let a = document.getElementById("name").value;
  let b = document.getElementById("email").value;
  let c = document.getElementById("pass").value;

  let obj = {
    name: a,
    email: b,
    pass: c,
    img: image,
    id: Date.now(),
  };

  let already = false;
  for (let i = 0; i < alldata.length; i++) {
    if (alldata[i].email == b) {
      already = true;
    }
  }

  if (already) {
    alert("already regi");
  } else {
    alldata.push(obj);
    localStorage.setItem("alldata", JSON.stringify(alldata));
    window.location.href = "/login.html";
    // console.log(alldata);
  }
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("pass").value = "";
  document.getElementById("thumb").src = "";
}

function login() {
  let alldata = JSON.parse(localStorage.getItem("alldata"));
  console.log(alldata);

  let x = document.getElementById("lemail").value;
  let y = document.getElementById("lpass").value;
  let z = false;

  for (let i = 0; i < alldata.length; i++) {
    if (alldata[i].email == x && alldata[i].pass == y) {
      z = true;
    }
  }
  if (z) {
    alert("login suc...");
    // fun();
    console.log("object");
    // localStorage.setItem("retdata", JSON.stringify(abc));
    window.location.href = "/table.html";
    console.log("object");
  } else {
    alert("login uns...");
  }
  document.getElementById("lemail").value = "";
  document.getElementById("lpass").value = "";
}

function fun() {
  let alldata = JSON.parse(localStorage.getItem("alldata"));
  console.log(alldata);

  for (let i = 0; i < alldata.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let img = document.createElement("img");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    img.setAttribute("src", alldata[i].img);
    img.setAttribute("class", "table-img");

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    td4.appendChild(img);
    tr.appendChild(td6);
    td5.appendChild(btn1);
    td6.appendChild(btn2);

    document.getElementById("table").appendChild(tr);

    tr.setAttribute("id", alldata[i].id);
    tr.setAttribute("class", "raw");
    btn1.setAttribute("onclick", "deletee(" + alldata[i].id + ")");
    // btn2.setAttribute(
    //   "onclick",
    //   "edit(" +
    //     alldata[i].id +
    //     ",'" +
    //     alldata[i].name +
    //     "','" +
    //     alldata[i].email +
    //     "','" +
    //     alldata[i].pass +
    //     "')"
    // );
    btn2.setAttribute("onclick", 'edit("' + alldata[i].email + '")');
    btn1.innerHTML = "delete";
    btn2.innerHTML = "edit";
    td1.innerHTML = alldata[i].name;
    td2.innerHTML = alldata[i].email;
    td3.innerHTML = alldata[i].pass;
  }
}

function deletee(id) {
  JSON.parse(localStorage.getItem("alldata"));
  alldata = alldata.filter((item) => item.id !== id);
  document.getElementById(id).remove();
  // localStorage.setItem("alldata", JSON.stringify(alldata));
  console.log(alldata);
}

function edit(ema) {
  window.location.href = "/registration.html";
  localStorage.setItem("mail", ema);
}

function show() {
  alldata = JSON.parse(localStorage.getItem("alldata"));
  let m = localStorage.getItem("mail");
  for (let i = 0; i < alldata.length; i++) {
    if (alldata[i].email == m) {
      document.getElementById("name").value = alldata[i].name;
      document.getElementById("email").value = alldata[i].email;
      document.getElementById("pass").value = alldata[i].pass;
      document.getElementById("thumb").src = alldata[i].img;
    }
  }
}

// function show(id) {
//   news = id;
//   alldata = JSON.parse(localStorage.getItem("alldata"));
//   console.log(alldata);
//   for (let i = 0; i < alldata.length; i++) {
//     if (alldata[i].id == news) {
//       document.getElementById("name").value = alldata[i].name;
//       document.getElementById("email").value = alldata[i].email;
//       document.getElementById("pass").value = alldata[i].pass;
//       document.getElementById("thumb").src = alldata[i].img;
//     }
//   }
// }

function update() {
  let check = false;

  for (let i = 0; i < alldata.length; i++) {
    if (alldata[i].email == document.getElementById("email").value) {
      check = true;
    }
  }

  if (check) {
    alert("already reg...");
  } else {
    alldata = JSON.parse(localStorage.getItem("alldata"));
    var x = localStorage.getItem("mail");

    objIndex = alldata.findIndex((obj) => obj.email == x);

    alldata[objIndex].name = document.getElementById("name").value;
    alldata[objIndex].email = document.getElementById("email").value;
    alldata[objIndex].pass = document.getElementById("pass").value;
    alldata[objIndex].img = document.getElementById("thumb").src;

    localStorage.setItem("alldata", JSON.stringify(alldata));
    JSON.parse(localStorage.getItem("alldata"));
    window.location.href = "/table.html";

    tr = document.getElementsByClassName("raw");

    for (let i = 0; i < alldata.length; i++) {
      let tr = document.createElement("tr");
      document.getElementById("table").appendChild(tr);

      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");
      let td6 = document.createElement("td");
      let img = document.createElement("img");
      let btn1 = document.createElement("button");
      let btn2 = document.createElement("button");
      img.setAttribute("src", alldata[i].img);
      img.setAttribute("class", "table-img");

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      td4.appendChild(img);
      tr.appendChild(td6);
      td5.appendChild(btn1);
      td6.appendChild(btn2);

      tr.setAttribute("id", alldata[i].id);
      tr.setAttribute("class", "raw");
      btn1.setAttribute("onclick", "deletee(" + alldata[i].id + ")");
      // btn2.setAttribute(
      //   "onclick",
      //   "edit(" +
      //     alldata[i].id +
      //     ",'" +
      //     alldata[i].name +
      //     "','" +
      //     alldata[i].email +
      //     "','" +
      //     alldata[i].pass +
      //     "')"
      // );
      btn2.setAttribute("onclick", 'edit("' + alldata[i].email + '")');
      btn1.innerHTML = "delete";
      btn2.innerHTML = "edit";
      td1.innerHTML = alldata[i].name;
      td2.innerHTML = alldata[i].email;
      td3.innerHTML = alldata[i].pass;
    }

    // for (let i = 0; i < alldata.length; i++) {
    //   tr[0].remove();
    // }

    // for (let i = 0; i < alldata.length; i++) {
    //   let tr = document.createElement("tr");
    //   let td1 = document.createElement("td");
    //   let td2 = document.createElement("td");
    //   let td3 = document.createElement("td");
    //   let td4 = document.createElement("td");
    //   let td5 = document.createElement("td");
    //   let td6 = document.createElement("td");
    //   let img = document.createElement("img");
    //   let btn1 = document.createElement("button");
    //   let btn2 = document.createElement("button");
    //   img.setAttribute("src", alldata[i].img);
    //   img.setAttribute("class", "table-img");

    //   tr.appendChild(td1);
    //   tr.appendChild(td2);
    //   tr.appendChild(td3);
    //   tr.appendChild(td4);
    //   tr.appendChild(td5);
    //   td4.appendChild(img);
    //   tr.appendChild(td6);
    //   td5.appendChild(btn1);
    //   td6.appendChild(btn2);

    //   document.getElementById("table").appendChild(tr);

    //   tr.setAttribute("id", alldata[i].id);
    //   tr.setAttribute("class", "raw");
    //   btn1.setAttribute("onclick", "deletee(" + alldata[i].id + ")");
    //   btn2.setAttribute(
    //     "onclick",
    //     "edit(" +
    //       alldata[i].id +
    //       ",'" +
    //       alldata[i].name +
    //       "','" +
    //       alldata[i].email +
    //       "','" +
    //       alldata[i].pass +
    //       "')"
    //   );

    //   btn1.innerHTML = "delete";
    //   btn2.innerHTML = "edit";
    //   td1.innerHTML = alldata[i].name;
    //   td2.innerHTML = alldata[i].email;
    //   td3.innerHTML = alldata[i].pass;
    // }
  }

  console.log(alldata);
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("pass").value = "";
  document.getElementById("thumb").src = "";
}

// Convert single image into base64
const fileInput = document.getElementById("thumbnail");

// Lister to the change event on the <input> element
fileInput.addEventListener("change", (event) => {
  // Get the selected image file
  const imageFile = event.target.files[0];

  if (imageFile) {
    const reader = new FileReader();

    // Convert the image file to a string
    reader.readAsDataURL(imageFile);

    // FileReader will emit the load event when the data URL is ready
    // Access the string using result property inside the callback function
    reader.addEventListener("load", () => {
      // Get the data URL string
      console.log(reader.result);
      image = reader.result;
      document.getElementById("thumb").src = image;
    });
  }
});
// function submit() {
//   let a = document.getElementById("name").value;
//   let b = document.getElementById("email").value;
//   let c = document.getElementById("pass").value;

//   let obj = {
//     name: a,
//     email: b,
//     pass: c,
//   };

//   let already = false;

//   for (let i = 0; i < alldata.length; i++) {
//     if (alldata[i].email == b) {
//       already = true;
//     }
//   }
//   if (already) {
//     alert("already register");
//   } else {
//     alldata.push(obj);
//   }

//   console.log(alldata);
//   document.getElementById("name").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("pass").value = "";
// }
