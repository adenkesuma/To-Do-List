import { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Content() {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        const date = new Date();
        const newTodo = {
            text: "New Activity",
            date: date.getDate(),
            month: date.toLocaleString("default", { month: "long" }),
            year: date.getFullYear(),
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <main className="w-full px-[186px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-full max-w-[1000px]">
            {/* todo header */}
            <div className="flex justify-between mt-[43px] mb-[55px]">
            <h1
                data-cy="activity-title"
                className="text-[36px] font-[700] text-[#212529]"
            >
                Activity
            </h1>
            <button
                onClick={handleAddTodo}
                data-cy="activity-add-button"
                className="w-[170px] h-[54px] bg-[#16abf8] rounded-[45px] border-none py-[13.5px] px-[29px] font-[600] text-[18px] text-[#ffffff]"
            >
                <FontAwesomeIcon className="mr-[10px] text-[19px]" icon={faPlus} />
                <span>Tambah</span>
            </button>
            </div>

            {/* dashboard content */}
            <div className="flex flex-wrap">
            {todos.map((todo, index) => (
                <div key={index} className="w-[25%] pr-[20px]">
                <div className="h-[234px] bg-white rounded-[12px] py-[22px] px-[27px] mb-[26px] shadow-sm">
                    <div className="h-[158px] cursor-pointer">
                    <h4 className="text-[18px] font-[700]">{todo.text}</h4>
                    </div>
                    <div>
                        {`${todo.date} ${todo.month} ${todo.year}`}
                    </div>
                </div>
                </div>
            ))}
            </div>
        </main>
    );
}
