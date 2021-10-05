button.addEventListener("click",show)
dropDownEL=document.querySelector("dropdown-menu");
function show(){
    dropDownEL.setAttribute( 'class', 'myCssClass' );
}