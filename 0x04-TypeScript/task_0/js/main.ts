interface Student { 
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Usman",
  lastName: "Akinyemi",
  age: 21,
  location: "India"
}

const student2: Student = {
  firstName: "Fawaz",
  lastName: "Bello",
  age: 21,
  location: "Nigeria"
}

const studentsList: Student [] = [student1, student2];

function renderElement (studentsList: Student []): void {
  const table = document.createElement("table");

  studentsList.forEach(ele => {
    const row = document.createElement("tr");
    const tdFirstName = document.createElement("td");
    const tdLocation = document.createElement("td");
    const textFirstName = document.createTextNode(`${ele.firstName}`);
    const textLocation = document.createTextNode(`${ele.location}`);
    
    tdFirstName.appendChild(textFirstName);
    tdLocation.appendChild(textLocation);

    row.appendChild(tdFirstName);
    row.appendChild(tdLocation);
    table.appendChild(row);
  })
  document.body.insertAdjacentElement("beforeend", table);
}

renderElement(studentsList);
