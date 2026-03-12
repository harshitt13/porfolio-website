export default function AuroraBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-black selection:bg-white/10">
            <div className="noise-bg mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#000000] to-black opacity-80"></div>
            <div className="absolute inset-0 opacity-40 mix-blend-screen filter blur-[100px] pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/30 aurora-orb-1" />
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[60vw] rounded-full bg-purple-600/20 aurora-orb-2" />
                <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[40vw] rounded-full bg-cyan-600/20 aurora-orb-3" />
            </div>
        </div>
    );
}
