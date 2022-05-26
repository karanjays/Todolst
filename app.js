function getupdate(){
    console.log("karan");
    t=document.getElementById('Title').value;
    d=document.getElementById('Description').value;
    if(localStorage.getItem('item')==null)
    {
        item=[];
        item.push([t,d]);
        localStorage.setItem('item',JSON.stringify(item)); 
    }
    else{
        itemstr=localStorage.getItem('item');
        item=JSON.parse(itemstr);
        item.push([t,d]);
        localStorage.setItem('item',JSON.stringify(item));
    }
    update();
}
function update()
{
    if(localStorage.getItem('item')==null)
    {
        item=[];
        localStorage.setItem('item',JSON.stringify(item)); 
    }
    
    else{
        itemstr=localStorage.getItem('item');
        item=JSON.parse(itemstr);
    }
    let tablebody=document.getElementById("tablebody");
    let str="";
    for( var i=0;i<item.length;++i)
    {
        str+=`
        <tr>
                <th>${i+1}.</th>
                <td>${item[i][0]}</td>
                <td>${item[i][1]}</td>
                <td><button id="small" onclick="remove(${i})">❌</button></td>
        </tr>`
    }
    tablebody.innerHTML=str;
}

add=document.getElementById("add");
add.addEventListener("click",getupdate);
update();
function remove(itemidx)
{
    itemstr=localStorage.getItem('item');
    item=JSON.parse(itemstr);
    item.splice(itemidx,1);
    localStorage.setItem('item',JSON.stringify(item));
    update();
}
function clist()
{
    if(alert("It make your list empty."));
    if(confirm("Are you Sure 🤔 ?")){
    localStorage.clear();
    update();}
}
