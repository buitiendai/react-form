
import './App.css';
import ContactForm from './component/ContactForm';
import DeclareForm from './component/DeclareForm';
import Library from './component/Library';
import MailForm from './component/MailForm';

function App() {
  return (
    <>
      <ContactForm />
      <hr />
      <MailForm />
      <hr />
      <DeclareForm />
      <hr />
      <Library />
    </>
  );
}

export default App;
