function validateForm() {
    const gender = document.getElementsByName('gender');
    let selectedGender = '';

    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectedGender = gender[i].value;
        }
    }

    const params = [
        {
            name: 'Fullname',
            value: document.getElementById('fullname').value,
        },
        {
            name: 'Username',
            value: document.getElementById('username').value,
        },
        {
            name: 'Age',
            value: +document.getElementById('age').value,
        },
        {
            name: 'Email',
            value: document.getElementById('email').value,
        },
        {
            name: 'Gender',
            value: selectedGender,
        },
        {
            name: 'Address',
            value: document.getElementById('address').value,
        },
        {
            name: 'Password',
            value: document.getElementById('password').value,
        },
        {
            name: 'Repassword',
            value: document.getElementById('confirm-password').value,
        },
        {
            name: 'Terms',
            value: document.getElementById('terms').value,
        },
    ];

    if (validate(params) === false) {
        return false;
    }

    alert('Registration Successful !');
    return true;
}

function validate (params) {
    let i = 0;
    for (const param of params) {
        console.log(param.name, i);
        i++;
        if (isNull(param.value)) {
            alert(param.name + ' must not be empty !');
            return false;
        } 
        
        if (param.value.length > 255) {
            alert(param.name + ' exceeds character limit 255 characters !');
            return false;
        }

        if (param.name === 'Username' && param.value.length < 3) {
            alert(param.name + ' must be at least 3 characters !');
            return false;
        }

        if (param.name === 'Fullname' && param.value.length < 3) {
            alert(param.name + ' must be at least 3 characters !');
            return false;
        }

        if (param.name === 'Age' && +param.value < 17) {
            alert('You must be 17 years old or older !');
        }

        if ((param.name === 'Password' && param.value.length < 6) || 
        ( param.name === 'Repassword' && param.value.length < 6)) {
            alert(param.name + ' must be at least 6 characters !');
            return false;
        }

        if (param.name === 'Terms' && !document.getElementById('terms').checked) {
            alert('You must agree with the terms and conditions !');
            return false;
        }

        if (param.name === 'Email') {
            if (validateEmail(param) === false) {
                return false;
            }
        }
    }

    if (params[6].value !== params[7].value) {
        alert('Password does not match !');
        return false;
    }

    return true;
}

function isNull(value) {
    if (value === null || value === '' || value === 'undefined') {
        return true;
    } 
    return false;
}


function validateEmail(email) {

    var atSymbol = email.value.indexOf('@');
    if(atSymbol < 1) {
        alert('Invalid email format !');
        return false;
    }
    
    var dot = email.value.indexOf('.');
    if(dot <= atSymbol + 2) {
        alert('Invalid email format !');
        return false;
    }
    
    if (dot === email.value.length - 1) {
        alert('Invalid email format !');
        return false;
    }
    
    return true;
}
