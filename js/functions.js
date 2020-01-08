"use strict";

// header start //
// header end //

// hero start //
// hero end //

// progress bar start //
// progress bar end //

// our services start //
function renderServices(data){

    let HTML = '';

    for(let i=0; i<data.length; i++){
        const service = data[i]
        console.log(data)

    
        HTML +=  `<div class="services col-4 col-sm-12">
                    <div class="content">
                        <span>${service.icon}</span>
                        <h5>${service.heading}</h5>
                        <p>${service.par}</p>
                    </div>
                </div>`
    

    
        document.querySelector('#serv').innerHTML = HTML;
     }   
} 
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
