export default function BottomText({ text1, text2 }) {
  return (
    <div className="flex justify-between items-center">
      <button className="text-sm text-ogreen-400 hover:text-ogreen-300 transition-colors duration-200">
        {text1}
      </button>
      <p className="text-sm text-ogreen-400">{text2}</p>
    </div>
  );
}
