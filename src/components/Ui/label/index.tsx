export function Label({ title }: { title: string }) {
  return (
    <label className="font-canada text-base font-medium capitalize text-[#292929]">
      {title}
    </label>
  );
}
