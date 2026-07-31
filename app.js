const STORAGE_KEY = 'interviewMissionControlData';
const THEME_KEY = 'interviewMissionControlTheme';
const TAB_KEYS = ['setup', 'role', 'mock', 'star', 'pitch', 'flashcards', 'quickprep', 'checklist', 'debrief', 'export'];

const defaultStarStories = [
  {
    id: 'story-1',
    title: 'Helping a stressed customer/student',
    tags: ['customer service', 'calm', 'support'],
    situation: 'A customer or student arrived stressed and unsure how to solve their issue.',
    task: 'I needed to listen carefully, identify the real need, and offer a calm, simple solution.',
    action: 'I asked questions, explained the next steps without jargon, and stayed patient while they decided.',
    result: 'They left feeling supported and confident about the next step.',
    bestFor: 'Customer service, calming stressed people, active listening',
  },
  {
    id: 'story-2',
    title: 'Explaining technology simply',
    tags: ['technology', 'communication', 'teaching'],
    situation: 'Someone had a technical issue and felt overwhelmed by the device or process.',
    task: 'I had to explain the solution in plain language so they could follow it easily.',
    action: 'I avoided jargon, used analogies, and checked understanding step by step.',
    result: 'They understood the fix and felt more confident using the technology.',
    bestFor: 'Technology, customer service, teaching',
  },
  {
    id: 'story-3',
    title: 'Learning a new system quickly',
    tags: ['learning', 'adaptability', 'ICT'],
    situation: 'A new workplace system was introduced and I needed to become useful fast.',
    task: 'I had to learn the tool, practise it, and help others when they struggled.',
    action: 'I read guides, asked smart questions, took notes and practiced real tasks quickly.',
    result: 'I became able to use the system confidently and support colleagues with it.',
    bestFor: 'Learning quickly, systems, ICT support',
  },
  {
    id: 'story-4',
    title: 'Handling a busy service period',
    tags: ['pressure', 'organisation', 'service'],
    situation: 'The service desk/front line became very busy with several people needing help.',
    task: 'I had to manage the queue and keep customers moving without losing quality.',
    action: 'I acknowledged each person, prioritised urgent needs, and dealt with tasks calmly one at a time.',
    result: 'People stayed informed and the busiest period passed with no major issues.',
    bestFor: 'Pressure, service, multitasking',
  },
  {
    id: 'story-5',
    title: 'Following a procedure carefully',
    tags: ['procedure', 'accuracy', 'safety'],
    situation: 'A task required strict attention to procedure and no room for shortcuts.',
    task: 'I needed to complete the steps exactly and double-check the result.',
    action: 'I followed the checklist, verified each stage and asked for clarification when needed.',
    result: 'The task was completed correctly and safely, with no errors.',
    bestFor: 'Compliance, procedure, accuracy',
  },
  {
    id: 'story-6',
    title: 'Working independently',
    tags: ['independent', 'planning', 'reliable'],
    situation: 'I was given a piece of work to complete with minimal supervision.',
    task: 'I had to plan my time, stay focused and keep the task moving.',
    action: 'I set milestones, kept the team updated and checked the work as I went.',
    result: 'I completed the work on time and met the expected standard.',
    bestFor: 'Independent work, reliability, self-management',
  },
  {
    id: 'story-7',
    title: 'Communicating respectfully with someone frustrated',
    tags: ['respect', 'empathy', 'conflict'],
    situation: 'Someone became frustrated and needed support without escalated tension.',
    task: 'I had to keep the conversation calm and focused on a solution.',
    action: 'I listened, showed empathy, reflected their concern and gave clear next steps.',
    result: 'The situation de-escalated and they felt heard.',
    bestFor: 'Conflict resolution, respect, customer service',
  },
  {
    id: 'story-8',
    title: 'Working in a team',
    tags: ['teamwork', 'communication', 'handover'],
    situation: 'Team members needed to share the workload and coordinate effectively.',
    task: 'I had to communicate clearly and help keep everyone aligned.',
    action: 'I shared updates, asked for support when needed and offered help to others.',
    result: 'The team completed the work together and the handover was smooth.',
    bestFor: 'Teamwork, communication, shared responsibility',
  },
  {
    id: 'story-9',
    title: 'Staying calm under pressure',
    tags: ['pressure', 'confidence', 'focus'],
    situation: 'An urgent task appeared while I was already working to a deadline.',
    task: 'I needed to keep a clear head and manage both responsibilities.',
    action: 'I paused briefly, reorganised my plan and communicated what I could do first.',
    result: 'I kept things moving without making mistakes and finished both tasks safely.',
    bestFor: 'Pressure, calm, prioritisation',
  },
];

const defaultInterviews = [
  {
    id: 'sunglass-hut-dubbo',
    employer: 'Sunglass Hut / EssilorLuxottica',
    jobTitle: 'Casual Retail Associate',
    interviewDateTime: '2026-06-11T10:00',
    interviewer: 'Store manager',
    format: 'In person',
    locationOrLink: 'Dubbo Square kiosk, 177 Macquarie St, Dubbo',
    jobAdText: 'Support customers in a premium retail kiosk, learn sunglasses and smart eyewear brands, provide strong customer service, maintain presentation, follow store procedures, work with a small team, and help customers find the right product without pressure.',
    employerNotes: 'Sunglass Hut is part of EssilorLuxottica. The role focuses on premium brands like Ray-Ban, Oakley, Prada, Versace and CHANEL, with an emphasis on customer experience, product knowledge and smart eyewear. Dubbo customers include locals, travellers, families and shoppers wanting sun protection or fashion eyewear.',
    myBackground: 'Customer service experience and ICT support background. Comfortable explaining technology simply, learning systems quickly, and helping people feel calm and informed.',
    availabilityNotes: 'Available most weekdays and weekends. Can be flexible for peak retail hours and holiday trading.',
    concerns: 'No direct fashion retail experience, learning brand names quickly, staying confident with targets and smart eyewear questions.',
    documentsToBring: 'Photo ID, resume, charged phone, quiet notes sheet.',
    roleType: 'retail',
    practisedQuestions: [],
    reviewedCards: {},
    checklist: [],
    notes: '',
    debrief: {
      howItWent: '',
      questionsAsked: '',
      answersGiven: '',
      whatIForgot: '',
      followUpActions: '',
      thankYouDraft: '',
      outcome: '',
      lessons: '',
    },
    mockNotes: {},
    usedStories: [],
  },
  {
    id: 'abs-census-field-officer',
    employer: 'Australian Bureau of Statistics / 2026 Census',
    jobTitle: 'Field Officer',
    interviewDateTime: '2026-06-09T13:00',
    interviewer: 'Tanya Bennett',
    format: 'Microsoft Teams',
    locationOrLink: 'Microsoft Teams link (prepare camera and mic)',
    jobAdText: 'Field Officers deliver Census forms and letters, assist the public with questions, follow up with households that have not responded, conduct assisted interviews when requested, use a mobile phone or tablet app, securely store Census materials, travel with a registered insured vehicle, work flexible weekdays, evenings and weekends, and report to a Field Manager.',
    employerNotes: 'The ABS Census role is practical community work. It needs safety awareness, respect for diverse households, accurate data capture, strong procedures, and a steady approach in the field.',
    myBackground: 'Customer service and ICT support experience, comfortable with mobile tools, patient with people, able to follow process and keep records accurate.',
    availabilityNotes: 'Available for shifts across weekdays, evenings and weekends, and able to work until 1 October 2026.',
    concerns: 'Keeping materials secure, working independently in unfamiliar homes, discussing safety clearly, and explaining the Census respectfully.',
    documentsToBring: 'Valid photo ID, phone charger, tablet or mobile device, notepad, water bottle.',
    roleType: 'field work',
    practisedQuestions: [],
    reviewedCards: {},
    checklist: [],
    notes: '',
    debrief: {
      howItWent: '',
      questionsAsked: '',
      answersGiven: '',
      whatIForgot: '',
      followUpActions: '',
      thankYouDraft: '',
      outcome: '',
      lessons: '',
    },
    mockNotes: {},
    usedStories: [],
  },
];

const state = {
  interviews: [],
  starStories: [],
  selectedInterviewId: null,
  activeTab: 'setup',
};

const element = {
  dashboardView: document.getElementById('dashboardView'),
  profileView: document.getElementById('profileView'),
  interviewCards: document.getElementById('interviewCards'),
  newInterviewButton: document.getElementById('newInterviewButton'),
  dashboardNewInterview: document.getElementById('dashboardNewInterview'),
  backToDashboard: document.getElementById('backToDashboard'),
  profileTitle: document.getElementById('profileTitle'),
  profileTypeLabel: document.getElementById('profileTypeLabel'),
  profileMeta: document.getElementById('profileMeta'),
  duplicateInterview: document.getElementById('duplicateInterview'),
  deleteInterview: document.getElementById('deleteInterview'),
  progressPercent: document.getElementById('progressPercent'),
  progressFill: document.getElementById('progressFill'),
  profileTabs: document.getElementById('profileTabs'),
  tabContent: document.getElementById('tabContent'),
  importModal: document.getElementById('importModal'),
  importText: document.getElementById('importText'),
  importCancel: document.getElementById('importCancel'),
  importConfirm: document.getElementById('importConfirm'),
  themeToggle: document.getElementById('themeToggle'),
  backupAll: document.getElementById('backupAll'),
};

const roleTypeOptions = [
  'retail',
  'government',
  'customer service',
  'ICT',
  'field work',
  'education',
  'other',
];

function createId(prefix = 'item') {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function saveState() {
  const payload = {
    interviews: state.interviews,
    starStories: state.starStories,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function exportWorkspace() {
  const data = JSON.stringify({ interviews: state.interviews, starStories: state.starStories }, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `interview-mission-control-backup-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      const data = JSON.parse(raw);
      state.interviews = Array.isArray(data.interviews) ? data.interviews : [];
      state.starStories = Array.isArray(data.starStories) ? data.starStories : defaultStarStories.slice();
    } catch (error) {
      state.interviews = [];
      state.starStories = defaultStarStories.slice();
    }
  } else {
    state.interviews = [];
    state.starStories = defaultStarStories.slice();
  }
}

function loadTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  const theme = stored === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  element.themeToggle.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', current);
  element.themeToggle.textContent = current === 'dark' ? 'Light mode' : 'Dark mode';
  localStorage.setItem(THEME_KEY, current);
}

function ensureStarterProfiles() {
  if (!state.interviews.length) {
    state.interviews = defaultInterviews.map((item) => ({ ...item, checklist: buildChecklist(item.roleType), practisedQuestions: [], reviewedCards: {}, mockNotes: {}, usedStories: [], debrief: item.debrief }));
    saveState();
  } else {
    state.interviews = state.interviews.map((item) => ({
      ...item,
      checklist: item.checklist && item.checklist.length ? item.checklist : buildChecklist(item.roleType),
      practisedQuestions: item.practisedQuestions || [],
      reviewedCards: item.reviewedCards || {},
      mockNotes: item.mockNotes || {},
      usedStories: item.usedStories || [],
      debrief: item.debrief || {
        howItWent: '',
        questionsAsked: '',
        answersGiven: '',
        whatIForgot: '',
        followUpActions: '',
        thankYouDraft: '',
        outcome: '',
        lessons: '',
      },
    }));
  }
}

function formatDateTime(value) {
  if (!value) return 'Not set';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString('en-AU', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function timeUntil(value) {
  if (!value) return 'No date set';
  const target = new Date(value);
  const now = new Date();
  const diff = target - now;
  if (Number.isNaN(diff)) return 'Invalid date';
  if (diff < 0) return 'Past interview';
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const parts = [];
  if (days) parts.push(`${days} day${days === 1 ? '' : 's'}`);
  if (hours) parts.push(`${hours} hour${hours === 1 ? '' : 's'}`);
  if (!days && minutes) parts.push(`${minutes} min`);
  return parts.join(' • ');
}

function calculateProgress(interview) {
  const fields = [
    interview.employer,
    interview.jobTitle,
    interview.interviewDateTime,
    interview.format,
    interview.locationOrLink,
    interview.jobAdText,
    interview.myBackground,
  ];
  const filled = fields.filter((value) => value && value.toString().trim().length > 5).length;
  const fieldScore = Math.round((filled / fields.length) * 40);
  const questionsScore = Math.min(interview.practisedQuestions.length * 5, 20);
  const cardsReviewed = Object.values(interview.reviewedCards).filter(Boolean).length;
  const cardScore = Math.min(cardsReviewed * 3, 15);
  const checklistDone = interview.checklist.filter((item) => item.done).length;
  const checklistScore = Math.round((checklistDone / interview.checklist.length) * 25);
  return Math.min(fieldScore + questionsScore + cardScore + checklistScore, 100);
}

function buildChecklist(roleType) {
  const items = [
    { id: createId('check'), label: 'Know interview time', done: false },
    { id: createId('check'), label: 'Know location or Teams link', done: false },
    { id: createId('check'), label: 'Prepare photo ID if required', done: false },
    { id: createId('check'), label: 'Practise your pitch', done: false },
    { id: createId('check'), label: 'Practise two STAR stories', done: false },
    { id: createId('check'), label: 'Prepare availability answer', done: false },
    { id: createId('check'), label: 'Prepare two good questions to ask', done: false },
    { id: createId('check'), label: 'Check clothes and presentation', done: false },
    { id: createId('check'), label: 'Ground breathing before starting', done: false },
  ];
  if (roleType === 'field work' || roleType === 'government') {
    items.push({ id: createId('check'), label: 'Valid photo ID ready', done: false });
    items.push({ id: createId('check'), label: 'Be ready to explain safety awareness', done: false });
    items.push({ id: createId('check'), label: 'Discuss flexible availability clearly', done: false });
    items.push({ id: createId('check'), label: 'Be ready to describe use of mobile apps/tablets', done: false });
  }
  if (roleType === 'retail') {
    items.push({ id: createId('check'), label: 'Be ready to discuss customer service approach', done: false });
    items.push({ id: createId('check'), label: 'Be ready to mention product knowledge and brands', done: false });
  }
  if (roleType === 'ICT') {
    items.push({ id: createId('check'), label: 'Be ready to explain technology confidence', done: false });
    items.push({ id: createId('check'), label: 'Review a quick example of learning a new system', done: false });
  }
  return items;
}

function parseKeywords(text) {
  const phraseMatches = [
    'customer', 'service', 'sales', 'procedure', 'safety', 'mobile', 'tablet', 'technology', 'team', 'flexible', 'follow up', 'process', 'communicate', 'product', 'premium', 'field', 'government', 'retail', 'data', 'admin', 'training', 'lead', 'support', 'diverse', 'community', 'presentation', 'targets', 'phones', 'apps', 'tablet', 'quality', 'report', 'log', 'risk', 'privacy', 'procedure', 'checks', 'support', 'help', 'assist', 'plan', 'independent', 'coachable', 'reliable', 'organised', 'punctual', 'accuracy', 'detail', 'respectful', 'travel', 'workload', 'evenings', 'weekends', 'in person', 'Teams', 'phone', 'interview', 'field officer', 'Census', 'Sunglass Hut', 'Ray-Ban', 'Oakley', 'Prada', 'Versace', 'CHANEL', 'smart eyewear', 'customer experience', 'community', 'records', 'reporting', 'hours', 'availability', 'questions', 'communication', 'records', 'households', 'materials', 'secure', 'deliver', 'assist', 'follow up', 'complete timesheets', 'meeting', 'link', 'contact', 'location'
  ];
  const lower = (text || '').toLowerCase();
  const result = [];
  phraseMatches.forEach((phrase) => {
    if (lower.includes(phrase.toLowerCase()) && !result.includes(phrase)) {
      result.push(phrase);
    }
  });
  return result.slice(0, 12);
}

function generateRoleIntelligence(interview) {
  const text = [interview.jobAdText, interview.employerNotes, interview.roleType, interview.myBackground].join(' ').toLowerCase();
  const core = [];
  const capabilities = [];
  const priorities = [];
  const redFlags = [];
  const angle = [];
  const keywords = parseKeywords(text);

  if (text.includes('census') || interview.roleType === 'field work' || text.includes('field officer')) {
    core.push('Deliver Census forms and materials to households.');
    core.push('Follow up with people who have not yet responded.');
    core.push('Use a mobile or tablet app to capture data and record outcomes.');
    core.push('Work independently in the local area and manage your own schedule.');
    core.push('Communicate respectfully with diverse people in their homes.');
    core.push('Keep Census materials secure and follow safety procedures.');
    capabilities.push('Mobile app and tablet confidence.');
    capabilities.push('Respectful communication and calm presence.');
    capabilities.push('Accuracy with data, forms and follow-up notes.');
    capabilities.push('Good local navigation and awareness of travel.');
    priorities.push('Safety in the field and secure materials.');
    priorities.push('Completing accurate data entry rather than rushing.');
    priorities.push('Flexible availability for evenings, weekends and local shifts.');
    priorities.push('Clear communication with the Field Manager.');
    redFlags.push('Appearing unclear about safety or secure handling of materials.');
    redFlags.push('Overstating experience when you are new to field work.');
    redFlags.push('Sounding pushy instead of respectful with households.');
    angle.push('Customer service + ICT/mobile app confidence + calm communication.');
    angle.push('Focus on following procedures and staying dependable in the community.');
  }

  if (text.includes('sunglass hut') || text.includes('retail') || text.includes('premium') || interview.roleType === 'retail') {
    core.push('Deliver premium customer experience in a retail kiosk setting.');
    core.push('Understand and explain sunglass brands, including smart eyewear.');
    core.push('Listen to customer needs and recommend products without pressure.');
    core.push('Support sales targets through helpful, warm service.');
    core.push('Keep presentation tidy and the kiosk organised.');
    capabilities.push('Brand confidence and product knowledge.');
    capabilities.push('Low-pressure sales and strong customer interaction.');
    capabilities.push('Quick learning of new product lines.');
    priorities.push('Know key brands, UV protection and fit benefits.');
    priorities.push('Show reliable, friendly service and team alignment.');
    priorities.push('Be clear about smart eyewear features if asked.');
    redFlags.push('Avoid sounding too pushy or too technical.');
    redFlags.push('Avoid claiming retail experience you do not have.');
    redFlags.push('Don’t focus only on price rather than customer needs.');
    angle.push('Customer service + tech confidence + smart eyewear interest.');
    angle.push('Present yourself as a quick learner who cares about the customer.');
  }

  if (text.includes('ict') || text.includes('technology') || text.includes('systems') || interview.roleType === 'ICT') {
    core.push('Use technology confidently to support the role.');
    core.push('Troubleshoot simple issues and explain them clearly.');
    capabilities.push('Learning new systems fast.');
    capabilities.push('Clear communication for non-technical people.');
    priorities.push('Show reliability with devices and apps.');
    priorities.push('Highlight your practical ICT background.');
    redFlags.push('Avoid sounding overly technical for a non-technical audience.');
    angle.push('Bring calm support and a practical approach to tech.');
  }

  if (text.includes('customer service') || interview.roleType === 'customer service') {
    core.push('Deliver clear, friendly customer support.');
    core.push('Listen actively and solve the customer’s real issue.');
    capabilities.push('Empathy, patience and strong communication.');
    priorities.push('Keep the customer feeling heard and confident.');
    priorities.push('Use examples of calm and helpful interactions.');
    redFlags.push('Avoid dismissing the customer’s concern.');
    angle.push('Show that you keep people calm and satisfied.');
  }

  if (text.includes('education') || interview.roleType === 'education') {
    core.push('Support learning and explain things clearly.');
    core.push('Be patient and supportive with diverse learners.');
    capabilities.push('Teaching concepts in simple language.');
    priorities.push('Show respect for every person’s pace.');
    redFlags.push('Avoid sounding too rigid or textbook.');
    angle.push('Present yourself as a steady, supportive communicator.');
  }

  if (!core.length) {
    core.push('Identify the main goals from the job ad and employer notes.');
    capabilities.push('Use the role information to highlight what you can deliver.');
    priorities.push('Show reliability, clear communication and readiness to learn.');
    redFlags.push('Avoid appearing unprepared or vague about the role.');
    angle.push('Connect your background to the role expectations in practical terms.');
  }

  if (!angle.length) {
    angle.push('Use your service and systems experience to show a strong practical fit.');
  }

  return {
    coreResponsibilities: [...new Set(core)],
    keyCapabilities: [...new Set(capabilities)],
    hiringPriorities: [...new Set(priorities)],
    keywords,
    successFactors: [...new Set([...(core.slice(0, 3)), 'Focus on accurate, calm and dependable work.'])],
    redFlags: [...new Set(redFlags)],
    bestAngle: [...new Set(angle)],
  };
}

function buildMockQuestions(interview) {
  const universal = [
    {
      id: 'q-tell-yourself',
      question: 'Tell me about yourself.',
      why: 'They want a quick overview of who you are and how you fit the role.',
      shape: 'Brief intro, key background, why this role, what you bring.',
    },
    {
      id: 'q-why-role',
      question: 'Why this role?',
      why: 'They want to know your motivation and whether you understand the job.',
      shape: 'Explain interest, relevant skills, and how you can help the team.',
    },
    {
      id: 'q-why-employer',
      question: 'Why this employer?',
      why: 'They are checking if you are genuinely interested in this organisation.',
      shape: 'Mention values, work style, community or product fit.',
    },
    {
      id: 'q-strengths',
      question: 'What are your strengths?',
      why: 'They want to know what you will bring to the role day to day.',
      shape: 'Choose strengths that match the role and give a short example.',
    },
    {
      id: 'q-weakness',
      question: 'What is a weakness you are working on?',
      why: 'They want to see self-awareness and improvement.',
      shape: 'Be honest, show learning, and explain corrective action.',
    },
    {
      id: 'q-difficult-person',
      question: 'Tell me about a difficult customer or person.',
      why: 'They are testing your people skills and emotional control.',
      shape: 'Describe the situation, your approach and the calm outcome.',
    },
    {
      id: 'q-pressure',
      question: 'Tell me about working under pressure.',
      why: 'They want to hear how you stay organised and steady.',
      shape: 'Set the scene, explain how you prioritised, and what happened.',
    },
    {
      id: 'q-learning-quickly',
      question: 'Tell me about learning something quickly.',
      why: 'They want to know how easily you adapt to new systems or tasks.',
      shape: 'Show a short learning process and reliable outcome.',
    },
    {
      id: 'q-procedure',
      question: 'Tell me about following procedures carefully.',
      why: 'Many roles need accuracy and consistency.',
      shape: 'Describe the procedure, your care and the safe result.',
    },
    {
      id: 'q-why-hire',
      question: 'Why should we hire you?',
      why: 'This is the chance to summarise your fit and confidence.',
      shape: 'Match your strengths to the role and say what you will bring.',
    },
    {
      id: 'q-availability',
      question: 'What is your availability?',
      why: 'They need to know you can meet their hours and flexibility needs.',
      shape: 'Be clear about availability, and mention your flexibility if real.',
    },
  ];

  const lower = (interview.roleType + ' ' + interview.jobAdText + ' ' + interview.employerNotes).toLowerCase();
  const questions = [...universal];

  if (lower.includes('census') || lower.includes('field officer') || interview.roleType === 'field work') {
    questions.push(
      {
        id: 'q-census-why',
        question: 'Why do you want to work on the Census?',
        why: 'They want to know you understand the community purpose and the practical role.',
        shape: 'Link your background to community work, accuracy and respect.',
      },
      {
        id: 'q-explain-census',
        question: 'How would you explain the Census to someone unsure about participating?',
        why: 'They want to see your ability to explain it clearly and respectfully.',
        shape: 'Use simple language, emphasise privacy and the benefit of participation.',
      },
      {
        id: 'q-safety',
        question: 'How would you stay safe while visiting unfamiliar homes?',
        why: 'Safety is a priority for field workers.',
        shape: 'Mention check-ins, visible ID, respectful behaviour and situational awareness.',
      },
      {
        id: 'q-process',
        question: 'Tell me about a time you followed a process carefully.',
        why: 'They need confidence in your ability to follow instructions accurately.',
        shape: 'Describe the process, your attention to detail and the good result.',
      },
      {
        id: 'q-independent',
        question: 'How would you manage your workload independently?',
        why: 'Field work often requires self-management.',
        shape: 'Explain planning, checking progress and reporting clearly.',
      },
      {
        id: 'q-apps',
        question: 'How comfortable are you using mobile apps and tablets?',
        why: 'The role depends on digital tools.',
        shape: 'Give examples of using apps and your readiness to learn more.',
      },
      {
        id: 'q-difficult-home',
        question: 'What would you do if someone became rude or suspicious?',
        why: 'They want to know you can stay calm and safe.',
        shape: 'Emphasise de-escalation, respect and removing yourself politely if needed.',
      },
      {
        id: 'q-diverse',
        question: 'How would you communicate with people from different backgrounds?',
        why: 'Respect and clarity matter in community roles.',
        shape: 'Mention listening, using plain language and adapting to the person.',
      },
      {
        id: 'q-secure-materials',
        question: 'How would you securely store Census materials?',
        why: 'Material security is essential.',
        shape: 'Talk about keeping items locked, organised and separate from personal belongings.',
      },
      {
        id: 'q-flexible-hours',
        question: 'How would you handle evenings, weekends and flexible work?',
        why: 'This role needs real availability.',
        shape: 'Be honest, give examples of flexible work and explain your planning.',
      }
    );
  }

  if (lower.includes('sunglass hut') || lower.includes('retail') || interview.roleType === 'retail') {
    questions.push(
      {
        id: 'q-smart-eyewear',
        question: 'How would you explain smart eyewear to a customer?',
        why: 'They want to know you can simplify new technology for shoppers.',
        shape: 'Mention key benefits, easy features and respectful privacy points.',
      },
      {
        id: 'q-customer-approach',
        question: 'How would you approach a browsing customer?',
        why: 'Retail roles need good frontline instincts.',
        shape: 'Describe a warm opener, listening and helping without pressure.',
      }
    );
  }

  if (interview.roleType === 'ICT') {
    questions.push(
      {
        id: 'q-tech-support',
        question: 'How do you explain a technical issue to a non-technical person?',
        why: 'Communication is key in ICT roles.',
        shape: 'Use plain language, step-by-step examples and reassurance.',
      },
      {
        id: 'q-system-learning',
        question: 'Tell me about learning a new system quickly.',
        why: 'They want to check your adaptability.',
        shape: 'Describe the learning path and how you became confident.',
      }
    );
  }

  if (interview.roleType === 'education') {
    questions.push(
      {
        id: 'q-learning-support',
        question: 'How do you support someone who is learning something new?',
        why: 'They want to see patience and clarity.',
        shape: 'Show your method for breaking tasks into steps and checking understanding.',
      }
    );
  }

  return questions.map((item) => ({
    ...item,
    notes: interview.mockNotes?.[item.id] || '',
    practised: interview.practisedQuestions.includes(item.id),
  }));
}

function createPitch(interview, length = 60) {
  const lines = [];
  const employer = interview.employer || 'this employer';
  lines.push(`I’m Josh and I bring a background in ${interview.myBackground || 'customer service and ICT support'}.`);
  if (interview.roleType === 'field work') {
    lines.push('I’m ready for practical, community-focused work and I value accuracy, safety and clear communication.');
  } else if (interview.roleType === 'retail') {
    lines.push('I enjoy helping customers find the right products and I’m interested in premium brands and smart eyewear.');
  } else if (interview.roleType === 'ICT') {
    lines.push('I’m comfortable with digital tools and explaining technology simply to others.');
  } else {
    lines.push('I’m comfortable learning the role quickly and matching my experience to what you need.');
  }
  if (interview.jobTitle) {
    lines.push(`I’m interested in the ${interview.jobTitle} role because it fits my skills and the chance to support your team.`);
  }
  const keywords = generateRoleIntelligence(interview).keywords.slice(0, 4).join(', ');
  if (keywords) {
    lines.push(`I’d bring strengths in ${keywords} and a steady, reliable approach.`);
  }
  if (length <= 30) {
    return lines.slice(0, 3).join(' ');
  }
  return lines.join(' ');
}

function getCurrentInterview() {
  return state.interviews.find((item) => item.id === state.selectedInterviewId) || null;
}

function renderDashboard() {
  state.selectedInterviewId = null;
  element.dashboardView.classList.remove('hidden');
  element.profileView.classList.add('hidden');
  element.interviewCards.innerHTML = '';

  state.interviews.sort((a, b) => new Date(a.interviewDateTime) - new Date(b.interviewDateTime));

  state.interviews.forEach((interview) => {
    const card = document.createElement('article');
    card.className = 'card';
    const dateLabel = formatDateTime(interview.interviewDateTime);
    const countdown = timeUntil(interview.interviewDateTime);
    const progress = calculateProgress(interview);

    card.innerHTML = `
      <div>
        <h3>${interview.employer}</h3>
        <div class="meta-row">
          <span>${interview.jobTitle}</span>
          <span>${dateLabel}</span>
        </div>
      </div>
      <div class="meta-row">
        <span class="badge">${interview.format}</span>
        <span>${countdown}</span>
      </div>
      <div class="meta-row">
        <span>Progress:</span>
        <strong>${progress}%</strong>
      </div>
      <div class="card-actions">
        <button type="button" data-action="open" data-id="${interview.id}">Open</button>
        <button type="button" class="ghost" data-action="duplicate" data-id="${interview.id}">Duplicate</button>
        <button type="button" class="danger" data-action="delete" data-id="${interview.id}">Delete</button>
      </div>
    `;

    element.interviewCards.appendChild(card);
  });
}

function renderProfile() {
  const interview = getCurrentInterview();
  if (!interview) {
    renderDashboard();
    return;
  }

  element.dashboardView.classList.add('hidden');
  element.profileView.classList.remove('hidden');
  element.profileTitle.textContent = `${interview.jobTitle} — ${interview.employer}`;
  element.profileTypeLabel.textContent = `${interview.format} • ${interview.roleType}`;
  element.profileMeta.innerHTML = `
    <span>${formatDateTime(interview.interviewDateTime)}</span>
    <span>${interview.interviewer || 'Interviewer not set'}</span>
    <span>${interview.locationOrLink || 'Location not set'}</span>
  `;

  const progress = calculateProgress(interview);
  element.progressPercent.textContent = `${progress}%`;
  element.progressFill.style.width = `${progress}%`;

  element.profileTabs.innerHTML = TAB_KEYS.map((key) => `
    <button class="tab-button ${key === state.activeTab ? 'active' : ''}" data-tab="${key}">${tabLabel(key)}</button>
  `).join('');

  element.tabContent.innerHTML = '';
  element.profileTabs.querySelectorAll('.tab-button').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeTab = button.dataset.tab;
      renderProfile();
    });
  });

  element.tabContent.appendChild(renderTabContent(interview));
}

function tabLabel(key) {
  switch (key) {
    case 'setup': return 'Setup';
    case 'role': return 'Role intelligence';
    case 'mock': return 'Mock interview';
    case 'star': return 'STAR stories';
    case 'pitch': return 'Pitch builder';
    case 'flashcards': return 'Flashcards';
    case 'quickprep': return 'Quick prep';
    case 'checklist': return 'Checklist';
    case 'debrief': return 'Debrief';
    case 'export': return 'Export / import';
    default: return key;
  }
}

function renderTabContent(interview) {
  const section = document.createElement('section');
  section.className = 'tab-section';
  switch (state.activeTab) {
    case 'setup':
      section.appendChild(renderSetupTab(interview));
      break;
    case 'role':
      section.appendChild(renderRoleTab(interview));
      break;
    case 'mock':
      section.appendChild(renderMockTab(interview));
      break;
    case 'star':
      section.appendChild(renderStarTab(interview));
      break;
    case 'pitch':
      section.appendChild(renderPitchTab(interview));
      break;
    case 'flashcards':
      section.appendChild(renderFlashcardsTab(interview));
      break;
    case 'quickprep':
      section.appendChild(renderQuickPrepTab(interview));
      break;
    case 'checklist':
      section.appendChild(renderChecklistTab(interview));
      break;
    case 'debrief':
      section.appendChild(renderDebriefTab(interview));
      break;
    case 'export':
      section.appendChild(renderExportTab(interview));
      break;
    default:
      section.textContent = 'No content available.';
      break;
  }
  return section;
}

function renderSetupTab(interview) {
  const container = document.createElement('div');
  container.className = 'form-grid';
  const fields = [
    { id: 'employer', label: 'Employer', type: 'text', value: interview.employer },
    { id: 'jobTitle', label: 'Job title', type: 'text', value: interview.jobTitle },
    { id: 'interviewDateTime', label: 'Interview date/time', type: 'datetime-local', value: interview.interviewDateTime },
    { id: 'interviewer', label: 'Interviewer / contact', type: 'text', value: interview.interviewer },
    { id: 'format', label: 'Interview format', type: 'select', value: interview.format, options: ['In person', 'Microsoft Teams', 'Phone', 'Other'] },
    { id: 'locationOrLink', label: 'Location or meeting link', type: 'text', value: interview.locationOrLink },
    { id: 'jobAdText', label: 'Job ad text', type: 'textarea', value: interview.jobAdText },
    { id: 'employerNotes', label: 'Employer / research notes', type: 'textarea', value: interview.employerNotes },
    { id: 'myBackground', label: 'My relevant background', type: 'textarea', value: interview.myBackground },
    { id: 'availabilityNotes', label: 'Availability / constraints', type: 'textarea', value: interview.availabilityNotes },
    { id: 'concerns', label: 'Key worries or weaknesses', type: 'textarea', value: interview.concerns },
    { id: 'documentsToBring', label: 'Key documents / items to bring', type: 'textarea', value: interview.documentsToBring },
    { id: 'roleType', label: 'Role type', type: 'select', value: interview.roleType, options: roleTypeOptions },
  ];

  fields.forEach((field) => {
    const row = document.createElement('div');
    row.className = 'form-row';
    const label = document.createElement('label');
    label.className = 'field-label';
    label.setAttribute('for', `field-${field.id}`);
    label.textContent = field.label;
    row.appendChild(label);

    let input;
    if (field.type === 'textarea') {
      input = document.createElement('textarea');
      input.rows = 4;
      input.value = field.value || '';
    } else if (field.type === 'select') {
      input = document.createElement('select');
      field.options.forEach((option) => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        if (option === field.value) opt.selected = true;
        input.appendChild(opt);
      });
    } else {
      input = document.createElement('input');
      input.type = field.type;
      input.value = field.value || '';
    }

    input.id = `field-${field.id}`;
    input.dataset.field = field.id;
    input.addEventListener('input', onSetupChange);
    row.appendChild(input);

    if (field.id === 'jobAdText') {
      const note = document.createElement('div');
      note.className = 'small-note';
      note.textContent = 'Use the job ad text to feed role intelligence and interview question generation.';
      row.appendChild(note);
    }
    if (field.id === 'concerns') {
      const note = document.createElement('div');
      note.className = 'small-note';
      note.textContent = 'Capture your biggest interview worries so the app can keep them visible during prep.';
      row.appendChild(note);
    }

    container.appendChild(row);
  });

  const autoSave = document.createElement('div');
  autoSave.className = 'alert';
  autoSave.textContent = 'Saved automatically as you type.';
  container.appendChild(autoSave);
  return container;
}

function onSetupChange(event) {
  const interview = getCurrentInterview();
  if (!interview) return;
  const key = event.target.dataset.field;
  interview[key] = event.target.value;
  if (key === 'roleType') {
    interview.checklist = buildChecklist(interview.roleType);
  }
  saveState();
  renderProfile();
}

function renderRoleTab(interview) {
  const role = generateRoleIntelligence(interview);
  const container = document.createElement('div');
  container.className = 'list-card';
  container.innerHTML = `
    <div class="section-header"><h2>Role intelligence</h2></div>
    <p class="small-note">This summary is created from your saved job ad, employer notes and role type.</p>
  `;

  container.appendChild(createBulletSection('Core responsibilities', role.coreResponsibilities));
  container.appendChild(createBulletSection('Key capabilities', role.keyCapabilities));
  container.appendChild(createBulletSection('Likely hiring priorities', role.hiringPriorities));
  container.appendChild(createBulletSection('Keywords from the job ad', role.keywords));
  container.appendChild(createBulletSection('What success probably looks like', role.successFactors));
  container.appendChild(createBulletSection('Red flags to avoid', role.redFlags));
  container.appendChild(createBulletSection('Best angle for you', role.bestAngle));
  return container;
}

function createBulletSection(title, items) {
  const block = document.createElement('div');
  block.className = 'bullet-section';
  const heading = document.createElement('h3');
  heading.textContent = title;
  block.appendChild(heading);
  const list = document.createElement('ul');
  if (items.length) {
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = 'No information available yet.';
    list.appendChild(li);
  }
  block.appendChild(list);
  return block;
}

function renderMockTab(interview) {
  const questions = buildMockQuestions(interview);
  const container = document.createElement('div');
  container.className = 'list-card';
  container.innerHTML = `
    <div class="section-header"><h2>Mock interview practice</h2></div>
    <p class="small-note">Use these questions to rehearse answers, note your thoughts and mark questions as practised.</p>
  `;

  const list = document.createElement('div');
  list.className = 'card-list';
  questions.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'question-card';
    card.innerHTML = `
      <div class="question-meta"><strong>Q:</strong> ${item.question}</div>
      <p><strong>Why they are asking it:</strong> ${item.why}</p>
      <p><strong>Strong answer shape:</strong> ${item.shape}</p>
      <label class="field-label" for="note-${item.id}">My answer notes</label>
      <textarea id="note-${item.id}" data-question-id="${item.id}" class="small">${item.notes || ''}</textarea>
      <div class="question-actions">
        <button type="button" data-action="practise" data-id="${item.id}">${item.practised ? 'Practised' : 'Mark practised'}</button>
        <button type="button" class="ghost" data-action="timer" data-id="${item.id}">Start 60s timer</button>
        <span class="badge-pill">${item.practised ? 'Practised' : 'Not practised'}</span>
      </div>
      <div id="timer-${item.id}" class="small-note">Ready to practise.</div>
    `;

    card.querySelector(`#note-${item.id}`).addEventListener('input', onMockNoteChange);
    card.querySelector('[data-action="practise"]').addEventListener('click', () => toggleQuestionPractised(interview, item.id));
    card.querySelector('[data-action="timer"]').addEventListener('click', () => startTimer(item.id));
    list.appendChild(card);
  });
  container.appendChild(list);
  return container;
}

function onMockNoteChange(event) {
  const interview = getCurrentInterview();
  if (!interview) return;
  const questionId = event.target.dataset.questionId;
  interview.mockNotes = interview.mockNotes || {};
  interview.mockNotes[questionId] = event.target.value;
  saveState();
}

function toggleQuestionPractised(interview, questionId) {
  interview.practisedQuestions = interview.practisedQuestions || [];
  if (interview.practisedQuestions.includes(questionId)) {
    interview.practisedQuestions = interview.practisedQuestions.filter((id) => id !== questionId);
  } else {
    interview.practisedQuestions.push(questionId);
  }
  saveState();
  renderProfile();
}

let timerIntervals = {};

function startTimer(questionId) {
  const display = document.getElementById(`timer-${questionId}`);
  if (!display) return;
  if (timerIntervals[questionId]) {
    clearInterval(timerIntervals[questionId]);
  }
  let remaining = 60;
  display.textContent = `60 seconds remaining.`;
  timerIntervals[questionId] = setInterval(() => {
    remaining -= 1;
    if (remaining <= 0) {
      clearInterval(timerIntervals[questionId]);
      delete timerIntervals[questionId];
      display.textContent = 'Time is up. Review your answer and try again.';
      return;
    }
    display.textContent = `${remaining} seconds remaining.`;
  }, 1000);
}

function renderStarTab(interview) {
  const container = document.createElement('div');
  container.className = 'list-card';
  container.innerHTML = `
    <div class="section-header"><h2>STAR story bank</h2></div>
    <p class="small-note">Reusable stories for multiple interviews. Add a story to this profile to keep it handy.</p>
  `;

  const list = document.createElement('div');
  list.className = 'card-list';
  state.starStories.forEach((story) => {
    const used = interview.usedStories.includes(story.id);
    const card = document.createElement('article');
    card.className = 'story-card';
    card.innerHTML = `
      <div class="question-meta"><strong>${story.title}</strong></div>
      <div class="tag-list">${story.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}</div>
      <p><strong>Situation:</strong> ${story.situation}</p>
      <p><strong>Task:</strong> ${story.task}</p>
      <p><strong>Action:</strong> ${story.action}</p>
      <p><strong>Result:</strong> ${story.result}</p>
      <p><strong>Best for:</strong> ${story.bestFor}</p>
      <div class="story-actions">
        <button type="button" data-action="use-story" data-id="${story.id}">${used ? 'Added to this interview' : 'Add to this interview'}</button>
      </div>
    `;
    card.querySelector('[data-action="use-story"]').addEventListener('click', () => toggleStoryUsage(interview, story.id));
    list.appendChild(card);
  });
  container.appendChild(list);
  return container;
}

function toggleStoryUsage(interview, storyId) {
  interview.usedStories = interview.usedStories || [];
  if (interview.usedStories.includes(storyId)) {
    interview.usedStories = interview.usedStories.filter((id) => id !== storyId);
  } else {
    interview.usedStories.push(storyId);
  }
  saveState();
  renderProfile();
}

function renderPitchTab(interview) {
  const container = document.createElement('div');
  container.className = 'list-card';
  const pitch30 = createPitch(interview, 30);
  const pitch60 = createPitch(interview, 60);
  container.innerHTML = `
    <div class="section-header"><h2>Pitch builder</h2></div>
    <p class="small-note">Use your saved interview details to create a natural 30-second and 60-second pitch.</p>
    <div class="card">
      <h3>30-second pitch</h3>
      <textarea id="pitch30" class="small">${pitch30}</textarea>
      <div class="question-actions">
        <button type="button" id="copyPitch30">Copy 30s pitch</button>
      </div>
    </div>
    <div class="card">
      <h3>60-second pitch</h3>
      <textarea id="pitch60" class="small">${pitch60}</textarea>
      <div class="question-actions">
        <button type="button" id="copyPitch60">Copy 60s pitch</button>
      </div>
    </div>
  `;
  setTimeout(() => {
    container.querySelector('#copyPitch30').addEventListener('click', () => copyText(container.querySelector('#pitch30').value));
    container.querySelector('#copyPitch60').addEventListener('click', () => copyText(container.querySelector('#pitch60').value));
  }, 0);
  return container;
}

function renderFlashcardsTab(interview) {
  const role = generateRoleIntelligence(interview);
  const cards = [
    { id: 'employer-facts', title: 'Employer facts', text: interview.employerNotes || 'Use your research notes to capture employer facts.' },
    { id: 'role-responsibilities', title: 'Role responsibilities', text: role.coreResponsibilities.join(' ') || 'Use role intelligence to list what the job expects.' },
    { id: 'key-capabilities', title: 'Key capabilities', text: role.keyCapabilities.join(' ') || 'List the capabilities the role needs.' },
    { id: 'strong-points', title: 'My strongest talking points', text: interview.myBackground || 'Write your strongest relevant strengths and interests.' },
    { id: 'things-to-avoid', title: 'Things to avoid saying', text: role.redFlags.join(' ') || 'Avoid sounding pushy, vague or unprepared.' },
    { id: 'questions-to-ask', title: 'Questions to ask', text: 'What does a great first month look like? What should I focus on in the first weeks? How does the team work most effectively?' },
  ];

  if (interview.roleType === 'field work' || interview.employer.toLowerCase().includes('census')) {
    cards.push(
      { id: 'census-what-is', title: 'What the Census is', text: 'The Census collects information about households, supporting planning for local services and community needs.' },
      { id: 'census-why-matters', title: 'Why Census data matters', text: 'It helps governments and communities make decisions about schools, hospitals, transport and emergency services.' },
      { id: 'field-responsibilities', title: 'Field Officer responsibilities', text: 'Deliver materials, assist households, use a mobile app, follow procedures and stay safe in the field.' },
      { id: 'mobile-use', title: 'Mobile app / tablet use', text: 'Record visits, update outcomes and follow the app workflow carefully.' },
      { id: 'field-safety', title: 'Safety in the field', text: 'Carry ID, be visible, keep materials secure and respect household boundaries.' },
      { id: 'secure-materials', title: 'Secure materials', text: 'Store forms and devices safely at home and only carry what you need for the visit.' },
      { id: 'respectful-communication', title: 'Respectful communication', text: 'Use plain language, be patient and listen to each household’s needs.' },
      { id: 'flexible-work', title: 'Flexible work', text: 'Be prepared for evenings, weekends and varying local shifts.' },
      { id: 'independent-work', title: 'Working independently', text: 'Plan your day, keep records and check in with your manager when required.' },
      { id: 'following-procedure', title: 'Following procedures', text: 'Follow the script, use the app correctly and complete all required checks.' }
    );
  }

  const container = document.createElement('div');
  container.className = 'list-card';
  container.innerHTML = `
    <div class="section-header"><h2>Flashcards</h2></div>
    <p class="small-note">Review cards and mark them as reviewed to keep your prep on track.</p>
  `;

  const list = document.createElement('div');
  list.className = 'card-list';
  cards.forEach((cardData) => {
    const isReviewed = interview.reviewedCards?.[cardData.id];
    const card = document.createElement('article');
    card.className = 'flashcard';
    card.innerHTML = `
      <div class="card-meta"><strong>${cardData.title}</strong></div>
      <p>${cardData.text}</p>
      <div class="card-actions">
        <button type="button" data-action="review-card" data-id="${cardData.id}">${isReviewed ? 'Reviewed' : 'Mark reviewed'}</button>
        <span class="badge-pill">${isReviewed ? 'Reviewed' : 'Not reviewed'}</span>
      </div>
    `;
    card.querySelector('[data-action="review-card"]').addEventListener('click', () => toggleCardReview(interview, cardData.id));
    list.appendChild(card);
  });
  container.appendChild(list);
  return container;
}

function toggleCardReview(interview, cardId) {
  interview.reviewedCards = interview.reviewedCards || {};
  interview.reviewedCards[cardId] = !interview.reviewedCards[cardId];
  saveState();
  renderProfile();
}

function renderQuickPrepTab(interview) {
  const role = generateRoleIntelligence(interview);
  const availableStories = state.starStories.filter((story) => interview.usedStories.includes(story.id));
  const chosenStories = availableStories.slice(0, 2).length ? availableStories.slice(0, 2) : state.starStories.slice(0, 2);
  const likelyQuestions = buildMockQuestions(interview).slice(0, 3);

  const container = document.createElement('div');
  container.className = 'list-card';
  container.innerHTML = `
    <div class="section-header"><h2>Quick prep mode</h2></div>
    <p class="small-note">Choose a short prep session, then use the guidance to sharpen your focus before the interview.</p>
    <div class="card-actions">
      <button type="button" data-quick="5">5 minutes</button>
      <button type="button" data-quick="10">10 minutes</button>
      <button type="button" data-quick="30">30 minutes</button>
    </div>
    <div id="quickPrepResult"></div>
  `;

  container.querySelectorAll('[data-quick]').forEach((button) => {
    button.addEventListener('click', () => renderQuickPrepResult(interview, +button.dataset.quick));
  });
  return container;
}

function renderQuickPrepResult(interview, minutes) {
  const quick = document.getElementById('quickPrepResult');
  if (!quick) return;
  const role = generateRoleIntelligence(interview);
  const likelyQuestions = buildMockQuestions(interview).slice(0, 3);
  const stories = state.starStories.filter((story) => interview.usedStories.includes(story.id)).slice(0, 2);
  const selectedStories = stories.length ? stories : state.starStories.slice(0, 2);
  const isVirtual = interview.format.toLowerCase().includes('teams') || interview.format.toLowerCase().includes('phone');

  const extraChecklist = isVirtual ? [
    'Test Teams link or call details',
    'Use Chrome/Edge if possible',
    'Charge laptop/phone',
    'Photo ID ready',
    'Quiet space ready',
    'Camera and microphone tested',
    'Backup phone hotspot if needed',
  ] : [
    `Know the address: ${interview.locationOrLink || 'TBC'}`,
    'Plan travel time and arrival buffer',
    'Check parking or reception details',
    'Photo ID if required',
    'Have a first greeting ready',
  ];

  quick.innerHTML = `
    <div class="card" style="margin-top:18px;">
      <h3>Your ${minutes}-minute prep</h3>
      <p><strong>Grounding exercise:</strong> Take three slow breaths, focus on what you can control, and remind yourself you are prepared.</p>
      <p><strong>Personal pitch:</strong> ${createPitch(interview, 30)}</p>
      <p><strong>Top role priorities:</strong></p>
      <ul>${role.hiringPriorities.slice(0, 5).map((item) => `<li>${item}</li>`).join('')}</ul>
      <p><strong>Likely questions:</strong></p>
      <ol>${likelyQuestions.map((item) => `<li>${item.question}</li>`).join('')}</ol>
      <p><strong>STAR stories to remember:</strong></p>
      <ul>${selectedStories.map((story) => `<li>${story.title}</li>`).join('')}</ul>
      <p><strong>Questions to ask:</strong></p>
      <ul>${[ 'What does a strong first month look like?', 'What should I focus on to succeed in this role?', 'How does the team support new starters?' ].map((item) => `<li>${item}</li>`).join('')}</ul>
      <p><strong>Things to bring/check:</strong></p>
      <ul>${extraChecklist.slice(0, 5).map((item) => `<li>${item}</li>`).join('')}</ul>
      <button type="button" onclick="window.print()">Print prep sheet</button>
    </div>
  `;
}

function renderChecklistTab(interview) {
  const container = document.createElement('div');
  container.className = 'list-card';
  container.innerHTML = `
    <div class="section-header"><h2>Interview checklist</h2></div>
    <p class="small-note">Tick off the items as you prepare.</p>
  `;

  const list = document.createElement('div');
  list.className = 'card-list';
  interview.checklist.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'check-item';
    card.innerHTML = `
      <div class="question-meta">
        <input type="checkbox" id="check-${item.id}" ${item.done ? 'checked' : ''} data-id="${item.id}" />
        <label for="check-${item.id}">${item.label}</label>
      </div>
    `;
    card.querySelector('input').addEventListener('change', (event) => {
      const target = event.target;
      const itemId = target.dataset.id;
      const checkItem = interview.checklist.find((check) => check.id === itemId);
      if (checkItem) {
        checkItem.done = target.checked;
        saveState();
        renderProfile();
      }
    });
    list.appendChild(card);
  });

  container.appendChild(list);
  return container;
}

function renderDebriefTab(interview) {
  const container = document.createElement('div');
  container.className = 'form-grid';
  const fields = [
    { id: 'howItWent', label: 'How it went', value: interview.debrief.howItWent },
    { id: 'questionsAsked', label: 'Questions they asked', value: interview.debrief.questionsAsked },
    { id: 'answersGiven', label: 'Answers I gave', value: interview.debrief.answersGiven },
    { id: 'whatIForgot', label: 'What I forgot', value: interview.debrief.whatIForgot },
    { id: 'followUpActions', label: 'Follow-up actions', value: interview.debrief.followUpActions },
    { id: 'thankYouDraft', label: 'Thank-you message draft', value: interview.debrief.thankYouDraft },
    { id: 'outcome', label: 'Outcome', value: interview.debrief.outcome },
    { id: 'lessons', label: 'Lessons for next interview', value: interview.debrief.lessons },
  ];
  fields.forEach((field) => {
    const row = document.createElement('div');
    row.className = 'form-row';
    const label = document.createElement('label');
    label.className = 'field-label';
    label.setAttribute('for', `debrief-${field.id}`);
    label.textContent = field.label;
    const textarea = document.createElement('textarea');
    textarea.id = `debrief-${field.id}`;
    textarea.value = field.value || '';
    textarea.rows = 4;
    textarea.addEventListener('input', (event) => {
      interview.debrief[field.id] = event.target.value;
      saveState();
    });
    row.appendChild(label);
    row.appendChild(textarea);
    container.appendChild(row);
  });
  return container;
}

function renderExportTab(interview) {
  const container = document.createElement('div');
  container.className = 'list-card';
  container.innerHTML = `
    <div class="section-header"><h2>Export / import</h2></div>
    <p class="small-note">Export this profile as JSON, or import a saved profile from another browser session.</p>
    <div class="question-actions">
      <button type="button" id="exportProfile">Export profile as JSON</button>
      <button type="button" id="openImport">Import profile from JSON</button>
    </div>
  `;
  setTimeout(() => {
    container.querySelector('#exportProfile').addEventListener('click', () => exportInterview(interview));
    container.querySelector('#openImport').addEventListener('click', openImportModal);
  }, 0);
  return container;
}

function exportInterview(interview) {
  const data = JSON.stringify(interview, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${interview.jobTitle.replace(/\s+/g, '_').toLowerCase()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function openImportModal() {
  element.importText.value = '';
  element.importModal.classList.remove('hidden');
  element.importModal.setAttribute('aria-hidden', 'false');
}

function closeImportModal() {
  element.importModal.classList.add('hidden');
  element.importModal.setAttribute('aria-hidden', 'true');
}

function importProfile() {
  try {
    const raw = element.importText.value.trim();
    if (!raw) return;
    const imported = JSON.parse(raw);
    const profile = Array.isArray(imported) ? imported[0] : imported;
    if (!profile || !profile.jobTitle || !profile.employer) {
      alert('Invalid interview profile JSON.');
      return;
    }
    profile.id = createId('import');
    profile.checklist = profile.checklist && profile.checklist.length ? profile.checklist : buildChecklist(profile.roleType || 'other');
    profile.practisedQuestions = profile.practisedQuestions || [];
    profile.reviewedCards = profile.reviewedCards || {};
    profile.mockNotes = profile.mockNotes || {};
    profile.usedStories = profile.usedStories || [];
    profile.debrief = profile.debrief || {
      howItWent: '',
      questionsAsked: '',
      answersGiven: '',
      whatIForgot: '',
      followUpActions: '',
      thankYouDraft: '',
      outcome: '',
      lessons: '',
    };
    state.interviews.push(profile);
    saveState();
    closeImportModal();
    renderDashboard();
  } catch (error) {
    alert('Could not import profile. Check the JSON format.');
  }
}

function addNewInterview() {
  const draft = {
    id: createId('interview'),
    employer: 'New employer',
    jobTitle: 'New job title',
    interviewDateTime: new Date().toISOString().slice(0, 16),
    interviewer: '',
    format: 'In person',
    locationOrLink: '',
    jobAdText: '',
    employerNotes: '',
    myBackground: '',
    availabilityNotes: '',
    concerns: '',
    documentsToBring: '',
    roleType: 'other',
    practisedQuestions: [],
    reviewedCards: {},
    checklist: buildChecklist('other'),
    notes: '',
    debrief: {
      howItWent: '',
      questionsAsked: '',
      answersGiven: '',
      whatIForgot: '',
      followUpActions: '',
      thankYouDraft: '',
      outcome: '',
      lessons: '',
    },
    mockNotes: {},
    usedStories: [],
  };
  state.interviews.push(draft);
  saveState();
  state.selectedInterviewId = draft.id;
  state.activeTab = 'setup';
  renderProfile();
}

function duplicateInterview(id) {
  const original = state.interviews.find((item) => item.id === id);
  if (!original) return;
  const copy = JSON.parse(JSON.stringify(original));
  copy.id = createId('copy');
  copy.jobTitle = `${original.jobTitle} (copy)`;
  copy.practisedQuestions = [];
  copy.reviewedCards = {};
  copy.mockNotes = {};
  copy.usedStories = [...original.usedStories];
  copy.checklist = buildChecklist(copy.roleType);
  state.interviews.push(copy);
  saveState();
  renderDashboard();
}

function deleteInterview(id) {
  if (!confirm('Delete this interview profile? This cannot be undone.')) return;
  state.interviews = state.interviews.filter((item) => item.id !== id);
  saveState();
  renderDashboard();
}

function bindDashboardEvents() {
  element.interviewCards.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    const action = button.dataset.action;
    const id = button.dataset.id;
    if (action === 'open') {
      state.selectedInterviewId = id;
      state.activeTab = 'setup';
      renderProfile();
    }
    if (action === 'duplicate') {
      duplicateInterview(id);
    }
    if (action === 'delete') {
      deleteInterview(id);
    }
  });
}

function bindGlobalEvents() {
  element.newInterviewButton.addEventListener('click', addNewInterview);
  element.backupAll.addEventListener('click', exportWorkspace);
  element.dashboardNewInterview.addEventListener('click', addNewInterview);
  element.backToDashboard.addEventListener('click', () => renderDashboard());
  element.duplicateInterview.addEventListener('click', () => duplicateInterview(state.selectedInterviewId));
  element.deleteInterview.addEventListener('click', () => deleteInterview(state.selectedInterviewId));
  element.importCancel.addEventListener('click', closeImportModal);
  element.importConfirm.addEventListener('click', importProfile);
  element.themeToggle.addEventListener('click', toggleTheme);
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    const notice = document.createElement('div');
    notice.className = 'copy-notice';
    notice.textContent = 'Copied to clipboard';
    document.body.appendChild(notice);
    setTimeout(() => notice.remove(), 1800);
  }).catch(() => alert('Copy failed.')); 
}

function initApp() {
  loadTheme();
  loadState();
  ensureStarterProfiles();
  renderDashboard();
  bindDashboardEvents();
  bindGlobalEvents();
}

initApp();
