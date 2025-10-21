// ====== EVENTS DATA (1..15) ======
// Each event: title, dateStr (human), location, description (long), images[], map {lat,lng}, category
const events = {
  1: {
    title: 'Damascus Jazz Night',
    dateStr: 'Oct 12, 2025',
    location: 'Al-Kabbani Theater, Damascus, Syria',
    description: `Damascus Jazz Night returns for its 5th annual edition, transforming the historic Al-Kabbani Theater into a sanctuary of rhythm and melody. The evening will feature performances from Syria's most talented jazz musicians, blending classic and modern sounds in an intimate setting.

        Guests can enjoy soulful saxophone solos, piano improvisations, and a cozy atmosphere enhanced by soft lighting and gourmet food stalls in the outdoor lounge. Whether you're a devoted jazz lover or new to the genre, this event promises a night of elegance, creativity, and pure musical joy.`,
    images: ['assets/img/1.1.jpg', 'assets/img/1.2.jpeg', 'assets/img/1.3.png'],
    map: { lat: 33.5138, lng: 36.2765 },
    category: 'music'
  },
  2: {
    title: 'Hama Art & Culture Expo',
    dateStr: 'Oct 15, 2025',
    location: 'Hama Cultural Center, Hama, Syria',
    description: `The Hama Art & Culture Expo showcases the incredible diversity of Syrian creativity — from traditional calligraphy to avant-garde installations. This year's theme, "Rebirth Through Art," invites more than 60 artists from across the country to exhibit paintings, sculptures, and multimedia works.

        Visitors will also have the opportunity to attend live painting sessions, children's creative workshops, and cultural performances celebrating Syrian folklore. The expo runs for five days, turning the Cultural Center into a vibrant meeting place for artists, students, and enthusiasts.`,
    images: [
      'assets/img/2.1.jpeg',
      'assets/img/2.2.webp',
      'assets/img/2.3.webp'
    ],
    map: { lat: 35.1318, lng: 36.7578 },
    category: 'art'
  },
  3: {
    title: 'Aleppo Tech Forum 2025',
    dateStr: 'Nov 5, 2025',
    location: 'Aleppo Innovation Hub, Aleppo, Syria',
    description: `The Aleppo Tech Forum 2025 brings together innovators, engineers, and entrepreneurs to discuss the future of technology in Syria. Over three days, participants will engage in keynote speeches, startup pitches, and interactive sessions focusing on artificial intelligence, fintech, and renewable energy.

        This year's edition emphasizes "Building Sustainable Digital Futures," encouraging collaboration between young developers and established industry leaders. Attendees will enjoy networking spaces, demo booths, and mentoring opportunities with local and international experts.`,
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
    title: 'Hama City Marathon',
    dateStr: 'Oct 20, 2025',
    location: 'Orontes Riverside, Hama, Syria',
    description: `Run for health, unity, and fun at the annual Hama City Marathon! The event welcomes runners of all levels, offering 5K, 10K, and half-marathon routes along the scenic Orontes River. Volunteers and cheer squads will line the streets to encourage participants throughout the race.

        Beyond the competition, the marathon celebrates community spirit — with music stages, hydration zones, and post-run festivities including local food stalls and family activities. All proceeds support health initiatives for underprivileged children in Hama.`,
    images: ['assets/img/4.1.webp', 'assets/img/4.2.jpg', 'assets/img/4.3.jpg'],
    map: { lat: 35.1318, lng: 36.7578 },
    category: 'sports'
  },
  5: {
    title: 'Damascus Food Festival',
    dateStr: 'Dec 1, 2025',
    location: 'Souq al-Hamidiyeh, Damascus, Syria',
    description: `The Damascus Food Festival is a culinary celebration of Syria's rich flavors and food heritage. From street-style shawarma to high-end Damascene sweets, this event gathers chefs, restaurants, and food lovers from all over the country.

        Visitors can enjoy live cooking demonstrations, tasting sessions, and workshops on traditional recipes. The festival's atmosphere is filled with the aroma of spices, laughter, and music — offering a true taste of Syrian culture in one unforgettable weekend.`,
    images: ['assets/img/5.1.jpg', 'assets/img/5.2.jpg', 'assets/img/5.3.jpeg'],
    map: { lat: 33.5138, lng: 36.2765 },
    category: 'food'
  },
  6: {
    title: 'Latakia Indie Rock Concert',
    dateStr: 'Nov 22, 2025',
    location: 'Corniche Stage, Latakia, Syria',
    description: `Set against the backdrop of the Mediterranean sunset, the Latakia Indie Rock Concert is a must-attend event for music lovers. Featuring top Syrian indie bands, the night pulses with high-energy performances and coastal vibes.

        Food trucks, craft booths, and open-air seating areas make it perfect for groups of friends or families looking to relax and enjoy the rhythm of the waves. Bring your beach chair and dance the night away by the sea.`,
    images: ['assets/img/6.1.jpeg', 'assets/img/6.2.jpeg'],
    map: { lat: 35.4974, lng: 35.7916 },
    category: 'music'
  },
  7: {
    title: 'Modern Sculpture Expo – Damascus',
    dateStr: 'Aug 25, 2025',
    location: 'Damascus Art Pavilion, Damascus, Syria',
    description: `This exhibition highlights the evolution of Syrian sculpture through the works of emerging and established artists. From abstract marble pieces to metal installations, the Modern Sculpture Expo invites visitors to experience form, texture, and emotion like never before.

        The event also features guided tours, artist Q&A sessions, and interactive workshops for students interested in 3D art. The pavilion's courtyard will host nightly gatherings under the stars with live acoustic performances.`,
    images: ['assets/img/7.1.jpg', 'assets/img/7.2.webp'],
    map: { lat: 33.5138, lng: 36.2765 },
    category: 'art'
  },
  8: {
    title: 'Hackathon Syria 2025',
    dateStr: 'Sep 10, 2025',
    location: 'Tishreen University Hall, Damascus, Syria',
    description: `Hackathon Syria 2025 is a 48-hour innovation marathon that challenges participants to create impactful tech solutions. Developers, designers, and entrepreneurs will collaborate to build prototypes addressing real-world problems.

        The event offers mentoring sessions, networking opportunities, and prizes for the best projects. It's an energetic space where creativity meets technology, encouraging young Syrians to push boundaries and innovate for a better future.`,
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
    title: 'Tartous Beach Volleyball Cup',
    dateStr: 'Aug 15, 2025',
    location: 'Tartous Corniche Beach, Tartous, Syria',
    description: `Summer meets sports in the Tartous Beach Volleyball Cup — an exciting two-day tournament featuring amateur and professional teams from across Syria. The event combines athletic competition with coastal leisure.

        Spectators can relax on the sand, enjoy live DJ music, and explore food stands serving refreshing drinks and snacks. Evening matches under floodlights create an unforgettable beachside experience.`,
    images: ['assets/img/9.1.jpg', 'assets/img/9.2.jpg'],
    map: { lat: 34.8841, lng: 35.8869 },
    category: 'sports'
  },
  10: {
    title: 'Vegan Street Market – Damascus',
    dateStr: 'Oct 10, 2025',
    location: 'Abou Roumaneh, Damascus, Syria',
    description: `The Vegan Street Market celebrates healthy, sustainable living with an array of plant-based foods and eco-friendly products. Local vendors will showcase everything from vegan desserts to handmade soaps and natural cosmetics.

        Visitors can attend talks on nutrition, cooking demos, and zero-waste workshops — all while enjoying live acoustic music in a green, relaxed atmosphere.`,
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
    title: 'Open Air Cinema – Aleppo Citadel',
    dateStr: 'Sep 18, 2025',
    location: 'Citadel Park, Aleppo, Syria',
    description: `Under the majestic walls of the Aleppo Citadel, film enthusiasts can enjoy classic and contemporary movies projected on a giant outdoor screen. Bring your blanket and join hundreds of movie lovers for a cozy night under the stars.

        The event features Syrian short films, international classics, and a small food court offering popcorn and local snacks. Screenings begin at sunset each evening.`,
    images: [
      'assets/img/11.1.jpg',
      'assets/img/11.2.jpg',
      'assets/img/11.3.jpg'
    ],
    map: { lat: 36.199, lng: 37.1591 },
    category: 'art'
  },
  12: {
    title: 'Startup Meetup – Homs',
    dateStr: 'Nov 8, 2025',
    location: 'Homs Co-Working Space, Homs, Syria',
    description: `The Homs Startup Meetup is where ideas meet opportunity. Entrepreneurs, investors, and tech enthusiasts gather to share experiences, pitch startups, and explore collaborations.

        The event features keynote sessions, startup showcases, and one-on-one mentorship hours with experts from various industries. It's the perfect space to grow your network and your vision.`,
    images: ['assets/img/12.2.webp', 'assets/img/12.3.jpg'],
    map: { lat: 34.7308, lng: 36.7094 },
    category: 'tech'
  },
  13: {
    title: 'Farmers Market – Hama',
    dateStr: 'Sep 25, 2025',
    location: 'Central Square, Hama, Syria',
    description: `The Hama Farmers Market celebrates local agriculture and craftsmanship. Dozens of stalls offer fresh fruits, vegetables, dairy, handmade crafts, and traditional sweets.

        Live folk music performances and children's play zones make it a family-friendly event. It's not just shopping — it's a joyful cultural experience that connects farmers directly with their community.`,
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
    title: 'Charity Run – Damascus',
    dateStr: 'Oct 5, 2025',
    location: 'Saadallah al-Jabiri Park, Damascus, Syria',
    description: `The Damascus Charity Run encourages residents to stay active while supporting local social causes. All proceeds from registrations go to humanitarian organizations aiding families in need.

        Participants can choose between short and long-distance routes. After the race, everyone gathers in the park for live music, healthy snacks, and a celebration of community spirit.`,
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
    title: 'Photography Workshop – Aleppo',
    dateStr: 'Nov 2, 2025',
    location: 'Aleppo Old City, Aleppo, Syria',
    description: `This immersive workshop takes photography enthusiasts on a creative journey through the narrow streets and ancient architecture of Aleppo's Old City. Guided by professional photographers, participants will learn composition, lighting, and storytelling through images.

        Sessions include outdoor practice, editing tutorials, and portfolio feedback. Perfect for beginners and experienced photographers alike.`,
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
    name: 'Sarah Johnson',
    text: "This was an amazing event! The atmosphere was incredible and the music was top-notch. Can't wait for the next one!",
    rating: 5,
    date: '2025-10-13',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    text: 'Great organization and friendly staff. The venue was perfect for this type of event. Highly recommended!',
    rating: 4,
    date: '2025-10-12',
    avatar: 'https://randomuser.me/api/portraits/men/54.jpg'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    text: "I've been to many similar events, but this one stood out. The attention to detail was impressive.",
    rating: 5,
    date: '2025-10-11',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
]

// ===== HELPER FUNCTIONS =====

/**
 * Parse a date string like "Oct 12, 2025" into JS Date with a default time
 * @param {string} dateStr - Date string in format "Oct 12, 2025"
 * @param {number} hour - Default hour (18 = 6 PM)
 * @param {number} minute - Default minute
 * @returns {Date} Parsed Date object
 */
function parseDateStringToDate (dateStr, hour = 18, minute = 0) {
  // dateStr expected like "Oct 12, 2025" or "Dec 1, 2025"
  const parts = dateStr.replace(',', '').split(' ')
  if (parts.length < 3) return null

  const monthNames = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11
  }

  const monthShort = parts[0].slice(0, 3)
  const month = monthNames[monthShort] ?? 0
  const day = parseInt(parts[1], 10)
  const year = parseInt(parts[2], 10)

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
      showToast('Sharing canceled or failed.', 'error')
    }
  } else if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(link)
      showToast('Event link copied to clipboard.', 'success')
    } catch (err) {
      prompt('Copy this link:', link)
    }
  } else {
    prompt('Share this link:', link)
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
      const fieldName =
        input.previousElementSibling?.textContent || 'This field'
      showFieldError(input, `${fieldName} is required`)
      isValid = false
    }
    // Check email format
    else if (input.type === 'email' && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(input.value)) {
        input.classList.add('is-invalid')
        showFieldError(input, 'Please enter a valid email address')
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
        showFieldError(
          input,
          'Please enter a valid phone number (at least 10 digits)'
        )
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
  return new Date(dateString).toLocaleDateString('en-US', options)
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
      '<div class="alert alert-warning">Event not found.</div>'
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
        <h4>Description</h4>
        <p>${ev.description}</p>
    `

  // Side info
  sideDate.innerHTML = `<i class="fa-solid fa-calendar-days me-1"></i> ${ev.dateStr}`
  sideLocation.innerHTML = `<i class="fa-solid fa-location-dot me-1"></i> ${ev.location}`

  // Gallery Grid
  galleryGrid.innerHTML = ''
  ev.images.forEach((img, idx) => {
    galleryGrid.innerHTML += `
            <img src="${img}" alt="Event image ${
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
                                <a href="event.html?event=${key}" class="btn btn-sm btn-outline-primary">View Details</a>
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
      '<p class="text-muted">No comments yet. Be the first to leave a review!</p>'
  }

  // ===== BUTTON HANDLERS =====

  // Add to Calendar button
  document.getElementById('addCalendarBtn').addEventListener('click', () => {
    downloadICS(ev)
    showToast('Event added to your calendar!', 'success')
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
          input.previousElementSibling?.textContent || 'This field'
        result.isValid = false
        result.errors.push({
          input: input,
          message: `${fieldName} is required`
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
            message: 'Please enter a valid email address'
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
            message: 'Please enter a valid phone number (at least 10 digits)'
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
        showToast(`Please fix: ${firstError.message}`, 'error')
      } else {
        showToast('Please fix the errors in the form.', 'error')
      }
      return // Stop execution if validation fails
    }

    // If we reach here, all validations passed
    // Show processing message
    const bookingAlert = document.getElementById('bookingAlert')
    bookingAlert.innerHTML = `<div class="alert alert-info">Processing your booking...</div>`

    // Simulate network delay
    setTimeout(() => {
      // Get form data
      const name = document.getElementById('bkName').value.trim()
      const email = document.getElementById('bkEmail').value.trim()
      const tickets = document.getElementById('bkTickets').value

      // Show success message
      bookingAlert.innerHTML = `<div class="alert alert-success">Booking confirmed! A confirmation has been sent to ${email}.</div>`
      showToast(`Booking confirmed for ${tickets} ticket(s)!`, 'success')

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
        message: 'Name is required'
      })
      nameInput.classList.add('is-invalid')
    } else if (nameInput.value.trim().length < 2) {
      result.isValid = false
      result.errors.push({
        input: nameInput,
        message: 'Name must be at least 2 characters long'
      })
      nameInput.classList.add('is-invalid')
    } else if (nameInput.value.trim().length > 50) {
      result.isValid = false
      result.errors.push({
        input: nameInput,
        message: 'Name must be less than 50 characters'
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
        message: 'Comment text is required'
      })
      textInput.classList.add('is-invalid')
    } else if (textInput.value.trim().length < 10) {
      result.isValid = false
      result.errors.push({
        input: textInput,
        message: 'Comment must be at least 10 characters long'
      })
      textInput.classList.add('is-invalid')
    } else if (textInput.value.trim().length > 500) {
      result.isValid = false
      result.errors.push({
        input: textInput,
        message: 'Comment must be less than 500 characters'
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
        message: 'Please select a rating'
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
        showToast(`Please fix: ${errorMessages.join(', ')}`, 'error')
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
                            <small class="comment-date">Just now</small>
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

    showToast('Thank you for your comment!', 'success')
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

        counter.textContent = `${charCount}/${maxChars} characters`

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
