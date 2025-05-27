import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    college: '',
    phone: '',
    gender: 'male'
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updateSuccess, setUpdateSuccess] = useState(false);

  // Load profile data from localStorage on component mount
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('profileData'));
    if (savedProfile) {
      setProfileData(savedProfile);
    }
    setLoading(false);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setUpdateSuccess(false);

    try {
      // Save profile data to localStorage
      localStorage.setItem('profileData', JSON.stringify(profileData));
      setUpdateSuccess(true);
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("Failed to update profile. Please try again.");
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    setUpdateSuccess(false);
  };

  // Static avatar URLs for male and female
  const maleAvatar = 'https://www.w3schools.com/howto/img_avatar.png'; // Example male avatar
  const femaleAvatar = 'https://www.w3schools.com/howto/img_avatar2.png'; // Example female avatar

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={{
            ...styles.profileIconContainer,
            backgroundColor: profileData.gender === 'male' ? '#e6f7ff' : '#ffebf2'
          }}>
            <img
              src={profileData.gender === 'male' ? maleAvatar : femaleAvatar}
              alt="Profile"
              style={styles.profileImage}
            />
          </div>
          <h2 style={styles.title}>My Profile</h2>
          <button 
            style={isEditing ? styles.saveButton : styles.editButton} 
            onClick={isEditing ? handleSubmit : toggleEdit}
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>

        {error && <div style={styles.error}>{error}</div>}
        {updateSuccess && <div style={styles.success}>Profile updated successfully!</div>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.fieldContainer}>
            <div style={styles.iconContainer}>
              <span style={{...styles.fieldIcon, color: '#007bff'}}>👤</span>
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Full Name</label>
              {isEditing ? (
                <input
                  name="name"
                  type="text"
                  value={profileData.name}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              ) : (
                <p style={styles.value}>{profileData.name || 'Not specified'}</p>
              )}
            </div>
          </div>

          <div style={styles.fieldContainer}>
            <div style={styles.iconContainer}>
              <span style={{...styles.fieldIcon, color: '#007bff'}}>🎓</span>
            </div>
            <div style={styles.field}>
              <label style={styles.label}>College</label>
              {isEditing ? (
                <input
                  name="college"
                  type="text"
                  value={profileData.college}
                  onChange={handleChange}
                  style={styles.input}
                />
              ) : (
                <p style={styles.value}>{profileData.college || 'Not specified'}</p>
              )}
            </div>
          </div>

          <div style={styles.fieldContainer}>
            <div style={styles.iconContainer}>
              <span style={{...styles.fieldIcon, color: '#007bff'}}>📱</span>
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Phone Number</label>
              {isEditing ? (
                <input
                  name="phone"
                  type="tel"
                  value={profileData.phone}
                  onChange={handleChange}
                  style={styles.input}
                  pattern="[0-9]{10}"
                  placeholder="10-digit number"
                />
              ) : (
                <p style={styles.value}>{profileData.phone || 'Not specified'}</p>
              )}
            </div>
          </div>

          <div style={styles.fieldContainer}>
            <div style={styles.iconContainer}>
              <span style={{...styles.fieldIcon, color: profileData.gender === 'male' ? '#0080ff' : '#ff66a3'}}>
                {profileData.gender === 'male' ? '♂' : '♀'}
              </span>
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Gender</label>
              {isEditing ? (
                <div style={styles.radioGroup}>
                  <label style={styles.radioLabel}>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={profileData.gender === 'male'}
                      onChange={handleChange}
                      style={styles.radioInput}
                    />
                    <span style={{color: '#0080ff', marginRight: '5px'}}>♂</span> Male
                  </label>
                  <label style={styles.radioLabel}>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={profileData.gender === 'female'}
                      onChange={handleChange}
                      style={styles.radioInput}
                    />
                    <span style={{color: '#ff66a3', marginRight: '5px'}}>♀</span> Female
                  </label>
                </div>
              ) : (
                <p style={styles.value}>
                  {profileData.gender === 'male' ? 'Male' : 'Female'}
                </p>
              )}
            </div>
          </div>

          {isEditing && (
            <button type="submit" style={styles.submitButton}>
              Update Profile
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#111827',
    background: 'linear-gradient(135deg, #111827, #1E3A8A)',
    padding: '20px',
    fontFamily: "'Poppins', 'Segoe UI', Roboto, sans-serif"
  },
  card: {
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    padding: '35px',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    width: '100%',
    maxWidth: '600px',
    border: '1px solid rgba(99, 102, 241, 0.2)'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
    position: 'relative'
  },
  profileIconContainer: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '20px',
    overflow: 'hidden',
    border: '2px solid rgba(99, 102, 241, 0.5)',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#fff',
    margin: 0,
    flexGrow: 1,
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
  },
  editButton: {
    backgroundColor: '#6366F1',
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '30px',
    padding: '8px 18px',
    cursor: 'pointer',
    fontWeight: '600',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease'
  },
  saveButton: {
    backgroundColor: '#10B981',
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '30px',
    padding: '8px 18px',
    cursor: 'pointer',
    fontWeight: '600',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px'
  },
  fieldContainer: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  iconContainer: {
    width: '45px',
    height: '45px',
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '18px',
    border: '1px solid rgba(99, 102, 241, 0.3)'
  },
  fieldIcon: {
    fontSize: '20px',
    color: '#818CF8'
  },
  field: {
    flexGrow: 1
  },
  label: {
    display: 'block',
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: '5px',
    fontWeight: '500'
  },
  value: {
    fontSize: '16px',
    color: '#fff',
    margin: '0'
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '30px',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    color: '#fff',
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.3s ease'
  },
  radioGroup: {
    display: 'flex',
    gap: '20px'
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#fff'
  },
  radioInput: {
    marginRight: '8px',
    accentColor: '#6366F1'
  },
  submitButton: {
    padding: '12px',
    backgroundColor: '#10B981',
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    marginTop: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease'
  },
  error: {
    color: '#f8d7da',
    backgroundColor: 'rgba(114, 28, 36, 0.4)',
    border: '1px solid rgba(114, 28, 36, 0.3)',
    padding: '12px',
    borderRadius: '10px',
    marginBottom: '20px'
  },
  success: {
    color: '#d4edda',
    backgroundColor: 'rgba(21, 87, 36, 0.4)',
    border: '1px solid rgba(21, 87, 36, 0.3)',
    padding: '12px',
    borderRadius: '10px',
    marginBottom: '20px'
  },
  divider: {
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    margin: '10px 0 20px 0'
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#818CF8',
    marginBottom: '15px'
  }
};

export default Profile;