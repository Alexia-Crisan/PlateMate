export default function LineInput({
  value,
  onChange,
  placeholder,
  className,
  type = "text",
}) {
  return (
    <div className={`relative group ${className}`}>
      {type === "text" ? (
        <input
          type="text"
          className="peer block w-full bg-transparent border-b border-ogreen-400 py-1 pl-1 outline-none"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          rows={1}
          className="peer resize-y block w-full bg-transparent border-b border-ogreen-400 py-1 pl-1 outline-none h-auto"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
      <span className="block relative w-full h-[2px] before:absolute before:bottom-[1px] before:left-1/2 before:h-[2px] before:w-0 before:bg-ogreen-300 before:transition-all before:duration-200 after:absolute after:bottom-[1px] after:right-1/2 after:h-[2px] after:w-0 after:bg-ogreen-300 after:transition-all after:duration-200 peer-focus:before:w-1/2 peer-focus:after:w-1/2" />
    </div>
  );
}
