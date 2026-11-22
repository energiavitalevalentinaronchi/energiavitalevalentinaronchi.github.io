"use strict";

const menu = document.querySelector(".primary-nav");
const toggle = document.querySelector(".menu-toggle");
const compact = window.matchMedia("(max-width: 56.25rem)");

function showCompactMenu(open) {
  toggle.setAttribute("aria-expanded", String(open));
  menu.hidden = compact.matches && !open;
}

function updateMenu() {
  const focusWasInside = menu.contains(document.activeElement);
  toggle.hidden = !compact.matches;
  showCompactMenu(false);
  if (compact.matches && focusWasInside) toggle.focus();
}

toggle.addEventListener("click", () => showCompactMenu(menu.hidden));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && compact.matches && !menu.hidden) {
    showCompactMenu(false);
    toggle.focus();
  }
});
compact.addEventListener("change", updateMenu);
updateMenu();

const form = document.querySelector("#modulo-contatti");
if (form) {
  const name = form.querySelector("#nome");
  const email = form.querySelector("#email");
  const phone = form.querySelector("#recapito");
  const message = form.querySelector("#messaggio");
  const status = form.querySelector("#stato-modulo");
  const draftPanel = form.querySelector("#bozza-pronta");
  const longDraft = form.querySelector("#bozza-estesa");
  const mailLink = form.querySelector("#apri-email");
  const copyButton = form.querySelector("#copia-messaggio");
  const fallback = form.querySelector("#bozza-fallback");
  const preview = form.querySelector("#testo-bozza");
  const mailBase = form.dataset.mailto;

  form.addEventListener("input", () => {
    name.setCustomValidity("");
    phone.setCustomValidity("");
    if (!draftPanel.hidden) {
      draftPanel.hidden = true;
      status.textContent = "";
      mailLink.href = mailBase;
      preview.value = "";
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    name.setCustomValidity(name.value.trim() ? "" : "Inserisci il tuo nome.");
    phone.setCustomValidity(phone.value.trim() ? "" : "Inserisci un numero a cui richiamarti.");
    if (!form.reportValidity()) return;

    const lines = [
      "Buongiorno, vorrei concordare un primo colloquio. Può richiamarmi al numero qui sotto?",
      "",
      "Nome: " + name.value.trim(),
      "Email: " + email.value.trim(),
      "Numero a cui richiamarmi: " + phone.value.trim(),
    ];
    const note = message.value.trim().replace(/\r\n|\n|\r/g, "\r\n");
    if (note) lines.push("", note);
    const body = lines.join("\r\n");

    const mailWithBody = mailBase + "&body=" + encodeURIComponent(body);
    const fitsInLink = mailWithBody.length <= 1900;
    longDraft.hidden = fitsInLink;
    mailLink.href = fitsInLink ? mailWithBody : mailBase;
    preview.value = body;
    fallback.hidden = true;
    draftPanel.hidden = false;
    status.textContent = "Bozza pronta. Puoi aprire l’app email o copiare il testo.";
  });

  copyButton.addEventListener("click", async () => {
    const body = preview.value;
    try {
      await navigator.clipboard.writeText(body);
      if (draftPanel.hidden) return;
      fallback.hidden = true;
      status.textContent = "Testo copiato. Puoi incollarlo nella tua email.";
    } catch {
      if (draftPanel.hidden) return;
      fallback.hidden = false;
      preview.focus();
      preview.select();
      status.textContent = "Il testo è selezionato. Puoi copiarlo e incollarlo nella tua email.";
    }
  });

  form.closest("details").hidden = false;
}
