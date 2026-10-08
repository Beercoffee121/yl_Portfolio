/* 页面布局代码。日常维护项目文字和链接，请只编辑 content.js。 */
(() => {
  'use strict';
  const data = window.PORTFOLIO_CONTENT;
  if (!data || !Array.isArray(data.projects)) {
    document.getElementById('project-grid').textContent = '项目内容未载入，请检查 content.js。';
    return;
  }

  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, c => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[c]));
  const validLink = (link) => /^https:\/\//i.test(link || '') ? link : '#';
  const setText = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value ?? ''; };

  setText('site-eyebrow', data.site.eyebrow);
  setText('site-title', data.site.title);
  setText('site-description', data.site.description);
  setText('footer-note', data.site.footer);
  document.title = `${data.site.title} | YL Portfolio`;
  document.getElementById('github-nav').href = validLink(data.site.github);
  document.getElementById('github-hero').href = validLink(data.site.github);

  const grid = document.getElementById('project-grid');
  const projectTotal = String(data.projects.length).padStart(2, '0');
  grid.innerHTML = data.projects.map(p => `
    <a class="project-card" href="#${esc(p.id)}" aria-label="查看${esc(p.title)}的项目详情">
      <div class="card-top"><span class="card-num">PROJECT ${esc(p.number)} / ${projectTotal}</span></div>
      <div class="card-category">${esc(p.category)}</div>
      <h3>${esc(p.title)}</h3>
      <p class="card-summary">${esc(p.summary)}</p>
      <div class="card-bottom"><span class="card-tags">${(p.tags || []).map(tag => `<span>${esc(tag)}</span>`).join('')}</span><span class="card-next">查看详情 →</span></div>
    </a>`).join('');

  const renderShowcase = (p) => {
    const links = (p.links || []).map((l, index) => `<a class="button ${index===0?'button-primary':'button-outline'}" href="${esc(validLink(l.url))}" target="_blank" rel="noopener noreferrer">${esc(l.label)}</a>`).join('');
    const gallery = p.image ? `
      <section class="showcase-panel showcase-media" aria-label="${esc(p.title)}工作流截图">
        <div class="panel-heading"><h4>工作流展示</h4><span>点击图片可放大</span></div>
        <button class="workflow-trigger" type="button" data-image="${esc(p.image)}" data-title="${esc(p.title)} · 工作流" aria-label="放大${esc(p.title)}工作流截图">
          <img src="${esc(p.image)}" alt="${esc(p.imageAlt)}" loading="lazy">
        </button>
        <p class="image-caption">${esc(p.imageCaption)}</p>
      </section>` : '';
    const example = p.exampleTitle ? `
      <section class="support-panel">
        <h4>${esc(p.exampleTitle)}</h4>
        <p class="example-q">${esc(p.exampleQuestion)}</p>
        <p>${esc(p.exampleAnswer)}</p>
        <p class="link-note">${esc(p.exampleNote)}</p>
      </section>` : '';
    const instructions = (p.experience || []).length ? `
      <section class="support-panel"><h4>${esc(p.experienceTitle || '体验说明')}</h4>
        <ol class="side-list">${p.experience.map(line => `<li>${esc(line)}</li>`).join('')}</ol>
      </section>` : '';
    return `<div class="project-showcase">
      ${gallery}
      <div class="support-grid">
        <section class="support-panel"><h4>在线体验</h4><div class="action-links">${links}</div><p class="link-note">链接会在新窗口打开。</p></section>
        ${example}${instructions}
      </div>
      <p class="detail-notice">${esc(p.notice)}</p>
    </div>`;
  };

  document.getElementById('project-details').innerHTML = data.projects.map(p => `
    <article class="project-detail" id="${esc(p.id)}" aria-labelledby="title-${esc(p.id)}">
      <div class="detail-header">
        <p class="detail-index">${esc(p.number)} / ${esc(p.category)}</p>
        <div class="detail-heading"><h3 id="title-${esc(p.id)}">${esc(p.title)}</h3></div>
        <p class="detail-summary">${esc(p.summary)}</p>
      </div>
      <div class="overview-grid">
        <section class="info-panel info-panel-wide"><span class="panel-label">BACKGROUND</span><h4>项目背景</h4><p>${esc(p.background)}</p></section>
        <section class="info-panel"><span class="panel-label">PARTICIPATION</span><h4>个人参与</h4><p>${esc(p.role)}</p></section>
      </div>
      <section class="design-section">
        <div class="panel-heading"><h4>主要设计内容</h4><span>CORE DESIGN</span></div>
        <ol class="design-points">${(p.points || []).map((t, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><p>${esc(t)}</p></li>`).join('')}</ol>
      </section>
      ${renderShowcase(p)}
    </article>`).join('');

  const dialog = document.getElementById('image-dialog');
  const image = document.getElementById('dialog-image');
  const dialogTitle = document.getElementById('dialog-title');
  document.querySelectorAll('[data-image]').forEach(button => {
    button.addEventListener('click', () => {
      const preview = button.querySelector('img');
      image.src = button.dataset.image;
      image.alt = preview ? preview.alt : '工作流大图';
      dialogTitle.textContent = button.dataset.title || '工作流截图';
      if (dialog.showModal) dialog.showModal();
      else window.open(image.src, '_blank', 'noopener');
    });
  });
  document.getElementById('dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
})();
