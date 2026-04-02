import { BrowserRouter } from "react-router-dom"
import ScreenRoutes from "./components/ScreenRoutes"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Analytics } from '@vercel/analytics/react';

const App = () => {
    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
            <Analytics />
            <BrowserRouter>
                <div className="fixed z-[2] w-full bg-white dark:bg-gray-950 transition-colors duration-300">
                    <div className="h-[14px] bg-white dark:bg-gray-950 w-full transition-colors duration-300" />
                    <Header />
                </div>
                <div className="top-[58px] relative z-[1] bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
                    <ScreenRoutes />
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App