import React from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { ChevronLeftIcon } from "lucide-react";



function TaskPage() {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");


    return (
        <div className="h-screen w-scream bg-slate-500 p-6">
            <div className="flex justify-center relative mb-6">
                <button onClick={() => navigate("/")} className="absolute left-0 top-5 bg-slate-400 text-white p-2 rounded-md">
                    <ChevronLeftIcon />
                </button>


                <div className="w-[400px] p-4">
                    <h1 className="text-3xl text-slate-100 font-semibold text-center ">Detalhes da tarefa</h1>
                </div>
            </div>


            <div className="w-[400px]   p-4 rounded-md  bg-slate-200 ">
                <h1 className="text-1xl text-slate-800 font-semibold text-center py-6 ">{title}</h1>
                <p className="text-1x1 text-slate-800 font-light text-center rounded-md ">{description}</p>
            </div>
        </div>
    )
}

export default TaskPage