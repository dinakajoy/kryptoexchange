import { Navbar, Welcome, Services, Transactions, Footer } from "./components";

const App = () => {
  return (
    <main class="min-h-screen">
      <section class="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </section>
      <Services />
      <Transactions />
      <Footer />
    </main>
  );
};

export default App;
