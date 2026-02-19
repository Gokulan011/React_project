import { useDevice } from "../context/DeviceContext";

export default function PreviewWrapper({ children }) {
  const { device } = useDevice();

  return (
    <div className={`preview-root ${device}`}>
      <div className="preview-screen">
        {children}
      </div>
    </div>
  );
}
