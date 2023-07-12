import React from 'react'
import './findJob.css'
import frontend from '../../assets/images/icons8-backend-development-96.png'
import uiux from '../../assets/images/icons8-material-ui-96.png'
import design from '../../assets/images/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB_removebg_preview.png'
import { Footer } from '../../components'
const FindJob = () => {
const jobs = [
    {
title: 'Frontend Developer',
img: frontend , 
publisher: 'Alex' ,
country:'France',
city: 'Paris',
time: 'Full-Time',
name: 'Front End Developer',
desc:'We are looking for a front-end engineering intern to help out with incoming projects Join a team of developers, designers, and intrapreneurs with years of experience in software building and web design. We\'re a fun bunch of tech dudes and gals making an awesome impression on the market.'

    },
    {
title: 'UI/UX Product Designer',
img: uiux , 
publisher: 'Fredrick' ,
country:'Egypt',
city: 'Giza',
time: 'Full-Time',
name: 'Front End Developer',
desc:'We are seeking a highly motivated UI/UX Product Designer to join our team. In this role, you will be responsible for creating intuitive, user-centered designs for our digital products. Your main responsibilities will include conducting user research, prototyping, testing, and implementing design solutions that meet business and user requirements.'

    },
    {
title: 'Graphic Design',
img: design , 
publisher: 'Thomas' ,
country:'Egypt',
city: 'Giza',
time: 'Full-Time',
name: 'Graphic Design',
desc:'We are seeking a talented and creative Graphic Designer to join our team. As a Graphic Designer, you will be responsible for creating visual concepts, using computer software to design attractive and effective graphics for a variety of mediums including websites, advertisements, product packaging, and more.'

    },
    
]


const handleTypes = (e) =>{
    if (e.target.classList.contains('type')) {
        const allTypes = document.querySelectorAll('.type');
        allTypes.forEach(type => {
          type.classList.remove('active');
        });
        e.target.classList.add('active');
      }
}


  return (
    <div className='find-job '>
        <div className='container d-flex flex-column align-items-center '>
<h1 className='fw-bold'>Featured Job Of The Week.</h1>
<p className='text fw-bold'>Find more than 500k job vacancies of your dreams, from startup companies, unions, to bonafides.</p>
       <div onClick={(e) => handleTypes(e)} className='d-flex align-items-center justify-content-between jobs-types '>
        <p className='type active'>All Recent</p>
        <p className='type' >Design</p>
        <p className='type' >Development</p>
        <p className='type'>Finance</p>
        <p className='type' >Mangement</p>
        <p className='type'>Consulting</p>
       </div>
       {jobs.map((job , i)  =>  (

       <div className='job-card d-flex flex-column flex-md-row flex-lg-row'>
      <img className='me-2' width='50px' height='50px' src={job.img}  alt={job.title}        />
      <div className='d-flex flex-column  alig-items-start w-100 context'>
<h3 className='text-light'>{job.title}</h3>
<p>{job.publisher}. {job.city},{job.country}</p>
<div className='d-flex align-items-center flex-wrap name-time'>
    <p className='time '>{job.time}</p>
    <p className='divide mx-2'></p>
    <p className='name'>{job.name}</p>
</div>
<p>{job.desc}</p>
      </div>
       </div>




       ))}
        </div>
        <Footer/>
    </div>
  )
}

export default FindJob