import React, {useState} from 'react';

const InputElement = () => {
  const [val, setVal] = useState('')
  const [historyList, setHistoryList] = useState([])

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter Some Text" 
        value={val} 
        onChange={e => {
          setVal(e.target.value)
          setHistoryList([e.target.value, ...historyList])
        }} 
      /><br />
      {historyList.map((e,i) => <div key={i}>{e}</div>)}
    </div>
  )
}

export default InputElement;