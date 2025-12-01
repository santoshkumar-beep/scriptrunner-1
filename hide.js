const targetSelector = '#tempoIssueViewPanel';

const observer = new MutationObserver((mutations, obs) => {
    const target = document.querySelector(targetSelector);
    if (target) {
        // Element found, hide it using display:none
        target.style.display = 'none';
        // Stop observing once the element is successfully hidden
        obs.disconnect(); 
    }
});

// Start observing the entire document body for changes in the subtree
// The subtree: true flag ensures we catch elements added deep inside the DOM
observer.observe(document.body, {
    childList: true, // Watch for new children nodes being added
    subtree: true    // Watch the entire tree for changes
});
