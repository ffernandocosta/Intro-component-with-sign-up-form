const form = document.querySelector(".free-trial__form");
const formFields = document.querySelectorAll("[required]");
const submitButton = document.querySelector(".free-trial__input-submit");

formFields.forEach((field) => {
    field.addEventListener( "blur", () => verifyField(field) );
    field.addEventListener( "input", () => verifyField(field) );
    field.addEventListener( "invalid", event => event.preventDefault() );
} )


const verifyField = (field) => {
    

    if (field.value === "") {
        field.classList.add('free-trial__input-error');
        field.nextElementSibling.classList.remove('remove-error');
    } else if (field.value) {
        field.classList.remove('free-trial__input-error');
        field.nextElementSibling.classList.add('remove-error');
    }
}