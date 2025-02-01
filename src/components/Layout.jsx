/* eslint-disable react/prop-types */
import Navbar from "./Navbar"

export default function Layout({ children, idname }) {
    const style = {
        padding: 0,
        margin: 0
    }
    return (
        <div id={idname.toLowerCase()} style={style}>  {/* Convert to lowercase for CSS match */}
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    );
}
