import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Compontes/Home";
import Events from "./Compontes/Events";
import Achievement from "./Compontes/Achievement";
import News from "./Compontes/News";
import Gallery from "./Compontes/Gallery";
import Footer from "./Compontes/Footer";
import Videos from "./Compontes/Videos";
import Congresscommittee from "./Page/Contribute";
import Joinvolunteer from "../src/Page/Joinvolunteer";
import Petitionform from "../src/Page/Petitionform";
import Header from "./adminsection/Header";
import withSideBarLayout from "../src/adminnavbar/Sidebar";
import AdminEvents from "./adminsection/AdminEvents";
import Eventssection from "../src/adminnavbar/Eventssection";
import Achievementssection from "../src/adminnavbar/Achievementssection";
import Adminachievements from "./adminsection/Adminachievements";

import Login from "./adminsection/Login";

import Adminnews from "./adminsection/Adminnews";
import AdminGallery from "./adminsection/AdminGallery";
import AdminPetitions from "./adminsection/AdminPetitions";
import AdminVolunteer from "./adminsection/AdminVolunteer ";
import EventForm from "../src/adminpage/EventForm";
import Eventupdating from "../src/adminpage/Eventupdating";
import EventDetailes from "../src/adminpage/EventDetailes";
import Deletevent from "../src/adminpage/Deletevent";

import AchievementsForm from "./adminpage/AchievementsForm";
import Achievementsupdating from "../src/adminpage/Achievementsupdating";
import AchievementsDetailes from "../src/adminpage/AchievementsDetailes";
import DeletAchievements from "../src/adminpage/DeletAchievements";

import NewsForm from "../src/adminpage/NewsForm";
import Newsupdating from "../src/adminpage/Newsupdating";
import AdminVideo from "../src/adminsection/AdminVideo";
import Galleryphotos from "../src/adminpage/Galleryphotos";
import Galleryvideo from "../src/adminpage/Galleryvideo";
import Petitionview from "../src/adminpage/Petitionview";
import Volunteerview from "../src/adminpage/Volunteerview";
import Contribute from "./Page/Contribute";
//  import Layout from "../src/Layout";

function App() {
  return (
    <div className="App">
      <>
        <Router>
        {/* <Layout> */}
          <Routes>
            {/* web sit section  */}
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Achievement" element={<Achievement />} />
            <Route path="/News" element={<News />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Videos" element={<Videos />} />
            <Route path="/Congresscommittee" element={<Congresscommittee />} />
            <Route path="/Joinvolunteer" element={<Joinvolunteer />} />
            <Route path="/Petitionform" element={<Petitionform />} />
            <Route path="/Contribute" element={<Contribute />} />

            {/* admin pages  */}
            <Route
              path="/Header"
              element={withSideBarLayout(<Header />, true)}
            />
            <Route
              path="/AdminEvents"
              element={withSideBarLayout(<AdminEvents />, true)}
            />
            <Route
              path="/Adminachievements"
              element={withSideBarLayout(<Adminachievements />, true)}
            />
            <Route
              path="/Adminnews"
              element={withSideBarLayout(<Adminnews />, true)}
            />
            <Route
              path="/AdminGallery"
              element={withSideBarLayout(<AdminGallery />, true)}
            />
            <Route
              path="/AdminPetitions"
              element={withSideBarLayout(<AdminPetitions />, true)}
            />
            <Route
              path="/AdminVolunteer"
              element={withSideBarLayout(<AdminVolunteer />, true)}
            />
            <Route
              path="/Eventssection"
              element={withSideBarLayout(<Eventssection />, true)}
            />
            <Route
              path="/Achievementssection"
              element={withSideBarLayout(<Achievementssection />, true)}
            />
            {/* <Route path="/Adminmodel" element={withSideBarLayout(<Adminmodel />, true)} /> */}
            <Route
              path="/EventForm"
              element={withSideBarLayout(<EventForm />, true)}
            />
            <Route
              path="/Eventupdating"
              element={withSideBarLayout(<Eventupdating />, true)}
            />
            <Route
              path="/EventDetailes"
              element={withSideBarLayout(<EventDetailes />, true)}
            />
            <Route
              path="/Deletevent"
              element={withSideBarLayout(<Deletevent />, true)}
            />

            <Route
              path="/AchievementsForm"
              element={withSideBarLayout(<AchievementsForm />, true)}
            />
            <Route
              path="/Achievementsupdating"
              element={withSideBarLayout(<Achievementsupdating />, true)}
            />
            <Route
              path="/AchievementsDetailes"
              element={withSideBarLayout(<AchievementsDetailes />, true)}
            />
            <Route
              path="/DeletAchievements"
              element={withSideBarLayout(<DeletAchievements />, true)}
            />

            <Route
              path="/NewsForm"
              element={withSideBarLayout(<NewsForm />, true)}
            />
            <Route
              path="/Newsupdating"
              element={withSideBarLayout(<Newsupdating />, true)}
            />
            <Route
              path="/AdminVideo"
              element={withSideBarLayout(<AdminVideo />, true)}
            />
            <Route
              path="/Galleryphotos"
              element={withSideBarLayout(<Galleryphotos />, true)}
            />
            <Route
              path="/Galleryvideo"
              element={withSideBarLayout(<Galleryvideo />, true)}
            />
            <Route
              path="/Petitionview"
              element={withSideBarLayout(<Petitionview />, true)}
            />

            <Route
              path="/Volunteerview"
              element={withSideBarLayout(<Volunteerview />, true)}
            />
                        
                        <Route
              path="/Login"
              element={(<Login />)}
            />
          </Routes>
          {/* </Layout> */}
          {/* <Footer /> */}
        </Router>
      </>
    </div>
  );
}

export default App;
