// Funding Facts - Basic interactivity

document.addEventListener('DOMContentLoaded', () => {
  // Highlight current language button
  const path = window.location.pathname;
  const langBtns = document.querySelectorAll('.lang-btn');
  
  langBtns.forEach(btn => {
    const lang = btn.dataset.lang;
    if (path.includes(`/${lang}/`) || (lang === 'en' && (path.endsWith('/') || path.includes('/en/')))) {
      btn.classList.add('active');
    }
  });

  // Simple client-side search (highlights matching text on the page)
  const searchInput = document.getElementById('site-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      const content = document.querySelector('main');
      if (!content) return;

      // Remove previous highlights
      content.querySelectorAll('mark.search-highlight').forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize();
      });

      if (query.length < 2) return;

      // Simple highlight
      const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, null, false);
      const nodesToHighlight = [];
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (node.textContent.toLowerCase().includes(query) && node.parentNode.tagName !== 'SCRIPT') {
          nodesToHighlight.push(node);
        }
      }

      nodesToHighlight.forEach(node => {
        const text = node.textContent;
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        const span = document.createElement('span');
        span.innerHTML = text.replace(regex, '<mark class="search-highlight" style="background:#fef08a;padding:0 2px;">$1</mark>');
        node.parentNode.replaceChild(span, node);
      });
    });
  }
});
