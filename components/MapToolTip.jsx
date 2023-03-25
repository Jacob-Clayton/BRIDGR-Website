export default function MapTooltip({ message, children }) {
    return (
    <div class="group relative flex justify-center">
        {children}
        <span className="z-30 absolute top-72 right-96 scale-0 transition-all rounded-2xl font-medium bg-primary-black bg-opacity-40 p-3 text-[0.9rem] text-off-white group-hover:scale-100 lg:block hidden w-[240px] xl:w-[280px] 2xl:w-[350px] self-center">{message}</span>
    </div>
    )
}