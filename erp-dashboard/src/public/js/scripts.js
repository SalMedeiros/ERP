document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Handle user login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Perform login logic here
        });
    }

    // Handle user creation
    const userForm = document.getElementById('userForm');
    if (userForm) {
        userForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Perform user creation logic here
        });
    }

    // Handle permission assignment
    const permissionForm = document.getElementById('permissionForm');
    if (permissionForm) {
        permissionForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Perform permission assignment logic here
        });
    }

    // Fetch dashboard stats
    function fetchDashboardStats() {
        fetch('/api/dashboard/stats')
            .then(response => response.json())
            .then(data => {
                // Update dashboard with stats
            })
            .catch(error => console.error('Error fetching dashboard stats:', error));
    }

    // Call fetchDashboardStats on page load
    fetchDashboardStats();
});