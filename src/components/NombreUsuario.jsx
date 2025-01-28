// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = ({ name, photo }) => {
    return (
        <div className="flex items-center bg-white shadow-inner mx-auto p-4 border rounded-3xl w-60 md:w-96">
            <img
                src={photo}
                alt="User profile"
                className="mr-8 rounded-full w-12 h-12"
            />
            <span className="font-semibold text-2xl text-stone-400">{name}</span>
        </div>
    );
};

export default UserProfile;
