const tempoPanelId = 'tempoIssueViewPanel';

const observer = new MutationObserver((mutations, obs) => {
    // 1. Look for the Tempo panel inside the current document
    const tempoPanel = document.getElementById(tempoPanelId);

    if (tempoPanel) {
        // 2. We found the panel. Now find its closest parent element 
        //    that belongs to the Jira issue view structure (usually a web panel wrapper).
        //    We look for a div with the generic Jira app-panel-key attribute.
        let wrapper = tempoPanel.closest('div[data-jira-app-panel-key]');

        // 3. If a wrapper is not found, try removing the panel itself.
        if (!wrapper) {
            wrapper = tempoPanel;
        }

        // 4. Aggressively remove the element from the DOM
        if (wrapper) {
            wrapper.remove();
            obs.disconnect(); 
        }
    }
});

// Start observing the entire document body for the element to appear
observer.observe(document.body, {
    childList: true, 
    subtree: true 
});
