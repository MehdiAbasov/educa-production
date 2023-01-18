import { useField } from "formik"
import { useState, useEffect } from "react"
import classNames from "classnames"

export default function Input({ label, type = "text", ...props }) {

    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(type)
    const [field, meta, helpers] = useField(props)

    useEffect(() => {
        if (show) {
            setType('text')
        } else if (type === 'password') {
            setType('password')
        }
    }, [show])

    return (
        <label className='block relative'>
            <input value={inputType} className={classNames({
                'bg-zinc-50 border focus:border-gray-300 px-2 outline-none text-xs rounded-sm w-full  h-[38px]': true,
                'pt-[10px]': field.value
            })}{...field} {...props} />
            <small className={classNames({
                'absolute  left-2 text-xs text-gray-500 cursor-text -translate-y-1/2 transition-all ': true,
                'text-xs top-1/2': !field.value,
                'text-[11px]  top-2.5': field.value
            })}>{label}</small>
            {type === 'password' && field.value && (
                <div onClick={() => setShow(show => !show)} className="user-select-none absolute top-0 right-2 flex items-center">
                    {show ? 'hide' : 'show'}
                </div>
            )}
        </label>
    )
}
