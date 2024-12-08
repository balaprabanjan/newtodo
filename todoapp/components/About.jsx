import React from 'react'

const About = () => {
  return (
    <>
      <div className="flex flex-row container mx-auto rounded-lg shadow-gray-200 shadow-xl bg-gray-300 mt-32">
        <div>
        <p className="text-center font-bold text-5xl text-black">About us</p>
      <p className="text-black font-medium my-5 px-5">A digital tool designed to help users organize, prioritize, and track tasks or activities. These apps typically allow users to create tasks, 
          set deadlines, add reminders, and categorize tasks into different lists.The goal is to increase productivity and ensure tasks are completed efficiently and on time.
      </p>
        <h3 className="text-black underline mb-5 pl-14 font-extrabold">Features</h3>
        <div className="flex flex-col md:flex-row pl-14 font-bold mb-10 text-black">
          <p className="pr-20">User -Friendly Interface: Most scheduling platforms are designed to be intuitive, allowing users to navigate easily and book appointments without hassle</p>
          <p className="pr-20">Real-Time Availability: Consumers can view available time slots in real-time, ensuring they can select a time that works best for them.</p>
          <p className="pr-20">Automated Reminders: To reduce no-shows, many companies send automated reminders via email or SMS, helping customers remember their appointments.</p>  
          <p className="pr-20">Flexible Rescheduling: Users can often reschedule appointments with just a few clicks, accommodating changes in their plans without stress.</p>
          <p className="pr-20">Payment Processing: Many scheduling services integrate payment options, allowing consumers to pay for services online, which enhances convenience</p>
        </div> 
      </div>
        </div>
    </>
  )
}

export default About
