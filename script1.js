var data =[]
var keys ;
var values ;

function To_Do_List_New()
{   
    var date = document.getElementById("New_Date").value
    var text1 = document.createTextNode(date)
    var description = document.getElementById("todoinput").value
    var text = document.createTextNode(description)
    var kk='delete'
    for(let index_i = 0; index_i < 1; index_i++) {
        newdata = {'Date': date, 'Description': description,'ddd':kk}
        data.push(newdata)
    }
    createTable()
} 


function createTable () {
    key = Object.keys(data[0])

    value = data.map((elemen,index)=>{
        return Object.values(data[index])
    })
    
    var text = []
    var td = []
    var table = document.createElement('table');
    table.setAttribute('id', 'newTable')
    var thead = document.createElement('thead');

    

     
    table.appendChild(thead)
    window.onLoad = load(); 
   function load(){var tbl = document.getElementById('newTable'); 
   if(tbl) tbl.parentNode.removeChild(tbl);} 
    for (var index_i = 0 ; index_i < key.length; index_i++)
    {
        thead.appendChild(document.createElement("th")).appendChild(document.createTextNode(key[index_i]))
    }
    for (var index_i = 0 ; index_i < value.length; index_i++)
    {
        var tr = document.createElement('tr'); 
            for (var index_j = 0 ; index_j < key.length; index_j++)  
            {
                td[index_j] = document.createElement('td');
                text[index_j]= document.createTextNode(value[index_i][index_j]);
                td[index_j].appendChild(text[index_j]);
                tr.appendChild(td[index_j]);
            }
    table.appendChild(tr);
    }


document.body.appendChild(table)
table.setAttribute("border", "2");
table.setAttribute()






}


function myfun()
{
    document.getElementById("newTable").deleteRow(0);
  
}


