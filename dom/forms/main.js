'use strict';

const formTest1_name = document.forms.form_test1.name;

formTest1_name.addEventListener('input', () => {
    let nameValue = document.getElementById("name_value");
    nameValue.textContent = formTest1_name.value;
})

const formTest1_Password = document.forms.form_test1.password;
const checkBox = document.forms.form_test1.checkBox;

checkBox.addEventListener('change', () => {
    if (checkBox.checked === true){
        formTest1_Password.addEventListener('input', () => {
            let hiddenPassword = document.getElementById("hiddenPassword");
            console.log(formTest1_Password.value);
            hiddenPassword.textContent = formTest1_Password.value;
        });
    }
    else{
        hiddenPassword.textContent = "";
    }
})
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const file_image = document.forms.form_test1.image_file;
const preview = document.forms.form_test1.preview;
file_image.addEventListener('change', (e) => {
    // console.log(e.target.files[0]);
    const uploadFile = e.target.files[0];

    const reader = new FileReader();
    reader.addEventListener('load', () => {
       preview.src = reader.result;//Base64形式の文字列 FileReader()で使えるようになってる;
       console.log(preview.src);
    });
    reader.readAsDataURL(uploadFile);
})

    


