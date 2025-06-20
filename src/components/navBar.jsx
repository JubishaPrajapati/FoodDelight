import logo from '../assets/logo.png';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slice/searchSlice';

const NavBar = () => {
    const dispatch = useDispatch();
    return (
        <nav className='bg-white flex flex-col justify-between lg:flex-row shadow-md '>
            <div className='flex items-center gap-2'>
                <img src={logo} alt='logo img' className='w-10 h-10 m-4 ' />
                <h1 className='font-bold text-2xl text-gray-700'>Food Delight</h1>
            </div>
            <div className='flex items-center gap-2'>
                <h3 className='font-bold text-gray-700 m-4'>{new Date().toUTCString().slice(0, 16)}</h3>
                <input
                    type='search'
                    placeholder='Search Here'
                    autoComplete='off'
                    name='search'
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                    className='border border-gray-400 rounded-md text-md p-2 m-4 w-[50vh] placeholder:text-gray-600 outline-none' />
            </div>
        </nav>
    )
}

export default NavBar