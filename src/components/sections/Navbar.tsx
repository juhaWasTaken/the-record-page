export function Navbar() {
    return (
        <section className="border-b border-[#262626]">
            <nav className="max-w-7xl mx-auto flex justify-between items-center py-4">
                <div className="text-2xl font-bold">Logo</div>
                <ul className="flex space-x-6">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>
            
        </section>

    )
}