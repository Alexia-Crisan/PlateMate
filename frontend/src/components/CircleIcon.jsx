export default function CircleIcon({ Icon, bottomText, addBorder = false }) {
  return (
    <div className="mb-4 flex flex-col items-center">
      {!addBorder ? (
        <div className="bg-ogreen-500 rounded-full p-5 mb-2">
          <Icon size={56} color="white"></Icon>
        </div>
      ) : (
        <div className="bg-ogreen-500 rounded-full p-5 mb-2 border-white border-4">
          <Icon size={56} color="white"></Icon>
        </div>
      )}
      <h3 className="font-semibold">{bottomText}</h3>
    </div>
  );
}
