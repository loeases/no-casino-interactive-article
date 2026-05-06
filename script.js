// --------- cover photo load ---------
const coverLoad = document.querySelector(".image-container"); 
const coverImage = document.querySelector("#flushing-cover-photo");


function fadeInImage() {
  coverLoad.classList.remove("image-loading");
}

if (coverImage.complete) {
  fadeInImage();
} else {
  coverImage.addEventListener("load", fadeInImage);
}


// --------- highlighter ---------
const textBlocks = document.querySelectorAll('.text-appear');

const textObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.3 });

textBlocks.forEach(block => {
  textObserver.observe(block);
});

// --------- loading dots ----------

document.querySelectorAll('.dot-break').forEach(d => {
  textObserver.observe(d);
});

// --------- progress bar ----------

const progressBar = document.getElementById('progress-bar');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;

  progressBar.style.width = progress + '%';
  progressBar.style.opacity = scrollTop > 200 ? 1 : 0;
});

// --------- text fade in ----------

const fadeIns = document.querySelectorAll('.flex-fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

fadeIns.forEach(el => fadeObserver.observe(el));