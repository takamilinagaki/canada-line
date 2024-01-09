
import dynamic from "next/dynamic"
import Image from "next/image";

import Logo from "../../public/images/personalIcon.svg"

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr: false});


export default function Home() {
  return (
    <>
      <div style={{
        backgroundColor:'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
        paddingBottom: '10px',
        paddingTop: '10px'
      }}>
          <Image 
            src={Logo}
            alt="personal Icon"
            width={50}/>
            <h1 style={{
              fontSize: '25px',
              fontFamily: 'sans-serif'

            }}>Canada Line</h1>
      </div>
      <DynamicMap />
    </>
  )
}
