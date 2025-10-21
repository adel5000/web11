// ====== EVENTS DATA (1..15) ======
// Each event: title, dateStr (human), location, description (long), images[], map {lat,lng}, category
const events = {
  1: {
    title: 'ليلة الجاز في دمشق',
    dateStr: '12 أكتوبر 2025',
    location: 'مسرح القباني، دمشق، سوريا',
    description: `تعود ليلة الجاز في دمشق للنسخة السنوية الخامسة، محولة مسرح القباني التاريخي إلى ملاذ للإيقاع واللحن. ستضم الأمسية عروضاً من ألمع الموسيقيين السوريين في مجال الجاز، مزجاً بين الأصوات الكلاسيكية والحديثة في جو حميم.

        سيستمتع الضيوف بعزف منفرد حالم للساكسفون، وعزف ارتجالي للبيانو، وجو دافئ مع إضاءة ناعمة وأكشاك طعام فاخرة في الصالة الخارجية. سواء كنت من عشاق الجاز المخلصين أو جديداً على هذا النوع الموسيقي، تعد هذه الفعالية بليلة من الأناقة والإبداع والمتعة الموسيقية الخالصة.`,
    images: ['assets/img/1.1.jpg', 'assets/img/1.2.jpeg', 'assets/img/1.3.png'],

    map: { lat: 33.5138, lng: 36.2765 },
    category: 'music'
  },
  2: {
    title: 'معرض حماة للفن والثقافة',
    dateStr: '15 أكتوبر 2025',
    location: 'المركز الثقافي، حماة، سوريا',
    description: `يعرض معرض حماة للفن والثقافة التنوع المذهل للإبداع السوري - من الخط التقليدي إلى التجهيزات الطليعية. يدعو موضوع هذا العام "النهضة عبر الفن" أكثر من 60 فناناً من جميع أنحاء البلاد لعرض لوحات ومنحوتات وأعمال متعددة الوسائط.

        سيتمكن الزوار أيضاً من حضور جلسات رسم حية، وورش عمل إبداعية للأطفال، وعروض ثقافية تحيي الفلكلور السوري. يستمر المعرض لمدة خمسة أيام، محولاً المركز الثقافي إلى مكان لقاء نابض بالفنانين والطلاب والمهتمين.`,
    images: [
      'assets/img/2.1.jpeg',
      'assets/img/2.2.webp',
      'assets/img/2.3.webp'
    ],
    map: { lat: 35.1318, lng: 36.7578 },
    category: 'art'
  },
  3: {
    title: 'منتدى حلب التكنولوجي 2025',
    dateStr: '5 نوفمبر 2025',
    location: 'مركز حلب للابتكار، حلب، سوريا',
    description: `يجمع منتدى حلب التكنولوجي 2025 المبتكرين والمهندين ورواد الأعمال لمناقشة مستقبل التكنولوجيا في سوريا. على مدى ثلاثة أيام، سينخرط المشاركون في جلسات رئيسية وعروض للشركات الناشئة وجلسات تفاعلية تركز على الذكاء الاصطناعي والتكنولوجيا المالية والطاقة المتجددة.

        تركز نسخة هذا العام على "بناء مستقبل رقمي مستدام"، مشجعة التعاون بين المطورين الشباب وقادة الصناعة المخضرمين. سيستمتع الحضور بمساحات للتواصل، وأكشاك عرض، وفرص للإرشاد من خبراء محليين ودوليين.`,
    images: [
      'assets/img/3.1.jpeg',
      'assets/img/3.2.jpeg',
      'assets/img/3.3.webp',
      'assets/img/3.4.webp'
    ],
    map: { lat: 36.2021, lng: 37.1343 },
    category: 'tech'
  },
  4: {
    title: 'ماراثون مدينة حماة',
    dateStr: '20 أكتوبر 2025',
    location: 'ضفاف نهر العاصي، حماة، سوريا',
    description: `اركض من أجل الصحة والوحدة والمتعة في ماراثون مدينة حماة السنوي! ترحب الفعالية بالعدائين من جميع المستويات، مقدمة مسارات 5 كم و10 كم ونصف الماراثون على طول ضفاف نهر العاصي الخلابة. سيقوم متطوعون وفرق تشجيع باصطفاف الشوارع لتشجيع المشاركين طوال السباق.

        إلى جانب المنافسة، يحتفل الماراثون بروح المجتمع - مع مسارح موسيقية، ومناطق ترطيب، واحتفالات ما بعد السباق تشمل أكشاك طعام محلية وأنشطة عائلية. تذهب جميع العائدات لدعم المبادرات الصحية للأطفال المحتاجين في حماة.`,
    images: ['assets/img/4.1.webp', 'assets/img/4.2.jpg', 'assets/img/4.3.jpg'],
    map: { lat: 35.1318, lng: 36.7578 },
    category: 'sports'
  },
  5: {
    title: 'مهرجان دمشق للطعام',
    dateStr: '1 ديسمبر 2025',
    location: 'سوق الحميدية، دمشق، سوريا',
    description: `مهرجان دمشق للطعام هو احتفال طهوي بنكهات سوريا الغنية وتراثها الغذائي. من الشاورما على الطريقة الشارعية إلى الحلويات الدمشقية الفاخرة، يجمع هذا الحدث الطهاة والمطاعم وعشاق الطعام من جميع أنحاء البلاد.

        يمكن للزوار الاستمتاع بعروض طهي حية، وجلسات تذوق، وورش عمل حول الوصفات التقليدية. جو المهرجان مليء بروائح التوابل والضحك والموسيقى - مقدماً طعماً حقيقياً للثقافة السورية في عطلة نهاية أسبوع لا تُنسى.`,
    images: ['assets/img/5.1.jpg', 'assets/img/5.2.jpg', 'assets/img/5.3.jpeg'],
    map: { lat: 33.5138, lng: 36.2765 },
    category: 'food'
  },
  6: {
    title: 'حفلة الروك في اللاذقية',
    dateStr: '22 نوفمبر 2025',
    location: 'مسرح الكورنيش، اللاذقية، سوريا',
    description: `على خلفية غروب الشمس المتوسطي، تعتبر حفلة الروك في اللاذقية حدثاً يجب حضوره لعشاق الموسيقى. تضم أفضل فرق الروك المستقلة السورية، تنبض الليلة بعروض عالية الطاقة وأجواء ساحلية.

        تجعل شاحنات الطعام، وأكشاك الحرف اليدوية، ومناطق الجلوس المفتوحة الحدث مثالياً لمجموعات الأصدقاء أو العائلات الباحثة عن الاسترخاء والاستمتاع بإيقاع الأمواج. أحضر كرسي الشاطئ وارقص الليلة بعيداً بجانب البحر.`,
    images: ['assets/img/6.1.jpeg', 'assets/img/6.2.jpeg'],
    map: { lat: 35.4974, lng: 35.7916 },
    category: 'music'
  },
  7: {
    title: 'معرض النحت الحديث - دمشق',
    dateStr: '25 أغسطس 2025',
    location: 'رواق دمشق الفني، دمشق، سوريا',
    description: `يسلط هذا المعرض الضوء على تطور النحت السوري من خلال أعمال فنانين ناشئين ومخضرمين. من القطع الرخامية المجردة إلى التجهيزات المعدنية، يدعو معرض النحت الحديث الزوار لتجربة الشكل والملمس والعاطفة كما لم يحدث من قبل.

        تضم الفعالية أيضاً جولات إرشادية، وجلسات أسئلة وأجوبة مع الفنانين، وورش عمل تفاعلية للطلاب المهتمين بالفن ثلاثي الأبعاد. سيستضيف فناء الرواق تجمعات ليلية تحت النجوم مع عروض موسيقية حية.`,
    images: ['assets/img/7.1.jpg', 'assets/img/7.2.webp'],
    map: { lat: 33.5138, lng: 36.2765 },
    category: 'art'
  },
  8: {
    title: 'هاكاثون سوريا 2025',
    dateStr: '10 سبتمبر 2025',
    location: 'قاعة جامعة تشرين، دمشق، سوريا',
    description: `هاكاثون سوريا 2025 هو ماراثون ابتكار لمدة 48 ساعة يتحدى المشاركين لإنشاء حلول تكنولوجية مؤثرة. سيتعاون المطورون والمصممون ورواد الأعمال لبناء نماذج أولية تعالج مشاكل العالم الحقيقي.

        تقدم الفعالية جلسات إرشادية، وفرص للتواصل، وجوائز لأفضل المشاريع. إنها مساحة نشطة حيث يلتقي الإبداع بالتكنولوجيا، مشجعة الشباب السوريين على تجاوز الحدود والابتكار من أجل مستقبل أفضل.`,
    images: [
      'assets/img/8.1.jpeg',
      'assets/img/8.2.jpeg',
      'assets/img/8.3.avif',
      'assets/img/8.4.avif'
    ],
    map: { lat: 33.5138, lng: 36.2765 },
    category: 'tech'
  },
  9: {
    title: 'كأس طرطوس للكرة الطائرة الشاطئية',
    dateStr: '15 أغسطس 2025',
    location: 'شاطئ كورنيش طرطوس، طرطوس، سوريا',
    description: `يلتقي الصيف بالرياضة في كأس طرطوس للكرة الطائرة الشاطئية - بطولة مثيرة لمدة يومين تضم فرقاً هاوية ومحترفة من جميع أنحاء سوريا. يجمع الحدث بين المنافسة الرياضية والترفيه الساحلي.

        يمكن للمتفرجين الاسترخاء على الرمال، والاستمتاع بموسيقى الدي جي الحية، واستكشاف أكشاك الطعام التي تقدم مشروبات منعشة ووجبات خفيفة. تخلق المباريات المسائية تحت الأضواء الكاشفة تجربة شاطئية لا تُنسى.`,
    images: ['assets/img/9.1.jpg', 'assets/img/9.2.jpg'],
    map: { lat: 34.8841, lng: 35.8869 },
    category: 'sports'
  },
  10: {
    title: 'سوق النباتيين - دمشق',
    dateStr: '10 أكتوبر 2025',
    location: 'أبو رمانة، دمشق، سوريا',
    description: `يحتفل سوق النباتيين بالعيش الصحي المستدام مع مجموعة من الأطعمة النباتية والمنتجات الصديقة للبيئة. ستعرض البائعون المحليون كل شيء من الحلويات النباتية إلى الصابون اليدوي ومستحضرات التجميل الطبيعية.

        يمكن للزوار حضور محاضرات عن التغذية، وعروض طهي، وورش عمل حول عدم إهدار الموارد - كل ذلك أثناء الاستمتاع بموسيقى حية في أجواء خضراء مسترخية.`,
    images: [
      'assets/img/10.1.webp',
      'assets/img/10.2.jpg',
      'assets/img/10.3.webp',
      'assets/img/10.4.jpg'
    ],
    map: { lat: 33.5192, lng: 36.2913 },
    category: 'food'
  },
  11: {
    title: 'سينما الهواء الطلق - قلعة حلب',
    dateStr: '18 سبتمبر 2025',
    location: 'حديقة القلعة، حلب، سوريا',
    description: `تحت الجدران المهيبة لقلعة حلب، يمكن لعشاق السينما الاستمتاع بأفلام كلاسيكية ومعاصرة معروضة على شاشة خارجية عملاقة. أحضر بطانيتك وانضم لمئات عشاق السينما في ليلة دافئة تحت النجوم.

        تضم الفعالية أفلاماً سورية قصيرة، وأفلاماً كلاسيكية عالمية، وساحة طعام صغيرة تقدم الفشار ووجبات خفيفة محلية. تبدأ العروض عند غروب الشمس كل مساء.`,
    images: [
      'assets/img/11.1.jpg',
      'assets/img/11.2.jpg',
      'assets/img/11.3.jpg'
    ],
    map: { lat: 36.199, lng: 37.1591 },
    category: 'art'
  },
  12: {
    title: 'لقاء الشركات الناشئة - حمص',
    dateStr: '8 نوفمبر 2025',
    location: 'مساحة العمل المشترك، حمص، سوريا',
    description: `لقاء الشركات الناشئة في حمص هو المكان الذي تلتقي فيه الأفكار بالفرصة. يجتمع رواد الأعمال والمستثمرون وعشاق التكنولوجيا لتبادل الخبرات، وعرض الشركات الناشئة، واستكشاف فرص التعاون.

        تضم الفعالية جلسات رئيسية، وعروض للشركات الناشئة، وساعات إرشاد فردية مع خبراء من مختلف الصناعات. إنها المساحة المثالية لتوسيع شبكتك وتطوير رؤيتك.`,
    images: ['assets/img/12.2.webp', 'assets/img/12.3.jpg'],
    map: { lat: 34.7308, lng: 36.7094 },
    category: 'tech'
  },
  13: {
    title: 'سوق المزارعين - حماة',
    dateStr: '25 سبتمبر 2025',
    location: 'الساحة المركزية، حماة، سوريا',
    description: `يحتفل سوق المزارعين في حماة بالزراعة المحلية والحرف اليدوية. تقدم العشرات من الأكشاك فواكه وخضروات طازجة، ومنتجات ألبان، وحرف يدوية، وحلويات تقليدية.

        تجعل العروض الموسيقية الشعبية الحية ومناطق لعب الأطفال منه حدثاً مناسباً للعائلة. إنه ليس تسوقاً فقط - بل تجربة ثقافية ممتعة تربط المزارعين مباشرة بمجتمعهم.`,
    images: [
      'assets/img/13.1.jpg',
      'assets/img/13.2.jpeg',
      'assets/img/13.3.jpg',
      'assets/img/13.4.jpeg'
    ],
    map: { lat: 35.1318, lng: 36.7578 },
    category: 'food'
  },
  14: {
    title: 'سباق الخير - دمشق',
    dateStr: '5 أكتوبر 2025',
    location: 'حديقة سعد الله الجابري، دمشق، سوريا',
    description: `يشجع سباق الخير في دمشق السكان على البقاء نشطين مع دعم القضايا الاجتماعية المحلية. تذهب جميع عائدات التسجيلات إلى المنظمات الإنسانية التي تساعد الأسر المحتاجة.

        يمكن للمشاركين الاختيار بين مسارات قصيرة وطويلة المسافة. بعد السباق، يجتمع الجميع في الحديقة للاستمتاع بموسيقى حية، ووجبات خفيفة صحية، واحتفال بروح المجتمع.`,
    images: [
      'assets/img/14.1.jpeg',
      'assets/img/14.2.jpg',
      'assets/img/14.3.jpg',
      'assets/img/14.44.jpg'
    ],
    map: { lat: 33.5121, lng: 36.2755 },
    category: 'sports'
  },
  15: {
    title: 'ورشة التصوير الفوتوغرافي - حلب',
    dateStr: '2 نوفمبر 2025',
    location: 'مدينة حلب القديمة، حلب، سوريا',
    description: `تأخذ ورشة العمل هذه عشاق التصوير الفوتوغرافي في رحلة إبداعية عبر الشوارع الضيقة والهندسة المعمارية القديمة لمدينة حلب القديمة. بإرشاد مصورين محترفين، سيتعلم المشاركون التكوين، والإضاءة، وسرد القصص عبر الصور.

        تشمل الجلسات تدريباً خارجياً، ودروساً في التحرير، وملاحظات على المحفظة. مثالية للمبتدئين والمصورين ذوي الخبرة على حد سواء.`,
    images: [
      'assets/img/15.1.webp',
      'assets/img/15.2.jpg',
      'assets/img/15.3.jpg'
    ],
    map: { lat: 36.2021, lng: 37.1343 },
    category: 'art'
  }
}

// Sample comments data
const sampleComments = [
  {
    id: 1,
    name: 'سارة جونسون',
    text: 'كان هذا حدثاً مذهلاً! الجو كان رائعاً والموسيقى كانت على أعلى مستوى. لا أستطيع الانتظار للحدث القادم!',
    rating: 5,
    date: '2025-10-13',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
  },
  {
    id: 2,
    name: 'مايكل تشين',
    text: 'تنظيم رائع وطاقم عمل ودود. المكان كان مثالياً لهذا النوع من الفعاليات. موصى به بشدة!',
    rating: 4,
    date: '2025-10-12',
    avatar: 'https://randomuser.me/api/portraits/men/54.jpg'
  },
  {
    id: 3,
    name: 'إيما ويلسون',
    text: 'لقد حضرت العديد من الفعاليات المشابهة، لكن هذا الحدث كان مميزاً. الاهتمام بالتفاصيل كان مثيراً للإعجاب.',
    rating: 5,
    date: '2025-10-11',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
]

// ===== HELPER FUNCTIONS =====

/**
 * Parse a date string like "12 أكتوبر 2025" into JS Date with a default time
 * @param {string} dateStr - Date string in format "12 أكتوبر 2025"
 * @param {number} hour - Default hour (18 = 6 PM)
 * @param {number} minute - Default minute
 * @returns {Date} Parsed Date object
 */
function parseDateStringToDate (dateStr, hour = 18, minute = 0) {
  // dateStr expected like "12 أكتوبر 2025" or "1 ديسمبر 2025"
  const parts = dateStr.replace('،', '').split(' ')
  if (parts.length < 3) return null

  const monthNames = {
    يناير: 0,
    فبراير: 1,
    مارس: 2,
    أبريل: 3,
    مايو: 4,
    يونيو: 5,
    يوليو: 6,
    أغسطس: 7,
    سبتمبر: 8,
    أكتوبر: 9,
    نوفمبر: 10,
    ديسمبر: 11
  }

  const day = parseInt(parts[0], 10)
  const monthName = parts[1]
  const year = parseInt(parts[2], 10)
  const month = monthNames[monthName] ?? 0

  return new Date(year, month, day, hour, minute, 0)
}

/**
 * Convert Date object to ICS format YYYYMMDDTHHMMSSZ (UTC)
 * @param {Date} dt - Date object to convert
 * @returns {string} ICS formatted timestamp
 */
function toICSTimestamp (dt) {
  return dt.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
}

/**
 * Generate ICS content and download calendar file
 * @param {Object} eventObj - Event object containing event details
 */
function downloadICS (eventObj) {
  // Use start at 18:00 local and duration 3 hours for demo
  const startLocal = parseDateStringToDate(eventObj.dateStr, 18, 0)
  const endLocal = new Date(startLocal.getTime() + 3 * 60 * 60 * 1000)
  const dtStart = toICSTimestamp(startLocal)
  const dtEnd = toICSTimestamp(endLocal)
  const uid = 'citypulse-' + Date.now()

  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//CityPulse//Event Calendar//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${toICSTimestamp(new Date())}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${eventObj.title}`,
    `LOCATION:${eventObj.location}`,
    `DESCRIPTION:${eventObj.description.replace(/\n/g, ' ')}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ]

  const blob = new Blob([icsLines.join('\r\n')], {
    type: 'text/calendar;charset=utf-8'
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${eventObj.title.replace(/\s+/g, '_')}.ics`
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

/**
 * Share event using Web Share API or fallback to clipboard copy
 * @param {string} link - Event URL to share
 * @param {string} title - Event title
 * @param {string} text - Event description
 */
async function shareEvent (link, title, text) {
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url: link })
    } catch (err) {
      showToast('تم إلغاء المشاركة أو فشلت.', 'error')
    }
  } else if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(link)
      showToast('تم نسخ رابط الفعالية إلى الحافظة.', 'success')
    } catch (err) {
      prompt('انسخ هذا الرابط:', link)
    }
  } else {
    prompt('شارك هذا الرابط:', link)
  }
}

/**
 * Show toast notification
 * @param {string} message - Message to display
 * @param {string} type - Toast type: 'success' or 'error'
 */
function showToast (message, type = 'success') {
  const toastEl =
    type === 'success'
      ? document.getElementById('successToast')
      : document.getElementById('errorToast')

  const toastMessageEl =
    type === 'success'
      ? document.getElementById('successToastMessage')
      : document.getElementById('errorToastMessage')

  toastMessageEl.textContent = message
  const toast = new bootstrap.Toast(toastEl)
  toast.show()
}

/**
 * Generic form validation function
 * @param {HTMLFormElement} form - Form element to validate
 * @returns {boolean} True if form is valid
 */
function validateForm (form) {
  let isValid = true
  const inputs = form.querySelectorAll('input, select, textarea')

  // Reset all validation states first
  inputs.forEach(input => {
    input.classList.remove('is-valid', 'is-invalid')

    // Clear any existing error messages
    const errorMsg = input.parentNode.querySelector('.field-error')
    if (errorMsg) {
      errorMsg.remove()
    }
  })

  inputs.forEach(input => {
    // Skip validation for empty fields that haven't been touched
    if (!input.value.trim() && !input.classList.contains('visited')) {
      return
    }

    // Mark as visited for future validations
    input.classList.add('visited')

    // Check required fields
    if (input.hasAttribute('required') && !input.value.trim()) {
      input.classList.add('is-invalid')
      const fieldName = input.previousElementSibling?.textContent || 'هذا الحقل'
      showFieldError(input, `${fieldName} مطلوب`)
      isValid = false
    }
    // Check email format
    else if (input.type === 'email' && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(input.value)) {
        input.classList.add('is-invalid')
        showFieldError(input, 'يرجى إدخال بريد إلكتروني صحيح')
        isValid = false
      } else {
        input.classList.add('is-valid')
      }
    }
    // Check phone format
    else if (input.id === 'bkPhone' && input.value) {
      const digitsOnly = input.value.replace(/\D/g, '')
      if (digitsOnly.length < 10) {
        input.classList.add('is-invalid')
        showFieldError(input, 'يرجى إدخال رقم هاتف صحيح (10 أرقام على الأقل)')
        isValid = false
      } else {
        input.classList.add('is-valid')
      }
    }
    // Valid field
    else if (input.value) {
      input.classList.add('is-valid')
    }
  })

  return isValid
}

/**
 * Show field-specific error message
 * @param {HTMLElement} input - Input element that has error
 * @param {string} message - Error message to display
 */
function showFieldError (input, message) {
  // Remove any existing error message
  const existingError = input.parentNode.querySelector('.field-error')
  if (existingError) {
    existingError.remove()
  }

  // Create and append new error message
  const errorDiv = document.createElement('div')
  errorDiv.className = 'field-error'
  errorDiv.textContent = message
  input.parentNode.appendChild(errorDiv)
}

/**
 * Render star rating HTML
 * @param {number} rating - Rating value (1-5)
 * @returns {string} HTML string of star icons
 */
function renderStars (rating) {
  let stars = ''
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<i class="fas fa-star text-warning"></i>'
    } else {
      stars += '<i class="far fa-star text-warning"></i>'
    }
  }
  return stars
}

/**
 * Format date for display
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date string
 */
function formatDate (dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('ar-SA', options)
}

// ===== FORM VALIDATION SETUP =====

// Real-time form validation for all forms
const forms = document.querySelectorAll('form')
forms.forEach(form => {
  const inputs = form.querySelectorAll('input, select, textarea')

  inputs.forEach(input => {
    // Validate on blur (when user leaves the field)
    input.addEventListener('blur', () => {
      validateForm(form)
    })

    // Validate on input (real-time feedback)
    input.addEventListener('input', () => {
      // Only validate if user has started typing
      if (input.value.trim()) {
        validateForm(form)
      }
    })
  })
})

// Reset form validation when modal is closed
const bookingModal = document.getElementById('bookingModal')
if (bookingModal) {
  bookingModal.addEventListener('hidden.bs.modal', function () {
    const inputs = this.querySelectorAll('input, select')
    inputs.forEach(input => {
      input.classList.remove('is-valid', 'is-invalid', 'visited')

      // Clear error messages
      const errorMsg = input.parentNode.querySelector('.field-error')
      if (errorMsg) {
        errorMsg.remove()
      }
    })
  })
}

// Reset comment form validation
const commentForm = document.getElementById('commentForm')
if (commentForm) {
  commentForm.addEventListener('reset', function () {
    const inputs = this.querySelectorAll('input, select, textarea')
    inputs.forEach(input => {
      input.classList.remove('is-valid', 'is-invalid', 'visited')

      // Clear error messages
      const errorMsg = input.parentNode.querySelector('.field-error')
      if (errorMsg) {
        errorMsg.remove()
      }
    })
  })
}

// ===== INITIALIZATION FUNCTION =====

/**
 * Main initialization function - renders event details and sets up event handlers
 */
;(function init () {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('event') || params.get('id') || '1'
  const ev = events[id]

  const headerEl = document.getElementById('eventHeader')
  const detailsEl = document.getElementById('eventDetails')
  const galleryGrid = document.getElementById('galleryGrid')
  const mapHolder = document.getElementById('mapHolder')
  const sideDate = document.getElementById('sideDate')
  const sideLocation = document.getElementById('sideLocation')
  const relatedEl = document.getElementById('relatedEvents')
  const commentsList = document.getElementById('commentsList')

  if (!ev) {
    headerEl.innerHTML =
      '<div class="alert alert-warning">الفعالية غير موجودة.</div>'
    return
  }

  // Header hero image + title
  headerEl.innerHTML = `
        <div class="position-relative mb-3">
            <img src="${ev.images[0]}" alt="${ev.title}" class="hero-img w-100 shadow-sm">
        </div>
        <h1 class="fw-bold">${ev.title}</h1>
        <p class="text-muted mb-0"><i class="fa-solid fa-calendar-days me-1"></i> ${ev.dateStr}</p>
        <p class="text-muted"><i class="fa-solid fa-location-dot me-1"></i> ${ev.location}</p>
    `

  // Details
  detailsEl.innerHTML = `
        <h4>الوصف</h4>
        <p>${ev.description}</p>
    `

  // Side info
  sideDate.innerHTML = `<i class="fa-solid fa-calendar-days me-1"></i> ${ev.dateStr}`
  sideLocation.innerHTML = `<i class="fa-solid fa-location-dot me-1"></i> ${ev.location}`

  // Gallery Grid
  galleryGrid.innerHTML = ''
  ev.images.forEach((img, idx) => {
    galleryGrid.innerHTML += `
            <img src="${img}" alt="صورة الفعالية ${
      idx + 1
    }" data-bs-toggle="modal" data-bs-target="#galleryModal" 
                 onclick="document.getElementById('modalImage').src = '${img}'">
        `
  })

  // Map: use iframe to Google Maps
  mapHolder.innerHTML = ''
  const mapFrame = document.createElement('iframe')
  mapFrame.width = '100%'
  mapFrame.height = '260'
  mapFrame.style.border = 0
  mapFrame.loading = 'lazy'
  mapFrame.allowFullscreen = true
  mapFrame.referrerPolicy = 'no-referrer-when-downgrade'
  mapFrame.src = `https://www.google.com/maps?q=${ev.map.lat},${ev.map.lng}&z=14&output=embed`
  mapHolder.appendChild(mapFrame)

  // Related events (show 3 other events)
  relatedEl.innerHTML = ''
  let count = 0
  Object.keys(events).forEach(key => {
    if (key === String(id) || count >= 3) return
    const r = events[key]
    relatedEl.innerHTML += `
            <div class="col-12">
                <div class="card related-event-card h-100">
                    <div class="row g-0 align-items-center h-100">
                        <div class="col-auto" style="width:110px">
                            <img src="${r.images[0]}" class="img-fluid h-100" alt="${r.title}" style="object-fit: cover;">
                        </div>
                        <div class="col">
                            <div class="card-body py-2">
                                <h6 class="card-title mb-1 related-event-title">${r.title}</h6>
                                <p class="text-muted small mb-1 related-event-date"><i class="fa-solid fa-calendar-days me-1"></i> ${r.dateStr}</p>
                                <a href="event.html?event=${key}" class="btn btn-sm btn-outline-primary">عرض التفاصيل</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    count++
  })

  // Comments section
  commentsList.innerHTML = ''
  if (sampleComments.length > 0) {
    sampleComments.forEach(comment => {
      commentsList.innerHTML += `
                <div class="card comment-card mb-3">
                    <div class="card-body">
                        <div class="d-flex align-items-start">
                            <img src="${comment.avatar}" alt="${
        comment.name
      }" class="comment-avatar me-3">
                            <div class="flex-grow-1">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h6 class="mb-0">${comment.name}</h6>
                                    <div>${renderStars(comment.rating)}</div>
                                </div>
                                <p class="mb-2">${comment.text}</p>
                                <small class="comment-date">${formatDate(
                                  comment.date
                                )}</small>
                            </div>
                        </div>
                    </div>
                </div>
            `
    })
  } else {
    commentsList.innerHTML =
      '<p class="text-muted">لا توجد تعليقات بعد. كن أول من يترك تقييماً!</p>'
  }

  // ===== BUTTON HANDLERS =====

  // Add to Calendar button
  document.getElementById('addCalendarBtn').addEventListener('click', () => {
    downloadICS(ev)
    showToast('تمت إضافة الفعالية إلى تقويمك!', 'success')
  })

  // Share button
  document.getElementById('shareBtn').addEventListener('click', () => {
    const link = window.location.href
    shareEvent(link, ev.title, `${ev.title} — ${ev.dateStr} — ${ev.location}`)
  })

  // ===== BOOKING FORM HANDLING =====

  const bookingForm = document.getElementById('bookingForm')

  /**
   * Enhanced validation function for booking form
   * @param {HTMLFormElement} form - Booking form element
   * @returns {Object} Validation result with isValid flag and errors array
   */
  function validateBookingForm (form) {
    const result = {
      isValid: true,
      errors: []
    }

    const inputs = form.querySelectorAll('input, select')

    inputs.forEach(input => {
      // Mark as visited for validation
      input.classList.add('visited')

      // Check required fields
      if (input.hasAttribute('required') && !input.value.trim()) {
        const fieldName =
          input.previousElementSibling?.textContent || 'هذا الحقل'
        result.isValid = false
        result.errors.push({
          input: input,
          message: `${fieldName} مطلوب`
        })
        input.classList.add('is-invalid')
      }
      // Check email format
      else if (input.type === 'email' && input.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(input.value)) {
          result.isValid = false
          result.errors.push({
            input: input,
            message: 'يرجى إدخال بريد إلكتروني صحيح'
          })
          input.classList.add('is-invalid')
        } else {
          input.classList.add('is-valid')
        }
      }
      // Check phone format
      else if (input.id === 'bkPhone' && input.value) {
        const digitsOnly = input.value.replace(/\D/g, '')
        if (digitsOnly.length < 10) {
          result.isValid = false
          result.errors.push({
            input: input,
            message: 'يرجى إدخال رقم هاتف صحيح (10 أرقام على الأقل)'
          })
          input.classList.add('is-invalid')
        } else {
          input.classList.add('is-valid')
        }
      }
      // Valid field
      else if (input.value) {
        input.classList.add('is-valid')
      }
    })

    return result
  }

  // Booking form submit handler
  bookingForm.addEventListener('submit', e => {
    e.preventDefault()

    // Reset all validation states first
    const inputs = bookingForm.querySelectorAll('input, select')
    inputs.forEach(input => {
      input.classList.remove('is-valid', 'is-invalid')

      // Clear any existing error messages
      const errorMsg = input.parentNode.querySelector('.field-error')
      if (errorMsg) {
        errorMsg.remove()
      }
    })

    // Validate form - this function now returns detailed validation result
    const validationResult = validateBookingForm(bookingForm)

    if (!validationResult.isValid) {
      // Show specific error messages for each field
      validationResult.errors.forEach(error => {
        showFieldError(error.input, error.message)
      })

      // Show toast with specific error details
      if (validationResult.errors.length > 0) {
        const firstError = validationResult.errors[0]
        showToast(`يرجى تصحيح: ${firstError.message}`, 'error')
      } else {
        showToast('يرجى تصحيح الأخطاء في النموذج.', 'error')
      }
      return // Stop execution if validation fails
    }

    // If we reach here, all validations passed
    // Show processing message
    const bookingAlert = document.getElementById('bookingAlert')
    bookingAlert.innerHTML = `<div class="alert alert-info">جاري معالجة حجزك...</div>`

    // Simulate network delay
    setTimeout(() => {
      // Get form data
      const name = document.getElementById('bkName').value.trim()
      const email = document.getElementById('bkEmail').value.trim()
      const tickets = document.getElementById('bkTickets').value

      // Show success message
      bookingAlert.innerHTML = `<div class="alert alert-success">تم تأكيد الحجز! تم إرسال تأكيد إلى ${email}.</div>`
      showToast(`تم تأكيد الحجز لـ ${tickets} تذكرة!`, 'success')

      // Reset form after short delay and close modal
      setTimeout(() => {
        bookingForm.reset()
        bookingAlert.innerHTML = ''

        // Remove validation classes
        const inputs = bookingForm.querySelectorAll('input, select')
        inputs.forEach(input => {
          input.classList.remove('is-valid', 'is-invalid', 'visited')
        })

        const modalEl = document.getElementById('bookingModal')
        const modal = bootstrap.Modal.getInstance(modalEl)
        modal.hide()
      }, 2000)
    }, 1500)
  })

  // Real-time validation for booking form
  const bookingInputs = bookingForm.querySelectorAll('input, select')
  bookingInputs.forEach(input => {
    // Validate on blur (when user leaves the field)
    input.addEventListener('blur', () => {
      validateBookingForm(bookingForm)
    })

    // Validate on input (real-time feedback)
    input.addEventListener('input', () => {
      // Only validate if user has started typing
      if (input.value.trim()) {
        validateBookingForm(bookingForm)
      }
    })
  })

  // ===== COMMENT FORM HANDLING =====

  const commentForm = document.getElementById('commentForm')

  /**
   * Enhanced validation function for comment form
   * @param {HTMLFormElement} form - Comment form element
   * @returns {Object} Validation result with isValid flag and errors array
   */
  function validateCommentForm (form) {
    const result = {
      isValid: true,
      errors: []
    }

    const nameInput = document.getElementById('commentName')
    const textInput = document.getElementById('commentText')
    const ratingInput = document.getElementById('commentRating')

    // Validate Name field
    if (!nameInput.value.trim()) {
      result.isValid = false
      result.errors.push({
        input: nameInput,
        message: 'الاسم مطلوب'
      })
      nameInput.classList.add('is-invalid')
    } else if (nameInput.value.trim().length < 2) {
      result.isValid = false
      result.errors.push({
        input: nameInput,
        message: 'يجب أن يكون الاسم على الأقل حرفين'
      })
      nameInput.classList.add('is-invalid')
    } else if (nameInput.value.trim().length > 50) {
      result.isValid = false
      result.errors.push({
        input: nameInput,
        message: 'يجب أن يكون الاسم أقل من 50 حرفاً'
      })
      nameInput.classList.add('is-invalid')
    } else {
      nameInput.classList.add('is-valid')
    }

    // Validate Comment text field
    if (!textInput.value.trim()) {
      result.isValid = false
      result.errors.push({
        input: textInput,
        message: 'نص التعليق مطلوب'
      })
      textInput.classList.add('is-invalid')
    } else if (textInput.value.trim().length < 10) {
      result.isValid = false
      result.errors.push({
        input: textInput,
        message: 'يجب أن يكون التعليق على الأقل 10 أحرف'
      })
      textInput.classList.add('is-invalid')
    } else if (textInput.value.trim().length > 500) {
      result.isValid = false
      result.errors.push({
        input: textInput,
        message: 'يجب أن يكون التعليق أقل من 500 حرف'
      })
      textInput.classList.add('is-invalid')
    } else {
      textInput.classList.add('is-valid')
    }

    // Validate Rating field
    if (!ratingInput.value) {
      result.isValid = false
      result.errors.push({
        input: ratingInput,
        message: 'يرجى اختيار تقييم'
      })
      ratingInput.classList.add('is-invalid')
    } else {
      ratingInput.classList.add('is-valid')
    }

    return result
  }

  // Comment form submit handler
  commentForm.addEventListener('submit', e => {
    e.preventDefault()

    // Reset all validation states first
    const inputs = commentForm.querySelectorAll('input, select, textarea')
    inputs.forEach(input => {
      input.classList.remove('is-valid', 'is-invalid')

      // Clear any existing error messages
      const errorMsg = input.parentNode.querySelector('.field-error')
      if (errorMsg) {
        errorMsg.remove()
      }
    })

    // Validate form with detailed error reporting
    const validationResult = validateCommentForm(commentForm)

    if (!validationResult.isValid) {
      // Show specific error messages for each field
      validationResult.errors.forEach(error => {
        showFieldError(error.input, error.message)
      })

      // Show toast with specific error details
      if (validationResult.errors.length > 0) {
        const errorMessages = validationResult.errors.map(
          error => error.message
        )
        showToast(`يرجى تصحيح: ${errorMessages.join(', ')}`, 'error')
      }
      return // Stop execution if validation fails
    }

    // If we reach here, all validations passed
    // Get form data
    const name = document.getElementById('commentName').value.trim()
    const text = document.getElementById('commentText').value.trim()
    const rating = document.getElementById('commentRating').value

    // Create new comment object
    const newComment = {
      id: Date.now(),
      name: name,
      text: text,
      rating: parseInt(rating),
      date: new Date().toISOString().split('T')[0],
      avatar: `https://randomuser.me/api/portraits/${
        Math.random() > 0.5 ? 'men' : 'women'
      }/${Math.floor(Math.random() * 70)}.jpg`
    }

    // Add comment to the list
    const commentHTML = `
            <div class="card comment-card mb-3">
                <div class="card-body">
                    <div class="d-flex align-items-start">
                        <img src="${newComment.avatar}" alt="${
      newComment.name
    }" class="comment-avatar me-3">
                        <div class="flex-grow-1">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h6 class="mb-0">${newComment.name}</h6>
                                <div>${renderStars(newComment.rating)}</div>
                            </div>
                            <p class="mb-2">${newComment.text}</p>
                            <small class="comment-date">الآن</small>
                        </div>
                    </div>
                </div>
            </div>
        `

    // Prepend new comment
    commentsList.innerHTML = commentHTML + commentsList.innerHTML

    // Reset form
    commentForm.reset()

    // Remove validation classes
    inputs.forEach(input => {
      input.classList.remove('is-valid', 'is-invalid', 'visited')
    })

    showToast('شكراً لك على تعليقك!', 'success')
  })

  // Real-time validation for comment form
  const commentInputs = commentForm.querySelectorAll('input, select, textarea')
  commentInputs.forEach(input => {
    // Validate on blur (when user leaves the field)
    input.addEventListener('blur', () => {
      validateCommentForm(commentForm)
    })

    // Validate on input (real-time feedback)
    input.addEventListener('input', () => {
      // Only validate if user has started typing
      if (input.value.trim()) {
        validateCommentForm(commentForm)
      }
    })

    // Special handling for textarea character count
    if (input.id === 'commentText') {
      input.addEventListener('input', () => {
        const charCount = input.value.length
        const maxChars = 500

        // Update or create character counter
        let counter = input.parentNode.querySelector('.char-counter')
        if (!counter) {
          counter = document.createElement('div')
          counter.className = 'char-counter small text-muted mt-1'
          input.parentNode.appendChild(counter)
        }

        counter.textContent = `${charCount}/${maxChars} حرف`

        if (charCount > maxChars) {
          counter.classList.add('text-danger')
          counter.classList.remove('text-muted')
        } else {
          counter.classList.remove('text-danger')
          counter.classList.add('text-muted')
        }
      })
    }
  })

  /**
   * Enhanced showFieldError function with animation
   * @param {HTMLElement} input - Input element with error
   * @param {string} message - Error message to display
   */
  function showFieldError (input, message) {
    // Remove any existing error message
    const existingError = input.parentNode.querySelector('.field-error')
    if (existingError) {
      existingError.remove()
    }

    // Create and append new error message
    const errorDiv = document.createElement('div')
    errorDiv.className = 'field-error text-danger small mt-1'
    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle me-1"></i>${message}`
    input.parentNode.appendChild(errorDiv)

    // Add shake animation for invalid fields
    input.classList.add('is-invalid')
    input.style.animation = 'shake 0.5s ease-in-out'
    setTimeout(() => {
      input.style.animation = ''
    }, 500)
  }

  // Add CSS for shake animation
  const style = document.createElement('style')
  style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        .is-invalid {
            border-color: #dc3545 !important;
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath d='m5.8 3.6.4.4.4-.4'/%3e%3cpath d='M6 7v1'/%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right calc(0.375em + 0.1875rem) center;
            background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
        }
        
        .field-error {
            display: flex;
            align-items: center;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        }
        
        .char-counter {
            font-size: 0.75rem;
        }
    `
  document.head.appendChild(style)
})()

// ====== DARK MODE FUNCTIONALITY ======

let darkModeToggle = document.getElementById('darkModeToggle')
let body = document.body

/**
 * Apply dark mode with smooth transition
 * @param {boolean} isDark - Whether to apply dark mode
 */
function applyDarkMode (isDark) {
  // Add transition class for smooth animation
  body.classList.add('mode-transitioning')

  // Small delay to ensure CSS transition starts
  setTimeout(() => {
    if (isDark) {
      body.classList.add('dark-mode')
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'
      // Add animation class for the toggle button
      darkModeToggle.classList.add('dark-mode-active')
    } else {
      body.classList.remove('dark-mode')
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'
      darkModeToggle.classList.remove('dark-mode-active')
    }

    // Remove transition class after animation completes
    setTimeout(() => {
      body.classList.remove('mode-transitioning')
    }, 500)
  }, 10)
}

/**
 * Enhanced toggle function with animation
 */
function toggleDarkMode () {
  const willBeDarkMode = !body.classList.contains('dark-mode')

  // Add click animation to toggle button
  darkModeToggle.style.transform = 'scale(0.9)'
  setTimeout(() => {
    darkModeToggle.style.transform = 'scale(1)'
  }, 150)

  applyDarkMode(willBeDarkMode)
  localStorage.setItem('darkMode', willBeDarkMode.toString())
}

// Check for saved dark mode preference
let isDarkMode = localStorage.getItem('darkMode') === 'true'

// Apply dark mode if previously enabled
applyDarkMode(isDarkMode)

// Toggle dark mode with smooth transition
darkModeToggle.addEventListener('click', toggleDarkMode)

// Add keyboard shortcut for dark mode (Alt + D)
document.addEventListener('keydown', e => {
  if (e.altKey && e.key === 'd') {
    e.preventDefault()
    toggleDarkMode()
  }
})

// ====== SMOOTH SCROLL FUNCTIONALITY ======

const scrollToTopBtn = document.getElementById('scrollToTop')
const scrollToBottomBtn = document.getElementById('scrollToBottom')

// Show/hide scroll buttons based on scroll position
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight

  // Show scroll to top button when scrolled down
  if (scrollY > 300) {
    scrollToTopBtn.style.display = 'flex'
  } else {
    scrollToTopBtn.style.display = 'none'
  }

  // Show scroll to bottom button when not at bottom
  if (scrollY + windowHeight < documentHeight - 100) {
    scrollToBottomBtn.style.display = 'flex'
  } else {
    scrollToBottomBtn.style.display = 'none'
  }
})

// Scroll to top function
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// Scroll to bottom function
scrollToBottomBtn.addEventListener('click', () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  })
})
