if ("serviceWorker" in navigator) {
    window.addEventListener('load', async () => {
      try {
        let reg;
        reg = await navigator.serviceWorker.register('/sw.js', { type: "module" });

        console.log('Service worker registrada!', reg);
        postNews();
      } catch (err) {
        console.log('Service worker registro falhou: ', err);
      }
    });
  }

  const apiKey = '';
  let url = ``;
  const main = document.querySelector('main');