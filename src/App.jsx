import { createContext, useState, useEffect } from 'react';
import { Navbar } from './components';
import { About, Header, Work, Skills, Footer } from './container';
import axios from 'axios';

export const LangContext = createContext();

export default function App() {
    const [language, setLanguage] = useState('es');
    const [texts, setTexts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const langJSON = async () => {
            try {
                const response = await axios.get(
                    `./lang/${language}.json`
                );
                setTexts(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        langJSON();
    }, [language]);

    if (isLoading || !texts) {
        return <div></div>;
    }

    return (
        <LangContext.Provider value={texts}>
            <Navbar setLanguage={setLanguage} />
            <Header />
            <About />
            <Work />
            <Skills />
            <Footer />
        </LangContext.Provider>
    );
}
