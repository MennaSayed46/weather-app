let Name = document.querySelector('#name');
let email = document.querySelector('#email');
let companyName = document.querySelector('#companyName');
let website = document.querySelector('#website');
let textarea = document.querySelector('textarea');
let warning = document.querySelector(".warning");
let btnSubmit = document.querySelector('.btnSubmit');
let Success = document.querySelector('.Success');


let news=document.querySelector('.news');
let photos=document.querySelector('.photos');
let liveCameras=document.querySelector('.liveCameras');
let parent =document.querySelector(".parent");
let navPages =document.querySelector(".navPages");
let body =document.querySelector("#body");
let homeNav =document.querySelector(".homeNav");
console.log(parent);


//navPages

news.addEventListener('click',function(eventInfo){
    navPages.classList.remove('d-none');
    parent.classList.add('d-none');
    homeNav.classList.add('text-light')

})
photos.addEventListener('click',function(eventInfo){
    navPages.classList.remove('d-none');
    parent.classList.add('d-none');
    homeNav.classList.add('text-light')

})
liveCameras.addEventListener('click',function(eventInfo){
    navPages.classList.remove('d-none');
    parent.classList.add('d-none');
    homeNav.classList.add('text-light')

})






Name.addEventListener('input', function (e) {
    validation(Name);
})
email.addEventListener('input', function (e) {
    validation(email);
})
companyName.addEventListener('input', function (e) {
    validation(companyName);
})
website.addEventListener('input', function (e) {
    validation(website);
})





function validation(element) {
    var regex = {
        name: /[a-zA-Z]{3,100}/,
        email: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/,
        companyName: /[a-zA-Z]{3,100}/,
        website: /[a-zA-Z]{3,100}/
    };



    if (regex[element.id].test(element.value)) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');

    }
    else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
    };


};



btnSubmit.addEventListener('click', function (e) {
    if (Name.classList.contains('is-valid') && email.classList.contains('is-valid') && companyName.classList.contains('is-valid') && website.classList.contains('is-valid')) {
        Success.classList.remove('d-none');
        setTimeout(clearForm, 500)
        Name.classList.remove('is-valid');
        email.classList.remove('is-valid');
        companyName.classList.remove('is-valid');
        website.classList.remove('is-valid');


    }
    else if (Name.value == '' || email.value == '' || companyName.value == "" || website.value == "") {
        warning.classList.remove('d-none')
    }

});


Name.addEventListener('click', function (e) {
    warning.classList.add('d-none')
});
email.addEventListener('click', function (e) {
    warning.classList.add('d-none')
});
companyName.addEventListener('click', function (e) {
    warning.classList.add('d-none')
});
website.addEventListener('click', function (e) {
    warning.classList.add('d-none')
});


function clearForm() {
    email.value = '';
    Name.value = '';
    companyName.value = '';
    website.value = '';
    if (textarea.value != '') {
        textarea.value = '';
    }
    Success.classList.add('d-none')
};













