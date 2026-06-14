type VideoCardProps = {
  embedUrl: string;
  title?: string;
};

export default function VideoCard({ embedUrl, title }: VideoCardProps) {
  return (
    <div className="card p-4 space-y-3">
      <h3 className="font-semibold">{title}</h3>
      <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
        <iframe
          className="absolute inset-0 w-full h-full rounded-xl"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}