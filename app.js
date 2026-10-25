const grid = document.querySelector('#resource-grid');
const searchInput = document.querySelector('#search-input');
const tabs = [...document.querySelectorAll('.tab')];
const emptyState = document.querySelector('#empty-state');
const resultsLabel = document.querySelector('#results-label');
let activeCategory = 'all';
const categoryLabels = {'all':'all resources','syllabus':'syllabus','lab-assignments':'lab assignments','class-assignments':'class work','lecture-materials':'lecture materials'};
const icons = {'syllabus':'▤','lab-assignments':'{ }','class-assignments':'✎','lecture-materials':'⌘'};
const colours = {'syllabus':'purple-bg','lab-assignments':'green-bg','class-assignments':'orange-bg','lecture-materials':'blue-bg'};
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function render(){
 const q=searchInput.value.trim().toLowerCase();
 const filtered=MATERIALS.filter(m=>(activeCategory==='all'||m.category===activeCategory)&&(!q||`${m.title} ${m.description} ${m.tag} ${m.file}`.toLowerCase().includes(q)));
 grid.innerHTML=filtered.map((m,i)=>`<article class="resource-card" style="--card-delay:${Math.min(i,8)*35}ms"><div class="resource-card-top"><span class="file-type"><span class="pdf-icon">▤</span> PDF RESOURCE</span><span class="card-number">${String(MATERIALS.indexOf(m)+1).padStart(2,'0')}</span></div><div class="resource-icon ${colours[m.category]}">${icons[m.category]}</div><div class="resource-category">${escapeHtml(categoryLabels[m.category])}</div><h3>${escapeHtml(m.title)}</h3><p>${escapeHtml(m.description)}</p><div class="resource-card-bottom"><span class="resource-tag">${escapeHtml(m.tag)}</span><div class="card-actions"><a class="icon-action" href="materials/${m.path}" target="_blank" rel="noopener" aria-label="Preview ${escapeHtml(m.title)}" title="Preview in new tab">↗</a><a class="download-action" href="materials/${m.path}" download="${escapeHtml(m.file)}" aria-label="Download ${escapeHtml(m.title)}" title="Download PDF">↓</a></div></div></article>`).join('');
 emptyState.hidden=filtered.length!==0;
 resultsLabel.textContent=`Showing ${filtered.length} ${filtered.length===1?'resource':'resources'} in ${categoryLabels[activeCategory]}`;
 document.querySelector('#total-count').textContent=String(MATERIALS.length).padStart(2,'0');
 document.querySelector('#all-tab-count').textContent=MATERIALS.length;
 tabs.forEach(t=>{const count=MATERIALS.filter(m=>m.category===t.dataset.category).length;const old=t.querySelector('.tab-count');if(old)old.remove();if(t.dataset.category!=='all'&&count){const span=document.createElement('span');span.className='tab-count';span.textContent=count;t.append(span);}});
}
tabs.forEach(t=>t.addEventListener('click',()=>{activeCategory=t.dataset.category;tabs.forEach(x=>{x.classList.toggle('active',x===t);x.setAttribute('aria-selected',String(x===t));});render();}));
searchInput.addEventListener('input',render);
document.querySelector('#reset-search').addEventListener('click',()=>{searchInput.value='';activeCategory='all';tabs.forEach(t=>{t.classList.toggle('active',t.dataset.category==='all');t.setAttribute('aria-selected',String(t.dataset.category==='all'));});render();});
document.querySelectorAll('[data-jump]').forEach(b=>b.addEventListener('click',()=>{activeCategory=b.dataset.jump;tabs.forEach(t=>{t.classList.toggle('active',t.dataset.category===activeCategory);t.setAttribute('aria-selected',String(t.dataset.category===activeCategory));});searchInput.value='';render();document.querySelector('#materials').scrollIntoView({behavior:'smooth'});}));
const menuToggle=document.querySelector('.menu-toggle');menuToggle.addEventListener('click',()=>{const open=document.querySelector('.nav-links').classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('.nav-links').classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();searchInput.focus();document.querySelector('#materials').scrollIntoView({behavior:'smooth'});}if(e.key==='Escape'&&document.activeElement===searchInput){searchInput.value='';searchInput.blur();render();}});
render();
