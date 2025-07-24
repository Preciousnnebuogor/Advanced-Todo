import { useState } from "react";

export default function Todo() {
  const [getValue, setGetValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [allValue, setAllValue] = useState([]);

  function handleSubmit() {
    if (!getValue) return;
    // setDisplayValue(getValue);
    setGetValue("");
    const newArr = [...allValue, getValue];
    setAllValue(newArr);
  }
  function deleteValue(index){
    const copy = [...allValue]
    copy.splice(index, 1)
    setAllValue(copy)
  }
  

  return (
    <div>
      <div>
        <div>
          <p>My Task</p>
          <p>Day</p>
        </div>
        <div>
          <input
            onChange={(e) => setGetValue(e.target.value)}
            value={getValue}
          />
          <button onClick={handleSubmit}>button</button>
        </div>
        <div>
          {allValue.map((data, index) => {
           return <div>{data}
             <button onClick={deleteValue}>del</button>
           </div>;
           
          })}
          <p>All</p>
          {/* <p>Active</p>
            <p>Computed</p> */}
          {/* <p>{displayValue}</p> */}
        </div>
        <div>
          <p>clear</p>
        </div>
      </div>
    </div>
  );
}
