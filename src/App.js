import styles from './App.css';
import Footer from './components/footer/Footer';
import General from './components/general/General';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Main />
      <General />
      <Footer />
     
    </div>
  );
}

export default App;
