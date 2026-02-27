import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 px-6">
        <div id="about" className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl font-display">About Section</h2>
        </div>
        <div id="education" className="min-h-screen flex items-center justify-center bg-card/30">
          <h2 className="text-4xl font-display">Education Section</h2>
        </div>
        <div id="experience" className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl font-display">Experience Section</h2>
        </div>
        <div id="coursework" className="min-h-screen flex items-center justify-center bg-card/30">
          <h2 className="text-4xl font-display">Coursework Section</h2>
        </div>
      </div>
    </div>
  );
}
