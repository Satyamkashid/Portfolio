import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <p className="projects-description">
                    Here are some of the key projects I've worked on. These showcase my skills in Python Generative AI,
                    machine learning, Django development, and REST API integration. Feel free to explore them to see how
                    I approach problem-solving and create innovative solutions.
                </p>

                <div className="project-cards">
                    <div className="project-card">
                        <img src="/static/images/smart_retrieval.png" alt="Smart Retrieval" className="project-image" />
                        <div className="project-details">
                            <h3 className="project-title">Smart File Retrieval System</h3>
                            <p className="project-description">
                                Designed a smart retrieval system searching 400,000+ files (900 GB) using Azure AI Search
                                and Durable Functions. Implemented parallel processing for 10+ file types and
                                LLM-powered natural language queries.
                            </p>
                            <span className="project-tech">Python, FastAPI, Azure, GPT-4, LangChain</span>
                        </div>
                    </div>

                    <div className="project-card">
                        <img src="/static/images/contract_query.png" alt="Contract Query" className="project-image" />
                        <div className="project-details">
                            <h3 className="project-title">Contract Query Tool</h3>
                            <p className="project-description">
                                Built a multi-agent workflow using LangGraph for contract intelligence on 3,000+ contracts.
                                Features SQL generation, semantic search, and automated field extraction with 95%+ accuracy
                                using Azure Document Intelligence.
                            </p>
                            <span className="project-tech">GPT-4o, LangGraph, Azure OpenAI, PGVector</span>
                        </div>
                    </div>

                    <div className="project-card">
                        <img src="/static/images/doc_engine.png" alt="Doc Query Engine" className="project-image" />
                        <div className="project-details">
                            <h3 className="project-title">Smart Document Query Engine</h3>
                            <p className="project-description">
                                Automated document ingestion pipeline with AWS S3 and Amazon Titan embeddings.
                                Developed RESTful APIs with FastAPI and integrated LangChain for contextually
                                accurate RAG-based responses.
                            </p>
                            <span className="project-tech">AWS, FastAPI, LangChain, RAG, Titan Embeddings</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
