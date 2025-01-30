import React from 'react';

const UserProfile = ({ name, photo }) => {
    return (
        <div className="flex items-center bg-white shadow-inner mx-auto p-2 border rounded-3xl w-48 sm:w-80">
            <img
                src={photo}
                alt="User profile"
                className="mr-4 rounded-full w-8 h-8"
            />
            <span className="font-semibold text-sm text-stone-400">{name}</span>
        </div>
    );
};

export default UserProfile;