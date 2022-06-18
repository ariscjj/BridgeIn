import React, { useState } from 'react'; 
import Spinner from '../common/Spinner';

export default function TaskInput(props){
  const [task, setTask] = useState(""); 
  const [saving, setSaving] = useState(false);

  async function onTaskFormSubmit(e){
    e.preventDefault();
    props.onTaskCreate(task); 
    // clears out input
    setTask(''); 
  }
  
  return (
    <div>
      <form onSubmit={onTaskFormSubmit}>
        <div className="input-group mb-3">
          <input 
            value={task}
            onChange={(e) => setTask(e.target.value)}

            type="text" 
            className="form-control"
            placeholder="Task" />
          <button className="btn btn-outline-secondary" 
            disabled={saving}
            type="submit">
            +
          </button> 
        </div> 
      </form>
    </div>
  )

}
