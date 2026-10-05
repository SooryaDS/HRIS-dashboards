import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

function DashboardLayout({ children }) {
    return (
        <div className="app">

            <Sidebar />

            <div className="main">

                <Header />

                <main className="content">
                    {children}
                </main>

            </div>

        </div>
    );
}

export default DashboardLayout;