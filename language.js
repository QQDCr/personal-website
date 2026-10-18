(() => {
  const container = document.getElementById('language-content');
  const english = document.createElement('template');
  english.innerHTML = container.innerHTML;
  const chinese = document.getElementById('chinese-content');
  const metadata = JSON.parse(document.getElementById('language-metadata').textContent);
  function render(language, updateUrl = false) {
    const lang = language === 'zh' ? 'zh' : 'en';
    container.replaceChildren((lang === 'zh' ? chinese : english).content.cloneNode(true));
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = metadata[lang].title;
    document.querySelector('meta[name="description"]').content = metadata[lang].description;
    if (updateUrl) {
      const url = new URL(location.href);
      if (lang === 'zh') url.searchParams.set('lang', 'zh');
      else url.searchParams.delete('lang');
      history.pushState(null, '', url);
      container.querySelector('.language-toggle').focus({preventScroll: true});
    }
  }
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-language]');
    if (button) render(button.dataset.language, true);
  });
  window.addEventListener('popstate', () => render(new URLSearchParams(location.search).get('lang')));
  render(new URLSearchParams(location.search).get('lang'));
})();
