# AI Image Caption Generator

An end-to-end AI-powered image captioning system that automatically generates natural-language descriptions from images.

The system uses a **ResNet50 CNN encoder** for visual feature extraction and a **Transformer decoder** for caption generation. A **FastAPI backend** provides the inference API, while a **React.js frontend** provides a professional web interface for image upload and caption visualization.

---

## 🚀 Features

- Upload an image through a web interface
- ResNet50-based image feature extraction
- 2048-dimensional visual feature representation
- Transformer-based caption generation
- Custom vocabulary and tokenization
- FastAPI REST API
- React.js frontend
- Real-time image caption generation
- BLEU-based model evaluation
- GPU-accelerated training and inference

---

## 🧠 Architecture

```text
User
 │
 ▼
React Frontend
 │
 │ POST /predict
 ▼
FastAPI Backend
 │
 ▼
ResNet50 Encoder
 │
 │ 2048-D Image Features
 ▼
Transformer Decoder
 │
 ▼
Generated Caption
 │
 ▼
React UI

