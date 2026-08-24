import { useRef, useState } from "react";
import "./App.css";

const API_URL =
  "https://overcrowd-vixen-unhidden.ngrok-free.dev/predict";

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");

  const fileInputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid image file.");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setCaption("");
    setError("");
  };

  const handleInputChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const generateCaption = async () => {
    if (!image) {
      setError("Please upload an image first.");
      return;
    }

    setLoading(true);
    setCaption("");
    setError("");

    try {
      const formData = new FormData();

      // FastAPI expects the field name "file"
      formData.append("file", image);

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setCaption(data.caption);
      } else {
        throw new Error(data.message || "Caption generation failed.");
      }
    } catch (err) {
      console.error(err);
      setError(
        "Unable to connect to the AI model. Make sure your Colab API is running."
      );
    } finally {
      setLoading(false);
    }
  };

  const clearAll = () => {
    setImage(null);
    setPreview(null);
    setCaption("");
    setError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const copyCaption = async () => {
    if (!caption) return;

    await navigator.clipboard.writeText(caption);
    alert("Caption copied!");
  };

  return (
    <div className="app">

      {/* Background decoration */}
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">
          <div className="brand-icon">✦</div>

          <div>
            <h2>VisionCaption</h2>
            <span>AI Image Intelligence</span>
          </div>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          AI Model Online
        </div>
      </nav>

      {/* Hero */}
      <main>

        <section className="hero">
          <div className="badge">
             ResNet50 + Transformer
          </div>

          <h1>
            Turn Images Into
            <span> Meaningful Words.</span>
          </h1>

          <p>
            Upload an image and let our deep learning model understand
            the visual content and generate an intelligent caption.
          </p>
        </section>

        {/* Main workspace */}
        <section className="workspace">

          {/* Upload Card */}
          <div className="card upload-card">

            <div className="card-header">
              <div>
                <h3>Upload Image</h3>
                <p>Choose an image to analyze</p>
              </div>

              <div className="step">01</div>
            </div>

            {!preview ? (
              <div
                className={`drop-zone ${dragging ? "dragging" : ""}`}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
              >
                <div className="upload-icon">↑</div>

                <h3>Drop your image here</h3>

                <p>
                  or <span>browse from your computer</span>
                </p>

                <small>JPG, JPEG or PNG</small>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleInputChange}
                  hidden
                />
              </div>
            ) : (
              <div className="preview-container">

                <img
                  src={preview}
                  alt="Selected"
                  className="preview-image"
                />

                <button
                  className="remove-button"
                  onClick={clearAll}
                >
                  ×
                </button>
              </div>
            )}

            <button
              className="generate-button"
              onClick={generateCaption}
              disabled={!image || loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Analyzing Image...
                </>
              ) : (
                <>
                   Generate Caption
                </>
              )}
            </button>

            {preview && (
              <button className="clear-button" onClick={clearAll}>
                Clear Image
              </button>
            )}

          </div>

          {/* Result Card */}
          <div className="card result-card">

            <div className="card-header">
              <div>
                <h3>AI Generated Caption</h3>
                <p>Powered by your trained deep learning model</p>
              </div>

              <div className="step">02</div>
            </div>

            <div className="result-area">

              {loading ? (
                <div className="loading-state">

                  <div className="loader-ring"></div>

                  <h3>Understanding your image...</h3>

                  <p>
                    ResNet50 is extracting visual features
                    and the Transformer is generating your caption.
                  </p>

                </div>
              ) : caption ? (
                <div className="caption-result">

                  <div className="ai-label">
                    <span>✦</span>
                    AI RESULT
                  </div>

                  <p className="caption-text">
                    "{caption}"
                  </p>

                  <div className="result-actions">

                    <button
                      className="copy-button"
                      onClick={copyCaption}
                    >
                       Copy Caption
                    </button>

                  </div>

                </div>
              ) : (
                <div className="empty-state">

                  <div className="empty-icon">✦</div>

                  <h3>Your caption will appear here</h3>

                  <p>
                    Upload an image and click
                    <strong> Generate Caption </strong>
                    to begin.
                  </p>

                </div>
              )}

            </div>

          </div>

        </section>

        {/* Error */}
        {error && (
          <div className="error-message">
            ⚠️ {error}
          </div>
        )}

        {/* Technology section */}
        <section className="technology">

          <div className="tech-title">
            <span>POWERED BY</span>
          </div>

          <div className="tech-grid">

            <div className="tech-item">
              <strong>ResNet50</strong>
              <span>Visual Feature Extraction</span>
            </div>

            <div className="tech-item">
              <strong>Transformer</strong>
              <span>Natural Language Generation</span>
            </div>

            <div className="tech-item">
              <strong>Flickr8k</strong>
              <span>Training Dataset</span>
            </div>

            <div className="tech-item">
              <strong>FastAPI</strong>
              <span>AI Model API</span>
            </div>

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer>
        <span>VisionCaption</span>
        <span>AI Image Caption Generator • Deep Learning Project</span>
      </footer>

    </div>
  );
}

export default App;