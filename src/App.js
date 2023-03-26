import React from 'react';

import Form from './components/Form';
import Gallery from './components/Gallery';

import flickr from './utils/flickr';

import './App.css';

class App extends React.Component {
  state = { images: [], isLoading: true, imageSelected: false, selectedImageUrl: '' };

  async componentDidMount() {
    const response = await flickr.get('/services/rest/', {
      params: {
        tags: 'random',
      },
    });
    this.setState({ images: response.data.photos.photo, isLoading: false });
  }

  handleSearch = async term => {
    this.setState({ isLoading: true });
    const response = await flickr.get('/services/rest/', {
      params: {
        tags: term,
      },
    });
    this.setState({ images: response.data.photos.photo, isLoading: false });
  };

  handleImageSelected = (imageUrl) => {
    this.setState({imageSelected: true, selectedImageUrl: imageUrl});
  }

  exitPhotoView = () => {
    this.setState({imageSelected: false, selectedImageUrl: ''});
  }

  render() {
    console.log(this.state.imageSelected)
    if (this.state.isLoading) {
      return (
        <div className="spinner">
          Loading...
        </div>
      );
    }

    if(this.state.imageSelected) {
      return(
      <section
        className='ui=photo-detail'
        onClick={this.exitPhotoView}
        >
          <img className="ui-photo" src={this.state.selectedImageUrl} alt='' />
        </section>
        );
    }

    return (
      <div className="photo-container">
        <Form handleSearch={this.handleSearch} />
        <nav className="main-nav">
        </nav>
        <h2>Results</h2>
        <Gallery images={this.state.images} onImageClick={this.handleImageSelected.bind(this)} />
      </div>
    );
  }
}

export default App;
