"use strict";
/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateType = exports.EducationLevel = void 0;
var EducationLevel;
(function (EducationLevel) {
    EducationLevel["PRIMARY_EDUCATION"] = "Primary Education (PSC)";
    EducationLevel["JUNIOR_SECONDARY"] = "Junior Secondary (JSC)";
    EducationLevel["SSC"] = "Secondary School Certificate (SSC)";
    EducationLevel["HSC"] = "Higher Secondary Certificate (HSC)";
    EducationLevel["DIPLOMA"] = "Diploma (Technical/Vocational)";
    EducationLevel["BACHELORS_DEGREE"] = "Bachelor's Degree";
    EducationLevel["MASTERS_DEGREE"] = "Master's Degree";
    EducationLevel["DOCTORATE"] = "Doctorate (PhD)";
    EducationLevel["RELIGIOUS"] = "Religious Education";
    EducationLevel["CERTIFICATE_COURSE"] = "Certificate Course";
    EducationLevel["TECHNICAL"] = "Technical/Vocational";
    EducationLevel["OTHER"] = "Other";
})(EducationLevel || (exports.EducationLevel = EducationLevel = {}));
var CertificateType;
(function (CertificateType) {
    // Primary Education (Level 1)
    CertificateType["PSC"] = "Primary School Certificate (PSC)";
    CertificateType["EBT"] = "Ebtedayee Certificate (EBT)";
    // Junior Secondary (Level 2)
    CertificateType["JSC"] = "Junior School Certificate";
    CertificateType["JDC"] = "Junior Dakhil Certificate";
    CertificateType["JVC"] = "Junior Vocational Certificate";
    // Secondary (Level 3)
    CertificateType["SSC_SCIENCE"] = "SSC (Science)";
    CertificateType["SSC_HUMANITIES"] = "SSC (Humanities)";
    CertificateType["SSC_COMMERCE"] = "SSC (Commerce)";
    CertificateType["SSC_VOCATIONAL"] = "SSC (Vocational)";
    CertificateType["SSC_AGRICULTURE"] = "SSC (Agriculture)";
    CertificateType["SSC_BUSINESS"] = "SSC (Business Studies)";
    CertificateType["DAKHIL"] = "Dakhil";
    CertificateType["O_LEVEL"] = "O Level";
    CertificateType["BOU_SSC"] = "SSC (Bangladesh Open University)";
    // Higher Secondary (Level 4)
    CertificateType["HSC_SCIENCE"] = "HSC (Science)";
    CertificateType["HSC_HUMANITIES"] = "HSC (Humanities)";
    CertificateType["HSC_COMMERCE"] = "HSC (Commerce)";
    CertificateType["HSC_VOCATIONAL"] = "HSC (Vocational)";
    CertificateType["HSC_AGRICULTURE"] = "HSC (Agriculture)";
    CertificateType["HSC_BUSINESS"] = "HSC (Business Studies)";
    CertificateType["HSC_BM"] = "HSC (Business Management)";
    CertificateType["HSC_TRADE"] = "HSC (Trade)";
    CertificateType["ALIM"] = "Alim";
    CertificateType["A_LEVEL"] = "A Level";
    CertificateType["BOU_HSC"] = "HSC (Bangladesh Open University)";
    // Diploma (Level 5)
    CertificateType["DIPLOMA_ENGINEERING"] = "Diploma in Engineering";
    CertificateType["DIPLOMA_NURSING"] = "Diploma in Nursing";
    CertificateType["DIPLOMA_MEDICAL"] = "Diploma in Medical Technology";
    CertificateType["DIPLOMA_MARINE"] = "Diploma in Marine Technology";
    CertificateType["DIPLOMA_AGRICULTURE"] = "Diploma in Agriculture";
    CertificateType["DIPLOMA_TEXTILE"] = "Diploma in Textile Engineering";
    CertificateType["DIPLOMA_COMPUTER"] = "Diploma in Computer Science";
    CertificateType["DIPLOMA_ELECTRICAL"] = "Diploma in Electrical Engineering";
    CertificateType["DIPLOMA_MECHANICAL"] = "Diploma in Mechanical Engineering";
    CertificateType["DIPLOMA_ARCHITECTURE"] = "Diploma in Architecture";
    CertificateType["DIPLOMA_SURVEYING"] = "Diploma in Surveying";
    CertificateType["DIPLOMA_FISHERIES"] = "Diploma in Fisheries";
    CertificateType["DIPLOMA_FORESTRY"] = "Diploma in Forestry";
    CertificateType["DIPLOMA_LIVESTOCK"] = "Diploma in Livestock";
    CertificateType["DIPLOMA_TOURISM"] = "Diploma in Tourism and Hospitality Management";
    CertificateType["DIPLOMA_COMMERCE"] = "Diploma in Commerce";
    CertificateType["DIPLOMA_MIDWIFERY"] = "Diploma in Midwifery";
    CertificateType["DIPLOMA_DENTAL"] = "Diploma in Dental Technology";
    CertificateType["DIPLOMA_LAB"] = "Diploma in Laboratory Medicine";
    // Bachelor's Degree (Level 6)
    CertificateType["BSC"] = "Bachelor of Science (BSc)";
    CertificateType["BA"] = "Bachelor of Arts (BA)";
    CertificateType["BCOM"] = "Bachelor of Commerce (BCom)";
    CertificateType["BBA"] = "Bachelor of Business Administration (BBA)";
    CertificateType["MBBS"] = "Bachelor of Medicine and Surgery (MBBS)";
    CertificateType["BDS"] = "Bachelor of Dental Surgery (BDS)";
    CertificateType["BSC_ENGINEERING"] = "Bachelor of Science in Engineering (BSc Engg.)";
    CertificateType["CSE"] = "Bachelor of Computer Science & Engineering (CSE)";
    CertificateType["EEE"] = "Bachelor of Electrical & Electronic Engineering (EEE)";
    CertificateType["CIVIL"] = "Bachelor of Civil Engineering";
    CertificateType["MECHANICAL"] = "Bachelor of Mechanical Engineering";
    CertificateType["ARCHITECTURE"] = "Bachelor of Architecture";
    CertificateType["PHARMACY"] = "Bachelor of Pharmacy";
    CertificateType["BSC_AGRICULTURE"] = "Bachelor of Science in Agriculture (BSc Ag.)";
    CertificateType["LLB"] = "Bachelor of Laws (LLB)";
    CertificateType["BFA"] = "Bachelor of Fine Arts (BFA)";
    CertificateType["BSS"] = "Bachelor of Social Science (BSS)";
    CertificateType["BSC_TEXTILE"] = "Bachelor of Science in Textile Engineering";
    CertificateType["BSC_IT"] = "Bachelor of Science in Information Technology";
    CertificateType["BSC_NURSING"] = "Bachelor of Science in Nursing";
    CertificateType["BSC_FISHERIES"] = "Bachelor of Science in Fisheries";
    CertificateType["BSC_FORESTRY"] = "Bachelor of Science in Forestry";
    CertificateType["BSC_HOME_ECONOMICS"] = "Bachelor of Science in Home Economics";
    CertificateType["BSC_STATISTICS"] = "Bachelor of Science in Statistics";
    CertificateType["BSC_MATHEMATICS"] = "Bachelor of Science in Mathematics";
    CertificateType["BSC_PHYSICS"] = "Bachelor of Science in Physics";
    CertificateType["BSC_CHEMISTRY"] = "Bachelor of Science in Chemistry";
    CertificateType["BSC_BOTANY"] = "Bachelor of Science in Botany";
    CertificateType["BSC_ZOOLOGY"] = "Bachelor of Science in Zoology";
    CertificateType["BAMS"] = "Bachelor of Ayurvedic Medicine and Surgery";
    CertificateType["BUMS"] = "Bachelor of Unani Medicine and Surgery";
    CertificateType["BHMS"] = "Bachelor of Homeopathic Medicine and Surgery";
    CertificateType["BOU_BBA"] = "BBA (Bangladesh Open University)";
    CertificateType["FAZIL"] = "Fazil";
    // Master's Degree (Level 7)
    CertificateType["MSC"] = "Master of Science (MSc)";
    CertificateType["MA"] = "Master of Arts (MA)";
    CertificateType["MCOM"] = "Master of Commerce (MCom)";
    CertificateType["MBA"] = "Master of Business Administration (MBA)";
    CertificateType["MCA"] = "Master of Computer Applications (MCA)";
    CertificateType["MED"] = "Master of Education (MEd)";
    CertificateType["LLM"] = "Master of Laws (LLM)";
    CertificateType["MSS"] = "Master of Social Science (MSS)";
    CertificateType["MSC_ENGINEERING"] = "Master of Science in Engineering";
    CertificateType["MSC_TEXTILE"] = "Master of Science in Textile Engineering";
    CertificateType["MSC_IT"] = "Master of Science in Information Technology";
    CertificateType["MSC_NURSING"] = "Master of Science in Nursing";
    CertificateType["MSC_AGRICULTURE"] = "Master of Science in Agriculture";
    CertificateType["MSC_FISHERIES"] = "Master of Science in Fisheries";
    CertificateType["MSC_FORESTRY"] = "Master of Science in Forestry";
    CertificateType["MSC_HOME_ECONOMICS"] = "Master of Science in Home Economics";
    CertificateType["MPHARM"] = "Master of Pharmacy";
    CertificateType["MPH"] = "Master of Public Health";
    CertificateType["BOU_MBA"] = "MBA (Bangladesh Open University)";
    CertificateType["KAMIL"] = "Kamil";
    // Doctorate (Level 8)
    CertificateType["PHD_SCIENCE"] = "PhD in Science";
    CertificateType["PHD_ARTS"] = "PhD in Arts";
    CertificateType["PHD_ENGINEERING"] = "PhD in Engineering";
    CertificateType["PHD_MEDICAL"] = "PhD in Medical Science";
    CertificateType["PHD_BUSINESS"] = "PhD in Business";
    CertificateType["PHD_LAW"] = "PhD in Law";
    CertificateType["PHD_EDUCATION"] = "PhD in Education";
    CertificateType["PHD_SOCIAL_SCIENCE"] = "PhD in Social Science";
    // Professional Certifications
    CertificateType["CA"] = "Chartered Accountant (CA)";
    CertificateType["CMA"] = "Cost and Management Accountant (CMA)";
    CertificateType["ACCA"] = "Association of Chartered Certified Accountants (ACCA)";
    CertificateType["FCPS"] = "Fellow of the College of Physicians and Surgeons";
    CertificateType["MCPS"] = "Member of the College of Physicians and Surgeons";
    CertificateType["FRCS"] = "Fellow of the Royal College of Surgeons";
    CertificateType["MRCP"] = "Member of the Royal College of Physicians";
    CertificateType["PMP"] = "Project Management Professional";
    CertificateType["CCNA"] = "Cisco Certified Network Associate";
    CertificateType["CCNP"] = "Cisco Certified Network Professional";
    CertificateType["OCP"] = "Oracle Certified Professional";
    // Religious Education
    CertificateType["HAFEZ"] = "Hafez (Memorizer of the Quran)";
    CertificateType["QARI"] = "Qari (Reciter of the Quran with Tajweed)";
    CertificateType["TAFSIR"] = "Tafsir Certificate";
    CertificateType["HADITH"] = "Hadith Certificate";
    CertificateType["MOKTABI"] = "Moktobi Certificate";
    CertificateType["MUTAWASSITAH"] = "Mutawassitah";
    CertificateType["SANAWIA_AMMA"] = "Sanawia Amma";
    CertificateType["SANAWIA_KHASSA"] = "Sanawia Khassa";
    CertificateType["TAKMIL"] = "Takmil";
    // Technical/Vocational
    CertificateType["NTVQF_1"] = "NTVQF Level 1";
    CertificateType["NTVQF_2"] = "NTVQF Level 2";
    CertificateType["NTVQF_3"] = "NTVQF Level 3";
    CertificateType["NTVQF_4"] = "NTVQF Level 4";
    CertificateType["CERTIFICATE_COMPUTER"] = "Certificate in Computer Office Application";
    CertificateType["CERTIFICATE_DRAFTING"] = "Certificate in Civil Drafting";
    CertificateType["CERTIFICATE_REFRIGERATION"] = "Certificate in Refrigeration & Air Conditioning";
    // Others
    CertificateType["PROFESSIONAL_COURSE"] = "Professional Course Certificate";
    CertificateType["VOCATIONAL_TRAINING"] = "Vocational Training Certificate";
    CertificateType["OTHER"] = "Other Certificate";
})(CertificateType || (exports.CertificateType = CertificateType = {}));
