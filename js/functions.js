"use strict";

// header start //
    window.addEventListener('scroll', () =>{
        const circle = document.getElementsByClassName("circle");
        const logo = document.getElementById("elvish");
        const link = document.getElementsByClassName("link");
        const fixed = document.getElementById('myHeader');
        if (window.scrollY > 0){
            for (let i = 0; i<link.length; i++){
                link[i].style.color = ('black')
                
            }
            fixed.classList.add('fixed');
            for (let i = 0; i<circle.length; i++){
                circle[i].style.background = ('black');
                console.log(circle[i])
            }
            fixed.style.boxShadow = ('0px 1px 10px #e6e6e6')
            logo.style.color = ('black')
            
        }else{
            fixed.classList.remove('fixed');
            for (let i = 0; i<circle.length; i++){
                circle[i].style.background = ('white');
                
            }
            for (let i = 0; i<link.length; i++){
                link[i].style.color = ('white')
                
            }
            fixed.style.boxShadow = ('none')
            logo.style.color = ('white')
        }
    })
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
    const testContainer = document.querySelector(".big")

    bar1.addEventListener("click", () => {
        //griztam i pradini taska
        if (bar3.classList.contains("activeBar")) {
            testContainer.style.transition = "transform 3s ease-in-out";
            testContainer.style.transform = "translateX(0%)";
        }
        //griztam i pradini taska
        if (bar2.classList.contains("activeBar")) {
            testContainer.style.transition = "transform 1.5s ease-in-out";
            testContainer.style.transform = "translateX(0%)";
        }
        bar2.classList.remove("activeBar");
        bar3.classList.remove("activeBar");
        bar1.classList.add("activeBar");
    })
    bar2.addEventListener("click", () => {
        //move div i desine per trecdali
        if (bar1.classList.contains("activeBar")) {
            testContainer.style.transition = "transform 1.5s ease-in-out";
            testContainer.style.transform = "translateX(-33.3%)";
        }
        //move div i kaire per trecdali
        if (bar3.classList.contains("activeBar")) {
            testContainer.style.transition = "transform 1.5s ease-in-out";
            testContainer.style.transform = "translateX(-33.3%)";
        }
        bar1.classList.remove("activeBar");
        bar3.classList.remove("activeBar");
        bar2.classList.add("activeBar");
    })
    bar3.addEventListener("click", () => {
        //move div i gala
        if (bar1.classList.contains("activeBar")) {
            testContainer.style.transition = "transform 3s ease-in-out";
            testContainer.style.transform = "translateX(-66.7%)";
        }
        //move div i gala
        if (bar2.classList.contains("activeBar")) {
            testContainer.style.transition = "transform 1.5s ease-in-out";
            testContainer.style.transform = "translateX(-66.7%)";
        }
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
