import React from 'react'
import img1 from './img1.png';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { IoIosArrowForward } from "react-icons/io";
export const Sidebar = () => {
  return (
    <>
    <div className='menu'>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link new2 link-dark" aria-current="page">
        <HiOutlineDesktopComputer /> CIRCULAR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IoIosArrowForward/>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link new2 link-dark">
        <HiOutlineDesktopComputer /> WELCOME
        </a>
      </li>
      <li>
        <a href="#" className="nav-link new2 link-dark">
        <HiOutlineDesktopComputer /> Student Profile
        </a>
      </li>

      <li>
        <a href="#" className="nav-link new2 link-dark">
        <HiOutlineDesktopComputer /> Academic Reports&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IoIosArrowForward/>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link new2 link-dark">
        <HiOutlineDesktopComputer /> Students&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IoIosArrowForward/>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link new2 link-dark">
        <HiOutlineDesktopComputer /> Unified Time Table&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IoIosArrowForward/>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link new2 link-dark">
        <HiOutlineDesktopComputer /> Course Feedback
        </a>
      </li>
      <li>
        <a href="#" className="nav-link new2 link-dark">
        <HiOutlineDesktopComputer /> New Regulation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IoIosArrowForward/>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark new">
        <HiOutlineDesktopComputer /> My Time Table & Attendance&nbsp;&nbsp;<IoIosArrowForward/>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark new">
        <HiOutlineDesktopComputer /> Student Service Requests (... &nbsp;&nbsp;&nbsp;<IoIosArrowForward/>
        </a>
        
      </li>
    </ul>

    </div>



    <div className='main'>
      <span className="highlight"><strong><font color="yellow">Date:28-Feb-22</font></strong></span><br/>
      <span className="highlight"><strong><font color="yellow">Day Order:3&nbsp;&nbsp;&nbsp;&nbsp;</font></strong></span><br/><br/>
      <p className='para1'>Early symptoms of Covid-19 - <span className='para2'>Sore throat, dry cough, fever, cold, loss of smell, loss of taste etc. If any of the above symptoms are noticed contact emergency helpline.</span></p>
      <p className='para2'>Emergency Contact :- <span className='para3'><strong>044 - 2 7 4 5 2 7 2 7 </strong></span></p>
      <p className='para2'>Mobile: :- <span className='para3'><strong>9 7 8 9 8 8 8 4 5 3 / 9 9 4 0 0 9 6 0 1 2</strong></span></p><br/>
      <div align="center" className="LogoDiv">
        <img align="middle" height="250" width="400" alt="Lamp" src="https://creator.zohopublic.com/srm_university/academia-academic-services/Image_Sourses_Report/2727643000229985225/Image/image-download/5YzR0Wf3yxnuA2p2008wCne7Gud8VAFTMfY3w2nDuStF9UzJWVjpghPXeThO09w2AMmmgX0mFmyFRKJX2fQAHZeRjqANQqGty7tS/1631332744442_academia-new.jpg"/>
          <p className="big"> 	
              <font>
              SRM Academia is the Official Student/Parent Portal of SRM's Faculty of Engineering and Technology which aims at providing a better experience to the students to access the academic web services.
              The portal is a gateway to your academic information such as attendance, internal marks, timetable, etc.
              </font>
            <br/>
          </p>
        <div>
        <img align="middle" height="250" width="400" alt="test" src={img1}/>
      </div>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <p></p>
<br/><br/>
<p></p>
</div>
      </div>
  
    </>
  )
}
