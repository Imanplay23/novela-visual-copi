      //Crear efecto de nieve
      // function createSnowflakes() {
      //   const snowflakeSymbols = ["❄", "❅", "❆"];
      //   for (let i = 0; i < 15; i++) {
      //     setTimeout(() => {
      //       const snowflake = document.createElement("div");
      //       snowflake.className = "snowflake";
      //       snowflake.innerHTML =
      //         snowflakeSymbols[
      //           Math.floor(Math.random() * snowflakeSymbols.length)
      //         ];
      //       snowflake.style.left = Math.random() * 100 + "%";
      //       snowflake.style.fontSize = Math.random() * 0.8 + 1 + "rem";
      //       snowflake.style.animationDuration = Math.random() * 4 + 6 + "s";
      //       snowflake.style.animationDelay = Math.random() * 2 + "s";
      //       document.body.appendChild(snowflake);

      //       setTimeout(() => {
      //         if (snowflake.parentNode) {
      //           snowflake.parentNode.removeChild(snowflake);
      //         }
      //       }, 10000);
      //     }, i * 200);
      //   }
      // } 

      function loadChapter(chapterName) {
        // Animación de salida
        document.body.style.transition = "opacity 0.5s ease-out";
        document.body.style.opacity = "0";

        setTimeout(() => {
          window.location.href = `${chapterName}.html`;
        }, 500);
      }

      // Inicializar efectos
      // window.onload = () => {
      //   createSnowflakes();
      //   // // Continuar creando copos de nieve
      //   setInterval(createSnowflakes, 8000);
      // };

      // Efecto de teclado para navegación
      document.addEventListener("keydown", (e) => {
        if (e.key === "1") {
          loadChapter("chapter-1");
        }
      });