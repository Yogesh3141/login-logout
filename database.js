const data = JSON.parse(localStorage.getItem("user"));
data.map((item, index)=>{
    document.getElementById("tbody").innerHTML += `
    <tr>
    <td>${index+1}</td>
        <td>${item.FristName}</td>
        <td>${item.LastName}</td>
        <td>${item.DOB}</td>
        <td>${item.Mail}</td>
    </tr>
    `
});