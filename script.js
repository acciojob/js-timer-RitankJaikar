// write js code here if required
const timer= document.querySelector("#timer");

setInterval(() => {
	const time= new Date();
	const options = {
	  day: '2-digit',
	  month: '2-digit',
	  year: 'numeric',
	  hour: '2-digit',
	  minute: '2-digit',
	  second: '2-digit'
	};
	timer.innerText= time.toLocaleString('en-GB', options);
}, 1000)