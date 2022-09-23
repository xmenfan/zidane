// tabs
const tabs = document.queryselectorAll('.tabs li');
const tabcontentboxes = document.querySelectorAll('#tab-content > div');

tabs.foreach ((tab) => {
    tabs.addeventlistener('click', () => {
tabs.foreach(item => item.classlist.remove('is-active'))
tab.classlist.add('is-active');

   const target = tab.dataset.target.target;
   tabcontentboxes.foreach(box => {
if (box.getAttribute('id') === target)
    })
  })
})
// modal
const signupbutton = document.querySelector('#signup');
const modalbg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

signupbutton.addEventListener('click', () => {
        modal.classList.add('is-active');
    })