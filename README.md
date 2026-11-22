<div align="center">

# Shabrang Digital Business Card

**کارت ویزیت دیجیتال آموزشگاه قالیبافی شبرنگ**

صفحه‌ای سبک، واکنش‌گرا و فارسی برای معرفی آموزشگاه و دسترسی سریع به راه‌های ارتباطی.

![Static Website](https://img.shields.io/badge/type-static%20website-8f2524)
![Responsive](https://img.shields.io/badge/layout-responsive-d7ad61)
![License](https://img.shields.io/badge/license-MIT-blue)

</div>

---

## پیش‌نمایش

این پروژه یک کارت ویزیت دیجیتال با طراحی تیره، جزئیات الهام‌گرفته از فرش ایرانی و تصویر اختصاصی بانویی در فضای سنتی ایرانی است. در نمایشگرهای کوچک، تصویر در بالای محتوا قرار می‌گیرد و راه‌های ارتباطی به شکل ستونی نمایش داده می‌شوند.

## امکانات

- طراحی فارسی و راست‌چین (RTL)
- واکنش‌گرایی برای موبایل، تبلت و دسکتاپ
- لینک تماس مستقیم، واتساپ، اینستاگرام، تلگرام و ایمیل
- امکان ذخیره اطلاعات آموزشگاه در مخاطبین با فایل vCard
- تصویر بهینه‌شده WebP برای بارگذاری سبک‌تر
- بدون نیاز به نصب پکیج، فریم‌ورک یا بک‌اند
- قابل انتشار رایگان با GitHub Pages

## ساختار پروژه

```text
shabrang-digital-card/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── assets/
│   ├── favicon.svg
│   └── shabrang-portrait.webp
├── .gitignore
├── .nojekyll
├── CONTRIBUTING.md
├── index.html
├── LICENSE
├── README.md
├── SECURITY.md
├── script.js
└── style.css
```

## اجرای محلی

1. مخزن را دانلود یا Clone کنید.
2. فایل `index.html` را مستقیماً در مرورگر باز کنید.
3. برای توسعه راحت‌تر، پوشه را در VS Code باز کنید و از افزونه Live Server استفاده کنید.

این وب‌سایت به فرایند Build نیاز ندارد.

## انتشار روی GitHub Pages

این مخزن یک GitHub Actions workflow دارد که با هر Push به شاخه `main`، سایت را روی GitHub Pages منتشر می‌کند.

1. یک Repository جدید در GitHub بسازید.
2. فایل‌های همین پروژه را در شاخه `main` قرار دهید.
3. در تنظیمات مخزن به **Settings → Pages → Build and deployment** بروید.
4. گزینه **Source** را روی **GitHub Actions** قرار دهید.
5. پس از اجرای موفق workflow، آدرس سایت در بخش Pages نمایش داده می‌شود.

### دستورات Git

در ترمینال، داخل پوشه پروژه اجرا کنید (آدرس مخزن خودتان را جایگزین کنید):

```bash
git init
git add .
git commit -m "Initial release: Shabrang digital business card"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/shabrang-digital-card.git
git push -u origin main
```

اگر مخزن از قبل ساخته شده و remote دارد، دستور `git remote add origin` را دوباره اجرا نکنید.

## اطلاعات تماس موجود در پروژه

| راه ارتباطی | مقدار |
|---|---|
| تلفن / واتساپ | `09352477306` |
| اینستاگرام | `@carpetshabrang` |
| ایمیل | `zahranamjoo39@gmail.com` |
| تلگرام | لینک مبتنی بر شماره تلفن |

> نکته: دسترسی مستقیم تلگرام با شماره ممکن است به تنظیمات حریم خصوصی حساب و نصب بودن برنامه وابسته باشد. اگر حساب تلگرام نام کاربری عمومی دارد، بهتر است لینک `https://t.me/USERNAME` جایگزین شود.

## شخصی‌سازی

- محتوای متنی و اطلاعات تماس: `index.html`
- رنگ‌ها، اندازه‌ها و نقاط شکست واکنش‌گرا: `style.css`
- رفتار ذخیره مخاطب و لینک تلگرام: `script.js`
- تصویر و آیکون سایت: پوشه `assets/`

## حریم خصوصی

این پروژه اطلاعات بازدیدکنندگان را جمع‌آوری یا ذخیره نمی‌کند و از پایگاه داده یا ابزار رهگیری استفاده نمی‌کند. لینک‌های شبکه‌های اجتماعی به سرویس‌های مربوطه هدایت می‌شوند.

## مجوز

این پروژه تحت مجوز MIT منتشر شده است. جزئیات در فایل `LICENSE` قرار دارد.
