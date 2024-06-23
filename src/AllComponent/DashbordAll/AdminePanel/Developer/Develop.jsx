import React from 'react'
import './develop.css'
import { useQuery } from '@tanstack/react-query'



const Develop = () => {

  let { refetch, data: tasks = [] } = useQuery(["tasks"], async () => {
    let res = await fetch("http://localhost:5000/tasks")
    return res.json()
  })

console.log(tasks)

  return (
    <>
    
  <h1 className='d-task'>Developer Task</h1>
  <div class="ag-format-container">
  <div class="ag-courses_box">

    {
    tasks.map(({taskTitle, devEmail, tskDescs, taskLink, dueDate})=>{
      if(devEmail == 'mdkamrul2058@gmail.com'){
        return <>
        <div class="ag-courses_item">
    <a href={taskLink} target="_blank" class="ag-courses-item_link">
      <div class="ag-courses-item_bg"></div>

      <div class="ag-courses-item_title">
        {taskTitle}
      </div>
    <p className="dev-desc">
      {tskDescs}
    </p>
      <div class="ag-courses-item_date-box">
        Due Time: &#160;
        <span class="ag-courses-item_date">
          {dueDate}
        </span>
      </div>
    </a>
  </div>
    </>
      }


    })
  }

 

  </div>
</div>
    </>
  )
}

export default Develop