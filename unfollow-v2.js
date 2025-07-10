async function unfollowAllFaster() {
    // Delay speed in milliseconds (1000ms = 1 second)
    // You can adjust these values as you wish
    const delayBeforeClick = 250;       // Wait before clicking the "Following" button
    const delayForConfirmation = 500;   // Wait for the "Unfollow" confirmation button to appear
    const delayAfterUnfollow = 250;     // Wait after a successful unfollow
    const delayAfterScroll = 1500;      // Wait after scrolling down to load more

    while (true) {
        // Find all visible "Following" buttons on the page
        let buttons = Array.from(document.querySelectorAll('button')).filter(btn => btn.innerText.trim() === "Following");

        if (buttons.length === 0) {
            console.log("Finished, no more 'Following' buttons were found.");
            break;
        }

        console.log(`Found ${buttons.length} accounts.`);

        for (const button of buttons) {
            // Scroll the button into view
            button.scrollIntoView({ behavior: "smooth", block: "center" });
            await new Promise(resolve => setTimeout(resolve, delayBeforeClick));
            
            // Click the "Following" button
            button.click();
            await new Promise(resolve => setTimeout(resolve, delayForConfirmation));

            // Find and click the "Unfollow" confirmation button
            let unfollowButton = Array.from(document.querySelectorAll('button')).find(btn => btn.innerText.trim() === "Unfollow");
            if (unfollowButton) {
                unfollowButton.click();
                console.log("Successfully unfollowed!");
            } else {
                console.error("Could not find the 'Unfollow' confirmation button.");
            }

            await new Promise(resolve => setTimeout(resolve, delayAfterUnfollow));
        }

        console.log("Scrolling down to load more...");
        window.scrollBy(0, window.innerHeight); // Scroll by the height of the screen
        await new Promise(resolve => setTimeout(resolve, delayAfterScroll));
    }

    console.log("Finished unfollowing everyone.");
}

// To run the function
unfollowAllFaster();
