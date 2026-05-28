type VideoCardProps = {
  src: string;
  title?: string;
};

export default function VideoCard({ src, title }: VideoCardProps) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
      <h3 className="font-semibold">{title ?? src}</h3>
      <video controls src={src} className="mt-3 w-full rounded" />
    </div>
  );
}
