import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classes from './App.css';


// class App extends React.Component {
//   render(){
//     return React.createElement('h1', null, 'Hello Eggheads')
//   }  
// }
// export default App

// const App = () => <h1>Hello stateless</h1>
// export default App

//--------------------------------

class App extends React.Component {
	// constructor(){
	// 	super();
	// 	this.state = {
	// 		txt: 'this is the jovs txt',
	// 		cat: 0
	// 	}
	// }
	// update(e){
	// 	this.setState({txt: e.target.value})
	// }

	// render(){
	// 	return (
	// 		<div>
	// 			<input type="text"
	// 			onChange={this.update.bind(this)}/>
	// 			<h1>{this.state.txt} - {this.state.cat}</h1>
	// 		</div>
	// 	)
	// }

	// -------------------------------

  	// render(){
   //  	let txt = this.props.txt
   //  	return <h1>{txt}</h1>
  	// }

  	// -------------------------------

  	// render(){
  	// 	return (
  	// 		<div>
  	// 			<h1>{this.state.txt}</h1>
  	// 			<Widget update={this.update.bind(this)}/>
  	// 		</div>
  	// 	)
  	// }

  	// -------------------------------

  	// render(){
  	// 	return <Button>I <Heart /> React</Button>
  	// }

  	// -------------------------------

  	// render(){
  	// 	return <Title text="This Text"/>
  	// }

  	// -------------------------------

	// constructor(){
	// 	super();
	// 	this.state = {currentEvent: '---'}
	// 	this.update = this.update.bind(this)
	// }
	// update(e){
	// 	this.setState({currentEvent: e.type})
	// }
  	// render(){
  	// 	return (
  	// 		<div>
  	// 			<textarea
  	// 				onKeyPress={this.update}
  	// 				onCopy={this.update}
  	// 				onCut={this.update}
  	// 				onPaste={this.update}
  	// 				onFocus={this.update}
  	// 				onBlur={this.update}
  	// 				onDoubleClick={this.update}
  	// 				onTouchStart={this.update}
  	// 				onTouchMove={this.update}
  	// 				onTouchEnd={this.update}
  	// 				cols="30"
  	// 				rows="10"/>
  	// 			<h1>{this.state.currentEvent}</h1>
  	// 		</div>
  	// 	)
  	// }

  	// -------------------------------

  	// constructor(){
  	// 	super();
  	// 	this.state = {a: ''}
  	// }
  	// update(){
  	// 	this.setState({
  	// 		// a: this.a.value,
  	// 		// a: ReactDOM.findDOMNode(this.a).value,
  	// 		a: this.a.refs.input.value,
  	// 		b: this.refs.b.value
  	// 	})
  	// }
  	// render(){
  	// 	return (
  	// 		<div>
  	// 			<Input
  	// 			ref={ component => this.a = component}
  	// 			update={this.update.bind(this)}
  	// 			/> {this.state.a}
  	// 			<hr />
  	// 			<input
  	// 			ref="b"
  	// 			type="text"
  	// 			onChange={this.update.bind(this)}
  	// 			/> {this.state.b}
  	// 		</div>
  	// 	)
  	// }

  	// -------------------------------

  	// constructor(){
  	// 	super()
  	// 	this.state = {val: 0}
  	// 	this.update = this.update.bind(this)
  	// }
  	// update(){
  	// 	this.setState({val: this.state.val + 1})
  	// }
  	// componentWillMount(){
  	// 	console.log('componentWillMount')
  	// 	this.setState({m: 2})
  	// }
  	// render(){
  	// 	console.log('render');
  	// 	return <button onClick={this.update}>{this.state.val * this.state.m}</button>
  	// }
  	// componentDidMount(){
  	// 	console.log('componentDidMount')
  	// 	this.inc = setInterval(this.update, 500)
  	// }
  	// componentWillUnmount(){
  	// 	console.log('componentWillUnmount')
  	// 	clearInterval(this.inc)
  	// }

  	// -------------------------------

  	// constructor(){
  	// 	super();
  	// 	this.state = {increasing: false}
  	// }
  	// update(){
  	// 	ReactDOM.render(
  	// 		<App val={this.props.val+1} />,
  	// 		document.getElementById('root'))
  	// }
  	// componentWillReceiveProps(nextProps){
  	// 	this.setState({increasing: nextProps.val > this.props.val})
  	// }
  	// shouldComponentUpdate(nextProps, nextState){
  	// 	return nextProps.val % 5 === 0;
  	// }
  	// render(){
  	// 	console.log(this.state.increasing)
  	// 	return (
  	// 		<button onClick={this.update.bind(this)}>
  	// 			{this.props.val}
  	// 		</button>
  	// 	)
  	// }
  	// componentDidUpdate(prevProps, prevState){
  	// 	console.log('prevProps: ' + prevProps.val)
  	// }

  	// -------------------------------

  // 	constructor(){
  // 		super();
  // 		this.state = {items: [{
		// 	"name": "Luke Skywalker",
		// 	"height": "172",
		// 	"mass": "77",
		// 	"hair_color": "blond",
		// 	"skin_color": "fair",
		// 	"eye_color": "blue",
		// 	"birth_year": "19BBY",
		// 	"gender": "male",
		// 	"homeworld": "https://swapi.co/api/planets/1/",
		// 	"films": [
		// 		"https://swapi.co/api/films/2/",
		// 		"https://swapi.co/api/films/6/",
		// 		"https://swapi.co/api/films/3/",
		// 		"https://swapi.co/api/films/1/",
		// 		"https://swapi.co/api/films/7/"
		// 	],
		// 	"species": [
		// 		"https://swapi.co/api/species/1/"
		// 	],
		// 	"vehicles": [
		// 		"https://swapi.co/api/vehicles/14/",
		// 		"https://swapi.co/api/vehicles/30/"
		// 	],
		// 	"starships": [
		// 		"https://swapi.co/api/starships/12/",
		// 		"https://swapi.co/api/starships/22/"
		// 	],
		// 	"created": "2014-12-09T13:50:51.644000Z",
		// 	"edited": "2014-12-20T21:17:56.891000Z",
		// 	"url": "https://swapi.co/api/people/1/"
		// },
		// {
		// 	"name": "C-3PO",
		// 	"height": "167",
		// 	"mass": "75",
		// 	"hair_color": "n/a",
		// 	"skin_color": "gold",
		// 	"eye_color": "yellow",
		// 	"birth_year": "112BBY",
		// 	"gender": "n/a",
		// 	"homeworld": "https://swapi.co/api/planets/1/",
		// 	"films": [
		// 		"https://swapi.co/api/films/2/",
		// 		"https://swapi.co/api/films/5/",
		// 		"https://swapi.co/api/films/4/",
		// 		"https://swapi.co/api/films/6/",
		// 		"https://swapi.co/api/films/3/",
		// 		"https://swapi.co/api/films/1/"
		// 	],
		// 	"species": [
		// 		"https://swapi.co/api/species/2/"
		// 	],
		// 	"vehicles": [],
		// 	"starships": [],
		// 	"created": "2014-12-10T15:10:51.357000Z",
		// 	"edited": "2014-12-20T21:17:50.309000Z",
		// 	"url": "https://swapi.co/api/people/2/"
		// },
		// {
		// 	"name": "R2-D2",
		// 	"height": "96",
		// 	"mass": "32",
		// 	"hair_color": "n/a",
		// 	"skin_color": "white, blue",
		// 	"eye_color": "red",
		// 	"birth_year": "33BBY",
		// 	"gender": "n/a",
		// 	"homeworld": "https://swapi.co/api/planets/8/",
		// 	"films": [
		// 		"https://swapi.co/api/films/2/",
		// 		"https://swapi.co/api/films/5/",
		// 		"https://swapi.co/api/films/4/",
		// 		"https://swapi.co/api/films/6/",
		// 		"https://swapi.co/api/films/3/",
		// 		"https://swapi.co/api/films/1/",
		// 		"https://swapi.co/api/films/7/"
		// 	],
		// 	"species": [
		// 		"https://swapi.co/api/species/2/"
		// 	],
		// 	"vehicles": [],
		// 	"starships": [],
		// 	"created": "2014-12-10T15:11:50.376000Z",
		// 	"edited": "2014-12-20T21:17:50.311000Z",
		// 	"url": "https://swapi.co/api/people/3/"
		// },
		// {
		// 	"name": "Darth Vader",
		// 	"height": "202",
		// 	"mass": "136",
		// 	"hair_color": "none",
		// 	"skin_color": "white",
		// 	"eye_color": "yellow",
		// 	"birth_year": "41.9BBY",
		// 	"gender": "male",
		// 	"homeworld": "https://swapi.co/api/planets/1/",
		// 	"films": [
		// 		"https://swapi.co/api/films/2/",
		// 		"https://swapi.co/api/films/6/",
		// 		"https://swapi.co/api/films/3/",
		// 		"https://swapi.co/api/films/1/"
		// 	],
		// 	"species": [
		// 		"https://swapi.co/api/species/1/"
		// 	],
		// 	"vehicles": [],
		// 	"starships": [
		// 		"https://swapi.co/api/starships/13/"
		// 	],
		// 	"created": "2014-12-10T15:18:20.704000Z",
		// 	"edited": "2014-12-20T21:17:50.313000Z",
		// 	"url": "https://swapi.co/api/people/4/"
		// },
		// {
		// 	"name": "Leia Organa",
		// 	"height": "150",
		// 	"mass": "49",
		// 	"hair_color": "brown",
		// 	"skin_color": "light",
		// 	"eye_color": "brown",
		// 	"birth_year": "19BBY",
		// 	"gender": "female",
		// 	"homeworld": "https://swapi.co/api/planets/2/",
		// 	"films": [
		// 		"https://swapi.co/api/films/2/",
		// 		"https://swapi.co/api/films/6/",
		// 		"https://swapi.co/api/films/3/",
		// 		"https://swapi.co/api/films/1/",
		// 		"https://swapi.co/api/films/7/"
		// 	],
		// 	"species": [
		// 		"https://swapi.co/api/species/1/"
		// 	],
		// 	"vehicles": [
		// 		"https://swapi.co/api/vehicles/30/"
		// 	],
		// 	"starships": [],
		// 	"created": "2014-12-10T15:20:09.791000Z",
		// 	"edited": "2014-12-20T21:17:50.315000Z",
		// 	"url": "https://swapi.co/api/people/5/"
		// },
		// {
		// 	"name": "Owen Lars",
		// 	"height": "178",
		// 	"mass": "120",
		// 	"hair_color": "brown, grey",
		// 	"skin_color": "light",
		// 	"eye_color": "blue",
		// 	"birth_year": "52BBY",
		// 	"gender": "male",
		// 	"homeworld": "https://swapi.co/api/planets/1/",
		// 	"films": [
		// 		"https://swapi.co/api/films/5/",
		// 		"https://swapi.co/api/films/6/",
		// 		"https://swapi.co/api/films/1/"
		// 	],
		// 	"species": [
		// 		"https://swapi.co/api/species/1/"
		// 	],
		// 	"vehicles": [],
		// 	"starships": [],
		// 	"created": "2014-12-10T15:52:14.024000Z",
		// 	"edited": "2014-12-20T21:17:50.317000Z",
		// 	"url": "https://swapi.co/api/people/6/"
		// },
		// {
		// 	"name": "Beru Whitesun lars",
		// 	"height": "165",
		// 	"mass": "75",
		// 	"hair_color": "brown",
		// 	"skin_color": "light",
		// 	"eye_color": "blue",
		// 	"birth_year": "47BBY",
		// 	"gender": "female",
		// 	"homeworld": "https://swapi.co/api/planets/1/",
		// 	"films": [
		// 		"https://swapi.co/api/films/5/",
		// 		"https://swapi.co/api/films/6/",
		// 		"https://swapi.co/api/films/1/"
		// 	],
		// 	"species": [
		// 		"https://swapi.co/api/species/1/"
		// 	],
		// 	"vehicles": [],
		// 	"starships": [],
		// 	"created": "2014-12-10T15:53:41.121000Z",
		// 	"edited": "2014-12-20T21:17:50.319000Z",
		// 	"url": "https://swapi.co/api/people/7/"
		// },
		// {
		// 	"name": "R5-D4",
		// 	"height": "97",
		// 	"mass": "32",
		// 	"hair_color": "n/a",
		// 	"skin_color": "white, red",
		// 	"eye_color": "red",
		// 	"birth_year": "unknown",
		// 	"gender": "n/a",
		// 	"homeworld": "https://swapi.co/api/planets/1/",
		// 	"films": [
		// 		"https://swapi.co/api/films/1/"
		// 	],
		// 	"species": [
		// 		"https://swapi.co/api/species/2/"
		// 	],
		// 	"vehicles": [],
		// 	"starships": [],
		// 	"created": "2014-12-10T15:57:50.959000Z",
		// 	"edited": "2014-12-20T21:17:50.321000Z",
		// 	"url": "https://swapi.co/api/people/8/"
		// },
		// {
		// 	"name": "Biggs Darklighter",
		// 	"height": "183",
		// 		"mass": "84",
		// 	"hair_color": "black",
		// 	"skin_color": "light",
		// 	"eye_color": "brown",
		// 	"birth_year": "24BBY",
		// 	"gender": "male",
		// 	"homeworld": "https://swapi.co/api/planets/1/",
		// 	"films": [
		// 		"https://swapi.co/api/films/1/"
		// 	],
		// 	"species": [
		// 		"https://swapi.co/api/species/1/"
		// 	],
		// 	"vehicles": [],
		// 	"starships": [
		// 		"https://swapi.co/api/starships/12/"
		// 	],
		// 	"created": "2014-12-10T15:59:50.509000Z",
		// 	"edited": "2014-12-20T21:17:50.323000Z",
		// 	"url": "https://swapi.co/api/people/9/"
		// },
		// {
		// 	"name": "Obi-Wan Kenobi",
		// 	"height": "182",
		// 	"mass": "77",
		// 	"hair_color": "auburn, white",
		// 	"skin_color": "fair",
		// 	"eye_color": "blue-gray",
		// 	"birth_year": "57BBY",
		// 	"gender": "male",
		// 	"homeworld": "https://swapi.co/api/planets/20/",
		// 	"films": [
		// 		"https://swapi.co/api/films/2/",
		// 		"https://swapi.co/api/films/5/",
		// 		"https://swapi.co/api/films/4/",
		// 		"https://swapi.co/api/films/6/",
		// 		"https://swapi.co/api/films/3/",
		// 		"https://swapi.co/api/films/1/"
		// 	],
		// 	"species": [
		// 		"https://swapi.co/api/species/1/"
		// 	],
		// 	"vehicles": [
		// 		"https://swapi.co/api/vehicles/38/"
		// 	],
		// 	"starships": [
		// 		"https://swapi.co/api/starships/48/",
		// 		"https://swapi.co/api/starships/59/",
		// 		"https://swapi.co/api/starships/64/",
		// 		"https://swapi.co/api/starships/65/",
		// 		"https://swapi.co/api/starships/74/"
		// 	],
		// 	"created": "2014-12-10T16:16:29.192000Z",
		// 	"edited": "2014-12-20T21:17:50.325000Z",
		// 	"url": "https://swapi.co/api/people/10/"
		// }]}
  // 	}
  // 	filter(e){
  // 		this.setState({filter: e.target.value})
  // 	}
  // 	render(){
  // 		let items = this.state.items
  // 		if (this.state.filter) {
  // 			items = items.filter( item =>
  // 				item.name.toLowerCase()
  // 				.includes(this.state.filter.toLowerCase()))
  // 		}
  // 		return (
  // 			<div>
  // 				<input type="text" 
  // 				onChange={this.filter.bind(this)} />
  // 				{items.map(item => 
  // 					<Person key={item.name} person={item} />)}
  // 			</div>
  // 		)
  // 	}

  // -------------------------------

  	// render(){
  	// 	return (
  	// 		<div>
  	// 			<Button>button</Button>
  	// 			<hr/>
  	// 			<LabelHOC>label</LabelHOC>
  	// 		</div>
  	// 	)
  	// }

  	// -------------------------------

  	constructor(){
  		super();
  		this.state = {
  			input: '/* add your jsx here */',
  			output: '',
  			err: ''
  		}
  	}
  	update(e){
  		let code = e.target.value;
  		try	{
  			this.setState({
  				output: window.Babel.transform(code, {presets: ['es2015', 'react']})
  				.code,
  				err: ''
  			})
  		}
  		catch(err){
  			this.setState({err: err.message})
  		}

  	}
  	render(){
  		return (
  			<div>
  				<header>{this.state.err}</header>
  				<div className="container">
  					<textarea
  					onChange={this.update.bind(this)}
  					defaultValue={this.state.input}/>
  					<pre>
  						{this.state.output}
  					</pre>
  				</div>
  			</div>
  		)
  	}
}

const HOC = (InnerComponent) => class extends React.Component {
	constructor(){
		super();
		this.state = {count: 0}
	}
	update(){
		this.setState({count: this.state.count + 1})
	}
	componentWillMount(){
		console.log('will mount')
	}
	render(){
		return (
			<InnerComponent
				{...this.props}
				{...this.state}
				update={this.update.bind(this)}
			/>
		)
	}
}

const Button = HOC((props) => 
	<button onClick={props.update}>{props.children} - {props.count}</button>)

class Label extends React.Component {
	componentWillMount(){
		console.log('label will mount')
	}
	render(){
		return (
			<label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
		)
	}
}

const LabelHOC = HOC(Label)

const Person = (props) => <h4>{props.person.name}</h4>

class Wrapper extends React.Component {
	mount(){
		ReactDOM.render(<App />, document.getElementById('a'))
	}
	unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
	}
	render(){
		return (
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>UnMount</button>
				<div id="a"></div>
			</div>
		)
	}
}

class Input extends React.Component {
	render() {
		return <input ref="input" type="text" onChange={this.props.update} />
	}
}

// const Title = (props) => <h1>Title: {props.text}</h1>

// Title.propTypes = {
// 	text(props, propName, component){
// 		if (!(propName in props)) {
// 			return new Error('missing ' + propName)
// 		}
// 		if (props[propName].length < 6) {
// 			return new Error(propName + ' was too short')
// 		}
// 	}
// }

// const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
	render(){
		return <span>&hearts;</span>
	}
}

const Widget = (props) =>
	<input type="text" onChange={props.update}/>

App.propTypes = {
  	txt: PropTypes.string,
  	cat: PropTypes.number.isRequired
}

App.defaultProps = {
	txt: "this is the default txt.",
	cat: 5,
	val: 0
}

export default App
// export default Wrapper