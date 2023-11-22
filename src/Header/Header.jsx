import minimal from '../assets/minimal.png'


export default function Header() {
  return (
    <>
     <img src={minimal} alt="poster" className='w-full' />
     <p className='text-xl text-center italic font-semibold m-3'>
      A minimalist approach towards  
      <span class="bg-gray-200 rounded-md font-mono mx-1 px-1 font-bold">git commit</span> 
      to keep commits simple.</p>
      </>
  )
}
