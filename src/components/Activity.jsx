import { useState, useEffect } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/dist";
import deleteIcon from "../assets/icon-delete.svg";
import emptyActivityBackground from "../assets/activity-empty-state.png";
import Header from "./Header";
import axios from "axios";

export default function Activity() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
      try {
        const res = await axios.get(
          `https://todo.api.devcode.gethired.id/activity-groups?email=adenfdfd10@gmail.com`
        );
        setTodos(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    console.log(todos.length)

    useEffect(() => {
      fetchTodos();
    }, [todos]);

    const deleteActivityGroup = async (id) => {
      try {
        await axios.delete(
          `https://todo.api.devcode.gethired.id/activity-groups/${id}`
        );
        setTodos(todos.filter((group) => group.id !== id));
        console.log(todos)
      } catch (error) {
        console.error(error);
      }
    };

    const handleAddActivity = () => {
      axios
        .post("https://todo.api.devcode.gethired.id/activity-groups", { title: "New Activity", email: "adenfdfd10@gmail.com"})
        .then((response) => {
          setTodos([...todos, response.data]);
        })
        .catch((error) => {
        console.error(error);
      });
    };

    const handleDeleteClick = (id) => {
      deleteActivityGroup(id);
    };

    return (
      <>
        <Header />
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
              onClick={handleAddActivity}
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
            {todos.length === 0 ? (
              <button onClick={handleAddActivity}>
                <img
                  className="w-[767px] h-[490px] mb-[50px]"
                  data-cy="activity-empty-state"
                  src={emptyActivityBackground}
                  alt="image activity empty state"
                />
              </button>
            ) : (
              todos.data.map((todo) => (
                <div key={todo.id} className="w-[25%] pr-[20px]">
                  <div
                    data-cy="activity-item"
                    className="h-[234px] bg-white rounded-[12px] py-[22px] px-[27px] mb-[26px] shadow-sm"
                  >
                    <div className="h-[158px] cursor-pointer">
                      <Link to={`/detail/${todo.id}`}>
                        <h4
                          data-cy="activity-item-title"
                          className="text-[18px] font-[700]"
                        >
                          {todo.title}
                        </h4>
                      </Link>
                    </div>
                    <div className="flex justify-between items-center">
                      <span
                        data-cy="activity-item-date"
                        className="text-[#888888]"
                      >
                        {`${new Date(todo.created_at)
                          .toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })
                          .replace(/ /g, " ")}`}
                      </span>
                      <button onClick={() => handleDeleteClick(todo.id)}>
                        <img
                          data-cy="activity-item-delete-button"
                          src={deleteIcon}
                          alt="delete icon"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </>
    );
}
