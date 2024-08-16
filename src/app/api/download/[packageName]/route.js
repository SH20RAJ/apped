// /app/api/download/[packageName]/route.js

export async function GET(request, { params }) {
  const { packageName } = params;
  const apkUrl = `https://d.apkpure.net/b/APK/${packageName}?version=latest`;

  try {
    // Fetch the APK file from the external URL
    const response = await fetch(apkUrl);

    if (!response.ok) {
      return new Response("File not found", { status: 404 });
    }

    // Create a readable stream from the response
    const reader = response.body.getReader();
    const stream = new ReadableStream({
      start(controller) {
        function push() {
          reader.read().then(({ done, value }) => {
            if (done) {
              controller.close();
              return;
            }
            controller.enqueue(value);
            push();
          });
        }
        push();
      },
    });

    // Create a response with the stream and appropriate headers
    return new Response(stream, {
      headers: {
        "Content-Type": "application/vnd.android.package-archive",
        "Content-Disposition": `attachment; filename="${packageName}-apped.me.apk"`,
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
      },
    });
  } catch (error) {
    console.error("Error downloading APK:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
