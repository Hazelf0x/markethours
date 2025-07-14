# Global Market Hours Dashboard

A sleek, real-time, and fully responsive dashboard that displays the live status of major global financial markets. It automatically calculates countdowns to the next market open in the user's local timezone and clearly indicates when markets are open, closed, or overlapping.

## Live Demo

**(You can add your GitHub Pages link here once you've deployed it!)**

## Features

* **Real-Time Countdowns:** For any closed market, a live countdown shows the precise time until the next opening bell.
* **Timezone-Aware:** Automatically detects the user's local timezone and displays all information relative to them.
* **Daylight Saving Time (DST) Aware:** The logic is built to handle DST changes automatically for all markets, ensuring year-round accuracy.
* **Session Overlap Indicator:** When two or more markets are open simultaneously (e.g., the high-volume London/New York overlap), their cards will glow with a distinct blue border.
* **Customizable Opening Alerts:** Users can click a bell icon on any market card to receive a browser notification 5 minutes before that market opens.
* **Clean, Modern UI:** Built with Tailwind CSS for a responsive, dark-themed interface that's easy on the eyes.

## How to Use

1.  **Open the Dashboard:** Simply open the `dashboard.html` file in a browser or navigate to the live URL.
2.  **Check Status:** At a glance, see if a market is "Open" (green) or view the countdown timer if it's closed (red).
3.  **Enable Alerts:** Click the bell icon on a market's card. The bell will turn blue, indicating that alerts are active for that market. Your browser will ask for permission the first time you do this.
4.  **Spot Overlaps:** Look for the blue glow around market cards to identify overlapping sessions.

## Local Setup

To run this dashboard locally with all features (including notifications) enabled, you need to serve the `dashboard.html` file from a local web server.

1.  **Navigate to the project folder** in your terminal.
2.  **Run a simple Python web server:**
    ```bash
    python -m http.server
    ```
3.  **Open your browser** and go to `http://localhost:8000/dashboard.html`.

## Deployment

This project can be easily deployed for free using [GitHub Pages](https://pages.github.com/).

1.  Create a new **public** repository on GitHub.
2.  Upload the `dashboard.html` file to the repository.
3.  In the repository settings, go to the **Pages** tab.
4.  Select the `main` branch as the source and click **Save**.
5.  Your dashboard will be live at `https://your-username.github.io/your-repository-name/dashboard.html`.

## Technologies Used

* **HTML5**
* **Tailwind CSS**
* **JavaScript (ES6+)**

---

*This project was created with the help of Gemini.*
