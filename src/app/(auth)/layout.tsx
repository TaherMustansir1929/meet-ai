interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-muted flex flex-col items-center justify-center min-h-svh p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        {children}
    </div>
    </div>
  );
};
export default Layout;
