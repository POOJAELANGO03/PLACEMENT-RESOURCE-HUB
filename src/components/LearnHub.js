import React, { useState } from "react";

const languages = [
    { 
        name: "HTML", 
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", 
        video: "https://www.youtube.com/embed/qz0aGYrrlhU", 
        document: "https://developer.mozilla.org/en-US/docs/Web/HTML", 
        documentDesc: "HTML (HyperText Markup Language) is the foundation of web development. It structures web content and defines elements like text, images, and links. HTML uses a system of elements, represented by tags, to format and display content on web pages.",
        hiringCompanies: ["Google", "Facebook", "Amazon", "Microsoft", "Apple"],
        projects: "https://www.w3schools.com/html/html_projects.asp", 
        projectsDesc: "Build engaging web pages and applications using HTML. Start with static pages and move on to dynamic interactions.",
        certification: "https://www.freecodecamp.org/learn/responsive-web-design/",
        certificationDesc: "Certification in HTML proves your skills in web development. Other powerful certificates include Google's Front-End Web Developer and Coursera's Web Development Specialization."
    },
    {
        "name": "CSS",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        "video": "https://www.youtube.com/embed/1Rs2ND1ryYc",
        "document": "https://developer.mozilla.org/en-US/docs/Web/CSS",
        "documentDesc": "CSS (Cascading Style Sheets) is essential for designing visually appealing web pages. It controls the layout, colors, fonts, and responsiveness of a website. CSS allows developers to separate content from presentation, making websites more accessible and easier to maintain. Modern CSS includes features like Flexbox and Grid for layout management, animations, and media queries for responsive design. Mastering CSS helps developers create user-friendly and visually engaging web applications.",
        "hiringCompanies": ["Adobe", "IBM", "Airbnb", "Netflix", "LinkedIn"],
        "projects": "https://www.frontendmentor.io/challenges",
        "projectsDesc": "Enhance your CSS skills by working on real-world UI challenges. Create responsive designs using Flexbox and Grid, build interactive animations, and improve user experience with CSS transitions. Experiment with themes, dark mode, and mobile-first design strategies to level up your CSS proficiency.",
        "certification": "https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/",
        "certificationDesc": "Earning a CSS certification showcases your expertise in styling web pages. Certifications like Udacity’s Front-End Nanodegree, Microsoft's Web Development Certification, and Coursera's Responsive Web Design Specialization provide valuable credentials for career advancement in front-end development."
    },
    {
        "name": "JavaScript",
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        "video": "https://www.youtube.com/embed/PkZNo7MFNFg",
        "document": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        "documentDesc": "JavaScript is a powerful programming language that brings interactivity to web pages. It enables dynamic content, such as animations, form validations, and interactive UI elements. JavaScript is the backbone of modern web development and is widely used in front-end and back-end development. With frameworks like React, Angular, and Vue, developers can build complex applications efficiently. JavaScript also supports asynchronous programming, APIs, and event-driven architecture, making it an essential skill for web developers.",
        "hiringCompanies": ["Google", "Microsoft", "Facebook", "Amazon", "Netflix"],
        "projects": "https://javascript30.com/",
        "projectsDesc": "Strengthen your JavaScript skills by building interactive projects like to-do apps, weather apps, real-time chat applications, and dynamic form validations. Experiment with ES6+ features like promises, async/await, and modules. Explore frameworks like React for building scalable front-end applications and Node.js for server-side development.",
        "certification": "https://www.codecademy.com/learn/introduction-to-javascript",
        "certificationDesc": "A JavaScript certification demonstrates your expertise in web development. Certifications from FreeCodeCamp, Udemy, Coursera, and Microsoft can validate your skills in JavaScript fundamentals, ES6 features, DOM manipulation, and asynchronous programming. Advanced certifications in frameworks like React, Angular, and Node.js enhance job prospects in front-end and full-stack development."
    },
    {
        "name": "Python",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        "video": "https://www.youtube.com/embed/rfscVS0vtbw",
        "document": "https://docs.python.org/3/",
        "documentDesc": "Python is a versatile, high-level programming language known for its simplicity and readability. It is widely used in web development, data science, artificial intelligence, machine learning, and automation. Python’s extensive libraries, such as NumPy, Pandas, TensorFlow, and Django, make it a powerful tool for various applications. With its easy-to-learn syntax, Python is an excellent choice for beginners and experienced developers alike. It is also the preferred language for scripting and automating repetitive tasks.",
        "hiringCompanies": ["Google", "Facebook", "Tesla", "Spotify", "IBM"],
        "projects": "https://realpython.com/tutorials/projects/",
        "projectsDesc": "Enhance your Python skills by building projects like web scrapers, chatbots, data visualization tools, and automation scripts. Develop web applications using Django or Flask, work on machine learning models with TensorFlow and Scikit-Learn, and analyze large datasets with Pandas. Python's versatility allows developers to create anything from desktop applications to AI-driven solutions.",
        "certification": "https://www.coursera.org/specializations/python",
        "certificationDesc": "Python certifications validate your skills in programming, data analysis, and AI development. Certifications from Google, Coursera, Udacity, and Microsoft help boost your career in software development, data science, and machine learning. Advanced Python certifications cover web frameworks, automation, and deep learning, making them highly valuable in the tech industry."
    },
    {
        "name": "SQL",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
        "video": "https://www.youtube.com/embed/HXV3zeQKqGY",
        "document": "https://www.w3schools.com/sql/",
        "documentDesc": "SQL (Structured Query Language) is the standard language for managing and manipulating databases. It allows users to create, read, update, and delete data efficiently. SQL is widely used in web applications, data analytics, and business intelligence. With SQL, you can retrieve specific data using queries, optimize database performance, and maintain data integrity. Popular relational database management systems (RDBMS) that use SQL include MySQL, PostgreSQL, Microsoft SQL Server, and Oracle. Mastering SQL is essential for database administrators, data analysts, and software developers working with structured data.",
        "hiringCompanies": ["Oracle", "Amazon", "Facebook", "Google", "Microsoft"],
        "projects": "https://www.sql-practice.com/",
        "projectsDesc": "Improve your SQL skills by working on real-world database projects. Create an employee management system, design an e-commerce database, or build a customer relationship management (CRM) system. Work with SQL queries to analyze sales data, optimize database indexing for better performance, and integrate SQL with programming languages like Python. Learning advanced SQL techniques such as stored procedures, triggers, and views can help you manage large-scale databases efficiently.",
        "certification": "https://www.datacamp.com/courses/introduction-to-sql",
        "certificationDesc": "SQL certifications validate your ability to work with databases and perform complex queries. Certifications from Microsoft, Oracle, Coursera, and DataCamp enhance job opportunities in database administration, data analysis, and backend development. Advanced certifications in MySQL, PostgreSQL, and Microsoft SQL Server provide specialized knowledge, making you a valuable asset in data-driven industries."
    },
    {
        "name": "Java",
        "image": "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
        "video": "https://www.youtube.com/embed/eIrMbAQSU34",
        "document": "https://docs.oracle.com/en/java/",
        "documentDesc": "Java is a powerful, object-oriented programming language used for building scalable applications. It is widely used in web development, mobile applications (Android), enterprise software, and cloud computing. Java's platform independence, thanks to the Java Virtual Machine (JVM), makes it one of the most versatile languages. Java is known for its strong memory management, security features, and high performance. It is extensively used in banking systems, large-scale web applications, and backend development. With frameworks like Spring and Hibernate, Java enables developers to build robust and efficient applications.",
        "hiringCompanies": ["Amazon", "Google", "Netflix", "IBM", "Microsoft"],
        "projects": "https://www.geeksforgeeks.org/java-projects-beginners/",
        "projectsDesc": "Enhance your Java skills by working on projects like a student management system, e-commerce website, or banking application. Develop a Java-based chat application, build a web-based inventory management system using Spring Boot, or create an Android application with Java. Advanced projects include machine learning with Java libraries, microservices architecture, and distributed systems. Practicing Java projects will help solidify your understanding of object-oriented programming and design patterns.",
        "certification": "https://www.oracle.com/java/technologies/javase/javase-certifications.html",
        "certificationDesc": "Java certifications validate your expertise in software development and enterprise solutions. Certifications from Oracle, Udemy, and Coursera help in career growth by proving your ability to build scalable applications. The Oracle Certified Java Programmer (OCJP) certification is highly regarded in the industry. Advanced certifications include Java EE for enterprise development and Spring Framework certifications for backend development. Becoming certified in Java can boost your chances of securing roles in software engineering, backend development, and mobile app development."
    },
    {
        "name": "PHP",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
        "video": "https://www.youtube.com/embed/OK_JCtrrv-c",
        "document": "https://www.php.net/docs.php",
        "documentDesc": "PHP (Hypertext Preprocessor) is a widely-used server-side scripting language for web development. It is primarily used to create dynamic and interactive websites, working seamlessly with databases like MySQL. PHP is the backbone of many content management systems (CMS) such as WordPress, Joomla, and Drupal. With its built-in support for handling forms, sessions, and cookies, PHP makes it easy to develop secure web applications. It integrates well with HTML, JavaScript, and CSS, allowing developers to build full-stack web applications. PHP frameworks like Laravel and CodeIgniter further enhance development speed and maintainability.",
        "hiringCompanies": ["Facebook", "WordPress", "Yahoo", "Slack", "Wikipedia"],
        "projects": "https://www.w3schools.com/php/php_examples.asp",
        "projectsDesc": "Build dynamic websites and applications using PHP. Start with simple projects like a contact form, a login system, or a personal blog. Progress to advanced applications such as an e-commerce website, an online booking system, or a content management system. Utilize PHP frameworks like Laravel to develop scalable web applications with MVC architecture. Integrate APIs, create RESTful services, and enhance security with proper authentication and validation. PHP allows you to handle user authentication, database operations, and payment processing effectively.",
        "certification": "https://www.udemy.com/course/php-for-beginners/",
        "certificationDesc": "PHP certifications validate your skills in backend web development and database management. Certifications from Zend, Udemy, and Coursera help showcase expertise in PHP programming. The Zend Certified PHP Engineer certification is widely recognized in the industry. Learning PHP alongside MySQL, JavaScript, and AJAX enhances your ability to build full-stack web applications. A PHP certification can open doors to careers in web development, backend engineering, and CMS development."
    },
    {
        "name": "C",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
        "video": "https://www.youtube.com/embed/KJgsSFOSQv0",
        "document": "https://devdocs.io/c/",
        "documentDesc": "C is a powerful, general-purpose programming language that serves as the foundation for many modern languages like C++, Java, and Python. It is widely used in system programming, embedded systems, operating system development, and game development. Known for its efficiency and speed, C provides low-level memory access, making it ideal for hardware programming. It is extensively used in creating operating systems (Linux, Windows), databases (MySQL), and performance-critical applications. Understanding C helps in grasping fundamental programming concepts such as memory management, pointers, data structures, and algorithm design.",
        "hiringCompanies": ["Microsoft", "Intel", "NASA", "IBM", "Google"],
        "projects": "https://www.geeksforgeeks.org/c-projects/",
        "projectsDesc": "Develop hands-on experience by working on C projects like a simple calculator, a text-based game, or a file management system. Intermediate projects can include a student record management system, a banking application, or a mini shell for command execution. Advanced projects involve developing an operating system kernel, a compiler, or an embedded system application. Mastering C through projects enhances problem-solving skills and deepens understanding of system-level programming.",
        "certification": "https://www.udemy.com/course/c-programming-for-beginners-/",
        "certificationDesc": "Certifications in C programming validate your expertise in system programming and algorithm development. Certifications from Udemy, Coursera, and EdX help in career advancement, particularly in embedded systems and software development. The C Certified Professional Programmer (CLP) certification is widely recognized. Learning C is beneficial for careers in game development, firmware engineering, operating system development, and high-performance computing. A certification in C strengthens programming fundamentals and prepares you for more advanced programming languages."
    },
    {
        "name": "C++",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
        "video": "https://www.youtube.com/embed/vLnPwxZdW4Y",
        "document": "https://devdocs.io/cpp/",
        "documentDesc": "C++ is a powerful object-oriented programming language that builds upon C, adding features like classes, inheritance, polymorphism, and abstraction. It is widely used in competitive programming, game development, system software, and high-performance applications. With its flexibility, C++ is the preferred language for developing large-scale applications such as browsers, financial tools, and even AI-based applications. It provides fine-grained memory control and is used in applications where speed and efficiency are crucial, such as game engines, real-time simulations, and operating systems.",
        "hiringCompanies": ["Google", "Microsoft", "Adobe", "Amazon", "Nvidia"],
        "projects": "https://www.geeksforgeeks.org/cpp-projects/",
        "projectsDesc": "Enhance your C++ skills by working on projects like a simple banking system, a library management system, or a tic-tac-toe game. Intermediate projects can include an inventory management system, a chess game, or a social media simulation. Advanced projects involve building game engines, developing 3D graphics applications using OpenGL, or creating a mini compiler. Practicing with projects helps in mastering data structures, algorithms, and object-oriented programming principles.",
        "certification": "https://www.udemy.com/course/beginning-c-plus-plus-programming/",
        "certificationDesc": "Certifications in C++ programming validate expertise in object-oriented programming, memory management, and advanced algorithms. Platforms like Udemy, Coursera, and EdX offer courses that prepare you for professional roles. The C++ Certified Professional Programmer (CPP) certification is widely recognized in the industry. C++ is essential for careers in game development, system programming, competitive coding, and financial modeling. A strong grasp of C++ opens opportunities in high-performance computing and embedded systems development."
    },
    {
        "name": "C#",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
        "video": "https://www.youtube.com/embed/GhQdlIFylQ8",
        "document": "https://learn.microsoft.com/en-us/dotnet/csharp/",
        "documentDesc": "C# is a modern, object-oriented programming language developed by Microsoft as part of the .NET ecosystem. It is widely used for building desktop applications, web applications, games, and enterprise solutions. C# offers strong typing, garbage collection, and language-integrated query (LINQ) features, making it powerful and developer-friendly. It supports multiple paradigms, including imperative, declarative, functional, and component-oriented programming. C# is the preferred language for Windows development, Unity game development, and backend services using ASP.NET Core.",
        "hiringCompanies": ["Microsoft", "Amazon", "Adobe", "Intel", "Siemens"],
        "projects": "https://dotnet.microsoft.com/en-us/learn/csharp",
        "projectsDesc": "Start with beginner projects such as building a simple calculator, a to-do list, or a console-based quiz application. Intermediate developers can create inventory management systems, chat applications, or RESTful APIs using ASP.NET. Advanced projects may include game development with Unity, cloud-based services with Azure, and AI-driven applications using machine learning libraries. C# is highly versatile, making it a great choice for both Windows and cross-platform application development.",
        "certification": "https://learn.microsoft.com/en-us/certifications/exams/70-483/",
        "certificationDesc": "C# certifications, such as Microsoft's Programming in C# (Exam 70-483) and Microsoft Certified: Azure Developer Associate, validate your expertise in object-oriented programming, .NET development, and cloud services. Other learning platforms, including Udemy, Coursera, and Pluralsight, offer courses that help developers gain proficiency in C# and .NET technologies. Obtaining a certification can enhance career opportunities in software development, game development, and enterprise application development."
    },
    {
        "name": "Bootstrap",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
        "video": "https://www.youtube.com/embed/gqOEoUR5RHg",
        "document": "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
        "documentDesc": "Bootstrap is a popular front-end framework that simplifies web development by providing pre-designed components and responsive grid systems. It is built with HTML, CSS, and JavaScript and is widely used for creating modern, mobile-friendly websites. Bootstrap comes with built-in components like navigation bars, buttons, forms, and modals, making web design efficient and consistent. It enables rapid prototyping and ensures cross-browser compatibility. The latest versions of Bootstrap utilize Flexbox and CSS Grid for better layout management. It is highly customizable, allowing developers to override styles and create unique designs while maintaining a responsive structure.",
        "hiringCompanies": ["Google", "Microsoft", "Amazon", "Facebook", "IBM"],
        "projects": "https://www.w3schools.com/bootstrap/bootstrap_examples.asp",
        "projectsDesc": "Practice Bootstrap by building responsive websites, admin dashboards, and portfolio pages. Beginners can start with a simple landing page or a personal blog layout. Intermediate projects include an e-commerce front-end, a custom Bootstrap theme, or a portfolio website with animations. Advanced developers can work on a Bootstrap-based CMS, a social media dashboard, or an interactive web application. Bootstrap's grid system and components help in creating professional-looking interfaces with minimal effort.",
        "certification": "https://www.udemy.com/course/bootstrap-4-from-scratch-with-5-projects/",
        "certificationDesc": "Bootstrap certifications help in mastering front-end development and responsive web design. Platforms like Udemy, Coursera, and LinkedIn Learning offer courses that teach Bootstrap along with modern web development practices. Certification validates your ability to create visually appealing, mobile-first designs with Bootstrap. It is beneficial for front-end developers, UI/UX designers, and full-stack developers. With Bootstrap, developers can streamline the design process and create elegant, responsive websites efficiently."
    },
    {
        "name": "React",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        "video": "https://www.youtube.com/embed/bMknfKXIFA8",
        "document": "https://react.dev/",
        "documentDesc": "React is a popular JavaScript library for building user interfaces, particularly for single-page applications (SPAs). Developed and maintained by Facebook, React enables developers to create dynamic, high-performance web applications with reusable components. React uses a virtual DOM for efficient rendering, making applications faster and more responsive. It follows a component-based architecture, allowing developers to break down complex UI into smaller, manageable parts. React also supports hooks, context API, and state management libraries like Redux for handling complex application states. It is widely used in modern web development for creating scalable and maintainable applications.",
        "hiringCompanies": ["Facebook", "Netflix", "Uber", "Airbnb", "Microsoft"],
        "projects": "https://www.freecodecamp.org/news/react-projects-for-beginners/",
        "projectsDesc": "Enhance your React skills by working on real-world projects like a weather app, a to-do list, or a personal blog. Intermediate projects include a movie search app, an e-commerce store, or a social media dashboard. Advanced developers can build a full-stack MERN application, a real-time chat app, or a content management system using React. These projects help in mastering state management, component lifecycle, and API integration.",
        "certification": "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
        "certificationDesc": "React certifications validate your expertise in building modern web applications. Courses from Udemy, Coursera, and Pluralsight provide in-depth knowledge of React fundamentals, state management, and advanced concepts. Certifications like Meta's Front-End Developer Professional Certificate and React Nanodegree from Udacity are highly regarded. Earning a certification can boost your career as a front-end developer, making you a valuable asset in web development teams."
    },
    {
        "name": "Node.js",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        "video": "https://www.youtube.com/embed/TlB_eWDSMt4",
        "document": "https://nodejs.org/en/docs",
        "documentDesc": "Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside the browser. It is built on Chrome's V8 JavaScript engine and is widely used for building scalable and high-performance server-side applications. Node.js operates on a non-blocking, event-driven architecture, making it ideal for handling asynchronous operations and real-time applications. It supports various frameworks like Express.js for creating RESTful APIs and web applications. Node.js is commonly used for backend development, microservices, and API-driven applications, making it a crucial part of the JavaScript ecosystem.",
        "hiringCompanies": ["Netflix", "PayPal", "LinkedIn", "Walmart", "Uber"],
        "projects": "https://www.digitalocean.com/community/tutorial_series/node-js-projects",
        "projectsDesc": "Practice Node.js by building RESTful APIs, real-time chat applications, and e-commerce platforms. Beginners can start with simple projects like a URL shortener, a notes app, or a basic CRUD API using Express.js. Intermediate projects include authentication systems, task managers, and real-time collaboration tools using WebSockets. Advanced developers can work on large-scale applications like social media platforms, content management systems, or blockchain-based applications. Node.js provides the flexibility and scalability needed for modern web applications.",
        "certification": "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/",
        "certificationDesc": "Node.js certifications validate your expertise in backend development using JavaScript. Courses from Udemy, Coursera, and Pluralsight provide hands-on training in building APIs, integrating databases, and optimizing server-side performance. Certifications such as the OpenJS Node.js Application Developer Certification (JSNAD) and Node.js Services Developer (JSNSD) help in demonstrating your skills. Obtaining a certification can boost your career as a backend developer, making you a valuable asset for companies looking to build scalable applications."
    },
    {
        "name": "MySQL",
        "image": "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
        "video": "https://www.youtube.com/embed/7S_tz1z_5bA",
        "document": "https://dev.mysql.com/doc/",
        "documentDesc": "MySQL is an open-source relational database management system (RDBMS) widely used for managing structured data. It uses SQL (Structured Query Language) for querying, updating, and managing databases efficiently. MySQL is known for its reliability, performance, and ease of use, making it a popular choice for web applications, data storage, and enterprise solutions. It supports transactions, indexing, stored procedures, and replication, allowing for scalability and high availability. Many large-scale applications, including e-commerce platforms and content management systems, rely on MySQL for data storage and retrieval.",
        "hiringCompanies": ["Facebook", "Google", "Twitter", "Amazon", "Uber"],
        "projects": "https://www.mysqltutorial.org/mysql-sample-database.aspx",
        "projectsDesc": "Enhance your MySQL skills by building practical database-driven applications. Start with creating and managing a simple employee database, an inventory management system, or a library management system. Intermediate projects include building a customer relationship management (CRM) system, an online examination system, or an event booking system. Advanced developers can work on large-scale applications like financial transaction systems, e-commerce databases, or data analytics dashboards. MySQL’s efficiency and scalability make it a vital tool for backend development and data-driven applications.",
        "certification": "https://education.oracle.com/mysql-database-certification/cid-192-1",
        "certificationDesc": "MySQL certifications validate your skills in database management and administration. Oracle offers MySQL Database Administrator and MySQL Developer certifications, which are highly recognized in the industry. Other courses from Udemy, Coursera, and Pluralsight provide hands-on experience in writing complex queries, optimizing databases, and ensuring data security. Certification in MySQL can boost your career in database administration, backend development, and data engineering, making you a sought-after professional in the IT industry."
    },
    {
        "name": "Django",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg",
        "video": "https://www.youtube.com/embed/F5mRW0jo-U4",
        "document": "https://docs.djangoproject.com/en/stable/",
        "documentDesc": "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built with a 'batteries-included' philosophy, Django provides built-in tools for authentication, database management, and security, making it an excellent choice for developers building robust web applications. Django follows the Model-View-Template (MVT) architecture, which simplifies the development of scalable and maintainable applications. It is widely used for projects requiring high security, scalability, and rapid deployment, such as social networks, e-commerce platforms, and data-driven applications.",
        "hiringCompanies": ["Instagram", "Spotify", "Dropbox", "Mozilla", "NASA"],
        "projects": "https://realpython.com/tutorials/django/",
        "projectsDesc": "Build real-world applications with Django, starting with simple projects like a personal blog, a portfolio website, or a to-do app. Intermediate developers can create e-commerce platforms, job portals, or real-time chat applications. Advanced projects include multi-user dashboards, AI-powered recommendation systems, and large-scale social networking sites. Django’s built-in authentication, database integration, and REST API capabilities make it a powerful choice for full-stack web development. The framework's scalability allows it to handle complex business applications and large amounts of data efficiently.",
        "certification": "https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/",
        "certificationDesc": "Django certifications validate your skills in full-stack web development using Python. Platforms like Udemy, Coursera, and edX offer Django courses covering everything from basic CRUD operations to advanced API development and deployment. Certifications like 'Python Web Developer with Django' or 'Full-Stack Development with Django' can help you stand out in job applications. With Django’s growing demand in web and enterprise applications, earning a certification can improve your chances of landing a job in software development, backend engineering, and data-driven web application development."
    },
    {
        "name": "MongoDB",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpWy3o_kln4KGGrFA6jWqUx4yJRfnkRyqpA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYxeXZP_98DV_cmjKPashy4MMDZ2UTiWT7Q&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYxeXZP_98DV_cmjKPashy4MMDZ2UTiWT7Q&s",
        "video": "https://www.youtube.com/embed/Www6cTUymCY",
        "document": "https://www.mongodb.com/docs/",
        "documentDesc": "MongoDB is a NoSQL, document-oriented database that stores data in a flexible, JSON-like format. Unlike relational databases, it does not require predefined schemas, making it more adaptable to changing data structures. MongoDB is designed for high performance, scalability, and ease of development, making it a popular choice for modern web and mobile applications. Its features include automatic sharding, replication, indexing, and aggregation pipelines, enabling developers to handle large-scale data efficiently. It is widely used in applications that require real-time analytics, big data processing, and cloud-based solutions.",
        "hiringCompanies": ["Google", "Facebook", "eBay", "Adobe", "Uber"],
        "projects": "https://www.mongodb.com/developer/products/mongodb/",
        "projectsDesc": "Start with simple MongoDB projects like creating a task manager, a blog system, or a product catalog. Intermediate projects may include a real-time chat application, an inventory management system, or an IoT data storage solution. Advanced developers can build scalable applications such as e-commerce platforms, AI-powered recommendation systems, and big data analytics solutions using MongoDB’s aggregation framework. MongoDB’s ability to handle unstructured data makes it ideal for applications involving user-generated content, machine learning, and distributed systems.",
        "certification": "https://university.mongodb.com/courses/catalog",
        "certificationDesc": "MongoDB offers official certifications, such as the MongoDB Developer and MongoDB Database Administrator certifications, which validate expertise in database design, indexing, aggregation, and performance optimization. Online platforms like Udemy, Coursera, and edX provide MongoDB training programs that cover fundamental to advanced topics, including working with the MongoDB Atlas cloud platform. Earning a MongoDB certification can improve job prospects for roles such as backend developer, database administrator, and big data engineer in tech companies focused on cloud computing and large-scale data processing."
    }
];

const LearnHub = () => {
    const [selectedLang, setSelectedLang] = useState(languages[0]);

    return (
        <div style={styles.container}>
            <div style={styles.navbar}>
                {languages.map((lang) => (
                    <button 
                        key={lang.name} 
                        style={selectedLang.name === lang.name ? styles.activeTab : styles.tab}
                        onClick={() => setSelectedLang(lang)}
                    >
                        {lang.name}
                    </button>
                ))}
            </div>

            <div style={styles.content}>
                <h1 style={styles.heading}>{selectedLang.name}</h1>
                <img src={selectedLang.image} alt={selectedLang.name} style={styles.image} />

                <h2 style={styles.subheading}>📄 Documentation</h2>
                <p style={styles.text}>{selectedLang.documentDesc}</p>
                <a href={selectedLang.document} target="_blank" rel="noopener noreferrer" style={styles.link}>Read Documentation</a>

                <h3 style={styles.subheading}>🏢 Companies Hiring for {selectedLang.name}</h3>
                <ul>
                    {selectedLang.hiringCompanies.map((company, index) => (
                        <li key={index} style={styles.listItem}>{company}</li>
                    ))}
                </ul>

                <h2 style={styles.subheading}>🎥 Video Tutorial</h2>
                <iframe 
                    width="560" 
                    height="315" 
                    src={selectedLang.video} 
                    title={`${selectedLang.name} Video`} 
                    frameBorder="0" 
                    allowFullScreen 
                    style={styles.video}
                ></iframe>

                <h2 style={styles.subheading}>💻 Projects</h2>
                <p style={styles.text}>{selectedLang.projectsDesc}</p>
                <a href={selectedLang.projects} target="_blank" rel="noopener noreferrer" style={styles.link}>Explore Projects</a>

                <h2 style={styles.subheading}>🎓 Certification</h2>
                <p style={styles.text}>{selectedLang.certificationDesc}</p>
                <a href={selectedLang.certification} target="_blank" rel="noopener noreferrer" style={styles.link}>Get Certified</a>
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
        paddingBottom: "20px",
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
    image: {
        width: "120px",
        height: "120px",
        display: "block",
        margin: "15px 0",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        border: "1px solid rgba(99, 102, 241, 0.3)"
    },
    video: {
        marginBottom: "25px",
        borderRadius: "12px",
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(99, 102, 241, 0.3)"
    },
    listItem: {
        fontSize: "1rem",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "10px",
        lineHeight: "1.5"
    },
    link: {
        color: "#818CF8",
        textDecoration: "none",
        fontWeight: "600",
        transition: "all 0.3s ease"
    }
};
export default LearnHub;
