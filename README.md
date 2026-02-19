# Terminal Portfolio - Saifullah Anik

A React + Vite developer portfolio with a terminal interface.

## Tech Stack
- **React**: UI library
- **Vite**: Build tool
- **Vanilla CSS**: Custom terminal styling
- **Netlify**: Hosting & Forms

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository (or extract the zip).
2. Open your terminal in the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## Using the Terminal
Type commands directly into the terminal.
- `help`: List all commands
- `about`: Bio and location
- `skills`: Technical stack
- `projects`: View work
- `projects --open <index>`: Open a project link (e.g., `projects --open 1`)
- `experience`: Work history
- `education`: Academic background
- `contact`: Email and social links
- `clear`: Reset terminal output
- `theme`: Toggle dark/light theme
- `resume`: Download placeholder resume.pdf

**Shortcuts:**
- `TAB`: Autocomplete commands
- `UP/DOWN Arrows`: Navigate command history

## Customization
All user data is stored in `src/data/userData.json`. Edit this file to update your personal information, projects, and social links.

## Deployment

### Deploy to Netlify
1. Build the project:
   ```bash
   npm run build
   ```
2. Drag and drop the `dist` folder to the [Netlify Drop](https://app.netlify.com/drop) page.
3. **OR** connect your GitHub repository to Netlify for automatic deployments.

### Custom Domain (anik.ami.bd)
To set up your custom domain via Ready.bd:
1. Go to your domain settings in Ready.bd.
2. Use **Quick Connect** or manually add a **CNAME** record pointing `anik.ami.bd` to your Netlify site URL (e.g., `your-site-name.netlify.app`).

---
Built with ❤️ by Saifullah Anik
