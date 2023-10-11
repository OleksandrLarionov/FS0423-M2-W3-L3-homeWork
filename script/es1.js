const thatAllBooks = (books) => {
	const row = document.getElementById('main-row');
	books.forEach((book) => {
		const col = document.createElement('div');
		col.classList.add('col-12', 'col-lg-3', 'col', 'film', 'shadow-lg');
		const newCard = document.createElement('div');
		newCard.style.height = '620px';
		newCard.classList.add('card', 'my-1');
		newCard.innerHTML = `
		<img src="${book.img}" height = '400px' class="card-img-top" alt="${book.title}">
			<div class="card-body d-flex flex-column justify-content-between">
			<h5 class="card-title">${book.title}</h5>
			<p class="card-text text-end"><span class='text-primary fw-bold'>Price</span>: ${
				parseInt(book.price * 100) / 100
			}$</p>
			<div>
			<a href="#" class="btn btn-primary" onclick='add(event)'>Add to Cart</a>
			<a href="#" class="btn btn-secondary" onclick='deleteThis(event)'>Go delete</a>
			</div>
		`;
		col.appendChild(newCard);
		row.appendChild(col);
	});
};

const add = (e) => {
	const title = e.target.parentNode.parentNode.querySelector('h5').innerText;
	const price = e.target.parentNode.parentNode.querySelector('p').innerText;
	const ulCart = document.getElementById('cart');
	const liCart = document.createElement('li');
	liCart.classList.add('justify-content-between', 'd-flex', 'm-2');
	liCart.innerHTML = `<div class='fw-bold fs-5'>${title}: <span  class='text-primary fs-4 fw-bold'> ${price}</span></div>
	<a href="#" class="btn btn-danger mx-3" onclick='deleteLi(event)'>Go delete</a>
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
