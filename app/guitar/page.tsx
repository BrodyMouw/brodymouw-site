import fs from "fs";
import path from "path";
import VideoCard from "../../components/VideoCard";

export default function GuitarPage() {
  const dir = path.join(process.cwd(), "public", "guitar");
  let videos: string[] = [];

  if (fs.existsSync(dir)) {
    videos = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".mp4"));
  }

  function formatTitle(filename: string) {
  return filename
    .replace(".mp4", "")
    .replace(/[-_]/g, " ")         // replace hyphens/underscores with spaces
    .replace(/([A-Z])/g, " $1")
    .trim()
}

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Guitar Projects</h1>

      <p>Here are some of my guitar recordings:</p>

      {videos.length === 0 ? (
        <div className="text-sm text-zinc-600">No videos found in <code className="rounded bg-zinc-100 px-1">public/guitar/</code>. Add MP4 files to that folder.</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {videos.map((v) => (
            <VideoCard key={v} src={`/guitar/${v}`} title={formatTitle(v)} />
          ))}
        </div>
      )}
    </section>
  );
}
