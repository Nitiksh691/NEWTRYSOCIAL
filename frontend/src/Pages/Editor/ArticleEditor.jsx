import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css"

export default function ArticleEditor() {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState(null);
  const [content, setContent] = useState([""]);
  const fileRef = useRef();
  const navigate = useNavigate();

  const handleImage = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => setCover(ev.target.result);
      reader.readAsDataURL(file);
    }
  };
  const addSection = () => setContent([...content, ""]);
  const handleSection = (v, i) =>
    setContent(arr => arr.map((x, j) => (i === j ? v : x)));
  const handlePublish = () => {
    if (!title || !content[0]) {
      alert("Please fill in the title and content.");
      return;
    }
    
    navigate("/article");
  };

  return (
    <div className="article-edit-wrap">
      <div className="cover-area">
        {cover ? (
          <img src={cover} className="cover-img" alt="cover" />
        ) : (
          <button className="cover-upload-btn" onClick={() => fileRef.current.click()}>
            Upload Cover Image
          </button>
        )}
        <input ref={fileRef} type="file" accept="image/*" onChange={handleImage} style={{ display: "none" }} />
        {cover && <button onClick={() => setCover(null)} className="cover-remove">Remove</button>}
      </div>
      <input
        className="article-title-input"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter a great headline..."
      />
      <div className="article-content-sections">
        {content.map((sec, i) => (
          <textarea
            key={i}
            className="editor-block"
            value={sec}
            onChange={e => handleSection(e.target.value, i)}
            placeholder="Start typing your article here..."
            rows={6}
          />
        ))}
        <button className="add-section-btn" onClick={addSection}>
          + Paragraph
        </button>
      </div>
      <div className="editor-cta-bar">
        <button className="save-draft">Save Draft</button>
        <button onClick={handlePublish} className="publish-btn" disabled={!title || !content[0]}>
          Publish
        </button>
      </div>
    </div>
  );
}
