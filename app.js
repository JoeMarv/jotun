 const pages = [
    {
        id: 1,
        link: 'https://joemarv.github.io/Projects/',
        linktitle: 'Fylo Landing Page',
        repo: 'https://www.github.com/JoeMarv/Projects/',
        html: '42.5%',
        css: '57.5%',
        js: '0%',
    },
    {
        id: 2,
        link: 'https://joemarv.github.io/Landing-Page/',
        linktitle: 'Huddle Landing Page',
        repo: 'https://www.github.com/JoeMarv/Landing-Page/',
        html: '28.8%',
        css: '71.2%',
        js: '0%',
    },
    {
        id: 3,
        link: 'https://joemarv.github.io/chat-app/',
        linktitle: 'Chat App',
        repo: 'https://www.github.com/JoeMarv/chat-app/',
        html: '37.5%',
        css: '62.5%',
        js: '0%',
    }, 
    {
        id: 4,
        link: 'https://joemarv.github.io/preview-card/',
        linktitle: 'NFT Preview Card',
        repo: 'https://www.github.com/JoeMarv/preview-card/',
        html: '44.7%',
        css: '55.3%',
        js: '0%',
    },
    {
        id: 5,
        link: 'https://joemarv.github.io/base-apparel/',
        linktitle: 'Base Apparel Coming Soon',
        repo: 'https://www.github.com/JoeMarv/base-apparel/',
        html: '29.1%',
        css: '59.1%',
        js: '11.8%',
    }, 
    {
        id: 6,
        link: 'https://joemarv.github.io/rating/',
        linktitle: 'Interactive Rating Component',
        repo: 'https://www.github.com/JoeMarv/rating/',
        html: '33.3%',
        css: '48.0%',
        js: '18.7%',
    },
    {
        id: 7,
        link: 'https://joemarv.github.io/expenses-chart/',
        linktitle: 'Expenses Chart Component',
        repo: 'https://www.github.com/JoeMarv/expenses-chart/',
        html: '21.6%',
        css: '52.3%',
        js: '26.1%',
    },
    {
        id: 8,
        link: 'https://joemarv.github.io/faq/',
        linktitle: 'FAQ Accordion Card',
        repo: 'https://www.github.com/JoeMarv/faq/',
        html: '47.5%',
        css: '44.2%',
        js: '8.3%',
    },
    {
        id: 9,
        link: 'https://joemarv.github.io/article/',
        linktitle: 'Article Preview Component',
        repo: 'https://www.github.com/JoeMarv/article/',
        html: '27.4%',
        css: '67.7%',
        js: '4.9%',
    }
 ];

const article = document.querySelector('.project')
const topBtn = document.querySelector ('.top-btn')


window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(pages)
})

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset

    if (scrollHeight > 200) {
        topBtn.classList.add('show')
    } 
    else {
        topBtn.classList.remove('show')
    }
    console.log(topBtn.classList)
})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="project">
                    <div class="project-link">
                        <a href="${item.link}"><span class="link-title">${item.linktitle}</span></a>
                    </div>

                    <div class="repo-link">
                        <a href="${item.repo}">Repository Link</a>
                    </div>

                    <div class="languages">
                        <div class="html">HTML: <span id="html">${item.html}</span></div>
                        <div class="css">CSS: <span id="css">${item.css}</span></div>
                        <div class="js">JavaScript: <span id="js">${item.js}</span></div>
                    </div>
                </article>`
    })

    displayMenu = displayMenu.join('')

    article.innerHTML = displayMenu
}
