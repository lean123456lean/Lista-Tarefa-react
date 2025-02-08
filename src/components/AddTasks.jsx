import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-2 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input 
                type="text" 
                placeholder="Digite o título da tarefa"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
            />

            <input 
                type="text" 
                placeholder="Digite a descrição da tarefa"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
            />

            <button 
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
                onClick={() => {
                    if (title.trim() === "" || description === "") {
                        alert("Preencha todos os campos"); // Corrigido
                        return;
                    }
                    onAddTaskSubmit(title, description);
                    setTitle("");
                    setDescription("");
                }}
            >
                Adicionar
            </button>
        </div>
    );
}

export default AddTasks;
