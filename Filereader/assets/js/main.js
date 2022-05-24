let table = document.querySelector(".table");
let button = document.querySelector(".button");
let icon = document.querySelector(".icon");
let input = document.querySelector(".button input");
let count=1;
let tr=document.querySelector("tr")[0];

icon.onclick = () => input.click();

input.onchange=function (e) {
    console.log(e.target.files);
    uploadFile(e.target.files);
}
button.ondragover=function (e) {
    e.preventDefault();
}

button.ondrop=function (e) {
    e.preventDefault();
    uploadFile(e.dataTransfer.files);

}
if (table.lastElementChild.innerHTML.length==0) {
    table.style.visibility="hidden";
}
function uploadFile(files) {
    [...files].forEach(file => {
        let reader = new FileReader();
        reader.onloadend = function (e) {
            let tr = `<tr>
            <th scope="row">${count++}</th>
            <td>${file.name}</td>
            <td><img src="${e.target.result}" alt="img"></td>
            <td><input type="button" class="rmv-btn" value="Remove"></td>
          </tr>`
            table.lastElementChild.innerHTML+=tr;
            table.style.visibility="visible";
        }
        reader.readAsDataURL(file);
    })
}
let tableElm=document.querySelector("table");
function removeRow(e) {
//  let rowno;
//  id=$("this").attr('id');
//  id_arr=id.split("-");
//  rowno=id_arr[id_arr.length-1];
    const btn=e.target;
    btn.closest("tr").remove();
}
tableElm.addEventListener("click",removeRow);

function RemoveAll(e) {
    // while (tbody.rows.length>=1) {
    //     tb.deleteRow(1);
    // }
    tr.innerHTML="";
 table.style.visibility="none";

}

