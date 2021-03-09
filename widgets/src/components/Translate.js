import React,{useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label:'Afrikaans',
        value: 'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    }
];

const Translate = () =>
{
    const [language, setLanguage] = useState(options[0]);
    const [text,setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div classNAme="field">
                    <label >Enter Text</label>
                    <input value={text} onChange = { (e) => setText(e.target.value)} /> 
                </div>
            </div>
            <Dropdown options={options} selected={language} onSelectedChange={setLanguage} label="Select a Language"/>
            <hr />
            <h1>Output</h1>
            <h3>
                <Convert text={text} language={language}/>
            </h3>
        </div>
    );
};

export default Translate;
