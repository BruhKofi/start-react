import React from 'react';
import ReactDOM from 'react-dom';

//import App from './App';
import { data } from './data';
//destructured property

//Booklist is a stateless function component

const Book = ( {book}) => (
	<li>
		{book.title} -- {book.price}
	</li>
);

const Booklist = (props) => (
	<ul>
		{props.books.map(book => {
			return (
			<Book  key={book.id} book={book}/>
				);
		})}
	</ul>
);

ReactDOM.render(
  <Booklist books={data.books}/>,git
  document.getElementById('root')
);
