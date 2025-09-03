import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ro: {
    translation: {
      // Navigation
      nav: {
        about: "Despre Mine",
        services: "Servicii",
        writtenWork: "Lucrări Scrise",
        contact: "Contact",
        languageToggle: "English"
      },
      // Common
      readMore: "Citește mai mult",
      contactUs: "Contactează-ne",
      bookSession: "Rezervă o ședință",
      // Home page
      home: {
        title: "Ana Mihaela Popisteanu",
        subtitle: "Psiholog, Psihoterapeut & Coach",
        description: "Oferind servicii profesionale de consiliere psihologică, psihoterapie și coaching pentru dezvoltare personală într-un mediu calm și de încredere.",
        cta: "Programează o consultație"
      },
      // About page
      about: {
        title: "Despre Mine",
        subtitle: "Psiholog cu experiență în dezvoltarea umană",
        bio: "Ana Mihaela Popisteanu este un psiholog dedicat cu o experiență vastă în domeniul sănătății mentale și dezvoltării personale. Cu o abordare caldă și profesională, ea oferă servicii de consiliere psihologică, psihoterapie și coaching pentru persoanele care doresc să-și îmbunătățească calitatea vieții.\n\nCu ani de experiență în lucrul cu diverse provocări psihologice, Ana și-a construit reputația ca o profesionistă de încredere, capabilă să ghideze clienții prin procesul de vindecare și creștere personală. Abordarea sa integrativă combină tehnici moderne de terapie cu o înțelegere profundă a psihologiei umane.",
        education: "Educație și Formare",
        experience: "Experiență Profesională",
        approach: "Abordarea Mea",
        approachText: "Cred într-o abordare holistică a sănătății mentale, care ia în considerare persoana în întregime. Fiecare client este unic, iar planul de tratament este adaptat nevoilor individuale pentru a asigura cele mai bune rezultate."
      },
      // Services page
      services: {
        title: "Serviciile Mele",
        subtitle: "Servicii profesionale de sănătate mentală adaptate nevoilor dumneavoastră",
        coaching: {
          title: "Coaching și Dezvoltare Personală",
          description: "Sesiuni de coaching personalizate pentru a vă ajuta să vă atingeți obiectivele personale și profesionale, să vă dezvoltați încrederea în sine și să vă îmbunătățiți performanța în toate aspectele vieții."
        },
        counseling: {
          title: "Consiliere Psihologică",
          description: "Consiliere profesională pentru gestionarea stresului, anxietății, depresiei și altor provocări emoționale. Oferesc un spațiu sigur pentru explorarea gândurilor și sentimentelor."
        },
        speechTherapy: {
          title: "Terapie de Vorbire",
          description: "Servicii specializate de terapie a vorbirii pentru copii și adulți cu tulburări de comunicare, probleme de articulare și dezvoltarea abilităților lingvistice."
        },
        psychotherapy: {
          title: "Psihoterapie",
          description: "Sesiuni de psihoterapie individuală folosind tehnici evidence-based pentru tratamentul tulburărilor de sănătate mentală și promovarea vindecării emoționale pe termen lung."
        },
        coupleTherapy: {
          title: "Terapie de Cuplu",
          description: "Consiliere specializată pentru cupluri care doresc să-și îmbunătățească comunicarea, să rezolve conflictele și să-și întărească relația într-un mediu de sprijin."
        },
        individualTherapy: {
          title: "Terapie Individuală",
          description: "Sesiuni de terapie personalizate, unu la unu, concentrate pe nevoile specifice ale fiecărui client, oferind un spațiu confidențial pentru creștere și vindecare personală."
        }
      },
      // Written Work page
      writtenWork: {
        title: "Lucrări Scrise",
        subtitle: "Explorând conexiunea dintre minte și corp",
        bookTitle: "Psihosomatica",
        bookDescription: "O explorare profundă a relației dintre sănătatea mentală și cea fizică. Această carte oferă perspective valoroase despre modul în care emoțiile și stresul psihologic pot afecta corpul și vice versa, furnizând strategii practice pentru îmbunătățirea bunăstării generale.",
        buyBook: "Cumpără cartea",
        bookQuote: "Înțelegerea conexiunii dintre minte și corp este esențială pentru o viață echilibrată și sănătoasă."
      },
      // Contact page
      contact: {
        title: "Contact",
        subtitle: "Să începem împreună călătoria către bunăstare",
        getInTouch: "Ia legătura",
        contactInfo: "Informații de contact",
        workingHours: "Program de lucru",
        location: "Locație",
        phone: "Telefon",
        email: "Email",
        form: {
          name: "Nume complet",
          email: "Adresa de email",
          phone: "Numărul de telefon",
          subject: "Subiect",
          message: "Mesaj",
          send: "Trimite mesajul",
          nameRequired: "Numele este obligatoriu",
          emailRequired: "Email-ul este obligatoriu",
          emailInvalid: "Email-ul nu este valid",
          messageRequired: "Mesajul este obligatoriu",
          success: "Mesajul a fost trimis cu succes!",
          error: "A apărut o eroare. Vă rugăm să încercați din nou."
        },
        hours: {
          monday: "Luni",
          tuesday: "Marți", 
          wednesday: "Miercuri",
          thursday: "Joi",
          friday: "Vineri",
          saturday: "Sâmbătă",
          sunday: "Duminică",
          time: "09:00 - 18:00",
          closed: "Închis"
        },
        locationText: "Cabinetul de Psihologie\nBucurești, România",
        gdpr: "Toate informațiile sunt tratate confidențial conform GDPR."
      }
    }
  },
  en: {
    translation: {
      // Navigation
      nav: {
        about: "About Me",
        services: "Services", 
        writtenWork: "Written Work",
        contact: "Contact",
        languageToggle: "Română"
      },
      // Common
      readMore: "Read more",
      contactUs: "Contact us",
      bookSession: "Book a session",
      // Home page
      home: {
        title: "Ana Mihaela Popisteanu",
        subtitle: "Psychologist, Psychotherapist & Coach",
        description: "Providing professional psychological counseling, psychotherapy, and personal development coaching services in a calm and trustworthy environment.",
        cta: "Schedule a consultation"
      },
      // About page
      about: {
        title: "About Me",
        subtitle: "Experienced psychologist in human development",
        bio: "Ana Mihaela Popisteanu is a dedicated psychologist with extensive experience in mental health and personal development. With a warm and professional approach, she provides psychological counseling, psychotherapy, and coaching services for individuals seeking to improve their quality of life.\n\nWith years of experience working with diverse psychological challenges, Ana has built her reputation as a trustworthy professional capable of guiding clients through the healing and personal growth process. Her integrative approach combines modern therapy techniques with a deep understanding of human psychology.",
        education: "Education and Training",
        experience: "Professional Experience",
        approach: "My Approach",
        approachText: "I believe in a holistic approach to mental health that considers the whole person. Each client is unique, and the treatment plan is tailored to individual needs to ensure the best outcomes."
      },
      // Services page
      services: {
        title: "My Services",
        subtitle: "Professional mental health services tailored to your needs",
        coaching: {
          title: "Coaching and Personal Development",
          description: "Personalized coaching sessions to help you achieve your personal and professional goals, develop self-confidence, and improve performance in all aspects of life."
        },
        counseling: {
          title: "Psychological Counseling",
          description: "Professional counseling for managing stress, anxiety, depression, and other emotional challenges. I provide a safe space for exploring thoughts and feelings."
        },
        speechTherapy: {
          title: "Speech Therapy",
          description: "Specialized speech therapy services for children and adults with communication disorders, articulation problems, and language skill development."
        },
        psychotherapy: {
          title: "Psychotherapy",
          description: "Individual psychotherapy sessions using evidence-based techniques for treating mental health disorders and promoting long-term emotional healing."
        },
        coupleTherapy: {
          title: "Couple's Therapy",
          description: "Specialized counseling for couples looking to improve their communication, resolve conflicts, and strengthen their relationship in a supportive environment."
        },
        individualTherapy: {
          title: "Individual Therapy",
          description: "Personalized one-on-one therapy sessions focused on each client's specific needs, providing a confidential space for personal growth and healing."
        }
      },
      // Written Work page
      writtenWork: {
        title: "Written Work",
        subtitle: "Exploring the mind-body connection",
        bookTitle: "Psychosomatics",
        bookDescription: "A deep exploration of the relationship between mental and physical health. This book offers valuable insights into how emotions and psychological stress can affect the body and vice versa, providing practical strategies for improving overall well-being.",
        buyBook: "Buy the book",
        bookQuote: "Understanding the mind-body connection is essential for a balanced and healthy life."
      },
      // Contact page
      contact: {
        title: "Contact",
        subtitle: "Let's begin the journey to wellness together",
        getInTouch: "Get in touch",
        contactInfo: "Contact Information",
        workingHours: "Working Hours",
        location: "Location",
        phone: "Phone",
        email: "Email",
        form: {
          name: "Full Name",
          email: "Email Address", 
          phone: "Phone Number",
          subject: "Subject",
          message: "Message",
          send: "Send Message",
          nameRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Please enter a valid email",
          messageRequired: "Message is required",
          success: "Message sent successfully!",
          error: "An error occurred. Please try again."
        },
        hours: {
          monday: "Monday",
          tuesday: "Tuesday",
          wednesday: "Wednesday", 
          thursday: "Thursday",
          friday: "Friday",
          saturday: "Saturday",
          sunday: "Sunday",
          time: "09:00 - 18:00",
          closed: "Closed"
        },
        locationText: "Psychology Office\nBucharest, Romania",
        gdpr: "All information is treated confidentially in accordance with GDPR."
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ro',
  fallbackLng: 'ro',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;