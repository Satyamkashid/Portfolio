import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="left">
                        <h3>Hello, I'm Satyam</h3>
                        <p>
                            1+ years of experience in advanced Generative AI, NLP, and multi-agent solutions across healthcare, 
                            telecom, and contract intelligence domains. Expert in production-ready AI applications using GPT-4o, 
                            LLaMA, Mistral, and Hugging Face Transformers with LangChain, LangGraph, and FAISS/PGVector.
                        </p>
                        <p>
                            Specialized in agentic workflows, RAG systems, and OCR-driven document intelligence pipelines using 
                            Azure Document Intelligence, Dockling, and EasyOCR. Skilled in designing asynchronous and multi-threaded 
                            data pipelines, prompt engineering, and cost-optimized LLM deployments.
                        </p>
                        <ul>
                            <li>Advanced Generative AI & NLP Agentic Solutions</li>
                            <li>RAG Systems & Vector Databases (FAISS, ChromaDB, PGVector)</li>
                            <li>OCR & Document Intelligence (Azure DI, Dockling)</li>
                            <li>Backend Development (FastAPI, Python, Postgres, Neo4j)</li>
                            <li>Cloud Integrations (Azure, AWS) & Cost Optimization</li>
                        </ul>
                    </div>
                    <div className="right">
                        <h3>Professional Highlights</h3>
                        <ul>
                            <li>Strong collaborator with proven impact in improving system efficiency, accuracy, and scalability.</li>
                            <li>Track record of recognition for high performance and innovation in AI/ML domains.</li>
                            <li>Hands-on experience with deployment and optimization of large language models.</li>
                            <li>Expertise in building scalable retrieval and reasoning pipelines.</li>
                        </ul>

                        <h3>Future Goals</h3>
                        <p>
                            I aim to continue driving innovation in Generative AI, solving complex real-world problems through 
                            agentic workflows and advanced RAG architectures. I am eager to tackle challenges in scalability 
                            and efficiency for next-generation AI applications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
