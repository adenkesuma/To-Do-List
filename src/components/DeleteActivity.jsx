import modalDeleteIcon from "../assets/modal-delete-icon.svg";

export default function DeleteActivity({ handleCancel, handleDelete }) {
    return (
        <div className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.7)] absolute top-0 left-0 right-0 bottom-0">
            <div
                className={`shadow-md flex flex-col items-center justify-evenly w-[490px] h-[355px] rounded-[12px] bg-white
                absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2`}
                data-cy="delete-activity"
            >
                <img
                className="w-[84px] h-[84px]"
                data-cy="modal-delete-icon"
                src={modalDeleteIcon}
                alt="modal delete"
                />
                <div>
                <p>
                    Apakah anda yakin menghapus activity
                    <span className="font-[700] text-[#111111]">
                    {/* {` " ${props.title} " `}  */}
                    </span>
                    ?
                </p>
                </div>
                <div className="flex items-center gap-4">
                <button
                    onClick={handleCancel} 
                    className="bg-[#f4f4f4] w-[150px] h-[54px] rounded-[45px] py-[13px] px-[14px] text-[#4a4a4a] text-[18px] font-[600]">
                    Batal
                </button>
                <button 
                    onClick={handleDelete}
                    className="bg-[#ed4c5c] w-[150px] h-[54px] rounded-[45px] py-[13px] px-[14px] text-[#ffffff] text-[18px] font-[600]"
                >
                    Hapus
                </button>
                </div>
            </div>
        </div>

    );
}
