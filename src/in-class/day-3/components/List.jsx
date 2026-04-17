import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

const List = () => {
  // store lits itlems array,
  // ["string" , "string", .......]



  const [items, setItems] = useState([]);
  const [itemValue, setItemValue] = useState("");

  const submit = () => {
    // validate , shoul dnot empty,

    if (itemValue === "") {
      return null;
    }

    // first create a new array
    // then  update items array,

    const newItemsArray = [...items, itemValue];

    setItems(newItemsArray);
    // reset inputValue

    setItemValue("");
  };

  const handleItemDelete = (itemIndex) => {
    // new filtered array, removing the same same index sting
    const filteredArray = items.filter((item, index) => index != itemIndex )

    setItems(filteredArray)
  };

  return (
    <div>
      <div className="flex flex-col mt-3">
        <label htmlFor="item" id="item">
          Something
        </label>
        <input
          type="item"
          id="item"
          value={itemValue}
          placeholder="Enter Something"
          className="py-2 px-3 border border-gray-300 rounded-lg"
          onChange={(e) => setItemValue(e.target.value)}
          required
        />
      </div>

      <div>
        <button
          className="px-2 py-1 bg-blue-600 text-white rounded mt-2"
          onClick={(e) => submit(e)}
        >
          Signup
        </button>
      </div>

      <div>
        {items.length !== 0 &&
          items.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <span>{item}</span>
                <TiDeleteOutline onClick={() => handleItemDelete(index)} size={30} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;

//  todos: [{ todo : "sting", completed: boolean}, { todo : "sting", completed: boolean},, { todo : "sting", completed: boolean}, ..... ] 


// adding new todo : 
// newTodoArray = [...todo , {todo} ]. 

// delete : itemdDelete
//   filtered >: todos.filter( (todo, iundex)  => todo.index != itemdDelete  )

// complete toggle ": 
// filter : filter, {... cometeted != completed}