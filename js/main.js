const gallery = document.getElementById("gallery");
images.forEach((image, index) => {
  gallery.innerHTML += `<div class="col-6 col-md-6 col-lg-3">
                <div class="gallery-block">
                <img
                  src="${image.src}"
                  alt="${image.alt}"
                  class="gallery-img"
                  data-bs-toggle="modal"
                  data-bs-target="#galleryModal"
                  data-index="${index}"
                />
              </div> 
            </div>`;
});

// クリック
let current = 0;
const galleryImages = document.querySelectorAll(".gallery-img");
galleryImages.forEach((img) => {
  img.onclick = function () {
    current = Number(this.dataset.index);
    showImage();
  };
});

// 画像表示
function showImage() {
  modalImage.src = images[current].src;
  modalImage.alt = images[current].alt;
  counter.textContent = `${current + 1} / ${images.length}`;
}

// 次へ
nextBtn.onclick = () => {
  current++;
  if (current >= images.length) {
    current = 0;
  }
  showImage();
};

// 前へ
prevBtn.onclick = () => {
  current--;
  if (current < 0) {
    current = images.length - 1;
  }
  showImage();
};

// animate css参照
const target = document.querySelectorAll(".js-target");

//オプション設定
const options = {
  root: null,
  rootMargin: "-20% 0px",
  threshold: 0,
};

//Intersection Observerの呼び出し
const observer = new IntersectionObserver(callback, options);
target.forEach((tgt) => {
  observer.observe(tgt);
});

//要素が交差したときの指示
function callback(entries) {
  entries.forEach((entry) => {
    const target = entry.target;
    if (entry.isIntersecting) {
      target.classList.add("is-active");
    }
  });
}
