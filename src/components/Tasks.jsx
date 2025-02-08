import { ChevronRightIcon, TrashIcon as TrashIconIcon} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks(props) {

    const navigate = useNavigate();


    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }
    

    return (
        <>
            <ul className="space-y-2 p-6 bg-slate-200 rounded-md shadow">
                {props.tasks.map((tasks) => (
                    <li key={tasks.id} className="flex justify-between gap-2">

                        <button onClick={() => props.onTaskClick(tasks.id)}
                        className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${tasks.isCompleted && 'line-through'}`}>
                            
                            {tasks.title}
                        </button>
                        
                        <button onClick={() => onSeeDetailsClick (tasks)} className="bg-slate-400 text-white p-2 rounded-md">
                            <ChevronRightIcon />
                        </button>
                        <button onClick={() => props.onDeleteTaskClick(tasks.id)} className="bg-slate-400 text-white p-2 rounded-md">
                            <TrashIconIcon />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}




export default Tasks;