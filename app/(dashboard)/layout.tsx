export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>Render Dashboard</p>
      {children}
    </div>
  );
}
