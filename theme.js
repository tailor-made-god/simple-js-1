(function () {
  const STORAGE_KEY = "simple-js-theme";
  const root = document.documentElement;

  //   System Prefered Theme
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", initialTheme);

  //   Injecting Toggle
  window.addEventListener("DOMContentLoaded", () => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "theme-toggle";
    btn.setAttribute("aria-label", "Toggle dark mode");

    function updateLabel(theme) {
      btn.textContent = theme === "dark" ? "☀️ Light" : "🌙 Dark";
    }

    updateLabel(initialTheme);

    btn.addEventListener("click", () => {
      const next =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem(STORAGE_KEY, next);
      updateLabel(next);
    });

    document.body.appendChild(btn);
  });
})();
