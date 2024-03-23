
// Profile.js
import React from 'react';
import { userProfile } from '../constants';
import { CareerRoadmap, PersonalityTestResults } from '../components';

const Profile = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center text-center mb-8">
        <img src={userProfile.image} alt="Profile" className="w-32 h-32 rounded-full mb-4" />
        <h1 className="text-3xl font-bold">{userProfile.name}</h1>
        <p className="text-md text-gray-600">{userProfile.bio}</p>
      </div>

      <div className="flex">
        <PersonalityTestResults 
          mbti={userProfile.mbti} 
          rayDalioPersonality={userProfile.rayDalioPersonality} 
        />

        <CareerRoadmap 
          careerPathSuggestion={userProfile.careerPathSuggestion} 
        />
      </div>

    </div>
  );
};

export default Profile;
