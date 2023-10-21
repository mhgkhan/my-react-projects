import Todo from './Todo';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  document.title = "GH- REACT- TODO LIST" 
  return (
    <>
      <Header />

      <Todo />

      <Footer />
    </>
  );
}

export default App;
