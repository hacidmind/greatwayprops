import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Properties } from "./pages/Properties";
import { Gallery } from "./pages/Gallery";
import { ContactUs } from "./pages/ContactUs";
import { BookInspection } from "./pages/BookInspection";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/book-inspection" element={<BookInspection />} />
        </Routes>
      </Layout>
    </Router>
  );
}
