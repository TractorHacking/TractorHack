"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
/**
 * A non-failing version of async FS stat.
 *
 * @param file
 */
async function statAsync(file) {
    try {
        return await fs_extra_1.stat(file);
    }
    catch (_a) {
        return null;
    }
}
async function fileExistsAsync(file) {
    var _a, _b;
    return (_b = (_a = (await statAsync(file))) === null || _a === void 0 ? void 0 : _a.isFile()) !== null && _b !== void 0 ? _b : false;
}
exports.fileExistsAsync = fileExistsAsync;
async function directoryExistsAsync(file) {
    var _a, _b;
    return (_b = (_a = (await statAsync(file))) === null || _a === void 0 ? void 0 : _a.isDirectory()) !== null && _b !== void 0 ? _b : false;
}
exports.directoryExistsAsync = directoryExistsAsync;
function fileExists(file) {
    try {
        return fs_extra_1.statSync(file).isFile();
    }
    catch (e) {
        return false;
    }
}
exports.fileExists = fileExists;
//# sourceMappingURL=modules.js.map