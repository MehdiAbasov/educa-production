import Instagram from '../images/images.jpg'

export default function Loader() {
    return (
        <div className="w-full h-full fixed top-0 left-0 bg-white flex items-center justify-center">
            <img src={Instagram} className='w-[50px]' />
        </div>
    )
}

