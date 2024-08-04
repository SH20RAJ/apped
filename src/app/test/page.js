// app/page.js

import Img from "@/lib/Img"

export default function Page() {
  const imageUrl = "https://via.placeholder.com/150";

  return (
    <div>
      <h2>Normal Mode</h2>
      <Img src={imageUrl} alt="placeholder" mode="normal" width="150" height="150" />

      <h2>Base64 Mode</h2>
      <Img src={imageUrl} alt="placeholder" mode="base64" width="150" height="150" />

      <h2>CDN Mode</h2>
      <Img src={imageUrl} alt="placeholder" mode="cdn" width="300" height="300" format="webp" fit="cover" />

      <h2>Text Mode</h2>
      <Img
        src=""
        mode="text"
        text="Hello World"
        theme="dark"
        fontsize="24px"
        width="800"
        height="400"
        alt="Open Graph Image"
      />

      <h2>TextBase Mode</h2>
      <Img
        src=""
        mode="textbase"
        text="Hello World"
        theme="dark"
        fontsize="80px"
        width="800"
        height="400"
        alt="Base64 Open Graph Image"
      />

      <h2>Next Mode</h2>
      {/* <Img src={imageUrl} alt="placeholder" mode="next" width={150} height={150} /> */}
    </div>
  );
}
