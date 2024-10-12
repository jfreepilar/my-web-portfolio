import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='border-2 h-[550px] border-white text-white mt-14 w-[75%] flex justify-between'>
            <div>
                <h3>Resume</h3>
                <button>View my more</button>
            </div>

            <div>
                <p>Contact me</p>
                <p>Phone</p>
                <p>Email</p>
            </div>
        </div>

        <div className='border-2 border-white w-1/2'>
            Social media
        </div>
    </>
  )
}
