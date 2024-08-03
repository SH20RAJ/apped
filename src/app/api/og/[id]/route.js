import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/177412139?s=400&u=4d3a28c15798b9872ef34fee3311ffa0552a201a&v=4"
          height={80}
          width={80}
          alt=""
        />{" "}
        <span
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "black",
            marginBottom: 20,
          }}
        >
          Apped.me
        </span>
        {id}
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
