document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Mock login (you should replace this with an actual API call)
    if (username === 'user' && password === 'pass') {
      localStorage.setItem('user', username);
      localStorage.setItem('lastLogin', new Date().toLocaleString());
      window.location.href = 'dashboard.html';
    } else {
      document.getElementById('errorMsg').textContent = 'Invalid credentials!';
    }
  });

  window.addEventListener('load', function () {
    const user = localStorage.getItem('user');
    if (!user) {
      window.location.href = 'login.html';
      return;
    }
  
    document.getElementById('userDisplayName').textContent = user;
    document.getElementById('lastLogin').textContent = localStorage.getItem('lastLogin');
  
    // Mock data for the activity feed and friend list
    const activities = ['Logged in', 'Viewed Profile', 'Updated Profile'];
    const friends = ['Alice', 'Bob', 'Charlie'];
  
    const activityList = document.getElementById('activityList');
    activities.forEach(activity => {
      const li = document.createElement('li');
      li.textContent = activity;
      activityList.appendChild(li);
    });
  
    const friendList = document.getElementById('friendList');
    friends.forEach(friend => {
      const li = document.createElement('li');
      li.textContent = friend;
      friendList.appendChild(li);
    });
  });