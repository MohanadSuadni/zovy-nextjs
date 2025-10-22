import Link from 'next/link'
import Image from 'next/image'
const Logo: React.FC = () => {
  return (
    <Link href='/' className='text-3xl font-semibold text-[#0f3d7d]'>Z 
    <Image
                                  src="/images/Logo/iso-p.png"
                                 alt='greenbg'
                                width={30}
                                height={20}
                                className='inline-block'
                              /><span  className='text-4xl font-semibold text-[#0f3d7d]'>vy</span>
                          
    </Link>
    
  )
}

export default Logo
