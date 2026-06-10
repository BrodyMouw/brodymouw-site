type VideoCardProps = {
  src: string;
  title?: string;
};

export default function VideoCard({ src, title }: VideoCardProps) {
  return (
    <div className="card p-4 space-y-3">
      <h3 className="font-semibold">{title ?? src}</h3>
      <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
        <video
          className="absolute inset-0 w-full h-full rounded-xl object-cover"
          preload="none"
          controls
          src={src}
        />
      </div>
    </div>
  );
}