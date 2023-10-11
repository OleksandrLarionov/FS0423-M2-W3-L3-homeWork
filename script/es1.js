fetch(' https://striveschool-api.herokuapp.com/books')
	.then((res) => {
		if (res.ok) {
			return res.json();
		} else {
			if (res.status === 404) {
				throw new Error('404 Not Found');
			} else if (res.status === 500) {
				throw new Error('500 internal server error');
			} else {
				throw new Error('BIG Error');
			}
		}
	})
	.then((data) => {
		// Book 1
		const cardTitle1 = document.getElementById('cardTitle1');
		const cardPrice1 = document.getElementById('cardPrice1');
		const card1 = document.getElementById('card1');
		let add = document.getElementById('add');
		let drop = document.getElementById('drop');
		const liCart = () => {
			const cart = document.getElementById('cart');
			const myLi = document.createElement('li');
			myLi.classList.add('product');
			cart.appendChild(myLi);
		};
		console.log('data', data);
		data.forEach((title) => {});
		// title
		cardTitle1.innerHTML = ` ${data[0].title}`;
		cardPrice1.innerHTML = `Price : ${data[0].price}`;
		// Buttons
		add.addEventListener('click', () => {
			liCart();
			const list = document.getElementsByClassName('product')[0];
			list.innerHTML = `Title:${data[0].title}, Price:${data[0].price} <a href="#" class="btn btn-primary" id="drop2">Drop</a>`;
			const drop2 = document.getElementById('drop2');
			drop2.addEventListener('click', () => {
				cart.removeChild(list);
			});
		});
		drop.addEventListener('click', () => {
			card1.classList.toggle('d-none');
		});
		// Book 2
		const cardTitle2 = document.getElementById('cardTitle2');
		const cardPrice2 = document.getElementById('cardPrice2');
		const card2 = document.getElementById('card2');
		const add2 = document.getElementById('add2');
		const drop2 = document.getElementById('drop2');
		// title
		cardTitle2.innerHTML = ` ${data[1].title}`;
		cardPrice2.innerHTML = `Price : ${data[1].price}`;
		// Buttons
		add2.addEventListener('click', () => {
			liCart();
			const list = document.getElementsByClassName('product')[1];
			list.innerHTML = `Title:${data[1].title}, Price:${data[1].price} <a href="#" class="btn btn-primary" id="drop2">Drop</a>`;
			const drop2 = document.getElementById('drop2');
			drop2.addEventListener('click', () => {
				cart.removeChild(list);
			});
		});
		drop2.addEventListener('click', () => {
			card2.classList.toggle('d-none');
		});
		// Book 3
		const cardTitle3 = document.getElementById('cardTitle3');
		const cardPrice3 = document.getElementById('cardPrice3');
		const card3 = document.getElementById('card3');
		const add3 = document.getElementById('add3');
		const drop3 = document.getElementById('drop3');
		// title
		cardTitle3.innerHTML = ` ${data[2].title}`;
		cardPrice3.innerHTML = `Price : ${data[2].price}`;
		// Buttons
		add3.addEventListener('click', () => {
			liCart();
			const list = document.getElementsByClassName('product')[2];
			list.innerHTML = `Title:${data[2].title}, Price:${data[2].price} <a href="#" class="btn btn-primary" id="drop3">Drop</a>`;
			const drop3 = document.getElementById('drop3');
			drop3.addEventListener('click', () => {
				cart.removeChild(list);
			});
		});
		drop3.addEventListener('click', () => {
			card3.classList.toggle('d-none');
		});
		// Book 4
		const cardTitle4 = document.getElementById('cardTitle4');
		const cardPrice4 = document.getElementById('cardPrice4');
		const card4 = document.getElementById('card4');
		const add4 = document.getElementById('add4');
		const drop4 = document.getElementById('drop4');
		// title
		cardTitle4.innerHTML = ` ${data[3].title}`;
		cardPrice4.innerHTML = `Price : ${data[3].price}`;
		// Buttons
		add4.addEventListener('click', () => {
			liCart();
			const list = document.getElementsByClassName('product')[3];
			list.innerHTML = `Title:${data[3].title}, Price:${data[3].price} <a href="#" class="btn btn-primary" id="drop4">Drop</a>`;
			const drop4 = document.getElementById('drop4');
			drop4.addEventListener('click', () => {
				cart.removeChild(list);
			});
		});
		drop4.addEventListener('click', () => {
			card4.classList.toggle('d-none');
		});
	})

	.catch((err) => {
		console.log('errored', err);
	});
