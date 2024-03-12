export const Photo = () => (
  <div className="flip-card w-64 h-64 rounded-full float-right perspective-800">
    <div className="flip-card-inner relative w-full h-full text-center">
      <div
        className="flip-card-front absolute w-full h-full bg-cover bg-center w-64 h-64 rounded-full"
        style={{
          backgroundImage: `url(/image.png)`,
          backfaceVisibility: "hidden",
        }}
      />
      <div
        className="flip-card-back absolute w-full h-full bg-cover bg-center w-64 h-64 rounded-full"
        style={{
          backgroundImage: `url(/logo.png)`,
          backfaceVisibility: "hidden",
        }}
      />
    </div>
  </div>
);
