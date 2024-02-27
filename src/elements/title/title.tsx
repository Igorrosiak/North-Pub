interface titlesParams {
    icon: React.ReactNode;
    title: string;
    subtitle: string; 
}

export const TitleElement = ({icon, title, subtitle}: titlesParams) => {
  return (
    <div>
      <div className="color-title fw-normal d-flex justify-content-start align-items-center gap-2">
        <h1>{icon} {title}</h1>
      </div>
      <h4 className="color-subtitle fw-light">{subtitle}</h4>
    </div>
  );
};
