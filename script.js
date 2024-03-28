document.addEventListener("DOMContentLoaded", function() {
    const videoLinks = document.querySelectorAll(".gallery-item a");

    videoLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const videoSrc = this.getAttribute("href");

            // Videoyu oynatmak için modal oluştur
            const modal = document.createElement("div");
            modal.classList.add("video-modal");

            const video = document.createElement("video");
            video.setAttribute("controls", true);
            video.setAttribute("autoplay", true); // Videoyu otomatik olarak başlat

            const source = document.createElement("source");
            source.setAttribute("src", videoSrc);
            source.setAttribute("type", "video/mp4");

            video.appendChild(source);
            modal.appendChild(video);

            document.body.appendChild(modal);
        });
    });

    // Modalı kapatmak için tümüne tıklandığında
    document.addEventListener("click", function(e) {
        if (e.target.classList.contains("video-modal")) {
            document.body.removeChild(e.target);
        }
    });

    // Galeri resimlerine tıklanınca büyütme işlemi
    const galleryImages = document.querySelectorAll(".gallery-item img");

    galleryImages.forEach(img => {
        img.addEventListener("click", function() {
            // Tıklandığında resmi modal olarak aç
            openModal(this.src, this.alt);
        });
    });

    // Modalı açma fonksiyonu
    function openModal(src, alt) {
        const modal = document.getElementById("kupa-modal");
        const modalImg = document.getElementById("kupa-img");
        const captionText = document.getElementById("caption");

        modal.style.display = "block";
        modalImg.src = src;
        captionText.innerHTML = alt;
    }

    // Modalı kapatma fonksiyonu
    function closeModal() {
        const modal = document.getElementById("kupa-modal");
        modal.style.display = "none";
    }

    // Modalı kapatmak için X simgesine tıklayınca
    const closeButton = document.querySelector(".close");
    closeButton.addEventListener("click", closeModal);

    // Modal dışına tıklayarak da kapatmayı sağla
    window.addEventListener("click", function(event) {
        const modal = document.getElementById("kupa-modal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Tüm küçük resimlere tıklama olayını ekle
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const modal = document.getElementById('myModal');
            const modalImg = document.getElementById('modalImg');

            modal.style.display = "block";
            modalImg.src = this.src;

            const span = document.getElementsByClassName("close")[0];

            span.onclick = function() {
                modal.style.display = "none";
            }
        });
    });
});
