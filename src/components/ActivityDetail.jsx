import { useState, useEffect } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom/dist";
import { Link } from "react-router-dom/dist";
import backButton from "../assets/todo-back-button.svg";
import editButtonIcon from "../assets/todo-title-edit-button.svg";
import filterIcon from "../assets/filter-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function ActivityDetail() {
  const { id } = useParams();
  const [activityGroup, setActivityGroup] = useState({});
  const [title, setTitle] = useState("New Activity");
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
     fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://todo.api.devcode.gethired.id/activity-groups?email=adenfdfd10@gmail.com&id=${id}`
      );
      setActivityGroup(response.data.data[0]);
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
      created_at: now.toISOString(),
      updated_at: now.toISOString(),
    };

    axios
      .put(url, data, config)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));

    setIsEditing(false);
  };


  const handleEditClick = () => {
    setIsEditing(true);
    setNewTitle(title);
  };

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  return (
    <div>
      <Header />
      <main className="w-full px-[186px]">
        <div className="flex justify-between mt-[43px] mb-[55px]">
          <div className="flex items-center">
            <Link to="/">
              <img
                className="mr-[20px] w-[32px] h-[32px]"
                data-cy="todo-back-button"
                src={backButton}
                alt="back button"
              />
            </Link>
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
                title
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
      </main>
      <p>{id}</p>
    </div>
  );
}
