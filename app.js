// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
   
  });
}

function events() {
  // toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();
const apiKey = 'AIzaSyD2N3DonYvkOCZbuirlYFIzAkdcBv7vjjQ';
    const playlistId = 'PLMhmonRkgwf5PGzO3BM7EzWK55eRS747n';
    const maxResults = 10;
    const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${playlistId}&part=snippet&maxResults=${maxResults}`;

    // Fetch the latest videos from the playlist
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Create an array of video thumbnails and titles
        const videos = data.items.map(item => {
          const videoId = item.snippet.resourceId.videoId;
          const thumbnailUrl = item.snippet.thumbnails.medium.url;
          const title = item.snippet.title;
          return { videoId, thumbnailUrl, title };
        });


        // Render the thumbnails in the carousel
        const carousel = document.querySelector('#carousel');
        videos.forEach(video => {
          const thumbnail = document.createElement('a');
          thumbnail.href = `https://www.youtube.com/watch?v=${video.videoId}`;
          const image = document.createElement('img');
          image.src = video.thumbnailUrl;
          image.alt = video.title;
          thumbnail.appendChild(image);
          carousel.appendChild(thumbnail);
        });

        // Initialize the Slick Carousel
        $(carousel).slick({
          arrows: true,
          autoplay: true,
          prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
          nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '50px',
          speed: 1000,
          cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
                centerPadding: '0px'
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
                centerPadding: '0px'
              }
            }
          ]

        });
      })
      .catch(error => console.error(error));
