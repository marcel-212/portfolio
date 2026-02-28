import { useState } from 'react';
import type { Site } from '../types';
import Card from './Card'

import data_sites from '../data/main.json'
import data_rest from '../data/rest.json'


const SiteList = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    
    const sites:Site[] = data_sites as Site[]
    const rest:Site[] = data_rest as Site[]

    return ( 
      <section className='site-list'>
        <menu>
          <button onClick={() => setIsActive(false)} className={!isActive ? 'btn-active' : ''}>FullStack/Frontend</button>
          <button onClick={() => setIsActive(true)} className={isActive ? 'btn-active' : ''}>Mniejsze</button>
        </menu>
        <div>
            {!isActive && 
                sites.map((item) => (
                    <Card key={item.id} site={item} displayImage={true}/>
                ))
            }
            {isActive && 
                rest.map((item) => (
                    <Card key={item.id} site={item} displayImage={false}/>
                ))
            }
        </div>
      </section>
    );
}
 
export default SiteList;