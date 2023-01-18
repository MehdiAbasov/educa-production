import { Outlet } from "react-router-dom"

export default function Auth() {
    return (
        <div className="h-full bg-zinc-50 flex-wrap overflow-auto w-full flex items-center gap-x-8 justify-center">
            <Outlet />
        </div>
    )
}