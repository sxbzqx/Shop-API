export default function Button({ children, ...props }: any) {
  return (
    <button
      {...props}
      className="p-2 w-22 rounded bg-blue-500 text-white"
    >
      {children}
    </button>
  );
}
