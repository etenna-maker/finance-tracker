import { load, save } from "./storage.js";
import { validate } from "./validators.js";

let records = load();
const el = (id) => document.getElementById(id);

function render() {
let re=null;
el("search-error").textContent = "";
try {
    if (el("search").value) re = new RegExp(el("search").value, "gi");
  } catch {
     el("search-error").textContent = "Invalid regex";
  }
  const list= records.filter((r) => !re || r.description.search(re) !==-1);
  if (el("sort").value == "amount-desc") list.sort((a,b) => b.amount - a.amount);
    el("tbody").innerHTML = "";
    list.forEach((r) => {
        let desc = r.description.replace(/</g, "&lt;");
            if (re) desc= desc.replace(re,(m) => `<mark>${m}</mark>`);
              el("tbody").innerHTML += `<tr><td>${r.date}</td><td>${desc}</td><td>${r.category}</td><td>${r.amount}</td><td><button data-id="${r.id}">Delete</button></td></tr>`;
    });
    el("stat-count").textContent = records.length;
    el("stat-sum").textContent = records.reduce((sum, r) => sum + r.amount, 0);
}
el("txn-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;
    ["description", "amount", "category", "date"].forEach((f) => {
        el(f + "-error").textContent = validate(f, el(f).value);
        if (el(f + "-error").textContent) ok = false;
    });
    if (!ok) return;
    const now = new Date().toISOString();
    records.push({ id: "txn_" + Date.now(), description: el("description").value, amount: Number(el("amount").value), category: el("category").value, date: el("date").value, createdAt: now, updatedAt: now });
    save(records);
    render();
});
el("tbody").addEventListener("click", (e) => {
    if (e.target.dataset.id && confirm("Delete?")) {
        records = records.filter((r) => r.id !== e.target.dataset.id);
        save(records);
        render();
    }
});
el("search").addEventListener("input", render);
render();