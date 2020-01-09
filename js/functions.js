"use strict";

// header start //
// header end //

// hero start //
// hero end //

// progress bar start //
function renderSkills(data) {
    let HTML ='';

    if( !Array.isArray(data)) {
        return console.error('Duomenu formatas blogas');   
    }
    if(data.length === 0){
        return console.error('Nera duomenu')
    }
    for ( let i=0; i<data.length; i++) {
        const skill = data[i];
        console.log(skill);
        
        HTML +=  `<div class="progress-bar">
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
// our services end //

// achievements start //
// achievements end //

// education & experience start //
// education & experience end //

// gallery start //
// gallery end //

// partners start //
// partners end //

// blog start //
// blog end //
