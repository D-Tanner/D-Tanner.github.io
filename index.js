document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const contactData = new FormData(contactForm);
    const name = contactData.get('name');
    const email = contactData.get('email');
    const message = contactData.get('message');
    const date = new Date();
    const readableDate = date.toLocaleString('en-us', {
      timeZone: 'America/Denver',
    });
    // const date = new Date().toLocaleString('en-us', {
    //   timeZone: 'America/Denver',
    // });
    const data = {
      name: name,
      email: email,
      message: message,
      sent: readableDate,
    };

    await fetch(
      'https://sheet.best/api/sheets/eefbb51e-cbf0-499d-9883-40de35b16857',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );
    window.location = 'https://D-Tanner.github.io/';
  });
});
