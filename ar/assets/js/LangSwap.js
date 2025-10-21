document.addEventListener('DOMContentLoaded', function () {
  // Get all language options
  const languageOptions = document.querySelectorAll('.language-option')

  // Add event listener to each language option
  languageOptions.forEach(option => {
    option.addEventListener('click', function (e) {
      e.preventDefault()

      // Get selected language
      const selectedLang = this.getAttribute('data-lang')

      // Get current path
      const currentPath = window.location.pathname

      // Extract filename from path
      const fileName = currentPath.split('/').pop()

      // Create new path based on selected language
      let newPath

      // Check if we're already in a language folder
      if (currentPath.includes('/ar/') || currentPath.includes('/en/')) {
        // Replace language folder in path
        newPath = currentPath.replace(/\/(ar|en)\//, `/${selectedLang}/`)
      } else {
        // Add language folder before filename
        const pathParts = currentPath.split('/')
        pathParts.splice(pathParts.length - 1, 0, selectedLang)
        newPath = pathParts.join('/')
      }

      // Redirect to new language path
      window.location.href = newPath
    })
  })

  // Update language selector based on current page
  function updateLanguageSelector () {
    const currentPath = window.location.pathname
    const languageButton = document.querySelector('.language-selector')

    if (currentPath.includes('/ar/')) {
      // Arabic page
      languageButton.innerHTML = `
    <img src="https://flagcdn.com/w40/sy.png" width="20" height="15" alt="syria" class="flag-icon">
    <span>العربية</span>
  `
    } else if (currentPath.includes('/en/')) {
      // English page
      languageButton.innerHTML = `
    <img src="https://flagcdn.com/w40/us.png" width="20" height="15" alt="usa" class="flag-icon">
    <span>English</span>
  `
    }
    // If not in any language folder, keep default (Arabic)
  }

  // Update language selector on page load
  updateLanguageSelector()
})
