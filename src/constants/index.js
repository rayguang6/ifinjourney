
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



// Community
// // Sample data for posts
// export const posts = [
//     {
//       id: 1,
//       title: "Introduction to Islamic Finance",
//       content: "Islamic finance refers to the means by which corporations in the Muslim world, including banks and other lending institutions, raise capital in accordance with Sharia, or Islamic law. It also refers to the types of investments that are permissible under this form of law. Islamic finance is different from conventional finance in several key ways. One major difference is that Sharia prohibits the charging or paying of interest, which means that earning money from money is not allowed. Instead, Islamic law recommends making money from economic activities.",
//       author: "John Doe",
//       groupId: 1,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XN0T2vxyc7aMTSUKu-uy7wCDLQnjreywpv064kaY4w&s",
//       likes: 20,
//       shares: 10,
//       comments: [
//         { id: 1, content: "Great explanation!", author: "Jane Smith" },
//         { id: 2, content: "Very informative!", author: "Alex Johnson" }
//       ],
//       timestamp: "2024-03-24T08:00:00"
//     },
//     {
//       id: 2,
//       title: "Understanding Sharia-Compliant Investments",
//       content: "Sharia-compliant investments are financial products that are structured to comply with Sharia law. This means they follow certain principles such as avoiding interest-based transactions, investing in permissible industries, and avoiding speculation and uncertainty. Common types of Sharia-compliant investments include sukuk (Islamic bonds), Islamic mutual funds, and Sharia-compliant equities.",
//       author: "Alice Williams",
//       groupId: 2,
//       image: "https://cdn.educba.com/academy/wp-content/uploads/2020/06/Investment-banking.jpg",
//       likes: 15,
//       shares: 8,
//       comments: [
//         { id: 1, content: "Very helpful!", author: "Bob Brown" },
//         { id: 2, content: "Thanks for sharing!", author: "Emily Davis" }
//       ],
//       timestamp: "2024-03-23T10:00:00"
//     },
//     {
//       id: 3,
//       title: "Benefits of Islamic Banking",
//       content: "Islamic banking operates according to the principles of Islamic law, also known as Shariah law, which prohibits the payment or receipt of interest. Instead of interest, Islamic banks use profit-sharing arrangements or charge fees for their services. This model has several benefits, including promoting financial inclusion, encouraging ethical investment, and reducing systemic risk.",
//       author: "Ahmed Ali",
//       groupId: 3,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLjQUAcBJMrRcnHXE7ADPnppVEpxffFOEeiKMiLzvMM_pPBvt6OqNOn2zJO8VwAOaVNM&usqp=CAU",
//       likes: 12,
//       shares: 5,
//       comments: [
//         { id: 1, content: "I agree!", author: "Fatima Khan" },
//         { id: 2, content: "Interesting read!", author: "Mohammed Rahman" }
//       ],
//       timestamp: "2024-03-22T14:00:00"
//     },
//     {
//       id: 4,
//       title: "Islamic Finance and Sustainable Development Goals",
//       content: "Islamic finance can play a significant role in achieving the United Nations' Sustainable Development Goals (SDGs). By adhering to principles such as ethical investment, social responsibility, and economic justice, Islamic finance can contribute to addressing global challenges such as poverty alleviation, gender equality, and environmental sustainability.",
//       author: "Sara Ahmed",
//       image: "https://wp-asset.groww.in/wp-content/uploads/2021/10/12120522/All-You-Need-To-Know-About-Bad-Bank-in-India_Sep29.png",
//       groupId: 1,
//       likes: 18,
//       shares: 7,
//       comments: [
//         { id: 1, content: "Important topic!", author: "Ali Hassan" },
//         { id: 2, content: "Well written!", author: "Aisha Malik" }
//       ],
//       timestamp: "2024-03-21T12:00:00"
//     },
//     {
//       id: 5,
//       title: "Islamic Microfinance: Empowering Communities",
//       content: "Islamic microfinance refers to financial services that comply with Sharia principles and are aimed at supporting entrepreneurship and poverty alleviation among underserved populations. By providing access to interest-free loans, savings, and insurance, Islamic microfinance empowers individuals and communities to improve their economic well-being in a sustainable manner.",
//       author: "Hassan Ali",
//       image: "https://iimskills.com/wp-content/uploads/2023/11/Role-Of-Investment-Banking-A-Detailed-Guide-With-Examples.png",
//       groupId: 3,
//       likes: 25,
//       shares: 12,
//       comments: [
//         { id: 1, content: "Inspiring!", author: "Nadia Farooq" },
//         { id: 2, content: "Great initiative!", author: "Usman Khan" }
//       ],
//       timestamp: "2024-03-20T09:00:00"
//     },
//     {
//       id: 6,
//       title: "Challenges and Opportunities in Islamic Finance",
//       content: "While Islamic finance has experienced rapid growth in recent years, it also faces several challenges, including standardization, regulatory compliance, and product innovation. However, these challenges present opportunities for innovation and collaboration within the industry. By addressing these challenges, Islamic finance can continue to grow and contribute to global financial stability.",
//       author: "Fatima Hassan",
//       image: "https://media.licdn.com/dms/image/D4D12AQG5R6LXFUr1oQ/article-cover_image-shrink_720_1280/0/1699101124975?e=2147483647&v=beta&t=3oqN6JVUmmI32JNHvuf_NNRb7zQ9Or-qv87Ihkuwoas",
//       groupId: 2,
//       likes: 22,
//       shares: 9,
//       comments: [
//         { id: 1, content: "Insightful!", author: "Khalid Mahmood" },
//         { id: 2, content: "Important discussion!", author: "Sadia Ali" }
//       ],
//       timestamp: "2024-03-19T15:00:00"
//     },
//     {
//       id: 7,
//       title: "Islamic Wealth Management Strategies",
//       content: "Islamic wealth management focuses on preserving and growing wealth in accordance with Sharia principles. Strategies include ethical investing, risk diversification, and charitable giving (zakat). By adopting these strategies, individuals and institutions can manage their wealth responsibly while fulfilling their religious obligations.",
//       author: "Ali Khan",
//       image: "https://cdn.educba.com/academy/wp-content/uploads/2014/07/Investment-Banking-Career.jpg",
//       groupId: 1,
//       likes: 30,
//       shares: 15,
//       comments: [
//         { id: 1, content: "Informative!", author: "Zara Khan" },
//         { id: 2, content: "Thank you!", author: "Ahmed Patel" }
//       ],
//       timestamp: "2024-03-18T11:00:00"
//     },
//     {
//       id: 8,
//       title: "Islamic Real Estate Investment: Principles and Practices",
//       content: "Islamic real estate investment follows Sharia principles such as avoiding interest-based transactions (riba) and ensuring ethical conduct in property transactions. Common Islamic real estate investment vehicles include property funds, real estate investment trusts (REITs), and joint ventures. By adhering to Sharia principles, investors can earn returns while remaining compliant with Islamic law.",
//       author: "Zainab Ahmed",
//       image: "https://cdn.educba.com/academy/wp-content/uploads/2019/11/Commercial-Banks-vs-Investment-Banks.jpg",
//       groupId: 2,
//       likes: 28,
//       shares: 11,
//       comments: [
//         { id: 1, content: "Well explained!", author: "Khalid Mahmood" },
//         { id: 2, content: "Useful information!", author: "Sadia Ali" }
//       ],
//       timestamp: "2024-03-17T13:00:00"
//     },
// ]

// Sample data for groups
export const groups = [
{ id: 1, name: "Islamic Finance 101", description: "Discuss and learn about the basics of Islamic finance." },
{ id: 2, name: "Sharia-Compliant Investments", description: "Explore investment opportunities in Sharia-compliant financial products." },
{ id: 3, name: "Islamic Banking", description: "Discuss the principles and benefits of Islamic banking." },
// Add more groups as needed
];
  


export const talents = [
  {
    id: 1,
    name: 'Ahmad Zaki',
    expertise: 'Shariah Compliance',
    experience: '10 years',
    bio: 'Ahmad Zaki is a renowned Shariah compliance expert with over a decade of experience in crafting and supervising Shariah-compliant financial products. He has played a pivotal role in pioneering innovative Islamic financial solutions that align with modern financial needs while strictly adhering to Islamic principles.',
    image: 'https://i.pravatar.cc/300?img=10',
    contact: 'ahmad@example.com',
  },
  {
    id: 2,
    name: 'Fatima Alifia',
    expertise: 'Islamic Banking',
    experience: '8 years',
    bio: 'Fatima Alifia brings a wealth of knowledge in Islamic banking operations and financial advising. Her expertise lies in tailoring banking services to the unique needs of Muslim clients, ensuring both competitive financial performance and strict compliance with Islamic law.',
    image: 'https://i.pravatar.cc/300?img=2',
    contact: 'fatima@example.com',
  },
  {
    id: 3,
    name: 'Yusuf Harun',
    expertise: 'Islamic Capital Markets',
    experience: '12 years',
    bio: 'Yusuf Harun is an authoritative voice in Islamic capital markets, specializing in Sukuk and Islamic equity markets. His extensive research and publications have contributed to the development of Islamic finance globally, making significant impacts on both academic and practical levels.',
    image: 'https://i.pravatar.cc/300?img=3',
    contact: 'yusuf@example.com',
  },
  {
    id: 4,
    name: 'Laila Majid',
    expertise: 'Risk Management',
    experience: '5 years',
    bio: 'Laila is skilled in identifying and mitigating financial risks, ensuring investments comply with Shariah principles.',
    image: 'https://i.pravatar.cc/300?img=4',
    contact: 'laila@example.com',
  },
  {
    id: 5,
    name: 'Khalid Saifullah',
    expertise: 'Fintech Innovation',
    experience: '7 years',
    bio: 'Khalid is at the forefront of integrating technology with Islamic finance to create innovative financial solutions.',
    image: 'https://i.pravatar.cc/300?img=5',
    contact: 'khalid@example.com',
  },
  {
    id: 6,
    name: 'Sara Al-Hassan',
    expertise: 'Sukuk Market Analysis',
    experience: '9 years',
    bio: 'Sara provides deep insights into Sukuk markets, helping investors make informed Shariah-compliant investments.',
    image: 'https://i.pravatar.cc/300?img=6',
    contact: 'sara@example.com',
  },
];



// SampleUserData.js
export const userProfile = {
    name: "Lei Zhi Guang",
    bio: "An aspiring professional in Islamic Finance, passionate about merging finance with ethical principles.",
    image: "https://via.placeholder.com/150",
    mbti: {
      type: "INTJ",
      image: "https://via.placeholder.com/150/INTJ.png",
      traits: {
        IE: 75, // Introversion (I) - Extroversion (E)
        NS: 60, // Intuition (N) - Sensing (S)
        TF: 40, // Thinking (T) - Feeling (F)
        JP: 85  // Judging (J) - Perceiving (P)
      }
    },
    rayDalioPersonality: {
      type: "Shaper",
      image: "https://via.placeholder.com/150/Shaper.png",
      strengths: ["Visionary", "Determined", "Adaptable"]
    },
    careerPathSuggestion: {
      description: "Based on your personality insights, a role in Strategy and Product Development within Islamic Finance could be highly rewarding. Here are key milestones to guide you:",
      milestones: [
        { id: 1, title: "Learn the Fundamentals of Islamic Finance", duration: "6 months", resources: ["Online Course", "Workshop"] },
        { id: 2, title: "Specialize in Financial Product Development", duration: "1 year", resources: ["Certification", "Internship"] },
        { id: 3, title: "Build Strategic Thinking and Leadership Skills", duration: "Continuous", resources: ["Books", "Mentorship"] }
      ]
    }
  };
  


  export const posts = [
    {
      id: 5,
      title: "Landing My Dream Job in Islamic Finance",
      content: "After years of hard work and continuous learning, I finally landed my dream job at a leading Islamic bank. The journey wasn't easy, but persistence and constant skill upgrading played a crucial role. Networking and mentoring also made a significant difference. Here's how I navigated my career path...",
      author: "Hafiz Jamal",
      authorAvatar: "https://i.pravatar.cc/150?img=51",
      groupId: 1,
      image: "https://koala.sh/api/image/v2-7pjeq-zcli7.jpg?width=1344&height=768&dream",
      likes: 25,
      shares: 12,
      comments: [
        { id: 1, content: "Congratulations! Your story is truly inspiring.", author: "Aisyah Zulkifli", avatar: "https://i.pravatar.cc/150?img=48" },
        { id: 2, content: "Would love to hear more about how you approached networking.", author: "Faiz Rosli", avatar: "https://i.pravatar.cc/150?img=52" }
      ],
      timestamp: "2024-03-20T09:00:00"
    },
    {
      id: 7,
      title: "Seeking Advice: Transitioning to a Career in Islamic Finance",
      content: "I'm currently working in conventional banking but am very interested in making a switch to Islamic finance. Has anyone here made a similar transition? What challenges did you face, and how did you overcome them?",
      author: "Irfan Khairi",
      authorAvatar: "https://i.pravatar.cc/150?img=65",
      groupId: 3,
      image: "",
      likes: 30,
      shares: 15,
      comments: [
        { id: 1, content: "I made the switch two years ago. Happy to share my experience over a chat.", author: "Siti Nurhaliza", avatar: "https://i.pravatar.cc/150?img=67" },
        { id: 2, content: "Start with certifications relevant to Islamic finance. It helped me a lot.", author: "Ahmad Fauzi", avatar: "https://i.pravatar.cc/150?img=68" }
      ],
      timestamp: "2024-03-18T11:00:00"
    },   
    {
      id: 6,
      title: "What I Would Do Differently If Starting My Finance Career Again",
      content: "Reflecting on my 15 years in the finance industry, there are several things I would do differently if I were starting again. Prioritizing soft skills development and international exposure earlier on are among the top. Let's dive deeper into these reflections...",
      author: "Mariam Teh",
      authorAvatar: "https://i.pravatar.cc/150?img=56",
      groupId: 2,
      image: "https://saudigazette.com.sa/uploads/images/2017/12/13/630623.jpg",
      likes: 22,
      shares: 9,
      comments: [
        { id: 1, content: "This is gold! Thanks for sharing your insights.", author: "Syafiq Azman", avatar: "https://i.pravatar.cc/150?img=59" },
        { id: 2, content: "Great advice. Any tips for gaining international experience?", author: "Nor Izzati", avatar: "https://i.pravatar.cc/150?img=60" }
      ],
      timestamp: "2024-03-19T15:00:00"
    },
     
    {
      id: 1,
      title: "Introduction to Islamic Finance",
      content: "Islamic finance refers to the means by which corporations in the Muslim world...",
      author: "Aminah Rahman",
      authorAvatar: "https://i.pravatar.cc/150?img=68",
      groupId: 1,
      image: "https://www.investopedia.com/thmb/AH1T7sCOd2NFjkcYLJmotD2-cdE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/islamicbanking.asp-FINAL-a44177c529d24b97a0a4e857d65253cf.png",
      likes: 20,
      shares: 10,
      comments: [
        { id: 1, content: "Great explanation!", author: "Farid Zainuddin", avatar: "https://i.pravatar.cc/150?img=5" },
        { id: 2, content: "Very informative!", author: "Nurul Afiqah", avatar: "https://i.pravatar.cc/150?img=47" }
      ],
      timestamp: "2024-03-24T08:00:00"
    },
    {
      id: 2,
      title: "Understanding Sharia-Compliant Investments",
      content: "Sharia-compliant investments are financial products...",
      author: "Ismail Azman",
      authorAvatar: "https://i.pravatar.cc/150?img=60",
      groupId: 2,
      image: "",
      likes: 15,
      shares: 8,
      comments: [
        { id: 1, content: "Very helpful!", author: "Siti Hajar", avatar: "https://i.pravatar.cc/150?img=22" },
        { id: 2, content: "Thanks for sharing!", author: "Ahmad Faizal", avatar: "https://i.pravatar.cc/150?img=34" }
      ],
      timestamp: "2024-03-23T10:00:00"
    },
    // Additional dummy posts
    {
      id: 3,
      title: "Benefits of Islamic Banking",
      content: "Islamic banking operates according to the principles of Islamic law...",
      author: "Mohd Yusof",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
      groupId: 3,
      image: "https://www.slideteam.net/media/catalog/product/cache/1280x720/a/d/advantages_of_islamic_banking_in_shariah_law_comprehensive_overview_islamic_financial_sector_fin_ss_slide01.jpg",
      likes: 12,
      shares: 5,
      comments: [
        { id: 1, content: "I agree!", author: "Zarina Abdullah", avatar: "https://i.pravatar.cc/150?img=44" },
        { id: 2, content: "Interesting read!", author: "Hakim Razali", avatar: "https://i.pravatar.cc/150?img=32" }
      ],
      timestamp: "2024-03-22T14:00:00"
    },
    {
      id: 4,
      title: "Islamic Finance and Sustainable Development Goals",
      content: "Islamic finance can play a significant role in achieving the United Nations'...",
      author: "Nor Azizah",
      authorAvatar: "https://i.pravatar.cc/150?img=9",
      groupId: 1,
      image: "https://islamic-relief.org/wp-content/uploads/2015/09/SDG_FINAL-2015-02.jpg",
      likes: 18,
      shares: 7,
      comments: [
        { id: 1, content: "Important topic!", author: "Rafiq Jalil", avatar: "https://i.pravatar.cc/150?img=58" },
        { id: 2, content: "Well written!", author: "Leila Hussain", avatar: "https://i.pravatar.cc/150?img=45" }
      ],
      timestamp: "2024-03-21T12:00:00"
    },
    // Fill in more posts as desired
  ];
  