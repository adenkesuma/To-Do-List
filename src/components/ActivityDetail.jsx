import Header from "./Header";
import { useParams } from "react-router-dom/dist";
import { Link } from "react-router-dom/dist";
import backButton from "../assets/todo-back-button.svg";
import editButtonIcon from "../assets/todo-title-edit-button.svg";
import filterIcon from "../assets/filter-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ActivityDetail() {
    const { id } = useParams();
        
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
                New Activity
              </h1>
              <img
                className="ml-[27px] cursor-pointer w-[24px] h-[24px]"
                data-cy="todo-title-edit-button"
                src={editButtonIcon}
                alt="edit button"
              />
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
