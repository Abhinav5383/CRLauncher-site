function guessSystem() {
    if (!window.navigator) {
        return "unknown";
    }

    const p = window.navigator.platform;

    return contains(p, "Win") ? "windows" : (contains(p, "Mac") ? "macos" : (contains(p, "Linux") ? "linux" :
                (contains(p, "X11") || contains(p, "Wayland") ? "linux" : "unknown")));
}

function contains(haystack, needle) {
    return haystack.indexOf(needle) != -1;
}

function downloadLauncher() {
    const os = guessSystem();

    if (os === undefined || os == null || os === "unknown") {
        var link = document.createElement("a");
        link.href = "https://github.com/CRLauncher/CRLauncher/releases/latest";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        return;
    }

    let fileName;

    switch (os) {
        case "windows":
            fileName = "CRLauncher.exe";
            break;

        case "linux":
            fileName = "CRLauncher.jar";
            break;

        case "macos":
            fileName = "CRLauncher.zip";
            break
    }

    var link = document.createElement("a");
    link.href = "https://github.com/CRLauncher/CRLauncher/releases/latest/download/" + fileName;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function detectOS() {
    const platform = window.navigator.platform;

    if (platform.indexOf("Win") !== -1) return "windows";
    if (platform.indexOf("Mac") !== -1) return "mac";
    if (platform.indexOf("Linux") !== -1 || platform.indexOf("X11") !== -1) return "linux";

    return "unknown";
}