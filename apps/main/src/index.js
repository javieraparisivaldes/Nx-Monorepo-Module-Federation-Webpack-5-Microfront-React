// Use dynamic import here to allow webpack to interface with module federation code
window.microCallejeroUrl = "http://localhost:3001";
window.microUsersUrl = "http://localhost:3003";
window.libsUrl = "http://localhost:3002";

import("./bootstrap");
