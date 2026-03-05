
# 2026 Campaign Deployment & Maintenance Guide

This guide provides instructions for managing the administrative side of the David Chandler 2026 Campaign website and syncing your code with GitHub.

## 1. Syncing Code with GitHub (THE "EXPORT" PROCESS)

Firebase Studio does not have a "Download" or "Export" button for GitHub. Instead, you use the **Terminal** at the bottom of your screen to push the files.

### Commands to Run in the Terminal:
1.  **Open the Terminal** (the black box at the bottom of Firebase Studio).
2.  **Run these commands** one by one:
    ```bash
    git add .
    git commit -m "Update campaign files for 2026 launch"
    git remote set-url origin https://github.com/dchandler4949-hash/parish-site.git
    git push origin main
    ```
3.  **Verify:** Visit `https://github.com/dchandler4949-hash/parish-site` to ensure your files (like `package.json` and the `src` folder) are now visible.

## 2. Connecting your Domain (davidchandler.uk)

Custom domains must be manually configured in the Firebase Console.

### Setup Steps
1.  Navigate to the [Firebase Console](https://console.firebase.google.com/).
2.  Select your project: `studio-6160299788-dda9b`.
3.  In the left sidebar, go to **Build** > **App Hosting**.
4.  Select your active backend (`parish-site`).
5.  Click the **Settings** tab and look for **Custom Domains**.
6.  Click **Add Domain** and enter `davidchandler.uk`.
7.  Copy the **DNS Records** (A and TXT) provided and paste them into your domain registrar's settings.

## 3. Troubleshooting Build Errors
- **"package.json not found":** This means Step 1 above was skipped or failed. Run the `git push` commands again.
- **"ReferenceError: cn is not defined":** I have applied a fix for this in the code. Once you push the updated code to GitHub, this error will disappear.

---
*Promoted by David Chandler, 55 Girton Close, Mildenhall, Bury St Edmunds, Suffolk, IP28 7PT.*
