export default function MyButton({
  text,
  onClick,
  color,
  hoverColor,
  activeColor,
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 rounded-lg text-sm bg-${color} text-white hover:bg-${hoverColor} active:bg-${activeColor} transition-colors duration-200`}
    >
      {text}
    </button>
  );
}
