Yes 😭 let's do it **in ONE clean response**. Don't do anything else except these steps.

## STEP 1 — Open `README.md`

In VS Code:

```text
ai-image-caption-ui
   └── README.md   ← OPEN THIS
```

**Delete everything inside `README.md` and paste the COMPLETE content below:**

````markdown
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
````

---

## 🔄 Workflow

1. User uploads an image.
2. React sends the image to the FastAPI backend.
3. FastAPI receives the image.
4. ResNet50 extracts a 2048-dimensional feature vector.
5. The Transformer decoder processes the visual features.
6. The decoder generates caption tokens.
7. Tokens are converted into natural-language text.
8. The generated caption is returned to the React frontend.
9. The caption is displayed to the user.

---

## 🤖 Machine Learning Model

### ResNet50 Encoder

ResNet50 is used as the CNN image encoder.

The classification layer is removed and the network produces a:

```text
2048-dimensional feature vector
```

This feature vector is passed to the Transformer decoder.

### Transformer Decoder

The caption generator uses a Transformer decoder containing:

* Token Embedding
* Positional Embedding
* Multi-Head Attention
* Feed Forward Network
* Layer Normalization
* Dropout
* Linear Output Layer

---

## 📚 Dataset

The project uses the **Flickr8k Image Captioning Dataset**.

Dataset split:

| Dataset    | Images |
| ---------- | -----: |
| Training   |   6000 |
| Validation |   1000 |
| Testing    |   1000 |

---

## 📖 Vocabulary

Vocabulary size:

```text
4521
```

Special tokens:

```text
<pad>   : 0
<unk>   : 1
<start> : 2
<end>   : 3
```

---

## 📊 Model Evaluation

The model was evaluated on 100 test images using BLEU scores.

| Metric |  Score |
| ------ | -----: |
| BLEU-1 | 0.6358 |
| BLEU-2 | 0.4149 |
| BLEU-3 | 0.2846 |
| BLEU-4 | 0.1945 |

These results demonstrate that the model is able to generate captions with meaningful similarity to the reference captions.

---

## 🧪 Example

### Input

An image containing people standing together.

### Generated Caption

```text
a group of women in white shirts and a crowd are standing in front of a crowd .
```

---

## 🔌 FastAPI API

The trained model is exposed through a FastAPI REST API.

### Health Check

```http
GET /
```

Example response:

```json
{
  "status": "online",
  "model": "ResNet50 + Transformer",
  "message": "AI Image Caption Generator API"
}
```

### Image Prediction

```http
POST /predict
```

Request:

```text
multipart/form-data
file = image
```

Example response:

```json
{
  "success": true,
  "caption": "a group of women in white shirts and a crowd are standing in front of a crowd ."
}
```

---

## 💻 Frontend

The frontend is developed using:

* React.js
* Vite
* JavaScript
* CSS

The interface provides:

* Image upload
* Image preview
* AI-generated caption
* Model status
* Responsive UI

---

## 🛠️ Technology Stack

### AI / Machine Learning

* Python
* PyTorch
* ResNet50
* Transformer
* CUDA
* BLEU Evaluation

### Backend

* FastAPI
* Uvicorn
* Python

### Frontend

* React.js
* Vite
* JavaScript
* CSS

### Dataset

* Flickr8k

### Development Tools

* Google Colab
* VS Code
* Git
* GitHub

---

## 📁 Project Structure

```text
AI-Image-Caption-Generator/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── README.md
├── .gitignore
├── package.json
├── package-lock.json
├── index.html
└── vite.config.js
```

> Backend and trained model files will be added separately.

---

## ▶️ Run Frontend

Clone the repository:

```bash
git clone https://github.com/indiraparadkar675/AI-Image-Caption-Generator.git
```

Go to the project:

```bash
cd AI-Image-Caption-Generator
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

## 🔗 Frontend–Backend Integration

The React application communicates with the FastAPI backend using HTTP requests.

```text
React
  │
  │ POST /predict
  │
  ▼
FastAPI
  │
  ▼
ResNet50
  │
  ▼
Transformer
  │
  ▼
Caption
  │
  ▼
React UI
```

---

## 💾 Trained Model

The trained model is saved as:

```text
image_caption_transformer.pth
```

The model was trained using the Flickr8k dataset with a ResNet50 encoder and Transformer decoder.

The trained model is approximately 53.85 MB.

> Large model files may be stored separately rather than committed directly to Git history.

---

## 🔮 Future Improvements

* Beam Search decoding
* Attention visualization
* Caption confidence score
* Image caption history
* Multiple language support
* Docker deployment
* Cloud deployment
* Automated testing
* Model comparison
* Authentication

---

## 👩‍💻 Author

**Indira Paradkar**

B.Tech Computer Science & Engineering – AI & ML

---

## ⭐ Project Highlights

**ResNet50 + Transformer | PyTorch | FastAPI | React | Flickr8k | BLEU Evaluation**

