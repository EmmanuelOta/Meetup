import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./Pages/AllMeetups";
import NewMeetup from "./Pages/NewMeetup";
import FavoritesPage from "./Pages/Favorites";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainNavigation />} />
                    <Route index element={<AllMeetupsPage />} />
                    <Route path="/all-Meetups" element={<AllMeetupsPage />} />
                    <Route path="/new-meetup" element={<NewMeetup />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
