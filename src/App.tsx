import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import AdminPage from "./pages/AdminPage";
import type { Room } from "./data/rooms";
import { initialRooms } from "./data/rooms";

export default function App() {
  const [rooms, setRooms] = useState<Room[]>(initialRooms);

  return (
    <div className="min-h-screen bg-slate-200 flex justify-center">
      {/* FRAME HP */}
      <div className="flex min-h-screen w-full max-w-md flex-col bg-slate-50 shadow-lg md:my-4 md:rounded-3xl overflow-hidden">
        <Header />
        <Breadcrumb />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kamar" element={<RoomsPage rooms={rooms} />} />
            <Route
              path="/admin"
              element={<AdminPage rooms={rooms} setRooms={setRooms} />}
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
}
