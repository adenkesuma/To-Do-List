import { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";
import deleteIcon from "./assets/icon-delete.svg";
import emptyActivityBackground from "./assets/activity-empty-state.png";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

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
      <>
        <Navbar />
        <main className="w-full px-[186px]">
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
              <FontAwesomeIcon
                className="mr-[10px] text-[19px]"
                icon={faPlus}
              />
              <span>Tambah</span>
            </button>
          </div>

          {/* dashboard content */}
          <div className="flex flex-wrap">
            {_.isEmpty(todos) ? (
              <button onClick={handleAddTodo}>
                <img
                  className="w-[767px] h-[490px] mb-[50px]"
                  data-cy="activity-empty-state"
                  src={emptyActivityBackground}
                  alt="image activity empty state"
                />
              </button>
            ) : (
              todos.map((todo, index) => (
                <div key={index} className="w-[25%] pr-[20px]">
                  <Link to={`/detail/${index}`}>
                    <div
                      data-cy="activity-item"
                      className="h-[234px] bg-white rounded-[12px] py-[22px] px-[27px] mb-[26px] shadow-sm"
                    >
                      <div className="h-[158px] cursor-pointer">
                        <h4
                          data-cy="activity-item-title"
                          className="text-[18px] font-[700]"
                        >
                          {todo.text}
                        </h4>
                      </div>
                      <div className="flex justify-between items-center">
                        <span
                          data-cy="activity-item-date"
                          className="text-[#888888]"
                        >
                          {`${todo.date} ${todo.month} ${todo.year}`}
                        </span>
                        <button>
                          <img
                            data-cy="activity-item-delete-button"
                            src={deleteIcon}
                            alt="delete icon"
                          />
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </main>
      </>
    );
}
