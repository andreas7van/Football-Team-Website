document.addEventListener('DOMContentLoaded', function() {
    let instagramLogo = document.getElementById('instagramLogo'); // Using let is fine here
    instagramLogo.style.cursor = 'pointer'; // Changes the cursor on hover
    instagramLogo.addEventListener('click', function() {
        window.open('https://www.instagram.com/partouzan_fc2022/', '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let instagramLogo = document.getElementById('partouzan-logo'); // Using let is fine here
    instagramLogo.style.cursor = 'pointer'; // Changes the cursor on hover
    instagramLogo.addEventListener('click', function() {
        window.open('index.html', '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let instagramLogo = document.getElementById('tiktokLogo'); // Using let is fine here
    instagramLogo.style.cursor = 'pointer'; // Changes the cursor on hover
    instagramLogo.addEventListener('click', function() {
        window.open('https://www.tiktok.com/@partouzanfc2022?lang=el-GR', '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let instagramLogo = document.getElementById('youtubeLogo'); // Using let is fine here
    instagramLogo.style.cursor = 'pointer'; // Changes the cursor on hover
    instagramLogo.addEventListener('click', function() {
        window.open('https://www.youtube.com/@PartouzanFC', '_blank');
    });
});


// JavaScript
window.onscroll = function() { makeHeaderSticky(); };

// Get the header
var header = document.querySelector('header');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeHeaderSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    scrollToTopBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Use smooth scroll to top
    });
});


document.addEventListener('DOMContentLoaded', function() {
    let instagramLogo = document.getElementById('partouzan1-logo'); // Using let is fine here
    instagramLogo.style.cursor = 'pointer'; // Changes the cursor on hover
    instagramLogo.addEventListener('click', function() {
        window.open('../index.html', '_blank');
    });
});


window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
    }, 2000); // 2000 milliseconds = 2 seconds
});

