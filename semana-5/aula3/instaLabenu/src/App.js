import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
         <Post
          nomeUsuario={'Jack'}
          fotoUsuario={'https://picsum.photos/id/100/50/50'}
          fotoPost={'https://picsum.photos/id/5/200/150'}
        />
         <Post
          nomeUsuario={'André'}
          fotoUsuario={'https://picsum.photos/id/3/50/50'}
          fotoPost={'https://picsum.photos/id/120/200/150'}
        />
      </div>
    );
  }
}

export default App;
