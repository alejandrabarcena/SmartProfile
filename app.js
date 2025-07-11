function render(variables = {}) {
  let cover = variables.includeCover
    ? `<div class="cover" style="background-image: url('${variables.background}')"></div>`
    : "<div class='cover'></div>";

  let name = variables.name || "";
  let lastName = variables.lastName || "";
  let role = variables.role || "";
  let city = variables.city || "";
  let country = variables.country || "";
  let avatarURL = variables.avatarURL || "https://randomuser.me/api/portraits/men/45.jpg";
  let socialPosition = variables.socialMediaPosition === "right" ? "right" : "left";

  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${avatarURL}" class="avatar" />
      <h1>${name} ${lastName}</h1>
      <h2>${role}</h2>
      <h3>${city}, ${country}</h3>
      <ul class="social ${socialPosition}">
        <li><a href="https://twitter.com/${variables.twitter || ""}">Twitter</a></li>
        <li><a href="https://github.com/${variables.github || ""}">GitHub</a></li>
        <li><a href="https://linkedin.com/in/${variables.linkedin || ""}">LinkedIn</a></li>
        <li><a href="https://instagram.com/${variables.instagram || ""}">Instagram</a></li>
      </ul>
    </div>`;
}

window.onload = () => {
  const defaultData = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "left",
    twitter: "twitteruser",
    github: "githubuser",
    linkedin: "linkedinuser",
    instagram: "instauser",
    name: "Your name",
    lastName: "Your lastname",
    role: "Web Developer",
    city: "Miami",
    country: "USA"
  };

  window.variables = defaultData;
  render(window.variables);

  // Actualiza datos al cambiar inputs
  document.querySelectorAll(".controls input, .controls select").forEach(el => {
    el.addEventListener("change", () => {
      const id = el.id;
      const value = el.type === "checkbox" ? el.checked : el.value;
      window.variables[id] = value;
      render(window.variables);
    });
  });
};
