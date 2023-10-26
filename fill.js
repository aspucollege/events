const return_btn = document.querySelector(".return-btn");
const submit_btn = document.querySelector(".submit-btn");
const scriptURL = "https://script.google.com/macros/s/AKfycbyWEL99eTisajfB_zkX9mBQ952_GoxSboetH0Tz4oQfJjbtvi6jGC9iTfndi2GSNeCQfA/exec"
const form = document.forms['contactform']


return_btn.addEventListener("click", () => {
	window.open("index.html");
});		

form.addEventListener('submit', e => {
	var name_value = document.querySelector(".name-value").value;
	var surname_value = document.querySelector(".surname-value").value;
	var faculty_value = document.querySelector(".faculty-value").value;
	var class_value = document.querySelector(".class-value").value;
	var social_media_value = document.querySelector(".social-media-value").value;
	var contact_value = document.querySelector(".contact-value").value;
	var event_value = document.querySelector(".event-value").value;

	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => alert("Հարգելի " + name_value + " " + surname_value + " (" + faculty_value + " " + class_value + "), Ձեր հայտը հաջողությամբ ուղարկվել է: " + event_value + " մրցույթին մասնակցելու համար Ձեզ հետ կապ կհաստատեն հետևյալ տվյալներով - " + social_media_value + " - " + contact_value + ": Շնորհակալ ենք գրանցվելու համար:"), form.reset())
		.catch(error => alert("Ինչ-որ բան այն չէ: Խնդրում ենք փորձել նորից:"))
		    
});
