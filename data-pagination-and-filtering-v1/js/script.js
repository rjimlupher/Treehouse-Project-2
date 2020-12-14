/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

console.log(data);

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   startIndex = (page * 9) - 9;
   endIndex = page * 9;
   console.log(startIndex);
   console.log(endIndex);
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
   
showPage(data, 1)

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
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
   const firstButton = document.querySelector('button')[0];
   firstButton.className = 'active';
}
addPagination(data)
// Call functions
