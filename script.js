// ===============================
// MOBILE MENU
// ===============================
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navMenu");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("active"));

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => nav.classList.remove("active"));
    });
}

// ===============================
// YOUR FILES (edit this list)
// Put the files in a "files" folder next to index.html,
// then add one line per file.
// ===============================
const portfolioFiles = {
    const portfolioFiles = {
    quiz: [
        { name: "Quiz 1", file: "Quiz.png" },
        { name: "Quiz 2", file: "files/quiz/quiz2.png" },
    ],
    longquiz: [],
    midterms: [],
    finals: [],
    activity: [
        { name: "Activity 1", file: "files/activity/activity1.png" },
    ],
    project: []
};
// ===============================
// RENDER FILES (view + download only)
// ===============================
const imageTypes = ["jpg", "jpeg", "png", "gif", "webp"];

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

function getExtension(path) {
    return path.split(".").pop().toLowerCase();
}

function createFileCard(item) {
    const ext = getExtension(item.file);
    const name = escapeHtml(item.name);
    const path = encodeURI(item.file);

    const preview = imageTypes.includes(ext)
        ? `<img src="${path}" alt="${name}" class="file-thumb">`
        : `<div class="file-icon">${escapeHtml(ext.toUpperCase())}</div>`;

    return `
        <div class="file-card">
            ${preview}
            <p class="file-name">${name}</p>
            <div class="file-actions">
                <a href="${path}" target="_blank" rel="noopener" class="file-btn view">View</a>
                <a href="${path}" download class="file-btn download">Download</a>
            </div>
        </div>
    `;
}

Object.keys(portfolioFiles).forEach(category => {
    const container = document.getElementById(category + "Files");
    if (!container) return;

    const items = portfolioFiles[category];

    container.innerHTML = items.length
        ? items.map(createFileCard).join("")
        : `<p class="empty-message">No files yet.</p>`;
});
