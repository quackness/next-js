'use client'
import React, {useState} from 'react';
import styles from './SignSelector.module.css';

const SignSelector = () => {
  const [selectedSign, setSelectedSign] = useState('');


//specify type of the event 
const handleSignChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedSign(selectedValue);
    console.log(selectedValue);
  };

  return (
    <div>
      <select name="signs" id="" onChange={handleSignChange} value={selectedSign}>
        <option value="aries">Aries</option>
        <option value="">Taurus</option>
        <option value="">Gemini</option>
        <option value="">Cancer</option>
        <option value="">Leo</option>
        <option value="">Virgo</option>
        <option value="">Libra</option>
        <option value="">Scorpio</option>
        <option value="">Sagittarius</option>
        <option value="">Capricorn</option>
        <option value="">Aquarius</option>
        <option value="">Pisces</option>
      </select>

    </div>
  )
}

export default SignSelector