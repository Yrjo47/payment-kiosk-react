import "./App.css";
import Main from "./pages/Main";
import CardForm from "./pages/CardForm";
import PaymentForm from "./pages/PaymentForm";
import FinalScreen from "./pages/FinalScreen";
import FinalScreenError from "./pages/FinalScreenError";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/card" element={<CardForm />} />
            <Route path="/payment" element={<PaymentForm />} />
            <Route
                path="/message/success"
                element={<FinalScreen message={"Успешно"} />}
            />
            <Route
                path="/message/error1"
                element={
                    <FinalScreenError
                        message={
                            "Ой! Что-то пошло не так... Проверьте данные карты!"
                        }
                    />
                }
            />
            <Route
                path="/message/error2"
                element={
                    <FinalScreenError message={"Срок действия карты истек!"} />
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
