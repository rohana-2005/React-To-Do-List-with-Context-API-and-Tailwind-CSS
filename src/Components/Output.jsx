import React, { useContext, useRef } from 'react';
import { ListContext } from './ListContext';

function Output() {
  const { user, doneJob, removeItem, update, updateValue } = useContext(ListContext);
  const inputRefs = useRef({});

  const handleEdit = (item, isEditing) => {
    update(item, isEditing);
    if (isEditing) {
      setTimeout(() => {
        inputRefs.current[item]?.focus();
      }, 0);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md w-96 mx-auto mt-4">
      <ul className="space-y-4">
        {user.map((userItem, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
          >
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={userItem.done}
              onChange={() => doneJob(userItem.item)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />

            {/* Editable Input */}
            <input
              value={userItem.item}
              className={`flex-grow mx-4 text-lg ${
                userItem.done ? 'line-through text-gray-400' : 'text-gray-800'
              } ${userItem.edit ? 'bg-gray-200' : 'bg-transparent'}`}
              readOnly={!userItem.edit}
              ref={(e) => (inputRefs.current[userItem.item] = e)}
              onChange={(e) => updateValue(userItem.item, e.target.value)}
            />

            {/* Edit Button */}
            <button
              onClick={() => handleEdit(userItem.item, !userItem.edit)}
              className="text-blue-500 hover:text-blue-700"
            >
              {userItem.edit ? '📁' : '🖊'}
            </button>

            {/* Remove Button */}
            <button
              onClick={() => removeItem(userItem.item)}
              className="text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Output;
