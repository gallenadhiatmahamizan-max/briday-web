const button =
    document.getElementById("surpriseBtn");

const message =
    document.getElementById("message");

const confetti =
    document.getElementById("confetti");
const musicBtn =
    document.getElementById("musicBtn");

const birthdayMusic =
    document.getElementById("birthdayMusic");


/* =========================
   TOMBOL SURPRISE
========================= */

button.addEventListener(
    "click",
    function () {

        // tampilkan pesan
        message.classList.add("show");

        // ubah tulisan tombol
        button.textContent =
            " Surprise Opened!";

        // jalankan confetti
        createConfetti();
    }
  );

  /* =========================
   MUSIC
========================= */

musicBtn.addEventListener(
    "click",
    function () {

        if (birthdayMusic.paused) {

            birthdayMusic.play();

            musicBtn.textContent =
                "⏸ Pause My Love";

        } else {

            birthdayMusic.pause();

            musicBtn.textContent =
                "🎵 Play My Love";

        }

    }
);


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const colors = [
        "#2563eb",
        "#60a5fa",
        "#93c5fd",
        "#ffffff",
        "#bfdbfe"
    ];


    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");


        piece.classList.add(
            "confetti-piece"
        );


        // posisi random
        piece.style.left =
            Math.random() * 100 + "vw";


        // ukuran random
        const size =
            Math.random() * 8 + 5;

        piece.style.width =
            size + "px";

        piece.style.height =
            size + "px";


        // warna random
        piece.style.backgroundColor =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        // bentuk random
        piece.style.borderRadius =
            Math.random() > 0.5
                ? "50%"
                : "2px";


        // kecepatan random
        piece.style.animationDuration =
            Math.random() * 3 + 2 + "s";


        // delay random
        piece.style.animationDelay =
            Math.random() * 0.5 + "s";


        confetti.appendChild(piece);


        // hapus setelah selesai
        setTimeout(
            function () {

                piece.remove();

            },
            6000
        );

    }
}