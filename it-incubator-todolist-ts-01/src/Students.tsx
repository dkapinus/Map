import React from 'react';


type DataType = {
data:StudentsDataType
}

type StudentsDataType = {
    title:string;
    students:Array<string>;
    tasks:Array<TaskType>
}

type TaskType = {
    taskId:number;
    title:string;
    isDone:boolean;
}

export const Students = (props:DataType)=> {
    return (
        <div> <h3>{props.data.title}</h3>
         <ul>

                 <li>{props.data.tasks.map((el)=>{
                     return ( <div>
                             <input key={el.taskId} type="checkbox" checked={el.isDone}/> <span>{el.title}</span>
                         </div>

                     )
                 })}
                    </li>


           <li>{props.data.students.map((el)=>{
               return(
                   <div> <span>
                         {el}
                   </span>

                   </div>
               )
           })}</li>
      </ul>
        </div>
    )
}