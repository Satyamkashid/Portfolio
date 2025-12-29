import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="text-center mb-5">Skills</h2>

                <div className="skills-grid">
                    <div className="skill-card">
                        <h3>Programming Language</h3>
                        <p>Python, SQL</p>
                    </div>

                    <div className="skill-card">
                        <h3>API & Backend</h3>
                        <p>FastAPI, REST API, Async & Multi-threaded pipelines</p>
                    </div>

                    <div className="skill-card">
                        <h3>AI & ML Frameworks</h3>
                        <p>LangChain, LangGraph, CrewAI, Transformers, BERT, LLaMA, Mistral, Neural Networks</p>
                    </div>

                    <div className="skill-card">
                        <h3>Cloud & Deployment</h3>
                        <p>Azure (ACR, Container Apps, Foundry), Docker, Local LLM Deployment</p>
                    </div>

                    <div className="skill-card">
                        <h3>NLP & LLM Tools</h3>
                        <p>Prompt Engineering, Advanced RAG, Contextual Memory, PyTorch, TensorFlow, spaCy</p>
                    </div>

                    <div className="skill-card">
                        <h3>Vector DBs</h3>
                        <p>PostgreSQL (PGVector), Neo4j, FAISS, ChromaDB, Pinecone</p>
                    </div>

                    <div className="skill-card">
                        <h3>OCR & Doc Intelligence</h3>
                        <p>Azure Document Intelligence, Dockling, EasyOCR</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
