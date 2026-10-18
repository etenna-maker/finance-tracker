export function load() {
    try {
        return JSON. parse(localStorage.getItem("finance")) ||[];
    } catch {
        return[];
    }
}
export function save(data) {
    localStorage.setItem("finance", JSON.stringify(data));
}