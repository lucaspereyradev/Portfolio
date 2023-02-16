import { createContext, useState, useEffect } from 'react';
import { Navbar } from './components';
import { About, Header, Work, Skills, Footer } from './container';
import axios from 'axios';

const Lang = createContext();

function App() {
    const [language, setLanguage] = useState('es');
    const [texts, setTexts] = useState([]);

    useEffect(() => {
        const langJSON = async () => {
            const response = await axios.get(`./lang/${language}.json`);
            setTexts(response.data);
        };

        langJSON();
    }, [language]);

    return (
        <Lang.Provider value={texts}>
            <Navbar setLanguage={setLanguage} />
            <Header />
            <About />
            <Work />
            <Skills />
            <Footer />
        </Lang.Provider>
    );
}

export default App;
