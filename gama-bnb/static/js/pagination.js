// if you have any suggestion of questions, pleasse feel free to send me an email to chiholiu10@gmail.com

(function() {
    "use strict";

    function Pagination() {
      
        const objJson = () => {
            let ajax=new XMLHttpRequest();
            ajax.open('GET','https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72');
            ajax.onreadystatechange = () => {
                    let res = JSON.parse(ajax.responseText);
                    if(ajax.status === 200 && ajax.readyState === 4){
                        console.log(res)
                        return (res);
                    }
                };
            ajax.send();
        }

        console.log(objJson)

        const prevButton = document.getElementById('button_prev');
        const nextButton = document.getElementById('button_next');
        const clickPageNumber = document.querySelectorAll('.clickPageNumber');
        
        let current_page = 1;
        let records_per_page = 5;
        
        this.init = () => {
            changePage(1);
            pageNumbers();
            selectedPage();
            clickPage();
            addEventListeners();
    }
        
        let addEventListeners = () => {
            prevButton.addEventListener('click', prevPage);
            nextButton.addEventListener('click', nextPage);   
        }
            
        let selectedPage = () => {
            let page_number = document.getElementById('page_number').getElementsByClassName('clickPageNumber'); 
            for (let i = 0; i < page_number.length; i++) {
                if (i == current_page - 1) {
                    page_number[i].style.opacity = "1.0";
                } 
                else {
                    page_number[i].style.opacity = "0.5";
                }
            }   
        }  
        
        let checkButtonOpacity = () => {
        current_page == 1 ? prevButton.classList.add('opacity') : prevButton.classList.remove('opacity');
        current_page == numPages() ? nextButton.classList.add('opacity') : nextButton.classList.remove('opacity');
        }

        let changePage = (page) => {
            const listingTable = document.getElementById('listingTable');

            if (page < 1) {
                page = 1;
            } 
            if (page > (numPages() -1)) {
                page = numPages();
            }
        
            listingTable.innerHTML = "";

            // for(var i = (page -1) * records_per_page; i < (page * records_per_page) && i < objJson.length; i++) {
            //     listingTable.innerHTML += "<div class='objectBlock'>" + objJson[i].adName + "</div>";
            // }
            checkButtonOpacity();
            selectedPage();
        }

        let prevPage = () => {
            if(current_page > 1) {
                current_page--;
                changePage(current_page);
            }
        }

        let nextPage = () => {
            if(current_page < numPages()) {
                current_page++;
                changePage(current_page);
            } 
        }

        let clickPage = () => {
            document.addEventListener('click', function(e) {
                if(e.target.nodeName == "SPAN" && e.target.classList.contains("clickPageNumber")) {
                    current_page = e.target.textContent;
                    changePage(current_page);
                }
            });
        }

        let pageNumbers = () => {
            let pageNumber = document.getElementById('page_number');
                pageNumber.innerHTML = "";

            for(let i = 1; i < numPages() + 1; i++) {
                pageNumber.innerHTML += "<span class='clickPageNumber'>" + i + "</span>";
            }
        }

        let numPages = () => {
            return Math.ceil(objJson.length / records_per_page);  
        }
    }
    let pagination = new Pagination();
pagination.init();
})();