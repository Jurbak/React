import Header from './components/header'
import Banner from './components/banner'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

function App() {
    useEffect(() =>{
        AOS.init();
    },[])
    return <div>
        <Header />
        <Banner />
    </div>
}

export default App
