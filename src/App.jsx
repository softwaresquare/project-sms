import React from "react";
import Dashboard from "./components/adminComponents/Dashboard";
import StaffAttendence from "./components/adminComponents/Staff Section/StaffAttendence";
import StaffLeaveNotice from "./components/adminComponents/Staff Section/StaffLeaveNotice";
import Staffs from "./components/adminComponents/Staff Section/Staffs";
import StaffSalary from "./components/adminComponents/Staff Section/StaffSalary";
import StudentAssignment from "./components/adminComponents/Student Section/StudentAssignment";
import StudentAttendence from "./components/adminComponents/Student Section/StudentAttendence";
import StudentClassRoutine from "./components/adminComponents/Student Section/StudentClassRoutine";
import StudentFee from "./components/adminComponents/Student Section/StudentFee";
import StudentLeaveNotice from "./components/adminComponents/Student Section/StudentLeaveNotice";
import Students from "./components/adminComponents/Student Section/Students";
import StudyMaterials from "./components/adminComponents/Student Section/StudyMaterials";
import SubmittedAssignments from "./components/adminComponents/Student Section/SubmittedAssignments";
import TeacherAttendence from "./components/adminComponents/Teacher Section/TeacherAttendence";
import TeacherLeaveNotice from "./components/adminComponents/Teacher Section/TeacherLeaveNotice";
import TeacherClassRoutines from "./components/adminComponents/Teacher Section/TeacherClassRoutines";
import Teachers from "./components/adminComponents/Teacher Section/Teachers";
import TeacherSalary from "./components/adminComponents/Teacher Section/TeacherSalary";
import NewsBoard from "./components/adminComponents/Academic Section/NewsBoard";
import AdmitCard from "./components/adminComponents/Academic Section/AdmitCard";
import UpcomingEvents from "./components/adminComponents/Academic Section/UpcomingEvents";
import Classes from "./components/adminComponents/Academic Section/Classes";
import OnlineClass from "./components/adminComponents/Academic Section/OnlineClass";
import Result from "./components/adminComponents/Academic Section/Result";
import Transportation from "./components/adminComponents/Academic Section/Transportation";
import Inbox from "./components/adminComponents/Inbox";
import SmsMail from "./components/adminComponents/SmsMail";
import Gallery from "./components/adminComponents/Gallery";
import AdminSettings from "./components/adminComponents/AdminTools/AdminSettings";
import SmsMailSettings from "./components/adminComponents/AdminTools/SmsMailSettings";
import GeneralSettings from "./components/adminComponents/AdminTools/GeneralSettings";
import BackupUpdate from "./components/adminComponents/AdminTools/BackupUpdate";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />

          {/* STUDENTS */}
          <Route exact path="/students" component={Students} />
          <Route exact path="/students/student-fee" component={StudentFee} />
          <Route
            exact
            path="/students/student-leave-notice"
            component={StudentLeaveNotice}
          />
          <Route
            exact
            path="/students/student-attendence"
            component={StudentAttendence}
          />
          <Route
            exact
            path="/students/student-assignments"
            component={StudentAssignment}
          />
          <Route
            exact
            path="/students/student-submitted-assignments"
            component={SubmittedAssignments}
          />
          <Route
            exact
            path="/students/student-study-materials"
            component={StudyMaterials}
          />
          <Route
            exact
            path="/students/student-class-routine"
            component={StudentClassRoutine}
          />

          {/* TEACHERS */}
          <Route exact path="/teachers" component={Teachers} />
          <Route
            exact
            path="/teachers/teacher-salary"
            component={TeacherSalary}
          />
          <Route
            exact
            path="/teachers/teacher-leave-notice"
            component={TeacherLeaveNotice}
          />
          <Route
            exact
            path="/teachers/teacher-attendence"
            component={TeacherAttendence}
          />
          <Route
            exact
            path="/teachers/teacher-class-routines"
            component={TeacherClassRoutines}
          />

          {/* STAFFS */}
          <Route exact path="/staffs" component={Staffs} />
          <Route exact path="/staffs/staff-salary" component={StaffSalary} />
          <Route
            exact
            path="/staffs/staff-leave-notice"
            component={StaffLeaveNotice}
          />
          <Route
            exact
            path="/staffs/staff-attendence"
            component={StaffAttendence}
          />

          {/* ACADEMIC */}
          <Route exact path="/academic/news-board" component={NewsBoard} />
          <Route
            exact
            path="/academic/upcoming-events"
            component={UpcomingEvents}
          />
          <Route exact path="/academic/classes" component={Classes} />
          <Route
            exact
            path="/academic/online-classes"
            component={OnlineClass}
          />
          <Route exact path="/academic/result" component={Result} />
          <Route exact path="/academic/admit-card" component={AdmitCard} />
          <Route
            exact
            path="/academic/transportation"
            component={Transportation}
          />

          {/* INBOX */}
          <Route exact path="/inbox" component={Inbox} />

          {/* SMS-MAIL */}
          <Route exact path="/sms-mail" component={SmsMail} />

          {/* GALLERY */}
          <Route exact path="/gallery" component={Gallery} />

          {/* ADMIN TOOLS */}
          <Route
            exact
            path="/admin-tools/admin-settings"
            component={AdminSettings}
          />
          <Route
            exact
            path="/admin-tools/sms-mail-settings"
            component={SmsMailSettings}
          />
          <Route
            exact
            path="/admin-tools/general-settings"
            component={GeneralSettings}
          />
          <Route
            exact
            path="/admin-tools/backup-update"
            component={BackupUpdate}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
