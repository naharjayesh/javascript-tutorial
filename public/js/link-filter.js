let hyperlinkElement = document.querySelectorAll('.link');

let keyword = 'jayesh';

Array.from(hyperlinkElement).forEach(function(element){
    if(String(element).includes(keyword))
        console.log(element.href);
});