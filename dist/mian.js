const activities = [
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-1.png",
  },
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-2.png",
  },
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-3.png",
  },
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-4.png",
  },
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-5.png",
  },
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-6.png",
  },
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-1.png",
  },
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-6.png",
  },
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-1.png",
  },
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-2.png",
  },
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-3.png",
  },
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-4.png",
  },
  ,
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-1.png",
  },
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-2.png",
  },
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-3.png",
  },
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-4.png",
  },
  ,
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-1.png",
  },
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-2.png",
  },
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-3.png",
  },
  {
    title: "Trickle Creek Ranch",
    badge: "$36/night",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    imgUrl: "./imgs/zach-betten-K-4.png",
  },
];

const menu = (document.getElementById("menu").onclick = () => {
  const aside = document.getElementById("sideNav");
  aside.classList.toggle("active");
  console.log(aside);
});
const showMore = document.getElementById("showMore");
showMore.addEventListener("click", renderGalary);
var startSliceGlary = 0;
var endSliceGlary = 12;
const galaryActivities = document.getElementById("activities");
function renderGalary() {
  if (endSliceGlary > activities.length) {
    showMore.style.display = "none";
    return;
  }
  let deley = 50;
  let duration = 1000;
  activities
    .slice(startSliceGlary, endSliceGlary)
    .forEach(({ badge, title, desc, imgUrl }) => {
      galaryActivities.innerHTML += `<div  data-aos="flip-left" data-aos-delay="${(deley += 10)}" data-aos-duration="${(duration += 200)}" class="card rounded-lg ">
          <img src="${imgUrl}" alt="" />
          <div class="p-4 w-fit font-bold text-main bg-white   rounded-lg -translate-y-1/2">${badge}</div>
          <h1 class="font-bold font-Arch text-xl">${title}</h1>
          <p >${desc}</p>
          <button type='submit' class="py-2 mt-3 bg-gray-100 px-8 rounded-full">Read More</button>
      </div>`;
    });
  startSliceGlary = endSliceGlary;
  endSliceGlary += 5;
}
renderGalary();
var UP = document.getElementById("UP");
window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    UP.classList.add("active");
  } else {
    UP.classList.remove("active");
  }
};
UP.onclick = function () {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
};
AOS.init({
  duration: 1200,
});
const loadingLayout = document.getElementById("loading");

window.onload = function () {
  setTimeout(() => {
    loadingLayout.classList.add("hidden");
  }, 2000);
};
