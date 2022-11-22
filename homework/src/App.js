import logo from './logo.svg'
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ButtonComponent CssClass="button" content="This is my Button" />
        </p>
        <p>
          <ImageComponent
            CssClass="image"
            image="https://placekitten.com/640/360"
            altText="This is a cat"
          />
        </p>
      </header>
    </div>
  )
}

export default App
