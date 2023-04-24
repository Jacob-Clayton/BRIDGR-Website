export default function Infotip({ message, children }) {
    return (
    <div class="group flex justify-center">
        {children}
        <span className="z-30 absolute mx-auto 2xl:bottom-2 xl:bottom-2 bottom-1 right-12 scale-0 transition-all rounded-lg font-medium bg-primary-black bg-opacity-70 py-2 px-3 text-md text-off-white group-hover:scale-100 lg:block hidden text-center justify-center self-center">{message}</span>
    </div>
    )
}