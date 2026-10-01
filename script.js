```javascript
// ======================================================
// S M JOBS - PUBLIC ACADEMIC PORTFOLIO
// Files placed in the GitHub "uploads" folder
// can be viewed and downloaded by visitors.
// ======================================================

const categories = [
    {
        id: "quiz",
        title: "Quiz",
        folder: "quiz"
    },
    {
        id: "longquiz",
        title: "Long Quiz",
        folder: "longquiz"
    },
    {
        id: "examination",
        title: "Examination",
        folder: "examination"
    },
    {
        id: "activity",
        title: "Activity",
        folder: "activity"
    },
    {
        id: "project",
        title: "Project",
        folder: "project"
    }
];

const container = document.getElementById("categories");

// ======================================================
// YOUR PUBLIC FILES
// ======================================================
//
// Put your files inside:
//
// uploads/
// ├── quiz/
// ├── longquiz/
// ├── examination/
// ├── activity/
// └── project/
//
// Then add the filenames below.
//
// IMPORTANT:
// The filename must exactly match the file in GitHub.
// ======================================================

const publicFiles = {
    quiz: [
        // Example:
        // "quiz-1.pdf",
        // "quiz-2.jpg"
    ],

    longquiz: [
        // "long-quiz-1.pdf"
    ],

    examination: [
        // "midterm-exam.pdf",
        // "final-exam.pdf"
    ],

    activity: [
        // "activity-1.pdf",
        // "activity-picture.jpg"
    ],

    project: [
        // "final-project.pdf",
        // "project-picture.jpg"
    ]
};


// ======================================================
// RENDER CATEGORIES
// ======================================================

function renderCategory(category, index) {

    const box = document.createElement("article");

    box.className = "category-box";
    box.id = category.id;

    box.innerHTML = `
        <div class="category-header">

            <div>
                <div class="category-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <h3>${escapeHTML(category.title)}</h3>
            </div>

        </div>

        <p class="upload-info">
            Academic files and pictures for ${escapeHTML(category.title)}.
            Visitors can view and download these files.
        </p>

        <div class="file-grid" id="grid-${category.id}"></div>
    `;

    container.appendChild(box);

    renderFiles(category);
}


// ======================================================
// DISPLAY PUBLIC FILES
// ======================================================

function renderFiles(category) {

    const grid = document.getElementById(
        "grid-" + category.id
    );

    const files = publicFiles[category.id] || [];

    if (files.length === 0) {

        grid.innerHTML = `
            <div class="empty-message">
                No files uploaded yet.
            </div>
        `;

        return;
    }

    grid.innerHTML = files.map((fileName) => {

        const filePath =
            `uploads/${category.folder}/${encodeURIComponent(fileName)}`;

        const extension =
            fileName.split(".").pop().toLowerCase();

        const isImage =
            ["jpg", "jpeg", "png", "gif", "webp", "bmp"]
            .includes(extension);

        let preview;

        if (isImage) {

            preview = `
                <img
                    src="${filePath}"
                    alt="${escapeHTML(fileName)}"
                    loading="lazy"
                >
            `;

        } else {

            preview = `
                <div class="file-icon">
                    📄
                </div>
            `;
        }

        return `
            <div class="file-card">

                <div class="file-preview">
                    ${preview}
                </div>

                <div class="file-details">

                    <div
                        class="file-name"
                        title="${escapeHTML(fileName)}"
                    >
                        ${escapeHTML(fileName)}
                    </div>

                    <div class="file-actions">

                        <a
                            class="view-btn"
                            href="${filePath}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View
                        </a>

                        <a
                            class="download-btn"
                            href="${filePath}"
                            download="${escapeHTML(fileName)}"
                        >
                            Download
                        </a>

                    </div>

                </div>

            </div>
        `;

    }).join("");
}


// ======================================================
// HTML SECURITY
// ======================================================

function escapeHTML(value) {

    return String(value).replace(
        /[&<>"']/g,
        char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        }[char])
    );
}


// ======================================================
// START
// ======================================================

categories.forEach(renderCategory);


// ======================================================
// MOBILE MENU
// ======================================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });

    });
}
```
