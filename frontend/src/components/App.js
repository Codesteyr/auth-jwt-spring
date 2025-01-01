import './App.css'
import logo from '../logo.svg'

import Header from './Header'
import AppContent from './AppContent';

function App() {
    return (
        <div>
            <Header pageTitle="Fronted authenticated with JWT" logoSrc={logo}></Header>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <AppContent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;