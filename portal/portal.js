(() => {
'use strict';
const languages = [{"code":"es","htmlLang":"es","dir":"ltr","label":"Español"},{"code":"en","htmlLang":"en","dir":"ltr","label":"English"},{"code":"de","htmlLang":"de","dir":"ltr","label":"Deutsch"},{"code":"it","htmlLang":"it","dir":"ltr","label":"Italiano"},{"code":"ar","htmlLang":"ar","dir":"rtl","label":"العربية"},{"code":"ru","htmlLang":"ru","dir":"ltr","label":"Русский"},{"code":"tr","htmlLang":"tr","dir":"ltr","label":"Türkçe"},{"code":"zh","htmlLang":"zh-Hans","dir":"ltr","label":"简体中文"},{"code":"az","htmlLang":"az","dir":"ltr","label":"Azerbaycani"},{"code":"fr","htmlLang":"fr","dir":"ltr","label":"Français"}];
const copy = {"en":{"engineering.name":"Engineering","decision.name":"Consultancy","soundlab.name":"MediaLab","soundlab.descriptor":"Music. Film. Animation. Creative Production.","brand":"Three worlds. One connection.","motion":"Turn motion off","resume":"Turn motion on","replay":"Replay opening","skip":"Skip opening","reset":"All three worlds","close":"Close the scene","open":"Open the scene","footer":"Engineering / Consultancy / MediaLab","next":"Scroll to the next division ↓","engineering.desc":"Technical thinking. Practical applications.","decision.desc":"Research. Advice. Clear next steps.","soundlab.desc":"Sound. Motion. Expression.","engineering.enter":"Enter Engineering","decision.enter":"Enter Consultancy","soundlab.enter":"Explore MediaLab","engineering.offer":"Engineering approaches, analysis and development work for production processes and technology applications.","decision.offer":"Supporting structured business and technical problem solving through analysis, research and process improvement.","soundlab.offer":"Start with a paid sound or motion commission. Format, usage rights and fee agreed upfront.","skipLink":"Skip to the three divisions","homeLabel":"GiNOVA home","crestAlt":"GiNOVA","languageLabel":"Language","chooseDivision":"Choose a division","divisionsLabel":"GiNOVA divisions","contact":"Contact","title":"GiNOVA — Three worlds. One connection.","meta.description":"Engineering · Consultancy · MediaLab","brand.line1":"Three worlds.","brand.line2":"One connection."},"tr":{"engineering.name":"Mühendislik","decision.name":"Danışmanlık","soundlab.name":"MediaLab","soundlab.descriptor":"Müzik. Film. Animasyon. Yaratıcı Prodüksiyon.","brand":"Üç dünya. Tek bağ.","motion":"Hareketi kapat","resume":"Hareketi aç","replay":"Açılışı tekrarla","skip":"Açılışı atla","reset":"Üç dünyanın tümü","close":"Sahneyi kapat","open":"Sahneyi aç","footer":"Mühendislik / Danışmanlık / MediaLab","next":"Sonraki alana kaydırın ↓","engineering.desc":"Teknik düşünce. Pratik uygulamalar.","decision.desc":"Araştırma. Danışmanlık. Net sonraki adımlar.","soundlab.desc":"Ses. Hareket. İfade.","engineering.enter":"Mühendisliğe Gir","decision.enter":"Danışmanlığa Gir","soundlab.enter":"MediaLab’i keşfedin","engineering.offer":"Üretim süreçleri ve teknoloji uygulamalarında mühendislik yaklaşımı, analiz ve geliştirme çalışmaları.","decision.offer":"Karar öncesi analiz, araştırma ve süreç geliştirme çalışmalarıyla iş ve teknik problemlerin yapılandırılmasına destek.","soundlab.offer":"Ücretli bir ses veya hareketli görüntü prodüksiyonuyla başlayın. Format, kullanım hakları ve ücret önceden kararlaştırılır.","skipLink":"Üç çalışma alanına geç","homeLabel":"GiNOVA ana sayfa","crestAlt":"GiNOVA arması: defne, G ve Dictum Factum","languageLabel":"Dil","chooseDivision":"Bir çalışma alanı seçin","divisionsLabel":"GiNOVA çalışma alanları","contact":"İletişim","title":"GiNOVA — Üç dünya. Tek bağ.","meta.description":"Mühendislik · Danışmanlık · MediaLab","brand.line1":"Üç dünya.","brand.line2":"Tek bağ."},"it":{"engineering.name":"Ingegneria","decision.name":"Consulenza","soundlab.name":"MediaLab","soundlab.descriptor":"Musica. Cinema. Animazione. Produzione creativa.","brand":"Tre mondi. Una connessione.","motion":"Disattiva il movimento","resume":"Attiva il movimento","replay":"Rivedi l’apertura","skip":"Salta l’apertura","reset":"Tutti e tre i mondi","close":"Chiudi la scena","open":"Apri la scena","footer":"Ingegneria / Consulenza / MediaLab","next":"Scorri alla prossima area ↓","engineering.desc":"Pensiero tecnico. Applicazioni pratiche.","decision.desc":"Ricerca. Consulenza. Passi successivi chiari.","soundlab.desc":"Suono. Movimento. Espressione.","engineering.enter":"Entra in Ingegneria","decision.enter":"Entra in Consulenza","soundlab.enter":"Scopri MediaLab","engineering.offer":"Aree ingegneristiche dalla produzione alimentare alle tecnologie emergenti. Ambito e competenze concordati per ogni progetto.","decision.offer":"Esplorazione finanziaria, consulenza tecnica, produttiva, accademica, di R&S e di processo.","soundlab.offer":"Inizia con una produzione audio o di immagini in movimento a pagamento. Formato, diritti d’uso e compenso concordati in anticipo.","skipLink":"Vai alle tre aree","homeLabel":"Pagina iniziale di GiNOVA","crestAlt":"Stemma GiNOVA: alloro, G e Dictum Factum","languageLabel":"Lingua","chooseDivision":"Scegli un’area","divisionsLabel":"Aree di GiNOVA","contact":"Contatti","title":"GiNOVA — Tre mondi. Una connessione.","meta.description":"Ingegneria · Consulenza · MediaLab","brand.line1":"Tre mondi.","brand.line2":"Una connessione."},"es":{"engineering.name":"Ingeniería","decision.name":"Consultoría","soundlab.name":"MediaLab","soundlab.descriptor":"Música. Cine. Animación. Producción creativa.","brand":"Tres mundos. Una conexión.","motion":"Desactivar el movimiento","resume":"Activar el movimiento","replay":"Repetir la apertura","skip":"Saltar la apertura","reset":"Los tres mundos","close":"Cerrar la escena","open":"Abrir la escena","footer":"Ingeniería / Consultoría / MediaLab","next":"Desplázate a la siguiente área ↓","engineering.desc":"Pensamiento técnico. Aplicaciones prácticas.","decision.desc":"Investigación. Asesoramiento. Próximos pasos claros.","soundlab.desc":"Sonido. Movimiento. Expresión.","engineering.enter":"Entrar en Ingeniería","decision.enter":"Entrar en Consultoría","soundlab.enter":"Explorar MediaLab","engineering.offer":"Áreas de ingeniería, desde la fabricación alimentaria hasta tecnologías emergentes. Alcance y conocimientos acordados por proyecto.","decision.offer":"Exploración financiera, asesoramiento técnico y consultoría de producción, I+D, académica y de procesos.","soundlab.offer":"Empieza con un encargo remunerado de sonido o imagen en movimiento. Formato, derechos de uso y honorarios acordados de antemano.","skipLink":"Ir a las tres áreas","homeLabel":"Inicio de GiNOVA","crestAlt":"Emblema de GiNOVA: laurel, G y Dictum Factum","languageLabel":"Idioma","chooseDivision":"Elige un área","divisionsLabel":"Áreas de GiNOVA","contact":"Contacto","title":"GiNOVA — Tres mundos. Una conexión.","meta.description":"Ingeniería · Consultoría · MediaLab","brand.line1":"Tres mundos.","brand.line2":"Una conexión."},"de":{"engineering.name":"Ingenieurwesen","decision.name":"Beratung","soundlab.name":"MediaLab","soundlab.descriptor":"Musik. Film. Animation. Kreativproduktion.","brand":"Drei Welten. Eine Verbindung.","motion":"Bewegung ausschalten","resume":"Bewegung einschalten","replay":"Auftakt erneut abspielen","skip":"Auftakt überspringen","reset":"Alle drei Welten","close":"Szene schließen","open":"Szene öffnen","footer":"Ingenieurwesen / Beratung / MediaLab","next":"Zum nächsten Bereich scrollen ↓","engineering.desc":"Technisches Denken. Praktische Anwendungen.","decision.desc":"Recherche. Beratung. Klare nächste Schritte.","soundlab.desc":"Klang. Bewegung. Ausdruck.","engineering.enter":"Ingenieurwesen öffnen","decision.enter":"Beratung öffnen","soundlab.enter":"MediaLab entdecken","engineering.offer":"Technische Schwerpunkte von der Lebensmittelproduktion bis zu neuen Technologien. Umfang und Fachkenntnisse werden projektbezogen vereinbart.","decision.offer":"Finanzielle Analyse, technische Beratung sowie Produktions-, Forschungs-, akademische und Prozessberatung.","soundlab.offer":"Beginnen Sie mit einem kostenpflichtigen Auftrag für Klang oder bewegte Bilder. Format, Nutzungsrechte und Honorar werden vorab vereinbart.","skipLink":"Zu den drei Bereichen springen","homeLabel":"GiNOVA-Startseite","crestAlt":"GiNOVA-Wappen: Lorbeer, G und Dictum Factum","languageLabel":"Sprache","chooseDivision":"Bereich wählen","divisionsLabel":"GiNOVA-Bereiche","contact":"Kontakt","title":"GiNOVA — Drei Welten. Eine Verbindung.","meta.description":"Ingenieurwesen · Beratung · MediaLab","brand.line1":"Drei Welten.","brand.line2":"Eine Verbindung."},"ar":{"engineering.name":"الهندسة","decision.name":"الاستشارات","soundlab.name":"MediaLab","soundlab.descriptor":"موسيقى. أفلام. رسوم متحركة. إنتاج إبداعي.","brand":"ثلاثة عوالم. رابط واحد.","motion":"إيقاف الحركة","resume":"تشغيل الحركة","replay":"إعادة عرض المقدمة","skip":"تخطي المقدمة","reset":"العوالم الثلاثة","close":"إغلاق المشهد","open":"فتح المشهد","footer":"الهندسة / الاستشارات / MediaLab","next":"مرّر إلى المجال التالي ↓","engineering.desc":"تفكير تقني. تطبيقات عملية.","decision.desc":"بحث. مشورة. خطوات تالية واضحة.","soundlab.desc":"صوت. حركة. تعبير.","engineering.enter":"استكشف الهندسة","decision.enter":"استكشف الاستشارات","soundlab.enter":"استكشف MediaLab","engineering.offer":"مجالات هندسية من التصنيع الغذائي إلى التقنيات الناشئة. يُتفق على النطاق والخبرات لكل مشروع.","decision.offer":"استكشاف مالي ومشورة تقنية واستشارات الإنتاج والبحث والتطوير والعمل الأكاديمي والعمليات.","soundlab.offer":"ابدأ بتكليف مدفوع لإنتاج صوتي أو صور متحركة. يُتفق على التنسيق وحقوق الاستخدام والأتعاب مسبقًا.","skipLink":"انتقل إلى المجالات الثلاثة","homeLabel":"الصفحة الرئيسية لـ GiNOVA","crestAlt":"شعار GiNOVA: إكليل غار وحرف G وعبارة Dictum Factum","languageLabel":"اللغة","chooseDivision":"اختر مجالًا","divisionsLabel":"مجالات GiNOVA","contact":"تواصل معنا","title":"GiNOVA — ثلاثة عوالم. رابط واحد.","meta.description":"الهندسة · الاستشارات · MediaLab","brand.line1":"ثلاثة عوالم.","brand.line2":"رابط واحد."},"ru":{"engineering.name":"Инженерия","decision.name":"Консалтинг","soundlab.name":"MediaLab","soundlab.descriptor":"Музыка. Кино. Анимация. Креативный продакшн.","brand":"Три мира. Одна связь.","motion":"Отключить анимацию","resume":"Включить анимацию","replay":"Повторить вступление","skip":"Пропустить вступление","reset":"Все три мира","close":"Закрыть сцену","open":"Открыть сцену","footer":"Инженерия / Консалтинг / MediaLab","next":"Прокрутите к следующему направлению ↓","engineering.desc":"Техническое мышление. Практические применения.","decision.desc":"Исследование. Консультация. Ясные следующие шаги.","soundlab.desc":"Звук. Движение. Выражение.","engineering.enter":"Открыть Инженерию","decision.enter":"Открыть Консалтинг","soundlab.enter":"Открыть MediaLab","engineering.offer":"Инженерные направления от пищевого производства до новых технологий. Объём и компетенции согласуются для каждого проекта.","decision.offer":"Финансовое исследование, технические консультации, консалтинг производства, НИОКР, академической работы и процессов.","soundlab.offer":"Начните с платного заказа на звуковую или видеопродукцию. Формат, права использования и стоимость согласуются заранее.","skipLink":"Перейти к трём направлениям","homeLabel":"Главная страница GiNOVA","crestAlt":"Эмблема GiNOVA: лавр, G и Dictum Factum","languageLabel":"Язык","chooseDivision":"Выберите направление","divisionsLabel":"Направления GiNOVA","contact":"Контакты","title":"GiNOVA — Три мира. Одна связь.","meta.description":"Инженерия · Консалтинг · MediaLab","brand.line1":"Три мира.","brand.line2":"Одна связь."},"zh":{"engineering.name":"工程","decision.name":"咨询","soundlab.name":"MediaLab","soundlab.descriptor":"音乐。影片。动画。创意制作。","brand":"三大领域，同一纽带。","motion":"关闭动态效果","resume":"开启动效","replay":"重播开场","skip":"跳过开场","reset":"查看全部三个领域","close":"关闭场景","open":"打开场景","footer":"工程 / 咨询 / MediaLab","next":"滚动至下一个领域 ↓","engineering.desc":"技术思考。实际应用。","decision.desc":"研究。建议。明确的下一步。","soundlab.desc":"声音。动态。表达。","engineering.enter":"进入工程","decision.enter":"进入咨询","soundlab.enter":"探索 MediaLab","engineering.offer":"从食品制造到新兴技术的工程关注领域。每个项目均商定范围及所需专业能力。","decision.offer":"财务探索、技术建议，以及生产、研发、学术和流程咨询。","soundlab.offer":"从付费声音或动态图像制作委托开始。格式、使用权和费用事先商定。","skipLink":"跳转至三个业务领域","homeLabel":"GiNOVA 首页","crestAlt":"GiNOVA 徽标：月桂、G 和 Dictum Factum","languageLabel":"语言","chooseDivision":"选择业务领域","divisionsLabel":"GiNOVA 业务领域","contact":"联系我们","title":"GiNOVA — 三大领域，同一纽带。","meta.description":"工程 · 咨询 · MediaLab","brand.line1":"三大领域，","brand.line2":"同一纽带。"},"az":{"engineering.name":"Mühəndislik","decision.name":"Məsləhətçilik","soundlab.name":"MediaLab","soundlab.descriptor":"Musiqi. Film. Animasiya. Yaradıcı istehsal.","brand":"Üç dünya. Bir bağ.","motion":"Hərəkəti söndür","resume":"Hərəkəti aktiv et","replay":"Girişi yenidən göstərin","skip":"Girişi keçin","reset":"Hər üç dünya","close":"Səhnəni bağla","open":"Səhnəni açın","footer":"Mühəndislik / Məsləhətçilik / MediaLab","next":"Növbəti bölməyə keçmək üçün aşağı sürüşdürün ↓","engineering.desc":"Texniki düşüncə. Praktik tətbiqlər.","decision.desc":"Tədqiqat. Məsləhət. Aydın növbəti addımlar.","soundlab.desc":"Səs. Hərəkət. İfadə.","engineering.enter":"Mühəndisliyə daxil olun","decision.enter":"Məsləhətçilik bölməsinə daxil olun","soundlab.enter":"MediaLab ilə tanış olun","engineering.offer":"İstehsal prosesləri və texnologiya tətbiqləri üçün mühəndislik yanaşmaları, təhlil və inkişaf işləri.","decision.offer":"Təhlil, tədqiqat və proseslərin təkmilləşdirilməsi vasitəsilə biznes və texniki problemlərin sistemli həllinə dəstək.","soundlab.offer":"Ödənişli səs və ya hərəkətli vizual iş sifarişi ilə başlayın. Format, istifadə hüquqları və xidmət haqqı əvvəlcədən razılaşdırılır.","skipLink":"Üç bölməyə keçin","homeLabel":"GiNOVA ana səhifə","crestAlt":"GiNOVA gerbi: dəfnə çələngi, G və Dictum Factum","languageLabel":"Dil","chooseDivision":"Bölmə seçin","divisionsLabel":"GiNOVA bölmələri","contact":"Əlaqə","title":"GiNOVA — Üç dünya. Bir bağ.","meta.description":"Mühəndislik · Məsləhətçilik · MediaLab","brand.line1":"Üç dünya.","brand.line2":"Bir bağ."},"fr":{"engineering.name":"Ingénierie","decision.name":"Conseil","soundlab.name":"MediaLab","soundlab.descriptor":"Musique. Film. Animation. Production créative.","brand":"Trois univers. Un lien.","motion":"Désactiver les animations","resume":"Activer les animations","replay":"Rejouer l’introduction","skip":"Passer l’introduction","reset":"Les trois univers","close":"Fermer la scène","open":"Ouvrir la scène","footer":"Ingénierie / Conseil / MediaLab","next":"Faire défiler vers la division suivante ↓","engineering.desc":"Réflexion technique. Applications concrètes.","decision.desc":"Recherche. Conseil. Des prochaines étapes claires.","soundlab.desc":"Son. Mouvement. Expression.","engineering.enter":"Accéder à l’Ingénierie","decision.enter":"Accéder au pôle Conseil","soundlab.enter":"Découvrir MediaLab","engineering.offer":"Approches d’ingénierie, analyses et travaux de développement pour les procédés de production et les applications technologiques.","decision.offer":"Accompagner la résolution structurée de problèmes commerciaux et techniques par l’analyse, la recherche et l’amélioration des processus.","soundlab.offer":"Commencez par une commande payante de création sonore ou animée. Format, droits d’utilisation et honoraires convenus à l’avance.","skipLink":"Accéder aux trois divisions","homeLabel":"Accueil GiNOVA","crestAlt":"Emblème GiNOVA : laurier, G et Dictum Factum","languageLabel":"Langue","chooseDivision":"Choisir une division","divisionsLabel":"Divisions GiNOVA","contact":"Contact","title":"GiNOVA — Trois univers. Un lien.","meta.description":"Ingénierie · Conseil · MediaLab","brand.line1":"Trois univers.","brand.line2":"Un lien."}};
// Every supported locale is complete; incomplete editions must fail validation, not mix languages.
const requiredKeys = Object.keys(copy.en);
for (const locale of languages) {
  for (const key of requiredKeys) {
    if (typeof copy[locale.code]?.[key] !== 'string' || !copy[locale.code][key]) {
      throw new Error(`Missing portal translation: ${locale.code}.${key}`);
    }
  }
}
const stage = document.getElementById('portals');
const gates = [...document.querySelectorAll('[data-gate]')];
const languageSelect = document.getElementById('language-select');
const quickButtons = [...document.querySelectorAll('[data-quick]')];
const reset = document.getElementById('reset');
const skip = document.getElementById('skip-opening');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
const mobile = matchMedia('(max-width: 700px)');
let off = reduce.matches, selected = null, introTimer = 0, layoutFrame = 0;
let panelMotionActive = false, panelMotionFrame = 0, panelMotionRevision = 0;
let motionLayers = [], motionRestores = [];
// Keep support copy mounted. It is laid out only at the two endpoints.
gates.forEach(gate => {
  const description = gate.querySelector('.gate-description');
  const offer = gate.querySelector('.gate-offer');
  const copySlot = document.createElement('div');
  copySlot.className = 'gate-copy';
  description.before(copySlot);
  copySlot.append(description, offer);
});
const visualSelectors = ['.gate-title', '.gate-copy', '.enter', '.select-label'];
function symbolSnapshot(gate){
  const element=gate.querySelector('.select-symbol'),rect=element.getBoundingClientRect(),box=gate.getBoundingClientRect();
  const transform=getComputedStyle(element).transform,values=transform.startsWith('matrix(')?transform.slice(7,-1).split(',').map(Number):null;
  const angle=values?Math.atan2(values[1],values[0])*180/Math.PI:parseFloat((transform.match(/rotate\(([-.\d]+)/)||[])[1])||0;
  return {element,cx:rect.left-box.left+rect.width/2,cy:rect.top-box.top+rect.height/2,width:element.offsetWidth||rect.width,height:element.offsetHeight||rect.height,angle};
}
const freezeProperties = ['display','position','inset','top','right','bottom','left','width','height','min-width','max-width','min-height','max-height','box-sizing','font','font-family','font-size','font-weight','font-style','line-height','letter-spacing','text-align','text-transform','text-indent','text-wrap','white-space','overflow-wrap','word-break','hyphens','direction','writing-mode','color','transform','transform-origin','margin','padding','border','border-top','border-bottom','border-left','border-right','border-radius','background','box-shadow','grid-template-columns','grid-column','grid-row','align-self','justify-self','gap','align-items','justify-content','flex-direction'];
function visualSnapshot(element, gate, selector, expires = 0) {
  const rect = element.getBoundingClientRect(), box = gate.getBoundingClientRect();
  let clone = element.cloneNode(true);
  [element, ...element.querySelectorAll('*')].forEach((source, i) => {
    const target = i ? clone.querySelectorAll('*')[i - 1] : clone;
    const style = getComputedStyle(source);
    freezeProperties.forEach(property => target.style.setProperty(property, style.getPropertyValue(property), "important"));
    target.removeAttribute('id');target.removeAttribute('data-copy');target.removeAttribute('data-route');
    target.removeAttribute('href');target.tabIndex = -1;
  });
  if(clone.tagName==='A'){const span=document.createElement('span');[...clone.attributes].forEach(attribute=>span.setAttribute(attribute.name,attribute.value));span.append(...clone.childNodes);clone=span}
  clone.classList.add('portal-motion-layer');clone.setAttribute('aria-hidden','true');clone.inert = true;
  clone.style.setProperty('pointer-events','none','important');
  clone.style.setProperty('transition','none','important');clone.style.setProperty('animation','none','important');
  for (const [property,value] of Object.entries({position:'absolute',inset:'auto',left:'0',top:'0',bottom:'auto',right:'auto',width:rect.width+'px',height:rect.height+'px',minWidth:'0',maxWidth:'none',margin:'0',transform:'none',visibility:'visible'})) clone.style.setProperty(property.replace(/[A-Z]/g,c=>'-'+c.toLowerCase()),value,'important');
  return {gate,selector,clone,left:rect.left-box.left,top:rect.top-box.top,width:rect.width,height:rect.height,opacity:parseFloat(getComputedStyle(element).opacity)||0,expires};
}
function panelSnapshot(withVisuals) {
  return {height:stage.getBoundingClientRect().height,gates:gates.map(gate => {
    const rect=gate.getBoundingClientRect();
    return {gate,width:rect.width,height:rect.height,symbol:symbolSnapshot(gate),visuals:withVisuals?visualSelectors.flatMap(selector=>{
      const current=motionLayers.filter(layer=>layer.gate===gate&&layer.selector===selector&&layer.clone.isConnected&&parseFloat(layer.clone.style.opacity)>.015);
      return current.length?current.map(layer=>visualSnapshot(layer.clone,gate,selector,layer.expires)):[visualSnapshot(gate.querySelector(selector),gate,selector)];
    }):[]};
  })};
}
function rememberStyle(element) {
  const original=element.getAttribute('style');
  motionRestores.push(()=>{const scenePlay=element.style.getPropertyValue('--scene-play');if(original===null)element.removeAttribute('style');else element.setAttribute('style',original);if(scenePlay)element.style.setProperty('--scene-play',scenePlay)});
}
function stopPanelMotion() {
  panelMotionRevision++;
  if(panelMotionFrame)cancelAnimationFrame(panelMotionFrame);
  panelMotionFrame=0;panelMotionActive=false;
  motionLayers.forEach(layer=>layer.clone.remove());motionLayers=[];
  motionRestores.forEach(restore=>restore());motionRestores=[];
  stage.classList.remove('is-transforming');
}
function transformPanels(update) {
  // Motion snapshots use the unscrolled panel origin. A short, scrolled panel
  // settles directly so its live link is never displaced during the transition.
  const scrolledPanel=gates.some(gate=>gate.scrollTop!==0||gate.scrollLeft!==0);
  const canAnimate=!off&&!reduce.matches&&!document.hidden&&!scrolledPanel;
  // Capture rendered widths and visible frozen layers before interrupting.
  const before=canAnimate?panelSnapshot(true):null;
  stopPanelMotion();
  if(layoutFrame){cancelAnimationFrame(layoutFrame);layoutFrame=0}
  update();measureLayout();
  if(!canAnimate)return;
  const after=panelSnapshot(true),revision=panelMotionRevision;
  const duration=1000,started=performance.now();
  const lerp=(a,b,p)=>a+(b-a)*p;
  panelMotionActive=true;stage.classList.add('is-transforming');rememberStyle(stage);
  const pairs=after.gates.map((target,i)=>{
    const initial=before.gates[i],gate=target.gate;rememberStyle(gate);rememberStyle(target.symbol.element);
    Object.assign(target.symbol.element.style,{right:'auto',bottom:'auto',transformOrigin:'center'});
    const visuals=visualSelectors.map(selector=>{
      const end=target.visuals.find(v=>v.selector===selector);
      const outgoing=initial.visuals.filter(v=>v.selector===selector);
      const origin=outgoing.reduce((best,v)=>!best||v.opacity>best.opacity?v:best,null)||end;
      const semantic=gate.querySelector(selector);rememberStyle(semantic);
      const liveLink=selector==='.enter';
      if(liveLink){
        const marker=document.createComment('portal link position'),children=[...semantic.childNodes],label=semantic.getAttribute('aria-label');
        semantic.before(marker);semantic.classList.add('portal-live-link');semantic.setAttribute('aria-label',label||semantic.textContent.trim());semantic.replaceChildren();gate.append(semantic);
        motionRestores.push(()=>{semantic.classList.remove('portal-live-link');semantic.replaceChildren(...children);marker.replaceWith(semantic);if(label===null)semantic.removeAttribute('aria-label');else semantic.setAttribute('aria-label',label)});
        semantic.style.zIndex='8';semantic.style.borderColor='transparent';semantic.style.padding='0';semantic.style.overflow='visible';
      }
      semantic.style.opacity=liveLink?'1':'0';semantic.style.position='absolute';semantic.style.bottom='auto';semantic.style.right='auto';semantic.style.transform='none';
      outgoing.forEach(layer=>{
        layer.expires=layer.expires||started+260;
        layer.startOpacity=layer.opacity;(liveLink?semantic:gate).append(layer.clone);motionLayers.push(layer);
      });
      end.clone.style.opacity='0';(liveLink?semantic:gate).append(end.clone);motionLayers.push(end);
      return {end,outgoing,origin,semantic,liveLink};
    });
    return {initial,target,gate,visuals};
  });
  function draw(elapsed){
    const t=Math.min(1,elapsed/duration),p=1-Math.pow(1-t,4);
    stage.style.height=lerp(before.height,after.height,p)+'px';stage.style.minHeight='0';
    pairs.forEach(({initial,target,gate,visuals})=>{
      gate.style.flex='0 0 '+lerp(initial.width,target.width,p)+'px';
      if(mobile.matches){gate.style.height=lerp(initial.height,target.height,p)+'px';gate.style.minHeight='0'}
      const symbol=target.symbol;symbol.element.style.left=(lerp(initial.symbol.cx,symbol.cx,p)-symbol.width/2)+'px';symbol.element.style.top=(lerp(initial.symbol.cy,symbol.cy,p)-symbol.height/2)+'px';symbol.element.style.transform='rotate('+lerp(initial.symbol.angle,symbol.angle,p)+'deg)';
      visuals.forEach(({end,outgoing,origin,semantic,liveLink})=>{
        const left=lerp(origin.left,end.left,p),top=lerp(origin.top,end.top,p);
        semantic.style.left=left+'px';semantic.style.top=top+'px';semantic.style.width=lerp(origin.width,end.width,p)+'px';if(liveLink)semantic.style.height=lerp(origin.height,end.height,p)+'px';
        outgoing.forEach(layer=>{
          const remaining=Math.max(0,Math.min(1,(layer.expires-started-elapsed)/(layer.expires-started||1)));
          layer.clone.style.setProperty('left',(lerp(layer.left,end.left,p)-(liveLink?left:0))+'px','important');layer.clone.style.setProperty('top',(lerp(layer.top,end.top,p)-(liveLink?top:0))+'px','important');layer.clone.style.opacity=String(layer.startOpacity*remaining);
        });
        end.clone.style.setProperty('left',(liveLink?0:left)+'px','important');end.clone.style.setProperty('top',(liveLink?0:top)+'px','important');
        end.clone.style.opacity=String(end.opacity*Math.max(0,Math.min(1,elapsed/260)));
      });
    });
  }
  draw(0);
  function tick(now){
    if(revision!==panelMotionRevision)return;
    const elapsed=now-started;draw(elapsed);
    if(elapsed<duration)panelMotionFrame=requestAnimationFrame(tick);
    else{stopPanelMotion();scheduleLayout()}
  }
  panelMotionFrame=requestAnimationFrame(tick);
}

function normalize(value) {
  const tag = String(value || '').trim().replace(/_/g, '-').toLowerCase();
  if (tag === 'zh' || /^zh-(cn|sg|hans)(-|$)/.test(tag)) return 'zh';
  const base = tag.split('-')[0];
  return base !== 'zh' && languages.some(locale => locale.code === base) ? base : null;
}
function initialLanguage() {
  const requested = new URL(location.href).searchParams.get('lang');
  if (requested !== null) return normalize(requested) || 'en';
  return 'en';
}
let lang = initialLanguage();
function setCopy(element, text) {
  element.textContent = text;
  // Keep Latin brand names readable within Arabic phrases, without changing their spelling.
  if (lang !== 'ar' || !/(GiNOVA|MediaLab|Dictum Factum)/.test(text)) return;
  element.textContent = '';
  for (const part of text.split(/(GiNOVA|MediaLab|Dictum Factum)/g)) {
    if (/^(GiNOVA|MediaLab|Dictum Factum)$/.test(part)) {
      const isolated = document.createElement('bdi');
      isolated.dir = 'ltr';
      isolated.textContent = part;
      element.append(isolated);
    } else element.append(document.createTextNode(part));
  }
}
function localeRoute(element) {
  const target = new URL(element.dataset.route, location.href);
  target.searchParams.set('lang', lang);
  element.href = target.href;
}
const enterLabels={"en":"Enter","es":"Entrar","de":"Öffnen","it":"Entra","ar":"دخول","ru":"Войти","tr":"Gir","zh":"进入","az":"Daxil ol","fr":"Entrer"};
Object.keys(enterLabels).forEach(code=>{copy[code].enter=enterLabels[code]});
function render() {
  stopPanelMotion();
  const locale = languages.find(item => item.code === lang);
  document.documentElement.lang = locale.htmlLang;
  document.documentElement.dir = locale.dir;
  document.documentElement.dataset.locale = lang;
  document.title = copy[lang].title;
  document.querySelector('meta[name="description"]').content = copy[lang]['meta.description'];
  document.querySelectorAll('[data-copy]').forEach(element => setCopy(element, copy[lang][element.dataset.copy]));
  document.querySelectorAll('[data-aria]').forEach(element => element.setAttribute('aria-label', copy[lang][element.dataset.aria]));
  document.querySelectorAll('[data-alt]').forEach(element => element.alt = copy[lang][element.dataset.alt]);
  languageSelect.value = lang;
  languageSelect.setAttribute('aria-label', copy[lang].languageLabel);
  document.querySelectorAll('[data-route]').forEach(localeRoute);
  document.body.classList.toggle('motion-off', off || document.hidden);
  sceneLabels();
  scheduleLayout();
  document.dispatchEvent(new Event('ginova-language'));
}
function sceneLabels() {
  gates.forEach(gate => {
    const active = gate.dataset.gate === selected;
    const label = copy[lang][active ? 'close' : 'open'];
    gate.querySelector('.select-label').textContent = label;
    gate.querySelector('[data-select]').setAttribute('aria-label', `${label}: ${copy[lang][gate.dataset.gate + '.name']}`);
    setCopy(gate.querySelector('.enter-name'), copy[lang][gate.dataset.gate + (active ? '.name' : '.enter')]);
    gate.querySelector('.enter').setAttribute('aria-label', active ? `${copy[lang].enter}: ${copy[lang][gate.dataset.gate + '.name']}` : copy[lang][gate.dataset.gate + '.enter']);
    gate.querySelector('.gate-offer').setAttribute('aria-hidden', String(!active));
    gate.querySelector('.gate-description').setAttribute('aria-hidden', String(active || (!!selected && !mobile.matches)));
  });
  document.dispatchEvent(new Event('ginova-preview-scene'));
}
function setPixels(element, property, value) {
  const next = Math.ceil(value) + 'px';
  if (element.style.getPropertyValue(property) !== next) element.style.setProperty(property, next);
}
function measureViewport() {
  const root = document.documentElement;
  const viewport = window.visualViewport;
  // Browser chrome changes the visible height without changing the layout width.
  // Pinch zoom must not reflow the triptych into the magnified viewing area.
  if (!viewport || Math.abs(viewport.scale - 1) < .01) {
    const height = viewport ? viewport.height : innerHeight;
    const next = height + 'px';
    if (root.style.getPropertyValue('--portal-active-viewport-height') !== next)
      root.style.setProperty('--portal-active-viewport-height', next);
  }
  const overview = document.getElementById('gn-company-overview');
  const summary = overview?.querySelector('summary');
  let expandedHeight = 0;
  if (overview && summary) {
    const style = getComputedStyle(overview);
    const closedHeight = summary.getBoundingClientRect().height +
      (parseFloat(style.borderTopWidth) || 0) + (parseFloat(style.borderBottomWidth) || 0);
    expandedHeight = Math.max(0, overview.getBoundingClientRect().height - closedHeight);
  }
  // Use the stage's real document position, including the actual header and summary.
  // An expanded overview is a scrollable introduction, not chrome to deduct twice.
  const top = Math.max(0, stage.getBoundingClientRect().top + scrollY - expandedHeight);
  const next = top + 'px';
  if (root.style.getPropertyValue('--portal-top-height') !== next)
    root.style.setProperty('--portal-top-height', next);
}
function measureLayout() {
  layoutFrame = 0;
  if (panelMotionActive) return;
  const root = document.documentElement;
  const header = document.querySelector('header');
  const nav = document.querySelector('.quick-nav');
  setPixels(root, '--portal-header-height', header.getBoundingClientRect().height);
  setPixels(root, '--portal-nav-height', nav.getBoundingClientRect().height);
  setPixels(root, '--portal-footer-height', document.querySelector('footer').getBoundingClientRect().height);
  measureViewport();
  let minimumHeight = 540;
  gates.forEach(gate => {
    const bottom = gate.querySelector('.gate-bottom');
    const title = gate.querySelector('.gate-title');
    const active = gate.dataset.gate === selected;
    const visibleCopy = active ? gate.querySelector('.gate-offer') :
      (!selected || mobile.matches ? gate.querySelector('.gate-description') : null);
    const copyHeight = visibleCopy ? visibleCopy.getBoundingClientRect().height + (parseFloat(getComputedStyle(visibleCopy).marginBottom) || 0) : 0;
    setPixels(gate.querySelector('.gate-copy'), 'height', copyHeight);
    // Typography is locale-invariant. Translated labels wrap; never shrink to fit.
    const bottomHeight = bottom.getBoundingClientRect().height;
    setPixels(gate, '--gate-bottom-height', bottomHeight);
    const height = Math.max(520, title.getBoundingClientRect().height + bottomHeight + 180);
    setPixels(gate, '--gate-min-height', height);
    minimumHeight = Math.max(minimumHeight, height);
  });
  setPixels(stage, '--portal-min-height', minimumHeight);
}
function scheduleLayout() {
  if (!panelMotionActive && !layoutFrame) layoutFrame = requestAnimationFrame(measureLayout);
}
function finish() {
  clearTimeout(introTimer);
  stage.classList.remove('opening');
}
function opening() {
  finish();
  stopPanelMotion();
  measureLayout();
  if (off || reduce.matches || document.hidden) return;
  stage.classList.add('opening');
  introTimer = setTimeout(finish, 1950);
}
function select(key, scroll = false) {
  finish();
  if (key !== selected) transformPanels(() => {
    selected = key;
    stage.classList.toggle('has-selection', !!key);
    gates.forEach(gate => {
      const active = gate.dataset.gate === key;
      gate.classList.toggle('is-selected', active);
      gate.querySelector('[data-select]').setAttribute('aria-pressed', String(active));
    });
    quickButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.quick === key)));
    reset.hidden = !key;
    sceneLabels();
  });
  if (scroll && mobile.matches) gates.find(gate => gate.dataset.gate === key)?.scrollIntoView({behavior: off || reduce.matches ? 'auto' : 'smooth', block: 'start'});
}
function destinationIndex(event, index, count, rtl, vertical) {
  if (event.key === 'Home') return 0;
  if (event.key === 'End') return count - 1;
  const horizontalStep = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
  const verticalStep = vertical ? (event.key === 'ArrowDown' ? 1 : event.key === 'ArrowUp' ? -1 : 0) : 0;
  const step = horizontalStep * (rtl ? -1 : 1) || verticalStep;
  return step ? (index + step + count) % count : null;
}
gates.forEach((gate, index) => {
  const button = gate.querySelector('[data-select]');
  button.addEventListener('click', () => select(selected === gate.dataset.gate ? null : gate.dataset.gate));
  button.addEventListener('keydown', event => {
    if (event.key === 'Escape') { select(null); return; }
    const next = destinationIndex(event, index, gates.length, document.documentElement.dir === 'rtl', mobile.matches);
    if (next === null) return;
    event.preventDefault();
    gates[next].querySelector('[data-select]').focus();
    select(gates[next].dataset.gate);
  });
});
quickButtons.forEach((button, index) => {
  button.addEventListener('click', () => select(button.dataset.quick, true));
  button.addEventListener('keydown', event => {
    if (event.key === 'Escape') { select(null); return; }
    const next = destinationIndex(event, index, quickButtons.length, document.documentElement.dir === 'rtl', false);
    if (next === null) return;
    event.preventDefault();
    quickButtons[next].focus();
    select(quickButtons[next].dataset.quick, true);
  });
});
reset.addEventListener('click', () => select(null));
skip.addEventListener('click', finish);
languageSelect.addEventListener('change', () => {
  lang = languageSelect.value;
  const next = new URL(location.href);
  if (next.searchParams.get('lang') !== lang) {
    next.searchParams.set('lang', lang);
    history.pushState(history.state, '', next);
  }
  render();
});
addEventListener('popstate', () => { lang = initialLanguage(); render(); });
reduce.addEventListener('change', event => { off = event.matches; finish(); render(); });
mobile.addEventListener('change', () => { stopPanelMotion(); sceneLabels(); scheduleLayout(); });
document.addEventListener('visibilitychange', () => { if (document.hidden) finish(); render(); });
addEventListener('pagehide', () => { stopPanelMotion(); finish(); document.body.classList.add('motion-off'); });
addEventListener('pageshow', () => { lang = initialLanguage(); render(); });
function viewportChanged() {
  if (window.visualViewport && Math.abs(visualViewport.scale - 1) >= .01) return;
  // Settle geometry only; the selected division and its navigation are preserved.
  stopPanelMotion();
  scheduleLayout();
}
addEventListener('resize', viewportChanged, {passive:true});
window.visualViewport?.addEventListener('resize', viewportChanged, {passive:true});
if ('ResizeObserver' in window) {
  const resize = new ResizeObserver(scheduleLayout);
  resize.observe(document.querySelector('header'));
  resize.observe(document.querySelector('.quick-nav'));
  resize.observe(document.querySelector('footer'));
  const overview = document.getElementById('gn-company-overview');
  if (overview) {
    resize.observe(overview);
    resize.observe(overview.querySelector('summary'));
  }
  gates.forEach(gate => { resize.observe(gate); resize.observe(gate.querySelector('.gate-bottom')); });
}
if (document.fonts) document.fonts.ready.then(scheduleLayout);
if ('IntersectionObserver' in window) {
  const watch = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
      entry.target.style.setProperty('--scene-play', entry.isIntersecting ? 'running' : 'paused');
      if (mobile.matches && entry.isIntersecting) quickButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.quick === entry.target.dataset.gate)));
    });
  }, {threshold: .35});
  gates.forEach(gate => watch.observe(gate));
}
render();
let seen = true;
try {
  seen = sessionStorage.getItem('ginova-triptych-opening') === '1';
  sessionStorage.setItem('ginova-triptych-opening', '1');
} catch (error) { /* Privacy-restricted storage does not block navigation. */ }
if (!seen) opening();

})();
