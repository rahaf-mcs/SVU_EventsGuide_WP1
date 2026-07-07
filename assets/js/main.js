const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const locationFilter = document.getElementById("locationFilter");
const dateFrom = document.getElementById("dateFrom");
const dateTo = document.getElementById("dateTo");

const events = document.querySelectorAll(".event-item");
const resetButton = document.getElementById("resetFilters");


function filterEvents() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const selectedLocation = locationFilter.value;
    const fromDate = dateFrom.value;
    const toDate = dateTo.value;
    

    events.forEach(event => {
        const title = event.querySelector("h5").textContent.toLowerCase();
        const description = event.querySelector("p").textContent.toLowerCase();

        const category = event.dataset.category;
        const location = event.dataset.location;
        const eventDate = event.dataset.date;

        const matchSearch =
            title.includes(searchText) ||
            description.includes(searchText);

        const matchCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        const matchLocation =
            selectedLocation === "all" ||
            location === selectedLocation;

        const matchDateFrom =
            fromDate === "" ||
            eventDate >= fromDate;

        const matchDateTo =
            toDate === "" ||
            eventDate <= toDate;

        if (
            matchSearch &&
            matchCategory &&
            matchLocation &&
            matchDateFrom &&
            matchDateTo
        ) {
            event.style.display = "";
        } else {
            event.style.display = "none";
        }
    });
 
}
const eventsData = [
    {
        id: 1,
        title: "ندوة الذكاء الاصطناعي في التعليم",
        category: "ندوة علمية",
        date: "2026-07-15",
        time: "10:00 صباحاً",
        location: "دمشق - الهمك",
        image: "assets/img/AI Event.png",
        description: "استعراض أحدث تطبيقات الذكاء الاصطناعي في العملية التعليمية.",
        map: "assets/img/Damas_HMK.png",
        galleryImages: [
            "assets/img/Artificial Intelligence in Education 1.jpg",
            "assets/img/Artificial Intelligence in Education 2.jpg",
            "assets/img/Artificial Intelligence in Education 3.jpg"
        ],
        relatedEvents: [2, 3]
    },
    {
        id: 2,
        title: "ندوة تحليل البيانات واتخاذ القرار",
        category: "ندوة علمية",
        date: "2026-08-05",
        time: "12:00 ظهراً",
        location: "دمشق _ المزة",
        image: "assets/img/DA event.jpg",
        description: "كيفية استخدام البيانات لدعم القرارات الإدارية والأكاديمية",
        map: "assets/img/Damas_MZA.png",
        galleryImages: [
            "assets/img/Data Analysis and Decision-Making 1.jpg",
            "assets/img/Data Analysis and Decision-Making 2.jpg",
            "assets/img/Data Analysis and Decision-Making 3.jpg"
        ],
        relatedEvents: [1, 3]
    },
    {
        id: 3,
        title: "ندوة الأمن السيبراني وحماية المعلومات",
        category: "ندوة علمية",
        date: "2026-08-14",
        time: "10:00 صباحاً",
        location: "دمشق _ المزة",
        image: "assets/img/Cybersecurity event.jpg",
        description: "التوعية بالمخاطر الرقمية وأساليب الحماية الحديثة.",
        map: "assets/img/Damas_MZA.png",
        galleryImages: [
            "assets/img/first event.jpg",
            "assets/img/Artificial Intelligence in Education 2.jpg",
            "assets/img/Data Analysis and Decision-Making 3.jpg"
        ],
        relatedEvents: [2, 3]
    },
    {
        id: 4,
        title: " تدريب أساسيات Python",
        category: "تدريب",
        date: "2026-07-20",
        time: "10:00 صباحاً",
        location: "افتراضي online",
        image: "assets/img/python event.jpg",
        description: "مدخل عملي لتعلم البرمجة باستخدام لغة Python.",
        map: "assets/img/onlineloc.png",
        galleryImages: [
            "assets/img/Artificial Intelligence in Education 2.jpg",
            "assets/img/Data Analysis and Decision-Making 2.jpg",
            "assets/img/Cloud event.jpg"
        ],
        relatedEvents: [5, 6]
    },
    {
        id: 5,
        title: "تدريب تطوير مواقع الويب",
        category: "تدريب",
        date: "2026-07-30",
        time: "10:00 صباحاً",
        location: "افتراضي online",
        image: "assets/img/PR Event.jpg",
        description: "تدريب عملي يهدف إلى تعريف الطلاب بأساسيات تطوير مواقع الويب باستخدام HTML و CSS و Bootstrap.",
        map: "assets/img/onlineloc.png",
        galleryImages: [
            "assets/img/first event.jpg",
            "assets/img/Artificial Intelligence in Education 2.jpg",
            "assets/img/Data Analysis and Decision-Making 3.jpg"
        ],
        relatedEvents: [4, 6]
    },
    {
        id: 6,
        title: " تدريب Power BI وتحليل البيانات",
        category: "تدريب",
        date: "2026-08-05",
        time: "10:00 صباحاً",
        location: "افتراضي online",
        image: "assets/img/Power bi event.jpg",
        description: "تدريب عملي يهدف إلى تعريف الطلاب بأساسيات تطوير مواقع الويب باستخدام HTML و CSS و Bootstrap.",
        map: "assets/img/onlineloc.png",
        galleryImages: [
            "assets/img/Artificial Intelligence in Education 2.jpg",
            "assets/img/Code event.jpg",
            "assets/img/Cloud event.jpg"
        ],
        relatedEvents: [5, 4]
    },
    {
        id: 7,
        title: "المؤتمر السنوي للتعليم الرقمي",
        category: "مؤتمر",
        date: "2026-08-20",
        time: "10:00 صباحاً",
        location: "دمشق - الهمك",
        image: "assets/img/Elearning event .png",
        description:  "مناقشة أحدث الاتجاهات في التعليم الرقمي"  ,
        map: "assets/img/Damas_HMK.png",
        galleryImages: [
            "assets/img/first event.jpg",
            "assets/img/Code event.jpg",
            "assets/img/Data Analysis and Decision-Making 3.jpg"
        ],
        relatedEvents: [8, 9]
    },
    {
        id: 8,
        title: "مؤتمر التحول الرقمي والابتكار",
        category: "مؤتمر",
        date: "2026-08-28",
        time: "10:00 صباحاً",
        location: "وزارةالاعلام",
        image: "assets/img/DT event.jpg",
        description:"استعراض تجارب التحول الرقمي في المؤسسات",
        map: "assets/img/MOMd.png",
        galleryImages: [
            "assets/img/first event.jpg",
            "assets/img/Code event.jpg",
            "assets/img/Data Analysis and Decision-Making 3.jpg"
        ],
        relatedEvents: [7, 9]
    },
    {
        id: 9,
        title: "مؤتمر ريادة الأعمال التقنية",
        category: "مؤتمر",
        date: "2026-09-01",
        time: "10:00 صباحاً",
        location: "وزارة التعليم العالي",
        image: "assets/img/TB event.jpg",
        description:"تعزيز ثقافة الابتكار وريادة الأعمال لدى الطلاب",
        map: "assets/img/MoHed.png",
        galleryImages: [
            "assets/img/Artificial Intelligence in Education 2.jpg",
            "assets/img/Code event.jpg",
            "assets/img/Cloud event.jpg"
        ],
        relatedEvents: [7, 8]
    },
    {
        id: 10,
        title: "اليوم المفتوح للطلاب الجدد",
        category: "فعالية",
        date: "2026-08-22",
        time: "10:00 صباحاً",
        location: "دمشق - الهمك",
        image: "assets/img/first event.jpg",
        description:"تعريف الطلاب بالخدمات الأكاديمية والأنشطة الجامعية",
        map: "assets/img/Damas_HMK.png",
        galleryImages: [
            "assets/img/Artificial Intelligence in Education 2.jpg",
            "assets/img/Code event.jpg",
            "assets/img/Cloud event.jpg"
        ],
        relatedEvents: [11, 12]
    },
    {
        id: 11,
        title: "معرض المشاريع الطلابية",
        category: "فعالية",
        date: "2026-09-03",
        time: "10:00 صباحاً",
        location: "دمشق الهمك",
        image: "assets/img/S project event.jpg",
        description:"عرض أفضل مشاريع الطلاب في مختلف التخصصات",
        map: "assets/img/Damas_HMK.png",
        galleryImages: [
            "assets/img/Artificial Intelligence in Education 2.jpg",
            "assets/img/Code event.jpg",
            "assets/img/Cloud event.jpg"
        ],
        relatedEvents: [10, 12]
    },
    {
        id: 12,
        title: "ملتقى الخريجين والتوظيف",
        category: "فعالية",
        date: "2026-09-10",
        time: "10:00 صباحاً",
        location: "دمشق - المزة",
        image: "assets/img/GS event.jpg",
        description:"ربط الخريجين بسوق العمل والشركات التقنية",
        map: "assets/img/Damas_MZA.png",
        galleryImages: [
            "assets/img/Artificial Intelligence in Education 2.jpg",
            "assets/img/Code event.jpg",
            "assets/img/Cloud event.jpg"
        ],
        relatedEvents: [10, 11] 
    },
    {
        id: 13,
        title: "محاضرة قواعد البيانات الحديثة",
        category: "محاضرة",
        date: "2026-08-07",
        time: "10:00 صباحاً",
        location: "دمشق - المزة",
        image: "assets/img/DB event.png",
        description:"التعرف على مفاهيم وتصميم قواعد البيانات",
        map: "assets/img/Damas_MZA.png",
        galleryImages: [
            "assets/img/first event.jpg",
            "assets/img/Artificial Intelligence in Education 2.jpg",
            "assets/img/Cloud event.jpg"
        ],
        relatedEvents: [14, 15] 
    },
    {
        id: 14,
        title: "محاضرة إدارة المشاريع التقنية",
        category: "محاضرة",
        date: "2026-08-01",
        time: "10:00 صباحاً",
        location: "افتراضي online",
        image: "assets/img/P event.jpg",
        description:"أساسيات التخطيط وإدارة المشاريع البرمجية",
        map: "assets/img/onlineloc.png",
        galleryImages: [
            "assets/img/first event.jpg",
            "assets/img/Artificial Intelligence in Education 2.jpg",
            "assets/img/Cloud event.jpg"
        ],
        relatedEvents: [13, 15]
    },
    {
        id: 15,
        title: "محاضرة الحوسبة السحابية",
        category: "محاضرة",
        date: "2026-08-09",
        time: "10:00 صباحاً",
        location: "افتراضي online",
        image: "assets/img/Cloud event.jpg",
        description:"التعرف على خدمات وتقنيات الحوسبة السحابية",
        map: "assets/img/onlineloc.png",
        galleryImages: [
            "assets/img/first event.jpg",
            "assets/img/Code event.jpg",
            "assets/img/Cloud event.jpg"
        ],
        relatedEvents: [13, 14]
    },
    {
        id: 16,
        title: "مسابقة البرمجة الطلابية",
        category: "مسابقة",
        date: "2026-08-24",
        time: "10:00 صباحاً",
        location: "دمشق مخبر المزة",
        image: "assets/img/Code event.jpg",
        description:"تحديات برمجية لتنمية مهارات حل المشكلات",
        map: "assets/img/Damas_MZA_lab.png",
        galleryImages: [
            "assets/img/first event.jpg",
            "assets/img/Code event.jpg",
            "assets/img/Cloud event.jpg"
        ],
        relatedEvents: [17, 18]
      },
    {
        id: 17,
        title: "مسابقة الابتكار الرقمي",
        category: "مسابقة",
        date: "2026-08-27",
        time: "10:00 صباحاً",
        location: "دمشق مخبر الهمك",
        image: "assets/img/Digital Innovation event.png",
        description:"عرض أفكار ومشاريع تقنية مبتكرة",
        map: "assets/img/Damas_HMK_lab.png",
        galleryImages: [
            "assets/img/first event.jpg",
            "assets/img/Code event.jpg",
            "assets/img/Cloud event.jpg"
        ],
        relatedEvents: [16, 18]
    },
    {
        id: 18,
        title: "المشاريع المميزة",
        category: "مسابقة",
        date: "2026-07-26",
        time: "10:00 صباحاً",
        location: "دمشق مخبر الهمك",
        image: "assets/img/PR Event.jpg",
        description:"تكريم المشاريع المتميزة للطلاب الخريجين",
        map: "assets/img/Damas_HMK_lab.png",
        galleryImages: [
            "assets/img/first event.jpg",
            "assets/img/Code event.jpg",
            "assets/img/Cloud event.jpg"
        ],
        relatedEvents: [16, 17]
       },

];

const weeklyEventsContainer = document.getElementById("weeklyEventsContainer");

if (weeklyEventsContainer) {

    const today = new Date();
    const nextWeek = new Date();

    nextWeek.setDate(today.getDate() + 7);

    const weeklyEvents = eventsData.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= today && eventDate <= nextWeek;
    });

    weeklyEventsContainer.innerHTML = "";

    if (weeklyEvents.length === 0) {

        weeklyEventsContainer.innerHTML = `
            <div class="col-12">
                <div class="empty-week-events">
                    <div class="empty-icon">📅</div>
                    <h4>لا يوجد فعاليات هذا الأسبوع</h4>
                    <p>ترقبوا الفعاليات القادمة قريباً</p>
                    <a href="events.html" class="btn btn-success mt-3">
                        عرض جميع الفعاليات
                    </a>
                </div>
            </div>
        `;

    } else {

        weeklyEvents.forEach(event => {

            weeklyEventsContainer.innerHTML += `
                <div class="col-md-3">
                    <div class="event-card">
                        <img src="${event.image}" class="img-fluid" alt="${event.title}">
                        <span class="event-badge">${event.category}</span>
                        <h5>${event.title}</h5>
                        <p>${event.date} · ${event.location}</p>

                        <a href="event.html?id=${event.id}" class="btn btn-outline-success w-100">
                            عرض التفاصيل
                        </a>
                    </div>
                </div>
            `;

        });

    }

} 


const params = new URLSearchParams(window.location.search);
const eventId = Number(params.get("id"));

const eventDetails = eventsData.find(event => event.id === eventId);

if (eventDetails) {

    document.getElementById("eventTitle").textContent = eventDetails.title;
    document.getElementById("eventImage").src = eventDetails.image;
    document.getElementById("eventCategory").textContent = eventDetails.category;
    document.getElementById("eventDate").textContent = eventDetails.date;
    document.getElementById("eventTime").textContent = eventDetails.time;
    document.getElementById("eventLocation").textContent = eventDetails.location;
    document.getElementById("eventDescription").textContent = eventDetails.description;
    document.getElementById("eventMap").src = eventDetails.map;

    const galleryContainer = document.getElementById("galleryContainer");

    if (galleryContainer && eventDetails.galleryImages) {
        eventDetails.galleryImages.forEach(image => {
            galleryContainer.innerHTML += `
                <div class="col-md-4">
                    <img src="${image}" class="gallery-img" alt="صورة من الفعالية">
                </div>
            `;
        });
    }

    const relatedContainer = document.getElementById("relatedEvents");

    if (relatedContainer && eventDetails.relatedEvents) {
        eventDetails.relatedEvents.forEach(id => {
            const relatedEvent = eventsData.find(event => event.id === id);

            if (relatedEvent) {
                relatedContainer.innerHTML += `
                    <a href="event.html?id=${relatedEvent.id}" class="related-event-card">
                        <h6>${relatedEvent.title}</h6>
                        <p>${relatedEvent.date}</p>
                    </a>
                `;
            }
        });
    }
}



const shareBtn = document.getElementById("shareBtn");
const shareMenu = document.getElementById("shareMenu");

if (shareBtn && shareMenu && eventDetails) {

    const pageUrl = window.location.href;
    const shareText = `${eventDetails.title} - ${eventDetails.date}`;

    shareBtn.addEventListener("click", function () {
        shareMenu.classList.toggle("active");
});

document.getElementById("shareWhatsapp").href =
    `https://wa.me/?text=${encodeURIComponent(shareText + " " + pageUrl)}`;

document.getElementById("shareFacebook").href =
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;

document.getElementById("shareX").href =
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`;

document.getElementById("shareInstagram").href =
    `https://www.instagram.com/`;
}
const addToCalendarBtn = document.getElementById("addToCalendarBtn");

if (addToCalendarBtn && eventDetails) {

    addToCalendarBtn.addEventListener("click", () => {

        const startDate = eventDetails.date.replaceAll("-", "");
        
        const googleCalendarUrl =
        `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${startDate}/${startDate}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;

        window.open(googleCalendarUrl, "_blank");

    });

}
    

if (searchInput && categoryFilter && locationFilter && dateFrom && dateTo) {
    searchInput.addEventListener("keyup", filterEvents);
    categoryFilter.addEventListener("change", filterEvents);
    locationFilter.addEventListener("change", filterEvents);
    dateFrom.addEventListener("change", filterEvents);
    dateTo.addEventListener("change", filterEvents);
}


const urlParams = new URLSearchParams(window.location.search);
const categoryFromUrl = urlParams.get("category");

if (categoryFromUrl && categoryFilter) {
    categoryFilter.value = categoryFromUrl;
    filterEvents();
}
    
    
    
if (resetButton && searchInput && categoryFilter && locationFilter && dateFrom && dateTo) {
    resetButton.addEventListener("click", () => {
        searchInput.value = "";
        categoryFilter.value = "all";
        locationFilter.value = "all";
        dateFrom.value = "";
        dateTo.value = "";

        filterEvents();
    });
}
    


/* Contact Form Validation */

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const messageInput = document.getElementById("message");

            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const messageError = document.getElementById("messageError");

            const formAlert = document.getElementById("formAlert");

            let isValid = true;

            nameError.textContent = "";
            emailError.textContent = "";
            messageError.textContent = "";
            formAlert.innerHTML = "";

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (name === "") {
                nameError.textContent = "يرجى إدخال الاسم.";
                isValid = false;
            }

            if (email === "") {
                emailError.textContent = "يرجى إدخال البريد الإلكتروني.";
                isValid = false;
            } else if (!emailPattern.test(email)) {
                emailError.textContent = "صيغة البريد الإلكتروني غير صحيحة.";
                isValid = false;
            }

            if (message === "") {
                messageError.textContent = "يرجى كتابة الرسالة.";
                isValid = false;
            }

            if (isValid) {
                formAlert.innerHTML = `
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <i class="bi bi-check-circle-fill"></i>
                        تم إرسال رسالتك بنجاح. شكراً لتواصلك معنا.
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    </div>
                `;

                contactForm.reset();
            } else {
                formAlert.innerHTML = `
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <i class="bi bi-exclamation-triangle-fill"></i>
                        يرجى تصحيح الأخطاء الموجودة في النموذج ثم إعادة المحاولة.
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    </div>
                `;
            }
        });

    }

});