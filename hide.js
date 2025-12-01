document.addEventListener('DOMContentLoaded', function() {
    const tempoPanelId = 'tempoIssueViewPanel';

    // Function that handles the hiding logic
    const hideTempoPanel = () => {
        const tempoPanel = document.getElementById(tempoPanelId);

        if (tempoPanel) {
            // Find the closest parent wrapper to remove the entire block cleanly
            let wrapper = tempoPanel.closest('div[data-jira-app-panel-key]');

            if (!wrapper) {
                // If wrapper isn't found, fall back to removing the panel itself
                wrapper = tempoPanel;
            }

            if (wrapper) {
                wrapper.remove();
                return true; // Indicate success
            }
        }
        return false; // Indicate failure
    };

    // 1. Try to hide it immediately once the DOM is ready
    if (hideTempoPanel()) {
        return; // Success! Stop here.
    }

    // 2. If it's not ready, start the Mutation Observer to catch it when it appears
    const observer = new MutationObserver((mutations, obs) => {
        if (hideTempoPanel()) {
            obs.disconnect(); // Stop watching after successful removal
        }
    });

    // Observe the main body of the document
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
