   
from fastapi import FastAPI
from pydantic import BaseModel

from fastapi.middleware.cors import CORSMiddleware
from genai import YoutubeProcessor, GeminiProcessor

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)


class VideoAnalysisRequest(BaseModel):
    youtube_link: str

@app.post("/analyze_video/")
def analyze_video(request: VideoAnalysisRequest):

    genai_processor = GeminiProcessor(
        model_name = "gemini-pro",
        project = "gemini-dynamo-1983",
        location = "europe-west2"
    )
    processor = YoutubeProcessor(genai_processor)

    result  = processor.retrieve_youtube_documents(str(request.youtube_link))
    
    #summary = genai_processor.generate_document_summary(result, verbose = True)
    sample_size = 3
    key_concepts = processor.find_key_concepts(result, sample_size, verbose = True)
    return {
        "key_concepts": key_concepts
    }

