document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const read_more_btn = document.getElementById("read_more")

read_more_btn.addEventListener("click", () => {
  const read_more = document.querySelector("read-more")
  read_more.style.display = "absolute"
})

document.getElementById("close-btn").addEventListener("click", () => {
  const read_more = document.querySelector("read-more")
  read_more.style.display = "none"
})