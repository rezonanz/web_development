
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const selected = dropdown.querySelector('.selected');
    const options = dropdown.querySelectorAll('.menu li');


    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});




// ПЕРВАЯ СТРАНИЦА!
let form = document.querySelector('.registration_form');
let inputName = document.querySelector('#name');
// let inputMan = document.querySelector('#man');
// let inputGirl = document.querySelector('#girl');
let inputBirthday = document.querySelector('#birthday');
let inputTg = document.querySelector('#tg');
let inputTel = document.querySelector('#tel');
let inputAboutMe = document.querySelector('#about_me');

let formInputs = [inputName,inputTg,inputTel,inputAboutMe];

document.querySelector('.name_user_information_right_block').textContent = inputName.value;
inputName.addEventListener('keyup', function() {
            document.querySelector('.name_user_information_right_block').textContent = this.value;
            if(this.value !== '') {
                document.querySelector('.name_user_information_right_block').classList.remove('name_empty')
            }
            else {
                document.querySelector('.name_user_information_right_block').classList.add('name_empty')
            }
        })

if (document.querySelector('input[name="gender"]')) {
    document.querySelectorAll('input[name="gender"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
        document.querySelector('#user_gender').textContent = event.target.value;
        document.querySelector('#user_gender').classList.remove('gender_empty')
        // var item = event.target.value;
        // console.log(item);
    });
    });
}

document.querySelector('#user_about_me').textContent = inputAboutMe.value;
inputAboutMe.addEventListener('keyup', function() {
            document.querySelector('#user_about_me').textContent = this.value;
            if(this.value !== '') {
                document.querySelector('#user_about_me').classList.remove('big_empty')
            }
            else {
                document.querySelector('#user_about_me').classList.add('big_empty')
            }
        })


// function validateName(name) {
//     let re = /^[A-ЯЁ][а-яё]+\s[A-ЯЁ][а-яё]+$/;
//     return re.test(String(name));
// }

// function validatePhone(phone) {
//     let re = /^[0-9\s]*$/;
//     return re.test(String(phone));
// }

form.onsubmit = function() {
    // console.log('works');
    let nameVal = inputName.value;
    let phoneVal = inputTel.value;
    let tgVal = inputTg.value;

    // if (!validateName(nameVal)) {
    //     inputName.classList.add('error');
    //     document.querySelector('#nameempty').textContent = 'Неверный формат ввода'
    //     // return false;
    // } else {
    //     inputName.classList.remove('error');
    //     document.querySelector('#nameempty').textContent = ''
    // }
    // if (!validatePhone(phoneVal)) {
    //     inputTel.classList.add('error');
    //     document.querySelector('#telempty').textContent = 'Неверный формат ввода'
    //     return false;
    // } else {
    //     inputTel.classList.remove('error');
    //     document.querySelector('#telempty').textContent = ''
    // }
    
    formInputs.forEach(function (input) {
        if(input.value === '') {
            input.classList.add('error');
            document.querySelector('#' + String(input.name) + 'empty').textContent = 'Обязательное поле'
            return false;
        }
        else {
            input.classList.remove('error')
            document.querySelector('#' + String(input.name) + 'empty').textContent = ''
        }
    });
    return false;
}


// function validation(form) {
//     let result = true; 

//     const allInputs = form.querySelectorAll('input')
//     for (const input of allInputs) {
//         if(input.value == "") {
//             console.log('Ошибка ввода')
//         }
//     }

//     return result
// }


// const dropdowns = document.querySelectorAll(".dropdown_item");

// dropdowns.forEach(dropdown => {
//     const select = document.querySelector(".selected");
//     const caret = document.querySelector(".caret");
//     const menu = document.querySelector(".dropdown_menu");
//     const options = document.querySelector(".dropdown_menu li");
     
//     select.addEventListener('click', () => {
//         // select.classList.toggle('select-clicked');
//         caret.classList.toggle('caret-rotate');
//         menu.classList.toggle('dropdown_menu_open')
//     });

//     options.forEach(option => {
//         option.addEventListener('click', () => {
//             caret.classList.remove('caret-rotate');
//             menu.classList.remove('dropdown_menu_open');
//         });
//     });

// });


