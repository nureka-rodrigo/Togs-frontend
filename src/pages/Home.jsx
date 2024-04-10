import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen pattern">
      <Header/>
      <section className="flex-grow">
        {/* Your content goes here */}
      </section>
      <Footer/>
    </div>
  )
}

export default Home;