import Icon from "./icon"

export default function Search() {
    return (
        <>
            <div className="w-[268px] relative group">
                <span className="absolute t-0 l-0 text-[#8e8e8e] group-focus-within:hidden h-9 w-9 flex items-center justify-center  ">
                    <Icon name="search" size={20} />
                </span>
                <input type='text' className="h-9 pl-9 outline-none p-2 group-focus-within:pl-3 rounded bg-[#efefef]" placeholder="Search" />
            </div>
        </>
    )
}