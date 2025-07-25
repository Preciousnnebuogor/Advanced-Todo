import { useState } from "react";

export default function Todo() {
  const [getValue, setGetValue] = useState("");
  const [allValue, setAllValue] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [clear, setClear] = useState("");

  function handleSubmit() {
    if (!getValue) return;
    const newTask = { text: getValue, done: false };
    const newArr = [...allValue, newTask];
    setAllValue(newArr);
    setGetValue("");
  }

  function toggleDone(index) {
    const copy = [...allValue];
    copy[index].done = !copy[index].done;
    setAllValue(copy);
  }

  function deleteValue(index) {
    const copy = [...allValue];
    copy.splice(index, 1);
    setAllValue(copy);
  }

  const filteredTasks =
    filterType === "active"
      ? allValue.filter((task) => !task.done)
      : filterType === "completed"
      ? allValue.filter((task) => task.done)
      : allValue;

  function handleLeft() {
    if (filterType === "active")
      return allValue.filter((task) => !task.done).length;
    else if (filterType === "completed")
      return allValue.filter((task) => task.done).length;
    else return allValue.length;
  }

   function clearHandle() {
     if (filterType === "active") {
       // Remove active tasks (done: false)
       setAllValue(allValue.filter((task) => task.done));
     } else if (filterType === "completed") {
       // Remove completed tasks (done: true)
       setAllValue(allValue.filter((task) => !task.done));
     } else {
       // filterType is "all" – remove everything
       setAllValue([]);
     }
   }
  function handleTime(){
    const option = {weekday:"long", month:"short", day:"numeric"}
    let today = new Date();
   return today.toLocaleDateString("en-US", option);
  }
  
  
  return (
    <div>
      <div>
        <div>
          <p>My Task</p>
          <p>{handleTime()}</p>
        </div>
        <div>
          <input
            onChange={(e) => setGetValue(e.target.value)}
            value={getValue}
          />
          <button onClick={handleSubmit}>button</button>
        </div>
        <div>
          <button onClick={() => setFilterType("all")}>All</button>
          <button onClick={() => setFilterType("active")}>Active</button>
          <button onClick={() => setFilterType("completed")}>Completed</button>
        </div>
        <div>
          {filteredTasks.map((data, index) => (
            <div key={index}>
              <input
                type="checkbox"
                checked={data.done}
                onChange={() => toggleDone(index)}
              />
              <span
                style={{ textDecoration: data.done ? "line-through" : "none" }}
              >
                {data.text}
              </span>
              <button onClick={() => deleteValue(index)}>del</button>
            </div>
          ))}
        </div>
        <div>
          <p>{handleLeft()} left</p>
          <button onClick={clearHandle}>clear</button>
        </div>
      </div>
    </div>
  );
}
