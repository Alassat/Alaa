console.log("running");


function search() {
    let searcbar = document.querySelector('.search-input').value.toUpperCase();
    let booklist = document.querySelector('.books');
    let book = document.querySelectorAll('.one');
    let bookName = document.getElementsByTagName('a');
    for (let i = 0; i < bookName.length; i++) {
        if (bookName[i].innerHTML.toUpperCase().indexOf(searcbar) >= 0) {
            book[i].style.display = "";
        } else {
            book[i].style.display = "none";
        }
    }

}