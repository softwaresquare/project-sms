import React from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUsers,
  FaSchool,
  FaInbox,
  FaSms,
  FaImages,
  FaTools,
  FaSearchDollar
} from "react-icons/fa";
import { useHistory, useLocation } from "react-router-dom";
import logo from '../../../assets/logo.png';

function Sidebar() {
  const history = useHistory();
  const location = useLocation();
  let currentPath = location.pathname;
  return (
    <div>
      <div className="text-center">
        <img className='h-50 w-50' src={logo} alt="college logo" />
        <h5>Caspian Valley College</h5>
   
      </div>
   
      <Navigation
        activeItemId={currentPath}
        onSelect={({ itemId }) => {
          history.push(itemId);
        }}
        items={[
          {
            title: "Dashboard",

            itemId: "/",
      
            elemBefore: () => <FaHome size="22" />,
          },
          {
            title: "Student",
            itemId: "/students",
            elemBefore: () => <FaUserGraduate size="22" />,
            subNav: [
            
              {
                title: "Student's Fee",
                itemId: "/students/student-fee",
              },
              {
                title: "Leave Notice",
                itemId: "/students/student-leave-notice",
              },
              {
                title: "Attendence",
                itemId: "/students/student-attendence",
              },
              {
                title: "Assignments",
                itemId: "/students/student-assignments",
              },
              {
                title: "Submitted Assignments",
                itemId: "/students/student-submitted-assignments",
              },
              {
                title: "Study Materials",
                itemId: "/students/student-study-materials",
              },
              {
                title: "Class Routine",
                itemId: "/students/student-class-routine",
              },
            ],
          },
          {
            title: "Teacher",
            itemId: "/teachers",
            elemBefore: () => <FaChalkboardTeacher size="22" />,
            subNav: [
              {
                title: "Teacher's Salary",
                itemId: "/teachers/teacher-salary",
              },
              {
                title: "Leave Notice",
                itemId: "/teachers/teacher-leave-notice",
              },
              {
                title: "Attendence",
                itemId: "/teachers/teacher-attendence",
              },
              {
                title: "Class Routines",
                itemId: "/teachers/teacher-class-routines",
              },
            ],
          },
          {
            title: "Staff",
            itemId: "/staffs",
            elemBefore: () => <FaUsers size="22" />,
            subNav: [
              {
                title: "Staff's Salary",
                itemId: "/staffs/staff-salary",
              },
              {
                title: "Leave Notice",
                itemId: "/staffs/staff-leave-notice",
              },
              {
                title: "Attendence",
                itemId: "/staffs/staff-attendence",
              },
            ],
          },
          {
            title: "Academic",
           
            elemBefore: () => <FaSchool size="22" />,
            subNav: [
              {
                title: "NewsBoard",
                itemId: "/academic/news-board",
              },
              {
                title: "Upcoming Events",
                itemId: "/academic/upcoming-events",
              },
              {
                title: "Classes",
                itemId: "/academic/classes",
              },
              {
                title: "Online Classes",
                itemId: "/academic/online-classes",
              },
              {
                title: "Result",
                itemId: "/academic/result",
              },
              {
                title: "Exam Admit Card",
                itemId: "/academic/admit-card",
              },
              {
                title: "Transportation",
                itemId: "/academic/transportation",
               
              },
            ],
          },
          {
            title: "Inbox",
            itemId: "/inbox",
            elemBefore: () => <FaInbox size="22" />,
          },

          {
            title: "SMS / Mail",
            itemId: "/sms-mail",
            elemBefore: () => <FaSms size="22" />,
          },
          {
            title: "Gallery",
            itemId: "/gallery",
            elemBefore: () => <FaImages size="22" />,
          },

          {
            title: "Admin Settings",
            itemId: "/admin-tools/admin-settings",
            elemBefore: () => <FaTools size="22" />,
            subNav: [
              {
                title: "SMS / Mail Settings",
                itemId: "/admin-tools/sms-mail-settings",
              },
              {
                title: "General Settings",
                itemId: "/admin-tools/general-settings",
              },
              {
                title: "Backup and Update",
                itemId: "/admin-tools/backup-update",
              },
            ],
          },
          {
            title: "Expenses",
            itemId: "/expenses",
            elemBefore: () => <FaSearchDollar size="22" />,
           
          },
        ]}
      />
    </div>
  );
}

export default Sidebar;
