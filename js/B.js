document.addEventListener('DOMContentLoaded', function(){
    let section = document.getElementById("list");
    section.addEventListener('click', function(e){
        if(e.target.nodeName === 'H1'){
            let s = e.target.nextElementSibling.style.display;
            e.target.nextElementSibling.style.display = s == "block" ? "none" : "block";
        }

        if(e.target.nodeName == "LI"){
            let file = "markdown/" + e.target.parentElement.parentElement.firstChild.textContent.replace(" ", "_").replace("#", "Sharp") + "/" + e.target.textContent;
            loadData(file, "null", "article", importMarkdown);
        }
    })
})