async function unfollowAll() {
    while (true) {
        let buttons = Array.from(document.querySelectorAll('button')).filter(btn => btn.innerText.trim() === "Following");

        if (buttons.length === 0) {
            console.log("No more 'Following' buttons found.");
            break;
        }

        for (let i = 0; i < buttons.length; i++) {
            let followingButton = buttons[i];

            followingButton.scrollIntoView({ behavior: "smooth", block: "center" });
            console.log(`Clicking Following button for person ${i + 1}`);
            await new Promise(resolve => setTimeout(resolve, 1000));
            followingButton.click();

            // Wait for the Unfollow button to appear
            await new Promise(resolve => setTimeout(resolve, 2000));

            let unfollowButton = Array.from(document.querySelectorAll('button')).find(btn => btn.innerText.trim() === "Unfollow");

            if (unfollowButton) {
                unfollowButton.scrollIntoView({ behavior: "smooth", block: "center" });
                console.log(`Clicking Unfollow button for person ${i + 1}`);
                await new Promise(resolve => setTimeout(resolve, 1000));
                unfollowButton.click();
                console.log(`Unfollowed person ${i + 1} successfully!`);
            } else {
                console.error("Unfollow button not found, skipping...");
            }

            await new Promise(resolve => setTimeout(resolve, 2000));
        }

        console.log("Scrolling down to load more...");
        window.scrollBy(0, 300);
        await new Promise(resolve => setTimeout(resolve, 3000));
    }

    console.log("Finished unfollowing all.");
}

// Run the function
unfollowAll();
