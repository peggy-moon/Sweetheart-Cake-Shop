/* 顧客評價 */
const testimonials = [
  {
    rating: 5,
    text: "每次經過都忍不住進來買，草莓千層真的是我吃過最好吃的！酥皮層次分明，奶油不會太甜，草莓新鮮多汁。店員服務也很親切，會推薦當日最新鮮的產品。已經成為我每週必買的甜點了！",
    name: "林小姐",
    meta: "台北市｜常客",
    avatar: "images/customer-01.jpg",
    avatarAlt: "顧客林小姐"
  },
  {
    rating: 5,
    text: "訂了生日蛋糕給女朋友，她超級喜歡！蛋糕不僅外觀精緻，口感更是一流。草莓可頌也很推薦，外皮酥脆，內餡香甜不膩。價格合理，品質優良，絕對會再回購！",
    name: "陳先生",
    meta: "新北市｜生日訂購",
    avatar: "images/customer-02.jpg",
    avatarAlt: "顧客陳先生"
  },
  {
    rating: 5,
    text: "甜心蛋糕坊是我們家的最愛！每次家庭聚會都會訂購他們的蛋糕。品質穩定，口味多樣，而且用料實在。特別喜歡他們的季節水果塔，每次都有驚喜。強烈推薦給所有愛吃甜點的朋友！",
    name: "王小姐",
    meta: "桃園市｜下午茶愛好者",
    avatar: "images/customer-03.jpg",
    avatarAlt: "顧客王小姐"
  }
];

const testimonialRating = document.getElementById("testimonial-rating");
const testimonialText = document.getElementById("testimonial-text");
const testimonialAvatar = document.getElementById("testimonial-avatar");
const testimonialName = document.getElementById("testimonial-name");
const testimonialMeta = document.getElementById("testimonial-meta");
const testimonialPrev = document.getElementById("testimonial-prev");
const testimonialNext = document.getElementById("testimonial-next");

let currentTestimonialIndex = 0;

function renderTestimonial() {
  const testimonial = testimonials[currentTestimonialIndex];

  testimonialText.textContent = testimonial.text;
  testimonialAvatar.src = testimonial.avatar;
  testimonialAvatar.alt = testimonial.avatarAlt;
  testimonialName.textContent = testimonial.name;
  testimonialMeta.textContent = testimonial.meta;
  testimonialRating.textContent = testimonial.rating;
}

if (testimonialRating &&
    testimonialText &&
    testimonialAvatar &&
    testimonialName &&
    testimonialMeta &&
    testimonialPrev &&
    testimonialNext
  ) {
    testimonialNext.addEventListener("click", () => {
    currentTestimonialIndex++;

    if (currentTestimonialIndex >= testimonials.length) {
      currentTestimonialIndex = 0;
    }

    renderTestimonial();
  });

  testimonialPrev.addEventListener("click", () => {
    currentTestimonialIndex--;

    if (currentTestimonialIndex < 0) {
      currentTestimonialIndex = testimonials.length - 1;
    }

    renderTestimonial();
  });
}