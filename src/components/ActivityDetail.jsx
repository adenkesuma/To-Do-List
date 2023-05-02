import { useState, useEffect } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom/dist";
import backButton from "../assets/todo-back-button.svg";
import editButtonIcon from "../assets/todo-title-edit-button.svg";
import filterIcon from "../assets/filter-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist";
import emptyTodolistBackground from "../assets/todo-empty-state.png";

export default function ActivityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activityGroup, setActivityGroup] = useState({});
  const [title, setTitle] = useState("New Activity");
  const [isEditing, setIsEditing] = useState(false);
  const [todolist, setTodolist] = useState([]);
  const [isTodo, setIsTodo] = useState(true);
  const [newTitle, setNewTitle] = useState();

  useEffect(() => {
    fetchData();
  }, [isEditing, activityGroup]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://todo.api.devcode.gethired.id/activity-groups?email=adenfdfd10@gmail.com&id=${id}`
      );
      setActivityGroup(response.data.data[0]);
      console.log(activityGroup)
      setTitle(response.data.data[0].title);
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = () => {
    const email = "adenfdfd10@gmail.com";
    const now = new Date();
    const url = `https://todo.api.devcode.gethired.id/activity-groups/${activityGroup.id}`;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${email}`,
      },
    };

    const data = {
      title: newTitle,
      email: email,
      created_at: now.toISOString(),
      updated_at: now.toISOString(),
    };

    axios
      .put(url, data, config)
      .then((response) => {
        setActivityGroup(response.data);
        console.log(response.data)
        setIsEditing(false);
      })
      .catch((error) => console.error(error));

  };

  const handleAddTodo = () => {
    setTodolist(prevTodo => [...prevTodo, "new todo"]);
    console.log(todolist)
    setIsTodo(false);
  }

  const handleEditClick = () => {
    setIsEditing(true);
    setNewTitle(title);
  };

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleRedirect = () => {
    navigate("/");
  }

  return (
    <div>
      <Header />
      <main className="w-full px-[186px]">
        <div className="flex justify-between mt-[43px] mb-[55px]">
          <div className="flex items-center">
            <button className="border-none outline-none" onClick={handleRedirect}>
              <img
                className="mr-[20px] w-[32px] h-[32px]"
                data-cy="todo-back-button"
                src={backButton}
                alt="back button"
              />
            </button>
            <h1
              data-cy="todo-title"
              className="font-[700] text-[36px] text-[#212529]"
            >
              {isEditing ? (
                <input
                  className="bg-inherit outline-none border-b-[1px] border-black"
                  type="text"
                  value={newTitle}
                  onChange={handleTitleChange}
                />
              ) : (
                newTitle ? newTitle : title
              )}
            </h1>
            {!isEditing && (
              <img
                className="ml-[27px] cursor-pointer w-[24px] h-[24px]"
                data-cy="todo-title-edit-button"
                src={editButtonIcon}
                alt="edit button"
                onClick={handleEditClick}
              />
            )}
            {isEditing && (
              <img
                className="ml-[27px] cursor-pointer w-[24px] h-[24px]"
                data-cy="todo-title-edit-button"
                src={editButtonIcon}
                alt="edit button"
                onClick={updateData}
              />
            )}
          </div>

          <div className="flex items-center">
            {/* dropdown */}
            <div className="relative flex items-center">
              <div>
                <button
                  className="rounded-[50%] border border-solid border-[#e5e5e5] bg-transparent h-[54px] w-[54px] mr-[18px] flex justify-center items-center"
                  data-cy="todo-sort-button"
                >
                  <img src={filterIcon} alt="filter icon" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddTodo}
              data-cy="todo-add-button"
              className="w-[170px] h-[54px] bg-[#16abf8] rounded-[45px] border-none py-[13.5px] px-[29px] font-[600] text-[18px] text-[#ffffff]"
            >
              <FontAwesomeIcon
                className="mr-[10px] text-[19px]"
                icon={faPlus}
              />
              <span>Tambah</span>
            </button>
          </div>
        </div>

        {/* content */}
        <div className="flex justify-center items-center">
          {isTodo ?
            (<button onClick={handleAddTodo}>
                <img
                  className="w-[541px] h-[413px] mb-[50px]"
                  data-cy="activity-empty-state"
                  src={emptyTodolistBackground}
                  alt="image activity empty state"
                />
            </button> ) : 
            (
              <div className="flex flex-col w-[100%]">
                {todolist.map((todo, idx) => (
                    <p key={idx}>
                      {todo}
                    </p>
                ))}
              </div>
            )
          }
        </div>
      </main>
    </div>
  );
}
