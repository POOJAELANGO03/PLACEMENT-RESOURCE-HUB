import React, { useState } from "react";

const directVideoLinks = {
  "Aptitude/Online Test": "https://www.youtube.com/embed/g3TgMq2ktWk",
  "Group Discussion (GD) Preparation": "https://www.youtube.com/embed/BguYUJ7cWrs",
  "Technical Round 1 (Coding/Hands-on Round)": "https://www.youtube.com/embed/1qw5ITr3k9E",
  "Technical Round 2 (Deep Technical Interview)": "https://www.youtube.com/embed/WjYdkHzcGhc",
  "HR Round (Culture Fit + Soft Skills)": "https://www.youtube.com/embed/kayOhGRcNt4",
  "Final HR Discussion": "https://www.youtube.com/embed/CwUBnhDVKTg"
};

const placementPrep = [
    {
        "category": "Aptitude/Online Test",
        "description": "Prepare for the written test with aptitude and reasoning questions.",
        "topics": [
            "Logical Reasoning: Puzzles, Blood Relations, Seating Arrangement",
            "Quantitative Aptitude: Profit/Loss, Time & Work, Permutations, Probability",
            "Verbal Ability: Reading Comprehension, Sentence Correction",
            "Basic Coding: MCQs, Output Prediction, Time Complexity Analysis",
            "CS Fundamentals: Quick questions on DBMS, OS, CN",
            "Pattern-based Coding: Automata Fix – AMCAT style"
        ],
        "resources": {
            "documentation": [
                {
                    "title": "Indiabix Aptitude Guide",
                    "link": "https://www.indiabix.com/"
                },
                {
                    "title": "PrepInsta Quantitative Aptitude",
                    "link": "https://prepinsta.com/aptitude/"
                }
            ],
            "video": [
                {
                    "title": "Aptitude Crash Course for Placements",
                    "link": directVideoLinks["Aptitude/Online Test"]
                }
            ],
            "practice": [
                {
                    "title": "IndiaBix Practice Tests",
                    "link": "https://www.indiabix.com/online-test/aptitude-test/"
                },
                {
                    "title": "PrepInsta Placement Preparation",
                    "link": "https://prepinsta.com/placement-preparation/"
                }
            ]
        }
    },
    {
        "category": "Group Discussion (GD) Preparation",
        "description": "GD rounds are used by many companies to evaluate communication, critical thinking, leadership, and teamwork.",
        "topics": [
            "Communication Skills",
            "Critical Thinking",
            "Leadership",
            "Teamwork"
        ],
        "resources": {
            "documentation": [
                {
                    "title": "GD Preparation Guide",
                    "link": "https://www.geeksforgeeks.org/gd-topics-for-placement/"
                },
                {
                    "title": "Top GD Topics for Interviews",
                    "link": "https://www.naukri.com/campus/career-guidance/general-topics-for-group-discussion"
                }
            ],
            "video": [
                {
                    "title": "Group Discussion Tips and Tricks",
                    "link": directVideoLinks["Group Discussion (GD) Preparation"]
                }
            ],
            "practice": [
                {
                    "title": "GD Topics with Solutions",
                    "link": "https://testbook.com/articles/group-discussion-topics"
                },
                {
                    "title": "PrepInsta GD Topics",
                    "link": "https://prepinsta.com/group-discussion/"
                }
            ]
        }
    },
    {
        "category": "Technical Round 1 (Coding/Hands-on Round)",
        "description": "Master DSA for the coding round and technical interviews.",
        "topics": [
            "Data Structures & Algorithms (DSA): Arrays, Strings, LinkedList, Stack/Queue, Trees, Graphs, Dynamic Programming",
            "Debugging & Code Optimization: Identify bugs and optimize code performance",
            "SQL Queries & Simple Schema Design: Basic SQL operations and schema fundamentals",
            "Case Study-based Questions: Real-world problem solving and analysis"
        ],
        "resources": {
            "documentation": [
                {
                    "title": "DSA Learning Path",
                    "link": "https://www.geeksforgeeks.org/data-structures/"
                },
                {
                    "title": "SQL Practice Guide",
                    "link": "https://sqlbolt.com/"
                },
                {
                    "title": "Debugging Techniques Guide",
                    "link": "https://www.cprogramming.com/debugging"
                }
            ],
            "video": [
                {
                    "title": "Coding Interview Preparation",
                    "link": directVideoLinks["Technical Round 1 (Coding/Hands-on Round)"]
                }
            ],
            "practice": [
                {
                    "title": "LeetCode Top Interview Questions",
                    "link": "https://leetcode.com/explore/interview/card/top-interview-questions-easy/"
                },
                {
                    "title": "HackerRank Coding Practice",
                    "link": "https://www.hackerrank.com/domains/algorithms"
                }
            ]
        }
    },
    {
        "category": "Technical Round 2 (Deep Technical Interview)",
        "description": "Prepare for technical interviews with core computer science subjects.",
        "topics": [
            "Programming Language Concepts: (Choose your preferred language)",
            "DBMS: Normalization, Indexing, Joins, Query Optimization",
            "Operating Systems: Scheduling, Deadlock, Memory Management",
            "Computer Networks: TCP/IP, Protocols, OSI Model",
            "Cloud Basics: AWS, Azure, GCP fundamentals",
            "OOPS & System Design Basics: Core principles and design patterns",
            "API Knowledge: REST, CRUD operations, using Postman",
            "Git & GitHub Flow: Version control best practices",
            "Optional – Data Engineering Basics: ETL processes, Data Pipelines"
        ],
        "resources": {
            "documentation": [
                {
                    "title": "Python Official Documentation",
                    "link": "https://docs.python.org/3/"
                },
                {
                    "title": "DBMS Comprehensive Guide",
                    "link": "https://www.javatpoint.com/dbms-tutorial"
                },
                {
                    "title": "OS Concepts Guide",
                    "link": "https://www.tutorialspoint.com/operating_system/index.htm"
                },
                {
                    "title": "Computer Networks Basics",
                    "link": "https://www.studytonight.com/computer-networks/"
                },
                {
                    "title": "AWS Fundamentals",
                    "link": "https://aws.amazon.com/getting-started/fundamentals-overview/"
                },
                {
                    "title": "System Design Primer",
                    "link": "https://github.com/donnemartin/system-design-primer"
                }
            ],
            "video": [
                {
                    "title": "Technical Interview Guide",
                    "link": directVideoLinks["Technical Round 2 (Deep Technical Interview)"]
                }
            ],
            "practice": [
                {
                    "title": "InterviewBit Technical Interview",
                    "link": "https://www.interviewbit.com/technical-interview-questions/"
                },
                {
                    "title": "GeeksforGeeks Technical Interview",
                    "link": "https://practice.geeksforgeeks.org/company-tags"
                }
            ]
        }
    },
    {
        "category": "HR Round (Culture Fit + Soft Skills)",
        "description": "Prepare for the HR round with communication and behavioral questions.",
        "topics": [
            "Communication: 'Tell me about yourself', 'Why this company?', Strengths/Weaknesses",
            "Career Goals & Learning Mindset: Future aspirations, continuous learning",
            "Scenario-based Questions: Handling conflicts, taking ownership",
            "Domain Awareness: Basics for sectors like FinTech, E-commerce, etc."
        ],
        "resources": {
            "documentation": [
                {
                    "title": "HR Interview Handbook",
                    "link": "https://www.themuse.com/advice/behavioral-interview-questions-answers-examples"
                },
                {
                    "title": "STAR Method Guide",
                    "link": "https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique"
                }
            ],
            "video": [
                {
                    "title": "HR Interview Success Guide",
                    "link": directVideoLinks["HR Round (Culture Fit + Soft Skills)"]
                }
            ],
            "practice": [
                {
                    "title": "InterviewBit HR Questions",
                    "link": "https://www.interviewbit.com/hr-interview-questions/"
                },
                {
                    "title": "PrepInsta HR Questions",
                    "link": "https://prepinsta.com/hr-interview-questions/"
                }
            ]
        }
    },
    {
        "category": "Final HR Discussion",
        "description": "Final stage where salary negotiation, job role confirmation, and document verification take place.",
        "topics": [
            "Salary Negotiation: Discussion on compensation",
            "Role Confirmation & Location Flexibility: Hybrid/Remote options",
            "Document Checklist: Ensure certificates and documents are ready"
        ],
        "resources": {
            "documentation": [
                {
                    "title": "Salary Negotiation Guide",
                    "link": "https://www.glassdoor.com/blog/guide/how-to-negotiate-salary/"
                },
                {
                    "title": "Offer Letter Checklist",
                    "link": "https://www.indeed.com/career-advice/finding-a-job/job-offer-checklist"
                }
            ],
            "video": [
                {
                    "title": "Salary Negotiation Masterclass",
                    "link": directVideoLinks["Final HR Discussion"]
                }
            ],
            "practice": [
                {
                    "title": "Salary Calculator",
                    "link": "https://groww.in/calculators/salary-calculator"
                },
                {
                    "title": "Salary Insights",
                    "link": "https://www.indeed.com/salaries"
                }
            ]
        }
    }
];

const TrainToPlace = () => {
    const [selectedCategory, setSelectedCategory] = useState(placementPrep[0]);

    return (
        <div style={styles.container}>
            <div style={styles.navbar}>
                {placementPrep.map((category) => (
                    <button
                        key={category.category}
                        style={selectedCategory.category === category.category ? styles.activeTab : styles.tab}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category.category}
                    </button>
                ))}
            </div>

            <div style={styles.content}>
                <h1 style={styles.heading}>{selectedCategory.category}</h1>
                <p style={styles.text}>{selectedCategory.description}</p>

                {/* Topics Section */}
                <h2 style={styles.subheading}>📚 Topics & Subtopics</h2>
                <ul>
                    {selectedCategory.topics.map((topic, index) => (
                        <li key={index} style={styles.listItem}>{topic}</li>
                    ))}
                </ul>

                {/* Documentation Section */}
                <h2 style={styles.subheading}>📄 Documentation</h2>
                <ul>
                    {selectedCategory.resources.documentation.map((doc, index) => (
                        <li key={index} style={styles.listItem}>
                            <a href={doc.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                                {doc.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Video Tutorial Section */}
                <h2 style={styles.subheading}>🎥 Video Tutorials</h2>
                <div style={styles.videoContainer}>
                    {selectedCategory.resources.video.map((video, index) => (
                        <div key={index} style={styles.videoCard}>
                            <iframe
                                width="100%"
                                height="200"
                                src={video.link}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={styles.video}
                            ></iframe>
                            <h3 style={styles.videoTitle}>{video.title}</h3>
                        </div>
                    ))}
                </div>

                {/* Practice Section */}
                <h2 style={styles.subheading}>💻 Practice</h2>
                <ul>
                    {selectedCategory.resources.practice.map((practice, index) => (
                        <li key={index} style={styles.listItem}>
                            <a href={practice.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                                {practice.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Poppins', 'Segoe UI', Roboto, sans-serif",
        backgroundColor: "#111827",
        background: "linear-gradient(135deg, #111827, #1E3A8A)",
        color: "#fff",
        alignItems: "center",
        minHeight: "100vh",
        paddingBottom: "30px",
        overflow: "hidden"
    },
    navbar: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
        backgroundColor: "rgba(30, 41, 59, 0.95)",
        padding: "15px 0",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        overflow: "hidden",
        borderBottom: "1px solid rgba(99, 102, 241, 0.2)"
    },
    tab: {
        backgroundColor: "transparent",
        border: "2px solid rgba(255, 255, 255, 0.1)",
        color: "#e0e0e0",
        fontSize: "16px",
        fontFamily: "Poppins, sans-serif",
        cursor: "pointer",
        padding: "10px 20px",
        margin: "5px 6px",
        transition: "all 0.3s ease",
        borderRadius: "30px",
        position: "relative",
        overflow: "hidden",
        outline: "none"
    },
    activeTab: {
        backgroundColor: "#6366F1",
        color: "#fff",
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "600",
        fontFamily: "Poppins, sans-serif",
        borderRadius: "30px",
        boxShadow: "0px 4px 10px rgba(99, 102, 241, 0.5)",
        border: "2px solid rgba(255, 255, 255, 0.1)"
    },
    content: {
        maxWidth: "800px",
        padding: "30px 25px",
        textAlign: "left",
        backgroundColor: "rgba(30, 41, 59, 0.8)",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
        margin: "20px 10px",
        border: "1px solid rgba(99, 102, 241, 0.2)",
        position: "relative",
        overflow: "hidden"
    },
    heading: {
        fontSize: "2.5rem",
        fontWeight: "800",
        color: "#fff",
        marginBottom: "20px",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        letterSpacing: "1px"
    },
    subheading: {
        fontSize: "1.5rem",
        fontWeight: "600",
        color: "#818CF8",
        marginTop: "25px",
        marginBottom: "15px"
    },
    text: {
        fontSize: "1rem",
        lineHeight: "1.6",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "15px"
    },
    link: {
        color: "#818CF8",
        textDecoration: "none",
        fontWeight: "600",
        transition: "all 0.3s ease"
    },
    listItem: {
        fontSize: "1rem",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "10px",
        lineHeight: "1.5"
    },
    videoContainer: {
        display: "flex",
        flexWrap: "wrap",
        gap: "25px",
        marginTop: "30px",
        justifyContent: "center"
    },
    videoCard: {
        backgroundColor: "rgba(15, 23, 42, 0.9)",
        borderRadius: "15px",
        padding: "20px",
        width: "300px",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.25)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        border: "1px solid rgba(99, 102, 241, 0.2)",
        overflow: "hidden",
        position: "relative"
    },
    video: {
        borderRadius: "10px",
        width: "100%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        border: "1px solid rgba(99, 102, 241, 0.3)"
    },
    videoTitle: {
        fontSize: "1.2rem",
        fontWeight: "600",
        color: "#fff",
        margin: "15px 0 10px 0",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)"
    },
    videoDescription: {
        fontSize: "0.9rem",
        color: "rgba(255, 255, 255, 0.7)",
        marginBottom: "15px",
        lineHeight: "1.5"
    },
    videoMeta: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "10px",
        padding: "8px 0",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)"
    },
    videoDate: {
        fontSize: "0.8rem",
        color: "rgba(255, 255, 255, 0.6)"
    },
    videoViewCount: {
        fontSize: "0.8rem",
        color: "#818CF8",
        fontWeight: "500"
    }
};

export default TrainToPlace;