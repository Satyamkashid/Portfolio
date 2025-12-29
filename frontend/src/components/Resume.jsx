import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <div className="container">
                <h2 className="text-center mb-5">Resume</h2>

                {/* Education Section */}
                <div className="resume-block">
                    <h3>Education</h3>
                    <ul>
                        <li><strong>Master Of Computer Application</strong> - PES Modern College Of Engineering Pune (2024 - 2026)</li>
                        <li><strong>B.Sc. Computer Science</strong> - Dr. D Y Patil Arts Commerce and Science College Pimpri (2021 - 2024) - 8.82 CGPA</li>
                        <li><strong>Higher Secondary Certificate</strong> - Residential Junior College (2020 - 2021) - 92.5%</li>
                        <li><strong>Secondary School Certificate</strong> - Shri Shivaji High School (2018 - 2019) - 88.4%</li>
                    </ul>
                </div>

                {/* Skills Section */}
                <div className="resume-block">
                    <h3>Skills</h3>
                    <ul>
                        <li><strong>Languages & Backend:</strong> Python, SQL, FastAPI, REST APIs, Async Pipelines</li>
                        <li><strong>AI/ML:</strong> LangChain, LangGraph, CrewAI, Transformers, LLaMA, GPT-4o</li>
                        <li><strong>Cloud & DevOps:</strong> Azure (ACR, Container Apps), Docker, AWS</li>
                        <li><strong>Tools:</strong> PGVector, Neo4j, FAISS, Azure Document Intelligence, Dockling</li>
                    </ul>
                </div>

                {/* Work Experience Section */}
                <div className="resume-block">
                    <h3>Relevant Work Experience</h3>
                    <div className="resume-item">
                        <h4>Project #1 – Smart File Retrieval System (April 2025 – Sep 2025)</h4>
                        <p><strong>Tech:</strong> Python, FastAPI, Azure (Search, Functions, Doc Intelligence), OpenAI GPT-4.1 Mini, LangChain</p>
                        <ul>
                            <li>Designed smart retrieval for 400,000+ files using Azure AI Search and Durable Functions.</li>
                            <li>Integrated Azure Document Intelligence for parsing 10+ file formats.</li>
                            <li>Built LLM-powered natural language query system with SSO authentication.</li>
                        </ul>
                    </div>
                    <div className="resume-item">
                        <h4>Project #2 – Contract Query Tool (Jan 2025 – May 2025)</h4>
                        <p><strong>Tech:</strong> GPT-4o, LangGraph, Azure OpenAI, PGVector, FAISS</p>
                        <ul>
                            <li>Built multi-agent workflow using LangGraph for contract intelligence on 3,000+ contracts.</li>
                            <li>Automated boolean/SQL query generation and semantic search with 95% accuracy.</li>
                            <li>Optimized prompt engineering and implemented cost tracking.</li>
                        </ul>
                    </div>
                    <div className="resume-item">
                        <h4>Project #3 – Smart Document Query Engine (Jan 2025 – March 2025)</h4>
                        <p><strong>Tech:</strong> FastAPI, AWS S3, Titan Embeddings, LangChain, RAG</p>
                        <ul>
                            <li>Developed automated document ingestion pipeline from AWS S3.</li>
                            <li>Built RESTful APIs for query handling and multilingual RAG responses.</li>
                        </ul>
                    </div>
                </div>

                {/* Highlights Section */}
                <div className="resume-block">
                    <h3>Highlights</h3>
                    <ul>
                        <li>Proficient in developing Python applications using both procedural and object-oriented programming</li>
                        <li>Proficient in creating Python scripts for web automation, file automation, and process automation</li>
                        <li>Expertise in Machine Learning and Generative AI, including predictive models and AI-driven solutions</li>
                    </ul>
                </div>

                <div className="resume-block">
                    <a href="https://github.com/Satyamkashid/Certifications/blob/main/SatyamLatestResume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        View My Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;
