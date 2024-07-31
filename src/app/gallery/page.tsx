export default function Gallery() {
  return (
    <div className="container p-4 mx-auto">
      <h1 className="text-4xl font-bold">Photo Gallery</h1>
      <p className="mt-4">Share your daily life through photos.</p>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <img
          src="/images/photo1.jpg"
          alt="Example Photo 1"
          className="w-full h-auto"
        />
        <img
          src="/images/photo1.jpg"
          alt="Example Photo 2"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
