// JavaScript to handle the accordion functionality
// const accordionHeaders = document.querySelectorAll(".accordion-header");

// accordionHeaders.forEach((header) => {
//   header.addEventListener("click", () => {
//     const accordionItem = header.parentElement;
//     const accordionContent = header.nextElementSibling;

//     accordionContent.style.display = accordionContent.style.display === "block" ? "none" : "block";
//     accordionItem.classList.toggle("active");
//   });
// });
// =======================================================choose file js===========================
const fileForm = document.getElementById("fileForm");
const selectedFileDiv = document.getElementById("selectedFile");

fileForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (file) {
    const fileName = file.name;
    selectedFileDiv.textContent = `Selected file: ${fileName}`;
  } else {
    selectedFileDiv.textContent = "No file selected.";
  }
});
// ===========================================================decription====================
document.getElementById("filterInput").addEventListener("input", filterList);
document.getElementById("filterButtons").addEventListener("click", filterList);

function filterList() {
  var filterValue = document.getElementById("filterInput").value.toLowerCase();
  var filterCategory = document.querySelector("#filterButtons button.active")
    .dataset.filter;
  var listItems = document.querySelectorAll("#filterList li");

  listItems.forEach(function (item) {
    var text = item.textContent.toLowerCase();
    var category = item.dataset.category.toLowerCase();
    var showItem =
      (category === filterCategory || filterCategory ==="") &&
      text.includes(filterValue);

    if (showItem) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

document
  .getElementById("filterButtons")
  .addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
      var button = this.querySelectorAll("button");
      button.forEach(function (button) {
        button.classList.remove("active");
      });
      event.target.classList.add("active");
      filterList();
    }
  });

// =================================================drop down for a logout========================
// function toggleDropdown() {
//   var dropdown = document.getElementById("dropdown");
//   dropdown.style.display =
//     dropdown.style.display === "block" ? "none" : "block";
// }
// ================================new accordion=================
// Get all the accordion headers and add click event listeners
const accordionHeaders = document.querySelectorAll(".accordion-header");
accordionHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    const accordionContent = this.nextElementSibling;
    const toggleIcon = this.querySelector(".toggle-icon");
    // Check if the clicked accordion is already active
    const isActive = this.classList.contains("active");

    // Close all accordions
    accordionHeaders.forEach((header) => {
      header.classList.remove("active");
      header.nextElementSibling.style.display = "none";
    });

    // Toggle the clicked accordion's state
    if (isActive) {
      accordionContent.style.display = "none";
    } else {
      this.classList.add("active");
      accordionContent.style.display = "block";
    }

    // Update the toggle icon based on accordion state
    toggleIcon.textContent = isActive ? "▲" : "▼";
  });
});

// Get all the sub-accordion headers and add click event listeners
const subAccordionHeaders = document.querySelectorAll(".sub-accordion-header");
subAccordionHeaders.forEach((header) => {
  header.addEventListener("click", function (event) {
    event.stopPropagation();
    const subAccordionContent = this.nextElementSibling;
    const toggleIcon = this.querySelector(".toggle-icon");
    // Check if the clicked sub-accordion is already active
    const isActive = this.classList.contains("active");

    // Close all sub-accordions
    subAccordionHeaders.forEach((header) => {
      header.classList.remove("active");
      header.nextElementSibling.style.display = "none";
    });

    // Toggle the clicked sub-accordion's state
    if (isActive) {
      subAccordionContent.style.display = "none";
    } else {
      this.classList.add("active");
      subAccordionContent.style.display = "block";
    }

    // Update the toggle icon based on sub-accordion state
    toggleIcon.textContent = isActive ? "▲" : "▼";
  });
});
// JavaScript to toggle the active class on hamburger click
document.addEventListener("DOMContentLoaded", function () {
  var navbarHamburger = document.querySelector(".navbar-hamburger");
  var navbarMenu = document.querySelector(".navbar-menu");

  navbarHamburger.addEventListener("click", function () {
    navbarHamburger.classList.toggle("active");
    navbarMenu.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    var targetElement = event.target;
    if (
      !targetElement.closest(".navbar") &&
      navbarHamburger.classList.contains("active")
    ) {
      navbarHamburger.classList.remove("active");
      navbarMenu.classList.remove("active");
    }
  });
});
// =========================================icons dropdow===========================
// ====================================================click drop down icon anywhere==========================

const dropdown = document.querySelector(".dropdown");

document.addEventListener("click", (event) => {
  // Close the dropdown if clicked outside the dropdown
  if (!dropdown.contains(event.target)) {
    closeDropdown();
  }
});

dropdown
  .querySelector(".dropdown-toggle")
  .addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the document listener from triggering
    toggleDropdown();
  });

function toggleDropdown() {
  dropdown.classList.toggle("show");
}

function closeDropdown() {
  dropdown.classList.remove("show");
}
// ===================================================disscution form============================
const askButton = document.getElementById('ask-button');
const questionTitleInput = document.getElementById('question-title');
const questionContentInput = document.getElementById('question-content');
const qnaList = document.getElementById('qna-list');

askButton.addEventListener('click', () => {
  const title = questionTitleInput.value;
  const content = questionContentInput.value;

  if (title && content) {
    createQnaPair(title, content);
    questionTitleInput.value = '';
    questionContentInput.value = '';
  }
});

function createQnaPair(question, answer) {
  const qnaDiv = document.createElement('div');
  qnaDiv.classList.add('qna-list');
  qnaDiv.innerHTML = `
    <h2>Q: ${question}</h2>
    <p>A: ${answer}</p>
  `;
  qnaList.appendChild(qnaDiv);
}
// ================================================================================================


 

