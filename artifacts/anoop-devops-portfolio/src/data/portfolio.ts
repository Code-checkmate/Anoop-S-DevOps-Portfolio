export type SkillStatus = 'Professional hands-on experience' | 'Hands-on project experience' | 'Training / curriculum' | 'Currently developing' | 'Planned learning' | 'Not yet verified';
export type Skill = { name: string; category: string; status: SkillStatus; note?: string };
export type Project = { slug: string; title: string; description: string; technologies: string[]; verified: boolean; summary?: string; problem?: string; objectives?: string[]; implementation?: string; workflow?: string; challenges?: string; results?: string; image?: string; diagram?: string; repository?: string; readme?: string };

export const profile = {
  name: 'Anoop S.',
  bio: "I'm Anoop S., a DevOps engineer focused on Linux systems, cloud operations, application deployments, and automation. My experience has introduced me to the practical side of keeping applications running: working with Linux environments, supporting deployments, troubleshooting operational issues, and collaborating on infrastructure tasks. I enjoy understanding what happens behind an application—from the underlying operating system and deployment process to the infrastructure that supports it. I'm continuing to deepen my expertise in Linux, cloud technologies, containerisation, and CI/CD, with the goal of building reliable, maintainable, and increasingly automated systems.",
  hireIntro: "DevOps professional with hands-on experience in Linux administration, application deployments, production support, log analysis, service management, and release activities. Experienced in supporting healthcare applications across QA, UAT, and production environments, while continuing to develop cloud, containerisation, and CI/CD skills through practical projects and professional training.",
  contact: { email: 'anoops5218@gmail.com', phone: '+91 9535244856', location: 'Bengaluru, India', linkedin: 'https://linkedin.com/in/anoops1811', github: 'https://github.com/Code-checkmate' },
};

export const navItems = [
  ['Home', '/'], ['About', '/about'], ['Skills', '/skills'], ['Projects', '/projects'],
  ['Experience', '/experience'], ['Trainings', '/trainings'], ['Certifications', '/certifications'], ['Contact', '/contact'],
] as const;

const skillStatuses: Record<string, SkillStatus> = {
  'Linux / Ubuntu': 'Professional hands-on experience',
  AlmaLinux: 'Not yet verified',
  'Windows Server': 'Professional hands-on experience',
  SSH: 'Professional hands-on experience',
  PuTTY: 'Professional hands-on experience',
  WinSCP: 'Professional hands-on experience',
  'systemd / systemctl': 'Professional hands-on experience',
  'Apache HTTP Server': 'Professional hands-on experience',
  'Log analysis': 'Professional hands-on experience',
  'Disk-space management': 'Professional hands-on experience',
  'Service management': 'Professional hands-on experience',
  'AWS EC2': 'Hands-on project experience',
  'AWS S3': 'Training / curriculum',
  'AWS IAM': 'Training / curriculum',
  'AWS VPC': 'Training / curriculum',
  'Amazon CloudWatch': 'Training / curriculum',
  'AWS EBS': 'Training / curriculum',
  'AWS EFS': 'Training / curriculum',
  'Amazon RDS': 'Training / curriculum',
  'AWS CloudFormation': 'Training / curriculum',
  'Amazon SQS': 'Training / curriculum',
  'AWS Lambda': 'Training / curriculum',
  'Amazon SNS': 'Training / curriculum',
  'Amazon SES': 'Training / curriculum',
  'AWS Elastic Beanstalk': 'Training / curriculum',
  'Amazon API Gateway': 'Training / curriculum',
  'Amazon CloudFront': 'Training / curriculum',
  Docker: 'Hands-on project experience',
  Kubernetes: 'Training / curriculum',
  Helm: 'Not yet verified',
  Git: 'Not yet verified',
  GitHub: 'Training / curriculum',
  Jenkins: 'Training / curriculum',
  'GitLab CI': 'Not yet verified',
  'GitHub Actions': 'Hands-on project experience',
  'Argo CD': 'Not yet verified',
  Terraform: 'Training / curriculum',
  Ansible: 'Training / curriculum',
  Bash: 'Not yet verified',
  Python: 'Training / curriculum',
  Prometheus: 'Not yet verified',
  Grafana: 'Not yet verified',
  'ELK/EFK concepts': 'Training / curriculum',
  DNS: 'Not yet verified',
  'HTTP/HTTPS': 'Not yet verified',
  Ports: 'Not yet verified',
  'Network troubleshooting': 'Not yet verified',
  'Application deployment': 'Professional hands-on experience',
  'Production support': 'Professional hands-on experience',
  'Release management': 'Professional hands-on experience',
  'Rollback validation': 'Professional hands-on experience',
  'Incident support': 'Not yet verified',
  JavaScript: 'Professional hands-on experience',
  'React.js': 'Professional hands-on experience',
  Redis: 'Professional hands-on experience',
  RabbitMQ: 'Professional hands-on experience',
  Nginx: 'Hands-on project experience',
};

const makeSkills = (names: string[], category: string): Skill[] =>
  names.map((name) => ({
    name,
    category,
    status: skillStatuses[name] ?? 'Not yet verified',
  }));

export const skills: Skill[] = [
  ...makeSkills(['Linux / Ubuntu','AlmaLinux','Windows Server','SSH','PuTTY','WinSCP','systemd / systemctl','Apache HTTP Server','Log analysis','Disk-space management','Service management','Nginx'], 'Linux & Systems'),
  ...makeSkills(['AWS EC2','AWS S3','AWS IAM','AWS VPC','Amazon CloudWatch','AWS EBS','AWS EFS','Amazon RDS','AWS CloudFormation','Amazon SQS','AWS Lambda','Amazon SNS','Amazon SES','AWS Elastic Beanstalk','Amazon API Gateway','Amazon CloudFront'], 'Cloud'),
  ...makeSkills(['Docker','Kubernetes','Helm'], 'Containers & Orchestration'),
  ...makeSkills(['Git','GitHub','Jenkins','GitLab CI','GitHub Actions','Argo CD'], 'CI/CD'),
  ...makeSkills(['Terraform','Ansible','Bash','Python'], 'Infrastructure as Code & Automation'),
  ...makeSkills(['Prometheus','Grafana','ELK/EFK concepts'], 'Monitoring'),
  ...makeSkills(['DNS','HTTP/HTTPS','Ports','Network troubleshooting','Application deployment','Production support','Release management','Rollback validation','Incident support'], 'Networking & Operations'),
  ...makeSkills(['JavaScript','React.js','Redis','RabbitMQ'], 'Programming & Supporting Tools'),
];

export const projects: Project[] = [
  { slug: 'zero-downtime-deployment', title: 'Zero-Downtime Deployment System', description: 'A deployment project developed around Linux, Docker, Nginx, GitHub Actions, and AWS EC2.', technologies: ['Linux','Docker','Nginx','GitHub Actions','AWS EC2'], verified: true, summary: 'An implementation-focused project exploring a deployment workflow with Linux, containers, a reverse proxy, CI automation, and cloud compute.', problem: 'Details of the specific problem statement are pending confirmation.', objectives: ['Build a deployment workflow using the listed technologies.'], implementation: 'Built around Linux, Docker, Nginx, GitHub Actions, and AWS EC2. Further implementation details are pending verification.', workflow: 'GitHub Actions is part of the project toolset. Exact workflow steps are pending confirmation.', challenges: 'Details to be added after verification.', results: 'The project name describes the intended approach; zero downtime has not been independently verified.', },
  { slug: 'jenkins-cicd-aws', title: 'Jenkins CI/CD Pipeline on AWS', description: 'Project record based on previous resume information. Details pending verification.', technologies: ['Jenkins','AWS'], verified: false },
  { slug: 'end-to-end-application-deployment', title: 'End-to-End Application Deployment using AWS, Jenkins, Docker & Kubernetes', description: 'Project record based on previous resume information. Details pending verification.', technologies: ['AWS','Jenkins','Docker','Kubernetes'], verified: false },
  { slug: 'static-website-hosting-aws-s3', title: 'Static Website Hosting using AWS S3', description: 'Project record based on previous resume information. Details pending verification.', technologies: ['AWS S3'], verified: false },
];

export const experience = [
  { company: 'ABI Health Technologies / ABI Health', title: 'DevOps Trainee', dates: '17 November 2025 – 1 October 2026', technologies: ['Linux Ubuntu','Windows Server IIS','systemd','Apache','SSH','PuTTY','WinSCP','Redis','RabbitMQ'], items: ['Supported healthcare applications, including LIMS and ClaimBook, across QA, UAT, and production environments.','Supported Linux Ubuntu and Windows Server IIS application deployments.','Assisted with backups, JAR replacement, validation, and post-deployment checks.','Supported scheduled production releases and rollback validation/recovery activities.','Managed and validated services using systemd/systemctl.','Investigated logs and assisted with troubleshooting.','Monitored disk usage and performed disk-space cleanup.','Used SSH, PuTTY, and WinSCP for remote administration and file transfer.','Assisted with Apache HTTP Server operations.','Assisted with Redis and RabbitMQ installation and service validation.','Collaborated with development, QA, and support teams.','Participated in SDLC, release-management, and change-management activities.'] },
  { company: 'Mphasis', title: 'Software Development Intern', dates: 'January 2025 – April 2025', technologies: ['JavaScript','React.js'], items: ['Developed modular components for a visa-travel photographic solution using JavaScript and React.js.','Worked on component integration and reusable code.','Supported testing and collaboration activities related to the application.'] },
];

export const trainings = [
  { institute: 'ScholarLogic Training & Placement Institute', title: 'Basic DevOps and AWS Training Programme', dates: 'June 2025 – November 2025', status: 'Basic training programme', topics: ['Jenkins and GitHub pipeline fundamentals.','Sample deployment automation.','Docker and Kubernetes practice.','Terraform and Ansible practice.','AWS EC2, S3, IAM, and CloudWatch.','Linux fundamentals and monitoring.'] },
  { institute: 'Intellipaat', title: 'Executive Post Graduate Certification in Cloud Computing and DevOps', dates: 'September 2026 – Present', status: 'In progress', topics: ['AWS EC2, S3, IAM, VPC, EBS, EFS, RDS, CloudFormation, SQS, SNS, SES, Lambda, Elastic Beanstalk, API Gateway, Global Accelerator, and CloudFront.','Ansible, Docker, Kubernetes, Jenkins, ELK, and Terraform.','DevOps on AWS, DevSecOps, SLAs, load balancing, and Jira.','Virtualization, migration, distributed computing, system design, and cloud security.','Linux and Python preparation.'] },
];

export type Certificate = { title: string; issuer: string; issueDate?: string; credentialId?: string; verificationUrl?: string; assetPath?: string };
export const certifications: Certificate[] = [];
