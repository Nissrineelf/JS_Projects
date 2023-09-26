let name        = document.getElementById('name');
let departement = document.getElementById('departement');
let salary      = document.getElementById('salary');
let insurance   = document.getElementById('insurance');
let tax         = document.getElementById('tax');
let net         = document.getElementById('net');
let save        = document.getElementById('save');
let status = 'save';
let ext;
let search = document.getElementById('search');

// calculate net salary
function calc_salary() {
    if (salary.value != '') {
        let total = salary.value - insurance.value - tax.value;
        net.value = total;  
        net.style.background = 'rgb(211, 218, 233)';
    } else {
        net.value = '';
        net.style.background = 'white';
    }

    
}
//  ///////////////////////////////////////////////
let employee = [];
if (localStorage.employee != null) {
    employee = JSON.parse(localStorage.employee)
} else {
    let employee = [];
}

// Save button

 save.addEventListener('click' , function(){
    
      let emp = {
          name: name.value,
          departement: departement.value,
          salary : salary.value,
          insurance : insurance.value,
          tax : tax.value,
          net: net.value,

      }
      if (status === 'save') {
            employee.push(emp)
      } else {

        employee[ext] = emp;
        status = 'save';
        save.innerHTML = 'Save'

        }

        localStorage.setItem('employee' , JSON.stringify(employee));
        clearData();
        showData();
});
// ///////////////////////////////////////////////

// clear Data
function clearData() {
    name.value          = '',
    departement.value   = '',
    salary.value        = '',
    insurance.value     = '',
    tax.value           = '',
    net.value           = ''
    search.value        ='';
}

// ///////////////////////////////////////////////

function showData() {
    let table = '';

    for (let i = 0 ; i < employee.length ; i++) {
        table += ` 
                <tr>
                    <td>${employee[i].name}</td>
                    <td>${employee[i].departement}</td>
                    <td>${employee[i].net}</td>
                    <td> <button onclick="updateData(${i})">EDIT</button> </td>
                    <td> <button onclick="deleteData()">DELETE</button> </td>
                </tr>
        `
        
    }

    document.getElementById('tbody').innerHTML = table ;
}
showData();
//  //////////////////////////////////////////////

// delete button 
function deleteData(i) {

    employee.splice(i , 1);

    localStorage.employee = JSON.stringify(employee);

    showData();
}
// delete All data button
function deleteAllData() {

    localStorage.clear();

    employee.splice(0);
    
    showData();
}

// /////////////////////////////////////////////////

// update data 

function updateData(i) {
    name.value = employee[i].name;
    departement.value = employee[i].departement;
	salary.value = employee[i].salary;
	insurance.value = employee[i].insurance;
	tax.value = employee[i].tax;
	net.value = employee[i].net;

    save.innerHTML	= "Save New Data";
    status = 'update';
    ext = i;
    scroll({
		top: 0,
		behavior: "smooth"
	})
}

// //////////////////////////////////////////////////

// search button

let searchType = 'name';
function getSearchType(id) {

    let search = document.getElementById("search");

    if ( id == 'searchName') {

        searchType = 'name';
        search.placeholder = 'Enter a name to search';
        search.style.background = "rgb(116, 154, 197)"

    } else {
        
        searchType = 'departement';
        search.placeholder = 'Enter a departement to search';
        search.style.background = "rgb(116, 154, 197)"
    }

    search.focus();
    clearData()
}

// ////////////////////////////////////////////////

// search data 

function searchData(value) {

    let table = ``;

   if ( searchType == 'name') {

        for ( let i = 0 ; i < employee.length; i++ ) {

            if (employee[i].name.includes(value)) {

                table +=    ` 
                    <tr>
                        <td>${employee[i].name}</td>
                        <td>${employee[i].departement}</td>
                        <td>${employee[i].net}</td>
                        <td> <button onclick="updateData(${i})">EDIT</button> </td>
                        <td> <button onclick="deleteData()">DELETE</button> </td>
                    </tr> `
            }
        }
   } else {
    for ( let i = 0 ; i < employee.length; i++ ) {

        if (employee[i].departement.includes(value)) {

            table +=    ` 
                <tr>
                    <td>${employee[i].name}</td>
                    <td>${employee[i].departement}</td>
                    <td>${employee[i].net}</td>
                    <td> <button onclick="updateData(${i})">EDIT</button> </td>
                    <td> <button onclick="deleteData()">DELETE</button> </td>
                </tr> `
        }
    }
   }

   document.getElementById('tbody').innerHTML = table ;
}

// ///////////////////////////////////////////////