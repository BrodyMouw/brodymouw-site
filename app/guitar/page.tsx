import fs from "fs";
import path from "path";
import VideoCard from "../../components/VideoCard";

export default function GuitarPage() {
  const dir = path.join(process.cwd(), "public", "guitar");
  let videos: string[] = [];

  if (fs.existsSync(dir)) {
    videos = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".mp4"));
  }

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Guitar Projects</h1>

      <p className="text-zinc-700 dark:text-zinc-300">Here are some of my guitar recordings:</p>

      {videos.length === 0 ? (
        <div className="text-sm text-zinc-600">No videos found in <code className="rounded bg-zinc-100 px-1">public/guitar/</code>. Add MP4 files to that folder.</div>
      ) : (
        <div className="grid gap-6">
          {videos.map((v) => (
            <VideoCard key={v} src={`/guitar/${v}`} title={v} />
          ))}
        </div>
      )}
    </section>
  );
}
