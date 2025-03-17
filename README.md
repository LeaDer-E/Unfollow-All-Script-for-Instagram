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

2. **Paste** it into the **console** and press `Enter`.

3. The script will start running automatically. Just wait until it finishes.

---

## 🚀 **Features**
✅ Unfollows **everyone automatically**.
✅ **Scrolls down** to load more users.
✅ Waits for elements to **prevent errors**.
✅ Logs progress in the console.
✅ No need to manually click anything.

---

## ⚠ **Important Notes**
- This script **only works on Instagram Web** (not in the mobile app).
- **Do not refresh the page** while the script is running.
- Instagram may **limit actions** if you unfollow too many people at once. If the script stops working, wait a few hours and try again.
- **Use at your own risk!** Instagram has automated detection systems that may temporarily restrict your account if too many unfollows happen too quickly.

---

⏳ Performance & Speed

The script unfollowed 5 people in 28 seconds.

Estimated time to unfollow 100 people: ~9-10 minutes (depends on page load speed and delays between actions).

Performance may vary depending on your internet connection and Instagram’s response time.

---

📷 Screenshots & Demo

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

