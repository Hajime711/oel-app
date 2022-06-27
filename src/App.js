import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import show_Form from './components/show_Form';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Form></Form>
      <show_Form></show_Form>
    </main>
  );
}
export default App;
