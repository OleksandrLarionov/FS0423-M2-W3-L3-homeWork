const thatAllBooks = (books) => {
	const row = document.getElementById('main-row');
	books.forEach((book) => {
		const col = document.createElement('div');
		col.classList.add('col-12', 'col-lg-3', 'col');
		const newCard = document.createElement('div');
		newCard.classList.add('card');
		newCard.innerHTML = `
		<img src="${book.img}" class="card-img-top" alt="${book.title}">
			<div class="card-body d-flex flex-column">
			<h5 class="card-title">${book.title}</h5>
			<p class="card-text text-end">${book.price}$</p>
			<div>
			<a href="#" class="btn btn-primary" onclick='add(event)'>Add to Cart</a>
			<a href="#" class="btn btn-primary" onclick='deleteThis(event)'>Go delete</a>
			</div>
		`;
		col.appendChild(newCard);
		row.appendChild(col);
	});
};
const addToMainCart = (e) => {
	const title = e.target.parentNode.parentNode.querySelector('h5').innerText;
	const price = e.target.parentNode.parentNode.querySelector('p').innerText;
	const mainCart = document.getElementById('main-cart');
	const optionItem = document.createElement('option');
	optionItem.classList.add('justify-content-between', 'd-flex', 'my-2');
	optionItem.innerHTML = `<div class='fw-bold fs-5'>${title}: <span  class='text-primary fs-4 fw-bold'> ${price}$</span></div>
	<a href="#" class="btn btn-primary" onclick='deleteLi(event)'>Go delete</a>
	`;
	mainCart.appendChild(optionItem);
};

const add = (e) => {
	const title = e.target.parentNode.parentNode.querySelector('h5').innerText;
	const price = e.target.parentNode.parentNode.querySelector('p').innerText;
	const ulCart = document.getElementById('cart');
	const liCart = document.createElement('li');
	liCart.classList.add('justify-content-between', 'd-flex', 'my-2');
	liCart.innerHTML = `<div class='fw-bold fs-5'>${title}: <span  class='text-primary fs-4 fw-bold'> ${price}$</span></div>
	<a href="#" class="btn btn-primary" onclick='deleteLi(event)'>Go delete</a>
	`;
	ulCart.appendChild(liCart);
};
// Delete functions
const deleteThis = (e) => {
	e.target.closest('.col').remove();
};
const deleteLi = (e) => {
	e.target.closest('li').remove();
};

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
		console.log(data);
		thatAllBooks(data);
	})

	.catch((err) => {
		console.log('errored', err);
	});
