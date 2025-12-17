document.addEventListener("DOMContentLoaded", () => {

  const load = async (id, file) => {
    const el = document.getElementById(id);
    if (!el) return;

    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(file + " not found");
      el.innerHTML = await res.text();
    } catch (e) {
      console.error(e);
    }
  };

  load("site-header", "header.html");
  load("site-footer", "footer.html");

});
