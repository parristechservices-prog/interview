const STORE = "interviewMissionControl.v1";
const $ = s => document.querySelector(s);
const app = $("#app");
const uid = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const list = items => `<ul class="clean-list">${items.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;

const universalQuestions = [
  ["Tell me about yourself.", "They want a clear, relevant overview, not your life story.", "Who you are → relevant background → why this role → what you bring."],
  ["Why do you want this role?", "They are checking motivation and whether you understand the work.", "Name two parts of the work that genuinely suit you, then connect your experience."],
  ["Why this employer?", "They want evidence that this is a considered application.", "Mention their purpose, customers or work, then explain why it matters to you."],
  ["What are your strengths?", "They want useful strengths supported by evidence.", "Choose two role-relevant strengths and give one brief example."],
  ["What is a weakness you are working on?", "They are checking honesty and self-awareness.", "Choose a manageable weakness, explain what you do about it, and show progress."],
  ["Tell me about a difficult customer or person.", "They want calm communication and sound judgement.", "Use STAR. Emphasise listening, respect, boundaries and the outcome."],
  ["Tell me about working under pressure.", "They want to know whether you stay useful when things get busy.", "Use STAR. Explain how you prioritised, communicated and stayed steady."],
  ["Tell me about learning something quickly.", "They need confidence that you can become useful fast.", "Use STAR. Show curiosity, notes, focused questions and practice."],
  ["Tell me about following procedures carefully.", "They are testing reliability, accuracy and judgement.", "Use STAR. Explain why the procedure mattered and how you checked your work."],
  ["Why should we hire you?", "They want your strongest concise case.", "Bring together three strengths that directly match the role."],
  ["What is your availability?", "They need an accurate, reliable commitment.", "Be direct and honest. State what you can consistently commit to."]
];
const roleQuestions = {
  retail: [
    ["How would you approach a customer who is just browsing?", "They want warm, low-pressure service.", "Greet them, ask one useful question, read their response and stay available."],
    ["How would you sell a premium product without being pushy?", "They are testing sales judgement.", "Understand needs, explain relevant value, offer choices and let them decide confidently."],
    ["What would you do if a customer says it is too expensive?", "They want confident objection handling without making the customer uncomfortable.", "Acknowledge it, explain relevant value and offer suitable options at different price points."],
    ["How do you feel about sales targets?", "They need customer focus and commercial awareness.", "Connect targets to strong service, product knowledge and consistent follow-up."]
  ],
  government: [
    ["Why do you want to work on the Census?", "They want public-service motivation and role understanding.", "Connect practical community service, accurate work and respectful communication."],
    ["How would you explain the Census to someone unsure about participating?", "They need calm, clear and respectful public communication.", "Listen first, explain the purpose simply, follow approved guidance and avoid arguing."],
    ["How would you stay safe while visiting unfamiliar homes?", "They are checking field judgement.", "Follow safety procedures, stay aware, communicate whereabouts and leave if unsafe."],
    ["How would you manage your workload independently?", "Field work requires organisation without close supervision.", "Plan routes and priorities, use the app, keep records current and update your manager."],
    ["How comfortable are you using mobile apps or tablets?", "The role relies on accurate digital records.", "Connect your ICT background to learning apps quickly and entering information carefully."],
    ["What would you do if someone became rude or suspicious?", "They want de-escalation and safe boundaries.", "Stay calm, listen, explain clearly, do not argue, leave if needed and report appropriately."],
    ["How would you securely store Census materials?", "Confidentiality and procedure are essential.", "Follow storage instructions exactly, limit access, keep materials organised and report issues."],
    ["How would you communicate with people from different backgrounds?", "The work involves respectful contact with a diverse community.", "Listen, avoid assumptions, use plain language, be patient and follow approved support options."],
    ["How would you handle evenings, weekends and flexible work?", "They need dependable availability.", "State your real availability and how you plan ahead to honour commitments."]
  ],
  "field work": [
    ["How do you plan and navigate work across a local area?", "They want organised independent field work.", "Plan routes, check priorities, allow contingencies and keep accurate records."],
    ["What would you do if you felt unsafe?", "Safety judgement matters more than finishing one task.", "Leave, follow procedure, contact the right person and document the issue."]
  ],
  ICT: [
    ["How do you explain technical issues to non-technical people?", "They need clear support without jargon.", "Ask what they are trying to do, explain simply, check understanding and document the fix."],
    ["How do you troubleshoot an unfamiliar problem?", "They want a calm, repeatable approach.", "Clarify symptoms, check basics, isolate causes, research safely and escalate with useful notes."]
  ],
  "customer service": [
    ["What does excellent customer service mean to you?", "They want to hear how you make people feel and solve needs.", "Make the person feel seen, listen properly, explain clearly and follow through."]
  ]
};

const starterStories = [
  ["Helping a stressed customer or student","customer service,communication","Students often came in stressed or confused.","Help them get a clear answer and next steps.","I listened, clarified the issue, explained it simply and followed the right process.","They left calmer and knew what to do next.","difficult person,customer service"],
  ["Explaining technology simply","ICT,communication","Someone struggled with a device or system.","Solve the issue without making them feel silly.","I asked what they were trying to do, checked basics and avoided jargon.","The issue was solved and they felt more confident.","communication,technology"],
  ["Learning a new system quickly","learning,ICT","A workplace introduced a new tool or process.","Become useful with it quickly.","I explored it, took notes, asked focused questions and practised.","I became confident enough to support others.","learning quickly,adaptability"],
  ["Handling a busy service period","pressure,customer service","Multiple people needed help at a busy service desk.","Prioritise requests while keeping people informed.","I acknowledged everyone, triaged urgent issues and worked steadily.","People felt attended to, even when they had to wait.","pressure,prioritisation"],
  ["Following a procedure carefully","accuracy,procedure","A task required accurate steps and records.","Complete it correctly and protect the customer or organisation.","I checked the instructions, followed each step and verified the result.","The task was completed accurately with a clear record.","procedure,accuracy"],
  ["Working independently","independence,organisation","I had work to complete without close supervision.","Plan the work and keep others informed.","I set priorities, tracked progress and raised issues early.","The work was completed reliably and on time.","independence,organisation"],
  ["Communicating respectfully with someone frustrated","communication,de-escalation","A person was frustrated and needed help.","Understand the issue and keep the interaction constructive.","I listened without interrupting, acknowledged the concern and explained the next step.","The conversation settled and we reached a practical outcome.","difficult person,communication"],
  ["Working in a team","teamwork,handover","Customer service and ICT work required good handover.","Keep work moving smoothly across the team.","I shared updates, documented issues and asked for help when needed.","The team could support customers more effectively.","teamwork"],
  ["Staying calm under pressure","pressure,judgement","An unexpected issue created time pressure.","Stay calm and make sound decisions.","I paused, prioritised the immediate risk and communicated clearly.","The issue was handled without adding confusion.","pressure,judgement"]
].map(x => ({id:uid(),title:x[0],tags:x[1],situation:x[2],task:x[3],action:x[4],result:x[5],bestFor:x[6]}));

const sunglassNotes = `Premium customer experience. Style and personalise luxury frames. Meet sales targets warmly. Learn Ray-Ban, Oakley, Prada, Versace, CHANEL and smart eyewear. Use confident, low-pressure service. Polarised lenses reduce glare. Fit, comfort and UV protection matter.`;
const censusNotes = `Field Officers deliver Census forms and letters, assist the public with questions, follow up with households that have not responded, conduct assisted interviews when requested, use a mobile phone or tablet app to receive workload and record outcomes, securely store Census materials at home, travel using their own registered and insured vehicle, work flexibly across weekdays, evenings and weekends, communicate with a Field Manager, complete timesheets and admin, work safely in unfamiliar areas, communicate respectfully with diverse people, follow instructions and procedures accurately, remain calm under pressure, and support participation in the Census.`;

function profile(data) {
  return {id:uid(), employer:"",jobTitle:"",interviewDateTime:"",interviewer:"",format:"In person",locationOrLink:"",jobAdText:"",employerNotes:"",myBackground:"Customer service and ICT support. Calm communication, clear explanations, reliable follow-through and confidence learning technology.",availabilityNotes:"",concerns:"",documentsToBring:"Photo ID, notes and questions",roleType:"customer service",pitch30:"",pitch60:"",practisedQuestions:[],reviewedCards:[],checklist:{},notes:{},debrief:{},...data};
}
function initialState() {
  return {
    activeId:null,
    interviews:[
      profile({employer:"Sunglass Hut / EssilorLuxottica",jobTitle:"Casual Retail Associate",interviewDateTime:"2026-06-10T10:00",interviewer:"David",format:"In person",locationOrLink:"Dubbo Square kiosk / Myer Dubbo",roleType:"retail",jobAdText:sunglassNotes,employerNotes:"Premium sunglasses retailer with strong brands and smart eyewear.",availabilityNotes:"Be clear about reliable casual availability.",concerns:"Newer to fashion retail.",pitch60:"I’m Josh. My background is in customer service and ICT support, so I’m used to making people comfortable, explaining options clearly and learning technology quickly. I’m interested in Sunglass Hut because the role combines customer connection, premium products and smart eyewear. I’d bring patience, reliability, tech confidence and a warm, low-pressure sales approach."}),
      profile({employer:"Australian Bureau of Statistics / 2026 Census",jobTitle:"Field Officer",interviewDateTime:"2026-06-09T13:00",interviewer:"Tanya Bennett",format:"Microsoft Teams",locationOrLink:"Microsoft Teams",roleType:"government",jobAdText:censusNotes,employerNotes:"The Census collects information that helps plan services and understand communities.",availabilityNotes:"Be ready to discuss flexible weekdays, evenings and weekends through 1 October 2026.",concerns:"Safety in unfamiliar areas and giving a precise availability answer.",documentsToBring:"Valid photo ID, Teams link and availability notes",pitch60:"I’m Josh. My background is in customer service and ICT support, so I’m used to helping people calmly, explaining things clearly, and using systems accurately. I’m interested in the Census role because it’s practical community work — helping people participate, following clear procedures, and working reliably in the local area. I’m comfortable using mobile apps and technology, I’m organised, and I’m confident communicating respectfully with different people. I think I’d bring patience, attention to detail, and a steady approach to the role."})
    ],
    starStories:starterStories
  };
}
let state;
try { state = JSON.parse(localStorage.getItem(STORE)) || initialState(); } catch { state = initialState(); }
if (!state.starStories?.length) state.starStories = starterStories;
let route = "dashboard", setupTab = "details", questionIndex = 0, timerId, timerSeconds = 60;
const save = () => localStorage.setItem(STORE, JSON.stringify(state));
const active = () => state.interviews.find(x => x.id === state.activeId);
const toast = msg => { $("#toast").textContent=msg;$("#toast").classList.add("show");setTimeout(()=>$("#toast").classList.remove("show"),2300); };
const copy = text => {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(()=>toast("Copied to clipboard")).catch(()=>fallbackCopy(text));
  } else fallbackCopy(text);
};
function fallbackCopy(text) {
  const area=document.createElement("textarea");area.value=text;area.style.position="fixed";area.style.opacity="0";
  document.body.appendChild(area);area.select();
  try { document.execCommand("copy");toast("Copied to clipboard"); } catch { toast("Copy unavailable in this browser"); }
  area.remove();
}

const nav = [
  ["dashboard","01","Dashboard"],["setup","02","Interview setup"],["intelligence","03","Role intelligence"],["mock","04","Mock interview"],["stories","05","STAR story bank"],["pitch","06","Personal pitch"],["flashcards","07","Flashcards"],["checklist","08","Checklist"],["debrief","09","Post-interview debrief"]
];
function renderNav() {
  $("#mainNav").innerHTML = nav.map(n=>`<button class="nav-btn ${route===n[0]?"active":""}" data-route="${n[0]}"><span>${n[1]}</span>${n[2]}</button>`).join("");
  document.querySelectorAll("[data-route]").forEach(b=>b.onclick=()=>go(b.dataset.route));
  const p=active();$("#activeMission").textContent=p?`${p.employer} · ${p.jobTitle}`:"No active interview";
}
function go(next){ if(next!=="dashboard"&&!active()){toast("Open an interview first");return} route=next;render();window.scrollTo(0,0);$("#sidebar").classList.remove("open"); }
function render(){renderNav(); ({dashboard,setup,intelligence,mock,stories,pitch,flashcards,checklist,debrief}[route]||dashboard)();}
const head=(eyebrow,title,lead,actions="")=>`<div class="page-head"><div><p class="eyebrow">${eyebrow}</p><h1>${title}</h1>${lead?`<p class="lead">${lead}</p>`:""}</div><div class="actions">${actions}</div></div>`;
function progress(p){const q=questionsFor(p);const checks=checklistFor(p);return Math.min(100,Math.round(((p.practisedQuestions.length/Math.max(q.length,1))*.55+(p.reviewedCards.length/Math.max(cardsFor(p).length,1))*.2+(Object.values(p.checklist).filter(Boolean).length/Math.max(checks.length,1))*.25)*100));}
function countdown(date){if(!date)return"No date set";const d=new Date(date)-Date.now();if(d<0)return"Interview date passed";const days=Math.floor(d/86400000),hrs=Math.floor((d%86400000)/3600000);return days?`${days} day${days===1?"":"s"} and ${hrs} hours to go`:`${hrs} hour${hrs===1?"":"s"} to go`;}

function dashboard(){
  app.innerHTML=head("Your upcoming interviews","Mission dashboard","Choose one interview to focus on. Your notes and progress stay on this device.",`<button class="button ghost" id="importBtn">Import JSON</button><button class="button lime" id="newBtn">+ New interview</button>`)
  +`<div class="card-grid">${state.interviews.map(p=>`<article class="card profile-card"><div class="meta"><span class="pill">${esc(p.format)}</span><span class="pill neutral">${esc(p.roleType)}</span></div><h3>${esc(p.jobTitle)}</h3><div class="employer">${esc(p.employer)}</div><div class="countdown">${countdown(p.interviewDateTime)}</div><div class="muted">${p.interviewDateTime?new Date(p.interviewDateTime).toLocaleString("en-AU",{dateStyle:"medium",timeStyle:"short"}):"Date not set"}</div><div class="progress"><span style="width:${progress(p)}%"></span></div><div class="muted">${progress(p)}% prepared</div><div class="actions"><button class="button dark small" data-open="${p.id}">Open</button><button class="button ghost small" data-dup="${p.id}">Duplicate</button><button class="button danger small" data-del="${p.id}">Delete</button></div></article>`).join("")}<article class="card empty-card"><button class="icon-btn" id="emptyNew">+</button><div><strong>New interview</strong><p class="muted">Turn a job ad into a practical prep plan.</p></div></article></div>`;
  $("#newBtn").onclick=$("#emptyNew").onclick=()=>$("#profileDialog").showModal();$("#importBtn").onclick=()=>$("#importDialog").showModal();
  document.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>{state.activeId=b.dataset.open;save();go("intelligence")});
  document.querySelectorAll("[data-dup]").forEach(b=>b.onclick=()=>{const p=state.interviews.find(x=>x.id===b.dataset.dup);state.interviews.push({...JSON.parse(JSON.stringify(p)),id:uid(),jobTitle:`${p.jobTitle} copy`,practisedQuestions:[],reviewedCards:[],checklist:{},debrief:{}});save();dashboard();toast("Interview duplicated")});
  document.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>{if(confirm("Delete this interview profile?")){state.interviews=state.interviews.filter(x=>x.id!==b.dataset.del);if(state.activeId===b.dataset.del)state.activeId=null;save();dashboard()}});
}

const setupFields=[
  ["employer","Employer","text"],["jobTitle","Job title","text"],["interviewDateTime","Interview date and time","datetime-local"],["interviewer","Interviewer or contact","text"],["format","Interview format","select"],["roleType","Role type","role"],["locationOrLink","Location or meeting link","text"],["jobAdText","Job ad text","textarea"],["employerNotes","Employer and research notes","textarea"],["myBackground","My relevant background","textarea"],["availabilityNotes","Availability and constraints","textarea"],["concerns","Worries or weaknesses","textarea"],["documentsToBring","Key documents or items to bring","textarea"]
];
function setup(){
  const p=active();app.innerHTML=head("Build the brief","Interview setup","Add what you know. Role intelligence and practice questions update from this information.",`<span class="save-status">Saved automatically</span><button class="button ghost" id="exportBtn">Export JSON</button>`)
  +`<form class="card form-grid" id="setupForm">${setupFields.map(([key,label,type])=>{let input=type==="textarea"?`<textarea name="${key}" rows="${["jobAdText","employerNotes","myBackground"].includes(key)?6:3}">${esc(p[key])}</textarea>`:type==="select"?`<select name="${key}">${["In person","Microsoft Teams","Phone","Other"].map(x=>`<option ${p[key]===x?"selected":""}>${x}</option>`).join("")}</select>`:type==="role"?`<select name="${key}">${["retail","government","customer service","ICT","field work","education","other"].map(x=>`<option ${p[key]===x?"selected":""}>${x}</option>`).join("")}</select>`:`<input name="${key}" type="${type}" value="${esc(p[key])}">`;return`<label class="${type==="textarea"?"full-span":""}">${label}${input}</label>`}).join("")}</form>`;
  $("#setupForm").oninput=e=>{p[e.target.name]=e.target.value;save();renderNav()};$("#exportBtn").onclick=()=>exportProfile(p);
}

const rules=[
  ["customer service",/customer|public|household|people|assist|service/i],["clear, respectful communication",/communicat|explain|diverse|respect/i],["following procedures accurately",/procedure|instruction|accur|secure|confidential/i],["working independently",/independent|local area|field|travel|route/i],["technology and mobile app confidence",/mobile|tablet|app|technology|ICT|system/i],["safety awareness",/safe|risk|unfamiliar|vehicle/i],["flexible availability",/flexible|evening|weekend|casual/i],["sales and targets",/sales|target|retail/i],["product and brand knowledge",/product|brand|frame|eyewear/i],["organisation and administration",/timesheet|admin|record|workload|organis/i]
];
function analyse(p){
  const text=`${p.jobAdText} ${p.employerNotes}`;const caps=rules.filter(r=>r[1].test(text)).map(r=>r[0]);
  const words=text.toLowerCase().match(/[a-z]{5,}/g)||[];const stop=new Set(["their","about","which","would","should","across","using","people","through","while","where","these","those","with"]);
  const counts={};words.filter(w=>!stop.has(w)).forEach(w=>counts[w]=(counts[w]||0)+1);const keywords=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,10).map(x=>x[0]);
  let responsibilities=text.split(/[,.;\n]/).map(x=>x.trim()).filter(x=>x.length>18).slice(0,8);if(!responsibilities.length)responsibilities=["Review the job ad and add its main duties in Interview Setup."];
  const priorities=caps.slice(0,5);while(priorities.length<5)priorities.push(["reliability","clear communication","learning quickly","sound judgement","positive teamwork"][priorities.length]);
  return{responsibilities,capabilities:caps.length?caps:["clear communication","reliability","learning quickly"],priorities,keywords,success:[`Consistently handles ${priorities[0]} well`,`Communicates clearly with customers, colleagues or the public`,`Learns the role and follows through reliably`],redFlags:["Giving vague availability","Speaking negatively about past employers","Claiming knowledge you do not have","Giving long answers without a clear example"],angle:p.roleType==="retail"?"Customer service + tech confidence + quick learning + warm low-pressure sales":p.roleType==="government"?"Customer service + ICT/mobile confidence + calm communication + accuracy + safety awareness":"Calm customer service + clear communication + technology confidence + reliable follow-through"};
}
function intelligence(){
  const p=active(),a=analyse(p);const boxes=[["Core responsibilities",a.responsibilities],["Key capabilities",a.capabilities],["Likely hiring priorities",a.priorities],["What success probably looks like",a.success],["Red flags to avoid",a.redFlags]];
  app.innerHTML=head("Read between the lines","Role intelligence","A practical summary generated locally from the job ad and notes. No external service is used.",`<button class="button lime" data-route="mock">Practise likely questions →</button>`)
  +`<div class="callout"><strong>Best angle for you</strong>${esc(a.angle)}</div><div class="intel-grid" style="margin-top:18px">${boxes.map(x=>`<article class="mini-card"><h3>${x[0]}</h3>${list(x[1])}</article>`).join("")}<article class="mini-card"><h3>Job ad keywords</h3><div class="tag-list">${a.keywords.map(x=>`<span class="tag">${esc(x)}</span>`).join("")||"Add the job ad text to find keywords."}</div></article></div>`;renderNav();
}
function questionsFor(p){const specific=[...(roleQuestions[p.roleType]||[])];if(p.roleType==="government")specific.push(...roleQuestions["field work"]);return [...universalQuestions,...specific].map((q,i)=>({id:`${p.roleType}-${i}`,question:q[0],why:q[1],shape:q[2]}));}
function mock(){
  const p=active(),qs=questionsFor(p);questionIndex=Math.min(questionIndex,qs.length-1);const q=qs[questionIndex],done=p.practisedQuestions.includes(q.id);
  app.innerHTML=head("Practise out loud","Mock interview","Keep answers clear and conversational. Notes are prompts, not a script.",`<span class="pill">${p.practisedQuestions.length} / ${qs.length} practised</span>`)
  +`<div class="split"><aside class="question-list">${qs.map((x,i)=>`<button class="question-btn ${i===questionIndex?"active":""} ${p.practisedQuestions.includes(x.id)?"done":""}" data-q="${i}">${esc(x.question)}</button>`).join("")}</aside><article class="card question-card"><span class="pill">${esc(p.roleType)}</span><h2>${esc(q.question)}</h2><div class="reason"><strong>Why they are asking:</strong><br>${esc(q.why)}</div><div class="answer-shape"><strong>Strong answer shape</strong><br>${esc(q.shape)}<div class="actions" style="margin-top:12px"><button class="button ghost small" id="copyShape">Copy answer shape</button></div></div><div class="timer"><strong id="timerText">01:00</strong><div class="timer-track"><span id="timerBar"></span></div><button class="button ghost small" id="timerBtn">Start timer</button></div><label class="field">My answer notes<textarea id="answerNotes" rows="6" placeholder="A few useful prompts...">${esc(p.notes[q.id]||"")}</textarea></label><div class="actions" style="margin-top:16px"><button class="button lime" id="practisedBtn">${done?"Practised ✓":"Mark practised"}</button><button class="button ghost" id="nextQ">Next question →</button></div></article></div>`;
  document.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>{questionIndex=+b.dataset.q;resetTimer();mock()});$("#answerNotes").oninput=e=>{p.notes[q.id]=e.target.value;save()};$("#copyShape").onclick=()=>copy(q.shape);$("#practisedBtn").onclick=()=>{if(!done)p.practisedQuestions.push(q.id);save();mock();toast("Question marked practised")};$("#nextQ").onclick=()=>{questionIndex=(questionIndex+1)%qs.length;mock()};$("#timerBtn").onclick=toggleTimer;
}
function resetTimer(){clearInterval(timerId);timerId=null;timerSeconds=60}
function toggleTimer(){if(timerId){clearInterval(timerId);timerId=null;$("#timerBtn").textContent="Resume timer";return}$("#timerBtn").textContent="Pause";timerId=setInterval(()=>{timerSeconds--;$("#timerText").textContent=`00:${String(timerSeconds).padStart(2,"0")}`;$("#timerBar").style.width=`${timerSeconds/60*100}%`;if(timerSeconds<=0){resetTimer();toast("Time. Finish your sentence clearly.")}},1000)}

function stories(){
  app.innerHTML=head("Reusable evidence","STAR story bank","Build examples once, then adapt them across interviews.",`<button class="button lime" id="addStory">+ New story</button>`)
  +`<div class="story-grid">${state.starStories.map(s=>`<article class="card story-card"><div class="tag-list">${s.tags.split(",").map(t=>`<span class="tag">${esc(t.trim())}</span>`).join("")}</div><h3>${esc(s.title)}</h3><p class="muted">Best for: ${esc(s.bestFor)}</p><div class="actions"><button class="button dark small" data-edit-story="${s.id}">Edit story</button><button class="button danger small" data-delete-story="${s.id}">Delete</button></div></article>`).join("")}</div>`;
  $("#addStory").onclick=()=>editStory({id:uid(),title:"New STAR story",tags:"",situation:"",task:"",action:"",result:"",bestFor:""},true);document.querySelectorAll("[data-edit-story]").forEach(b=>b.onclick=()=>editStory(state.starStories.find(s=>s.id===b.dataset.editStory)));document.querySelectorAll("[data-delete-story]").forEach(b=>b.onclick=()=>{if(confirm("Delete this STAR story?")){state.starStories=state.starStories.filter(s=>s.id!==b.dataset.deleteStory);save();stories()}});
}
function editStory(s,isNew=false){
  app.innerHTML=head("Make it specific","Edit STAR story","Use plain language and concrete actions.",`<button class="button ghost" data-route="stories">← Story bank</button>`)
  +`<form class="card form-grid" id="storyForm"><label>Title<input name="title" value="${esc(s.title)}"></label><label>Tags<input name="tags" value="${esc(s.tags)}"></label>${["situation","task","action","result"].map(k=>`<label class="full-span">${k[0].toUpperCase()+k.slice(1)}<textarea name="${k}" rows="3">${esc(s[k])}</textarea></label>`).join("")}<label class="full-span">Best for question types<input name="bestFor" value="${esc(s.bestFor)}"></label><button class="button lime full-span">Save story</button></form>`;renderNav();$("#storyForm").onsubmit=e=>{e.preventDefault();Object.assign(s,Object.fromEntries(new FormData(e.target)));if(isNew)state.starStories.push(s);save();go("stories")};
}
function generatedPitch(p,short=false){const a=analyse(p),bg=(p.myBackground||"customer service and clear communication experience").split(".")[0];return short?`I’m Josh. My background is in ${bg.toLowerCase()}. I’m interested in the ${p.jobTitle} role because it suits my strengths in ${a.priorities.slice(0,2).join(" and ")}. I’d bring ${a.capabilities.slice(0,3).join(", ")} and a reliable approach.`:`I’m Josh. My background is in ${bg.toLowerCase()}, so I’m used to helping people calmly, explaining things clearly and following through reliably. I’m interested in the ${p.jobTitle} role with ${p.employer} because the work involves ${a.priorities.slice(0,3).join(", ")}. I’d bring ${a.capabilities.slice(0,4).join(", ")}, along with a steady and practical approach to the role.`}
function pitch(){
  const p=active();p.pitch30 ||= generatedPitch(p,true);p.pitch60 ||= generatedPitch(p,false);
  app.innerHTML=head("Your opening answer","Personal pitch builder","Use this as a structure. Edit it until it sounds like you.",`<button class="button ghost" id="regenPitch">Regenerate drafts</button>`)
  +`<div class="stack"><article class="card"><p class="eyebrow">30-second pitch</p><div class="pitch-box" id="pitch30View">${esc(p.pitch30)}</div><label class="field" style="margin-top:15px">Edit pitch<textarea id="pitch30" rows="5">${esc(p.pitch30)}</textarea></label><button class="button ghost small" data-copy-pitch="30">Copy pitch</button></article><article class="card"><p class="eyebrow">60-second pitch</p><div class="pitch-box" id="pitch60View">${esc(p.pitch60)}</div><label class="field" style="margin-top:15px">Edit pitch<textarea id="pitch60" rows="7">${esc(p.pitch60)}</textarea></label><button class="button ghost small" data-copy-pitch="60">Copy pitch</button></article></div>`;
  ["30","60"].forEach(n=>{$(`#pitch${n}`).oninput=e=>{p[`pitch${n}`]=e.target.value;$(`#pitch${n}View`).textContent=e.target.value;save()};document.querySelector(`[data-copy-pitch="${n}"]`).onclick=()=>copy(p[`pitch${n}`])});$("#regenPitch").onclick=()=>{p.pitch30=generatedPitch(p,true);p.pitch60=generatedPitch(p,false);save();pitch();toast("Draft pitches regenerated")};
}
function cardsFor(p){const a=analyse(p);return[
  ["Employer facts",p.employerNotes||`${p.employer}: add useful employer research in Interview Setup.`],
  ["What the role needs",a.priorities.join(" · ")],["Core responsibilities",a.responsibilities.slice(0,4).join(" · ")],
  ["My strongest angle",a.angle],["Things to avoid",a.redFlags.join(" · ")],
  ["Questions to ask","What does success look like in the first month? · What should I learn first? · What are the next steps?"],
  ...(p.roleType==="government"?[["What the Census is","A national count that helps understand Australia’s people, households and communities."],["Safety in the field","Follow procedures, stay aware, communicate whereabouts and leave if unsafe."],["Secure materials","Store materials exactly as instructed, limit access and report issues."],["Working independently","Plan workload, keep digital records accurate and update the Field Manager."]]:[]),
  ...(p.roleType==="retail"?[["Low-pressure service","Notice the person, ask a useful question, listen, recommend and give them room to choose."],["Product basics","Fit, comfort and UV protection first. Polarised lenses reduce glare."],["Smart eyewear","Connect features to how the customer would actually use them."]]:[])
].map((x,i)=>({id:`card-${i}-${x[0]}`,title:x[0],body:x[1]}))}
function flashcards(){
  const p=active(),cards=cardsFor(p);app.innerHTML=head("Recall the useful bits","Flashcards","Review short, practical prompts. You do not need to memorise every word.",`<span class="pill">${p.reviewedCards.length} reviewed</span>`)
  +`<div class="flash-grid">${cards.map(c=>`<article class="card flashcard ${p.reviewedCards.includes(c.id)?"reviewed":""}"><span class="pill neutral">Prep card</span><h3>${esc(c.title)}</h3><p>${esc(c.body)}</p><div class="actions"><button class="button ghost small" data-review="${c.id}">${p.reviewedCards.includes(c.id)?"Reviewed ✓":"Mark reviewed"}</button></div></article>`).join("")}</div>`;document.querySelectorAll("[data-review]").forEach(b=>b.onclick=()=>{if(!p.reviewedCards.includes(b.dataset.review))p.reviewedCards.push(b.dataset.review);save();flashcards()});
}
function checklistFor(p){let x=["Know interview time","Know location or meeting link","Prepare photo ID if required","Practise personal pitch","Practise two STAR stories","Prepare availability answer","Prepare two questions to ask","Check clothes and presentation","Ground breathing before starting"];if(/teams|phone|virtual/i.test(p.format))x.push("Test meeting link","Use Chrome or Edge","Charge laptop and phone","Camera and microphone tested","Quiet space ready","Backup phone hotspot if needed");else x.push("Check travel time and parking or check-in","Prepare first greeting line");if(p.roleType==="government")x.push("Valid photo ID ready","Understand Field Officer duties","Be ready to discuss car, insurance and device if asked","Be ready to discuss safety awareness","Be ready to discuss availability through 1 October 2026","Be ready to explain mobile app confidence","Be ready to discuss respectful communication with diverse households");return x}
function checklist(){
  const p=active(),items=checklistFor(p);app.innerHTML=head("Remove avoidable stress","Interview checklist","Tick off the practical details so your attention can stay on the conversation.",`<span class="pill">${Object.values(p.checklist).filter(Boolean).length} / ${items.length} ready</span>`)
  +`<div class="check-grid">${items.map(x=>`<label class="check-item"><input type="checkbox" data-check="${esc(x)}" ${p.checklist[x]?"checked":""}><span>${esc(x)}</span></label>`).join("")}</div>`;document.querySelectorAll("[data-check]").forEach(i=>i.onchange=()=>{p.checklist[i.dataset.check]=i.checked;save();checklist()});
}
const debriefFields=[["howItWent","How it went"],["questionsAsked","Questions they asked"],["answersGiven","Answers I gave"],["forgot","What I forgot"],["followUp","Follow-up actions"],["thankYou","Thank-you message draft"],["outcome","Outcome"],["lessons","Lessons for next interview"]];
function debrief(){
  const p=active();app.innerHTML=head("Turn experience into progress","Post-interview debrief","Capture useful details while they are fresh. This stays private on your device.")
  +`<div class="card debrief-grid">${debriefFields.map(([k,l])=>`<label class="field">${l}<textarea data-debrief="${k}" rows="${k==="howItWent"||k==="questionsAsked"||k==="lessons"?5:3}">${esc(p.debrief[k]||"")}</textarea></label>`).join("")}</div>`;document.querySelectorAll("[data-debrief]").forEach(t=>t.oninput=()=>{p.debrief[t.dataset.debrief]=t.value;save()});
}

function quickPrep(minutes=10){
  const p=active(),a=analyse(p),qs=questionsFor(p),stories=state.starStories.slice(0,2),items=checklistFor(p).slice(0,7);
  $("#quickContent").innerHTML=`<p class="eyebrow">Quick prep · ${esc(p.jobTitle)}</p><h2>Use the next ${minutes} minutes well.</h2><div class="filter-row">${[5,10,30].map(n=>`<button class="tab ${n===minutes?"active":""}" data-min="${n}">${n} minutes</button>`).join("")}</div><div class="quick-sections"><article class="mini-card"><h3>Start grounded</h3><p>Feet on the floor. Shoulders down. Inhale for 4, exhale for 6, three times.</p></article><article class="mini-card"><h3>Your pitch</h3><p>${esc(p.pitch60||generatedPitch(p,false))}</p></article><article class="mini-card"><h3>Top five priorities</h3>${list(a.priorities)}</article><article class="mini-card"><h3>Three likely questions</h3>${list(qs.slice(0,3).map(q=>q.question))}</article><article class="mini-card"><h3>Two stories to remember</h3>${list(stories.map(s=>s.title))}</article><article class="mini-card"><h3>Questions to ask</h3>${list(["What does success look like in the first month?","What should I focus on learning first?","What are the next steps?"])}</article><article class="mini-card"><h3>Bring or check</h3>${list(items)}</article></div>`;
  document.querySelectorAll("[data-min]").forEach(b=>b.onclick=()=>quickPrep(+b.dataset.min));$("#quickDialog").showModal();
}
function exportProfile(p){const blob=new Blob([JSON.stringify(p,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`${p.employer}-${p.jobTitle}.json`.replace(/[^a-z0-9.-]/gi,"-");a.click();URL.revokeObjectURL(a.href);toast("Profile exported")}

$("#newProfileForm").onsubmit=e=>{e.preventDefault();const p=profile(Object.fromEntries(new FormData(e.target)));state.interviews.push(p);state.activeId=p.id;save();$("#profileDialog").close();e.target.reset();go("setup")};
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=()=>$("#"+b.dataset.close).close());
$("#quickPrepButton").onclick=()=>active()?quickPrep():toast("Open an interview first");
$("#printButton").onclick=()=>active()?window.print():toast("Open an interview first");
$("#menuButton").onclick=()=>$("#sidebar").classList.toggle("open");
$("#confirmImport").onclick=()=>{try{const p=JSON.parse($("#importText").value);p.id=uid();p.practisedQuestions||=[];p.reviewedCards||=[];p.checklist||={};p.notes||={};p.debrief||={};state.interviews.push(p);state.activeId=p.id;save();$("#importDialog").close();go("setup");toast("Profile imported")}catch{toast("That JSON could not be imported")}};
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>go(b.dataset.go));
render();
