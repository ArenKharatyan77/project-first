document.addEventListener('DOMContentLoaded',function(){
	let click = document.querySelector('.btn1');
	let type = document.querySelector('.type');
	let click2 = document.querySelector('.btn2');
	let time;
	let GeneratorPssword = function(){
		let minLength = 8;
		let charachter = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456798.+-*/$6";
		let password = '';
		i = 0;
		while(i < minLength){
			password += charachter.charAt(Math.floor(Math.random()*charachter.length));
			i++;

		}
		return password;
	}
	let copied = function(){
		if (type.value == "") {
		type.style.borderColor = "red";
		document.querySelector('.none').style.display = 'inline' 
		document.querySelector('.none').innerHTML = "Empty!!! Not copied"
		}else{
		document.querySelector('.none').style.display = 'inline' 
		type.focus()
		type.select();
		document.execCommand('copy');
		}
	}

	click.addEventListener('click',function(){
		document.querySelector('.none').style.display = 'none' 
		type.value =  GeneratorPssword()
	})
	click2.addEventListener('click',function(){
		copied();
	})
})