
import { course1, course2, course3, maybank, hsbc, cimb, rhb, bankislam } from "../assets/images";


export const navLinks = [

    { to: "/", label: "Dashboard" },
    { to: "community", label: "Community" },
    { to: "company", label: "Company" },
    { to: "talent", label: "Talent" },
    { to: "learning", label: "Learning" },
];

export const courses = [
    {
        imgURL: course1,
        title: "Investing 101",
        instructor: "MR James",
        tags: "Investing",
        price: 'RM 99',
        purchaseLink: '#',
    },
    {
        imgURL: course2,
        title: "Islamic Finance Guide",
        instructor: "JP Morgan",
        tags: "Financial",
        price: 'RM 350',
        purchaseLink: '#',
    },
    {
        imgURL: course3,
        title: "Syariah Compliance",
        instructor: "Syariah",
        tags: "Syariah",
        price: 'FREE',
        purchaseLink: '#',
    },
    {
        imgURL: course1,
        title: "Investing 101",
        instructor: "Warren",
        tags: "Investing",
        price: 'RM 99',
        purchaseLink: '#',
    },
    {
        imgURL: course2,
        title: "Islamic Finance Guide",
        instructor: "JP Morgan",
        tags: "Financial",
        price: 'RM 350',
        purchaseLink: '#',
    },
    {
        imgURL: course3,
        title: "Syariah Compliance",
        instructor: "Syariah",
        tags: "Syariah",
        price: 'FREE',
        purchaseLink: '#',
    },



];

export const resumecourses = [
    {
        id: '1',
        imgURL: course1,
        title: "Investing 101",
        instructor: "Gordon",
        progress: 65,
    },
    {
        id: '2',
        imgURL: course2,
        title: "Investing Advanced",
        instructor: "Jack",
        progress: 30,
    },



];

export const jobs = [
    {
        id: 1,
        jobname: 'Shariah Compliance Officer',
        company: 'Maybank Islamic Berhad',
        companyImage: maybank, // Placeholder image, replace with actual company logo URL
        location: 'Kuala Lumpur, Malaysia',
        skills: ['Shariah Compliance', 'Islamic Banking Knowledge', 'Regulatory Advisory'],
        salary: 8000,
        about: "Maybank Islamic Berhad is looking for a Shariah Compliance Officer to ensure that all our banking operations and products comply with Shariah principles. The ideal candidate will work closely with various departments to provide Shariah-related advisory and assessment.",
        role: "Responsible for overseeing the bank's adherence to Shariah law and principles in all operations and financial products.",
        responsibilities: [
            "Conduct regular Shariah compliance reviews and audits.",
            "Advise on Shariah compliance aspects of banking products and services.",
            "Develop and implement Shariah governance frameworks.",
            "Provide training on Shariah principles to staff.",
            "Participate in product development to ensure compliance from the inception.",
        ],
        requirements: [
            "Bachelor's degree in Islamic Finance, Shariah Law, or equivalent.",
            "At least 3 years of experience in a Shariah compliance role within the Islamic banking sector.",
            "Strong understanding of Islamic finance principles and Malaysian regulatory requirements.",
            "Excellent communication and interpersonal skills.",
            "Certification in Islamic finance or Shariah law is a plus.",
        ],
        postedDate: '2024-03-15',
        type: 'Full-time',
        experienceLevel: 'Mid-level',
    },
    {
        id: 2,
        jobname: 'Islamic Finance Analyst',
        company: 'CIMB Islamic',
        companyImage: cimb, // Placeholder image, replace with actual company logo URL
        location: 'Kuala Lumpur, Malaysia',
        skills: ['Financial Analysis', 'Islamic Financial Products', 'Risk Management'],
        salary: 7000,
        about: "CIMB Islamic is seeking a skilled Islamic Finance Analyst to join our team. The successful candidate will be instrumental in analyzing Islamic financial products and services, ensuring they meet the bank's strategic objectives while complying with Shariah principles.",
        role: "Analyze and evaluate the performance and compliance of Islamic financial products and services.",
        responsibilities: [
            "Perform detailed financial analysis on Islamic banking products.",
            "Assess product compliance with Shariah principles.",
            "Support the development of new Islamic financial products.",
            "Provide risk assessment and management for Islamic finance portfolios.",
            "Collaborate with the Shariah board to resolve compliance issues.",
        ],
        requirements: [
            "Bachelor's degree in Finance, Economics, or related field with a focus on Islamic Finance.",
            "At least 2 years of relevant experience in Islamic finance analysis.",
            "Strong analytical skills and proficiency in financial modeling.",
            "Knowledge of Shariah laws and principles applicable to Islamic finance.",
            "Ability to work independently and in a team environment.",
        ],
        postedDate: '2024-03-20',
        type: 'Full-time',
        experienceLevel: 'Entry-level to Mid-level',
    },
    {
        id: 3,
        jobname: 'Shariah Audit Manager',
        company: 'RHB Islamic Bank',
        companyImage: rhb, // Placeholder image, replace with actual company logo URL
        location: 'Selangor, Malaysia',
        skills: ['Shariah Auditing', 'Compliance Monitoring', 'Regulatory Knowledge'],
        salary: 9000,
        about: "RHB Islamic Bank is on the lookout for a Shariah Audit Manager to lead our Shariah compliance audit team. The role involves ensuring that all banking practices and products are in full compliance with Shariah laws and principles through effective auditing and monitoring.",
        role: "Lead the Shariah audit team to ensure compliance with all Shariah principles and regulatory requirements.",
        responsibilities: [
            "Plan and execute Shariah compliance audits across all departments.",
            "Identify compliance risks and recommend corrective actions.",
            "Prepare audit reports for management and the Shariah committee.",
            "Ensure audit practices adhere to international standards and Shariah compliance.",
            "Keep abreast of changes in Shariah regulations and advise on implications for the bank.",
        ],
        requirements: [
            "Bachelor's degree in Islamic Finance, Shariah Law, Accounting, or related fields.",
            "Minimum 5 years of experience in Shariah auditing or compliance within the Islamic banking sector.",
            "Strong leadership skills and experience managing an audit team.",
            "In-depth knowledge of Shariah laws and principles, as well as Malaysian Islamic financial regulations.",
            "Certification as a Shariah Auditor or similar is highly desirable.",
        ],
        postedDate: '2024-03-10',
        type: 'Full-time',
        experienceLevel: 'Senior-level',
    },
    {
        id: 4,
        jobname: 'Product Development Manager - Islamic Banking',
        company: 'Bank Islam Malaysia',
        companyImage: bankislam, // Placeholder image, replace with actual company logo URL
        location: 'Kuala Lumpur, Malaysia',
        skills: ['Product Development', 'Project Management', 'Shariah Compliance'],
        salary: 8500,
        about: "Bank Islam Malaysia is looking for a Product Development Manager with a focus on Islamic Banking to join our dynamic team. This role involves leading the development of innovative Islamic financial products that comply with Shariah principles and meet the needs of our customers.",
        role: "Lead the development and management of Islamic financial products from inception to launch, ensuring Shariah compliance.",
        responsibilities: [
            "Identify market opportunities for new Islamic financial products.",
            "Collaborate with the Shariah committee and other departments to ensure product compliance and feasibility.",
            "Manage the entire product development lifecycle, including design, development, and launch.",
            "Conduct market research and analysis to guide product development.",
            "Develop marketing strategies and materials for new products.",
        ],
        requirements: [
            "Bachelor's degree in Business, Finance, or related field, with a strong understanding of Islamic Finance.",
            "At least 4 years of experience in product development within the Islamic banking sector.",
            "Proven track record of successfully launching new products.",
            "Strong project management skills and ability to lead cross-functional teams.",
            "Excellent communication, analytical, and strategic thinking skills.",
        ],
        postedDate: '2024-03-22',
        type: 'Full-time',
        experienceLevel: 'Mid to Senior-level',
    },
    {
        id: 5,
        jobname: 'Islamic Banking Relationship Manager',
        company: 'HSBC Amanah Malaysia',
        companyImage: hsbc, // Placeholder image, replace with actual company logo URL
        location: 'Penang, Malaysia',
        skills: ['Customer Relationship', 'Sales Strategy', 'Shariah Principles Knowledge'],
        salary: 7500,
        about: "HSBC Amanah Malaysia is seeking an Islamic Banking Relationship Manager to join our team. The successful candidate will be responsible for managing and growing a portfolio of corporate clients, ensuring their banking needs are met in accordance with Shariah principles.",
        role: "Manage and develop relationships with corporate clients to enhance customer satisfaction and meet sales targets, while ensuring Shariah compliance.",
        responsibilities: [
            "Build and maintain strong relationships with new and existing corporate clients.",
            "Develop and implement sales strategies to achieve sales targets.",
            "Provide financial solutions that meet clients' needs in compliance with Shariah principles.",
            "Collaborate with product teams to develop tailored Islamic banking solutions for clients.",
            "Conduct regular reviews to ensure client satisfaction and compliance with Shariah principles.",
        ],
        requirements: [
            "Bachelor's degree in Business Administration, Finance, or related field.",
            "Minimum 3 years of experience in relationship management within the banking sector, preferably in Islamic banking.",
            "Strong understanding of Islamic financial products and Shariah principles.",
            "Excellent sales, negotiation, and customer service skills.",
            "Ability to work independently and in a team environment.",
        ],
        postedDate: '2024-02-28',
        type: 'Full-time',
        experienceLevel: 'Mid-level',
    },
];