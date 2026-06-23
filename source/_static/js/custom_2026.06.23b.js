document.addEventListener('DOMContentLoaded', function() {
  removeBreadcrumbs();
  switchButtonsToLinks();
  setupCopyCode();
  setupDownloadCode();
  setupGithubCorner();
  if (!isDevelopmentMode()) {
    setupGurubase();
    setupTranslation();
  }
});

function isDevelopmentMode() {
  return window.location.href.startsWith("file:");
}

function switchButtonsToLinks() {
  document.querySelectorAll(".rst-footer-buttons > .btn").forEach(button => {
    button.classList.remove("btn", 'btn-neutral');
  })
}

function removeBreadcrumbs() {
  const content = document.querySelector('.rst-content');
  if (content && content.children.length > 0) {
    const navigation = content.children.item(0);
    if (navigation) {
      const role = navigation.attributes.getNamedItem("role");
      if (role && role.value === "navigation") {
        navigation.style.display = "none";
      }
    }
  }
}

function setupGithubCorner() {
  const url = window.ITB_GITHUB_URL || 'https://github.com/ISAITB/gitb';
  const a = document.createElement('a');
  a.href = url;
  a.className = 'github-corner';
  a.setAttribute('aria-label', 'View source on GitHub');
  a.setAttribute('target', '_blank');
  a.innerHTML = `<svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
    <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm"></path>
    <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
  </svg>`;
  document.body.appendChild(a);
}

function setupDownloadCode() {
  const downloadSVG = `<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'>
    <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/>
    <polyline points='7 10 12 15 17 10'/>
    <line x1='12' y1='15' x2='12' y2='3'/>
  </svg>`;
  const tickSVG = `<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'>
    <polyline points='20 6 9 17 4 12'/>
  </svg>`;
  document.querySelectorAll('[class*="itb-download-"]').forEach(outerBlock => {
    const downloadClass = Array.from(outerBlock.classList).find(c => c.startsWith('itb-download-'));
    if (!downloadClass) return;
    let filename = downloadClass.slice('itb-download-'.length);
    if (!filename.includes('.')) {
      const lastDash = filename.lastIndexOf('-');
      if (lastDash !== -1) {
        filename = filename.slice(0, lastDash) + '.' + filename.slice(lastDash + 1);
      }
    }
    const highlight = outerBlock.querySelector('.highlight');
    if (!highlight) return;
    const button = document.createElement('button');
    button.className = 'download-code-button';
    button.ariaLabel = 'Download file';
    button.innerHTML = downloadSVG;
    button.addEventListener('click', () => {
      if (button.classList.contains('itb-active')) return;
      const pre = highlight.querySelector('pre');
      if (!pre) return;
      const blob = new Blob([pre.textContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
      button.innerHTML = tickSVG;
      button.classList.add('itb-active');
      setTimeout(() => {
        button.innerHTML = downloadSVG;
        button.classList.remove('itb-active');
      }, 1000);
    });
    highlight.append(button);
  });
}

function setupCopyCode() {
  const codeBlocks = document.querySelectorAll(".highlight");
  if (codeBlocks) {
    codeBlocks.forEach((codeBlock) => {
      const button = document.createElement("button");
      button.className = "copy-code-button";
      button.ariaLabel = "Cody code";
      button.innerHTML = `<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'>
            <rect x='9' y='9' width='13' height='13' rx='2' ry='2'></rect>
            <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
          </svg>`;
      button.addEventListener("click", function(event) {
        const codeContent = event.currentTarget.parentElement.querySelector("pre");
        if (codeContent) {
          navigator.clipboard.writeText(codeContent.innerText.trim()).then(() => {});
          const button = event.currentTarget;
          button.classList.add('itb-active');
          button.innerHTML = `<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'>
              <polyline points='20 6 9 17 4 12'></polyline>
            </svg>`;
          setTimeout(() => {
            button.classList.remove('itb-active');
            button.innerHTML = `<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'>
            <rect x='9' y='9' width='13' height='13' rx='2' ry='2'></rect>
            <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
          </svg>`;
          }, 1000);
        }
      });
      codeBlock.append(button);
    });
  }
}

function setupGurubase() {
  // Customize widget settings
  const widgetSettings = {
    widgetId: "fOdYTrVRnBErZXp2BZ3w42g8hwEzQuz9AwP-vEs3xgg",
    // widgetId: "hFj-Ag2L5m4z1AdRAE4OECT9G2MIks1b4OjNr0qreF0",
    text: "Ask AI",
    iconUrl: "https://www.itb.ec.europa.eu/files/images/itb_small.png",
    margins: { bottom: "20px", right: "34px" }, // Optional
    lightMode: true, // Optional - Force light mode
    bgColor: "#3b81bb", // Optional - Widget background color
    name: "ITB" // Optional - Widget name
  };

  // Load the GuruBase widget
  const guruScript = document.createElement("script");
  // guruScript.src = "https://www.itb.ec.europa.eu/files/gurubase/widget.latest.min.js";
  guruScript.src = "https://widget.gurubase.io/widget.latest.min.js";
  guruScript.defer = true;
  guruScript.id = "guru-widget-id";

  // Add widget settings as data attributes
  Object.entries({
    "data-widget-id": widgetSettings.widgetId,
    "data-text": widgetSettings.text,
    "data-margins": JSON.stringify(widgetSettings.margins),
    "data-light-mode": widgetSettings.lightMode,
    "data-bg-color": widgetSettings.bgColor,
    "data-icon-url": widgetSettings.iconUrl,
    "data-name": widgetSettings.name
  }).forEach(([key, value]) => {
    guruScript.setAttribute(key, value);
  });

  // Append the script to the document
  document.body.appendChild(guruScript);
}

function setupTranslation() {
  // Create the scripts
  const scriptBlock = document.createElement("script");
  scriptBlock.src = "https://webtools.europa.eu/load.js";
  scriptBlock.defer = true;
  const configBlock = document.createElement("script");
  configBlock.type = "application/json";
  configBlock.textContent = JSON.stringify({
    "service": "etrans",
    "languages": {
      "exclude": [
        "en", "ru", "uk", "zh"
      ]
    },
    "renderAs": {
      "icon": false,
      "button": false,
      "link": true
    },
    "renderTo": "eTransTarget"
  });
  const eTransContainer = document.createElement("div");
  eTransContainer.classList.add("translation-container", "hidden");
  eTransContainer.innerHTML = `
    <div class="translation-button">
      <div class="translation-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"></path><path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"></path></svg></div>
      <div class="translation-link">Translate this page</div>
    </div>
    <div class="translation-status hidden"></div>
    <div id="eTransTarget"></div>
  `;
  const target = document.querySelector(".wy-menu");
  if (target && target.parentNode) {
    target.parentNode.insertBefore(eTransContainer, target.nextSibling);
    document.querySelector(".translation-button").addEventListener("click", (event) => {
      const link = document.querySelector("#eTransLink");
      if (link) {
        link.click();
      }
    });
    document.body.appendChild(configBlock);
    document.body.appendChild(scriptBlock);
  }
  document.querySelectorAll(".notranslate").forEach((element) => {
    element.setAttribute("translate", "no");
  });

  window.addEventListener("wtEtransReady", () => {
    eTransContainer.classList.remove("hidden");
    const leftMenuContainer = document.querySelector(".wy-nav-side");
    if (leftMenuContainer) {
      leftMenuContainer.style.paddingBottom = "0";
    }
  });
  window.addEventListener('wtTranslationEnd', (e) => {
    const requester = document.getElementById('wtEtransRequester');
    if (requester) {
      const text = requester.innerText.trim();
      const status = document.querySelector(".translation-status");
      if (status) {
        document.querySelector(".translation-button").classList.add("hidden");
        status.textContent = text;
        status.classList.remove("hidden");
      }
    }
  });
  window.addEventListener('wtTranslationError', (e) => {
    console.log("Translation error.");
    console.log(e.parameters.message);
  })

}
