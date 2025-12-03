import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import AdminPage from "./pages/AdminPage";
import type { Room } from "./data/rooms";
import { initialRooms } from "./data/rooms";

function App() {
  const [rooms, setRooms] = useState<Room[]>(initialRooms);

  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col">
      <Header />
      <Breadcrumb />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kamar" element={<RoomsPage rooms={rooms} />} />
          <Route
            path="/admin"
            element={<AdminPage rooms={rooms} setRooms={setRooms} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
