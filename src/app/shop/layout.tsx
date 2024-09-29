import Header from "@/components/common/Header";




export default function RootLayout({
    children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
        return (
            <div className="">
                <Header type='other' />
                <div className="mt-">
                    {children}
                </div>
            </div>
        );
}