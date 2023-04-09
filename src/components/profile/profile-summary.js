import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileSummaryItem = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">
            {profile.firstName} {profile.lastName}
          </h3>
          <p className="card-text">{profile.handle}</p>
          <p className="card-text">{profile.bio}</p>
          <p className="card-text">{profile.dateOfBirth}</p>
          <p className="card-text">{profile.major}</p>
          <Link
            to="/profile/edit-profile"
            type="button"
            className="btn btn-warning me-2"
          >
            Edit Profile
          </Link>
        </div>
      </div>

      <div className="card">
        <h3 className="card-title">Following</h3>
        {/* Link to following uers' profile page */}
      </div>

      <div className="card">
        <h3 className="card-title">Followers</h3>
        {/* Link to follower uers' profile page */}
      </div>
    </>
  );
};

export default ProfileSummaryItem;
