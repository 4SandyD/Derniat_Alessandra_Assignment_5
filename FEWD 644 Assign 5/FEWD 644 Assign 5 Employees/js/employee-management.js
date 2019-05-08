/*eslint-env browser*/
// jshint esversion: 6

window.addEventListener("load", init());

function $(id) {
  return document.getElementById(id);
}

function makeEmployee(name, title, extension) {
 	return [name, title, extension];
}

function init() {
  var employees = [];
  $('button').addEventListener("click", addEmployee(employees));
}

function addEmployee(employees) {
   return function() {
     var name = $("name").value;
   	 var title = $("title").value;
     var extension = $("extension").value;
     var employee = makeEmployee(name, title, extension);
     employees.push(employee);
   	 showEmployees(employees);
   };
}

function showEmployees(employees) {
	var table = $("employee-table");
    var new_tbody = document.createElement("tbody");
    new_tbody.id = "table-body";
  	for (var i = 0; i < employees.length; i++) {
    	var employee = employees[i];
      	var row = new_tbody.insertRow(i);
        var nameCell = row.insertCell(0);
        nameCell.innerHTML = employee[0];
        var titleCell = row.insertCell(1);
        titleCell.innerHTML = employee[1];
        var extensionCell = row.insertCell(2);
        extCell.innerHTML = employee[2];
        var delCell = row.insertCell(3);
        var button = document.createElement("button");
        button.type = "submit";
        button.id = i;
		button.innerHTML = "Delete";
        button.setAttribute("style",
         "background-color: navy; color: white; font-size: .6em;");
        button.onclick = (function(employees, showEmployees, i) {
          return function() {
        		employees.splice(i, 1);
            	showEmployees(employees);
        	};
        }(employees, showEmployees, i));
      	delCell.appendChild(button);
    }
  var t_body = $("table-body");
  t_body.parentNode.replaceChild(new_tbody, t_body);
}

