// ======================================================
// WhatsApp business number — change this to update everywhere
// ======================================================
const whatsappNumber = "20 11 18642860";

// ======================================================
// Service configuration: fields + icon + WhatsApp copy
// ======================================================
const SERVICES = {
  travel: {
    title: "السياحة",
    icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2.5 1.5V22l4-1 4 1v-1.5L13 19v-5.5z"/></svg>',
    heading: "استفسار عن رحلة سياحية",
    intro: "الوجهات، العروض، والحجوزات — أخبرنا بتفاصيل رحلتك",
    whatsappLabel: "خدمات السياحة ✈️",
    fields: [
      { id: "name", label: "الاسم الكامل", type: "text", required: true, placeholder: "مثال: أحمد محمد", full: true, msgLabel: "الاسم" },
      { id: "phone", label: "رقم الهاتف", type: "tel", required: true, placeholder: "01xxxxxxxxx", msgLabel: "رقم الهاتف" },
      { id: "destination", label: "الوجهة المطلوبة", type: "text", required: true, placeholder: "مثال: شرم الشيخ، دبي...", msgLabel: "الوجهة المطلوبة" },
      { id: "people", label: "عدد الأشخاص", type: "number", required: true, placeholder: "مثال: 2", msgLabel: "عدد الأشخاص" },
      { id: "date", label: "تاريخ السفر", type: "date", required: true, msgLabel: "تاريخ السفر" },
      { id: "notes", label: "ملاحظات إضافية", type: "textarea", required: false, placeholder: "أي تفاصيل إضافية تود ذكرها...", full: true, msgLabel: "ملاحظات" }
    ]
  },
  realestate: {
    title: "العقارات والشقق",
    icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 11 12 4l8 7M6 10v9h12v-9M10 19v-5h4v5"/></svg>',
    heading: "استفسار عن عقار",
    intro: "شقق وعقارات متاحة — أخبرنا بما تبحث عنه بالتحديد",
    whatsappLabel: "خدمات العقارات 🏠",
    fields: [
      { id: "name", label: "الاسم الكامل", type: "text", required: true, placeholder: "مثال: أحمد محمد", full: true, msgLabel: "الاسم" },
      { id: "phone", label: "رقم الهاتف", type: "tel", required: true, placeholder: "01xxxxxxxxx", msgLabel: "رقم الهاتف" },
      { id: "propertyType", label: "نوع العقار", type: "select", required: true, options: ["شقة", "فيلا", "دوبلكس", "محل تجاري", "مكتب إداري", "أرض"], msgLabel: "نوع العقار" },
      { id: "area", label: "المنطقة المطلوبة", type: "text", required: true, placeholder: "مثال: التجمع الخامس", msgLabel: "المنطقة المطلوبة" },
      { id: "budget", label: "الميزانية التقريبية", type: "text", required: true, placeholder: "مثال: 2,000,000 جنيه", msgLabel: "الميزانية التقريبية" },
      { id: "dealType", label: "شراء أو إيجار", type: "select", required: true, options: ["شراء", "إيجار"], msgLabel: "نوع التعامل" },
      { id: "notes", label: "ملاحظات إضافية", type: "textarea", required: false, placeholder: "أي تفاصيل إضافية تود ذكرها...", full: true, msgLabel: "ملاحظات" }
    ]
  },
  cars: {
    title: "السيارات",
    icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 11 6.5 6.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11m-14 0a2 2 0 0 0-2 2v4h2m14-6a2 2 0 0 1 2 2v4h-2m-14 0v2h2v-2m10 0v2h2v-2m-12 0h12"/></svg>',
    heading: "استفسار عن سيارة",
    intro: "سيارات متاحة للبيع والإيجار — أخبرنا باحتياجك",
    whatsappLabel: "خدمات السيارات 🚗",
    fields: [
      { id: "name", label: "الاسم الكامل", type: "text", required: true, placeholder: "مثال: أحمد محمد", full: true, msgLabel: "الاسم" },
      { id: "phone", label: "رقم الهاتف", type: "tel", required: true, placeholder: "01xxxxxxxxx", msgLabel: "رقم الهاتف" },
      { id: "carType", label: "نوع السيارة المطلوبة", type: "text", required: true, placeholder: "مثال: هيونداي، تويوتا كورولا...", msgLabel: "نوع السيارة المطلوبة" },
      { id: "budget", label: "الميزانية التقريبية", type: "text", required: true, placeholder: "مثال: 800,000 جنيه", msgLabel: "الميزانية التقريبية" },
      { id: "dealType", label: "شراء أو إيجار", type: "select", required: true, options: ["شراء", "إيجار"], msgLabel: "نوع التعامل" },
      { id: "notes", label: "ملاحظات إضافية", type: "textarea", required: false, placeholder: "أي تفاصيل إضافية تود ذكرها...", full: true, msgLabel: "ملاحظات" }
    ]
  }
};

// ======================================================
// DOM references
// ======================================================
const cardsTrack = document.getElementById("cards-track");
const formPanel = document.getElementById("form-panel");
const fieldsGrid = document.getElementById("fields-grid");
const inquiryForm = document.getElementById("inquiry-form");
const formHeading = document.getElementById("form-heading");
const formNote = document.getElementById("form-note");
const tagIcon = document.getElementById("tag-icon");
const tagTitle = document.getElementById("tag-title");
const backBtn = document.getElementById("back-btn");

let currentService = null;

// ======================================================
// Generic direct WhatsApp links (header / footer / FAB)
// ======================================================
function setDirectWhatsappLinks() {
  const genericMsg = encodeURIComponent("السلام عليكم 👋\nأرغب في الاستفسار عن خدماتكم.");
  const url = `https://wa.me/${whatsappNumber}?text=${genericMsg}`;
  ["header-whatsapp-link", "footer-whatsapp-link", "fab-whatsapp"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", url);
  });
}
setDirectWhatsappLinks();

// ======================================================
// Build a single field's markup
// ======================================================
function buildField(field) {
  const wrap = document.createElement("div");
  wrap.className = "field" + (field.full ? " full" : "");
  wrap.dataset.fieldId = field.id;

  const label = document.createElement("label");
  label.setAttribute("for", `field-${field.id}`);
  label.innerHTML = field.label + (field.required ? '<span class="req">*</span>' : "");
  wrap.appendChild(label);

  let input;
  if (field.type === "textarea") {
    input = document.createElement("textarea");
    input.rows = 3;
    if (field.placeholder) input.placeholder = field.placeholder;
  } else if (field.type === "select") {
    input = document.createElement("select");
    const emptyOpt = document.createElement("option");
    emptyOpt.value = "";
    emptyOpt.textContent = "اختر...";
    emptyOpt.disabled = true;
    emptyOpt.selected = true;
    input.appendChild(emptyOpt);
    field.options.forEach((opt) => {
      const o = document.createElement("option");
      o.value = opt;
      o.textContent = opt;
      input.appendChild(o);
    });
  } else {
    input = document.createElement("input");
    input.type = field.type;
    if (field.placeholder) input.placeholder = field.placeholder;
    if (field.type === "number") input.min = "1";
  }

  input.id = `field-${field.id}`;
  input.name = field.id;
  if (field.required) input.required = true;

  wrap.appendChild(input);

  const errMsg = document.createElement("span");
  errMsg.className = "field-error-msg";
  errMsg.textContent = "هذا الحقل مطلوب";
  wrap.appendChild(errMsg);

  return wrap;
}

// ======================================================
// Render the form for a chosen service
// ======================================================
function renderForm(serviceKey) {
  const service = SERVICES[serviceKey];
  currentService = serviceKey;

  fieldsGrid.innerHTML = "";
  service.fields.forEach((field) => {
    fieldsGrid.appendChild(buildField(field));
  });

  formHeading.textContent = service.heading;
  formNote.textContent = service.intro;
  tagIcon.innerHTML = service.icon;
  tagTitle.textContent = service.title;

  inquiryForm.reset();
  clearAllErrors();
}

function clearAllErrors() {
  fieldsGrid.querySelectorAll(".field.error").forEach((f) => f.classList.remove("error"));
}

// ======================================================
// Transition: services grid -> form
// ======================================================
function showForm(serviceKey) {
  renderForm(serviceKey);

  cardsTrack.classList.add("hide");
  formPanel.hidden = false;
  formPanel.classList.remove("enter");
  // force reflow so the animation restarts each time
  void formPanel.offsetWidth;
  formPanel.classList.add("enter");

  formPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showCards() {
  formPanel.classList.remove("enter");
  formPanel.hidden = true;
  cardsTrack.classList.remove("hide");
  currentService = null;
  document.getElementById("services").scrollIntoView({ behavior: "smooth", block: "start" });
}

// ======================================================
// Event bindings
// ======================================================
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", () => {
    showForm(card.dataset.service);
  });
});

backBtn.addEventListener("click", showCards);

// ======================================================
// Validation
// ======================================================
function validateForm(service) {
  let isValid = true;
  clearAllErrors();

  service.fields.forEach((field) => {
    if (!field.required) return;
    const input = document.getElementById(`field-${field.id}`);
    const value = input.value.trim();
    if (!value) {
      input.closest(".field").classList.add("error");
      isValid = false;
    }
  });

  return isValid;
}

// ======================================================
// Build the Arabic WhatsApp message
// ======================================================
function buildMessage(service) {
  const lines = [];
  lines.push("السلام عليكم 👋");
  lines.push(`أرغب في الاستفسار عن ${service.whatsappLabel}`);
  lines.push("");

  service.fields.forEach((field) => {
    const input = document.getElementById(`field-${field.id}`);
    const value = input.value.trim();
    if (value) {
      lines.push(`${field.msgLabel}: ${value}`);
    }
  });

  lines.push("");
  lines.push("برجاء التواصل معي وشكرًا لكم.");

  return lines.join("\n");
}

// ======================================================
// Submit handler
// ======================================================
inquiryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!currentService) return;

  const service = SERVICES[currentService];
  if (!validateForm(service)) {
    const firstError = fieldsGrid.querySelector(".field.error");
    if (firstError) firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const message = buildMessage(service);
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(url, "_blank");
});
