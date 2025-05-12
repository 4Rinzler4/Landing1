const menuToggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("nav-links");
const menuLinks = document.querySelectorAll(".nav-links a");

let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    navbar.classList.add("hidden");
    menu.classList.remove("active");
    menuToggle.classList.remove("active");
  } else {
    navbar.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;
});

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

const typed = new Typed(".text", {
  strings: ["CodeCraft"],
  typeSpeed: 180,
  backSpeed: 120,
  backDelay: 3000,
  loop: true,
});

// document.getElementById('contactForm').addEventListener('submit', async function(event) {
//   event.preventDefault(); // Запобігаємо стандартній відправці форми

//   const form = event.target;
//   const formData = new FormData(form);
//   const errorMessage = document.getElementById('errorMessage');

//   try {
//       // Приклад відправки даних на сервер (замініть URL на ваш API)
//       const response = await fetch('http://localhost:3000/submit', {
//           method: 'POST',
//           body: formData
//       });

//       if (response.ok) {
//           // Успішна відправка — перенаправляємо на сторінку подяки
//          window.location.href = 'submit.html';
//       } else {
//           // Помилка від сервера
//           throw new Error('Помилка відправки форми. Спробуйте ще раз.');
//       }
//   } catch (error) {
//       // Показуємо повідомлення про помилку
//       errorMessage.style.display = 'block';
//       errorMessage.textContent = error.message;
//   }
// });

document
  .getElementById("contact-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const responseDiv = document.getElementById("response");
    try {
      const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        window.location.href = "thank-you.html";
      }
      const result = await response.json();
      responseDiv.style.color = "green";
      responseDiv.textContent =
        currentLang === "en"
          ? result.message
          : "Повідомлення успішно надіслано";
    } catch (error) {
      responseDiv.style.color = "red";
      responseDiv.textContent =
        currentLang === "en"
          ? "Error sending message"
          : "Помилка при надсиланні";
    }
  });

const toggleButton = document.getElementById("more");
const textContainer = document.getElementById("about-text");
let currentLang = "ua";

toggleButton.addEventListener("click", () => {
  textContainer.classList.toggle("expanded")
    ? (toggleButton.style.bottom = "2%")
    : (toggleButton.style.bottom = "20%");
  toggleButton.textContent = textContainer.classList.contains("expanded")
    ? translations[currentLang].readLess
    : translations[currentLang].readMore;
});

// Об'єкт із перекладами
const translations = {
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    headerTitle: "Innovative Web Solutions | Transforming Ideas into Reality",
    aboutTitle: "About CodeCraft",
    aboutText:
      "<strong>CodeCraft</strong> is an innovative technology company that brings the boldest ideas to life, creating high-quality and efficient solutions for businesses and individual clients. We specialize in developing modern web applications, crafting unique design concepts, and solving complex business challenges through creative and technologically advanced approaches. If you’re looking for a reliable partner to bring your project from concept to launch, CodeCraft is your ideal choice. Our team consists of highly skilled professionals with years of experience in information technology, design, and project management. We take pride in the fact that each of our specialists brings not only technical expertise but also a passion for innovation and a commitment to achieving the best results. We are ready to support you at every stage of development: from analyzing your needs and creating a strategy to testing, launching the product, and providing ongoing support. In our work, we use cutting-edge technologies, frameworks, and tools such as React, Node.js, Python, as well as cloud platforms and artificial intelligence systems, to ensure maximum performance, security, and scalability of our solutions. We continuously enhance our skills and stay updated with the latest trends in the IT industry to offer you advanced products that meet the demands of today and tomorrow. We firmly believe that every project is unique, so our approach is always tailored. We carefully study your needs, goals, and challenges to create a solution that perfectly aligns with your vision. Our goal is not just to complete the task but to exceed your expectations, delivering a product that becomes a powerful tool for growing your business or realizing your idea. Beyond technical expertise, we also offer a comprehensive approach to design. Our designers create intuitive, aesthetically appealing interfaces that provide the best user experience. Our clients range from startups to large corporations, as well as individual entrepreneurs striving to bring their ideas to life. We are proud that every project we undertake is a success story, helping our clients reach new heights. If you’re ready to embark on a journey of innovation, contact us today. The CodeCraft team is eager to work on your project and create something truly extraordinary together. Let’s turn your dreams into reality!",
    readMore: "More",
    readLess: "Less",
    skillsTitle: "Our Characteristics",
    skillSpeed: "Speed",
    skillQuality: "Quality",
    skillPrice: "Price",
    portfolioTitle: "Our Projects",
    project1Title: "Corporate Website",
    project1Desc: "Modern design with responsive layout",
    project1ModalTitle: "Corporate Website",
    projectModalLink: "Project Link: <a>View Project</a>",
    project1ModalDesc:
      "This corporate website was developed with all modern design and functionality requirements in mind. It features a responsive layout, ensuring proper display on all devices, including mobile phones and tablets.",
    project1ModalTech: "Technologies: HTML, CSS, JavaScript, MongoDB, Node.js",
    project2Title: "E-Commerce Platform",
    project2Desc: "Fully functional online store",
    project2ModalTitle: "E-Commerce Platform",
    project2ModalDesc:
      "This platform was developed with all modern design and functionality requirements in mind. It features a responsive layout, ensuring proper display on all devices, including mobile phones and tablets.",
    project3Title: "HR Platform",
    project3Desc: "Innovative solution for HR management",
    project3ModalTitle: "HR Platform",
    project3ModalDesc:
      "This HR platform was developed to streamline personnel management processes. It includes a modern design and responsive layout, ensuring ease of use on any device.",
    cardFooterButtons: "Learn More",
    contactTitle: "Contact Us",
    contactFormHeading: "Message",
    contactFormName: "Name",
    contactFormEmail: "Email",
    contactFormPhone: "Phone",
    contactFormMessage: "Message",
    contactFormSubmit: "Submit",
    contactInfoTitle: "Our Contacts",
    contactInfoAddressLabel: "Address",
    contactInfoAddress: "10 Technological St, Kyiv",
    contactInfoPhoneLabel: "Phone",
    contactInfoPhone1: "+38 (044) 123-45-67",
    contactInfoPhone2: "+38 (067) 890-12-34",
    contactInfoEmailLabel: "Email",
    contactInfoEmail1: "info@codecraft.com",
    contactInfoEmail2: "support@codecraft.com",
    contactInfoHoursLabel: "Working Hours",
    contactInfoHours1: "Mon-Fri: 9:00 - 18:00",
    contactInfoHours2: "Sat-Sun: Closed",
    contactInfoTelegramLabel: "Our Telegram Bot",
    contactInfoTelegram: "@Nickname bot - Works 24/7",
    footerText: "© 2025 CodeCraft. All rights reserved",
  },
  ua: {
    navAbout: "Про нас",
    navProjects: "Проєкти",
    navContact: "Контакти",
    headerTitle: "Інноваційні веб-рішення | Перетворюємо ідеї в реальність",
    aboutTitle: "Про CodeCraft",
    aboutText:
      "<strong>CodeCraft</strong> – це інноваційна технологічна компанія, яка втілює найсміливіші ідеї в реальність, створюючи високоякісні та ефективні рішення для бізнесу й індивідуальних клієнтів. Ми спеціалізуємося на розробці сучасних веб-додатків, створенні унікальних дизайнерських концепцій, а також вирішенні складних бізнес-завдань за допомогою креативних і технологічно передових підходів. Якщо ви шукаєте надійного партнера, який допоможе реалізувати ваш проєкт від концепції до запуску, CodeCraft – це ваш ідеальний вибір. Наша команда складається з висококваліфікованих професіоналів, які мають багаторічний досвід у сфері інформаційних технологій, дизайну та управління проєктами. Ми пишаємося тим, що кожен наш спеціаліст привносить у роботу не лише технічні знання, але й пристрасть до інновацій та прагнення досягати найкращих результатів. Ми готові супроводжувати вас на кожному етапі розробки: від аналізу ваших потреб і створення стратегії до тестування, запуску продукту та його подальшої підтримки. У своїй роботі ми використовуємо найсучасніші технології, фреймворки та інструменти, такі як React, Node.js, Python, а також хмарні платформи й системи штучного інтелекту, щоб забезпечити максимальну продуктивність, безпеку та масштабованість наших рішень. Ми постійно вдосконалюємо наші навички та слідкуємо за новітніми трендами в ІТ-індустрії, щоб пропонувати вам передові продукти, які відповідають вимогам сьогодення та майбутнього. Ми глибоко переконані, що кожен проєкт є унікальним, тому наш підхід завжди індивідуальний. Ми уважно вивчаємо ваші потреби, цілі та виклики, щоб створити рішення, яке ідеально відповідає вашій візії. Наша мета – не просто виконати завдання, а перевершити ваші очікування, створивши продукт, який стане потужним інструментом для розвитку вашого бізнесу чи втілення вашої ідеї. Окрім технічної експертизи, ми також пропонуємо комплексний підхід до дизайну. Наші дизайнери створюють інтуїтивно зрозумілі, естетично привабливі інтерфейси, які забезпечують найкращий користувацький досвід. Наші клієнти – це компанії різного масштабу, від стартапів до великих корпорацій, а також індивідуальні підприємці, які прагнуть реалізувати свої ідеї. Ми пишаємося тим, що кожен наш проєкт – це історія успіху, яка допомагає нашим клієнтам досягати нових висот. Якщо ви готові розпочати свій шлях до інновацій, зв’яжіться з нами вже сьогодні. Команда CodeCraft з нетерпінням чекає можливості попрацювати над вашим проєктом, щоб разом створити щось дійсно надзвичайне. Давайте втілимо ваші мрії в реальність!",
    readMore: "Більше",
    readLess: "Менше",
    skillsTitle: "Наші характеристики",
    skillSpeed: "Швидкість",
    skillQuality: "Якість",
    skillPrice: "Ціна",
    portfolioTitle: "Наші проєкти",
    project1Title: "Корпоративний сайт",
    project1Desc: "Сучасний дизайн з адаптивною версткою",
    projectModalLink: "Посилання на проєкт: <a>Переглянути проєкт</a>",
    project1ModalTitle: "Корпоративний сайт",
    project1ModalDesc:
      "Цей корпоративний сайт був розроблений з урахуванням усіх сучасних вимог до дизайну та функціональності. Він має адаптивну верстку, що дозволяє йому коректно відображатися на будь-яких пристроях, включаючи мобільні телефони та планшети.",
    project1ModalTech: "Технології: HTML, CSS, JavaScript, MongoDB, Node.js",
    project2Title: "E-Commerce Платформа",
    project2Desc: "Повнофункціональний інтернет-магазин",
    project2ModalTitle: "E-Commerce Платформа",
    project2ModalDesc:
      "Ця платформа була розроблена з урахуванням усіх сучасних вимог до дизайну та функціональності. Вона має адаптивну верстку, що дозволяє їй коректно відображатися на будь-яких пристроях, включаючи мобільні телефони та планшети.",
    project3Title: "HR Платформа",
    project3Desc: "Інноваційне рішення для HR-менеджменту",
    project3ModalTitle: "HR Платформа",
    project3ModalDesc:
      "Ця HR-платформа була розроблена для спрощення процесів управління персоналом. Вона включає сучасний дизайн і адаптивну верстку, що забезпечує зручність використання на будь-яких пристроях.",
    cardFooterButtons: "Дізнатися більше",
    contactTitle: "Зв’яжіться з нами",
    contactFormHeading: "Повідомлення",
    contactFormName: "Ім’я",
    contactFormEmail: "Електронна пошта",
    contactFormPhone: "Телефон",
    contactFormMessage: "Повідомлення",
    contactFormSubmit: "Надіслати",
    contactInfoTitle: "Наші контакти",
    contactInfoAddressLabel: "Адреса",
    contactInfoAddress: "вул. Технологічна, 10, м. Київ",
    contactInfoPhoneLabel: "Телефон",
    contactInfoPhone1: "+38 (044) 123-45-67",
    contactInfoPhone2: "+38 (067) 890-12-34",
    contactInfoEmailLabel: "Електронна пошта",
    contactInfoEmail1: "info@codecraft.com",
    contactInfoEmail2: "support@codecraft.com",
    contactInfoHoursLabel: "Години роботи",
    contactInfoHours1: "Пн-Пт: 9:00 - 18:00",
    contactInfoHours2: "Сб-Нд: вихідний",
    contactInfoTelegramLabel: "Наш Telegram-бот",
    contactInfoTelegram: "@Nickname bot - Працює 24/7",
    footerText: "© 2025 CodeCraft. Усі права захищено",
  },
};

// Функція для оновлення тексту на сторінці
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  // Navigation
  const navAbout = document.querySelector('#nav-links a[href="#about"]');
  const navProjects = document.querySelector('#nav-links a[href="#portfolio"]');
  const navContact = document.querySelector('#nav-links a[href="#contact"]');
  if (navAbout) navAbout.textContent = translations[lang].navAbout;
  if (navProjects) navProjects.textContent = translations[lang].navProjects;
  if (navContact) navContact.textContent = translations[lang].navContact;

  // Header
  const headerTitle = document.querySelector("#typed");
  if (headerTitle) headerTitle.textContent = translations[lang].headerTitle;

  // About
  const aboutTitle = document.querySelector("#about h2");
  const aboutText = document.querySelector("#about-text p");
  if (aboutTitle) aboutTitle.textContent = translations[lang].aboutTitle;
  if (aboutText) aboutText.innerHTML = translations[lang].aboutText;
  if (toggleButton) {
    toggleButton.textContent = textContainer.classList.contains("expanded")
      ? translations[lang].readLess
      : translations[lang].readMore;
  }

  // Skills
  const skillsTitle = document.querySelector(".skills__container h2");
  const skillSpeed = document.querySelector(
    "#skills .skills__item:nth-child(1) h3"
  );
  const skillQuality = document.querySelector(
    "#skills .skills__item:nth-child(2) h3"
  );
  const skillPrice = document.querySelector(
    "#skills .skills__item:nth-child(3) h3"
  );
  if (skillsTitle) skillsTitle.textContent = translations[lang].skillsTitle;
  if (skillSpeed) skillSpeed.textContent = translations[lang].skillSpeed;
  if (skillQuality) skillQuality.textContent = translations[lang].skillQuality;
  if (skillPrice) skillPrice.textContent = translations[lang].skillPrice;

  // Portfolio
  const portfolioTitle = document.querySelector("#portfolio h2");
  if (portfolioTitle)
    portfolioTitle.textContent = translations[lang].portfolioTitle;

  const projectLinks = document.querySelectorAll(".link-project");
  projectLinks.forEach((link) => {
    const anchor = link.querySelector("a");
    const href = anchor ? anchor.getAttribute("href") : "#";
    link.innerHTML = translations[lang].projectModalLink.replace(
      "<a>",
      `<a href="${href}" target="_blank">`
    );
  });

  cardFooterButtons = document.querySelectorAll(".card-footer button");
  cardFooterButtons.forEach((button) => {
    button.textContent = translations[lang].cardFooterButtons;
  });

  // Project 1
  const project1Title = document.querySelector("#project1 .back-content h3");
  const project1Desc = document.querySelector(
    "#project1 .front-content .title strong"
  );
  const project1ModalTitle = document.querySelector("#modal1 h2");
  const project1ModalDesc1 = document.querySelector(
    "#modal1 .modal-content p:nth-child(2)"
  );
  const project1ModalDesc2 = document.querySelector(
    "#modal1 .modal-content p:nth-child(3)"
  );
  const project1ModalTech = document.querySelector(
    "#modal1 .modal-content p:nth-child(4)"
  );
  if (project1Title)
    project1Title.textContent = translations[lang].project1Title;
  if (project1Desc) project1Desc.textContent = translations[lang].project1Desc;
  if (project1ModalTitle)
    project1ModalTitle.textContent = translations[lang].project1ModalTitle;
  if (project1ModalDesc1)
    project1ModalDesc1.textContent = translations[lang].project1Desc;
  if (project1ModalDesc2)
    project1ModalDesc2.textContent = translations[lang].project1ModalDesc;
  if (project1ModalTech)
    project1ModalTech.textContent = translations[lang].project1ModalTech;

  // Project 2
  const project2Title = document.querySelector("#project2 .back-content h3");
  const project2Desc = document.querySelector(
    "#project2 .front-content .title strong"
  );
  const project2ModalTitle = document.querySelector("#modal2 h2");
  const project2ModalDesc1 = document.querySelector(
    "#modal2 .modal-content p:nth-child(2)"
  );
  const project2ModalDesc2 = document.querySelector(
    "#modal2 .modal-content p:nth-child(3)"
  );
  const project2ModalTech = document.querySelector(
    "#modal2 .modal-content p:nth-child(4)"
  );
  if (project2Title)
    project2Title.textContent = translations[lang].project2Title;
  if (project2Desc) project2Desc.textContent = translations[lang].project2Desc;
  if (project2ModalTitle)
    project2ModalTitle.textContent = translations[lang].project2ModalTitle;
  if (project2ModalDesc1)
    project2ModalDesc1.textContent = translations[lang].project2Desc;
  if (project2ModalDesc2)
    project2ModalDesc2.textContent = translations[lang].project2ModalDesc;
  if (project2ModalTech)
    project2ModalTech.textContent = translations[lang].project2ModalTech;

  // Project 3
  const project3Title = document.querySelector("#project3 .back-content h3");
  const project3Desc = document.querySelector(
    "#project3 .front-content .title strong"
  );
  const project3ModalTitle = document.querySelector("#modal3 h2");
  const project3ModalDesc1 = document.querySelector(
    "#modal3 .modal-content p:nth-child(2)"
  );
  const project3ModalDesc2 = document.querySelector(
    "#modal3 .modal-content p:nth-child(3)"
  );
  const project3ModalTech = document.querySelector(
    "#modal3 .modal-content p:nth-child(4)"
  );
  if (project3Title)
    project3Title.textContent = translations[lang].project3Title;
  if (project3Desc) project3Desc.textContent = translations[lang].project3Desc;
  if (project3ModalTitle)
    project3ModalTitle.textContent = translations[lang].project3ModalTitle;
  if (project3ModalDesc1)
    project3ModalDesc1.textContent = translations[lang].project3Desc;
  if (project3ModalDesc2)
    project3ModalDesc2.textContent = translations[lang].project3ModalDesc;
  if (project3ModalTech)
    project3ModalTech.textContent = translations[lang].project3ModalTech;

  // Project modal buttons

  // Contact
  const contactTitle = document.querySelector("#contact h2");
  const contactFormHeading = document.querySelector("#contact-form .heading");
  const contactFormName = document.querySelector(
    "#contact-form .input-div:nth-child(1) input"
  );
  const contactFormEmail = document.querySelector(
    "#contact-form .input-div:nth-child(2) input"
  );
  const contactFormPhone = document.querySelector(
    "#contact-form .input-div:nth-child(3) input"
  );
  const contactFormMessage = document.querySelector(
    "#contact-form .input-div:nth-child(4) input"
  );
  const contactFormSubmit = document.querySelector("#contact-form .submit");
  const contactInfoTitle = document.querySelector(".contact-info h3");
  if (contactTitle) contactTitle.textContent = translations[lang].contactTitle;
  if (contactFormHeading)
    contactFormHeading.textContent = translations[lang].contactFormHeading;
  if (contactFormName)
    contactFormName.placeholder = translations[lang].contactFormName;
  if (contactFormEmail)
    contactFormEmail.placeholder = translations[lang].contactFormEmail;
  if (contactFormPhone)
    contactFormPhone.placeholder = translations[lang].contactFormPhone;
  if (contactFormMessage)
    contactFormMessage.placeholder = translations[lang].contactFormMessage;
  if (contactFormSubmit)
    contactFormSubmit.textContent = translations[lang].contactFormSubmit;
  if (contactInfoTitle)
    contactInfoTitle.textContent = translations[lang].contactInfoTitle;
  
  // Contact info
const contactInfoAddressLabel = document.querySelector(".contact-info .info-item:nth-child(2) .info-text p:first-child");
  const contactInfoAddress = document.querySelector(".contact-info .info-item:nth-child(2) .info-text p:nth-child(2)");
  const contactInfoPhoneLabel = document.querySelector(".contact-info .info-item:nth-child(3) .info-text p:first-child");
  const contactInfoPhone1 = document.querySelector(".contact-info .info-item:nth-child(3) .info-text p:nth-child(2)");
  const contactInfoPhone2 = document.querySelector(".contact-info .info-item:nth-child(3) .info-text p:nth-child(3)");
  const contactInfoEmailLabel = document.querySelector(".contact-info .info-item:nth-child(4) .info-text p:first-child");
  const contactInfoEmail1 = document.querySelector(".contact-info .info-item:nth-child(4) .info-text p:nth-child(2)");
  const contactInfoEmail2 = document.querySelector(".contact-info .info-item:nth-child(4) .info-text p:nth-child(3)");
  const contactInfoHoursLabel = document.querySelector(".contact-info .info-item:nth-child(5) .info-text p:first-child");
  const contactInfoHours1 = document.querySelector(".contact-info .info-item:nth-child(5) .info-text p:nth-child(2)");
  const contactInfoHours2 = document.querySelector(".contact-info .info-item:nth-child(5) .info-text p:nth-child(3)");
  const contactInfoTelegramLabel = document.querySelector(".contact-info .info-item:nth-child(6) .info-text p:first-child");
  const contactInfoTelegram = document.querySelector(".contact-info .info-item:nth-child(6) .info-text p:nth-child(2)");

  if (contactInfoAddressLabel) contactInfoAddressLabel.textContent = translations[lang].contactInfoAddressLabel;
  if (contactInfoAddress) contactInfoAddress.textContent = translations[lang].contactInfoAddress;
  if (contactInfoPhoneLabel) contactInfoPhoneLabel.textContent = translations[lang].contactInfoPhoneLabel;
  if (contactInfoPhone1) contactInfoPhone1.textContent = translations[lang].contactInfoPhone1;
  if (contactInfoPhone2) contactInfoPhone2.textContent = translations[lang].contactInfoPhone2;
  if (contactInfoEmailLabel) contactInfoEmailLabel.textContent = translations[lang].contactInfoEmailLabel;
  if (contactInfoEmail1) contactInfoEmail1.textContent = translations[lang].contactInfoEmail1;
  if (contactInfoEmail2) contactInfoEmail2.textContent = translations[lang].contactInfoEmail2;
  if (contactInfoHoursLabel) contactInfoHoursLabel.textContent = translations[lang].contactInfoHoursLabel;
  if (contactInfoHours1) contactInfoHours1.textContent = translations[lang].contactInfoHours1;
  if (contactInfoHours2) contactInfoHours2.textContent = translations[lang].contactInfoHours2;
  if (contactInfoTelegramLabel) contactInfoTelegramLabel.textContent = translations[lang].contactInfoTelegramLabel;
  if (contactInfoTelegram) contactInfoTelegram.innerHTML = `<a class="bot-link" href="https://t.me/MyContactBot" target="_blank">${translations[lang].contactInfoTelegram.split(" - ")[0]}</a> - ${translations[lang].contactInfoTelegram.split(" - ")[1]}`;

  // Footer
  const footerText = document.querySelector("footer p");
  if (footerText) footerText.textContent = translations[lang].footerText;
}

// Обробники подій для кнопок мови
document
  .getElementById("eng-button")
  .addEventListener("click", () => setLanguage("en"));
document
  .getElementById("ua-button")
  .addEventListener("click", () => setLanguage("ua"));

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = [
    { id: "speedProgress", target: 80 },
    { id: "qualityProgress", target: 90 },
    { id: "priceProgress", target: 70 },
  ];

  progressBars.forEach((bar) => {
    const progressBar = document.getElementById(bar.id);
    let progress = 0;
    const interval = setInterval(() => {
      if (progress >= bar.target) {
        clearInterval(interval);
      } else {
        progress += 3;
        progressBar.style.width = progress + "%";
        progressBar.textContent = progress + "%";
        progressBar.setAttribute("aria-valuenow", progress);
      }
    }, 50);
  });

  // Встановлення мови за замовчуванням
  setLanguage(localStorage.getItem("lang") || "en");
});
