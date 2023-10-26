const return_btn = document.querySelector(".return-btn");
const submit_btn = document.querySelector(".submit-btn");
const scriptURL = "https://script.google.com/macros/s/AKfycbwGN4onf-9W1Ui4g_jbaMx-52PCLPlV7WerihlznygDMFxSbKjciRNXSg57awZYkshfTQ/exec"
const form = document.forms['contactform']


return_btn.addEventListener("click", () => {
	window.open("index.html");
});		

form.addEventListener('submit', e => {
	var name_value = document.querySelector(".name-value").value;
	var surname_value = document.querySelector(".surname-value").value;
	var social_media_value = document.querySelector(".social-media-value").value;
	var contact_value = document.querySelector(".contact-value").value;

	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => alert("Հարգելի " + name_value + " " + surname_value + ", Ձեր հայտը հաջողությամբ ուղարկվել է: Ձեզ հետ կապ կհաստատեն հետևյալ տվյալներով - " + social_media_value + " - " + contact_value + "Շնորհակալ ենք հարցի համար"), form.reset())
		.catch(error => alert("Ինչ-որ բան այն չէ: Խնդրում ենք փորձել նորից:"))
		    
});