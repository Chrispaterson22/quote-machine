import './App.css'

function App() {
	return (
		<div className='App card shadow'>
			<div className='card-body'>
				<i class='fas fa-quote-left'></i>
				<blockquote className='blockquote mb-0'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
					repudiandae aliquid commodi numquam. Natus dolores vero adipisci
					itaque perspiciatis facere, exercitationem tempora deleniti nisi ipsa,
					non optio error incidunt atque nam voluptates beatae at blanditiis
					fugiat possimus quaerat! Magni itaque alias dolor amet vel iure,
					impedit voluptatem consequuntur maiores nihil!
				</blockquote>
				<i class='fas fa-quote-right'></i>
				<footer class='blockquote-footer'>
					Someone famous in <cite title='Source Title'>Source Title</cite>
				</footer>
			</div>
		</div>
	)
}

export default App
