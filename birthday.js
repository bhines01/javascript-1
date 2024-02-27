function addAttendee() {
  let firstname = birthdayForm.firstname.value;
  let lastname = birthdayForm.lastname.value;
  if (firstname == "" || lastname == "") {
    alert("Full name must be provided!");
    return false;
  }
  let fullname = firstname + " " + lastname;
  let ul = document.getElementById("attendees");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(fullname));
  ul.appendChild(li);
  return false;
}
