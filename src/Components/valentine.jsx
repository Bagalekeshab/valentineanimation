import React, { useState } from 'react'

function ValentinePage() {

    const rejectOption = [
        'Are you sure?',
        'Really sure?',
        'think again?',
        'surely not?',
        'you might regret this!',
        'Give it another thought!',
        'Are you absolutely certain?',
        'This could be a mistake!',
        'Have a Bear!',
        "Don't be to cold!"

    ]

    const[reject, setReject] = useState('No')

    // const[accept, setAccept] = useState("Yes")

    const [images, setImages] = useState(true)

    const rejectChange =()=>{
        if (setReject !== reject){
            
            const randomIndex = Math.floor(Math.random() * rejectOption.length);
            const randomRejection = rejectOption[randomIndex];
            setReject(randomRejection);
           
             }
        }


        const acceptChange =() =>{
            
              setImages(!images)
        
    }

        
       

    
  return (
    <div>
      <div className="div  h-96 w-96 mx-auto mt-14 text-center ">
    
        <div className="image-animation">

        {images ? (
            <img src="/Images/snorlax.gif" alt="" />
          ) : (
            <img src="/Images/kiss.gif" alt="" />
          )}

        </div>
        
        
        <p className='font-bold text-2xl'>Will you be my Valentine?</p>
        <div className='flex justify-center gap-5 mt-5'>
            <button className='bg-green-600 text-white hover:bg-green-500 px-5 rounded' onClick={acceptChange}>Yes</button>
            <button className='bg-red-600 text-white hover:bg-red-500 px-5 rounded' onClick={rejectChange}>{reject}</button>
        </div>

      </div>
    </div>
  )
}

export default ValentinePage;
