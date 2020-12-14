/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
The 'showPage' function will display nine students to the page, organizing their information into nodes, 
then appending these nodes to the DOM. The template literal contains the formatting as well as the information
to be appended. 
*/
function showPage(list, page) {
   startIndex = (page * 9) - 9;
   endIndex = page * 9;
   studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         student = `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
               <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">${list[i].registered.date}</span>
            </div>
         </li>
         `;
         studentList.insertAdjacentHTML('beforeend', student)
      }
   }

}
   

/*
The 'addPagination' function takes the list, divides it into a number of pages, creates buttons for 
each of these page numbers, and makes the buttons clickable with an active state. I then use an event listener
to listen for a click, changing the page as well as the active state of the button. 
*/
function addPagination(list) {
   let numOfPages = Math.ceil(list.length / 9);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   for (i = 1; i <= numOfPages; i++) {
      pages = `
      <li>
         <button type="button">${i}</button>
      </li>
      `
      linkList.insertAdjacentHTML('beforeend', pages);
   }
   const firstButton = document.querySelector('.link-list button');
   firstButton.className = 'active';

   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         const activeButton = document.querySelector('.active');
         activeButton.className = '';
         e.target.className = 'active';
         showPage(list, e.target.textContent)
      }
   });
}


/*Here, I am calling both functions, passing in the data and the page an argument in the former 
and the data as an argument in the latter*/
showPage(data, 1)
addPagination(data)
