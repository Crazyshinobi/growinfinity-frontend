import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AdminLogin } from "./admin/pages/auth/AdminLogin.jsx";
import { Dashboard } from "./admin/Dashboard.jsx";
import PrivateRoute from "./admin/components/PrivateRoute.jsx";
import { AddPropertyCategory } from "./admin/pages/category/AddPropertyCategory.jsx";
import { Error404 } from "./components/Error404.jsx";
import { ViewPropertyCategory } from "./admin/pages/category/ViewPropertyCategory.jsx";
import { ViewContact } from "./admin/pages/contact/ViewContact.jsx";
import { AddNews } from "./admin/pages/news/AddNews.jsx";
import { ViewNews } from "./admin/pages/news/ViewNews.jsx";
import { UpdateNews } from "./admin/pages/news/UpdateNews.jsx";
import { AddAmenity } from "./admin/pages/amenity/AddAmenity.jsx";
import { ViewAmenity } from "./admin/pages/amenity/ViewAmenity.jsx";
import { UpdateAmenity } from "./admin/pages/amenity/UpdateAmenity.jsx";
import { AddProperty } from "./admin/pages/property/AddProperty.jsx";
import { ViewProperty } from "./admin/pages/property/ViewProperty.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { About } from "./pages/About/About.jsx";
import { Services } from "./pages/Services/Services.jsx";
import { News } from "./pages/News/News.jsx";
import { Event } from "./pages/Event/Event.jsx";
import { SingleEvent } from "./pages/SingleEvent/SingleEvent.jsx";
import { Contact } from "./pages/Contact/Contact.jsx";
import { Brochure } from "./pages/Brochure/Brochure.jsx";
import { AddBrochure } from "./admin/pages/brochure/AddBrochure.jsx";
import { ViewBrochure } from "./admin/pages/brochure/ViewBrochure.jsx";
import { UpdateBrochure } from "./admin/pages/brochure/UpdateBrochure.jsx";
import { Search } from "./pages/Search/Search.jsx";
import { ProjectDetails } from "./pages/ProjectDetails/ProjectDetails.jsx";
import { SingleProject } from "./pages/SingleProject/SingleProject.jsx";
import { ViewPropertyEnquiry } from "./admin/pages/propertyEnquiry/ViewPropertyEnquiry.jsx";
import { PrivacyPolicy } from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";
import { Awards } from "./pages/Awards/Awards.jsx";
import { AddEvents } from "./admin/pages/events/AddEvents.jsx";
import { ViewEvents } from "./admin/pages/events/ViewEvents.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/:id" element={<SingleEvent />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
      <Route path="/services" element={<Services />} />
      <Route path="/news" element={<News />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/brochure" element={<Brochure />} />
      <Route path="/search/:id" element={<Search />} />
      <Route path="/property/:id" element={<SingleProject />} />

      {/* Admin Routes  */}
      <Route path="/admin" element={<AdminLogin />} />

      {/* Admin Protected Routes  */}

      {/* Dashboard  */}
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      {/* Property */}
      <Route
        path="/admin/dashboard/add-property"
        element={
          <PrivateRoute>
            <AddProperty />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/dashboard/view-property"
        element={
          <PrivateRoute>
            <ViewProperty />
          </PrivateRoute>
        }
      />

      {/* Property Category  */}
      <Route
        path="/admin/dashboard/add-property-category"
        element={
          <PrivateRoute>
            <AddPropertyCategory />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/dashboard/view-property-category"
        element={
          <PrivateRoute>
            <ViewPropertyCategory />
          </PrivateRoute>
        }
      />
      {/* News  */}
      <Route
        path="/admin/dashboard/add-news"
        element={
          <PrivateRoute>
            <AddNews />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/dashboard/view-news"
        element={
          <PrivateRoute>
            <ViewNews />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/dashboard/update-news/:id"
        element={
          <PrivateRoute>
            <UpdateNews />
          </PrivateRoute>
        }
      />
      {/* Events  */}
      <Route
        path="/admin/dashboard/add-events"
        element={
          <PrivateRoute>
            <AddEvents />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/dashboard/view-events"
        element={
          <PrivateRoute>
            <ViewEvents />
          </PrivateRoute>
        }
      />

      {/* Amenity  */}
      <Route
        path="/admin/dashboard/add-amenity"
        element={
          <PrivateRoute>
            <AddAmenity />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/dashboard/view-amenity"
        element={
          <PrivateRoute>
            <ViewAmenity />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/dashboard/update-amenity/:id"
        element={
          <PrivateRoute>
            <UpdateAmenity />
          </PrivateRoute>
        }
      />

      {/* Brochure  */}
      <Route
        path="/admin/dashboard/add-brochure"
        element={
          <PrivateRoute>
            <AddBrochure />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/dashboard/view-brochure"
        element={
          <PrivateRoute>
            <ViewBrochure />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/dashboard/update-brochure/:id"
        element={
          <PrivateRoute>
            <UpdateBrochure />
          </PrivateRoute>
        }
      />

      {/* Contact  */}
      <Route
        path="/admin/dashboard/view-contact"
        element={
          <PrivateRoute>
            <ViewContact />
          </PrivateRoute>
        }
      />

      {/* Property Enquiry  */}
      <Route
        path="/admin/dashboard/view-property-enquiry"
        element={
          <PrivateRoute>
            <ViewPropertyEnquiry />
          </PrivateRoute>
        }
      />

      {/* Error  */}
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
