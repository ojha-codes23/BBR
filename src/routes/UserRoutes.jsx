import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

import UserLayout from "../components/layout/user/UserLayout";
import Dashboard from "../pages/user/Dashboard";
import Course from "../pages/user/courses/Course";
import Notification from "../pages/user/Notification";
import Profile from "../pages/user/Profile";
import NewServiceRequest from "../pages/auth/user/NewServiceRequest";
import NotificationSetting from "../pages/user/NotificationSetting";
import CareerPlanningWorkshop from "../pages/user/courses/careerPlanningWorkshop";
import CareerPlanningWorkshop2 from "../pages/user/courses/CareerPlanningWorkshop2";
import MyNotes from "../pages/user/courses/MyNotes";
import MyServiceRequest from "../pages/user/services/MyServiceRequest";
import ProjectSupport from "../pages/user/services/ProjectSupport";
import MyService from "../pages/user/services/MyService";
import MyService2 from "../pages/user/services/MyService2";
import SOWDetail from "../pages/user/SOW/SOWDetail";
import SOWDetail2 from "../pages/user/SOW/SOWDetail2";
import SOWDetail3 from "../pages/user/SOW/SOWDetail3";
import SOWDetail4 from "../pages/user/SOW/SOWDetail4";
import SOWDetail5 from "../pages/user/SOW/SOWDetail5";
import SOWDetail6 from "../pages/user/SOW/SOWDetail6";
import SOWDetail7 from "../pages/user/SOW/SOWDetail7";
import SOWDetail8 from "../pages/user/SOW/SOWDetail8";
import Event from "../pages/user/event/Event";
import MyEvent from "../pages/user/event/MyEvent";
import MyEventCalendar from "../pages/user/event/MyEventCalendar";
import EventLessonDetail from "../pages/user/event/EventLessonDetail";
import Community from "../pages/user/community/Community";
import LiveCoaching from "../pages/user/community/LiveCoaching";
import MentorshipGroup from "../pages/user/community/MentorshipGroup";
import SupportAndFaq from "../pages/user/SupoortAndFaq";
import Resource from "../pages/user/resources/Resource";
import ResourceDetail from "../pages/user/resources/ResourceDetail";
import MyList from "../pages/user/resources/MyList";
import ListDetail from "../pages/user/resources/ListDetail";
import Mycertificate from "../pages/user/certificate/Mycertificate";
import Quiz from "../pages/user/courses/quiz/Quiz";
import QuizCompleted from "../pages/user/courses/quiz/QuizCompleted";
import Register from "../pages/auth/user/Register";
import ForgotPassword from "../pages/auth/user/ForgotPassword";
import VerifyPasswordOtp from "../pages/auth/user/VerifyPasswordOtp";
import CreatePassword from "../pages/auth/user/CreatePassword";
import OrganizationLogin from "../pages/auth/user/OrganizationLogin";

const UserRoutes = () => {
  return (
    <Routes>
      {/* Public Student Auth Routes */}
      <Route path="sign-up" element={<Register />} />
      <Route path="forget-password" element={<ForgotPassword />} />
      <Route path="verify-otp" element={<VerifyPasswordOtp />} />
      <Route path="create-password" element={<CreatePassword />} />
      <Route path="organization-login" element={<OrganizationLogin />} />

      {/* Protected Student Routes */}
      <Route
        element={<ProtectedRoutes allowedRoles={["user"]} redirectPath="/student" />}
      >
        <Route element={<UserLayout />}>
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="my-courses" element={<Course />} />
          <Route path="notification" element={<Notification />} />
          <Route path="my-profile" element={<Profile />} />
          <Route path="new-requested-service" element={<NewServiceRequest />} />
          <Route path="my-service" element={<MyService />} />
          <Route path="my-service2" element={<MyService2 />} />
          <Route
            path="notification-setting"
            element={<NotificationSetting />}
          />
          <Route path="lesson" element={<CareerPlanningWorkshop />} />
          <Route path="lesson-detail" element={<CareerPlanningWorkshop2 />} />
          <Route path="my-service-request" element={<MyServiceRequest />} />
          <Route path="project-support" element={<ProjectSupport />} />
          <Route path="sow-detail-1" element={<SOWDetail />} />
          <Route path="sow-detail-2" element={<SOWDetail2 />} />
          <Route path="sow-detail-3" element={<SOWDetail3 />} />
          <Route path="sow-detail-4" element={<SOWDetail4 />} />
          <Route path="sow-detail-5" element={<SOWDetail5 />} />
          <Route path="sow-detail-6" element={<SOWDetail6 />} />
          <Route path="sow-detail-7" element={<SOWDetail7 />} />
          <Route path="sow-detail-8" element={<SOWDetail8 />} />
          <Route path="event" element={<Event />} />
          <Route path="my-event" element={<MyEvent />} />
          <Route path="my-notes" element={<MyNotes />} />
          <Route path="my-event-calendar" element={<MyEventCalendar />} />
          <Route path="event/lesson-detail" element={<EventLessonDetail />} />
          <Route path="community" element={<Community />} />
          <Route path="live-sessions-coaching" element={<LiveCoaching />} />
          <Route path="mentorship-group" element={<MentorshipGroup />} />
          <Route path="support-faqs" element={<SupportAndFaq />} />
          <Route path="resource" element={<Resource />} />
          <Route path="resource-detail" element={<ResourceDetail />} />
          <Route path="my-list" element={<MyList />} />
          <Route path="list-detail" element={<ListDetail />} />
          <Route path="my-certificates" element={<Mycertificate />} />
          <Route path="quiz-completed" element={<QuizCompleted />} />
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default UserRoutes;

// import { Routes, Route } from "react-router-dom";

// import UserLayout from "../components/layout/user/UserLayout";
// import UserLogin from "../pages/auth/user/UserLogin";
// import Register from "../pages/auth/user/Register";
// import ForgotPassword from "../pages/auth/user/ForgotPassword";
// import VerifyPasswordOtp from "../pages/auth/user/VerifyPasswordOtp";
// import CreatePassword from "../pages/auth/user/CreatePassword";
// import OrganizationLogin from "../pages/auth/user/OrganizationLogin";
// import Dashboard from "../pages/user/Dashboard";
// // import Course from "../pages/user/Course";
// import Notification from "../pages/user/Notification";
// import Profile from "../pages/user/Profile";
// import NewServiceRequest from "../pages/auth/user/NewServiceRequest";
// import NotificationSetting from "../pages/user/NotificationSetting";
// import Course from "../pages/user/courses/Course";
// import CareerPlanningWorkshop from "../pages/user/courses/careerPlanningWorkshop";
// import MyNotes from "../pages/user/courses/MyNotes";
// import CareerPlanningWorkshop2 from "../pages/user/courses/CareerPlanningWorkshop2";
// import MyServiceRequest from "../pages/user/services/MyServiceRequest";
// import ProjectSupport from "../pages/user/services/ProjectSupport";
// import MyService2 from "../pages/user/services/MyService2";
// import MyService from "../pages/user/services/MyService";
// import SOWDetail1 from "../pages/user/SOW/SOWDetail";
// import SOWDetail2 from "../pages/user/SOW/SOWDetail2";
// import SOWDetail3 from "../pages/user/SOW/SOWDetail3";
// import SOWDetail4 from "../pages/user/SOW/SOWDetail4";
// import SOWDetail5 from "../pages/user/SOW/SOWDetail5";
// import SOWDetail6 from "../pages/user/SOW/SOWDetail6";
// import SOWDetail7 from "../pages/user/SOW/SOWDetail7";
// import SOWDetail8 from "../pages/user/SOW/SOWDetail8";
// import SOWDetail from "../pages/user/SOW/SOWDetail";
// import Event from "../pages/user/event/Event";
// import MyEvent from "../pages/user/event/MyEvent";
// import MyEventCalendar from "../pages/user/event/MyEventCalendar";
// import EventLessonDetail from "../pages/user/event/EventLessonDetail";
// import Community from "../pages/user/community/Community";
// import LiveCoaching from "../pages/user/community/LiveCoaching";
// import MentorshipGroup from "../pages/user/community/MentorshipGroup";
// import SupportAndFaq from "../pages/user/SupoortAndFaq";

// import ResourceDetail from "../pages/user/resources/ResourceDetail";
// import Resource from "../pages/user/resources/Resource";
// import MyList from "../pages/user/resources/MyList";
// import ListDetail from "../pages/user/resources/ListDetail";
// import Mycertificate from "../pages/user/certificate/Mycertificate";
// import QuizCompleted from "../pages/user/courses/quiz/QuizCompleted";
// import Quiz from "../pages/user/courses/quiz/Quiz";

// const UserRoutes = () => {
//   return (
//     <Routes>
//         <Route path="/" element={<UserLogin />} />
//         <Route path="sign-up" element={<Register />} />
//         <Route path="forget-password" element={<ForgotPassword />} />
//         <Route path="verify-otp" element={<VerifyPasswordOtp />} />
//         <Route path="create-password" element={<CreatePassword/>} />
//          <Route path="organization-login" element={<OrganizationLogin/>}/>

//         <Route element={<UserLayout />}>
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="my-courses" element={<Course />} />
//           <Route path="notification" element={< Notification/>} />
//           <Route path="my-profile" element={< Profile/>} />
//           <Route path="new-requested-service" element={< NewServiceRequest/>} />
//           <Route path="my-service" element={< MyService/>} />
//           <Route path="my-service2" element={< MyService2/>} />
//           <Route path="notification-setting" element={<NotificationSetting/>}/>
//           <Route path="lesson" element={<CareerPlanningWorkshop/>}/>
//           <Route path="lesson-detail" element={<CareerPlanningWorkshop2/>}/>
//           <Route path="my-service-request" element={<MyServiceRequest/>}/>
//           <Route path="project-support" element={<ProjectSupport/>}/>
//           <Route path="sow-detail-1" element={<SOWDetail/>}/>
//           <Route path="sow-detail-2" element={<SOWDetail2/>}/>
//           <Route path="sow-detail-3" element={<SOWDetail3/>}/>
//           <Route path="sow-detail-4" element={<SOWDetail4/>}/>
//           <Route path="sow-detail-5" element={<SOWDetail5/>}/>
//           <Route path="sow-detail-6" element={<SOWDetail6/>}/>
//           <Route path="sow-detail-7" element={<SOWDetail7/>}/>
//           <Route path="sow-detail-8" element={<SOWDetail8/>}/>
//           <Route path="event" element={<Event/>}/>
//           <Route path="my-event" element={<MyEvent/>}/>
//           <Route path="my-notes" element={<MyNotes/>}/>
//           <Route path="my-event-calendar" element={<MyEventCalendar/>}/>
//           <Route path="event/lesson-detail" element={<EventLessonDetail/>}/>
//           <Route path="community" element={<Community/>}/>
//           <Route path="live-sessions-coaching" element={<LiveCoaching/>}/>
//           <Route path="mentorship-group" element={<MentorshipGroup/>}/>
//           <Route path="support-faqs" element={<SupportAndFaq/>}/>
//           <Route path="resource" element={<Resource/>}/>
//           <Route path="resource-detail" element={<ResourceDetail/>}/>
//           <Route path="my-list" element={<MyList/>}/>
//           <Route path="list-detail" element={<ListDetail/>}/>
//           <Route path="my-certificates" element={<Mycertificate/>}/>
//           <Route path="quiz-completed" element={<QuizCompleted/>}/>
//            <Route path="quiz" element={<Quiz/>}/>

//         </Route>
//     </Routes>
//   );
// };

// export default UserRoutes;
