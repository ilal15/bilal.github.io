document.addEventListener('DOMContentLoaded', function() {
    // 1. Element selection
    const toggleButton = document.getElementById('toggle-bio-button');
    const bioTextElement = document.getElementById('bio-text');
    const buttonText = toggleButton.querySelector('span');

    // 2. Prepare text length truncation
    const fullBio = bioTextElement.textContent.trim();
    const shortBioLength = 160; 
    let shortBio = fullBio.substring(0, shortBioLength);

    if (fullBio.length > shortBioLength) {
        shortBio = shortBio.substring(0, shortBio.lastIndexOf(" ")) + '...';
    }

    // 3. Initial setup
    bioTextElement.textContent = shortBio;
    buttonText.textContent = 'See More';

    let isFullBio = false;

    // 4. Toggle Event
    toggleButton.addEventListener('click', function() {
        if (isFullBio) {
            bioTextElement.textContent = shortBio;
            buttonText.textContent = 'See More';
            isFullBio = false;
        } else {
            bioTextElement.textContent = fullBio;
            buttonText.textContent = 'See Less';
            isFullBio = true;
        }
    });
});
