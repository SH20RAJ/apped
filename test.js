// for (let i = 0; i < 100; i++) {
//   (async function () {
//     let i = await fetch(
//       "https://google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.apped.me/&ved=2ahUKEwi76J2esN6HAxVyRmwGHa7qAMoQFnoECBgQAQ&usg=AOvVaw1ahcZm5WWTPqcJH1MNej9W"
//     , {
//         method: "GET",
//         headers: {
//             "User-Agent":
//             "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
//         }

//     }
//     );

//     i = await i.text();
//     console.log(i);
//   })();
// }

const ping = (url, timeout = 6000) => {
    return new Promise((resolve, reject) => {
      const urlRule = new RegExp('(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]');
      if (!urlRule.test(url)) reject('invalid url');
      try {
        fetch(url)
          .then(() => resolve(true))
          .catch(() => resolve(false));
        setTimeout(() => {
          resolve(false);
        }, timeout);
      } catch (e) {
        reject(e);
      }
    });
  };


  ping('https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.apped.me/&ved=2ahUKEwi76J2esN6HAxVyRmwGHa7qAMoQFnoECBgQAQ&usg=AOvVaw1ahcZm5WWTPqcJH1MNej9W')
  .then(res=>console.log(res))
  .catch(e=>console.log(e))


  fetch("https://pingomatic.com/ping/?title=AppedMe&blogurl=https%3A%2F%2Fwww.apped.me%2F&rssurl=https%3A%2F%2Fwww.apped.me%2Fsitemap.xml&chk_blogs=on&chk_feedburner=on&chk_tailrank=on&chk_superfeedr=on").then(res=>console.log(res)).catch(e=>console.log(e.text()))