import Link from 'next/link'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center gap-1 text-[#0f3d7d]'>
      <span className='text-3xl font-semibold'>Z</span>
   <Image 
  src="/images/Logo/iso-p.png" 
  alt="Logo" 
  width={100} 
  height={100} 
/>
      <span className='text-4xl font-semibold'>vy</span>
    </Link>
  )
}

export default Logo