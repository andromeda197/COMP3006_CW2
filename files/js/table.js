let stackTable = document.getElementById("stackTable").getElementsByTagName("tbody")[0];
for(let i = 0; i < stackTable.rows.length; i++){
    stackTable.rows[i].onclick = function(){
       tableRowClick(this); 
    };
}

function tableRowClick(row){
     let msg = row.cells[0].innerHTML+" "+row.cells[1].innerHTML+" "+row.cells[2].innerHTML+" "+row.cells[3].innerHTML+" "+row.cells[4].innerHTML+" ";
     alert(msg);
}

module.exports.tableRowClick = tableRowClick;