import Hello from "@/app/components/Hello";

export default function Home() {
  console.log("Server  components");

  return (
    <main>
      <Hello />
      <div className="text-5x underline">Welcome to nextjs</div>;
    </main>
  );
}
