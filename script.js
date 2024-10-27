// Function to start the loader before page navigation
function setupNProgress() {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            if (link.getAttribute("href").endsWith(".html")) { // Check for HTML links only
                event.preventDefault(); // Prevent immediate navigation
                NProgress.start(); // Start the nprogress loader
                
                // Delay to allow nprogress to show before navigating
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300); // Adjust the timeout as needed
            }
        });
    });
}

// Initialize NProgress setup when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", setupNProgress);