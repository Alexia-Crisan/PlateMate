import React from "react";

export default function LineItem({
  title,
  bottomText,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onRightIconClick
}) {
  return (
    <div
      key={title}
      className="p-4 rounded-lg flex justify-between items-center shadow-md bg-ogreen-900"
    >
      <div className="flex items-center space-x-3">
        <LeftIcon className="w-6 h-6 text-white" />
          <div>
            <p className="font-semibold text-white">{title}</p>
            <p className="text-sm text-ogreen-400">{bottomText}</p>
          </div>
      </div>
              
      {RightIcon && 
      (
        <button onClick={onRightIconClick} aria-label={`Delete ${title}`}>
          <RightIcon className="w-5 h-5 text-ored-500 hover:text-ored-600" />
        </button>
      )}
     </div>
  );
}
