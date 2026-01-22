document.addEventListener('DOMContentLoaded', () => {
  // 1. Иконки Lucide
  if (typeof lucide !== 'undefined') lucide.createIcons();

  // 2. Скролл хедера
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
      header.classList.toggle('header--scrolled', window.scrollY > 50);
  });

  // 3. Мобильное меню
  const burger = document.getElementById('burger-menu');
  const menu = document.getElementById('mobile-menu-overlay');
  const links = document.querySelectorAll('.mobile-link');

  if (burger && menu) {
      const toggle = () => {
          burger.classList.toggle('active');
          menu.classList.toggle('active');
          document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
      };
      burger.addEventListener('click', toggle);
      links.forEach(l => l.addEventListener('click', toggle));
  }

  // 4. Контактная форма с валидацией
  const form = document.getElementById('aiv-contact-form');
  if (form) {
      const phone = document.getElementById('phone');
      const captchaLabel = document.getElementById('captcha-label');
      const captchaInput = document.getElementById('captcha-input');
      const status = document.getElementById('form-status');

      let n1 = Math.floor(Math.random() * 5) + 1;
      let n2 = Math.floor(Math.random() * 5) + 1;
      let sum = n1 + n2;
      if(captchaLabel) captchaLabel.innerText = `Сколько будет ${n1} + ${n2}?`;

      // Разрешаем только цифры в поле телефона
      phone.addEventListener('input', (e) => e.target.value = e.target.value.replace(/[^0-9]/g, ''));

      form.addEventListener('submit', (e) => {
          e.preventDefault();
          if (parseInt(captchaInput.value) !== sum) {
              status.innerText = "Неверный результат.";
              status.className = "form__status error";
              status.style.display = "block";
              return;
          }
          status.innerText = "Успешно отправлено!";
          status.className = "form__status success";
          status.style.display = "block";
          form.reset();
      });
  }

  // 5. Попап куки
  const cp = document.getElementById('cookie-popup');
  const ca = document.getElementById('cookie-accept');
  if (cp && !localStorage.getItem('aiv_cookies')) {
      setTimeout(() => cp.classList.add('show'), 1000);
  }
  if (ca) {
      ca.addEventListener('click', () => {
          localStorage.setItem('aiv_cookies', 'true');
          cp.classList.remove('show');
      });
  }
});