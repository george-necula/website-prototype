import React, { useState } from 'react';
import Automata1d from './1d automata component';
import NumericInput from 'react-numeric-input'

const Page1dAutomata = () => {
  const [play, setPlay] = useState(true);
  // eslint-disable-next-line 
  const [canvasSize, setCanvasSize] = useState(window.innerWidth / 4);
  const [rule, setRule] = useState(30);
  const [tempRule, setTempRule] = useState(rule);




  return (
    <div id='Page1dAutomata-top'>
      <div id='settings'>
        <button onClick={() => setPlay(!play)}>{(play) ? 'pause' : 'start'}</button>

        <NumericInput strict min={0} max={255} step={1} onChange={(value) => setTempRule(value)} value={tempRule} />

        <button onClick={() => { setRule(tempRule) }}> Redraw rule: {tempRule}</button>
      </div>
      <Automata1d play={play} size={canvasSize} rule={rule}/>
    </div>);
}

export default Page1dAutomata;


