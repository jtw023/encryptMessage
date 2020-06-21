// destructure the hash that the link contains
const { hash } = window.location;

// unencoding message and displaying it in h1 tag
const message = atob(hash.replace('#', ''));

if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('h1').innerHTML = message;
}
// select my form
const form = document.querySelector('form');

// listen to form submission
form.addEventListener('submit', (e) => {
    // prevent the default form submission
    e.preventDefault();

    document.querySelector('#message-form').classList.add('hide');

    document.querySelector('#link-form').classList.remove('hide');

    // pull the input text from my form
    const messageInput = document.querySelector('#message-input');
    // encrypt the input text
    const encrypted = btoa(messageInput.value);

    // select the input area for the link that I want to share
    const linkInput = document.querySelector('#link-input');

    // put a link into that input area
    linkInput.value = `${window.location}#${encrypted}`;

    // select the link
    linkInput.select();
});
