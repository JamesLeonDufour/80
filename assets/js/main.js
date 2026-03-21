/* =============================================
   YOUTUBE BACKGROUND VIDEO
   ============================================= */
(function () {
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);
})();

var ytPlayer;

window.onYouTubeIframeAPIReady = function () {
  var heroMedia = document.querySelector('.hero-media');

  // Remove the old <video> element
  var oldVideo = document.getElementById('hero-video');
  if (oldVideo) oldVideo.remove();

  // Create a div for the YT player
  var playerDiv = document.createElement('div');
  playerDiv.id = 'yt-player';
  heroMedia.insertBefore(playerDiv, heroMedia.firstChild);

  ytPlayer = new YT.Player('yt-player', {
    videoId: '_tPZjXA5xFA',
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: '_tPZjXA5xFA',
      controls: 0,
      showinfo: 0,
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
    },
    events: {
      onReady: function (e) {
        e.target.mute();
        e.target.playVideo();
      },
      onStateChange: function (e) {
        if (e.data === YT.PlayerState.PAUSED) {
          e.target.playVideo();
        }
      },
    },
  });
};

/* =============================================
   NAVBAR SCROLL STATE
   ============================================= */
var navbar = document.getElementById('navbar');

function onScroll() {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', onScroll, { passive: true });

/* =============================================
   MOBILE NAV TOGGLE
   ============================================= */
var toggle = document.querySelector('.nav-toggle');
var mobileMenu = document.querySelector('.nav-mobile');

toggle.addEventListener('click', function () {
  mobileMenu.classList.toggle('open');
});

// Close on link click
mobileMenu.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    mobileMenu.classList.remove('open');
  });
});

/* =============================================
   SCROLL REVEAL
   ============================================= */
var revealEls = [];

function initReveal() {
  document.querySelectorAll(
    '.section-label, .section-title, .event-card, .timeline-item, .acces-info, .acces-map, .rsvp-intro, #rsvp-form'
  ).forEach(function (el) {
    el.classList.add('reveal');
    revealEls.push(el);
  });
  checkReveal();
}

function checkReveal() {
  var windowBottom = window.scrollY + window.innerHeight;
  revealEls.forEach(function (el) {
    if (!el.classList.contains('visible')) {
      var elTop = el.getBoundingClientRect().top + window.scrollY;
      if (windowBottom > elTop + 60) {
        el.classList.add('visible');
      }
    }
  });
}

window.addEventListener('scroll', checkReveal, { passive: true });
window.addEventListener('load', initReveal);

/* =============================================
   RSVP FORM — AJAX SUBMISSION (Web3Forms)
   ============================================= */
var form = document.getElementById('rsvp-form');
var status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var data = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
    })
      .then(function (res) { return res.json(); })
      .then(function (json) {
        if (json.success) {
          status.textContent = 'Merci ! Votre confirmation a bien été reçue.';
          status.style.color = '#b8902e';
          form.reset();
        } else {
          throw new Error(json.message || 'Erreur');
        }
      })
      .catch(function () {
        status.textContent = 'Une erreur s\'est produite. Écrivez-nous à 80@bareit.fr';
        status.style.color = '#c0392b';
      });
  });
}
