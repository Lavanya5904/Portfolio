var typed=new Typed(".text",{
    strings:["Full Stack Developer","Programmer","AI/ML Learner","Database Administrator"],
    typeSpeed:100,
    backSpeed:50,
    backDelay:800,
    loop:true
});

document.addEventListener('DOMContentLoaded', function () {
    var modeToggleBtn = document.getElementById('modeToggle');
    var linkElement = document.getElementById('style-link');
  
    modeToggleBtn.addEventListener('click', function () {
      // Toggle between dark and light styles by changing the href attribute of the link element
      if (linkElement.href.includes('style.css')) {
        linkElement.href = 'dark.css';
      } else {
        linkElement.href = 'style.css';
      }
    });
  });
  
