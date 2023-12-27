import "./App.css";
import Main from "./pages/Main";
import CardForm from "./pages/CardForm";
import PaymentForm from "./pages/PaymentForm";
import FinalScreen from "./pages/FinalScreen";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/card' element={<CardForm />} />
            <Route path='/payment' element={<PaymentForm />} />
            <Route path='/message' element={<FinalScreen />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default App;
