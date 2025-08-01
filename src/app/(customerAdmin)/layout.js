import SidebarWithHeader from "@/components/CustomerAdmin/sidebarWithHeader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SidebarWithHeader>{children}</SidebarWithHeader>
      </body>
    </html>
  );
}
