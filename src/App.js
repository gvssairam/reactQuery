import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { Home } from "./Components/Home";
import ViewContactDetails from "./Components/ViewContactDetails";
import NewContact from "./NewContact/NewContact";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav className="container">
            <Link to="/contact">Contacts</Link>

            <Link to="/new-contact">New Contact</Link>
          </nav>
          <Routes>
            <Route path="/new-contact" element={<NewContact />} />
            <Route path="/contact/:id" element={<ViewContactDetails />} />

            <Route path="/contact" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
