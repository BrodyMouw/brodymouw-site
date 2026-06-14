import VideoCard from "../../components/VideoCard";

const videos = [
  { id: "X5rokVxy-Ig", title: "First strum pattern" },
  { id: "O5nDMD-2--Q", title: "Cover me up" },
  { id: "DwMEZg9-B7k", title: "Hanging by a moment" },
];

export default function GuitarPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Guitar Projects</h1>

      <p>Here are some of my guitar recordings:</p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {videos.map((v) => (
          <VideoCard
            key={v.id}
            embedUrl={`https://www.youtube.com/embed/${v.id}`}
            title={v.title}
          />
        ))}
      </div>
    </section>
  );
}