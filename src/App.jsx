import "./styles/stylesGlobales.css";
import "./styles/stylesReusables.css";
import SignInForm2 from "./components/SignInForm2";
import SignUpForm from "./components/SignUpForm";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
function App() {

  return (
    <div>
      <Header />
      <SignInForm2 />
      <Footer />
    </div>
  );
}

export default App;
