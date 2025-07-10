async function unfollowAllMaximumSpeed() {
    // Reduce delays to the minimum
    // Note: You might need to increase 'delayForConfirmation' slightly if the confirmation button doesn't appear
    const delayBeforeClick = 50;       // Very short wait
    const delayForConfirmation = 200;  // Necessary wait only for the confirmation button to appear
    const delayAfterUnfollow = 50;     // Very short wait
    const delayAfterScroll = 1000;     // Wait for the page to load after scrolling

    while (true) {
        let buttons = Array.from(document.querySelectorAll('button')).filter(btn => btn.innerText.trim() === "Following");

        if (buttons.length === 0) {
            console.log("Finished, no more 'Following' buttons were found.");
            break;
        }

        console.log(`Found ${buttons.length} accounts. Processing at maximum speed.`);

        for (const button of buttons) {
            // We don't use 'smooth' scrolling to save time
            button.scrollIntoView({ block: "center" }); 
            await new Promise(resolve => setTimeout(resolve, delayBeforeClick));
            
            button.click();
            await new Promise(resolve => setTimeout(resolve, delayForConfirmation));

            // Find and click the "Unfollow" confirmation button
            let unfollowButton = Array.from(document.querySelectorAll('button')).find(btn => btn.innerText.trim() === "Unfollow");
            if (unfollowButton) {
                unfollowButton.click();
            }

            await new Promise(resolve => setTimeout(resolve, delayAfterUnfollow));
        }

        console.log("Scrolling down to load more...");
        window.scrollBy(0, window.innerHeight * 2); // Scroll a larger distance
        await new Promise(resolve => setTimeout(resolve, delayAfterScroll));
    }

    console.log("Finished unfollowing everyone.");
}

// To run the function
unfollowAllMaximumSpeed();
