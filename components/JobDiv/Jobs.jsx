import React from 'react'
import { BiTimeFive } from "react-icons/bi";


import logo1 from '../../Assets/logo1.png';
import logo2 from '../../Assets/logo2.png';
import logo3 from '../../Assets/logo3.png';
import logo4 from '../../Assets/logo4.png';
import logo5 from '../../Assets/logo5.png';

const Data = [
  {
    id:1, 
    image: logo1 , 
    title: 'Web Developer',
    time: 'Now',
    location: 'Noida' ,
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, laboriosam',
    company: "Novac linus Co"   
  },
  {
    id:2, 
    image: logo2 , 
    title: 'Software engineer',
    time: 'Now',
    location: 'Gurgaon' ,
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, laboriosam',
    company: "Liquid Accessments"   
  },
  
  {
    id:3, 
    image: logo3 , 
    title: 'UI developer',
    time: '14Hrs',
    location: 'Canada' ,
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, laboriosam',
    company: "EZ solutions"   
  },
  {
    id:4, 
    image: logo4 , 
    title: 'Backend Developer',
    time: 'Now',
    location: 'Bangalore' ,
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, laboriosam',
    company: "Tech Sky Services"   
  },
  {
    id:5, 
    image: logo5 , 
    title: 'Fullstack Developer',
    time: '7 days',
    location: 'Pune' ,
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, laboriosam',
    company: "Hamasn technologies"   
  },
 
]

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10 ">
        {
          Data.map(({id,image,title,time,location,desc,company}) => {
            return(
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded[10px] hover:bg-blueColor shadow-lg shadpw-greyIsh-400/700 hover:shadow-lg">
                <span className='flex justify-between items-center gap-4'>
                  <h1 className='text-[16px] font-semibold text-textcolor group-hover:text-white'> {title}</h1>
                  <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive /> {time}
                  </span>
                </span>
                <h6 className='text-[#ccc]'>{location}</h6>
                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>
        
                <div className='company flex items-center gap-2'>
      
                  <img src={image} alt="Company Logo" className='w-[15%]' />
                  <span className='text-[14px] py-[1 rem] block group-hover:text-white'>{company} </span>
                </div>
                <button className='border - [2px] rounded -[10px] p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover:text-textColor'>
                  Apply Now 
                </button>
            </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Jobs