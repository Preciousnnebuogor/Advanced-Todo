import { useState } from "react";

export default function Todo() {
  const [getValue, setGetValue] = useState("");
  const [activeValue, setActiveValue] = useState("");
  const [allValue, setAllValue] = useState([]);
  const [check, setCheck] = useState(false)

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

  function activeHandle(){
     const newTask = {text:getValue, done: false}
     setActiveValue([...allValue, newTask])
    // setActiveValue("")
  }
  function toggleDone(index) {
    setAllValue(
      allValue.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
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
            <p>All</p>
            <p>Active</p>
        </div>
        <div>
          {allValue.map((data, index) => {
            return (
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => setCheck(e.target.value)}
                  value={check}
                />
                {data}
                <button onClick={deleteValue}>del</button>
              </div>
            );
          })}
          {allValue.map((data, index) => (
            <div>
              <input onChange={() => toggleDone(index)} />
              <p>{data.done}</p>
              <button onClick={() => deleteValue(index)}>del</button>
            </div>
          ))}
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
