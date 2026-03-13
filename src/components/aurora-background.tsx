export default function AuroraBackground() {
    return (
        <div className="aurora-bg-wrapper">
            <div className="noise-bg mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#000000] to-black opacity-80"></div>
            <div className="aurora-orbs-container">
                <div className="aurora-orb aurora-orb-1 aurora-orb--blue" />
                <div className="aurora-orb aurora-orb-2 aurora-orb--purple" />
                <div className="aurora-orb aurora-orb-3 aurora-orb--cyan" />
            </div>
        </div>
    );
}
