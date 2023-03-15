export default function Tooltip({ message, children }) {
    return (
    <div class="group relative flex justify-center">
        {children}
        <span class="z-20 absolute top-16 scale-0 transition-all rounded bg-gray-800 bg-opacity-90 p-3 text-md text-off-white group-hover:scale-100 w-[400px] self-center">{message}</span>
    </div>
    )
}
