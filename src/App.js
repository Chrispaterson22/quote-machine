import './App.css'

function App() {
	return (
		<div className='App card shadow' id='quote-box'>
			<div className='quote-container'>
				<i className='fas fa-quote fa-quote-left'></i>

				<p className='blockquote mb-0' id='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
					repudiandae aliquid commodi numquam. Natus dolores vero adipisci
					itaque perspiciatis facere, exercitationem tempora deleniti nisi ipsa,
					non optio error incidunt atque nam voluptates beatae at blanditiis
					fugiat possimus quaerat! Magni itaque alias dolor amet vel iure,
					impedit voluptatem consequuntur maiores nihil!
				</p>
				<i className='fas fa-quote fa-quote-right'></i>
			</div>
			<div className='quote-author' id='author'>
				<span className='blockquote-footer'>Who said this</span>
			</div>
			<div className='btn-container'>
				<button
					type='button'
					title='Tweet me!'
					className='tweet-btn btn btn-outline-primary rounded-circle'
					id='tweet-quote'
				>
					<i className='fab fa-twitter'></i>
				</button>
				<button
					type='button'
					className='new-quote-btn btn btn-outline-primary rounded-pill'
					id='new-quote'
				>
					New Quote
				</button>
			</div>
		</div>
	)
}

export default App
