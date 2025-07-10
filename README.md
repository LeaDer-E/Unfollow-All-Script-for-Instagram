# Unfollow All Script for Instagram

This script automates the process of unfollowing people on Instagram using your web browser. It is designed to scroll through the list, click the "Following" button, then confirm "Unfollow," ensuring that no accounts are skipped.

---

## 📌 **How It Works**
This script runs inside the browser's developer console and:
1. **Finds all** the "Following" buttons.
2. **Clicks each** "Following" button to trigger the "Unfollow" popup.
3. **Waits** for the "Unfollow" button to appear, then clicks it.
4. **Repeats** the process for each person in the list.
5. **Scrolls down automatically** to load more accounts and continues the process until no more accounts are left.

---

## 🛠 **How to Use**

### **Step 1: Open Instagram Following List**
1. Open [Instagram](https://www.instagram.com/) in **Google Chrome**.
2. Go to your profile.
3. Click on the "Following" count to open the list of people you follow.

### **Step 2: Open Developer Console**
1. Press `F12` (or `Ctrl + Shift + I` on Windows / `Cmd + Option + I` on Mac) to open Developer Tools.
2. Navigate to the **Console** tab.

### **Step 3: Run the Script**
1. Copy the following script:

```javascript
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
```

# Version 2 (Faster)
```javascript
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
```

# or Use the Fastest Ever
```javascript
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
```
2. **Paste** it into the **console** and press `Enter`.

3. The script will start running automatically. Just wait until it finishes.

---


## ⚠️ Important Note on Script Speed (Read Carefully!)

Although using the script at high speed might seem tempting to save time, it is **the most dangerous behavior for your account**.

Instagram's systems are specifically designed to detect activities performed at **inhuman speeds**. When you unfollow dozens of accounts in a single moments, you are immediately flagged as a **"bot"**, which can lead to severe consequences.

### What are the risks?
* **Temporary Blocks (Action Blocked):** Instagram will prevent you from performing any actions (like following, liking, or commenting) for a period that can last several days.
* **Loss of Account Access:** You may be asked to verify your identity to regain access to your account.
* **Permanent Ban:** In cases of repeated offenses or highly suspicious activity, your account may be permanently disabled.

### Our Advice:
**Safety first, speed second**. Always use reasonable delay intervals (`delays`) between each operation (at least 1 second). It is better to take a little longer than to risk losing the account you've built.

**Use this script at your own personal risk.**

---

## 🚀 **Features**
✅ Unfollows **everyone automatically**.
✅ **Scrolls down** to load more users.
✅ Waits for elements to **prevent errors**.
✅ Logs progress in the console.
✅ No need to manually click anything.

---

## ⚠ Important Notes

* This script only works on Instagram Web (not in the mobile app).
* Do not refresh the page while the script is running.
* Instagram may limit actions if you unfollow too many people at once. If the script stops working, wait a few hours and try again.
* Use at your own risk! Instagram has automated detection systems that may temporarily restrict your account if too many unfollows happen too quickly.
* If the script stops working because followers are not loading, close the following list, reopen it, and run the script again.

---

## ⏱ Performance & Speed

In 28 seconds, the script successfully unfollowed 5 people.

Estimated time to unfollow 100 people: ~9 minutes and 20 seconds.

The speed may vary depending on internet speed and system performance.


---

## 📷 Screenshots & Demo

📌 Before Running the Script

![image](https://github.com/user-attachments/assets/93062a86-989e-4899-a015-01d2f2dc3aa0)


📌 After Running the Script

![image](https://github.com/user-attachments/assets/78768f46-aeb0-448b-aae4-be4ba0738610)

🎥 Live Demo

![Screencast from 2025-03-18 01-08-06](https://github.com/user-attachments/assets/45383cb8-4676-42dd-a609-ceae0f964da8)

---

## 📩 **Need Help?**
If you have any issues or suggestions, feel free to reach out!

Happy unfollowing! 🚀

