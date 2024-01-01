let anchorLinks = document.querySelectorAll("#anchor");
for(let a of anchorLinks){
    console.log((a.getAttribute('href')));
    let quary = a.getAttribute('href');
    a.addEventListener("click", function(event) 
    {
        event.preventDefault();
        document.querySelector(quary).scrollIntoView({behavior: 'smooth'});
    },false)

}
/*let resumeHref = document.querySelector("#resumeHref");
resumeHref.onclick = function(){
    window.open("./Resume_Daniel_Joseph_Jr.pdf",'_blank');
};*/