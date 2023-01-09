const formFields = document.querySelectorAll("[required]");
const formSubmit = document.querySelector("#form-submit");



formFields.forEach((field) => {
    field.addEventListener( "blur", () => verifyField(field) );
    field.addEventListener( "input", () => verifyField(field) );
    field.addEventListener( "invalid", e => e.preventDefault() );

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

formSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    formFields.forEach((field) => {
        verifyField(field);
    })

})
