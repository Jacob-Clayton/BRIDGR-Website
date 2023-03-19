export default function Tooltip({ message, children }) {
    return (
    <div class="group relative flex justify-center">
        {children}
        <span className="z-20 absolute top-16 scale-0 transition-all rounded bg-gray-800 bg-opacity-90 p-3 text-[0.95rem] text-off-white group-hover:scale-100 lg:block hidden w-[240px] xl:w-[280px] 2xl:w-[350px] self-center">{message}</span>
    </div>
    )
}