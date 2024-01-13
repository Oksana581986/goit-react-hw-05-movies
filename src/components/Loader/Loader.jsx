import React from 'react';
import css from './Loader.module.css';
import { DNA } from 'react-loader-spinner';


const Loader = () => (
    <div className={css.loader}>
    <DNA
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
    />
    </div>);
  
    export { Loader };   