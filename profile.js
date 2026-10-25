// ===== Part 1. Task 1: userProfile object =====
const userProfile = {
  name: "Adilzhan",                         // string
  birthYear: 2005,                          // number (поставь свой год)
  isDeveloper: true,                        // boolean
  hobbies: ["Running", "Sneakers", "Music"] // array
};

// ===== Part 1. Task 2: arithmetic =====
function calculateAge() {
  const currentYear = new Date().getFullYear();
  return currentYear - userProfile.birthYear;
}

function calculateMonths() {
  return calculateAge() * 12;
}

// ===== находим элементы на странице =====
const showName = document.getElementById("showName");
const showBirthYear = document.getElementById("showBirthYear");
const showAge = document.getElementById("showAge");
const showMonths = document.getElementById("showMonths");
const showDeveloper = document.getElementById("showDeveloper");
const showHobbiesCount = document.getElementById("showHobbiesCount");

const profileForm = document.getElementById("profileForm");
const usernameInput = document.getElementById("username");
const birthYearInput = document.getElementById("birthYear");
const message = document.getElementById("message");

const hobbyList = document.getElementById("hobbyList");
const newHobby = document.getElementById("newHobby");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

// показать данные профиля на странице и в консоли
function showProfile() {
  showName.textContent = userProfile.name;
  showBirthYear.textContent = userProfile.birthYear;
  showAge.textContent = calculateAge();
  showMonths.textContent = calculateMonths();
  showDeveloper.textContent = userProfile.isDeveloper ? "Yes" : "No";
  showHobbiesCount.textContent = userProfile.hobbies.length;

  console.log("Name:", userProfile.name);
  console.log("Age:", calculateAge());
  console.log("Age in months:", calculateMonths());
  console.log("Hobbies count:", userProfile.hobbies.length);
}

// ===== Part 2. Task 4: event listener для формы =====
profileForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value;
  const year = Number(birthYearInput.value);
  const currentYear = new Date().getFullYear();

  if (year < 1900 || year > currentYear) {
    message.textContent = "Please enter a real birth year (1900 - " + currentYear + ").";
    return;
  }

  message.textContent = "";
  userProfile.name = username;
  userProfile.birthYear = year;
  showProfile();
  profileForm.reset();
});

// ===== Part 3. Task 5: список =====
function addHobbyToPage(text) {
  const li = document.createElement("li");
  li.textContent = text;
  hobbyList.appendChild(li);
}

// показываем начальные хобби из массива
for (let i = 0; i < userProfile.hobbies.length; i++) {
  addHobbyToPage(userProfile.hobbies[i]);
}

// кнопка Add Item
addBtn.addEventListener("click", function () {
  const text = newHobby.value;

  if (text === "") {
    return;
  }

  userProfile.hobbies.push(text);
  addHobbyToPage(text);
  newHobby.value = "";
  showProfile();
});

// кнопка Remove Item (удаляет последний)
removeBtn.addEventListener("click", function () {
  const last = hobbyList.lastElementChild;

  if (last !== null) {
    last.remove();
    userProfile.hobbies.pop();
    showProfile();
  }
});

// первый показ при загрузке страницы
showProfile();
