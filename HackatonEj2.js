import React, { Component } from 'react';
import './Components/Hackaton/Blognoticias.css';

import BlogNoticias from './Components/Hackaton/Blognoticias';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
            posts: [],
            img: [],
		};
    }
    
    componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((posts) =>
				this.setState({
					posts: [...posts],
				})
			)
			.catch((err) => {
				console.log('error:', err);
            });

        fetch('https://jsonplaceholder.typicode.com/photos')
			.then((response) => response.json())
			.then((img) =>
				this.setState({
					img: [...img],
				})
			)
			.catch((err) => {
				console.log('error:', err);
            });
	}
    render() {
        const { posts, img} = this.state;
		return (
			<div className='App'>                
               <div className='content-title'><h2 className='title'>Blog de Noticias</h2></div>
               <BlogNoticias posts={posts} images={img}></BlogNoticias>
			</div>
		);
	}
}

export default App;