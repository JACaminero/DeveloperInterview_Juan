import './App.css';
import React, { useState, useEffect } from 'react';
import CatService from './services/CatService.js'; //divided logic in services so indivualcomponents are easier to understand
import CompanyService from './services/CompanyService.js';
import CatCard from './components/cat-card-component/CatCard';

function App() {
  //NOTE: had problems with CORS so I modified the backend to allow API calls from all origins 
  const [catDataList, setCatDataLis] = useState([]);
  const [companyName, setComName] = useState('')
  const [tags, setTag] = useState([])

  useEffect(() => {
    let cServ = new CatService()
    let comServ = new CompanyService()

    comServ.getCompanyName().then(res => setComName(res))
    cServ.fetch10Cats().then(res => setCatDataLis(res))
  }, []);

  return (
    <div className="App">

      <header className="App-header">
        <span>
          Click the name to look up your company
        </span>
        <a
          className="App-link" target="_blank" 
          href={`https://www.google.com/search?q=${companyName}`}>
          <h1>{companyName}</h1>
        </a>
        {/* <div className='art'>{
          tags == '' ? 'No hay tags para este gatito :(' : tags
        }</div>  */}
        <div className="container">
          {
            catDataList.map( ({ id, url, tags }) => {
              return (
                <CatCard catData={ { id: id, url: url, tags: tags } } />
                // <>
                //   <img className="item" key={id} src={`https://cataas.com/${url}`} onClick={ () => setTag(ts => ts = tags) } />
                // </>
              )
            })
          }
        </div>
      </header>
    </div>
  );
}

export default App;
