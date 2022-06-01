console.log('Hi, welcome to my portfolio!');

const cYear = document.querySelector('.year');
const dateNow = new Date();
const gotYear = dateNow.getFullYear();

cYear.innerText = gotYear;

const showOnPx = 175;
const backToTopButton = document.querySelector(".back-to-top");
const bioLink = document.querySelector(".bioLink");
const resumeLink = document.querySelector(".resumeLink");
const resume = document.querySelector(".resumeHR");
const portfolioLink = document.querySelector(".portfolioLink");
const portfolio = document.querySelector(".portfolioHR");


const scrollContainer = () => {
  return document.documentElement || document.body;
};



document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
});

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: 'smooth',
    });
  };

  const goToBio = () => {
    document.body.scrollIntoView({
        behavior: 'smooth',
    });
  };

  const goToResume = () => {
    resume.scrollIntoView({
      behavior: 'smooth',
    })
  };

  const goToPortfolio = () => {
    portfolio.scrollIntoView({
      behavior: 'smooth',
    })
  };

  backToTopButton.addEventListener("click", goToTop);
  
  bioLink.addEventListener('click' , goToBio);

  resumeLink.addEventListener('click' , goToResume);

  portfolioLink.addEventListener('click' , goToPortfolio);

  const pageProgressBar = document.querySelector(".progress-bar");
document.addEventListener("scroll", () => {
  const scrolledPercentage =
      (scrollContainer().scrollTop /
        (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
      100;
  
  pageProgressBar.style.width = `${scrolledPercentage}%`
  
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});