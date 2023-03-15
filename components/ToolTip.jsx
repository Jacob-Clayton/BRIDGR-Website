export default function Tooltip({ message, children }) {
    return (
    <div class="group relative flex justify-center">
        {children}
        <span class="absolute top-14 scale-0 transition-all rounded bg-gray-800 bg-opacity-70 p-2 text-sm text-white group-hover:scale-100 w-[400px] self-center">{message}</span>
    </div>
    )
}
