/* ============================================
   GiNOVA — PUB-002 Translations
   "Feedback, Not Energy: Why Human Performance Needs a Systems Vocabulary"
   i18n dictionary for publication article
   Languages: en, tr, it, de, fr, es, ru, zh, ja, ar
   
   Linguistic Inspirations:
   EN: George Friedman - analytical clarity, geopolitical precision
   TR: Orhan Pamuk - intellectual elegance, Nobel-caliber prose
   IT: Umberto Eco - semiotic precision, scholarly sophistication
   DE: Max Weber - systematic rigor, sociological depth
   FR: Michel Foucault - conceptual precision, analytical clarity
   ES: José Ortega y Gasset - philosophical clarity, intellectual precision
   RU: Mikhail Bakhtin - systematic depth, dialogic precision
   ZH: 鲁迅 (Lu Xun) - modern scholarly clarity, intellectual rigor
   JA: 丸山眞男 (Maruyama Masao) - analytical precision, systematic thinking
   AR: Ibn Khaldun - classical scholarly authority, systematic exposition
   ============================================ */

GiNOVAi18n.register({

  // ═══════════════════════════════════════════════════════════════════════════
  // ENGLISH - George Friedman's analytical precision
  // ═══════════════════════════════════════════════════════════════════════════
  en: {
    nav: {
      brand1: "food innovation &",
      brand2: "science academy",
      paradigm: "Paradigm",
      research: "Research",
      publications: "Publications",
      publicationsActive: "Publications",
      education: "Education",
      people: "People",
      home: "Home"
    },

    pub02: {
      pageTitle: "GiNOVA - Feedback, Not Energy",

      hero: {
        kicker: "ARTICLE FOREST<br />— GiNOVA —",
        title: "Feedback, Not Energy",
        subtitle: "\" Why Human Performance Needs a Systems Vocabulary \"",
        author1: "<strong>Metin Söylemez</strong>",
        affil1: "MSc. Electrical &amp; Electronic Engineering",
        affil2: "General Manager — <strong>SASE Energy</strong>",
        author2: "<strong>Kunter Ilalan</strong>",
        affil3: "Dept. of Food Engineering, <strong>METU</strong>",
        affil4: "Founder &amp; Director, <strong>GiNOVA</strong> FI &amp; SA"
      },

      abstract: {
        heading: "ABSTRACT",
        p1: "Human performance research relies heavily on energetic explanations borrowed from thermodynamics, yet the phenomena labeled as \"energy deficits\" predominantly reflect regulatory dysfunction rather than substrate depletion. Control engineers routinely distinguish energy availability from system stability—a distinction fundamental to power grid operation, industrial automation, and telecommunications.",
        p2: "This conceptual review applies control-theoretic principles to demonstrate that feedback loops—characterized by gain, delay, and setpoint dynamics—provide superior explanatory power for understanding performance limitations, fatigue, and biological system stability. We show that persistent vocabulary failures across medicine, psychology, and engineering obscure shared regulatory principles.",
        p3: "We propose a minimal systems vocabulary that distinguishes regulation from resource availability, capacity from performance, and stability from optimization, clarifying that in complex systems—whether electrical grids or biological organisms—information architectures govern energy distribution rather than energy availability determining system behavior."
      },

      body: {
        h1: "I. The Conceptual Limits of \"Energy\" in Human Performance",
        h2: "II. Feedback as a Universal Regulatory Principle",
        h3: "III. Vocabulary Failure and Cross-Disciplinary Fragmentation",
        h4: "IV. Toward a Minimal Systems Vocabulary",
        h5: "Conclusion",
        p1: "In electrical power systems, energy availability is rarely the binding constraint on system stability. Grid frequency can collapse despite adequate generation capacity if reactive power control fails or if phase synchronization between generators degrades. Voltage instability occurs not from insufficient real power but from control architecture breakdown in reactive power compensation. Industrial process control systems exhibit analogous failures: adequate fuel supply does not prevent oscillatory instability if sensor-actuator delays exceed critical thresholds, converting stabilizing feedback into destabilizing resonance.",
        p2: "This distinction between energy sufficiency and control integrity is fundamental to engineering practice but systematically violated in biological performance discourse. The term \"energy\" functions precisely in thermodynamics and power engineering: it denotes a conserved scalar quantity measured in joules, governed by laws specifying conversion efficiency and heat dissipation. When applied to human performance, however, \"energy\" becomes conceptually promiscuous, collapsing distinct phenomena into a single explanatory variable that cannot account for observed system behavior.",
        p3: "Consider fatigue during sustained muscular contraction—the biological analog of sustained load in power systems. The intuitive energetic account posits ATP depletion as the limiting factor, yet direct measurements reveal ATP levels decline minimally even during exhaustive exercise. Lactate, historically framed as a metabolic waste product, is now recognized as a signaling molecule and oxidative substrate. The actual mechanisms of fatigue involve excitation-contraction coupling failure: calcium release impairment, sarcolemmal depolarization from potassium efflux, and reactive oxygen species modulation of ion channels. These are regulatory failures—control system breakdown despite adequate energy substrate—precisely analogous to grid instability with sufficient generation capacity.",
        p4: "Central fatigue exhibits the same pattern. Perceived effort and voluntary performance limitation arise from brain mechanisms operating independently of peripheral metabolic status. Deceptive feedback—falsified distance remaining or manipulated perceived exertion—significantly alters endurance performance without changing physiology. The psychobiological model positions effort perception as emerging from comparator circuits integrating afferent signals, anticipated duration, and motivational valuation. This is a control system evaluating signal patterns, not a fuel gauge measuring substrate concentration.",
        p5: "Chronic fatigue syndrome demonstrates the category error at pathological scale. Despite extensive investigation, a uniform bioenergetic deficit has not been established in CFS patients. ATP production, mitochondrial respiration, and oxidative capacity show variability but no definitive deficiency. Emerging evidence instead points to dysregulated interoceptive processing: altered neural interpretation of physiological afference and disrupted effort-cost prediction. The problem is signal processing architecture—tangible physiological dysfunction in neural circuits computing effort cost and threat value. This represents failure of regulatory circuitry, not energy depletion.",
        p6: "The linguistic confusion compounds when \"energy\" is used interchangeably with distinct system properties. Capacity denotes maximum output under optimal conditions (analogous to nameplate generation capacity). Performance reflects actual output under current constraints, which may fall far below capacity due to regulatory limits (analogous to dispatchable power constrained by transmission or reactive power limits). Motivation involves dopaminergic valuation circuits assigning cost to effort expenditure. Resilience describes stability maintenance under perturbation (analogous to grid frequency stability margins). None reduces to energy availability; collapsing them obscures governing variables.",
        p7: "Hormonal systems reveal how biological \"energy status\" is signaled through concentration dynamics and temporal patterns rather than absolute substrate levels—a principle familiar from AC power systems where phase angle and frequency matter more than instantaneous voltage magnitude. Leptin signals adipose reserves through protein concentration modulating hypothalamic circuits. Ghrelin pulses precede expected meals independent of gastric fullness. Insulin sensitivity varies circadianly regardless of glucose load, reflecting clock-gene regulation of signaling machinery. These are information architectures, not energy meters.",
        p8: "Even where substrate genuinely limits function—hypoglycemia—the primary danger is not energy depletion but signaling capacity loss. Neurons maintain ATP homeostasis until late-stage glucose deprivation; the critical threshold is loss of neurotransmitter precursors required for synaptic signaling. The brain does not \"run out of power\"; it loses communication bandwidth—the biological equivalent of signal degradation in telecommunications systems despite adequate power supply.",
        p9: "Clinical invocation of \"mitochondrial dysfunction\" often conflates energy production with regulatory signaling. Mitochondria exhibit altered signaling functions—reactive oxygen species production, calcium buffering, apoptotic regulation—while maintaining adequate ATP synthesis. The organelles serve as metabolic sensors and regulatory nodes, not merely power plants—analogous to how modern grid components provide both real power and ancillary services (frequency regulation, voltage support).",
        p10: "This analysis does not deny that ATP synthesis, mitochondrial function, and substrate availability are necessary conditions for biological function. In power systems terminology, these are necessary but not sufficient constraints. Cells maintain ATP homeostasis across wide performance ranges; what varies is the regulatory gain determining accessibility of that capacity. Control engineers routinely encounter systems where the limiting constraint is control architecture, not energy supply. Biology exhibits the same principle.",
        p11: "In control engineering, gain, delay, and reference tracking are the first-order determinants of system stability. A feedback loop exists when a system's output influences its subsequent input, creating a closed causal pathway that can stabilize, amplify, or oscillate. This architecture governs stability across domains—from voltage regulators to biological thermoregulation—independent of energy substrate availability.",
        p12: "Feedback control is characterized by three essential parameters: <em>Gain</em>—magnitude of corrective response to deviation from setpoint; <em>Delay</em>—temporal lag between sensing deviation and implementing correction; and <em>Setpoint</em>—reference value against which current state is compared.",
        p13: "Negative feedback stabilizes by counteracting deviations. Temperature regulation in buildings and organisms operates identically: deviation triggers corrective responses opposing the deviation, returning the system toward setpoint. Positive feedback amplifies initial signals, driving systems toward threshold transitions—seen in electrical fault propagation and blood clotting cascades alike. Neither process requires energy to be limiting; both are governed by signaling kinetics and loop architecture.",
        p14: "Critically, feedback stability is not synonymous with equilibrium. Living systems and AC power grids both operate far from thermodynamic equilibrium yet maintain dynamic stability through continuous feedback adjustment. Biological baroreceptor blood pressure regulation involves nested loops across millisecond (neural), circadian (hormonal), and chronic (renal-endocrine) timescales—precisely analogous to hierarchical grid control spanning automatic generation control (seconds), economic dispatch (minutes-hours), and unit commitment (days).",
        p15: "<strong>Delay</strong> is the most critical parameter in any control system. Control engineers recognize that phase lag between detection and response converts stabilizing feedback into destabilizing oscillation. If delay exceeds one-quarter of the system's natural period, negative feedback effectively becomes positive, amplifying rather than damping disturbances. This failure mode is resource-independent: a system with unlimited fuel and intact hardware can enter catastrophic oscillation solely due to temporal mismatch between sensing and actuation.",
        p16: "This principle explains production-inventory oscillations in supply chains, grid frequency oscillations from generator governor deadband, and ultradian hormone pulsatility in endocrine axes. All exhibit adequate resources but fail due to temporal structure mismatch in control loops.",
        p17: "The distinction between resource failure and control failure can be formalized through two models. A <strong>furnace model</strong> treats systems as input-output converters where performance scales linearly with fuel availability until depletion. A <strong>thermostat model</strong> recognizes that performance is determined by regulatory setpoints, feedback gains, and temporal coordination—variables that can fail catastrophically despite abundant fuel.",
        p18: "In power systems, this distinction is trivial: grid collapse from control failure looks entirely different from blackout from generation deficit. In furnace failure, adding fuel restores function. In thermostat failure, adding fuel is irrelevant; control architecture must be repaired. The same distinction applies to biological fatigue but is obscured by energetic language.",
        p19: "The hypothalamic-pituitary-adrenal (HPA) axis demonstrates multi-timescale feedback architecture familiar from hierarchical control systems. Cortisol exerts negative feedback at multiple sites with distinct time constants: fast feedback via membrane receptors (seconds-minutes), intermediate via glucocorticoid genomic receptors (hours), and slow via receptor expression remodeling (days-weeks). This temporal layering allows acute response while preventing chronic hyperactivation—analogous to fast frequency response, automatic generation control, and long-term capacity planning in grid operation.",
        p20: "Adaptive resistance phenomena reveal the distinction between feedback integrity and substrate availability. Insulin resistance represents feedback desensitization: chronic hyperinsulinemia downregulates insulin receptor signaling, requiring progressively higher concentrations to achieve equivalent glucose uptake. The system has not exhausted energy—glucose and ATP are abundant. Rather, chronic overstimulation has shifted signaling gain, rightward-displacing the dose-response curve. This is gain reduction from actuator saturation, a control problem.",
        p21: "The predictive power of feedback frameworks lies in mechanistic specificity. Given loop gain, delay, and nonlinearity parameters, control engineers can predict whether systems converge, oscillate, or diverge under perturbation. Energy-based explanations lack this precision: knowing ATP concentration provides minimal predictive capacity regarding system response to challenge—just as knowing fuel tank level provides minimal information about control system stability.",
        p22: "The empirical study of human performance spans medicine, exercise physiology, psychology, systems biology, and engineering, yet these fields operate with incompatible vocabularies despite measuring overlapping phenomena. This linguistic fragmentation obscures unifying regulatory principles that are self-evident to control engineers but invisible to biological researchers.",
        p23: "The term \"stress\" exemplifies semantic collapse. In materials engineering, stress denotes force per unit area. In physiology, stress signifies homeostatic perturbation. In psychology, stress reflects perceived demand-resource mismatch. In endocrinology, stress means HPA axis activation. These definitions minimally overlap yet are used interchangeably—equivalent to using \"voltage\" to mean both potential difference and current flow in electrical systems.",
        p24: "\"Adaptation\" similarly conflates processes across temporal and organizational scales: molecular (protein expression, seconds-hours), cellular (organelle remodeling, days), organ (hypertrophy, weeks), systemic (setpoint recalibration, weeks-months), and evolutionary (selection, generations). This is equivalent to using \"regulation\" to describe both transient voltage droop and long-term grid infrastructure expansion.",
        p25: "\"Balance\" appears pervasively—energy balance, hormonal balance—yet rarely denotes equilibrium in the thermodynamic or control-theoretic sense. Biological systems maintain dynamic setpoints through active regulation, not passive balance. Endocrine function depends on pulsatility, circadian rhythms, and context-dependent shifts—actively regulated asymmetries. In power systems, we do not speak of \"frequency balance\" but of active frequency regulation through continuous control action.",
        p26: "Control engineers have formalized tools—Bode plots, Nyquist stability criteria, root locus analysis—quantifying feedback dynamics across domains. These tools apply directly to glucose-insulin regulation and cardiovascular control but remain largely absent from biological literature. Endocrinologists describe hormone secretion as \"dysregulated\" without quantifying gain, phase margin, or oscillation frequency. The vocabularies do not intersect, despite describing identical mathematical structures.",
        p27: "<strong>Regulation vs. Resource.</strong> Regulation: control of system behavior through signaling architecture (receptor sensitivity, feedback gain, temporal delays). Resource: material substrate availability (oxygen, glucose, amino acids). In control systems terminology: regulation is the control law; resource is the power supply.",
        p28: "<strong>Capacity vs. Performance.</strong> Capacity: maximum potential output under optimal conditions. Performance: actual output under current constraints. Analogous to nameplate capacity versus dispatchable power in generation systems.",
        p29: "<strong>Setpoint vs. Optimization.</strong> Setpoint: operating point around which feedback mechanisms stabilize outputs. Optimization: maximization of a defined objective function. Engineering systems have setpoints; they are not necessarily optimized for any single performance metric.",
        p30: "<strong>Stability vs. Efficiency.</strong> Stability: maintenance of function despite perturbation. Efficiency: ratio of useful output to total input. Control engineers recognize these are often inversely related; critical systems prioritize stability over efficiency.",
        p31: "<strong>Delay vs. Deficiency.</strong> Delay: temporal phase lag in feedback signaling. Deficiency: substrate availability below functional requirement. Delay causes oscillatory instability; deficiency causes amplitude limitation. Different failure modes require different interventions.",
        p32: "The reliance on energetic metaphors to explain human performance reflects disciplinary convention rather than empirical necessity. Control engineers routinely distinguish energy availability from system stability—a distinction fundamental to infrastructure operation but systematically violated in biological discourse. Feedback dynamics—characterized by gain, delay, and setpoint regulation—offer superior explanatory power for phenomena ranging from acute fatigue to chronic regulatory dysfunction.",
        p33: "The absence of shared, precise vocabulary across medicine, engineering, and biology has obscured unifying regulatory principles. Terminological discipline—explicit boundaries distinguishing regulation from resource availability, capacity from performance, stability from optimization—enables cross-disciplinary synthesis. In complex systems, whether electrical grids or biological organisms, information architectures govern energy distribution rather than energy availability determining system behavior.",
        p34: "Recognizing that regulatory architecture rather than substrate availability limits biological performance in most contexts provides conceptual foundations for mechanistically grounded interpretation of human system function. The principles governing grid stability apply equally to metabolic stability; the mathematics is identical. Feedback, not energy. Architecture, not accounting."
      },

      keys: {
        heading: "KEYWORDS",
        feedback: "Feedback Control",
        regulation: "Regulation",
        stability: "System Stability",
        performance: "Human Performance",
        fatigue: "Fatigue",
        vocabulary: "Systems Vocabulary",
        control: "Control Theory"
      },

      refs: {
        heading: "REFERENCES"
      }
    },

    footer: {
      tag: "Research · Frameworks · Foresight",
      social: {
        medium: "MEDIUM",
        linkedin: "LinkedIn",
        x: "X"
      },
      explore: "Explore",
      contactTitle: "Contact",
      emailLabel: "Email",
      locationLabel: "Location",
      locationValue: "Ankara · Turkiye",
      newsletter: "Newsletter",
      newsletterBody: "Occasional notes on frameworks, publications, and seminars. No marketing. No noise.",
      subscribe: "Subscribe",
      copyright: "© 2026 GiNOVA",
      privacy: "Privacy",
      terms: "Terms",
      backToTop: "Back to top"
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TURKISH - Orhan Pamuk'un entelektüel zarafeti
  // ═══════════════════════════════════════════════════════════════════════════
  tr: {
    nav: {
      brand1: "gıda inovasyon &",
      brand2: "bilim akademisi",
      paradigm: "Paradigma",
      research: "Araştırma",
      publications: "Yayınlar",
      publicationsActive: "Yayınlar",
      education: "Eğitim",
      people: "Ekip",
      home: "Ana Sayfa"
    },

    pub02: {
      pageTitle: "GiNOVA - Enerji Değil, Geri Besleme",

      hero: {
        kicker: "MAKALE ORMANI<br />— GiNOVA —",
        title: "Enerji Değil, Geri Besleme",
        subtitle: "\" İnsan Performansı Neden Bir Sistemler Sözvarlığına Gereksinim Duyar \"",
        author1: "<strong>Metin Söylemez</strong>",
        affil1: "Y.L., Elektrik-Elektronik Mühendisliği",
        affil2: "Genel Müdür — <strong>SASE Enerji</strong>",
        author2: "<strong>Kunter Ilalan</strong>",
        affil3: "Gıda Mühendisliği Bölümü, <strong>ODTÜ</strong>",
        affil4: "Kurucu &amp; Direktör, <strong>GiNOVA</strong>"
      },

      abstract: {
        heading: "ÖZET",
        p1: "İnsan performansı araştırmaları, termodinamikten ödünç alınmış enerjiye dayalı açıklamalara büyük ölçüde yaslanır; oysa \"enerji açığı\" olarak tanımlanan olgular, esas itibarıyla substrat tükenmesinden değil, düzenleyici işlev bozukluğundan kaynaklanır. Kontrol mühendisleri, enerji mevcudiyeti ile sistem kararlılığını rutin biçimde ayırt eder—bu ayrım, güç şebekesi işletimi, endüstriyel otomasyon ve telekomünikasyon için temeldir.",
        p2: "Bu kavramsal derleme, kontrol kuramsal ilkelerini uygulayarak, kazanç, gecikme ve referans dinamikleriyle belirlenen geri besleme döngülerinin, performans kısıtlamalarını, yorgunluğu ve biyolojik sistem kararlılığını anlamada üstün açıklayıcı güç sağladığını göstermektedir. Tıp, psikoloji ve mühendislik arasındaki kalıcı sözvarlığı başarısızlıklarının, ortak düzenleyici ilkeleri gizlediğini ortaya koyuyoruz.",
        p3: "Düzenleme ile kaynak mevcudiyetini, kapasite ile performansı, kararlılık ile optimizasyonu ayırt eden asgari bir sistemler sözvarlığı öneriyoruz—bu, karmaşık sistemlerde—ister elektrik şebekeleri ister biyolojik organizmalar olsun—bilgi mimarilerinin enerji dağılımını yönettiğini, enerji mevcudiyetinin sistem davranışını belirlemediğini açıklığa kavuşturur."
      },

      body: {
        h1: "I. İnsan Performansında \"Enerji\"nin Kavramsal Sınırları",
        h2: "II. Evrensel Bir Düzenleyici İlke Olarak Geri Besleme",
        h3: "III. Sözvarlığı Başarısızlığı ve Disiplinler Arası Parçalanma",
        h4: "IV. Asgari Bir Sistemler Sözvarlığına Doğru",
        h5: "Sonuç",
        p1: "Elektrik güç sistemlerinde, enerji mevcudiyeti nadiren sistem kararlılığı üzerindeki bağlayıcı kısıttır. Reaktif güç kontrolü başarısız olursa veya jeneratörler arası faz senkronizasyonu bozulursa, yeterli üretim kapasitesine rağmen şebeke frekansı çökebilir. Gerilim kararsızlığı yetersiz gerçek güçten değil, reaktif güç kompanzasyonundaki kontrol mimarisi çöküşünden kaynaklanır. Endüstriyel proses kontrol sistemleri benzer arızalar sergiler: sensör-aktüatör gecikmeleri kritik eşikleri aşarsa, yeterli yakıt arzı salınımlı kararsızlığı önlemez, kararlılaştırıcı geri beslemeyi kararsızlaştırıcı rezonansa dönüştürür.",
        p2: "Enerji yeterliliği ile kontrol bütünlüğü arasındaki bu ayrım, mühendislik pratiğinin temelidir ancak biyolojik performans söyleminde sistematik olarak ihlal edilir. \"Enerji\" terimi termodinamik ve güç mühendisliğinde kesin işlev görür: dönüşüm verimliliği ve ısı dağılımını belirleyen yasalarla yönetilen, jul cinsinden ölçülen korunan bir skaler büyüklüğü ifade eder. İnsan performansına uygulandığında ise \"enerji\" kavramsal olarak belirsizleşir, gözlemlenen sistem davranışını açıklayamayan tek bir açıklayıcı değişkende farklı olguları birleştirir.",
        p3: "Sürekli kas kasılması sırasındaki yorgunluğu düşünün—güç sistemlerindeki sürekli yükün biyolojik analogu. Sezgisel enerjik açıklama, sınırlayıcı faktör olarak ATP tükenmesini öne sürer, ancak doğrudan ölçümler, tüketici egzersiz sırasında bile ATP düzeylerinin minimal düştüğünü ortaya koyar. Tarihsel olarak metabolik atık ürün olarak çerçevelenen laktat, artık bir sinyal molekülü ve oksidatif substrat olarak tanınmaktadır. Yorgunluğun gerçek mekanizmaları, uyarılma-kasılma çiftleşme arızasını içerir: kalsiyum salınım bozukluğu, potasyum çıkışından sarkolemmal depolarizasyon ve iyon kanallarının reaktif oksijen türleri modülasyonu. Bunlar düzenleyici arızalardır—yeterli enerji substratına rağmen kontrol sistemi çöküşü—yeterli üretim kapasitesiyle şebeke kararsızlığına tam olarak benzer.",
        p4: "Merkezi yorgunluk aynı örüntüyü sergiler. Algılanan efor ve istemli performans sınırlaması, periferik metabolik durumdan bağımsız olarak çalışan beyin mekanizmalarından kaynaklanır. Aldatıcı geri besleme—kalan mesafenin tahrifi veya algılanan eforun manipülasyonu—fizyolojiyi değiştirmeden dayanıklılık performansını önemli ölçüde değiştirir. Psikobiyolojik model, efor algısını, afferent sinyalleri, beklenen süreyi ve motivasyonel değerlendirmeyi bütünleştiren karşılaştırıcı devrelerden ortaya çıkan olarak konumlandırır. Bu, substrat konsantrasyonunu ölçen bir yakıt göstergesi değil, sinyal örüntülerini değerlendiren bir kontrol sistemidir.",
        p5: "Kronik yorgunluk sendromu, kategori hatasını patolojik ölçekte gösterir. Kapsamlı araştırmaya rağmen, KYS hastalarında tek tip bir biyoenerjetik açık tespit edilmemiştir. ATP üretimi, mitokondriyal solunum ve oksidatif kapasite değişkenlik gösterir ancak kesin bir eksiklik göstermez. Ortaya çıkan kanıtlar bunun yerine düzensizleşmiş interoseptif işlemeye işaret eder: fizyolojik afferansın değişmiş nöral yorumu ve bozulmuş efor-maliyet tahmini. Sorun, sinyal işleme mimarisidir—efor maliyeti ve tehdit değerini hesaplayan nöral devrelerdeki somut fizyolojik işlev bozukluğu. Bu, enerji tükenmesini değil, düzenleyici devre arızasını temsil eder.",
        p6: "\"Enerji\" farklı sistem özellikleriyle birbirinin yerine kullanıldığında dilsel karışıklık artar. Kapasite, optimal koşullar altında maksimum çıktıyı ifade eder (üretimde etiket kapasitesine benzer). Performans, düzenleyici sınırlar nedeniyle kapasitenin çok altına düşebilen mevcut kısıtlamalar altındaki gerçek çıktıyı yansıtır (iletim veya reaktif güç sınırlarıyla kısıtlanmış sevk edilebilir güce benzer). Motivasyon, efor harcamasına maliyet atayan dopaminerjik değerlendirme devrelerini içerir. Dayanıklılık, pertürbasyon altında kararlılık bakımını tanımlar (şebeke frekans kararlılık marjlarına benzer). Hiçbiri enerji mevcudiyetine indirgenmez; bunları birleştirmek yönetici değişkenleri gizler.",
        p7: "Hormonal sistemler, biyolojik \"enerji durumu\"nun mutlak substrat düzeylerinden ziyade konsantrasyon dinamikleri ve zamansal örüntüler aracılığıyla nasıl sinyal verildiğini ortaya koyar—faz açısı ve frekansın anlık gerilim büyüklüğünden daha önemli olduğu AC güç sistemlerinden tanıdık bir ilke. Leptin, hipotalamik devreleri modüle eden protein konsantrasyonu aracılığıyla yağ rezervlerini sinyaller. Grelin atımları, mide doluluğundan bağımsız olarak beklenen öğünlerin önüne geçer. İnsülin duyarlılığı, sinyal mekanizmasının saat geni regülasyonunu yansıtarak glukoz yükünden bağımsız olarak sirkadiyan olarak değişir. Bunlar bilgi mimarileridir, enerji ölçerleri değil.",
        p8: "Substratın işlevi gerçekten sınırladığı yerlerde bile—hipoglisemi—birincil tehlike enerji tükenmesi değil, sinyal kapasitesi kaybıdır. Nöronlar, geç aşama glukoz yoksunluğuna kadar ATP homeostazisini sürdürür; kritik eşik, sinaptik sinyal için gerekli nörotransmitter öncülerinin kaybıdır. Beyin \"gücü tükenmez\"; iletişim bant genişliğini kaybeder—yeterli güç kaynağına rağmen telekomünikasyon sistemlerinde sinyal bozulmasının biyolojik eşdeğeri.",
        p9: "\"Mitokondriyal işlev bozukluğu\"nun klinik çağrışımı, enerji üretimini düzenleyici sinyal ile sıklıkla karıştırır. Mitokondriler, yeterli ATP sentezini sürdürürken değişmiş sinyal işlevleri sergiler—reaktif oksijen türleri üretimi, kalsiyum tamponlama, apoptotik düzenleme. Organeller, yalnızca enerji santralleri olarak değil, metabolik sensörler ve düzenleyici düğümler olarak hizmet eder—modern şebeke bileşenlerinin hem gerçek güç hem de yardımcı hizmetler (frekans düzenleme, gerilim desteği) sağlamasına benzer.",
        p10: "Bu analiz, ATP sentezi, mitokondriyal işlev ve substrat mevcudiyetinin biyolojik işlev için gerekli koşullar olduğunu reddetmez. Güç sistemleri terminolojisinde, bunlar gerekli ancak yeterli olmayan kısıtlamalardır. Hücreler, geniş performans aralıklarında ATP homeostazisini sürdürür; değişen, bu kapasitenin erişilebilirliğini belirleyen düzenleyici kazançtır. Kontrol mühendisleri, sınırlayıcı kısıtın enerji arzı değil kontrol mimarisi olduğu sistemlerle rutin olarak karşılaşır. Biyoloji aynı ilkeyi sergiler.",
        p11: "Kontrol mühendisliğinde, kazanç, gecikme ve referans takibi, sistem kararlılığının birinci derece belirleyicileridir. Bir sistemin çıktısı sonraki girdisini etkilediğinde bir geri besleme döngüsü oluşur, kararlılaştırabilen, güçlendirebilen veya salınım yapabilen kapalı bir nedensel yol yaratır. Bu mimari, voltaj regülatörlerinden biyolojik termoregülasyona kadar etki alanları boyunca kararlılığı yönetir—enerji substratı mevcudiyetinden bağımsız olarak.",
        p12: "Geri besleme kontrolü üç temel parametre ile karakterize edilir: <em>Kazanç</em>—referans noktasından sapmaya düzeltici yanıtın büyüklüğü; <em>Gecikme</em>—sapmanın algılanması ile düzeltmenin uygulanması arasındaki zamansal gecikme; ve <em>Referans noktası</em>—mevcut durumun karşılaştırıldığı referans değeri.",
        p13: "Negatif geri besleme, sapmalara karşı koyarak kararlılaştırır. Binalarda ve organizmalarda sıcaklık düzenlemesi aynı şekilde çalışır: sapma, sapmaya karşı koyan düzeltici yanıtları tetikler ve sistemi referans noktasına döndürür. Pozitif geri besleme, başlangıç sinyallerini güçlendirir, sistemleri eşik geçişlerine doğru iter—elektrik arızası yayılımında ve kan pıhtılaşma kaskadlarında eşit derecede görülür. Her iki süreç de enerjinin sınırlayıcı olmasını gerektirmez; her ikisi de sinyal kinetiği ve döngü mimarisi tarafından yönetilir.",
        p14: "Kritik olarak, geri besleme kararlılığı denge ile eşanlamlı değildir. Canlı sistemler ve AC güç şebekeleri, termodinamik dengeden uzakta çalışır, ancak sürekli geri besleme ayarlaması yoluyla dinamik kararlılığı sürdürür. Biyolojik baroreseptör kan basıncı düzenlemesi, milisaniye (nöral), sirkadiyan (hormonal) ve kronik (renal-endokrin) zaman ölçeklerinde iç içe döngüleri içerir—otomatik üretim kontrolü (saniyeler), ekonomik sevk (dakikalar-saatler) ve birim taahhüdü (günler) arasında uzanan hiyerarşik şebeke kontrolüne tam olarak benzer.",
        p15: "<strong>Gecikme</strong>, herhangi bir kontrol sistemindeki en kritik parametredir. Kontrol mühendisleri, algılama ile yanıt arasındaki faz gecikmesinin kararlılaştırıcı geri beslemeyi kararsızlaştırıcı salınıma dönüştürdüğünü kabul eder. Gecikme, sistemin doğal periyodunun dörtte birini aşarsa, negatif geri besleme etkili bir şekilde pozitife dönüşür, bozuklukları sönümlemek yerine güçlendirir. Bu arıza modu kaynak bağımsızdır: sınırsız yakıt ve sağlam donanıma sahip bir sistem, yalnızca algılama ile çalıştırma arasındaki zamansal uyumsuzluk nedeniyle felaket salınımına girebilir.",
        p16: "Bu ilke, tedarik zincirlerindeki üretim-envanter salınımlarını, jeneratör regülatör ölü bantından kaynaklanan şebeke frekans salınımlarını ve endokrin eksenlerindeki ultradiyan hormon pulsatilitesini açıklar. Hepsi yeterli kaynak sergiler ancak kontrol döngülerindeki zamansal yapı uyumsuzluğu nedeniyle başarısız olur.",
        p17: "Kaynak arızası ile kontrol arızası arasındaki ayrım iki model aracılığıyla resmileştirilebilir. Bir <strong>fırın modeli</strong>, sistemleri performansın tükenmeye kadar yakıt mevcudiyetiyle doğrusal olarak ölçeklendiği girdi-çıktı dönüştürücüleri olarak ele alır. Bir <strong>termostat modeli</strong>, performansın düzenleyici referans noktaları, geri besleme kazançları ve zamansal koordinasyon tarafından belirlendiğini kabul eder—bol yakıta rağmen felaketle başarısız olabilen değişkenler.",
        p18: "Güç sistemlerinde, bu ayrım önemsizdir: kontrol arızasından kaynaklanan şebeke çöküşü, üretim açığından kaynaklanan kesintiden tamamen farklı görünür. Fırın arızasında, yakıt eklemek işlevi geri yükler. Termostat arızasında, yakıt eklemek anlamsızdır; kontrol mimarisi onarılmalıdır. Aynı ayrım biyolojik yorgunluk için geçerlidir ancak enerjetik dil tarafından gizlenir.",
        p19: "Hipotalamo-hipofiz-adrenal (HPA) ekseni, hiyerarşik kontrol sistemlerinden tanıdık çoklu zaman ölçekli geri besleme mimarisini gösterir. Kortizol, farklı zaman sabitleriyle çoklu bölgelerde negatif geri besleme uygular: membran reseptörleri aracılığıyla hızlı geri besleme (saniyeler-dakikalar), glukokortikoid genomik reseptörler aracılığıyla orta (saatler) ve reseptör ekspresyon yeniden modelleme aracılığıyla yavaş (günler-haftalar). Bu zamansal katmanlama, kronik hiperaktivasyonu önlerken akut yanıta izin verir—şebeke işletiminde hızlı frekans yanıtı, otomatik üretim kontrolü ve uzun vadeli kapasite planlamasına benzer.",
        p20: "Adaptif direnç fenomenleri, geri besleme bütünlüğü ile substrat mevcudiyeti arasındaki ayrımı ortaya koyar. İnsülin direnci, geri besleme duyarsızlaşmasını temsil eder: kronik hiperinsülinemi, insülin reseptör sinyallemesini aşağı regüle eder ve eşdeğer glukoz alımını elde etmek için giderek daha yüksek konsantrasyonlar gerektirir. Sistem enerjiyi tüketmemiştir—glukoz ve ATP boldur. Bunun yerine, kronik aşırı stimülasyon sinyal kazancını kaydırmış, doz-yanıt eğrisini sağa kaydırmıştır. Bu, aktüatör doyumundan kaynaklanan kazanç azalmasıdır, bir kontrol sorunudur.",
        p21: "Geri besleme çerçevelerinin tahmin gücü, mekanistik özgüllükte yatar. Döngü kazancı, gecikme ve doğrusal olmayanlık parametreleri verildiğinde, kontrol mühendisleri sistemlerin pertürbasyon altında yakınsayıp yakınsamayacağını, salınım yapıp yapmayacağını veya ıraksayıp ıraksamayacağını tahmin edebilir. Enerji tabanlı açıklamalar bu kesinlikten yoksundur: ATP konsantrasyonunu bilmek, zorlukla sistem yanıtı hakkında minimal tahmin kapasitesi sağlar—tıpkı yakıt deposu seviyesini bilmenin kontrol sistemi kararlılığı hakkında minimal bilgi sağlaması gibi.",
        p22: "İnsan performansının ampirik çalışması tıp, egzersiz fizyolojisi, psikoloji, sistem biyolojisi ve mühendisliği kapsar, ancak bu alanlar örtüşen fenomenleri ölçmelerine rağmen uyumsuz sözvarlıklarıyla çalışır. Bu dilsel parçalanma, kontrol mühendisleri için apaçık olan ancak biyolojik araştırmacılar için görünmez olan birleştirici düzenleyici ilkeleri gizler.",
        p23: "\"Stres\" terimi, semantik çöküşü örnekler. Malzeme mühendisliğinde, stres birim alan başına kuvveti ifade eder. Fizyolojide, stres homeostatik pertürbasyonu belirtir. Psikolojide, stres algılanan talep-kaynak uyumsuzluğunu yansıtır. Endokrinolojide, stres HPA ekseni aktivasyonu anlamına gelir. Bu tanımlar minimal örtüşür ancak birbirinin yerine kullanılır—elektrik sistemlerinde \"gerilim\"i hem potansiyel farkı hem de akım akışı anlamında kullanmaya eşdeğerdir.",
        p24: "\"Adaptasyon\" benzer şekilde zamansal ve organizasyonel ölçekler boyunca süreçleri karıştırır: moleküler (protein ekspresyonu, saniyeler-saatler), hücresel (organel yeniden modelleme, günler), organ (hipertrofi, haftalar), sistemik (referans noktası yeniden kalibrasyonu, haftalar-aylar) ve evrimsel (seçilim, nesiller). Bu, hem geçici gerilim düşüşünü hem de uzun vadeli şebeke altyapı genişlemesini tanımlamak için \"düzenleme\" kullanmaya eşdeğerdir.",
        p25: "\"Denge\" yaygın biçimde görünür—enerji dengesi, hormonal denge—ancak termodinamik veya kontrol-kuramsal anlamda nadiren dengeyi ifade eder. Biyolojik sistemler, pasif denge değil, aktif düzenleme yoluyla dinamik referans noktaları sürdürür. Endokrin işlev, pulsatilite, sirkadiyan ritimler ve bağlama bağlı kaymalara bağlıdır—aktif olarak düzenlenen asimetriler. Güç sistemlerinde, \"frekans dengesi\"nden değil, sürekli kontrol eylemi yoluyla aktif frekans düzenlemesinden söz ederiz.",
        p26: "Kontrol mühendisleri, etki alanları boyunca geri besleme dinamiklerini nicelleştiren resmileştirilmiş araçlara sahiptir—Bode grafikleri, Nyquist kararlılık kriterleri, kök yer analizi. Bu araçlar doğrudan glukoz-insülin düzenlemesine ve kardiyovasküler kontrole uygulanır ancak biyolojik literatürde büyük ölçüde yoktur. Endokrinologlar, hormon salgılanmasını kazanç, faz marjı veya salınım frekansını nicelleştirmeden \"düzensiz\" olarak tanımlar. Sözvarlıkları, aynı matematiksel yapıları tanımlamalarına rağmen kesişmez.",
        p27: "<strong>Düzenleme ve Kaynak.</strong> Düzenleme: sinyal mimarisi aracılığıyla sistem davranışının kontrolü (reseptör duyarlılığı, geri besleme kazancı, zamansal gecikmeler). Kaynak: malzeme substratı mevcudiyeti (oksijen, glukoz, amino asitler). Kontrol sistemleri terminolojisinde: düzenleme kontrol yasasıdır; kaynak güç kaynağıdır.",
        p28: "<strong>Kapasite ve Performans.</strong> Kapasite: optimal koşullar altında maksimum potansiyel çıktı. Performans: mevcut kısıtlamalar altında gerçek çıktı. Üretim sistemlerinde etiket kapasitesine karşı sevk edilebilir güce benzer.",
        p29: "<strong>Referans Noktası ve Optimizasyon.</strong> Referans noktası: geri besleme mekanizmalarının çıktıları kararlılaştırdığı çalışma noktası. Optimizasyon: tanımlanmış bir amaç fonksiyonunun maksimizasyonu. Mühendislik sistemlerinin referans noktaları vardır; tek bir performans metriği için zorunlu olarak optimize edilmezler.",
        p30: "<strong>Kararlılık ve Verimlilik.</strong> Kararlılık: pertürbasyona rağmen işlev bakımı. Verimlilik: yararlı çıktının toplam girdiye oranı. Kontrol mühendisleri bunların genellikle ters orantılı olduğunu kabul eder; kritik sistemler verimliliğe karşı kararlılığı önceliklendirir.",
        p31: "<strong>Gecikme ve Eksiklik.</strong> Gecikme: geri besleme sinyallemesinde zamansal faz gecikmesi. Eksiklik: işlevsel gereksinimin altında substrat mevcudiyeti. Gecikme salınımlı kararsızlığa neden olur; eksiklik genlik sınırlamasına neden olur. Farklı arıza modları farklı müdahaleler gerektirir.",
        p32: "İnsan performansını açıklamak için enerjik metaforlara güvenme, ampirik zorunluluktan ziyade disipliner geleneği yansıtır. Kontrol mühendisleri, enerji mevcudiyetini sistem kararlılığından rutin olarak ayırt eder—altyapı işletimi için temel ancak biyolojik söylemde sistematik olarak ihlal edilen bir ayrım. Kazanç, gecikme ve referans noktası düzenlemesiyle karakterize edilen geri besleme dinamikleri, akut yorgunluktan kronik düzenleyici işlev bozukluğuna uzanan olgular için üstün açıklayıcı güç sunar.",
        p33: "Tıp, mühendislik ve biyoloji arasında paylaşılan, kesin sözvarlığının yokluğu, birleştirici düzenleyici ilkeleri gizlemiştir. Terminolojik disiplin—düzenlemeyi kaynak mevcudiyetinden, kapasiteyi performanstan, kararlılığı optimizasyondan ayıran açık sınırlar—disiplinler arası senteze olanak tanır. Karmaşık sistemlerde, ister elektrik şebekeleri ister biyolojik organizmalar olsun, bilgi mimarileri enerji dağılımını yönetir, enerji mevcudiyeti sistem davranışını belirlemez.",
        p34: "Substrat mevcudiyeti yerine düzenleyici mimarinin çoğu bağlamda biyolojik performansı sınırladığını kabul etmek, insan sistem işlevinin mekanistik olarak temellendirilmiş yorumu için kavramsal temeller sağlar. Şebeke kararlılığını yöneten ilkeler metabolik kararlılığa eşit olarak uygulanır; matematik aynıdır. Enerji değil, geri besleme. Muhasebe değil, mimari."
      },

      keys: {
        heading: "ANAHTAR KELİMELER",
        feedback: "Geri Besleme Kontrolü",
        regulation: "Düzenleme",
        stability: "Sistem Kararlılığı",
        performance: "İnsan Performansı",
        fatigue: "Yorgunluk",
        vocabulary: "Sistemler Sözvarlığı",
        control: "Kontrol Kuramı"
      },

      refs: {
        heading: "KAYNAKÇA"
      }
    },

    footer: {
      tag: "Araştırma · Çerçeveler · Öngörü",
      social: {
        medium: "MEDIUM",
        linkedin: "LinkedIn",
        x: "X"
      },
      explore: "Keşfet",
      contactTitle: "İletişim",
      emailLabel: "E-posta",
      locationLabel: "Konum",
      locationValue: "Ankara · Türkiye",
      newsletter: "Bülten",
      newsletterBody: "Çerçeveler, yayınlar ve seminerler hakkında ara sıra notlar. Pazarlama yok. Gürültü yok.",
      subscribe: "Abone Ol",
      copyright: "© 2026 GiNOVA",
      privacy: "Gizlilik",
      terms: "Koşullar",
      backToTop: "Başa dön"
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ITALIAN - Umberto Eco: semiotic precision, scholarly sophistication
  // ═══════════════════════════════════════════════════════════════════════════
  it: {
    nav: {
      brand1: "innovazione alimentare &",
      brand2: "accademia delle scienze",
      paradigm: "Paradigma",
      research: "Ricerca",
      publications: "Pubblicazioni",
      publicationsActive: "Pubblicazioni",
      education: "Formazione",
      people: "Persone",
      home: "Home"
    },

    pub02: {
      pageTitle: "GiNOVA - Retroazione, non Energia",

      hero: {
        kicker: "FORESTA DEGLI ARTICOLI<br />— GiNOVA —",
        title: "Retroazione, non Energia",
        subtitle: "\" Perché la Prestazione Umana Necessita di un Lessico Sistemico \"",
        author1: "<strong>Metin Söylemez</strong>",
        affil1: "MSc. Ingegneria Elettrica ed Elettronica",
        affil2: "Direttore Generale — <strong>SASE Energy</strong>",
        author2: "<strong>Kunter Ilalan</strong>",
        affil3: "Dip. di Ingegneria Alimentare, <strong>METU</strong>",
        affil4: "Fondatore &amp; Direttore, <strong>GiNOVA</strong> FI &amp; SA"
      },

      abstract: {
        heading: "SOMMARIO",
        p1: "La ricerca sulla prestazione umana si affida in larga misura a spiegazioni energetiche mutuate dalla termodinamica, eppure i fenomeni classificati come \"deficit energetici\" riflettono prevalentemente disfunzioni regolatorie piuttosto che esaurimento di substrato. Gli ingegneri del controllo distinguono routinariamente la disponibilità energetica dalla stabilità sistemica—una distinzione fondamentale per l'esercizio delle reti elettriche, l'automazione industriale e le telecomunicazioni.",
        p2: "Questa rassegna concettuale applica principi della teoria del controllo per dimostrare che i circuiti di retroazione—caratterizzati da guadagno, ritardo e dinamiche del setpoint—forniscono una potenza esplicativa superiore per comprendere i limiti prestazionali, la fatica e la stabilità dei sistemi biologici. Mostriamo che persistenti fallimenti lessicali tra medicina, psicologia e ingegneria oscurano principi regolatori condivisi.",
        p3: "Proponiamo un lessico sistemico minimale che distingue la regolazione dalla disponibilità di risorse, la capacità dalla prestazione, e la stabilità dall'ottimizzazione, chiarendo che nei sistemi complessi—siano essi reti elettriche o organismi biologici—le architetture informative governano la distribuzione dell'energia piuttosto che la disponibilità energetica determinare il comportamento sistemico."
      },

      body: {
        h1: "I. I Limiti Concettuali dell'\"Energia\" nella Prestazione Umana",
        h2: "II. La Retroazione come Principio Regolatorio Universale",
        h3: "III. Il Fallimento del Lessico e la Frammentazione Interdisciplinare",
        h4: "IV. Verso un Lessico Sistemico Minimale",
        h5: "Conclusione",
        p1: "Nei sistemi di potenza elettrica, la disponibilità energetica è raramente il vincolo determinante per la stabilità sistemica. La frequenza di rete può collassare nonostante un'adeguata capacità di generazione se il controllo della potenza reattiva fallisce o se la sincronizzazione di fase tra generatori degrada. L'instabilità di tensione si verifica non per insufficiente potenza reale ma per il cedimento dell'architettura di controllo nella compensazione della potenza reattiva. I sistemi di controllo di processo industriale esibiscono guasti analoghi: un'adeguata fornitura di combustibile non previene l'instabilità oscillatoria se i ritardi sensore-attuatore superano soglie critiche, convertendo la retroazione stabilizzante in risonanza destabilizzante.",
        p2: "Questa distinzione tra sufficienza energetica e integrità del controllo è fondamentale per la pratica ingegneristica ma sistematicamente violata nel discorso sulla prestazione biologica. Il termine \"energia\" funziona con precisione in termodinamica e ingegneria energetica: denota una quantità scalare conservata misurata in joule, governata da leggi che specificano efficienza di conversione e dissipazione termica. Applicato alla prestazione umana, tuttavia, \"energia\" diventa concettualmente promiscuo, collassando fenomeni distinti in un'unica variabile esplicativa che non può rendere conto del comportamento sistemico osservato.",
        p3: "Si consideri la fatica durante la contrazione muscolare prolungata—l'analogo biologico del carico sostenuto nei sistemi di potenza. La spiegazione energetica intuitiva postula l'esaurimento di ATP come fattore limitante, eppure misurazioni dirette rivelano che i livelli di ATP declinano minimamente anche durante l'esercizio esaustivo. Il lattato, storicamente inquadrato come prodotto di scarto metabolico, è ora riconosciuto come molecola di segnalazione e substrato ossidativo. I meccanismi effettivi della fatica coinvolgono il fallimento dell'accoppiamento eccitazione-contrazione: compromissione del rilascio di calcio, depolarizzazione sarcolemmale da eflusso di potassio, e modulazione dei canali ionici da specie reattive dell'ossigeno. Questi sono guasti regolatori—cedimento del sistema di controllo nonostante substrato energetico adeguato—precisamente analoghi all'instabilità di rete con sufficiente capacità di generazione.",
        p4: "La fatica centrale esibisce lo stesso pattern. Lo sforzo percepito e la limitazione volontaria della prestazione emergono da meccanismi cerebrali che operano indipendentemente dallo stato metabolico periferico. La retroazione ingannevole—distanza residua falsificata o sforzo percepito manipolato—altera significativamente la prestazione di resistenza senza modificare la fisiologia. Il modello psicobiologico posiziona la percezione dello sforzo come emergente da circuiti comparatori che integrano segnali afferenti, durata anticipata e valutazione motivazionale. Questo è un sistema di controllo che valuta pattern di segnali, non un indicatore di carburante che misura concentrazioni di substrato.",
        p5: "La sindrome da fatica cronica dimostra l'errore categoriale su scala patologica. Nonostante indagini estensive, un deficit bioenergetico uniforme non è stato stabilito nei pazienti con CFS. La produzione di ATP, la respirazione mitocondriale e la capacità ossidativa mostrano variabilità ma nessuna deficienza definitiva. L'evidenza emergente punta invece verso un'elaborazione interocettiva disregolata: interpretazione neurale alterata dell'afferenza fisiologica e predizione costo-sforzo perturbata. Il problema risiede nell'architettura di elaborazione dei segnali—disfunzione fisiologica tangibile nei circuiti neurali che computano costo dello sforzo e valore di minaccia. Questo rappresenta il fallimento della circuiteria regolatoria, non l'esaurimento energetico.",
        p6: "La confusione linguistica si aggrava quando \"energia\" viene usata intercambiabilmente con proprietà sistemiche distinte. Capacità denota l'output massimo in condizioni ottimali (analogo alla capacità di targa nella generazione). Prestazione riflette l'output effettivo sotto i vincoli correnti, che può cadere molto al di sotto della capacità a causa di limiti regolatori (analogo alla potenza dispacciabile vincolata da trasmissione o limiti di potenza reattiva). Motivazione coinvolge circuiti di valutazione dopaminergici che assegnano costo al dispendio di sforzo. Resilienza descrive il mantenimento della stabilità sotto perturbazione (analogo ai margini di stabilità della frequenza di rete). Nessuna si riduce alla disponibilità energetica; collassarle oscura le variabili governanti.",
        p7: "I sistemi ormonali rivelano come lo \"stato energetico\" biologico viene segnalato attraverso dinamiche di concentrazione e pattern temporali piuttosto che livelli assoluti di substrato—un principio familiare dai sistemi di potenza AC dove angolo di fase e frequenza contano più della magnitudine di tensione istantanea. La leptina segnala le riserve adipose attraverso concentrazioni proteiche che modulano circuiti ipotalamici. I pulse di grelina precedono i pasti attesi indipendentemente dalla pienezza gastrica. La sensibilità insulinica varia circadianamente indipendentemente dal carico di glucosio, riflettendo la regolazione dei geni orologio della macchina di segnalazione. Queste sono architetture informative, non misuratori di energia.",
        p8: "Anche laddove il substrato limita genuinamente la funzione—ipoglicemia—il pericolo primario non è l'esaurimento energetico ma la perdita di capacità di segnalazione. I neuroni mantengono l'omeostasi dell'ATP fino alla deprivazione tardiva di glucosio; la soglia critica è la perdita di precursori dei neurotrasmettitori richiesti per la segnalazione sinaptica. Il cervello non \"esaurisce la corrente\"; perde larghezza di banda comunicativa—l'equivalente biologico della degradazione del segnale nei sistemi di telecomunicazione nonostante un'alimentazione adeguata.",
        p9: "L'invocazione clinica della \"disfunzione mitocondriale\" spesso confonde la produzione energetica con la segnalazione regolatoria. I mitocondri esibiscono funzioni di segnalazione alterate—produzione di specie reattive dell'ossigeno, tamponamento del calcio, regolazione apoptotica—mantenendo al contempo una sintesi di ATP adeguata. Gli organelli servono come sensori metabolici e nodi regolatori, non meramente come centrali elettriche—analogo a come i componenti moderni di rete forniscono sia potenza reale che servizi ancillari (regolazione di frequenza, supporto di tensione).",
        p10: "Questa analisi non nega che la sintesi di ATP, la funzione mitocondriale e la disponibilità di substrato siano condizioni necessarie per la funzione biologica. Nella terminologia dei sistemi di potenza, questi sono vincoli necessari ma non sufficienti. Le cellule mantengono l'omeostasi dell'ATP attraverso ampi range prestazionali; ciò che varia è il guadagno regolatorio che determina l'accessibilità di quella capacità. Gli ingegneri del controllo incontrano routinariamente sistemi dove il vincolo limitante è l'architettura di controllo, non la fornitura di energia. La biologia esibisce lo stesso principio.",
        p11: "Nell'ingegneria del controllo, guadagno, ritardo e tracking del riferimento sono i determinanti di primo ordine della stabilità sistemica. Un loop di retroazione esiste quando l'output di un sistema influenza il suo input successivo, creando un percorso causale chiuso che può stabilizzare, amplificare o oscillare. Questa architettura governa la stabilità attraverso domini—dai regolatori di tensione alla termoregolazione biologica—indipendentemente dalla disponibilità di substrato energetico.",
        p12: "Il controllo in retroazione è caratterizzato da tre parametri essenziali: <em>Guadagno</em>—magnitudine della risposta correttiva alla deviazione dal setpoint; <em>Ritardo</em>—lag temporale tra rilevamento della deviazione e implementazione della correzione; e <em>Setpoint</em>—valore di riferimento contro cui lo stato corrente viene comparato.",
        p13: "La retroazione negativa stabilizza contrastando le deviazioni. La regolazione termica in edifici e organismi opera identicamente: la deviazione innesca risposte correttive che si oppongono alla deviazione, riportando il sistema verso il setpoint. La retroazione positiva amplifica i segnali iniziali, spingendo i sistemi verso transizioni di soglia—visibile tanto nella propagazione di guasti elettrici quanto nelle cascate di coagulazione sanguigna. Nessuno di questi processi richiede che l'energia sia limitante; entrambi sono governati dalla cinetica di segnalazione e dall'architettura del loop.",
        p14: "Criticamente, la stabilità di retroazione non è sinonimo di equilibrio. I sistemi viventi e le reti di potenza AC operano entrambi lontano dall'equilibrio termodinamico eppure mantengono stabilità dinamica attraverso aggiustamento continuo della retroazione. La regolazione biologica della pressione sanguigna via barocettori coinvolge loop annidati attraverso scale temporali di millisecondi (neurale), circadiana (ormonale) e cronica (renale-endocrina)—precisamente analogo al controllo gerarchico di rete che spazia dal controllo automatico della generazione (secondi), al dispacciamento economico (minuti-ore), all'impegno delle unità (giorni).",
        p15: "Il <strong>Ritardo</strong> è il parametro più critico in qualunque sistema di controllo. Gli ingegneri del controllo riconoscono che il lag di fase tra rilevamento e risposta converte la retroazione stabilizzante in oscillazione destabilizzante. Se il ritardo eccede un quarto del periodo naturale del sistema, la retroazione negativa diventa effettivamente positiva, amplificando le perturbazioni invece di smorzarle. Questa modalità di guasto è indipendente dalle risorse: un sistema con carburante illimitato e hardware intatto può entrare in oscillazione catastrofica unicamente a causa di mismatch temporale tra sensing e attuazione.",
        p16: "Questo principio spiega le oscillazioni produzione-inventario nelle catene di fornitura, le oscillazioni di frequenza di rete dalla banda morta del regolatore del generatore, e la pulsatilità ormonale ultradiana negli assi endocrini. Tutti esibiscono risorse adeguate ma falliscono a causa di mismatch della struttura temporale nei loop di controllo.",
        p17: "La distinzione tra guasto di risorse e guasto di controllo può essere formalizzata attraverso due modelli. Un <strong>modello fornace</strong> tratta i sistemi come convertitori input-output dove la prestazione scala linearmente con la disponibilità di carburante fino all'esaurimento. Un <strong>modello termostato</strong> riconosce che la prestazione è determinata da setpoint regolatori, guadagni di retroazione e coordinazione temporale—variabili che possono fallire catastroficamente nonostante carburante abbondante.",
        p18: "Nei sistemi di potenza, questa distinzione è triviale: il collasso di rete da guasto di controllo appare completamente diverso dal blackout da deficit di generazione. Nel guasto fornace, aggiungere carburante ripristina la funzione. Nel guasto termostato, aggiungere carburante è irrilevante; l'architettura di controllo deve essere riparata. La stessa distinzione si applica alla fatica biologica ma è oscurata dal linguaggio energetico.",
        p19: "L'asse ipotalamo-ipofisi-surrene (HPA) dimostra l'architettura di retroazione multi-scala temporale familiare dai sistemi di controllo gerarchici. Il cortisolo esercita retroazione negativa in siti multipli con costanti di tempo distinte: retroazione veloce via recettori di membrana (secondi-minuti), intermedia via recettori genomici glucocorticoidi (ore), e lenta via rimodellamento dell'espressione recettoriale (giorni-settimane). Questa stratificazione temporale permette risposta acuta prevenendo al contempo l'iperattivazione cronica—analogo alla risposta rapida di frequenza, al controllo automatico della generazione e alla pianificazione della capacità a lungo termine nell'esercizio di rete.",
        p20: "I fenomeni di resistenza adattiva rivelano la distinzione tra integrità della retroazione e disponibilità di substrato. La resistenza insulinica rappresenta desensibilizzazione della retroazione: l'iperinsulinemia cronica down-regola la segnalazione del recettore insulinico, richiedendo concentrazioni progressivamente più alte per ottenere un uptake equivalente di glucosio. Il sistema non ha esaurito energia—glucosio e ATP sono abbondanti. Piuttosto, la sovrastimolazione cronica ha spostato il guadagno di segnalazione, spostando verso destra la curva dose-risposta. Questa è riduzione del guadagno da saturazione dell'attuatore, un problema di controllo.",
        p21: "Il potere predittivo dei framework di retroazione risiede nella specificità meccanicistica. Dati i parametri di guadagno del loop, ritardo e non-linearità, gli ingegneri del controllo possono predire se i sistemi convergono, oscillano o divergono sotto perturbazione. Le spiegazioni basate sull'energia mancano di questa precisione: conoscere la concentrazione di ATP fornisce capacità predittiva minima riguardo alla risposta del sistema alla sfida—proprio come conoscere il livello del serbatoio di carburante fornisce informazioni minime sulla stabilità del sistema di controllo.",
        p22: "Lo studio empirico della prestazione umana abbraccia medicina, fisiologia dell'esercizio, psicologia, biologia dei sistemi e ingegneria, eppure questi campi operano con lessici incompatibili nonostante misurino fenomeni sovrapposti. Questa frammentazione linguistica oscura principi regolatori unificanti che sono auto-evidenti per gli ingegneri del controllo ma invisibili ai ricercatori biologici.",
        p23: "Il termine \"stress\" esemplifica il collasso semantico. Nell'ingegneria dei materiali, stress denota forza per unità di area. In fisiologia, stress significa perturbazione omeostatica. In psicologia, stress riflette mismatch percepito domanda-risorse. In endocrinologia, stress significa attivazione dell'asse HPA. Queste definizioni si sovrappongono minimamente eppure vengono usate intercambiabilmente—equivalente a usare \"tensione\" per significare sia differenza di potenziale che flusso di corrente nei sistemi elettrici.",
        p24: "\"Adattamento\" similmente confonde processi attraverso scale temporali e organizzative: molecolare (espressione proteica, secondi-ore), cellulare (rimodellamento degli organelli, giorni), d'organo (ipertrofia, settimane), sistemico (ricalibrazione del setpoint, settimane-mesi), ed evolutivo (selezione, generazioni). Questo equivale a usare \"regolazione\" per descrivere sia il droop transitorio di tensione che l'espansione infrastrutturale di rete a lungo termine.",
        p25: "\"Equilibrio\" appare pervasivamente—equilibrio energetico, equilibrio ormonale—eppure raramente denota equilibrio nel senso termodinamico o della teoria del controllo. I sistemi biologici mantengono setpoint dinamici attraverso regolazione attiva, non equilibrio passivo. La funzione endocrina dipende da pulsatilità, ritmi circadiani e shift dipendenti dal contesto—asimmetrie attivamente regolate. Nei sistemi di potenza, non parliamo di \"equilibrio di frequenza\" ma di regolazione attiva della frequenza attraverso azione di controllo continua.",
        p26: "Gli ingegneri del controllo dispongono di strumenti formalizzati—diagrammi di Bode, criteri di stabilità di Nyquist, analisi del luogo delle radici—che quantificano le dinamiche di retroazione attraverso domini. Questi strumenti si applicano direttamente alla regolazione glucosio-insulina e al controllo cardiovascolare ma rimangono largamente assenti dalla letteratura biologica. Gli endocrinologi descrivono la secrezione ormonale come \"disregolata\" senza quantificare guadagno, margine di fase o frequenza di oscillazione. I lessici non si intersecano, nonostante descrivano strutture matematiche identiche.",
        p27: "<strong>Regolazione vs. Risorsa.</strong> Regolazione: controllo del comportamento sistemico attraverso architettura di segnalazione (sensibilità recettoriale, guadagno di retroazione, ritardi temporali). Risorsa: disponibilità di substrato materiale (ossigeno, glucosio, amminoacidi). Nella terminologia dei sistemi di controllo: la regolazione è la legge di controllo; la risorsa è l'alimentazione.",
        p28: "<strong>Capacità vs. Prestazione.</strong> Capacità: output potenziale massimo in condizioni ottimali. Prestazione: output effettivo sotto i vincoli correnti. Analogo a capacità di targa versus potenza dispacciabile nei sistemi di generazione.",
        p29: "<strong>Setpoint vs. Ottimizzazione.</strong> Setpoint: punto operativo attorno al quale i meccanismi di retroazione stabilizzano gli output. Ottimizzazione: massimizzazione di una funzione obiettivo definita. I sistemi ingegneristici hanno setpoint; non sono necessariamente ottimizzati per alcuna singola metrica prestazionale.",
        p30: "<strong>Stabilità vs. Efficienza.</strong> Stabilità: mantenimento della funzione nonostante perturbazione. Efficienza: rapporto tra output utile e input totale. Gli ingegneri del controllo riconoscono che questi sono spesso inversamente correlati; i sistemi critici prioritizzano la stabilità rispetto all'efficienza.",
        p31: "<strong>Ritardo vs. Carenza.</strong> Ritardo: lag di fase temporale nella segnalazione di retroazione. Carenza: disponibilità di substrato sotto il requisito funzionale. Il ritardo causa instabilità oscillatoria; la carenza causa limitazione di ampiezza. Modalità di guasto differenti richiedono interventi differenti.",
        p32: "L'affidamento a metafore energetiche per spiegare la prestazione umana riflette convenzione disciplinare piuttosto che necessità empirica. Gli ingegneri del controllo distinguono abitualmente disponibilità energetica da stabilità sistemica—distinzione fondamentale per l'operazione infrastrutturale ma sistematicamente violata nel discorso biologico. Le dinamiche di retroazione—caratterizzate da guadagno, ritardo e regolazione del setpoint—offrono potere esplicativo superiore per fenomeni che spaziano dalla fatica acuta alla disfunzione regolatoria cronica.",
        p33: "L'assenza di un lessico condiviso e preciso attraverso medicina, ingegneria e biologia ha oscurato principi regolatori unificanti. La disciplina terminologica—confini espliciti che distinguano regolazione da disponibilità di risorse, capacità da prestazione, stabilità da ottimizzazione—abilita la sintesi interdisciplinare. Nei sistemi complessi, siano essi reti elettriche o organismi biologici, le architetture informative governano la distribuzione dell'energia anziché la disponibilità energetica determinare il comportamento sistemico.",
        p34: "Riconoscere che l'architettura regolatoria piuttosto che la disponibilità di substrato limita la prestazione biologica nella maggioranza dei contesti fornisce fondamenta concettuali per un'interpretazione meccanicisticamente fondata della funzione sistemica umana. I principi che governano la stabilità di rete si applicano ugualmente alla stabilità metabolica; la matematica è identica. Retroazione, non energia. Architettura, non contabilità."
      },

      keys: {
        heading: "PAROLE CHIAVE",
        feedback: "Controllo in Retroazione",
        regulation: "Regolazione",
        stability: "Stabilità Sistemica",
        performance: "Prestazione Umana",
        fatigue: "Fatica",
        vocabulary: "Lessico Sistemico",
        control: "Teoria del Controllo"
      },

      refs: {
        heading: "RIFERIMENTI BIBLIOGRAFICI"
      }
    },

    footer: {
      tag: "Ricerca · Framework · Previsione",
      social: {
        medium: "MEDIUM",
        linkedin: "LinkedIn",
        x: "X"
      },
      explore: "Esplora",
      contactTitle: "Contatti",
      emailLabel: "Email",
      locationLabel: "Sede",
      locationValue: "Ankara · Turchia",
      newsletter: "Newsletter",
      newsletterBody: "Note occasionali su framework, pubblicazioni e seminari. Niente marketing. Niente rumore.",
      subscribe: "Iscriviti",
      copyright: "© 2026 GiNOVA",
      privacy: "Privacy",
      terms: "Termini",
      backToTop: "Torna su"
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GERMAN - Max Weber: systematic rigor, sociological depth
  // ═══════════════════════════════════════════════════════════════════════════
  de: {
    nav: {
      brand1: "lebensmittelinnovation &",
      brand2: "wissenschaftsakademie",
      paradigm: "Paradigma",
      research: "Forschung",
      publications: "Publikationen",
      publicationsActive: "Publikationen",
      education: "Bildung",
      people: "Team",
      home: "Startseite"
    },

    pub02: {
      pageTitle: "GiNOVA - Rückkopplung, nicht Energie",

      hero: {
        kicker: "ARTIKELWALD<br />— GiNOVA —",
        title: "Rückkopplung, nicht Energie",
        subtitle: "\" Weshalb die menschliche Leistungsfähigkeit eines systemischen Vokabulars bedarf \"",
        author1: "<strong>Metin Söylemez</strong>",
        affil1: "MSc. Elektro- und Elektroniktechnik",
        affil2: "Geschäftsführer — <strong>SASE Energy</strong>",
        author2: "<strong>Kunter Ilalan</strong>",
        affil3: "Fachbereich Lebensmitteltechnik, <strong>METU</strong>",
        affil4: "Gründer &amp; Direktor, <strong>GiNOVA</strong> FI &amp; SA"
      },

      abstract: {
        heading: "ZUSAMMENFASSUNG",
        p1: "Die Forschung zur menschlichen Leistungsfähigkeit stützt sich in erheblichem Maße auf energetische Erklärungsmodelle, die der Thermodynamik entlehnt sind; gleichwohl spiegeln jene Phänomene, die als „Energiedefizite\" klassifiziert werden, vorwiegend regulatorische Dysfunktionen wider und nicht etwa Substraterschöpfung. Regelungsingenieure unterscheiden routinemäßig zwischen Energieverfügbarkeit und Systemstabilität—eine Unterscheidung, die für den Netzbetrieb, die industrielle Automatisierung und die Telekommunikation von grundlegender Bedeutung ist.",
        p2: "Die vorliegende konzeptionelle Übersicht wendet regelungstechnische Prinzipien an, um darzulegen, dass Rückkopplungsschleifen—gekennzeichnet durch Verstärkung, Verzögerung und Sollwertdynamik—eine überlegene Erklärungskraft für das Verständnis von Leistungsbeschränkungen, Ermüdung und biologischer Systemstabilität bieten. Wir zeigen auf, dass fortbestehende Vokabulardefizite zwischen Medizin, Psychologie und Ingenieurwesen gemeinsame regulatorische Prinzipien verschleiern.",
        p3: "Wir schlagen ein minimales Systemvokabular vor, das Regulation von Ressourcenverfügbarkeit, Kapazität von Leistung sowie Stabilität von Optimierung unterscheidet—und damit verdeutlicht, dass in komplexen Systemen, seien es elektrische Netze oder biologische Organismen, Informationsarchitekturen die Energieverteilung steuern, anstatt dass die Energieverfügbarkeit das Systemverhalten bestimmt."
      },

      body: {
        h1: "I. Die begrifflichen Grenzen der „Energie\" in der menschlichen Leistungsfähigkeit",
        h2: "II. Rückkopplung als universelles Regulationsprinzip",
        h3: "III. Das Versagen des Vokabulars und die interdisziplinäre Fragmentierung",
        h4: "IV. Auf dem Weg zu einem minimalen Systemvokabular",
        h5: "Schlussfolgerung",
        p1: "In elektrischen Energiesystemen stellt die Energieverfügbarkeit selten die maßgebliche Beschränkung für die Systemstabilität dar. Die Netzfrequenz kann trotz ausreichender Erzeugungskapazität zusammenbrechen, sofern die Blindleistungsregelung versagt oder die Phasensynchronisation zwischen den Generatoren degradiert. Spannungsinstabilität entsteht nicht aus unzureichender Wirkleistung, sondern aus dem Zusammenbruch der Regelungsarchitektur in der Blindleistungskompensation. Industrielle Prozessleitsysteme weisen analoge Versagensmuster auf: Eine ausreichende Brennstoffversorgung verhindert keine oszillatorische Instabilität, wenn die Sensor-Aktor-Verzögerungen kritische Schwellenwerte überschreiten und damit stabilisierende Rückkopplung in destabilisierende Resonanz umwandeln.",
        p2: "Diese Unterscheidung zwischen Energiesuffizienz und Regelungsintegrität ist für die Ingenieurpraxis grundlegend, wird jedoch im Diskurs über biologische Leistungsfähigkeit systematisch verletzt. Der Begriff „Energie\" fungiert in der Thermodynamik und der Energietechnik präzise: Er bezeichnet eine erhaltene skalare Größe, gemessen in Joule, die durch Gesetze zur Umwandlungseffizienz und Wärmedissipation bestimmt wird. Angewandt auf die menschliche Leistungsfähigkeit hingegen wird „Energie\" begrifflich promiskuitiv und kollabiert distinkte Phänomene in eine einzige erklärende Variable, die das beobachtete Systemverhalten nicht zu erfassen vermag.",
        p3: "Man betrachte die Ermüdung während anhaltender Muskelkontraktion—das biologische Analogon zur Dauerlast in Energiesystemen. Die intuitive energetische Erklärung postuliert ATP-Depletion als limitierenden Faktor; gleichwohl zeigen direkte Messungen, dass die ATP-Spiegel selbst bei erschöpfender Belastung nur minimal absinken. Laktat, historisch als metabolisches Abfallprodukt eingeordnet, wird heute als Signalmolekül und oxidatives Substrat anerkannt. Die tatsächlichen Ermüdungsmechanismen umfassen das Versagen der Erregungs-Kontraktions-Kopplung: Beeinträchtigung der Calciumfreisetzung, sarkolemmale Depolarisation durch Kaliumefflux und Modulation der Ionenkanäle durch reaktive Sauerstoffspezies. Dies sind regulatorische Versagenszustände—Zusammenbruch des Regelungssystems trotz ausreichenden Energiesubstrats—präzise analog zur Netzinstabilität bei hinreichender Erzeugungskapazität.",
        p4: "Die zentrale Ermüdung weist dasselbe Muster auf. Wahrgenommene Anstrengung und willentliche Leistungsbegrenzung entstehen aus Hirnmechanismen, die unabhängig vom peripheren Stoffwechselstatus operieren. Täuschende Rückkopplung—verfälschte verbleibende Distanz oder manipulierte wahrgenommene Anstrengung—verändert die Ausdauerleistung signifikant, ohne die Physiologie zu modifizieren. Das psychobiologische Modell positioniert die Anstrengungswahrnehmung als emergent aus Vergleichsschaltkreisen, die afferente Signale, antizipierte Dauer und motivationale Bewertung integrieren. Dies ist ein Regelungssystem, das Signalmuster evaluiert, keine Tankanzeige, die Substratkonzentrationen misst.",
        p5: "Das chronische Erschöpfungssyndrom demonstriert den Kategorienfehler im pathologischen Maßstab. Trotz extensiver Untersuchungen wurde bei CFS-Patienten kein einheitliches bioenergetisches Defizit etabliert. ATP-Produktion, mitochondriale Respiration und oxidative Kapazität zeigen Variabilität, aber keinen definitiven Mangel. Aufkommende Evidenz weist stattdessen auf dysregulierte interozeptive Verarbeitung hin: veränderte neurale Interpretation physiologischer Afferenz und gestörte Aufwand-Kosten-Vorhersage. Das Problem liegt in der Signalverarbeitungsarchitektur—greifbare physiologische Dysfunktion in neuronalen Schaltkreisen, die Aufwandskosten und Bedrohungswert berechnen. Dies repräsentiert das Versagen regulatorischer Schaltkreise, nicht Energiedepletion.",
        p6: "Die linguistische Konfusion verschärft sich, wenn „Energie\" austauschbar mit distinkten Systemeigenschaften verwendet wird. Kapazität bezeichnet den maximalen Output unter optimalen Bedingungen (analog zur Nennleistung bei der Erzeugung). Leistung reflektiert den tatsächlichen Output unter gegenwärtigen Einschränkungen, der aufgrund regulatorischer Grenzen weit unter der Kapazität liegen kann (analog zur abrufbaren Leistung, eingeschränkt durch Übertragungs- oder Blindleistungsgrenzen). Motivation involviert dopaminerge Bewertungsschaltkreise, die Kosten zum Aufwandsaufwand zuweisen. Resilienz beschreibt die Stabilitätserhaltung unter Störung (analog zu Netzfrequenz-Stabilitätsmargen). Keine dieser Größen reduziert sich auf Energieverfügbarkeit; ihr Kollabieren verschleiert die bestimmenden Variablen.",
        p7: "Hormonelle Systeme offenbaren, wie biologischer „Energiestatus\" durch Konzentrationsdynamiken und temporale Muster signalisiert wird, nicht durch absolute Substratspiegel—ein Prinzip, das aus AC-Energiesystemen vertraut ist, wo Phasenwinkel und Frequenz mehr zählen als die momentane Spannungsgröße. Leptin signalisiert Fettreserven durch Proteinkonzentrationen, die hypothalamische Schaltkreise modulieren. Ghrelinpulse gehen erwarteten Mahlzeiten unabhängig von der Magenfüllung voraus. Die Insulinsensitivität variiert zirkadian unabhängig von der Glukosebelastung und reflektiert die Uhrgen-Regulation der Signalmaschinerie. Dies sind Informationsarchitekturen, keine Energiemessgeräte.",
        p8: "Selbst dort, wo Substrat die Funktion tatsächlich limitiert—Hypoglykämie—liegt die primäre Gefahr nicht in Energiedepletion, sondern im Verlust der Signalkapazität. Neuronen erhalten die ATP-Homöostase bis zur späten Glukosedeprivation aufrecht; die kritische Schwelle ist der Verlust von Neurotransmittervorstufen, die für die synaptische Signalgebung erforderlich sind. Das Gehirn „geht nicht der Strom aus\"; es verliert Kommunikationsbandbreite—das biologische Äquivalent zur Signaldegradation in Telekommunikationssystemen trotz ausreichender Stromversorgung.",
        p9: "Die klinische Anrufung „mitochondrialer Dysfunktion\" konfundiert häufig Energieproduktion mit regulatorischer Signalgebung. Mitochondrien weisen veränderte Signalfunktionen auf—Produktion reaktiver Sauerstoffspezies, Calciumpufferung, apoptotische Regulation—bei gleichzeitiger Aufrechterhaltung adäquater ATP-Synthese. Die Organellen dienen als metabolische Sensoren und regulatorische Knotenpunkte, nicht lediglich als Kraftwerke—analog dazu, wie moderne Netzkomponenten sowohl Wirkleistung als auch Systemdienstleistungen (Frequenzregelung, Spannungsstützung) bereitstellen.",
        p10: "Diese Analyse negiert nicht, dass ATP-Synthese, mitochondriale Funktion und Substratverfügbarkeit notwendige Bedingungen für biologische Funktion darstellen. In der Terminologie der Energiesysteme handelt es sich um notwendige, aber nicht hinreichende Randbedingungen. Zellen erhalten die ATP-Homöostase über breite Leistungsbereiche aufrecht; was variiert, ist der regulatorische Verstärkungsfaktor, der die Zugänglichkeit dieser Kapazität bestimmt. Regelungsingenieure begegnen routinemäßig Systemen, in denen die limitierende Randbedingung die Regelungsarchitektur ist, nicht die Energieversorgung. Die Biologie weist dasselbe Prinzip auf.",
        p11: "In der Regelungstechnik sind Verstärkung, Verzögerung und Referenzverfolgung die Determinanten erster Ordnung für die Systemstabilität. Eine Rückkopplungsschleife existiert, wenn der Output eines Systems seinen nachfolgenden Input beeinflusst und damit einen geschlossenen kausalen Pfad erzeugt, der stabilisieren, verstärken oder oszillieren kann. Diese Architektur bestimmt die Stabilität domänenübergreifend—von Spannungsreglern bis zur biologischen Thermoregulation—unabhängig von der Verfügbarkeit energetischen Substrats.",
        p12: "Rückkopplungsregelung ist durch drei essentielle Parameter gekennzeichnet: <em>Verstärkung</em>—Größe der Korrekturantwort auf Abweichung vom Sollwert; <em>Verzögerung</em>—temporaler Lag zwischen Erfassung der Abweichung und Implementierung der Korrektur; und <em>Sollwert</em>—Referenzwert, gegen den der aktuelle Zustand verglichen wird.",
        p13: "Negative Rückkopplung stabilisiert durch Gegenwirkung gegen Abweichungen. Temperaturregelung in Gebäuden und Organismen operiert identisch: Abweichung löst Korrekturantworten aus, die der Abweichung entgegenwirken und das System zum Sollwert zurückführen. Positive Rückkopplung verstärkt initiale Signale und treibt Systeme zu Schwellenübergängen—gleichermaßen zu beobachten in der Ausbreitung elektrischer Fehler und Blutgerinnungskaskaden. Keiner dieser Prozesse erfordert, dass Energie limitierend ist; beide werden durch Signalkinetik und Schleifenarchitektur bestimmt.",
        p14: "Entscheidend ist: Rückkopplungsstabilität ist nicht gleichbedeutend mit Gleichgewicht. Lebende Systeme und AC-Stromnetze operieren beide fernab vom thermodynamischen Gleichgewicht und erhalten dennoch dynamische Stabilität durch kontinuierliche Rückkopplungsanpassung aufrecht. Die biologische Barorezeptor-Blutdruckregulation umfasst verschachtelte Schleifen über Zeitskalen von Millisekunden (neural), zirkadian (hormonal) und chronisch (renal-endokrin)—präzise analog zur hierarchischen Netzregelung, die von automatischer Erzeugungsregelung (Sekunden) über wirtschaftliche Dispatch (Minuten-Stunden) bis zur Kraftwerkseinsatzplanung (Tage) reicht.",
        p15: "<strong>Verzögerung</strong> ist der kritischste Parameter in jedem Regelungssystem. Regelungsingenieure erkennen, dass Phasenverzögerung zwischen Detektion und Antwort stabilisierende Rückkopplung in destabilisierende Oszillation umwandelt. Übersteigt die Verzögerung ein Viertel der natürlichen Periode des Systems, wird negative Rückkopplung effektiv positiv und verstärkt Störungen, anstatt sie zu dämpfen. Dieser Versagensmodus ist ressourcenunabhängig: Ein System mit unbegrenztem Brennstoff und intakter Hardware kann allein aufgrund temporaler Fehlanpassung zwischen Sensorik und Aktorik in katastrophale Oszillation eintreten.",
        p16: "Dieses Prinzip erklärt Produktions-Bestands-Oszillationen in Lieferketten, Netzfrequenzoszillationen durch Regler-Totband des Generators und ultradiane Hormonpulsatilität in endokrinen Achsen. Alle weisen adäquate Ressourcen auf, versagen jedoch aufgrund temporaler Strukturfehlanpassung in Regelkreisen.",
        p17: "Die Unterscheidung zwischen Ressourcenversagen und Regelungsversagen kann durch zwei Modelle formalisiert werden. Ein <strong>Ofenmodell</strong> behandelt Systeme als Input-Output-Wandler, bei denen die Leistung linear mit der Brennstoffverfügbarkeit bis zur Erschöpfung skaliert. Ein <strong>Thermostatmodell</strong> erkennt an, dass Leistung durch regulatorische Sollwerte, Rückkopplungsverstärkungen und temporale Koordination bestimmt wird—Variablen, die trotz reichlichen Brennstoffs katastrophal versagen können.",
        p18: "In Energiesystemen ist diese Unterscheidung trivial: Netzkollaps durch Regelungsversagen sieht völlig anders aus als Blackout durch Erzeugungsdefizit. Bei Ofenversagen stellt Brennstoffzugabe die Funktion wieder her. Bei Thermostatversagen ist Brennstoffzugabe irrelevant; die Regelungsarchitektur muss repariert werden. Dieselbe Unterscheidung gilt für biologische Ermüdung, wird aber durch energetische Sprache verschleiert.",
        p19: "Die Hypothalamus-Hypophysen-Nebennierenrinden-Achse (HPA) demonstriert die aus hierarchischen Regelungssystemen bekannte mehrskalige Rückkopplungsarchitektur. Cortisol übt negative Rückkopplung an mehreren Stellen mit unterschiedlichen Zeitkonstanten aus: schnelle Rückkopplung über Membranrezeptoren (Sekunden-Minuten), intermediäre über genomische Glucocorticoid-Rezeptoren (Stunden) und langsame über Rezeptorexpressions-Remodeling (Tage-Wochen). Diese temporale Schichtung ermöglicht akute Reaktion bei gleichzeitiger Verhinderung chronischer Hyperaktivierung—analog zu schneller Frequenzregelung, automatischer Erzeugungsregelung und langfristiger Kapazitätsplanung im Netzbetrieb.",
        p20: "Adaptive Resistenzphänomene offenbaren die Unterscheidung zwischen Rückkopplungsintegrität und Substratverfügbarkeit. Insulinresistenz repräsentiert Rückkopplungsdesensibilisierung: Chronische Hyperinsulinämie reguliert die Insulinrezeptor-Signalgebung herunter und erfordert progressiv höhere Konzentrationen, um äquivalente Glukoseaufnahme zu erzielen. Das System hat keine Energie erschöpft—Glukose und ATP sind reichlich vorhanden. Vielmehr hat chronische Überstimulation den Signalverstärkungsfaktor verschoben und die Dosis-Wirkungs-Kurve nach rechts verlagert. Dies ist Verstärkungsreduktion durch Aktuatorsättigung, ein Regelungsproblem.",
        p21: "Die prädiktive Kraft von Rückkopplungsrahmenwerken liegt in der mechanistischen Spezifität. Bei gegebenen Schleifenverstärkungs-, Verzögerungs- und Nichtlinearitätsparametern können Regelungsingenieure vorhersagen, ob Systeme unter Störung konvergieren, oszillieren oder divergieren. Energiebasierte Erklärungen fehlt diese Präzision: Die Kenntnis der ATP-Konzentration liefert minimale Vorhersagefähigkeit bezüglich der Systemreaktion auf Herausforderung—ebenso wie die Kenntnis des Tankfüllstands minimale Information über die Regelungssystemstabilität liefert.",
        p22: "Das empirische Studium menschlicher Leistungsfähigkeit umfasst Medizin, Sportphysiologie, Psychologie, Systembiologie und Ingenieurwesen, doch diese Felder operieren mit inkompatiblen Vokabularen, obwohl sie überlappende Phänomene messen. Diese linguistische Fragmentierung verschleiert vereinigende regulatorische Prinzipien, die für Regelungsingenieure selbstevident, für biologische Forscher jedoch unsichtbar sind.",
        p23: "Der Begriff „Stress\" exemplifiziert semantischen Kollaps. In der Werkstofftechnik bezeichnet Stress Kraft pro Flächeneinheit. In der Physiologie bedeutet Stress homöostatische Perturbation. In der Psychologie reflektiert Stress wahrgenommene Anforderungs-Ressourcen-Diskrepanz. In der Endokrinologie bedeutet Stress HPA-Achsen-Aktivierung. Diese Definitionen überlappen minimal, werden jedoch austauschbar verwendet—äquivalent zur Verwendung von „Spannung\" für sowohl Potentialdifferenz als auch Stromfluss in elektrischen Systemen.",
        p24: "„Adaptation\" konfundiert ähnlich Prozesse über temporale und organisatorische Skalen: molekular (Proteinexpression, Sekunden-Stunden), zellulär (Organell-Remodeling, Tage), Organ (Hypertrophie, Wochen), systemisch (Sollwert-Rekalibrierung, Wochen-Monate) und evolutionär (Selektion, Generationen). Dies entspricht der Verwendung von „Regulation\" für sowohl transienten Spannungsabfall als auch langfristige Netzinfrastruktur-Erweiterung.",
        p25: "„Balance\" erscheint pervasiv—Energiebalance, hormonelle Balance—bezeichnet jedoch selten Gleichgewicht im thermodynamischen oder regelungstechnischen Sinne. Biologische Systeme erhalten dynamische Sollwerte durch aktive Regulation aufrecht, nicht durch passive Balance. Endokrine Funktion hängt von Pulsatilität, zirkadianen Rhythmen und kontextabhängigen Verschiebungen ab—aktiv regulierte Asymmetrien. In Energiesystemen sprechen wir nicht von „Frequenzbalance\", sondern von aktiver Frequenzregelung durch kontinuierliche Regelaktion.",
        p26: "Regelungsingenieure verfügen über formalisierte Werkzeuge—Bode-Diagramme, Nyquist-Stabilitätskriterien, Wurzelort-Analyse—die Rückkopplungsdynamiken domänenübergreifend quantifizieren. Diese Werkzeuge sind direkt auf Glukose-Insulin-Regulation und kardiovaskuläre Kontrolle anwendbar, fehlen jedoch weitgehend in der biologischen Literatur. Endokrinologen beschreiben Hormonsekretion als „dysreguliert\", ohne Verstärkung, Phasenreserve oder Oszillationsfrequenz zu quantifizieren. Die Vokabulare überschneiden sich nicht, obwohl sie identische mathematische Strukturen beschreiben.",
        p27: "<strong>Regulation vs. Ressource.</strong> Regulation: Kontrolle des Systemverhaltens durch Signalarchitektur (Rezeptorempfindlichkeit, Rückkopplungsverstärkung, temporale Verzögerungen). Ressource: Verfügbarkeit materiellen Substrats (Sauerstoff, Glukose, Aminosäuren). In der Terminologie von Regelungssystemen: Regulation ist das Regelgesetz; Ressource ist die Stromversorgung.",
        p28: "<strong>Kapazität vs. Leistung.</strong> Kapazität: maximaler potentieller Output unter optimalen Bedingungen. Leistung: tatsächlicher Output unter gegenwärtigen Einschränkungen. Analog zu Nennleistung versus abrufbarer Leistung in Erzeugungssystemen.",
        p29: "<strong>Sollwert vs. Optimierung.</strong> Sollwert: Arbeitspunkt, um den Rückkopplungsmechanismen Outputs stabilisieren. Optimierung: Maximierung einer definierten Zielfunktion. Ingenieurssysteme haben Sollwerte; sie sind nicht notwendigerweise für eine einzelne Leistungsmetrik optimiert.",
        p30: "<strong>Stabilität vs. Effizienz.</strong> Stabilität: Aufrechterhaltung der Funktion trotz Störung. Effizienz: Verhältnis von nützlichem Output zu Gesamtinput. Regelungsingenieure erkennen, dass diese oft invers korreliert sind; kritische Systeme priorisieren Stabilität über Effizienz.",
        p31: "<strong>Verzögerung vs. Mangel.</strong> Verzögerung: temporaler Phasenlag in der Rückkopplungssignalgebung. Mangel: Substratverfügbarkeit unter funktionellem Bedarf. Verzögerung verursacht oszillatorische Instabilität; Mangel verursacht Amplitudenlimitation. Verschiedene Versagensmodi erfordern verschiedene Interventionen.",
        p32: "Die Abhängigkeit von energetischen Metaphern zur Erklärung menschlicher Leistungsfähigkeit reflektiert disziplinäre Konvention statt empirischer Notwendigkeit. Regelungsingenieure unterscheiden routinemäßig Energieverfügbarkeit von Systemstabilität—eine Unterscheidung, die für den Infrastrukturbetrieb fundamental, im biologischen Diskurs jedoch systematisch verletzt wird. Rückkopplungsdynamiken—gekennzeichnet durch Verstärkung, Verzögerung und Sollwertregelung—bieten überlegene Erklärungskraft für Phänomene von akuter Ermüdung bis chronischer regulatorischer Dysfunktion.",
        p33: "Das Fehlen eines geteilten, präzisen Vokabulars über Medizin, Ingenieurwesen und Biologie hinweg hat vereinigende regulatorische Prinzipien verschleiert. Terminologische Disziplin—explizite Grenzen, die Regulation von Ressourcenverfügbarkeit, Kapazität von Leistung, Stabilität von Optimierung unterscheiden—ermöglicht interdisziplinäre Synthese. In komplexen Systemen, seien es elektrische Netze oder biologische Organismen, steuern Informationsarchitekturen die Energieverteilung, anstatt dass Energieverfügbarkeit das Systemverhalten bestimmt.",
        p34: "Die Anerkennung, dass regulatorische Architektur statt Substratverfügbarkeit biologische Leistungsfähigkeit in den meisten Kontexten limitiert, liefert konzeptionelle Grundlagen für eine mechanistisch fundierte Interpretation menschlicher Systemfunktion. Die Prinzipien, die Netzstabilität bestimmen, gelten gleichermaßen für metabolische Stabilität; die Mathematik ist identisch. Rückkopplung, nicht Energie. Architektur, nicht Buchhaltung."
      },

      keys: {
        heading: "SCHLÜSSELWÖRTER",
        feedback: "Rückkopplungsregelung",
        regulation: "Regulation",
        stability: "Systemstabilität",
        performance: "Menschliche Leistungsfähigkeit",
        fatigue: "Ermüdung",
        vocabulary: "Systemvokabular",
        control: "Regelungstechnik"
      },

      refs: {
        heading: "LITERATURVERZEICHNIS"
      }
    },

    footer: {
      tag: "Forschung · Rahmenwerke · Vorausschau",
      social: {
        medium: "MEDIUM",
        linkedin: "LinkedIn",
        x: "X"
      },
      explore: "Erkunden",
      contactTitle: "Kontakt",
      emailLabel: "E-Mail",
      locationLabel: "Standort",
      locationValue: "Ankara · Türkei",
      newsletter: "Newsletter",
      newsletterBody: "Gelegentliche Notizen zu Rahmenwerken, Publikationen und Seminaren. Kein Marketing. Kein Lärm.",
      subscribe: "Abonnieren",
      copyright: "© 2026 GiNOVA",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      backToTop: "Nach oben"
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SPANISH - José Ortega y Gasset: philosophical clarity, intellectual precision
  // ═══════════════════════════════════════════════════════════════════════════
  es: {
    nav: {
      brand1: "innovación alimentaria &",
      brand2: "academia de ciencias",
      paradigm: "Paradigma",
      research: "Investigación",
      publications: "Publicaciones",
      publicationsActive: "Publicaciones",
      education: "Educación",
      people: "Equipo",
      home: "Inicio"
    },

    pub02: {
      pageTitle: "GiNOVA - Retroalimentación, no Energía",

      hero: {
        kicker: "BOSQUE DE ARTÍCULOS<br />— GiNOVA —",
        title: "Retroalimentación, no Energía",
        subtitle: "\" Por qué el Rendimiento Humano Exige un Vocabulario Sistémico \"",
        author1: "<strong>Metin Söylemez</strong>",
        affil1: "MSc. Ingeniería Eléctrica y Electrónica",
        affil2: "Director General — <strong>SASE Energy</strong>",
        author2: "<strong>Kunter Ilalan</strong>",
        affil3: "Depto. de Ingeniería de Alimentos, <strong>METU</strong>",
        affil4: "Fundador &amp; Director, <strong>GiNOVA</strong> FI &amp; SA"
      },

      abstract: {
        heading: "RESUMEN",
        p1: "La investigación sobre el rendimiento humano se apoya en gran medida en explicaciones energéticas tomadas de la termodinámica; sin embargo, los fenómenos clasificados como «déficits de energía» reflejan predominantemente disfunción reguladora y no agotamiento de sustratos. Los ingenieros de control distinguen habitualmente entre disponibilidad energética y estabilidad del sistema—una distinción fundamental para la operación de redes eléctricas, la automatización industrial y las telecomunicaciones.",
        p2: "La presente revisión conceptual aplica principios de teoría de control para demostrar que los bucles de retroalimentación—caracterizados por ganancia, retardo y dinámica del punto de ajuste—proporcionan un poder explicativo superior para comprender las limitaciones del rendimiento, la fatiga y la estabilidad de los sistemas biológicos. Mostramos que los persistentes fracasos del vocabulario entre medicina, psicología e ingeniería ocultan principios reguladores compartidos.",
        p3: "Proponemos un vocabulario sistémico mínimo que distingue la regulación de la disponibilidad de recursos, la capacidad del rendimiento, y la estabilidad de la optimización—clarificando que en los sistemas complejos, ya sean redes eléctricas u organismos biológicos, son las arquitecturas informacionales las que gobiernan la distribución de energía, y no la disponibilidad energética la que determina el comportamiento sistémico."
      },

      body: {
        h1: "I. Los Límites Conceptuales de la «Energía» en el Rendimiento Humano",
        h2: "II. La Retroalimentación como Principio Regulador Universal",
        h3: "III. El Fracaso del Vocabulario y la Fragmentación Interdisciplinar",
        h4: "IV. Hacia un Vocabulario Sistémico Mínimo",
        h5: "Conclusión",
        p1: "En los sistemas de potencia eléctrica, la disponibilidad energética rara vez constituye la restricción determinante para la estabilidad del sistema. La frecuencia de red puede colapsar pese a una capacidad de generación adecuada si el control de potencia reactiva falla o si la sincronización de fase entre generadores se degrada. La inestabilidad de tensión no surge de potencia real insuficiente sino del colapso de la arquitectura de control en la compensación de potencia reactiva. Los sistemas de control de procesos industriales exhiben fallos análogos: un suministro de combustible adecuado no previene la inestabilidad oscilatoria si los retardos sensor-actuador exceden umbrales críticos, convirtiendo la retroalimentación estabilizadora en resonancia desestabilizadora.",
        p2: "Esta distinción entre suficiencia energética e integridad del control es fundamental para la práctica ingenieril pero sistemáticamente violada en el discurso sobre el rendimiento biológico. El término «energía» funciona con precisión en termodinámica e ingeniería de potencia: denota una cantidad escalar conservada medida en julios, gobernada por leyes que especifican eficiencia de conversión y disipación térmica. Aplicado al rendimiento humano, sin embargo, «energía» se vuelve conceptualmente promiscuo, colapsando fenómenos distintos en una única variable explicativa que no puede dar cuenta del comportamiento sistémico observado.",
        p3: "Considérese la fatiga durante la contracción muscular sostenida—el análogo biológico de la carga sostenida en sistemas de potencia. La explicación energética intuitiva postula el agotamiento de ATP como factor limitante; sin embargo, las mediciones directas revelan que los niveles de ATP declinan mínimamente incluso durante el ejercicio exhaustivo. El lactato, históricamente enmarcado como producto de desecho metabólico, es hoy reconocido como molécula señalizadora y sustrato oxidativo. Los mecanismos reales de la fatiga implican el fallo del acoplamiento excitación-contracción: deterioro de la liberación de calcio, despolarización sarcolémica por eflujo de potasio y modulación de canales iónicos por especies reactivas de oxígeno. Se trata de fallos reguladores—colapso del sistema de control pese a sustrato energético adecuado—precisamente análogos a la inestabilidad de red con capacidad de generación suficiente.",
        p4: "La fatiga central exhibe el mismo patrón. El esfuerzo percibido y la limitación voluntaria del rendimiento surgen de mecanismos cerebrales que operan independientemente del estado metabólico periférico. La retroalimentación engañosa—distancia restante falsificada o esfuerzo percibido manipulado—altera significativamente el rendimiento de resistencia sin modificar la fisiología. El modelo psicobiológico posiciona la percepción del esfuerzo como emergente de circuitos comparadores que integran señales aferentes, duración anticipada y valoración motivacional. Se trata de un sistema de control que evalúa patrones de señales, no de un indicador de combustible que mide concentraciones de sustratos.",
        p5: "El síndrome de fatiga crónica demuestra el error categorial a escala patológica. Pese a investigaciones extensivas, no se ha establecido un déficit bioenergético uniforme en pacientes con SFC. La producción de ATP, la respiración mitocondrial y la capacidad oxidativa muestran variabilidad pero ninguna deficiencia definitiva. La evidencia emergente apunta en cambio hacia un procesamiento interoceptivo desregulado: interpretación neural alterada de la aferencia fisiológica y predicción coste-esfuerzo perturbada. El problema reside en la arquitectura de procesamiento de señales—disfunción fisiológica tangible en circuitos neuronales que computan coste del esfuerzo y valor de amenaza. Esto representa el fallo de la circuitería reguladora, no el agotamiento energético.",
        p6: "La confusión lingüística se agrava cuando «energía» se emplea intercambiablemente con propiedades sistémicas distintas. Capacidad denota la salida máxima en condiciones óptimas (análoga a la capacidad nominal en generación). Rendimiento refleja la salida real bajo restricciones actuales, que puede caer muy por debajo de la capacidad debido a límites reguladores (análogo a la potencia despachable restringida por transmisión o límites de potencia reactiva). Motivación involucra circuitos dopaminérgicos de valoración que asignan coste al gasto de esfuerzo. Resiliencia describe el mantenimiento de la estabilidad bajo perturbación (análogo a los márgenes de estabilidad de frecuencia de red). Ninguna se reduce a disponibilidad energética; colapsarlas oscurece las variables gobernantes.",
        p7: "Los sistemas hormonales revelan cómo el «estado energético» biológico se señaliza mediante dinámicas de concentración y patrones temporales en lugar de niveles absolutos de sustratos—un principio familiar en los sistemas de potencia de corriente alterna donde el ángulo de fase y la frecuencia importan más que la magnitud instantánea de tensión. La leptina señaliza las reservas adiposas mediante concentraciones proteicas que modulan circuitos hipotalámicos. Los pulsos de grelina preceden a las comidas esperadas independientemente de la plenitud gástrica. La sensibilidad a la insulina varía circadianamente independientemente de la carga de glucosa, reflejando la regulación por genes reloj de la maquinaria de señalización. Estas son arquitecturas informacionales, no medidores de energía.",
        p8: "Incluso donde el sustrato limita genuinamente la función—hipoglucemia—el peligro primario no es el agotamiento energético sino la pérdida de capacidad de señalización. Las neuronas mantienen la homeostasis del ATP hasta la privación tardía de glucosa; el umbral crítico es la pérdida de precursores de neurotransmisores requeridos para la señalización sináptica. El cerebro no «se queda sin corriente»; pierde ancho de banda de comunicación—el equivalente biológico de la degradación de señal en sistemas de telecomunicaciones pese a una alimentación adecuada.",
        p9: "La invocación clínica de la «disfunción mitocondrial» frecuentemente confunde producción energética con señalización reguladora. Las mitocondrias exhiben funciones de señalización alteradas—producción de especies reactivas de oxígeno, tamponamiento de calcio, regulación apoptótica—mientras mantienen una síntesis de ATP adecuada. Los orgánulos sirven como sensores metabólicos y nodos reguladores, no meramente como centrales eléctricas—de modo análogo a cómo los componentes modernos de red proporcionan tanto potencia real como servicios auxiliares (regulación de frecuencia, soporte de tensión).",
        p10: "Este análisis no niega que la síntesis de ATP, la función mitocondrial y la disponibilidad de sustratos sean condiciones necesarias para la función biológica. En terminología de sistemas de potencia, se trata de restricciones necesarias pero no suficientes. Las células mantienen la homeostasis del ATP a través de amplios rangos de rendimiento; lo que varía es la ganancia reguladora que determina la accesibilidad de esa capacidad. Los ingenieros de control encuentran habitualmente sistemas donde la restricción limitante es la arquitectura de control, no el suministro de energía. La biología exhibe el mismo principio.",
        p11: "En ingeniería de control, la ganancia, el retardo y el seguimiento de referencia son los determinantes de primer orden de la estabilidad del sistema. Un bucle de retroalimentación existe cuando la salida de un sistema influye en su entrada subsiguiente, creando una vía causal cerrada que puede estabilizar, amplificar u oscilar. Esta arquitectura gobierna la estabilidad a través de dominios—desde reguladores de tensión hasta la termorregulación biológica—independientemente de la disponibilidad de sustrato energético.",
        p12: "El control por retroalimentación se caracteriza por tres parámetros esenciales: <em>Ganancia</em>—magnitud de la respuesta correctora a la desviación del punto de ajuste; <em>Retardo</em>—desfase temporal entre la detección de la desviación y la implementación de la corrección; y <em>Punto de ajuste</em>—valor de referencia contra el cual se compara el estado actual.",
        p13: "La retroalimentación negativa estabiliza contrarrestando las desviaciones. La regulación térmica en edificios y organismos opera idénticamente: la desviación desencadena respuestas correctoras que se oponen a la desviación, devolviendo el sistema hacia el punto de ajuste. La retroalimentación positiva amplifica las señales iniciales, impulsando los sistemas hacia transiciones de umbral—observable tanto en la propagación de fallos eléctricos como en las cascadas de coagulación sanguínea. Ninguno de estos procesos requiere que la energía sea limitante; ambos están gobernados por la cinética de señalización y la arquitectura del bucle.",
        p14: "Críticamente, la estabilidad de retroalimentación no es sinónimo de equilibrio. Los sistemas vivos y las redes de potencia de corriente alterna operan ambos lejos del equilibrio termodinámico y sin embargo mantienen estabilidad dinámica mediante ajuste continuo de la retroalimentación. La regulación biológica de la presión arterial por barorreceptores involucra bucles anidados a través de escalas temporales de milisegundos (neural), circadiana (hormonal) y crónica (renal-endocrina)—precisamente análoga al control jerárquico de red que abarca desde el control automático de generación (segundos), al despacho económico (minutos-horas), al compromiso de unidades (días).",
        p15: "El <strong>Retardo</strong> es el parámetro más crítico en cualquier sistema de control. Los ingenieros de control reconocen que el desfase de fase entre detección y respuesta convierte la retroalimentación estabilizadora en oscilación desestabilizadora. Si el retardo excede un cuarto del período natural del sistema, la retroalimentación negativa se vuelve efectivamente positiva, amplificando las perturbaciones en lugar de amortiguarlas. Este modo de fallo es independiente de los recursos: un sistema con combustible ilimitado y hardware intacto puede entrar en oscilación catastrófica únicamente debido a un desajuste temporal entre sensado y actuación.",
        p16: "Este principio explica las oscilaciones producción-inventario en cadenas de suministro, las oscilaciones de frecuencia de red por banda muerta del regulador del generador, y la pulsatilidad hormonal ultradiana en ejes endocrinos. Todos exhiben recursos adecuados pero fallan debido a un desajuste de estructura temporal en los bucles de control.",
        p17: "La distinción entre fallo de recursos y fallo de control puede formalizarse mediante dos modelos. Un <strong>modelo horno</strong> trata los sistemas como convertidores entrada-salida donde el rendimiento escala linealmente con la disponibilidad de combustible hasta el agotamiento. Un <strong>modelo termostato</strong> reconoce que el rendimiento está determinado por puntos de ajuste reguladores, ganancias de retroalimentación y coordinación temporal—variables que pueden fallar catastróficamente pese a combustible abundante.",
        p18: "En sistemas de potencia, esta distinción es trivial: el colapso de red por fallo de control aparece enteramente diferente del apagón por déficit de generación. En el fallo horno, añadir combustible restaura la función. En el fallo termostato, añadir combustible es irrelevante; la arquitectura de control debe ser reparada. La misma distinción aplica a la fatiga biológica pero queda oscurecida por el lenguaje energético.",
        p19: "El eje hipotálamo-hipófisis-suprarrenal (HPA) demuestra la arquitectura de retroalimentación multiescala temporal familiar de los sistemas de control jerárquicos. El cortisol ejerce retroalimentación negativa en sitios múltiples con constantes de tiempo distintas: retroalimentación rápida vía receptores de membrana (segundos-minutos), intermedia vía receptores genómicos glucocorticoides (horas), y lenta vía remodelación de la expresión de receptores (días-semanas). Esta estratificación temporal permite la respuesta aguda mientras previene la hiperactivación crónica—análoga a la respuesta rápida de frecuencia, el control automático de generación y la planificación de capacidad a largo plazo en la operación de red.",
        p20: "Los fenómenos de resistencia adaptativa revelan la distinción entre integridad de la retroalimentación y disponibilidad de sustratos. La resistencia a la insulina representa desensibilización de la retroalimentación: la hiperinsulinemia crónica regula a la baja la señalización del receptor de insulina, requiriendo concentraciones progresivamente más altas para lograr una captación de glucosa equivalente. El sistema no ha agotado la energía—glucosa y ATP son abundantes. Más bien, la sobreestimulación crónica ha desplazado la ganancia de señalización, desplazando hacia la derecha la curva dosis-respuesta. Se trata de reducción de ganancia por saturación del actuador, un problema de control.",
        p21: "El poder predictivo de los marcos de retroalimentación reside en la especificidad mecanística. Dados la ganancia del bucle, el retardo y los parámetros de no linealidad, los ingenieros de control pueden predecir si los sistemas convergen, oscilan o divergen bajo perturbación. Las explicaciones basadas en energía carecen de esta precisión: conocer la concentración de ATP proporciona capacidad predictiva mínima respecto a la respuesta del sistema al desafío—del mismo modo que conocer el nivel del tanque de combustible proporciona información mínima sobre la estabilidad del sistema de control.",
        p22: "El estudio empírico del rendimiento humano abarca medicina, fisiología del ejercicio, psicología, biología de sistemas e ingeniería, sin embargo estos campos operan con vocabularios incompatibles pese a medir fenómenos solapados. Esta fragmentación lingüística oscurece principios reguladores unificadores que son evidentes para los ingenieros de control pero invisibles para los investigadores biológicos.",
        p23: "El término «estrés» ejemplifica el colapso semántico. En ingeniería de materiales, estrés denota fuerza por unidad de área. En fisiología, estrés significa perturbación homeostática. En psicología, estrés refleja desajuste percibido demanda-recursos. En endocrinología, estrés significa activación del eje HPA. Estas definiciones se solapan mínimamente pero se usan intercambiablemente—equivalente a usar «tensión» para significar tanto diferencia de potencial como flujo de corriente en sistemas eléctricos.",
        p24: "«Adaptación» confunde similarmente procesos a través de escalas temporales y organizacionales: molecular (expresión proteica, segundos-horas), celular (remodelación de orgánulos, días), de órgano (hipertrofia, semanas), sistémica (recalibración del punto de ajuste, semanas-meses), y evolutiva (selección, generaciones). Esto equivale a usar «regulación» para describir tanto la caída transitoria de tensión como la expansión a largo plazo de la infraestructura de red.",
        p25: "«Equilibrio» aparece de manera omnipresente—equilibrio energético, equilibrio hormonal—pero rara vez denota equilibrio en el sentido termodinámico o de la teoría del control. Los sistemas biológicos mantienen puntos de ajuste dinámicos mediante regulación activa, no equilibrio pasivo. La función endocrina depende de la pulsatilidad, los ritmos circadianos y los cambios dependientes del contexto—asimetrías activamente reguladas. En sistemas de potencia, no hablamos de «equilibrio de frecuencia» sino de regulación activa de la frecuencia mediante acción de control continua.",
        p26: "Los ingenieros de control disponen de herramientas formalizadas—diagramas de Bode, criterios de estabilidad de Nyquist, análisis del lugar de las raíces—que cuantifican las dinámicas de retroalimentación a través de dominios. Estas herramientas se aplican directamente a la regulación glucosa-insulina y al control cardiovascular pero permanecen en gran medida ausentes de la literatura biológica. Los endocrinólogos describen la secreción hormonal como «desregulada» sin cuantificar ganancia, margen de fase o frecuencia de oscilación. Los vocabularios no se intersectan, pese a describir estructuras matemáticas idénticas.",
        p27: "<strong>Regulación vs. Recurso.</strong> Regulación: control del comportamiento sistémico mediante arquitectura de señalización (sensibilidad de receptores, ganancia de retroalimentación, retardos temporales). Recurso: disponibilidad de sustrato material (oxígeno, glucosa, aminoácidos). En terminología de sistemas de control: la regulación es la ley de control; el recurso es la alimentación.",
        p28: "<strong>Capacidad vs. Rendimiento.</strong> Capacidad: salida potencial máxima en condiciones óptimas. Rendimiento: salida real bajo restricciones actuales. Análogo a capacidad nominal versus potencia despachable en sistemas de generación.",
        p29: "<strong>Punto de ajuste vs. Optimización.</strong> Punto de ajuste: punto de operación alrededor del cual los mecanismos de retroalimentación estabilizan las salidas. Optimización: maximización de una función objetivo definida. Los sistemas de ingeniería tienen puntos de ajuste; no están necesariamente optimizados para una métrica de rendimiento única.",
        p30: "<strong>Estabilidad vs. Eficiencia.</strong> Estabilidad: mantenimiento de la función pese a perturbación. Eficiencia: ratio de salida útil a entrada total. Los ingenieros de control reconocen que estos frecuentemente están inversamente relacionados; los sistemas críticos priorizan la estabilidad sobre la eficiencia.",
        p31: "<strong>Retardo vs. Deficiencia.</strong> Retardo: desfase de fase temporal en la señalización de retroalimentación. Deficiencia: disponibilidad de sustrato por debajo del requerimiento funcional. El retardo causa inestabilidad oscilatoria; la deficiencia causa limitación de amplitud. Modos de fallo diferentes requieren intervenciones diferentes.",
        p32: "La dependencia de metáforas energéticas para explicar el rendimiento humano refleja convención disciplinar en lugar de necesidad empírica. Los ingenieros de control distinguen habitualmente la disponibilidad energética de la estabilidad del sistema—una distinción fundamental para la operación de infraestructuras pero sistemáticamente violada en el discurso biológico. Las dinámicas de retroalimentación—caracterizadas por ganancia, retardo y regulación del punto de ajuste—ofrecen poder explicativo superior para fenómenos que van desde la fatiga aguda hasta la disfunción reguladora crónica.",
        p33: "La ausencia de un vocabulario compartido y preciso entre medicina, ingeniería y biología ha oscurecido principios reguladores unificadores. La disciplina terminológica—fronteras explícitas que distinguen regulación de disponibilidad de recursos, capacidad de rendimiento, estabilidad de optimización—posibilita la síntesis interdisciplinar. En sistemas complejos, ya sean redes eléctricas u organismos biológicos, las arquitecturas informacionales gobiernan la distribución de energía en lugar de la disponibilidad energética determinar el comportamiento sistémico.",
        p34: "Reconocer que la arquitectura reguladora en lugar de la disponibilidad de sustratos limita el rendimiento biológico en la mayoría de los contextos proporciona fundamentos conceptuales para una interpretación mecanísticamente fundamentada de la función sistémica humana. Los principios que gobiernan la estabilidad de red aplican igualmente a la estabilidad metabólica; las matemáticas son idénticas. Retroalimentación, no energía. Arquitectura, no contabilidad."
      },

      keys: {
        heading: "PALABRAS CLAVE",
        feedback: "Control por Retroalimentación",
        regulation: "Regulación",
        stability: "Estabilidad Sistémica",
        performance: "Rendimiento Humano",
        fatigue: "Fatiga",
        vocabulary: "Vocabulario Sistémico",
        control: "Teoría del Control"
      },

      refs: {
        heading: "REFERENCIAS"
      }
    },

    footer: {
      tag: "Investigación · Marcos · Prospectiva",
      social: {
        medium: "MEDIUM",
        linkedin: "LinkedIn",
        x: "X"
      },
      explore: "Explorar",
      contactTitle: "Contacto",
      emailLabel: "Correo",
      locationLabel: "Ubicación",
      locationValue: "Ankara · Turquía",
      newsletter: "Boletín",
      newsletterBody: "Notas ocasionales sobre marcos, publicaciones y seminarios. Sin marketing. Sin ruido.",
      subscribe: "Suscribirse",
      copyright: "© 2026 GiNOVA",
      privacy: "Privacidad",
      terms: "Términos",
      backToTop: "Volver arriba"
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ARABIC - Ibn Khaldun classical scholarly authority
  // ═══════════════════════════════════════════════════════════════════════════
  ar: {
    nav: {
      brand1: "ابتكار الغذاء &",
      brand2: "أكاديمية العلوم",
      paradigm: "النموذج",
      research: "البحث",
      publications: "المنشورات",
      publicationsActive: "المنشورات",
      education: "التعليم",
      people: "الفريق",
      home: "الرئيسية"
    },

    pub02: {
      pageTitle: "GiNOVA - التغذية الراجعة، لا الطاقة",

      hero: {
        kicker: "غابة المقالات<br />— GiNOVA —",
        title: "التغذية الراجعة، لا الطاقة",
        subtitle: "\" لماذا يحتاج الأداء البشري إلى مفردات منظومية \"",
        author1: "<strong>متين سويلميز</strong>",
        affil1: "ماجستير الهندسة الكهربائية والإلكترونية",
        affil2: "المدير العام — <strong>SASE Energy</strong>",
        author2: "<strong>قونتر إيلالان</strong>",
        affil3: "قسم هندسة الأغذية، <strong>METU</strong>",
        affil4: "المؤسس والمدير، <strong>GiNOVA</strong> FI &amp; SA"
      },

      abstract: {
        heading: "الملخص",
        p1: "تعتمد أبحاث الأداء البشري بشكل كبير على التفسيرات الطاقوية المستعارة من الديناميكا الحرارية، إلا أن الظواهر الموصوفة بـ\"عجز الطاقة\" تعكس في الغالب اختلالاً تنظيمياً وليس استنفاداً للركائز. يميز مهندسو التحكم بشكل روتيني بين توافر الطاقة واستقرار النظام—وهو تمييز أساسي لتشغيل شبكات الطاقة والأتمتة الصناعية والاتصالات.",
        p2: "تُطبّق هذه المراجعة المفاهيمية مبادئ نظرية التحكم لإثبات أن حلقات التغذية الراجعة—المتميزة بالكسب والتأخير وديناميكيات نقطة الضبط—توفر قوة تفسيرية متفوقة لفهم قيود الأداء والإرهاق واستقرار النظام البيولوجي. نُظهر أن الإخفاقات المستمرة في المفردات عبر الطب وعلم النفس والهندسة تحجب المبادئ التنظيمية المشتركة.",
        p3: "نقترح مفردات منظومية دنيا تميز بين التنظيم وتوافر الموارد، والقدرة والأداء، والاستقرار والتحسين، موضحين أنه في الأنظمة المعقدة—سواء كانت شبكات كهربائية أو كائنات بيولوجية—تحكم البنى المعلوماتية توزيع الطاقة بدلاً من أن يحدد توافر الطاقة سلوك النظام."
      },

      body: {
        h1: "أولاً: الحدود المفاهيمية لـ\"الطاقة\" في الأداء البشري",
        h2: "ثانياً: التغذية الراجعة كمبدأ تنظيمي شامل",
        h3: "ثالثاً: إخفاق المفردات والتجزئة العابرة للتخصصات",
        h4: "رابعاً: نحو مفردات منظومية دنيا",
        h5: "الخاتمة",
        p1: "في أنظمة الطاقة الكهربائية، نادراً ما يكون توافر الطاقة هو القيد المُحدِّد لاستقرار النظام. يمكن أن ينهار تردد الشبكة رغم كفاية قدرة التوليد إذا فشل التحكم في الطاقة التفاعلية أو تدهور التزامن الطوري بين المولدات.",
        p2: "هذا التمييز بين كفاية الطاقة وسلامة التحكم أساسي للممارسة الهندسية لكنه يُنتهك منهجياً في خطاب الأداء البيولوجي.",
        p3: "تأمل الإرهاق أثناء الانقباض العضلي المستمر—النظير البيولوجي للحمل المستدام في أنظمة الطاقة.",
        p4: "يُظهر الإرهاق المركزي النمط ذاته. ينشأ الجهد المُدرَك والحد الإرادي للأداء من آليات دماغية تعمل باستقلالية عن الحالة الأيضية المحيطية.",
        p5: "تُبرهن متلازمة التعب المزمن على الخطأ الفئوي على نطاق مرضي.",
        p6: "يتفاقم الارتباك اللغوي حين تُستخدم \"الطاقة\" تبادلياً مع خصائص منظومية متمايزة.",
        p7: "تكشف الأنظمة الهرمونية كيف يُشار إلى \"حالة الطاقة\" البيولوجية عبر ديناميكيات التركيز والأنماط الزمنية لا مستويات الركيزة المطلقة.",
        p8: "حتى حيث تحد الركيزة فعلاً من الوظيفة—نقص سكر الدم—فإن الخطر الأولي ليس استنفاد الطاقة بل فقدان قدرة الإشارات.",
        p9: "غالباً ما يخلط الاستدعاء السريري لـ\"الخلل الميتوكوندري\" بين إنتاج الطاقة والإشارات التنظيمية.",
        p10: "لا ينفي هذا التحليل أن تخليق ATP والوظيفة الميتوكوندرية وتوافر الركيزة شروط ضرورية للوظيفة البيولوجية.",
        p11: "في هندسة التحكم، الكسب والتأخير وتتبع المرجع هي المحددات من الدرجة الأولى لاستقرار النظام.",
        p12: "يتميز التحكم بالتغذية الراجعة بثلاثة معاملات أساسية: الكسب والتأخير ونقطة الضبط.",
        p13: "تُثبّت التغذية الراجعة السالبة بمقاومة الانحرافات.",
        p14: "الحرج أن استقرار التغذية الراجعة ليس مرادفاً للتوازن.",
        p15: "<strong>التأخير</strong> هو المعامل الأكثر حرجية في أي نظام تحكم.",
        p16: "يفسر هذا المبدأ تذبذبات الإنتاج-المخزون في سلاسل التوريد.",
        p17: "يمكن إضفاء الطابع الرسمي على التمييز بين فشل الموارد وفشل التحكم عبر نموذجين.",
        p18: "في أنظمة الطاقة، هذا التمييز تافه: يبدو انهيار الشبكة من فشل التحكم مختلفاً تماماً عن انقطاع التيار من عجز التوليد.",
        p19: "يُظهر المحور الوطائي-النخامي-الكظري بنية التغذية الراجعة متعددة المقاييس الزمنية المألوفة من أنظمة التحكم الهرمية.",
        p20: "تكشف ظواهر المقاومة التكيفية التمييز بين سلامة التغذية الراجعة وتوافر الركيزة.",
        p21: "تكمن القوة التنبؤية لأطر التغذية الراجعة في الخصوصية الآلية.",
        p22: "تمتد الدراسة التجريبية للأداء البشري عبر الطب وفسيولوجيا التمرين وعلم النفس وبيولوجيا الأنظمة والهندسة.",
        p23: "يمثل مصطلح \"الإجهاد\" الانهيار الدلالي.",
        p24: "يخلط \"التكيف\" بالمثل بين العمليات عبر المقاييس الزمنية والتنظيمية.",
        p25: "يظهر \"التوازن\" بشكل منتشر—توازن الطاقة، التوازن الهرموني—لكنه نادراً ما يدل على التوازن بالمعنى الديناميكي الحراري أو نظرية التحكم.",
        p26: "يمتلك مهندسو التحكم أدوات مُقننة—مخططات بود، معايير استقرار نيكويست، تحليل مسار الجذور.",
        p27: "<strong>التنظيم مقابل المورد.</strong>",
        p28: "<strong>القدرة مقابل الأداء.</strong>",
        p29: "<strong>نقطة الضبط مقابل التحسين.</strong>",
        p30: "<strong>الاستقرار مقابل الكفاءة.</strong>",
        p31: "<strong>التأخير مقابل العجز.</strong>",
        p32: "يعكس الاعتماد على الاستعارات الطاقوية لتفسير الأداء البشري اتفاقية تخصصية لا ضرورة تجريبية.",
        p33: "أدى غياب مفردات مشتركة ودقيقة عبر الطب والهندسة والبيولوجيا إلى حجب المبادئ التنظيمية الموحدة.",
        p34: "يوفر الاعتراف بأن البنية التنظيمية لا توافر الركيزة تحد من الأداء البيولوجي في معظم السياقات أسساً مفاهيمية لتفسير مؤسس آلياً لوظيفة النظام البشري."
      },

      keys: {
        heading: "الكلمات المفتاحية",
        feedback: "التحكم بالتغذية الراجعة",
        regulation: "التنظيم",
        stability: "استقرار النظام",
        performance: "الأداء البشري",
        fatigue: "الإرهاق",
        vocabulary: "المفردات المنظومية",
        control: "نظرية التحكم"
      },

      refs: {
        heading: "المراجع"
      }
    },

    footer: {
      tag: "البحث · الأطر · الاستشراف",
      social: {
        medium: "MEDIUM",
        linkedin: "LinkedIn",
        x: "X"
      },
      explore: "استكشف",
      contactTitle: "التواصل",
      emailLabel: "البريد الإلكتروني",
      locationLabel: "الموقع",
      locationValue: "أنقرة · تركيا",
      newsletter: "النشرة الإخبارية",
      newsletterBody: "ملاحظات عرضية حول الأطر والمنشورات والندوات. بدون تسويق. بدون ضجيج.",
      subscribe: "اشترك",
      copyright: "© 2026 GiNOVA",
      privacy: "الخصوصية",
      terms: "الشروط",
      backToTop: "العودة للأعلى"
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FRENCH - Michel Foucault: conceptual precision, analytical clarity
  // ═══════════════════════════════════════════════════════════════════════════
  fr: {
    nav: {
      brand1: "innovation alimentaire &",
      brand2: "académie des sciences",
      paradigm: "Paradigme",
      research: "Recherche",
      publications: "Publications",
      publicationsActive: "Publications",
      education: "Formation",
      people: "Équipe",
      home: "Accueil"
    },

    pub02: {
      pageTitle: "GiNOVA - Rétroaction, non Énergie",

      hero: {
        kicker: "FORÊT D'ARTICLES<br />— GiNOVA —",
        title: "Rétroaction, non Énergie",
        subtitle: "\" Pourquoi la Performance Humaine Requiert un Vocabulaire Systémique \"",
        author1: "<strong>Metin Söylemez</strong>",
        affil1: "MSc. Génie Électrique et Électronique",
        affil2: "Directeur Général — <strong>SASE Energy</strong>",
        author2: "<strong>Kunter Ilalan</strong>",
        affil3: "Dép. de Génie Alimentaire, <strong>METU</strong>",
        affil4: "Fondateur &amp; Directeur, <strong>GiNOVA</strong> FI &amp; SA"
      },

      abstract: {
        heading: "RÉSUMÉ",
        p1: "La recherche sur la performance humaine s'appuie largement sur des explications énergétiques empruntées à la thermodynamique, pourtant les phénomènes qualifiés de « déficits énergétiques » reflètent principalement une dysfonction régulatoire plutôt qu'un épuisement de substrat. Les ingénieurs en contrôle distinguent routinièrement la disponibilité énergétique de la stabilité systémique—une distinction fondamentale pour l'exploitation des réseaux électriques, l'automatisation industrielle et les télécommunications.",
        p2: "Cette revue conceptuelle applique les principes de la théorie du contrôle pour démontrer que les boucles de rétroaction—caractérisées par le gain, le délai et la dynamique du point de consigne—offrent un pouvoir explicatif supérieur pour comprendre les limitations de performance, la fatigue et la stabilité des systèmes biologiques. Nous montrons que les échecs persistants du vocabulaire entre médecine, psychologie et ingénierie obscurcissent des principes régulateurs partagés.",
        p3: "Nous proposons un vocabulaire systémique minimal distinguant la régulation de la disponibilité des ressources, la capacité de la performance, et la stabilité de l'optimisation, clarifiant que dans les systèmes complexes—qu'il s'agisse de réseaux électriques ou d'organismes biologiques—les architectures informationnelles gouvernent la distribution d'énergie plutôt que la disponibilité énergétique ne détermine le comportement systémique."
      },

      body: {
        h1: "I. Les Limites Conceptuelles de l'« Énergie » dans la Performance Humaine",
        h2: "II. La Rétroaction comme Principe Régulateur Universel",
        h3: "III. L'Échec du Vocabulaire et la Fragmentation Interdisciplinaire",
        h4: "IV. Vers un Vocabulaire Systémique Minimal",
        h5: "Conclusion",
        p1: "Dans les systèmes de puissance électrique, la disponibilité énergétique constitue rarement la contrainte déterminante pour la stabilité systémique. La fréquence du réseau peut s'effondrer malgré une capacité de génération adéquate si le contrôle de la puissance réactive échoue ou si la synchronisation de phase entre générateurs se dégrade. L'instabilité de tension survient non pas d'une puissance réelle insuffisante mais de l'effondrement de l'architecture de contrôle dans la compensation de puissance réactive. Les systèmes de contrôle de processus industriels exhibent des défaillances analogues : un approvisionnement en combustible adéquat n'empêche pas l'instabilité oscillatoire si les délais capteur-actionneur dépassent les seuils critiques, convertissant la rétroaction stabilisatrice en résonance déstabilisatrice.",
        p2: "Cette distinction entre suffisance énergétique et intégrité du contrôle est fondamentale pour la pratique de l'ingénierie mais systématiquement violée dans le discours sur la performance biologique. Le terme « énergie » fonctionne avec précision en thermodynamique et en ingénierie de puissance : il désigne une quantité scalaire conservée mesurée en joules, gouvernée par des lois spécifiant l'efficacité de conversion et la dissipation thermique. Appliqué à la performance humaine, cependant, « énergie » devient conceptuellement promiscue, effondrant des phénomènes distincts en une seule variable explicative incapable de rendre compte du comportement systémique observé.",
        p3: "Considérons la fatigue durant la contraction musculaire soutenue—l'analogue biologique de la charge soutenue dans les systèmes de puissance. L'explication énergétique intuitive postule l'épuisement d'ATP comme facteur limitant, pourtant les mesures directes révèlent que les niveaux d'ATP déclinent minimalement même durant l'exercice exhaustif. Le lactate, historiquement cadré comme déchet métabolique, est maintenant reconnu comme molécule de signalisation et substrat oxydatif. Les mécanismes réels de la fatigue impliquent la défaillance du couplage excitation-contraction : altération de la libération de calcium, dépolarisation sarcolemmale par efflux de potassium, et modulation des canaux ioniques par les espèces réactives de l'oxygène. Ce sont des défaillances régulatoires—effondrement du système de contrôle malgré un substrat énergétique adéquat—précisément analogues à l'instabilité de réseau avec une capacité de génération suffisante.",
        p4: "La fatigue centrale exhibe le même schéma. L'effort perçu et la limitation volontaire de performance émergent de mécanismes cérébraux opérant indépendamment du statut métabolique périphérique. La rétroaction trompeuse—distance restante falsifiée ou effort perçu manipulé—altère significativement la performance d'endurance sans modifier la physiologie. Le modèle psychobiologique positionne la perception de l'effort comme émergeant de circuits comparateurs intégrant signaux afférents, durée anticipée et évaluation motivationnelle. C'est un système de contrôle évaluant des patterns de signaux, non une jauge de carburant mesurant des concentrations de substrat.",
        p5: "Le syndrome de fatigue chronique démontre l'erreur catégorielle à l'échelle pathologique. Malgré des investigations extensives, un déficit bioénergétique uniforme n'a pas été établi chez les patients SFC. La production d'ATP, la respiration mitochondriale et la capacité oxydative montrent une variabilité mais aucune déficience définitive. Les preuves émergentes pointent plutôt vers un traitement intéroceptif dysrégulé : interprétation neurale altérée de l'afférence physiologique et prédiction coût-effort perturbée. Le problème réside dans l'architecture de traitement des signaux—dysfonction physiologique tangible dans les circuits neuraux computant le coût de l'effort et la valeur de menace. Ceci représente la défaillance de la circuiterie régulatoire, non l'épuisement énergétique.",
        p6: "La confusion linguistique s'aggrave quand « énergie » est utilisée de manière interchangeable avec des propriétés systémiques distinctes. La capacité dénote la sortie maximale en conditions optimales (analogue à la capacité nominale en génération). La performance reflète la sortie réelle sous les contraintes actuelles, qui peut tomber bien en dessous de la capacité en raison des limites régulatoires (analogue à la puissance dispatchable contrainte par la transmission ou les limites de puissance réactive). La motivation implique des circuits d'évaluation dopaminergiques assignant un coût à la dépense d'effort. La résilience décrit le maintien de la stabilité sous perturbation (analogue aux marges de stabilité de fréquence du réseau). Aucune ne se réduit à la disponibilité énergétique ; les effondrer obscurcit les variables gouvernantes.",
        p7: "Les systèmes hormonaux révèlent comment le « statut énergétique » biologique est signalé à travers des dynamiques de concentration et des patterns temporels plutôt que des niveaux absolus de substrat—un principe familier des systèmes de puissance AC où l'angle de phase et la fréquence comptent plus que la magnitude de tension instantanée. La leptine signale les réserves adipeuses à travers des concentrations protéiques modulant les circuits hypothalamiques. Les impulsions de ghréline précèdent les repas attendus indépendamment de la plénitude gastrique. La sensibilité à l'insuline varie de manière circadienne indépendamment de la charge glucosique, reflétant la régulation par les gènes horloge de la machinerie de signalisation. Ce sont des architectures informationnelles, non des compteurs d'énergie.",
        p8: "Même là où le substrat limite véritablement la fonction—hypoglycémie—le danger primaire n'est pas l'épuisement énergétique mais la perte de capacité de signalisation. Les neurones maintiennent l'homéostasie ATP jusqu'à la privation tardive de glucose ; le seuil critique est la perte des précurseurs de neurotransmetteurs requis pour la signalisation synaptique. Le cerveau ne « tombe pas en panne de courant » ; il perd de la bande passante de communication—l'équivalent biologique de la dégradation du signal dans les systèmes de télécommunication malgré une alimentation adéquate.",
        p9: "L'invocation clinique de la « dysfonction mitochondriale » confond souvent production énergétique et signalisation régulatoire. Les mitochondries exhibent des fonctions de signalisation altérées—production d'espèces réactives de l'oxygène, tampon calcique, régulation apoptotique—tout en maintenant une synthèse d'ATP adéquate. Les organelles servent de capteurs métaboliques et de nœuds régulateurs, non simplement de centrales électriques—analogue à comment les composants modernes de réseau fournissent à la fois puissance réelle et services auxiliaires (régulation de fréquence, support de tension).",
        p10: "Cette analyse ne nie pas que la synthèse d'ATP, la fonction mitochondriale et la disponibilité de substrat soient des conditions nécessaires pour la fonction biologique. En terminologie des systèmes de puissance, ce sont des contraintes nécessaires mais non suffisantes. Les cellules maintiennent l'homéostasie ATP sur de larges plages de performance ; ce qui varie est le gain régulateur déterminant l'accessibilité de cette capacité. Les ingénieurs en contrôle rencontrent routinièrement des systèmes où la contrainte limitante est l'architecture de contrôle, non l'approvisionnement énergétique. La biologie exhibe le même principe.",
        p11: "En ingénierie du contrôle, le gain, le délai et le suivi de référence sont les déterminants de premier ordre de la stabilité systémique. Une boucle de rétroaction existe quand la sortie d'un système influence son entrée subséquente, créant un chemin causal fermé qui peut stabiliser, amplifier ou osciller. Cette architecture gouverne la stabilité à travers les domaines—des régulateurs de tension à la thermorégulation biologique—indépendamment de la disponibilité de substrat énergétique.",
        p12: "Le contrôle par rétroaction est caractérisé par trois paramètres essentiels : <em>Gain</em>—magnitude de la réponse corrective à la déviation du point de consigne ; <em>Délai</em>—décalage temporel entre la détection de la déviation et l'implémentation de la correction ; et <em>Point de consigne</em>—valeur de référence contre laquelle l'état actuel est comparé.",
        p13: "La rétroaction négative stabilise en contrecarrant les déviations. La régulation thermique dans les bâtiments et les organismes opère de manière identique : la déviation déclenche des réponses correctives s'opposant à la déviation, ramenant le système vers le point de consigne. La rétroaction positive amplifie les signaux initiaux, poussant les systèmes vers des transitions de seuil—visible tant dans la propagation de défauts électriques que dans les cascades de coagulation sanguine. Aucun de ces processus ne requiert que l'énergie soit limitante ; les deux sont gouvernés par la cinétique de signalisation et l'architecture de boucle.",
        p14: "De manière critique, la stabilité de rétroaction n'est pas synonyme d'équilibre. Les systèmes vivants et les réseaux de puissance AC opèrent tous deux loin de l'équilibre thermodynamique et maintiennent pourtant une stabilité dynamique à travers un ajustement continu de la rétroaction. La régulation biologique de la pression artérielle par les barorécepteurs implique des boucles imbriquées à travers des échelles temporelles de millisecondes (neural), circadienne (hormonal), et chronique (rénal-endocrine)—précisément analogue au contrôle hiérarchique de réseau s'étendant du contrôle automatique de génération (secondes), au dispatch économique (minutes-heures), à l'engagement des unités (jours).",
        p15: "Le <strong>Délai</strong> est le paramètre le plus critique dans tout système de contrôle. Les ingénieurs en contrôle reconnaissent que le déphasage entre détection et réponse convertit la rétroaction stabilisatrice en oscillation déstabilisatrice. Si le délai excède un quart de la période naturelle du système, la rétroaction négative devient effectivement positive, amplifiant les perturbations plutôt que de les amortir. Ce mode de défaillance est indépendant des ressources : un système avec du carburant illimité et un matériel intact peut entrer en oscillation catastrophique uniquement en raison d'un décalage temporel entre capteur et actionneur.",
        p16: "Ce principe explique les oscillations production-inventaire dans les chaînes d'approvisionnement, les oscillations de fréquence de réseau dues à la bande morte du régulateur de générateur, et la pulsatilité hormonale ultradienne dans les axes endocriniens. Tous exhibent des ressources adéquates mais échouent en raison d'un décalage de structure temporelle dans les boucles de contrôle.",
        p17: "La distinction entre défaillance de ressources et défaillance de contrôle peut être formalisée à travers deux modèles. Un <strong>modèle fournaise</strong> traite les systèmes comme des convertisseurs entrée-sortie où la performance évolue linéairement avec la disponibilité de carburant jusqu'à l'épuisement. Un <strong>modèle thermostat</strong> reconnaît que la performance est déterminée par les points de consigne régulateurs, les gains de rétroaction et la coordination temporelle—des variables qui peuvent échouer catastrophiquement malgré un carburant abondant.",
        p18: "Dans les systèmes de puissance, cette distinction est triviale : l'effondrement du réseau par défaillance de contrôle apparaît entièrement différent de la panne par déficit de génération. Dans la défaillance fournaise, ajouter du carburant restaure la fonction. Dans la défaillance thermostat, ajouter du carburant est sans pertinence ; l'architecture de contrôle doit être réparée. La même distinction s'applique à la fatigue biologique mais est obscurcie par le langage énergétique.",
        p19: "L'axe hypothalamo-hypophyso-surrénalien (HPA) démontre l'architecture de rétroaction multi-échelle temporelle familière des systèmes de contrôle hiérarchiques. Le cortisol exerce une rétroaction négative sur de multiples sites avec des constantes de temps distinctes : rétroaction rapide via les récepteurs membranaires (secondes-minutes), intermédiaire via les récepteurs génomiques glucocorticoïdes (heures), et lente via le remodelage de l'expression des récepteurs (jours-semaines). Cette stratification temporelle permet la réponse aiguë tout en prévenant l'hyperactivation chronique—analogue à la réponse rapide de fréquence, au contrôle automatique de génération et à la planification de capacité à long terme dans l'exploitation du réseau.",
        p20: "Les phénomènes de résistance adaptative révèlent la distinction entre intégrité de la rétroaction et disponibilité de substrat. La résistance à l'insuline représente une désensibilisation de la rétroaction : l'hyperinsulinémie chronique régule à la baisse la signalisation du récepteur à l'insuline, nécessitant des concentrations progressivement plus élevées pour obtenir une captation équivalente de glucose. Le système n'a pas épuisé l'énergie—glucose et ATP sont abondants. Plutôt, la surstimulation chronique a décalé le gain de signalisation, déplaçant vers la droite la courbe dose-réponse. C'est une réduction de gain par saturation de l'actionneur, un problème de contrôle.",
        p21: "Le pouvoir prédictif des cadres de rétroaction réside dans la spécificité mécanistique. Étant donné le gain de boucle, le délai et les paramètres de non-linéarité, les ingénieurs en contrôle peuvent prédire si les systèmes convergent, oscillent ou divergent sous perturbation. Les explications basées sur l'énergie manquent de cette précision : connaître la concentration d'ATP fournit une capacité prédictive minimale concernant la réponse du système au défi—tout comme connaître le niveau du réservoir de carburant fournit une information minimale sur la stabilité du système de contrôle.",
        p22: "L'étude empirique de la performance humaine s'étend à travers médecine, physiologie de l'exercice, psychologie, biologie des systèmes et ingénierie, pourtant ces domaines opèrent avec des vocabulaires incompatibles malgré la mesure de phénomènes qui se chevauchent. Cette fragmentation linguistique obscurcit des principes régulateurs unificateurs qui sont évidents pour les ingénieurs en contrôle mais invisibles pour les chercheurs biologiques.",
        p23: "Le terme « stress » exemplifie l'effondrement sémantique. En ingénierie des matériaux, stress dénote la force par unité de surface. En physiologie, stress signifie perturbation homéostatique. En psychologie, stress reflète un décalage perçu demande-ressources. En endocrinologie, stress signifie activation de l'axe HPA. Ces définitions se chevauchent minimalement pourtant sont utilisées de manière interchangeable—équivalent à utiliser « tension » pour signifier à la fois différence de potentiel et flux de courant dans les systèmes électriques.",
        p24: "« Adaptation » confond similairement des processus à travers des échelles temporelles et organisationnelles : moléculaire (expression protéique, secondes-heures), cellulaire (remodelage des organelles, jours), d'organe (hypertrophie, semaines), systémique (recalibration du point de consigne, semaines-mois), et évolutionnaire (sélection, générations). C'est équivalent à utiliser « régulation » pour décrire à la fois la chute de tension transitoire et l'expansion de l'infrastructure de réseau à long terme.",
        p25: "« Équilibre » apparaît de manière omniprésente—équilibre énergétique, équilibre hormonal—pourtant dénote rarement l'équilibre au sens thermodynamique ou de la théorie du contrôle. Les systèmes biologiques maintiennent des points de consigne dynamiques à travers une régulation active, non un équilibre passif. La fonction endocrine dépend de la pulsatilité, des rythmes circadiens et des décalages dépendants du contexte—des asymétries activement régulées. Dans les systèmes de puissance, nous ne parlons pas d'« équilibre de fréquence » mais de régulation active de la fréquence à travers une action de contrôle continue.",
        p26: "Les ingénieurs en contrôle disposent d'outils formalisés—diagrammes de Bode, critères de stabilité de Nyquist, analyse du lieu des racines—quantifiant les dynamiques de rétroaction à travers les domaines. Ces outils s'appliquent directement à la régulation glucose-insuline et au contrôle cardiovasculaire mais restent largement absents de la littérature biologique. Les endocrinologues décrivent la sécrétion hormonale comme « dysrégulée » sans quantifier gain, marge de phase ou fréquence d'oscillation. Les vocabulaires ne se croisent pas, malgré la description de structures mathématiques identiques.",
        p27: "<strong>Régulation vs. Ressource.</strong> Régulation : contrôle du comportement systémique à travers l'architecture de signalisation (sensibilité des récepteurs, gain de rétroaction, délais temporels). Ressource : disponibilité de substrat matériel (oxygène, glucose, acides aminés). En terminologie des systèmes de contrôle : la régulation est la loi de contrôle ; la ressource est l'alimentation.",
        p28: "<strong>Capacité vs. Performance.</strong> Capacité : sortie potentielle maximale en conditions optimales. Performance : sortie réelle sous les contraintes actuelles. Analogue à la capacité nominale versus la puissance dispatchable dans les systèmes de génération.",
        p29: "<strong>Point de consigne vs. Optimisation.</strong> Point de consigne : point d'opération autour duquel les mécanismes de rétroaction stabilisent les sorties. Optimisation : maximisation d'une fonction objectif définie. Les systèmes d'ingénierie ont des points de consigne ; ils ne sont pas nécessairement optimisés pour une seule métrique de performance.",
        p30: "<strong>Stabilité vs. Efficacité.</strong> Stabilité : maintien de la fonction malgré la perturbation. Efficacité : ratio de sortie utile à entrée totale. Les ingénieurs en contrôle reconnaissent que ceux-ci sont souvent inversement corrélés ; les systèmes critiques priorisent la stabilité sur l'efficacité.",
        p31: "<strong>Délai vs. Déficience.</strong> Délai : déphasage temporel dans la signalisation de rétroaction. Déficience : disponibilité de substrat en dessous du besoin fonctionnel. Le délai cause une instabilité oscillatoire ; la déficience cause une limitation d'amplitude. Des modes de défaillance différents requièrent des interventions différentes.",
        p32: "La dépendance aux métaphores énergétiques pour expliquer la performance humaine reflète une convention disciplinaire plutôt qu'une nécessité empirique. Les ingénieurs en contrôle distinguent routinièrement disponibilité énergétique et stabilité systémique—une distinction fondamentale pour l'exploitation des infrastructures mais systématiquement violée dans le discours biologique. Les dynamiques de rétroaction—caractérisées par gain, délai et régulation du point de consigne—offrent un pouvoir explicatif supérieur pour des phénomènes allant de la fatigue aiguë à la dysfonction régulatoire chronique.",
        p33: "L'absence d'un vocabulaire partagé et précis à travers médecine, ingénierie et biologie a obscurci des principes régulateurs unificateurs. La discipline terminologique—des frontières explicites distinguant régulation de disponibilité des ressources, capacité de performance, stabilité d'optimisation—permet la synthèse interdisciplinaire. Dans les systèmes complexes, qu'il s'agisse de réseaux électriques ou d'organismes biologiques, les architectures informationnelles gouvernent la distribution d'énergie plutôt que la disponibilité énergétique ne détermine le comportement systémique.",
        p34: "Reconnaître que l'architecture régulatoire plutôt que la disponibilité de substrat limite la performance biologique dans la plupart des contextes fournit des fondations conceptuelles pour une interprétation mécanistiquement fondée de la fonction systémique humaine. Les principes gouvernant la stabilité de réseau s'appliquent également à la stabilité métabolique ; les mathématiques sont identiques. Rétroaction, non énergie. Architecture, non comptabilité."
      },

      keys: {
        heading: "MOTS-CLÉS",
        feedback: "Contrôle par Rétroaction",
        regulation: "Régulation",
        stability: "Stabilité Systémique",
        performance: "Performance Humaine",
        fatigue: "Fatigue",
        vocabulary: "Vocabulaire Systémique",
        control: "Théorie du Contrôle"
      },

      refs: {
        heading: "RÉFÉRENCES"
      }
    },

    footer: {
      tag: "Recherche · Cadres · Prospective",
      social: {
        medium: "MEDIUM",
        linkedin: "LinkedIn",
        x: "X"
      },
      explore: "Explorer",
      contactTitle: "Contact",
      emailLabel: "Email",
      locationLabel: "Lieu",
      locationValue: "Ankara · Turquie",
      newsletter: "Bulletin",
      newsletterBody: "Notes occasionnelles sur les cadres, publications et séminaires. Pas de marketing. Pas de bruit.",
      subscribe: "S'abonner",
      copyright: "© 2026 GiNOVA",
      privacy: "Confidentialité",
      terms: "Conditions",
      backToTop: "Retour en haut"
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // RUSSIAN - Mikhail Bakhtin's systematic depth
  // ═══════════════════════════════════════════════════════════════════════════
  ru: {
    nav: {
      brand1: "пищевые инновации &",
      brand2: "научная академия",
      paradigm: "Парадигма",
      research: "Исследования",
      publications: "Публикации",
      publicationsActive: "Публикации",
      education: "Образование",
      people: "Команда",
      home: "Главная"
    },

    pub02: {
      pageTitle: "GiNOVA - Обратная связь, а не энергия",

      hero: {
        kicker: "ЛЕС СТАТЕЙ<br />— GiNOVA —",
        title: "Обратная связь, а не энергия",
        subtitle: "\" Почему человеческая работоспособность нуждается в системном словаре \"",
        author1: "<strong>Метин Сёйлемез</strong>",
        affil1: "MSc. Электротехника и электроника",
        affil2: "Генеральный директор — <strong>SASE Energy</strong>",
        author2: "<strong>Кунтер Илалан</strong>",
        affil3: "Каф. пищевой инженерии, <strong>METU</strong>",
        affil4: "Основатель &amp; директор, <strong>GiNOVA</strong> FI &amp; SA"
      },

      abstract: {
        heading: "АННОТАЦИЯ",
        p1: "Исследования человеческой работоспособности в значительной степени опираются на энергетические объяснения, заимствованные из термодинамики, однако явления, обозначаемые как \"энергетические дефициты\", преимущественно отражают регуляторную дисфункцию, а не истощение субстрата. Инженеры по управлению рутинно различают энергетическую доступность и системную стабильность—различие, фундаментальное для работы энергосетей, промышленной автоматизации и телекоммуникаций.",
        p2: "Данный концептуальный обзор применяет принципы теории управления, чтобы продемонстрировать, что петли обратной связи—характеризуемые усилением, задержкой и динамикой уставки—обеспечивают превосходную объяснительную силу для понимания ограничений работоспособности, утомления и стабильности биологических систем. Мы показываем, что устойчивые терминологические сбои между медициной, психологией и инженерией затемняют общие регуляторные принципы.",
        p3: "Мы предлагаем минимальный системный словарь, различающий регуляцию и доступность ресурсов, мощность и работоспособность, стабильность и оптимизацию, поясняя, что в сложных системах—будь то электросети или биологические организмы—информационные архитектуры управляют распределением энергии, а не энергетическая доступность определяет системное поведение."
      },

      body: {
        h1: "I. Концептуальные пределы \"энергии\" в человеческой работоспособности",
        h2: "II. Обратная связь как универсальный регуляторный принцип",
        h3: "III. Терминологический сбой и междисциплинарная фрагментация",
        h4: "IV. К минимальному системному словарю",
        h5: "Заключение",
        p1: "В электроэнергетических системах энергетическая доступность редко является определяющим ограничением системной стабильности. Частота сети может обрушиться, несмотря на достаточную генерирующую мощность, если управление реактивной мощностью отказывает или фазовая синхронизация между генераторами деградирует.",
        p2: "Это различие между энергетической достаточностью и целостностью управления фундаментально для инженерной практики, но систематически нарушается в дискурсе о биологической работоспособности.",
        p3: "Рассмотрим утомление при устойчивом мышечном сокращении—биологический аналог устойчивой нагрузки в энергосистемах.",
        p4: "Центральное утомление демонстрирует тот же паттерн. Воспринимаемое усилие и произвольное ограничение работоспособности возникают из мозговых механизмов, функционирующих независимо от периферического метаболического статуса.",
        p5: "Синдром хронической усталости демонстрирует категориальную ошибку в патологическом масштабе.",
        p6: "Лингвистическая путаница усугубляется, когда \"энергия\" используется взаимозаменяемо с различными системными свойствами.",
        p7: "Гормональные системы показывают, как биологический \"энергетический статус\" сигнализируется через динамику концентраций и временные паттерны, а не абсолютные уровни субстрата.",
        p8: "Даже там, где субстрат действительно ограничивает функцию—гипогликемия—первичная опасность не в истощении энергии, а в потере сигнальной способности.",
        p9: "Клиническое обращение к \"митохондриальной дисфункции\" часто смешивает производство энергии с регуляторной сигнализацией.",
        p10: "Этот анализ не отрицает, что синтез АТФ, митохондриальная функция и доступность субстрата являются необходимыми условиями для биологической функции.",
        p11: "В инженерии управления усиление, задержка и отслеживание опорного сигнала являются детерминантами первого порядка для системной стабильности.",
        p12: "Управление с обратной связью характеризуется тремя существенными параметрами: усилением, задержкой и уставкой.",
        p13: "Отрицательная обратная связь стабилизирует, противодействуя отклонениям.",
        p14: "Критически важно: стабильность обратной связи не синонимична равновесию.",
        p15: "<strong>Задержка</strong>—наиболее критичный параметр в любой системе управления.",
        p16: "Этот принцип объясняет колебания производство-запасы в цепях поставок.",
        p17: "Различие между отказом ресурсов и отказом управления может быть формализовано через две модели.",
        p18: "В энергосистемах это различие тривиально: коллапс сети от отказа управления выглядит совершенно иначе, чем блэкаут от дефицита генерации.",
        p19: "Гипоталамо-гипофизарно-надпочечниковая ось (ГГН) демонстрирует многомасштабную архитектуру обратной связи, знакомую из иерархических систем управления.",
        p20: "Феномены адаптивной резистентности выявляют различие между целостностью обратной связи и доступностью субстрата.",
        p21: "Предсказательная сила фреймворков обратной связи заключается в механистической специфичности.",
        p22: "Эмпирическое изучение человеческой работоспособности охватывает медицину, физиологию упражнений, психологию, системную биологию и инженерию.",
        p23: "Термин \"стресс\" иллюстрирует семантический коллапс.",
        p24: "\"Адаптация\" аналогично смешивает процессы через временные и организационные масштабы.",
        p25: "\"Баланс\" появляется повсеместно—энергетический баланс, гормональный баланс—но редко обозначает равновесие в термодинамическом или управленческо-теоретическом смысле.",
        p26: "Инженеры управления располагают формализованными инструментами—диаграммами Боде, критериями устойчивости Найквиста, анализом корневого годографа.",
        p27: "<strong>Регуляция vs. Ресурс.</strong>",
        p28: "<strong>Мощность vs. Работоспособность.</strong>",
        p29: "<strong>Уставка vs. Оптимизация.</strong>",
        p30: "<strong>Стабильность vs. Эффективность.</strong>",
        p31: "<strong>Задержка vs. Дефицит.</strong>",
        p32: "Зависимость от энергетических метафор для объяснения человеческой работоспособности отражает дисциплинарную конвенцию, а не эмпирическую необходимость.",
        p33: "Отсутствие общего, точного словаря между медициной, инженерией и биологией затемнило объединяющие регуляторные принципы.",
        p34: "Признание того, что регуляторная архитектура, а не доступность субстрата, ограничивает биологическую работоспособность в большинстве контекстов, обеспечивает концептуальные основания для механистически обоснованной интерпретации функции человеческой системы."
      },

      keys: {
        heading: "КЛЮЧЕВЫЕ СЛОВА",
        feedback: "Управление с обратной связью",
        regulation: "Регуляция",
        stability: "Системная стабильность",
        performance: "Человеческая работоспособность",
        fatigue: "Утомление",
        vocabulary: "Системный словарь",
        control: "Теория управления"
      },

      refs: {
        heading: "ЛИТЕРАТУРА"
      }
    },

    footer: {
      tag: "Исследования · Фреймворки · Форсайт",
      social: {
        medium: "MEDIUM",
        linkedin: "LinkedIn",
        x: "X"
      },
      explore: "Исследовать",
      contactTitle: "Контакты",
      emailLabel: "Email",
      locationLabel: "Местоположение",
      locationValue: "Анкара · Турция",
      newsletter: "Рассылка",
      newsletterBody: "Периодические заметки о фреймворках, публикациях и семинарах. Без маркетинга. Без шума.",
      subscribe: "Подписаться",
      copyright: "© 2026 GiNOVA",
      privacy: "Конфиденциальность",
      terms: "Условия",
      backToTop: "Наверх"
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHINESE - 鲁迅 (Lu Xun) modern scholarly clarity
  // ═══════════════════════════════════════════════════════════════════════════
  zh: {
    nav: {
      brand1: "食品创新 &",
      brand2: "科学学院",
      paradigm: "范式",
      research: "研究",
      publications: "出版物",
      publicationsActive: "出版物",
      education: "教育",
      people: "团队",
      home: "首页"
    },

    pub02: {
      pageTitle: "GiNOVA - 反馈，而非能量",

      hero: {
        kicker: "文章森林<br />— GiNOVA —",
        title: "反馈，而非能量",
        subtitle: "\" 人类绩效为何需要系统词汇 \"",
        author1: "<strong>梅廷·索伊莱梅兹</strong>",
        affil1: "理学硕士，电气与电子工程",
        affil2: "总经理 — <strong>SASE Energy</strong>",
        author2: "<strong>昆特尔·伊拉兰</strong>",
        affil3: "食品工程系，<strong>METU</strong>",
        affil4: "创始人 &amp; 主任，<strong>GiNOVA</strong> FI &amp; SA"
      },

      abstract: {
        heading: "摘要",
        p1: "人类绩效研究严重依赖借用自热力学的能量解释，然而被标记为\"能量不足\"的现象主要反映调节功能障碍而非底物耗竭。控制工程师常规区分能量可用性与系统稳定性——这一区分对电网运行、工业自动化和电信至关重要。",
        p2: "本概念综述应用控制理论原理证明，以增益、延迟和设定点动态为特征的反馈回路，为理解绩效限制、疲劳和生物系统稳定性提供优越的解释力。我们表明，医学、心理学和工程学之间持续的词汇失效掩盖了共同的调节原理。",
        p3: "我们提出最小系统词汇，区分调节与资源可用性、容量与绩效、稳定性与优化，阐明在复杂系统中——无论是电网还是生物有机体——信息架构支配能量分配，而非能量可用性决定系统行为。"
      },

      body: {
        h1: "一、人类绩效中\"能量\"的概念局限",
        h2: "二、反馈作为普遍调节原理",
        h3: "三、词汇失效与跨学科碎片化",
        h4: "四、迈向最小系统词汇",
        h5: "结论",
        p1: "在电力系统中，能量可用性很少是系统稳定性的约束条件。若无功功率控制失效或发电机间相位同步退化，电网频率可能在发电容量充足的情况下崩溃。",
        p2: "能量充足与控制完整性之间的这一区分是工程实践的基础，但在生物绩效话语中被系统性地违反。",
        p3: "考虑持续肌肉收缩期间的疲劳——电力系统中持续负载的生物类比。",
        p4: "中枢疲劳展现相同模式。感知努力和自愿绩效限制源于独立于外周代谢状态运作的大脑机制。",
        p5: "慢性疲劳综合征在病理尺度上展示了范畴错误。",
        p6: "当\"能量\"与不同系统属性可互换使用时，语言混淆加剧。",
        p7: "激素系统揭示生物\"能量状态\"如何通过浓度动态和时间模式而非绝对底物水平来信号传导。",
        p8: "即使在底物真正限制功能的地方——低血糖——主要危险不是能量耗竭而是信号传导能力丧失。",
        p9: "\"线粒体功能障碍\"的临床调用经常将能量生产与调节信号传导混为一谈。",
        p10: "本分析不否认ATP合成、线粒体功能和底物可用性是生物功能的必要条件。",
        p11: "在控制工程中，增益、延迟和参考跟踪是系统稳定性的一阶决定因素。",
        p12: "反馈控制以三个基本参数为特征：增益、延迟和设定点。",
        p13: "负反馈通过抵消偏差来稳定。",
        p14: "关键的是，反馈稳定性不等同于平衡。",
        p15: "<strong>延迟</strong>是任何控制系统中最关键的参数。",
        p16: "这一原理解释了供应链中的生产-库存振荡。",
        p17: "资源失效与控制失效之间的区别可以通过两个模型来形式化。",
        p18: "在电力系统中，这一区别是微不足道的：控制失效导致的电网崩溃看起来与发电不足导致的停电完全不同。",
        p19: "下丘脑-垂体-肾上腺轴（HPA）展示了层级控制系统所熟悉的多时间尺度反馈架构。",
        p20: "适应性抵抗现象揭示了反馈完整性与底物可用性之间的区别。",
        p21: "反馈框架的预测力在于机制特异性。",
        p22: "人类绩效的实证研究跨越医学、运动生理学、心理学、系统生物学和工程学。",
        p23: "\"压力\"一词体现了语义崩溃。",
        p24: "\"适应\"同样混淆了跨时间和组织尺度的过程。",
        p25: "\"平衡\"普遍出现——能量平衡、激素平衡——但很少表示热力学或控制理论意义上的平衡。",
        p26: "控制工程师拥有形式化工具——伯德图、奈奎斯特稳定性准则、根轨迹分析。",
        p27: "<strong>调节与资源。</strong>",
        p28: "<strong>容量与绩效。</strong>",
        p29: "<strong>设定点与优化。</strong>",
        p30: "<strong>稳定性与效率。</strong>",
        p31: "<strong>延迟与缺乏。</strong>",
        p32: "依赖能量隐喻来解释人类绩效反映的是学科惯例而非经验必要性。",
        p33: "医学、工程学和生物学之间缺乏共享的、精确的词汇，掩盖了统一的调节原理。",
        p34: "认识到调节架构而非底物可用性在大多数情况下限制生物绩效，为机制性地理解人类系统功能提供了概念基础。"
      },

      keys: {
        heading: "关键词",
        feedback: "反馈控制",
        regulation: "调节",
        stability: "系统稳定性",
        performance: "人类绩效",
        fatigue: "疲劳",
        vocabulary: "系统词汇",
        control: "控制理论"
      },

      refs: {
        heading: "参考文献"
      }
    },

    footer: {
      tag: "研究 · 框架 · 前瞻",
      social: {
        medium: "MEDIUM",
        linkedin: "LinkedIn",
        x: "X"
      },
      explore: "探索",
      contactTitle: "联系",
      emailLabel: "邮箱",
      locationLabel: "位置",
      locationValue: "安卡拉 · 土耳其",
      newsletter: "通讯",
      newsletterBody: "关于框架、出版物和研讨会的偶尔笔记。无营销。无噪音。",
      subscribe: "订阅",
      copyright: "© 2026 GiNOVA",
      privacy: "隐私",
      terms: "条款",
      backToTop: "返回顶部"
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // JAPANESE - 丸山眞男 (Maruyama Masao) analytical precision
  // ═══════════════════════════════════════════════════════════════════════════
  ja: {
    nav: {
      brand1: "食品イノベーション &",
      brand2: "科学アカデミー",
      paradigm: "パラダイム",
      research: "研究",
      publications: "出版物",
      publicationsActive: "出版物",
      education: "教育",
      people: "チーム",
      home: "ホーム"
    },

    pub02: {
      pageTitle: "GiNOVA - エネルギーではなくフィードバック",

      hero: {
        kicker: "論文の森<br />— GiNOVA —",
        title: "エネルギーではなくフィードバック",
        subtitle: "\" 人間のパフォーマンスがシステム語彙を必要とする理由 \"",
        author1: "<strong>メティン・ソイレメズ</strong>",
        affil1: "修士（電気電子工学）",
        affil2: "ゼネラルマネージャー — <strong>SASE Energy</strong>",
        author2: "<strong>クンター・イララン</strong>",
        affil3: "食品工学部、<strong>METU</strong>",
        affil4: "創設者 &amp; ディレクター、<strong>GiNOVA</strong> FI &amp; SA"
      },

      abstract: {
        heading: "要旨",
        p1: "人間のパフォーマンス研究は熱力学から借用したエネルギー的説明に大きく依存しているが、「エネルギー不足」と分類される現象は主に基質枯渇ではなく調節機能障害を反映している。制御エンジニアは日常的にエネルギー可用性とシステム安定性を区別する——これは電力網運用、産業自動化、通信にとって根本的な区別である。",
        p2: "この概念的レビューは制御理論の原則を適用して、ゲイン、遅延、設定点ダイナミクスによって特徴づけられるフィードバックループが、パフォーマンス制限、疲労、生物学的システム安定性を理解するための優れた説明力を提供することを実証する。医学、心理学、工学にまたがる持続的な語彙の失敗が共有される調節原理を隠蔽していることを示す。",
        p3: "調節と資源可用性、容量とパフォーマンス、安定性と最適化を区別する最小限のシステム語彙を提案し、複雑なシステム——電力網であれ生物有機体であれ——において、情報アーキテクチャがエネルギー分配を支配し、エネルギー可用性がシステム挙動を決定するのではないことを明確にする。"
      },

      body: {
        h1: "I. 人間のパフォーマンスにおける「エネルギー」の概念的限界",
        h2: "II. 普遍的調節原理としてのフィードバック",
        h3: "III. 語彙の失敗と学際的断片化",
        h4: "IV. 最小限のシステム語彙に向けて",
        h5: "結論",
        p1: "電力システムにおいて、エネルギー可用性がシステム安定性の拘束条件となることは稀である。無効電力制御が失敗するか、発電機間の位相同期が劣化すれば、十分な発電容量があっても系統周波数は崩壊しうる。",
        p2: "エネルギー充足と制御完全性のこの区別は工学実践の基本であるが、生物学的パフォーマンスの言説では体系的に違反されている。",
        p3: "持続的筋収縮中の疲労を考えよう——電力システムにおける持続負荷の生物学的類似物である。",
        p4: "中枢性疲労は同じパターンを示す。知覚される努力と自発的パフォーマンス制限は、末梢代謝状態とは独立して機能する脳メカニズムから生じる。",
        p5: "慢性疲労症候群は病理学的スケールでカテゴリーエラーを実証する。",
        p6: "「エネルギー」が異なるシステム特性と交換可能に使用されると、言語的混乱は悪化する。",
        p7: "ホルモンシステムは、生物学的「エネルギー状態」が絶対基質レベルではなく濃度ダイナミクスと時間パターンを通じてシグナル伝達されることを明らかにする。",
        p8: "基質が真に機能を制限する場合でさえ——低血糖——主要な危険はエネルギー枯渇ではなくシグナル伝達能力の喪失である。",
        p9: "「ミトコンドリア機能障害」の臨床的引用は、しばしばエネルギー生産と調節シグナル伝達を混同する。",
        p10: "この分析は、ATP合成、ミトコンドリア機能、基質可用性が生物学的機能の必要条件であることを否定しない。",
        p11: "制御工学において、ゲイン、遅延、参照追従はシステム安定性の一次決定因子である。",
        p12: "フィードバック制御は三つの本質的パラメータによって特徴づけられる：ゲイン、遅延、設定点。",
        p13: "負のフィードバックは偏差に対抗することで安定化する。",
        p14: "重要なことに、フィードバック安定性は平衡と同義ではない。",
        p15: "<strong>遅延</strong>はあらゆる制御システムにおいて最も重要なパラメータである。",
        p16: "この原理はサプライチェーンにおける生産-在庫振動を説明する。",
        p17: "資源障害と制御障害の区別は二つのモデルを通じて形式化できる。",
        p18: "電力システムでは、この区別は自明である：制御障害による系統崩壊は発電不足による停電とは全く異なって見える。",
        p19: "視床下部-下垂体-副腎軸（HPA）は、階層的制御システムから馴染み深いマルチタイムスケールフィードバックアーキテクチャを実証する。",
        p20: "適応的抵抗現象はフィードバック完全性と基質可用性の区別を明らかにする。",
        p21: "フィードバックフレームワークの予測力は機構的特異性にある。",
        p22: "人間のパフォーマンスの経験的研究は医学、運動生理学、心理学、システム生物学、工学にまたがる。",
        p23: "「ストレス」という用語は意味論的崩壊を例示する。",
        p24: "「適応」も同様に時間的・組織的スケールにまたがるプロセスを混同する。",
        p25: "「バランス」は遍在的に現れる——エネルギーバランス、ホルモンバランス——しかし熱力学的または制御理論的意味での平衡を示すことは稀である。",
        p26: "制御エンジニアは形式化されたツールを持つ——ボード線図、ナイキスト安定性基準、根軌跡解析。",
        p27: "<strong>調節 vs. 資源。</strong>",
        p28: "<strong>容量 vs. パフォーマンス。</strong>",
        p29: "<strong>設定点 vs. 最適化。</strong>",
        p30: "<strong>安定性 vs. 効率。</strong>",
        p31: "<strong>遅延 vs. 欠乏。</strong>",
        p32: "人間のパフォーマンスを説明するためのエネルギー的メタファーへの依存は、経験的必要性ではなく分野の慣習を反映している。",
        p33: "医学、工学、生物学にまたがる共有された正確な語彙の不在が、統一的な調節原理を隠蔽してきた。",
        p34: "基質可用性ではなく調節アーキテクチャがほとんどの文脈で生物学的パフォーマンスを制限することを認識することは、人間システム機能の機構に基づいた解釈のための概念的基盤を提供する。"
      },

      keys: {
        heading: "キーワード",
        feedback: "フィードバック制御",
        regulation: "調節",
        stability: "システム安定性",
        performance: "人間のパフォーマンス",
        fatigue: "疲労",
        vocabulary: "システム語彙",
        control: "制御理論"
      },

      refs: {
        heading: "参考文献"
      }
    },

    footer: {
      tag: "研究 · フレームワーク · 先見",
      social: {
        medium: "MEDIUM",
        linkedin: "LinkedIn",
        x: "X"
      },
      explore: "探索",
      contactTitle: "連絡先",
      emailLabel: "メール",
      locationLabel: "所在地",
      locationValue: "アンカラ · トルコ",
      newsletter: "ニュースレター",
      newsletterBody: "フレームワーク、出版物、セミナーに関する時折のメモ。マーケティングなし。ノイズなし。",
      subscribe: "購読",
      copyright: "© 2026 GiNOVA",
      privacy: "プライバシー",
      terms: "利用規約",
      backToTop: "トップへ戻る"
    }
  }

});