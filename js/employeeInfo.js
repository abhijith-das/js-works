document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('frmEmployee');
    const nameInput = document.getElementById('txtFullName');
    const dobInput = document.getElementById('dob');
    const ageInput = document.getElementById('numAge');
    const salaryInput = document.querySelector('input[name="numSalary"]');
    const rdoGender = document.querySelectorAll('input[name="gender"]');
    const rdoHobby = document.querySelectorAll('input[name="hobby"]');

    const nameError = document.getElementById('fullNameError');
    const ageError = document.getElementById('ageError');
    const dobError = document.getElementById('dobError');
    const genderError = document.getElementById('genderError');
    const salaryError = document.getElementById('salaryError');
    const hobbyError = document.getElementById('hobbyError');

    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    const minDate = new Date(today.getFullYear() - 65, today.getMonth(), today.getDate());

    dobInput.max = formatDate(maxDate);
    dobInput.min = formatDate(minDate);

    function formatDate(date) {
        const year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, "0");
        let day = date.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}`

    }

    //salaryInput.value = null;
    //ageInput.value = null;


    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (!nameInput.value.trim()) {
            nameError.textContent = 'Name is required';
            nameInput.classList.add('ipBoxError');
        } else {
            nameError.textContent = '';
        }
        if (!dobInput.value.trim()) {
            dobError.textContent = 'Date of Birth is required';
            dobInput.classList.add('ipBoxError');
        } else {
            dobError.textContent = '';
        }

        if (!salaryInput.value.trim()) {
            salaryError.textContent = 'Salary is required';
            salaryInput.classList.add('ipBoxError');
        } else {
            salaryError.textContent = '';
        }
        if (!ageInput.value.trim()) {
            ageError.textContent = 'Age is required';
            ageInput.classList.add('ipBoxError');
        } else if (ageInput.value.trim() < 18) {
            ageError.textContent = 'Age should be greater than 18';
        } else {
            ageError.textContent = '';
        }

        let genderSelected = false;
        for (const checkbox of rdoGender) {
            if (checkbox.checked) {
                genderSelected = true;
            }
        }
        if (!genderSelected) {
            genderError.textContent = '  Select Gender';

        }

        let hobbySelected = false;
        for (const checkbox of rdoHobby) {
            if (checkbox.checked) {
                hobbySelected = true;
            }
        }
        if (!hobbySelected) {
            hobbyError.textContent = '  Select atleast one hobby';
        }


    });

    form.addEventListener('change', function(event) {

        var todayDate = new Date();
        //const todayDate = new Date().toISOString().split('T')[0];

        // dobInput.setAttribute("max", maxDate);

        // dobInput.setAttribute("min", minDate);
        var birthDate = new Date(dobInput.value.trim());
        var age = todayDate.getFullYear() - birthDate.getFullYear();
        var m = todayDate.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && todayDate.getDate() < birthDate.getDate())) {
            age--;
        }
        console.log(age);
        ageInput.value = age;
    })




})