/**
 * 
 * Theme toggle and section change animation
 * 
 */

const body = document.querySelector('body');
const themeBtn = document.getElementById('theme-btn');
const lightBulb = document.getElementById('lightbulb');
const toHome = document.getElementById('toHome');
const toAbout = document.getElementById('toAbout');
const toProjects = document.getElementById('toProjects');
const toContact = document.getElementById('toContact');
const home = document.getElementById('welcome-section');
const about = document.getElementById('about');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
const bg = document.getElementById('bg');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.link');
const close = document.getElementById('close');

for (const link of links) {
  link.addEventListener('click', function (e) {
    e.stopPropagation();
  });
}

const duration = 300;
const expDur = 800;

const expand_p1 = anime({
  targets: '.path1',
  d: [
    {
      value: "M73.48,115c23.06,0.86,286.6-33.89,393.68,38.29c80.77,54.45-86.16,261.83-72.35,307.92c1.81,6.05,1.45,12.97-1.52,20.89c-27.03,72.07-85.58,236.48-40.54,274.77c20.27,56.31-204.95,74.32-236.48,33.78c-46.86-60.25-71.47-129.39-85.58-306.3c-2.78-34.83-8.59-124.18,7.3-238.01C39.92,232.45,56.75,114.37,73.48,115z"
    },
    {
      value: "M-20.49-32.9c23.06,0.86,512.53-58.88,619.61,13.3c80.77,54.45-130.25,419.64-116.45,465.73c1.81,6.05,45.09,109.3,42.11,117.22c-27.03,72.07,92.38,269.82,137.43,308.1c20.27,56.31-668.9,140.29-700.43,99.75c-46.86-60.25-21.35-284.14-35.47-461.05c-2.78-34.83-0.38-220.88,15.52-334.7C-56.23,161.56-37.21-33.52-20.49-32.9z"
    },
    {
      value: "M-20.49-32.9c23.06,0.86,512.53-58.88,619.61,13.3c80.77,54.45,35.99,346.24,49.79,392.33c1.81,6.05,40.65,293.53,37.68,301.45c-27.03,72.07-69.43,158.99-24.38,197.27c20.27,56.31-668.9,140.29-700.43,99.75c-46.86-60.25-21.35-284.14-35.47-461.05c-2.78-34.83-0.38-220.88,15.52-334.7C-56.23,161.56-37.21-33.52-20.49-32.9z"
    }
  ],
  duration: expDur,
  easing: 'easeInOutSine',
  loop: false,
  autoplay: false,
});

const expand_p2 = anime({
  targets: '.path2',
  d: [
    {
      value: "M691.03,106.74c0,0,717.04-105.28,924.31-33.83s276.13,180.59,261.55,302.04s-75.44,245.46-57.63,285.94s62.21,236.59-15.52,277.07S797.82,899.39,708.76,824.91s-47.63-286.38-99.45-328.48C557.5,454.33,578.35,131.93,691.03,106.74z"
    },
    {
      value: "M637.83-43.99c0,0,641.68-62.58,848.94,8.87s500-74.9,485.43,46.55s-33.33,675.47-15.52,715.95s-97.35,73.06-175.08,113.54S829.48,829.58,740.42,755.1s-37.24-226.7-89.06-268.8C599.55,444.2,525.15-18.79,637.83-43.99z"
    },
    {
      value: "M637.83-43.99c0,0,641.68-62.58,848.94,8.87s500-74.9,485.43,46.55s-33.33,675.47-15.52,715.95s-97.35,73.06-175.08,113.54S704.73,1070.07,615.67,995.58s87.51-467.18,35.7-509.29C599.55,444.2,525.15-18.79,637.83-43.99z"
    }
  ],
  duration: expDur,
  easing: 'easeInOutSine',
  loop: false,
  autoplay: false,
});

const expand_p3 = anime({
  targets: '.path3',
  d: [
    {
      value: "M-16.05,1080c0,0,275.88-87.17,447.52-98.5c171.64-11.33,443.68,42.1,453.39-8.1s181.36-46.96,262.32-43.72s168.4,74.36,348.14,74.36c129.54,0,450.28,75.96,450.28,75.96H-16.05z"
    },
    {
      value: "M-16.05,1080c0,0,275.88-87.17,447.52-98.5c171.64-11.33,443.68,42.1,453.39-8.1s181.36-46.96,262.32-43.72s401.46-33.84,581.2-33.84c129.54,0,217.22,184.16,217.22,184.16H-16.05z"
    },
    {
      value: "M-16.05,1080c0,0-27.57-330.2,144.08-341.54c171.64-11.33,747.12,285.14,756.84,234.94s181.36-46.96,262.32-43.72s634.2-166.84,813.94-166.84c129.54,0-15.52,317.16-15.52,317.16H-16.05z"
    }
  ],
  duration: expDur,
  easing: 'easeInOutSine',
  loop: false,
  autoplay: false
});

const expand = function () {
  expand_p1.restart();
  expand_p2.restart();
  expand_p3.restart();
  bg.classList.add('bg-overlay');
}

const expand_r = function () {
  const implode = anime({
    targets: [projects, close],
    opacity: 0,
    duration: 500,
    easing: 'easeInOutSine',
  });
  implode.finished.then(function () {
    projects.style.display = 'none';
    close.style.display = 'none';
    expand_p1.reverse();
    expand_p2.reverse();
    expand_p3.reverse();
    expand_p1.play();
    expand_p2.play();
    expand_p3.play();
    bg.classList.remove('bg-overlay');
  })
}

toAbout.addEventListener('click', function () {
  about.style.opacity = '0';
  about.style.display = 'block';
  toHome.style.pointerEvents = 'none';
  toProjects.style.pointerEvents = 'none';
  toContact.style.pointerEvents = 'none';
  anime({
    targets: [home, projects, contact],
    opacity: '0',
    duration: duration,
    complete: function () {
      home.style.display = 'none';
      projects.style.display = 'none';
      contact.style.display = 'none';
      anime({
        targets: about,
        opacity: 1,
        duration: duration,
        complete: function () {
          toHome.style.pointerEvents = 'auto';
          toProjects.style.pointerEvents = 'auto';
          toContact.style.pointerEvents = 'auto';
        }
      });
    }
  })

});

toHome.addEventListener('click', function () {
  home.style.opacity = '0';
  home.style.display = 'block';
  toAbout.style.pointerEvents = 'none';
  toProjects.style.pointerEvents = 'none';
  toContact.style.pointerEvents = 'none';
  anime({
    targets: [about, projects, contact],
    opacity: '0',
    duration: duration,
    complete: function () {
      about.style.display = 'none';
      projects.style.display = 'none';
      contact.style.display = 'none';
      anime({
        targets: home,
        opacity: 1,
        duration: duration,
        complete: function () {
          toAbout.style.pointerEvents = 'auto';
          toProjects.style.pointerEvents = 'auto';
          toContact.style.pointerEvents = 'auto';
        }
      });
    }
  })
});

toProjects.addEventListener('click', function () {
  expand();
  projects.style.opacity = 0;
  projects.style.display = 'block';
  close.style.opacity = 0;
  close.style.display = 'block';
  anime({
    targets: [projects, close],
    opacity: 1,
    delay: expDur,
    duration: duration * 2,
    easing: 'easeInOutSine'
  });
});

toContact.addEventListener('click', function () {
  contact.style.opacity = '0';
  contact.style.display = 'block';
  toHome.style.pointerEvents = 'none';
  toProjects.style.pointerEvents = 'none';
  toAbout.style.pointerEvents = 'none';
  anime({
    targets: [home, projects, about],
    opacity: '0',
    duration: duration,
    complete: function () {
      home.style.display = 'none';
      projects.style.display = 'none';
      about.style.display = 'none';
      anime({
        targets: contact,
        opacity: 1,
        duration: duration,
        complete: function () {
          toHome.style.pointerEvents = 'auto';
          toProjects.style.pointerEvents = 'auto';
          toAbout.style.pointerEvents = 'auto';
        }
      });
    }
  })
});

themeBtn.addEventListener('click', function () {
  if (body.classList.contains('t--dark')) {
    lightBulb.title = 'lights off';
    body.classList.remove('t--dark');
    body.classList.add('t--light');
  } else {
    lightBulb.title = 'lights on';
    body.classList.remove('t--light');
    body.classList.add('t--dark');
  }
});

overlay.addEventListener('click', function () {
  expand_r();
})
bg.addEventListener('click', function () {
  expand_r();
})
close.addEventListener('click', function () {
  expand_r();
})




/**
 * 
 *  Utility for draggable scroll
 * 
 */

const slider = document.querySelector('.slider');
let isDown = false;
let startX; let scrollLeft;

const slideChild = function () {
  let closestChild;
  for (const child of slider.children) {
    if (slider.scrollLeft < child.offsetLeft - child.offsetWidth / 8) {
      closestChild = child;
      break;
    }
  }
  closestChild.classList.add('enlight');
  closestChild.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center'
  })
}

slider.addEventListener('click', function (e) {
  e.stopPropagation();
})
slider.addEventListener('mousedown', function (e) {
  if (document.documentElement.clientWidth <= 1080) return;
  e.preventDefault();
  e.stopPropagation();
  for (const child of slider.children) {
    child.classList.remove('enlight');
  }
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', function (e) {
  if (document.documentElement.clientWidth <= 1080) return;
  e.preventDefault();
  e.stopPropagation();
  isDown = false;
  slider.classList.remove('active');
  slideChild();
});
slider.addEventListener('mouseup', function (e) {
  if (document.documentElement.clientWidth <= 1080) return;
  e.preventDefault();
  e.stopPropagation();
  for (const child of slider.children) {
    child.style.pointerEvents = 'auto';
  }
  isDown = false;
  slider.classList.remove('active');
  slideChild();
});
slider.addEventListener('mousemove', function (e) {
  if (document.documentElement.clientWidth <= 1080) return;
  e.preventDefault();
  e.stopPropagation();
  if (!isDown) return;
  for (const child of slider.children) {
    child.classList.remove('enlight');
    child.style.pointerEvents = 'none';
  }
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2.2;
  slider.scrollLeft = scrollLeft - walk;
});