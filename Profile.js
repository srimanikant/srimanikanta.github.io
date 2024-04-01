document.addEventListener("DOMContentLoaded", function() {
    // Resume data
    const resumeData = {
        name: "Chakradhara Brahma Sri Manikanta Nalla",
        address: "Midland, 48640, United States",
        phone: "(309) 868-3886",
        email: "srimanikanta.nalla@gmail.com",
        professionalObjective: "To work in a globally competitive environment on challenging assignments that shall yield the twin benefits of a steady-paced professional growth and strong contribution to the ongoing success of the organization.",
        experienceSummary: "Overall 5 years of work experience and relevant EDI experience as 4 years in End to End Implementations of B2B integration...",
        coreCompetencies: ["EDI Sterling Integrator", "Open Text GXS", "Problem Solving", "Team Management"],
        careerProfile: [
            {
                company: "Capgemini Technology Services India Limited",
                duration: "October 2021 to Jan 2023"
            },
            {
                company: "Cognizant Technology Solutions India Private Limited",
                duration: "March 2019 to October 2021"
            },
            {
                company: "Way2Wealth Securities Private Limited",
                duration: "February 2017 to February 2018"
            }
        ],
        academicProfile: [
            {
                degree: "Master of Science in Business Analytics",
                university: "Northwood University, Midland MI USA",
                year: "2024"
            },
            {
                degree: "PGDM in Finance",
                university: "Acharya Academy of Management Studies, Bangalore",
                year: "2017"
            }
        ],
        certifications: ["Postgraduate Certificate in Big Data Analytics and Optimization (2018)"],
        skillsAcquired: {
            integrationTools: ["Open Text GXS B2B Trading Grid", "File Zilla", "Sterling Integrator Map Editor 8.0.3.0"],
            ediMessageTypes: ["850", "855", "856", "810", "940", "945", "997", "ORDERS", "ORDERSP", "DESADV", "INVOIC"],
            communicationProtocols: ["FTP", "FTPS", "HTTP", "SFTP", "HTTPS", "AS2"],
            industryStandards: ["ANSI X12", "EDIFACT"],
            operatingSystem: ["Windows", "UNIX"]
        },
        projectProfile: [
            {
                projectName: "Amgen",
                client: "Amgen., USA",
                technology: "EDI",
                transactionSets: ["850", "855", "856", "810", "940", "945", "997"],
                platform: "EDI, Sterling Integrator, ANSI X12 /EDIFACT V.4010",
                duration: "October 2021 to till date",
                designation: "EDI Developer",
                description: "Amgen Inc. (formerly Applied Molecular Genetics Inc.) is an American multinational biopharmaceutical company headquartered in Thousand Oaks, California..."
            },
            {
                projectName: "MATTEL END TO END SUPPORT",
                client: "Mattel Inc",
                duration: "March 2019 to October 2021",
                technology: "EDI",
                transactionSets: ["810", "850", "855", "856", "940", "945", "997"],
                tools: ["FTP", "Putty", "Ultra Edit", "beyond compare", "Trading Grid", "Team Book"],
                designation: "EDI Developer",
                description: "Mattel Inc. is the world's largest toy importing company based on revenue..."
            },
            {
                projectName: "Way2wealth Securities Private Limited",
                duration: "February 2017 to February 2018",
                role: "Financial Planning",
                description: "V. G. Siddhartha started in 1984 the company Sivan Securities..."
            }
        ]
    };

    // Function to display resume content
    function displayResume() {
        // Display header
        const header = document.createElement("div");
        header.innerHTML = `
            <h1>${resumeData.name}</h1>
            <p>${resumeData.address}</p>
            <p>${resumeData.phone}</p>
            <p>Email: ${resumeData.email}</p>
        `;
        document.body.appendChild(header);

        // Display professional objective
        const professionalObjective = document.createElement("div");
        professionalObjective.innerHTML = `
            <h2>PROFESSIONAL OBJECTIVE:</h2>
            <p>${resumeData.professionalObjective}</p>
        `;
        document.body.appendChild(professionalObjective);

        // Display experience summary
        const experienceSummary = document.createElement("div");
        experienceSummary.innerHTML = `
            <h2>EXPERIENCE SUMMARY:</h2>
            <p>${resumeData.experienceSummary}</p>
        `;
        document.body.appendChild(experienceSummary);

        // Display core competencies
        const coreCompetencies = document.createElement("div");
        coreCompetencies.innerHTML = `
            <h2>Core Competencies:</h2>
            <ul>
                ${resumeData.coreCompetencies.map(skill => `<li>${skill}</li>`).join("")}
            </ul>
        `;
        document.body.appendChild(coreCompetencies);

        // Display career profile
        const careerProfile = document.createElement("div");
        careerProfile.innerHTML = `
            <h2>CAREER PROFILE:</h2>
            ${resumeData.careerProfile.map(profile => `
                <p>${profile.company} - ${profile.duration}</p>
            `).join("")}
        `;
        document.body.appendChild(careerProfile);

        // Display academic profile
        const academicProfile = document.createElement("div");
        academicProfile.innerHTML = `
            <h2>ACADEMIC PROFILE:</h2>
            ${resumeData.academicProfile.map(profile => `
                <p>${profile.degree} - ${profile.university} (${profile.year})</p>
            `).join("")}
        `;
        document.body.appendChild(academicProfile);

        // Display certifications
        const certifications = document.createElement("div");
        certifications.innerHTML = `
            <h2>CERTIFICATIONS:</h2>
            <p>${resumeData.certifications.join(", ")}</p>
        `;
        document.body.appendChild(certifications);

        // Display skills acquired
        const skillsAcquired = document.createElement("div");
        skillsAcquired.innerHTML = `
            <h2>SKILLS ACQUIRED:</h2>
            <ul>
                <li><strong>Integration Tools:</strong> ${resumeData.skillsAcquired.integrationTools.join(", ")}</li>
                <li><strong>EDI Message Types:</strong> ${resumeData.skillsAcquired.ediMessageTypes.join(", ")}</li>
                <li><strong>Communication Protocols:</strong> ${resumeData.skillsAcquired.communicationProtocols.join(", ")}</li>
                <li><strong>Industry Standards:</strong> ${resumeData.skillsAcquired.industryStandards.join(", ")}</li>
                <li><strong>Operating System:</strong> ${resumeData.skillsAcquired.operatingSystem.join(", ")}</li>
            </ul>
        `;
        document.body.appendChild(skillsAcquired);

        // Display project profile
        const projectProfile = document.createElement("div");
        projectProfile.innerHTML = `
            <h2>PROJECT PROFILE:</h2>
            ${resumeData.projectProfile.map(project => `
                <h3>${project.projectName}</h3>
                <p><strong>Client:</strong> ${project.client}</p>
                <p><strong>Duration:</strong> ${project.duration}</p>
                <p><strong>Technology:</strong> ${project.technology}</p>
                <p><strong>Transaction Sets:</strong> ${project.transactionSets.join(", ")}</p>
                ${project.tools ? `<p><strong>Tools:</strong> ${project.tools.join(", ")}</p>` : ""}
                <p><strong>Designation:</strong> ${project.designation}</p>
                <p>${project.description}</p>
            `).join("")}
        `;
        document.body.appendChild(projectProfile);
    }

    // Call the function to display resume content
    displayResume();
});