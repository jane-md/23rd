// ==========================
// NAVBAR BLUR
// ==========================




// ==========================
// LETTER
// ==========================

const letterCard = document.querySelector(".letter-card");

const cardTop = document.querySelector(".card-top");

cardTop.addEventListener("click", () => {

    letterCard.classList.toggle("active");

});



// ==========================
// SCROLL REVEAL
// ==========================

const reveals = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

reveals.forEach(section=>{

    section.classList.add("reveal");

    observer.observe(section);

});




document.addEventListener("keydown",(e)=>{

    if(e.key.toLowerCase()=="l"){

        alert(

`🤍

One more thing...

I'll continue choosing you,

even on ordinary days.

Always.

🤍`

        );

    }

});
