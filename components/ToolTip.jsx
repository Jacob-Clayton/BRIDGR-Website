import styles from "../styles";

export default function Tooltip({ message, children }) {
    return (
    <div class="group relative flex justify-center">
        {children}
        <span className={` z-30 absolute 2xl:top-16 xl:top-10 top-5 scale-0 transition-all rounded font-regular border border-white border-opacity-20 bg-cetecean-blue bg-opacity-[95%] py-3 px-4 text-off-white group-hover:scale-100 lg:block hidden w-[280px] xl:w-[310px] 2xl:w-[350px] self-center`}>{message}</span>
    </div>
    )
}