import { useRef, useState } from "react";
import { Trash } from "react-bootstrap-icons";

const TodoItems: React.FC = () => {
  const [items, setItems] = useState<string[]>(["Hello i am Emmanuel Nwaegunwa", "I would love to get ice cream"]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    if (inputRef.current) {
      setItems((prev) => [...prev, inputRef.current!.value]);
    }
  };

  const handleDelete = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center bg-[#3460c3]">
      <div className="bg-white text-black rounded-lg px-10 py-12 w-[50%] my-20">
        <div className="flex gap-5 mb-20">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type"
            className="flex-1 block h-[55px] border border-black border-opacity-75 rounded-md outline-none px-3 focus:border-opacity-100"
          />
          <button
            onClick={handleAdd}
            type="submit"
            className="bg-[#3d69e4] hover:bg-opacity-90 text-white py-[10px] px-[30px] rounded-md font-semibold text-[18px] block"
          >
            Add
          </button>
        </div>
        {items.map((value, index) => (
          <div
            key={index}
            className="border border-black rounded-md bg-[#cbe0e5] flex items-center p-2 mb-3"
          >
            <div className="flex-1 font-normal text-[20px] truncate mr-2">
              {value}
            </div>
            <Trash
              className="cursor-pointer inline bg-[#1c1b9a] hover:bg-opacity-90 text-white w-[60px] h-[60px] p-4 rounded-md text-[1.3em] leading-[0]"
              onClick={() => handleDelete(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoItems;
