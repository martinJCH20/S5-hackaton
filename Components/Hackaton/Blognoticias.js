import React, { Component }  from 'react';
import './Blognoticias.css';

export default class BlogNoticias extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            img: [],
        }
    }

    render() {
        const { posts } = this.props;
        
        // const cardsImg = images.map((img, index) => 
        //     <p>{img.thumbnailUrl}</p>//Falta implementar imagenes
        // );
        const cardsPost = posts.map((post, index) => 
            <div className='card-container'>
                <div className='post-img'>
                </div>
                <div className='post-description'>
                    <div className='post-title'>
                        <h2>{post.title}</h2>
                    </div>
                    <div className='post-body'>
                        <p>{post.body}</p>
                    </div>
                </div>
            </div>
        );
        return <div className='container-post'>{cardsPost}</div>; 
    }
};