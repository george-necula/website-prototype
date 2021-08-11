import React, { useState } from 'react';
import Automata1d from './1d automata component';
import NumericInput from 'react-numeric-input'

const Page1dAutomata = () => {
  const [play, setPlay] = useState(false);

  const [rule, setRule] = useState(30);
  const [tempRule, setTempRule] = useState(rule);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth / 4);
  const [canvasHeight, setCanvasheight] = useState(window.innerWidth / 8);
  const [restart, setRestart] = useState(false);

  // const handleRestart = (event) => {
  //   if(event !== true){
  //     return restart
  //   }else{
  //     setRestart(!restart)
  //   }
  // }

  return (
    <div id='Page1dAutomata-top'>
      <div id='settings'>
        <button onClick={() => setPlay(!play)}>{(play) ? 'pause' : 'start'}</button>

        <NumericInput strict min={0} max={255} step={1} onChange={(value) => setTempRule(value)} value={tempRule} />
        <NumericInput strict min={0} step={1} onChange={(value) => setCanvasWidth(value)} value={canvasWidth} />
        <NumericInput strict min={0} step={1} onChange={(value) => setCanvasheight(value)} value={canvasHeight} />
        <div id='preview'>
          <p>Canvas Width: {canvasWidth}</p>
          <p>Canvas Height: {canvasHeight}</p>
          <button onClick={() => { setRule(tempRule); setRestart(true) }}> Redraw </button>
        </div>
      </div>
      <Automata1d
        play={play}
        canvasHeight={canvasHeight}
        canvasWidth={canvasWidth}
        restart={restart}
        handleRestart={setRestart}
        rule={rule}
      />
    </div>);
}

export default Page1dAutomata;


