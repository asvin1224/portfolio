// Statistics Counter

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

    let target =
    +counter.dataset.target;

    let count = 0;

    let update = ()=>{

        let speed =
        target / 80;

        if(count < target){

            count += speed;

            counter.innerText =
            Math.ceil(count);

            requestAnimationFrame(update);

        }else{

            counter.innerText =
            target + "+";
        }
    };

    update();

});


const roles = [
    "AI/ML Intern",
    "Machine Learning Enthusiast",
    "Python Developer",
    "Future AI Engineer"
];

let roleIndex = 0;
let charIndex = 0;

const typingText =
document.getElementById("typing-text");

function typeRole(){

    if(charIndex < roles[roleIndex].length){

        typingText.textContent +=
        roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeRole,100);

    }else{

        setTimeout(eraseRole,1500);
    }
}

function eraseRole(){

    if(charIndex > 0){

        typingText.textContent =
        roles[roleIndex].substring(
        0,
        charIndex-1
        );

        charIndex--;

        setTimeout(eraseRole,50);

    }else{

        roleIndex++;

        if(roleIndex >= roles.length){

            roleIndex = 0;
        }

        setTimeout(typeRole,300);
    }
}

typeRole();















const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

    reveals.forEach(element=>{

        const top =
        element.getBoundingClientRect().top;

        const trigger =
        window.innerHeight - 100;

        if(top < trigger){

            element.classList.add("active");
        }

    });

});