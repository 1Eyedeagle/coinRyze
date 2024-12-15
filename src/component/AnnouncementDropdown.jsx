import React, { useState } from "react";

const AnnouncementDropdown = ({ announcements }) => {
  const [openIndex, setOpenIndex] = useState(null); // Track which dropdown is open

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="announcement-dropdown">
      {announcements.map((announcement, index) => (
        <div key={index} className="announcement-item">
          <div
            className="announcement-header  "
            onClick={() => toggleDropdown(index)}
          >
            <h5>{announcement.title}</h5>
            <span>{announcement.time}</span>
          </div>
          {openIndex === index && (
            <div className="announcement-content">
              <p>{announcement.details}</p>
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default AnnouncementDropdown;
