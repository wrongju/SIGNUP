let formInput = document.querySelectorAll('.forminput');
let claim = document.querySelector('.wrapper-claim');

// FORM START
let getFirstName = document.getElementById('firstname');
let getLastName = document.getElementById('lastname');
let getEmail = document.getElementById('email');
let getPassword = document.getElementById('password');
// FORM END

// ERROR START
let errorFirstName = document.querySelectorAll('.errorFirstName');
let errorLastName = document.querySelectorAll('.errorLastName');
let errorEmail = document.querySelectorAll('.errorEmail');
let errorPassword = document.querySelectorAll('.errorPassword');
// ERROR END

claim.addEventListener('click', () => {

	if (getFirstName.value == '') {
		getFirstName.parentElement.style.outline = '1px solid red'
		errorFirstName.forEach((el) => el.style.display = 'flex')
		getFirstName.style.paddingRight = '12px'
	} else {
		getFirstName.parentElement.style.outline = '1px solid black'
		errorFirstName.forEach((el) => el.style.display = 'none')
	}

	if (getLastName.value == '') {
		getLastName.parentElement.style.outline = '1px solid red'
		errorLastName.forEach((el) => el.style.display = 'flex')
		getLastName.style.paddingRight = '12px'
	} else {
		getLastName.parentElement.style.outline = '1px solid black'
		errorLastName.forEach((el) => el.style.display = 'none')
	}

	if (getEmail.value == '') {
		getEmail.parentElement.style.outline = '1px solid red'
		errorEmail.forEach((el) => el.style.display = 'flex')
		getEmail.style.paddingRight = '12px'
	} else {
		getEmail.parentElement.style.outline = '1px solid black'
		errorEmail.forEach((el) => el.style.display = 'none')
	}

	if (getPassword.value == '' || getPassword.value.length < 5) {
		getPassword.parentElement.style.outline = '1px solid red'
		errorPassword.forEach((el) => el.style.display = 'flex')
		getPassword.style.paddingRight = '12px'
	} else {
		getPassword.parentElement.style.outline = '1px solid black'
		errorPassword.forEach((el) => el.style.display = 'none')
	}
})


// SELECTING ONE INPUT
formInput.forEach((el) => {
	el.addEventListener('click', () => {
		formInput.forEach((el) => {
			el.classList.remove('selected');
		})
		el.classList.add('selected');
	})
})