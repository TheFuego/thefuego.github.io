const header = document.getElementById('top')
const more = document.getElementById('more')
const side = document.querySelector('aside')

//console.log(aside)
let sticky = header.offsetTop;

let moreShown = false

window.onscroll = function() {checkTop()}

function checkTop() {
    if (window.pageYOffset >= 100) {
        header.classList.add("sticky")
        header.classList.remove("top-class");

        more.classList.add("sticky-more")
        more.classList.remove("more-class");
    } else {
        header.classList.remove("sticky");
        header.classList.add("top-class");

        more.classList.remove("sticky-more");
        more.classList.add("more-class");
    }
}

function showMore() {
    if(!moreShown){
        more.style.display = "flex"
        
        more.style.position = "fixed"
        more.style.paddingTop = "2vh"
        more.style.top = "8vh"
    
        more.style.overflow = "hidden"
    
        more.style.height = "100%"
        more.style.width = "50%"

        ///
        
        side.style.display = "inline"
        side.style.width = "50%"
        side.style.maxWidth = "55%"
        side.style.marginLeft = "50%"
    
        side.style.position = "fixed"
        side.style.zIndex = "1"

        if(isMain){
            side.style.display = "none"
        }
        
        moreShown = true
    }else{
        more.style.display = "none"
        side.style.display = "none"

        moreShown = false
    }
}