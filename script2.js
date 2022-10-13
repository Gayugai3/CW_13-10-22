function createtab(tagname,attrname,attrvalue)
{
    var table=document.createElement(tagname);
    table.setAttribute(attrname,attrvalue);
    return table;
}
function cthead(tagname,attrname,attrvalue)
{
    var thead =document.createElement(tagname);
    thead.setAttribute(attrname,attrvalue);
    return thead;
}
function createtr(tagname)
{
    var tr=document.createElement(tagname);
    return tr;
}
function createth(tagname,attrname,attrvalue,content)
{
    var th =document.createElement(tagname);
    th.setAttribute(attrname,attrvalue);
    th.innerHTML = content;
    return th;
}
function createbody(tagname)
{
    var tbody =document.createElement(tagname);
    return tbody;
}
function createtd(tagname,content)
{
    var td =document.createElement(tagname);
    td.innerHTML = content;
    return td;
}

var table = createtab("table","class","table");
var thead = cthead("thead","class","thead-dark");
var trh = createtr("tr");
var th1 =createth("th","scope","col","First");
var th2 =createth("th","scope","col","Middle");
var th3 =createth("th","scope","col","Last");
var tbody = createbody("tbody");
var trb = createtr("tr");
var td1 = createtd("td","Mark");
var td2 = createtd("td","Otto");
var td3 = createtd("td","@mdo");


trb.append(td1,td2,td3);
tbody.append(trb);

trh.append(th1,th2,th3);
thead.append(trh);

table.append(thead,tbody);

document.body.append(table);