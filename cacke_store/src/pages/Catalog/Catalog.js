import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import TypeBar from '../../components/TypeBar/TypeBar.js';
import "./Catalog.css"

const Catalog = observer(() => {
  return (
   <div className='types'>
    <TypeBar />
   </div>
  );
})

export default Catalog;