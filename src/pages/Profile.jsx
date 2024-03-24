import React from 'react';
import { me } from '../assets/images';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'; // Social media icons

const Profile = () => {
  const personalDetails = {
    name: "Lei Zhi Guang",
    email: "leizhiguang1@gmail.com",
    education: "University of Malaya",
    socialMedia: {
      linkedIn: "https://linkedin.com/in/yourprofile",
      instagram: "https://instagram.com/yourprofile",
      twitter: "https://twitter.com/yourprofile",
    }
  };

  const skills = ['Data Analysis', 'Project Management', 'Critical Thinking', 'Public Speaking', 'Team Leadership'];
  const mbtiResult = {
    type: 'INTJ',
    details: { I: 75, N: 85, T: 60, J: 70 },
  };
  const rayDalioResult = {
    type: 'Shaper',
    description: "Shapers are independent thinkers, risk-takers, and focused on results. They fit well in roles that require vision and strong leadership, making them suitable for leadership positions in Islamic finance."
  };

  const suggestions = [
    { title: 'Data Scientist in Islamic Finance', reason: 'Given your analytical skills and finance interest, data science within Islamic finance could be groundbreaking for you.' },
    { title: 'Project Manager for Shariah-Compliant Products', reason: 'Your project management skills and understanding of Shariah compliance position you well to lead projects in developing new Shariah-compliant products.' },
  ];

  // Render MBTI Progress Bar
  const renderMBTIProgressBar = (key, value) => (
    <div key={key} className="flex items-center">
      <span className="w-1/6 text-right pr-2">{key}</span>
      <div className="w-4/6 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${value}%` }}></div>
      </div>
      <span className="w-1/6 pl-2">{value}%</span>
    </div>
  );

  return (
    <div className="container mx-auto p-4 space-y-8">
      {/* Personal Details */}
      <div className="bg-white shadow rounded-lg p-6 flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
        <div className="w-48 h-48 rounded-full overflow-hidden mx-auto md:mx-0">
          <img src={me} alt="Profile" className="object-cover w-full h-full" />
        </div>
        <div className="flex-grow">
          <h1 className="text-3xl font-bold">{personalDetails.name}</h1>
          <p className="text-lg text-gray-600">{personalDetails.email}</p>
          <div className="flex justify-center md:justify-start mt-4 space-x-3">
            <a href={personalDetails.socialMedia.linkedIn} target="_blank" rel="noopener noreferrer"><FaLinkedin size="1.5em" /></a>
            <a href={personalDetails.socialMedia.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram size="1.5em" /></a>
            <a href={personalDetails.socialMedia.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter size="1.5em" /></a>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc pl-5">
          {skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>

      {/* MBTI & Ray Dalio Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* MBTI */}
        <div className="bg-white shadow rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold mb-4">MBTI Result: <span className=' font-bold text-purple-600'>{mbtiResult.type}</span></h2>
          
          <div className="flex justify-center gap-2">
            <img className='h-full' src="https://www.16personalities.com/static/images/personality-types/avatars/intj-architect.png" alt="" width={100} />
            <div className=" w-3/4 h-full">
              {Object.entries(mbtiResult.details).map(([key, value]) => renderMBTIProgressBar(key, value))}
            </div>
          </div>
          
          <button className="mt-4 bg-primary text-white px-4 py-2 rounded">Detailed Analysis</button>
        </div>
        {/* Ray Dalio */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Ray Dalio Test Result: <span className=' font-bold text-red-600'>{rayDalioResult.type}</span></h2>
          <div className="flex gap-4">
            <img width={150} src="https://scontent.fkul2-3.fna.fbcdn.net/v/t1.6435-9/199391613_1202133373541669_4509210245536829915_n.png?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eRtZxzxbM2YAX_lJwkC&_nc_ht=scontent.fkul2-3.fna&oh=00_AfDji9vF-gMTfmBuJYpmO3Uq5chiCRPL5_TjP2xRBpbPmA&oe=662741A2" alt="" />
            <p>{rayDalioResult.description}</p>
          </div>
          <button className="mt-4 bg-primary text-white px-4 py-2 rounded">Full Report</button>
        </div>
      </div>

      {/* Career Path Suggestions */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">AI-Generated Career Path Suggestions</h2>
        {suggestions.map((suggestion, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{suggestion.title}</h3>
            <p>{suggestion.reason}</p>
            {/* This could be links to courses, success stories, etc. For the demo, it's just a placeholder link. */}
            <a href="#" className="text-primary hover:underline">Explore more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;

