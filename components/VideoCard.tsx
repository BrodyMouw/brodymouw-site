type VideoCardProps = {
  src: string;
  title?: string;
};

export default function VideoCard({ src, title }: VideoCardProps) {
  return (
    <div className="card p-4">
      <h3 className="font-semibold">{title ?? src}</h3>
      <video controls src={src} className="mt-3 w-full rounded" />
    </div>
  );
}
