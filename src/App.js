import React from 'react';
import './index.css';
import {useState} from 'react';
import Tab from './components/tab.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isPropertySignature } from 'typescript';

function App() {
    
    const [tabslist, settabslist] = useState([
        {}, {'id' : "Tab 1", 'message' : "This is a tab"}, {'id' : "Tab 2", "message" : "This is also a tab"}
    ]);

    const [tabidx, settabidx] = useState(0);

    const handleClick = (e, i) => {
        settabidx(i);
    }
    
        
    return (
        <div className="App">
            <div className="row">
                {tabslist.map((tab, i) => {
                    return <Tab 
                    key={i}
                    id={i}
                    handleClick={handleClick}
                    >
                    </Tab>
                })}                    
            </div>
            <div className="jumbotron">
                <p>{tabslist[tabidx].message}</p>
            </div>
        </div>
    )
};


export default App;
