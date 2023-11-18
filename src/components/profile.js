import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <div className="profile">
            <div className="profile-image">
                <img src="https://www.terriblytinytales.com/profile.jpeg" alt="Profile" />
            </div>
            <div className="profile-info">
                <h1 className="profile-name">Terribly Tiny Tales</h1>
                <p className="profile-bio">We tell stories. Often, in less than 140 characters. Sometimes, in more.</p>
                <div className="profile-stats">
                    <div className="profile-stat">
                        <span className="stat-number">1.2M</span>
                        <span className="stat-label">Followers</span>
                    </div>
                    <div className="profile-stat">
                        <span className="stat-number">1.5K</span>
                        <span className="stat-label">Following</span>
                    </div>
                    <div className="profile-stat">
                        <span className="stat-number">3.4K</span>
                        <span className="stat-label">Stories</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
