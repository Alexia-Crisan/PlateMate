export default function LineItem({
  title,
  bottomText,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  rightColorIcon,
  rightColorIconHover,
  onRightIconClick,
}) {
  return (
    <ul
      key={title}
      className="py-4 px-5 rounded-lg flex justify-between items-center bg-ogreen-900"
    >
      <div className="flex items-center space-x-6">
        <LeftIcon className="text-white" />
        <div>
          <p className="font-medium text-lg text-white">{title}</p>
          <p className="text-sm text-ogreen-400">{bottomText}</p>
        </div>
      </div>

      {RightIcon && (
        <button onClick={onRightIconClick} aria-label={`Action ${title}`}>
          <RightIcon
            className={`w-5 h-5 ${rightColorIcon} ${rightColorIconHover}`}
          />
        </button>
      )}
    </ul>
  );
}
