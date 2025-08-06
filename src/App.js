function App() {
  return (
    <div className="relative w-screen h-screen">
      <img
        src="/images/coming-soon.jpg"
        alt="Coming Soon"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          CFR Shirts
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl">
          Coming Soon. Gear up for launch!
        </p>
      </div>
    </div>
  );
}

export default App;
