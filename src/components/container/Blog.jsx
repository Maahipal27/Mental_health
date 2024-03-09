import React from 'react';

const Profile = ({ name, qualification, experience, rating, phoneNumber, email }) => {
  const callOrWhatsApp = () => {
    window.location.href = 'tel:' + phoneNumber;
  };

  const sendEmail = () => {
    window.location.href = 'mailto:' + email;
  };

  return (
    <div className="profile bg-white rounded-lg shadow-md p-6 flex items-center relative overflow-hidden">
      <img src="WhatsApp Image 2024-03-09 at 18.07.02_48626a21.jpg" alt={name} className="w-24 h-24 rounded-full mr-6 border-4 border-white shadow-md transition-transform duration-300 transform hover:scale-110" />
      <div className="details flex-1">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>Qualification: {qualification}</p>
        <p>Experience: {experience} years</p>
        <p>Rating: {rating}</p>
        <div className="buttons_blog mt-4">
          <button onClick={callOrWhatsApp} className="phone btn">Call / WhatsApp</button>
          <button onClick={sendEmail} className="email btn">Email</button>
        </div>
      </div>
    </div>
  );
};

const App_second = () => {
  const profiles = [
    { name: 'Name 1', qualification: 'Qualification 1', experience: 5, rating: 4.5, phoneNumber: '+91 9491536001', email: 'varshakarne662@example.com' },
    // Add more profiles as needed
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-8 border-b-2 border-gray-300 mb-8">Professionals</h1>
      <div className="container flex flex-wrap justify-center">
        {profiles.map((profile, index) => (
          <Profile key={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

const Blog = () => (
  <>
    <App_second />
  </>
);

export default Blog;
