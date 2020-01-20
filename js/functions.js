"use strict";

// header start //
// header end //

// hero start //
// hero end //

// progress bar start //
function renderSkills(data) {
    let HTML = '';

    if (!Array.isArray(data)) {
        return console.error('Duomenu formatas blogas');
    }
    if (data.length === 0) {
        return console.error('Nera duomenu')
    }
    for (let i = 0; i < data.length; i++) {
        const skill = data[i];
        console.log(skill);

        HTML += `<div class="progress-bar">
        <div class="texts">
            <div class="title">${skill.tittle}</div>
            <div class="value">${skill.value}%</div>
        </div>
        <div class="bar">
            <div class="value" style="width:${skill.value}%;">
                <div class="loading"></div>
            </div>
        </div>
    </div>`

        console.log(HTML);

        document.querySelector('.progress-bar .col-12').innerHTML = HTML;


    }
    return;
}
// progress bar end //

// our services start //
function renderServices(data) {

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const service = data[i]
        console.log(data)


        HTML += `<div class="services col-4 col-sm-12">
                    <div class="content">
                    <i class="fa ${service.icon}" aria-hidden="true"></i>
                        <h5>${service.heading}</h5>
                        <p>${service.par}</p>
                    </div>
                </div>`



        document.querySelector('#serv').innerHTML = HTML;
    }
}
// our services end //

// achievements start //
function renderAchievements(data) {
    let HTML = '';

    if (!Array.isArray(data)) {
        return console.error('Duomenu formatas blogas');
    }
    if (data.length === 0) {
        return console.error('Nera duomenu')
    }

    for (let i = 0; i < data.length; i++) {
        const achievements = data[i]

        HTML += `<div class="col-3 col-sm-12 achievements">
                    <i class="fa ${achievements.icon}"></i>
                    <h4 class="counterup">${achievements.amount}</h4>
                    <p>${achievements.title}</p>                   
                    </div>`


        document.querySelector('#achieve').innerHTML = HTML;
    }
}
// achievements end //

// education & experience start //
function renderEducation(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const education = data[i]

        HTML += `<div class="info">
        <span class='bold'>${education.year}</span>
        <h6>${education.experience}</h6>
        <p>${education.text}</p>
        </div>`
        document.querySelector('#education').innerHTML = HTML;
    }
}
function renderExperience(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const education = data[i]

        HTML += `<div class="info">
        <span class='bold'>${education.year}</span>
        <h6>${education.experience}</h6>
        <p>${education.text}</p>
        </div>`

        document.querySelector('#experience').innerHTML = HTML;
    }
}
// education & experience end //

// gallery start //
function renderGallery(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const galleryPics = data[i]

        HTML += `<div class="col-4 col-sm-12 galleryImg" data-categories="${('' + galleryPics.category).toLowerCase()}">
                <img src="${galleryPics.img}" alt="">
                <div class="overlay"></div>
                <h4 class="picTitle">${galleryPics.title}</h4>
                <h6 class="picCategory">${galleryPics.category}</h6>
            </div>`

        document.querySelector('.galleryPics').innerHTML = HTML;
    }

    let uniqueList = [];

    // surenkame visas kategorijas i viena sarasa
    for (let i = 0; i < data.length; i++) {
        const subList = data[i].category;

        // atrenkame ir paliekame tik unikalias kategorijas is surinkto saraso
        for (let i = 0; i < subList.length; i++) {
            const category = subList[i].toLowerCase();

            if (uniqueList.indexOf(category) === -1) {
                uniqueList.push(category);
            }
        }
    }

    let htmlFilters = '<div class="filter-item active-filter">All</div>';
    for (let i = 0; i < uniqueList.length; i++) {
        htmlFilters += `<p class="filter-star">*</p><div class="filter-item">${uniqueList[i]}</div>`;
    }

    document.querySelector(".filters").innerHTML = htmlFilters;

    //****************Add event listeners on the filter****************** */
    const filtItems = document.querySelectorAll(".filter-item");
    const galleryItems = document.querySelectorAll('.galleryImg');


    for (let i = 0; i < filtItems.length; i++) {
        filtItems[i].addEventListener("click", (e) => {
            let selected = document.querySelector(".active-filter");
            selected.classList.remove("active-filter");
            e.target.classList.add("active-filter");
            selected = e.target;
        })
    }

    for (let i = 0; i < filtItems.length; i++) {
        // pridedam event listenerius
        filtItems[i].addEventListener('click', (event) => {
            // suzinome kas buvo paspaustas
            const findWhat = event.target.textContent;
            if (findWhat === 'All') {
                for (let w = 0; w < galleryItems.length; w++) {
                    const work = galleryItems[w];
                    work.style.display = "block";
                }
            } else {
                // ieskome kuriuose gallery-item elementuose yra paminetas findWhat
                for (let w = 0; w < galleryItems.length; w++) {
                    const work = galleryItems[w];
                    const categories = work.dataset.categories;

                    if (categories.indexOf(findWhat) >= 0) {
                        work.style.display = "block";
                    } else {
                        work.style.display = "none";
                    }
                }
            }
        })
    }
    return;
}
// gallery end //

// testimonials start //
function renderTestimonials(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const testimonials = data[i];

        HTML += `<div class="col-6 testimonial">
                <i class="fa fa-user-circle-o"></i>
                <h4>${testimonials.name}</h4>
                <span>${testimonials.company}</span>
                <p>${testimonials.review}</p>
                </div>`


        document.querySelector(".testimonial").innerHTML = HTML;
    }
    const bar1 = document.querySelector(".bar1");
    const bar2 = document.querySelector(".bar2");
    const bar3 = document.querySelector(".bar3");

    bar1.addEventListener("click", () => {
        bar2.classList.remove("activeBar");
        bar3.classList.remove("activeBar");
        bar1.classList.add("activeBar");
    })
    bar2.addEventListener("click", () => {
        bar1.classList.remove("activeBar");
        bar3.classList.remove("activeBar");
        bar2.classList.add("activeBar");
    })
    bar3.addEventListener("click", () => {
        bar1.classList.remove("activeBar");
        bar2.classList.remove("activeBar");
        bar3.classList.add("activeBar");
    })
}
// testimonials end //

// partners start //
function renderPartners(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const Partners = data[i]

        HTML += ` <div class="col-2 col-sm-12 inline-block">
                <img class="logo" src="${Partners.img}">
             </div>`

        document.querySelector('#partners').innerHTML = HTML;
    }
}
// partners end //

// blog start //
var modal = document.getElementById("videoStory");
var img = document.getElementById("videoLink");


img.onclick = function(){
  modal.style.display = "block";
  
}
var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
} 

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
// blog end //

//back to top//
const backToTopBtn = document.querySelector(".fa-angle-up");
backToTopBtn.style.display = "none";

window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
})
//back to top
