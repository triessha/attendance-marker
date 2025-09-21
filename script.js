let attendees = [];

// Save attendees to localStorage to persist
if(localStorage.getItem("attendees")) {
    attendees = JSON.parse(localStorage.getItem("attendees"));
    updateList();
}

function markAttendance() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();

    if(name === "") {
        alert("Please enter a student name!");
        return;
    }

    if(attendees.includes(name)) {
        alert("Student already marked present!");
        return;
    }

    attendees.push(name);
    localStorage.setItem("attendees", JSON.stringify(attendees));
    updateList();
    nameInput.value = "";
}

function updateList() {
    const list = document.getElementById('attendeeList');
    list.innerHTML = "";

    attendees.forEach((attendee, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${attendee}`;

        const delBtn = document.createElement('button');
        delBtn.textContent = "Delete";
        delBtn.className = "deleteBtn";
        delBtn.onclick = () => deleteStudent(index);

        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

function deleteStudent(index) {
    attendees.splice(index, 1);
    localStorage.setItem("attendees", JSON.stringify(attendees));
    updateList();
}

function resetAttendance() {
    if(confirm("Are you sure you want to reset all attendance?")) {
        attendees = [];
        localStorage.setItem("attendees", JSON.stringify(attendees));
        updateList();
    }
}

function goToSummary() {
    window.location.href = "summary.html";
}
