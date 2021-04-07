import React from 'react'
import Images from "./../Images/Images";
import "./App.css";
class App extends React.Component {

    state = {
        images : []
    }
    fetchAllImages = () => {
        fetch("https://my-json-server.typicode.com/ali7070droid/lazy-loading/images")
        .then((res) => res.json())
        .then((data)=> {
            this.setState({images:data})

            console.log(data);
        })
    }

    componentDidMount() {
        this.fetchAllImages();
    }

    render() {
        return (
            <div>
                <h1 className="title">Lazy Loading Images</h1>
                {
                    this.state.images.length === 0 ? (
                        <h2 className="loading">Loading...</h2>
                    )
                 : (
                    <div className="images-container">
                        <Images images = {this.state.images}/>
                    </div>
                )
                }
            </div>
            
        )
    }
}

export default App;
